import { authApi } from './api'

export const refresh = () => {
  const refreshToken = localStorage.getItem( 'refresh_token' )
  if ( !refreshToken ) {
    return Promise.reject( new Error( 'No refresh token' ) )
  }
  return authApi.post( '/auth/refresh', { refresh_token : refreshToken } ).then( res => {
    if ( res.data?.data ) {
      const tokenData = res.data.data
      localStorage.setItem( 'access_token', tokenData.access_token )
      localStorage.setItem( 'refresh_token', tokenData.refresh_token )
      localStorage.setItem( 'id_token', tokenData.id_token )
    }
    return res
  } )
}

export const callback = code => {
  return authApi.post( '/auth/callback', { code } ).then( res => {
    if ( res.data?.data ) {
      const tokenData = res.data.data

      localStorage.setItem( 'access_token', tokenData.access_token )
      localStorage.setItem( 'refresh_token', tokenData.refresh_token )
      localStorage.setItem( 'id_token', tokenData.id_token )
    }
    return res
  } )
}

export const getCurrentUser = () => {
  return authApi.get( '/user/me' )
}

export const logout = () => {
  return authApi.post( '/auth/logout' )
}
