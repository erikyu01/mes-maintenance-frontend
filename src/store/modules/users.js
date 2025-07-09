import { defineStore } from 'pinia'
import { logout, getCurrentUser } from '@/api/auth'
import { resetRouter } from '@/router'
import useTagsViewStore from './tagsView'

const useUserStore = defineStore( {
  id : 'users',
  state : () => ( {
    uid : '',
    username : '',
    firstName : '',
    lastName : '',
    avatar : '',
    phone : '',
    email : '',
    title : '',
    departmentId : null,
    isVerified : false,
    enabled : true,
    roles : [],
    permissions : []
  } ),
  actions : {
    async GET_USER_INFO() {
      try {
        const { data } = await getCurrentUser()
        // console.log( '[Pinia User] getCurrentUser data:', data )
        const user = data.data
        this.uid = user.id || ''
        this.username = user.username || ''
        this.firstName = user.first_name || ''
        this.lastName = user.last_name || ''
        this.avatar = user.image_path || ''
        this.phone = user.phone_number || ''
        this.email = user.email || ''
        this.title = user.title || ''
        this.departmentId = user.department_id || null
        this.isVerified = user.is_verified || false
        this.enabled = user.enabled ?? true
        // roles
        this.roles = user.roles || []
        // Flatten all permissions
        const permissionSet = new Set()
        user.roles?.forEach( role => {
          role.permissions?.forEach( permission => {
            permissionSet.add( permission.name )
          } )
        } )
        this.permissions = Array.from( permissionSet )
        // console.log( '[Pinia User] Store State:', this.$state )
        return {
          uid : this.uid,
          roles : this.roles,
          permissions : this.permissions
        }
      } catch ( error ) {
        console.error( 'Failed to obtain user information', error )
        throw error
      }
    },
    async LOGIN_OUT() {
      try {
        const res = await logout()
        await this.RESET_INFO()
        return res.data.data
      } catch ( error ) {
        await this.RESET_INFO()
        throw error
      }
    },
    async RESET_INFO() {
      return new Promise( resolve => {
        const tagsViewStore = useTagsViewStore()
        this.$reset()
        resetRouter()
        tagsViewStore.DEL_ALL_VIEWS( null )
        resolve()
      } )
    }
  }
} )
/*
const useUserStore = defineStore( {
  id : 'users',
  state : () => {
    return {
      token : cookies.get( TOKEN ),
      uid : '9527',
      avatar : AVATAR,
      name : '灰是小灰灰的灰',
      phone : '15988888888',
      email : '454539387@qq.com',
      identity : '',
      roles : []
    }
  },
  actions : {
    SET_TOKEN( token = '' ) {
      token ? cookies.set( TOKEN, token ) : cookies.remove( TOKEN )
      this.token = token
    },
    async GET_USER_INFO() {
      try {
        const { code, data } = await getInfo()
        if ( code == 200 ) {
          const { id, name, avatar, roles, phone, email, identity } = data
          this.uid = id || '9527'
          this.name = name || ''
          this.phone = phone || ''
          this.email = email || ''
          this.identity = identity || ''
          this.avatar = avatar || AVATAR
          this.roles = roles || ['editor']
          return {
            ...data,
            uid : this.uid,
            roles : this.roles
          }
        }
      } catch ( error ) {
        return error
      }
    },
    async LOGIN_OUT() {
      try {
        const { code } = await logout( this.token )
        if ( code == 200 ) {
          this.token = ''
          this.name = ''
          this.avatar = ''
          this.phone = ''
          this.email = ''
          this.identity = ''
          this.roles = []
          this.RESET_INFO()
        }
      } catch ( error ) {
        return error
      }
    },
    // 清空所有登录信息
    RESET_INFO() {
      return new Promise( resolve => {
        const tagsViewStore = useTagsViewStore()
        cookies.clearAll()
        resetRouter()
        tagsViewStore.DEL_ALL_VIEWS( null )
        resolve()
      } )
    }
  }
} )*/
export default useUserStore
