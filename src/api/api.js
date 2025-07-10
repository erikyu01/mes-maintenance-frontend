// src/api/api.js

import axios from 'axios'
import { gotoCognitoLogin } from '@/utils/cognito'

// Base API URL from the .env file
const API_URL = import.meta.env.VITE_BACKEND_URL

const AUTH_API_URL = import.meta.env.VITE_USER_BACKEND_URL + '/api'

const api = axios.create( {
  baseURL : API_URL
} )

api.interceptors.response.use(
  response => response,
  error => {
    console.error( 'API Error:', error )
    return Promise.reject( error )
  }
)

export const authApi = axios.create( {
  baseURL : AUTH_API_URL,
  headers : {
    'Content-Type' : 'application/json'
  },
  withCredentials : true
} )

const WHITELIST_URLS = ['/auth/callback', '/auth/refresh', '/auth/logout']

authApi.interceptors.request.use(
  config => {
    const isWhitelisted = WHITELIST_URLS.some( url => config.url.includes( url ) )
    if ( isWhitelisted ) {
      console.log( `Request to auth whitelist: ${config.url}` )
    }
    return config
  },
  error => {
    return Promise.reject( error )
  }
)

authApi.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      !WHITELIST_URLS.some( url => originalRequest.url.includes( url ) )
    ) {
      originalRequest._retry = true
      try {
        await authApi.post( '/auth/refresh' )
        return authApi( originalRequest )
      } catch ( refreshErr ) {
        gotoCognitoLogin()
        return Promise.reject( refreshErr )
      }
    }
    return Promise.reject( error )
  }
)

export default { api, authApi }
