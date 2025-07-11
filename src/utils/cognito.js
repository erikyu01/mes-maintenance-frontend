export function gotoCognitoLogin() {
  const COGNITO_DOMAIN = 'https://us-east-2efikszrut.auth.us-east-2.amazoncognito.com'
  const CLIENT_ID = '4ih0c0267q6mrckj7fdsj2c7ct'
  const REDIRECT_URI = encodeURIComponent( import.meta.env.VITE_CALL_BACK_URL )
  const RESPONSE_TYPE = 'code'
  const SCOPE = 'openid+profile+email'
  window.location.href = `${COGNITO_DOMAIN}/login?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}`
}
