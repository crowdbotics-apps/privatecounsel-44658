import axios from "axios"
const privatecounselAPI = axios.create({
  baseURL: "https://privatecounsel-44658.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return privatecounselAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return privatecounselAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return privatecounselAPI.post(`/api/v1/signup/`, payload)
}
function modules_signature_signature_list(payload) {
  return privatecounselAPI.get(`/modules/signature/signature/`)
}
function modules_signature_signature_retrieve(payload) {
  return privatecounselAPI.get(`/modules/signature/signature/${payload.id}/`)
}
function modules_signature_upload_signature_create(payload) {
  return privatecounselAPI.post(`/modules/signature/upload_signature/`)
}
function modules_social_auth_apple_connect_create(payload) {
  return privatecounselAPI.post(`/modules/social-auth/apple/connect/`, payload)
}
function modules_social_auth_apple_login_create(payload) {
  return privatecounselAPI.post(`/modules/social-auth/apple/login/`, payload)
}
function modules_social_auth_facebook_connect_create(payload) {
  return privatecounselAPI.post(
    `/modules/social-auth/facebook/connect/`,
    payload
  )
}
function modules_social_auth_facebook_login_create(payload) {
  return privatecounselAPI.post(`/modules/social-auth/facebook/login/`, payload)
}
function modules_social_auth_google_connect_create(payload) {
  return privatecounselAPI.post(`/modules/social-auth/google/connect/`, payload)
}
function modules_social_auth_google_login_create(payload) {
  return privatecounselAPI.post(`/modules/social-auth/google/login/`, payload)
}
function modules_social_auth_socialaccounts_list(payload) {
  return privatecounselAPI.get(`/modules/social-auth/socialaccounts/`)
}
function modules_social_auth_socialaccounts_disconnect_create(payload) {
  return privatecounselAPI.post(
    `/modules/social-auth/socialaccounts/${payload.id}/disconnect/`,
    payload
  )
}
function rest_auth_login_create(payload) {
  return privatecounselAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return privatecounselAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return privatecounselAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return privatecounselAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return privatecounselAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return privatecounselAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return privatecounselAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return privatecounselAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return privatecounselAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return privatecounselAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return privatecounselAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_signature_signature_list,
  modules_signature_signature_retrieve,
  modules_signature_upload_signature_create,
  modules_social_auth_apple_connect_create,
  modules_social_auth_apple_login_create,
  modules_social_auth_facebook_connect_create,
  modules_social_auth_facebook_login_create,
  modules_social_auth_google_connect_create,
  modules_social_auth_google_login_create,
  modules_social_auth_socialaccounts_list,
  modules_social_auth_socialaccounts_disconnect_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
