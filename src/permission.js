import router from './router'
import getPageTitle from '@/utils/getPageTitle'
import { useUserStore, usePermissionStore } from '@/store'
import NProgress from '@/utils/progress'
import { gotoCognitoLogin } from '@/utils/cognito'
import { WHITE_LIST } from '@/constants/whiteList'

const whiteList = WHITE_LIST

router.beforeEach( async( to, from, next ) => {
  NProgress.start()
  document.title = getPageTitle( to.meta?.title )

  const userStore = useUserStore()
  const permissionStore = usePermissionStore()

  try {
    if ( whiteList.includes( to.path ) ) {
      next()
      return
    }
    if ( !userStore.roles.length ) {
      // Call the backend interface /user/me
      const userInfo = await userStore.GET_USER_INFO()

      // Set the routes based on the backend role objects
      const accessRoutes = await permissionStore.SET_ROUTES( userInfo.roles )
      accessRoutes.forEach( route => {
        router.addRoute( route )
      } )

      next( { ...to, redirect : true } )
    } else {
      next()
    }
  } catch ( err ) {
    console.error( '[Permission] Failed to obtain user information. Redirecting to Cognito.', err )
    gotoCognitoLogin()
    NProgress.done()
  }
} )

/*

const whiteList = ['/login', '/callback']
router.beforeEach( async( to, from, next ) => {
  NProgress.start()
  document.title = getPageTitle( to.meta?.title )
  const hasToken = cookies.get( TOKEN )
  const userStore = useUserStore()
  const permissionStore = usePermissionStore()
  if ( hasToken && hasToken !== 'undefined' ) {
    if ( to.path === '/login' ) {
      next( { path : '/' } )
      NProgress.done()
    } else {
      const hasRoles = userStore.roles && userStore.roles.length > 0
      if ( hasRoles ) {
        next()
      } else {
        try {
          const { roles } = await userStore.GET_USER_INFO()
          const accessRoutes = await permissionStore.SET_ROUTES( roles )
          accessRoutes.forEach( item => {
            router.addRoute( item )
          } )
          next( { ...to, replace : true } )
        } catch ( error ) {
          await userStore.RESET_INFO()
          next( '/login' )
          NProgress.done()
        }
      }
    }
  } else {
    if ( whiteList.indexOf( to.path ) !== -1 ) {
      next()
    } else {
      next( '/login' )
      NProgress.done()
    }
  }
} )
*/
router.afterEach( () => {
  NProgress.done()
} )
