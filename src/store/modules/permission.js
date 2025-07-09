import { defineStore } from 'pinia'
import { asyncRoutes, constantRoutes } from '@/router'

/**
 * 使用 meta.roles 来判断路由是否有权限
 * @param {Array} userRoleNames
 * @param {Object} route
 */

function hasPermission( userRoleNames, route ) {
  if ( route.meta && route.meta.roles ) {
    return userRoleNames.some( roleName => route.meta.roles.includes( roleName ) )
  } else {
    return true
  }
}

/**
 * 递归过滤 asyncRoutes
 * @param {Array} routes
 * @param {Array} userRoleNames
 */

export function filterAsyncRoutes( routes, userRoleNames ) {
  const res = []

  routes.forEach( route => {
    const tmp = { ...route }
    if ( hasPermission( userRoleNames, tmp ) ) {
      if ( tmp.children ) {
        tmp.children = filterAsyncRoutes( tmp.children, userRoleNames )
      }
      res.push( tmp )
    }
  } )
  return res
}

const usePermissionStore = defineStore( {
  id : 'permission',
  state : () => ( {
    routes : [],
    addRoutes : [],
    directivePermission : []
  } ),
  actions : {
    /**
     * 根据用户角色生成可访问的路由
     * @param {Array} roles 后端返回的角色对象数组
     */
    SET_ROUTES( roles ) {
      return new Promise( resolve => {
        const userRoleNames = roles.map( role => role.name )
        let accessedRoutes

        if ( userRoleNames.includes( 'ADMIN' ) ) {
          accessedRoutes = asyncRoutes || []
        } else {
          accessedRoutes = filterAsyncRoutes( asyncRoutes, userRoleNames )
        }

        this.routes = accessedRoutes
        this.routes = constantRoutes.concat( accessedRoutes )
        resolve( accessedRoutes )
      } )
    },
    /**
     * 设置自定义指令权限（如果有用到指令 v-permission）
     * @param {Array} permissions
     */
    SET_DIRECTIVE_PERMISSION( permissions ) {
      this.directivePermission = permissions
    }
  }
} )

/*
/!**
 * 使用meta.role来确定当前用户是否有权限
 * @param roles
 * @param route
 *!/
function hasPermission( roles, route ) {
  if ( route.meta && route.meta.roles ) {
    return roles.some( role => route.meta.roles.includes( role ) )
  } else {
    return true
  }
}

/!**
 * 通过递归过滤异步路由表
 * @param routes asyncRoutes
 * @param roles
 *!/
export function filterAsyncRoutes( routes, roles ) {
  const res = []

  routes.forEach( route => {
    const tmp = { ...route }
    if ( hasPermission( roles, tmp ) ) {
      if ( tmp.children ) {
        tmp.children = filterAsyncRoutes( tmp.children, roles )
      }
      res.push( tmp )
    }
  } )

  return res
}

const usePermissionStore = defineStore( {
  id : 'permission',
  state : () => {
    return {
      routes : [],
      addRoutes : [],
      directivePermission : []
    }
  },
  actions : {
    SET_ROUTES( roles ) {
      return new Promise( resolve => {
        let accessedRoutes
        if ( roles.includes( 'admin' ) ) {
          accessedRoutes = asyncRoutes || []
        } else {
          accessedRoutes = filterAsyncRoutes( asyncRoutes, roles )
        }
        this.addRoutes = accessedRoutes
        this.routes = constantRoutes.concat( accessedRoutes )
        resolve( accessedRoutes )
      } )
    },
    SET_DIRECTIVE_ROLE( roles ) {
      this.directivePermission = roles
    }
  }
} )*/

export default usePermissionStore
