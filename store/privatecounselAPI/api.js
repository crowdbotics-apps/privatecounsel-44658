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
function modules_paypal_service_accept_claim_create(payload) {
  return privatecounselAPI.post(
    `/modules/paypal/service/${payload.id}/accept-claim/`
  )
}
function modules_paypal_service_activate_plan_create(payload) {
  return privatecounselAPI.post(
    `/modules/paypal/service/${payload.id}/activate-plan/`
  )
}
function modules_paypal_service_activate_subscription_create(payload) {
  return privatecounselAPI.post(
    `/modules/paypal/service/${payload.id}/activate-subscription/`
  )
}
function modules_paypal_service_authorize_payment_for_order_create(payload) {
  return privatecounselAPI.post(
    `/modules/paypal/service/${payload.id}/authorize-payment-for-order/`
  )
}
function modules_paypal_service_cancel_subscription_create(payload) {
  return privatecounselAPI.post(
    `/modules/paypal/service/${payload.id}/cancel-subscription/`
  )
}
function modules_paypal_service_capture_authorized_payment_create(payload) {
  return privatecounselAPI.post(
    `/modules/paypal/service/${payload.id}/capture-authorized-payment/`
  )
}
function modules_paypal_service_capture_authorized_payment_on_subscription_create(
  payload
) {
  return privatecounselAPI.post(
    `/modules/paypal/service/${payload.id}/capture-authorized-payment-on-subscription/`
  )
}
function modules_paypal_service_capture_payment_for_order_create(payload) {
  return privatecounselAPI.post(
    `/modules/paypal/service/${payload.id}/capture-payment-for-order/`
  )
}
function modules_paypal_service_confirm_order_create(payload) {
  return privatecounselAPI.post(
    `/modules/paypal/service/${payload.id}/confirm-order/`
  )
}
function modules_paypal_service_deactivate_plan_create(payload) {
  return privatecounselAPI.post(
    `/modules/paypal/service/${payload.id}/deactivate-plan/`
  )
}
function modules_paypal_service_get_authorized_payment_retrieve(payload) {
  return privatecounselAPI.get(
    `/modules/paypal/service/${payload.id}/get-authorized-payment/`
  )
}
function modules_paypal_service_get_captured_payment_retrieve(payload) {
  return privatecounselAPI.get(
    `/modules/paypal/service/${payload.id}/get-captured-payment/`
  )
}
function modules_paypal_service_get_dispute_details_retrieve(payload) {
  return privatecounselAPI.get(
    `/modules/paypal/service/${payload.id}/get-dispute-details/`
  )
}
function modules_paypal_service_get_invoice_details_retrieve(payload) {
  return privatecounselAPI.get(
    `/modules/paypal/service/${payload.id}/get-invoice-details/`
  )
}
function modules_paypal_service_get_order_details_retrieve(payload) {
  return privatecounselAPI.get(
    `/modules/paypal/service/${payload.id}/get-order-details/`
  )
}
function modules_paypal_service_get_plan_details_retrieve(payload) {
  return privatecounselAPI.get(
    `/modules/paypal/service/${payload.id}/get-plan-details/`
  )
}
function modules_paypal_service_get_product_details_retrieve(payload) {
  return privatecounselAPI.get(
    `/modules/paypal/service/${payload.id}/get-product-details/`
  )
}
function modules_paypal_service_get_refund_details_retrieve(payload) {
  return privatecounselAPI.get(
    `/modules/paypal/service/${payload.id}/get-refund-details/`
  )
}
function modules_paypal_service_get_subscription_details_retrieve(payload) {
  return privatecounselAPI.get(
    `/modules/paypal/service/${payload.id}/get-subscription-details/`
  )
}
function modules_paypal_service_refund_capture_payment_create(payload) {
  return privatecounselAPI.post(
    `/modules/paypal/service/${payload.id}/refund-capture-payment/`
  )
}
function modules_paypal_service_send_invoice_create(payload) {
  return privatecounselAPI.post(
    `/modules/paypal/service/${payload.id}/send-invoice/`
  )
}
function modules_paypal_service_suspend_subscription_create(payload) {
  return privatecounselAPI.post(
    `/modules/paypal/service/${payload.id}/suspend-subscription/`
  )
}
function modules_paypal_service_create_draft_invoice_create(payload) {
  return privatecounselAPI.post(`/modules/paypal/service/create-draft-invoice/`)
}
function modules_paypal_service_create_order_create(payload) {
  return privatecounselAPI.post(`/modules/paypal/service/create-order/`)
}
function modules_paypal_service_create_plan_create(payload) {
  return privatecounselAPI.post(`/modules/paypal/service/create-plan/`)
}
function modules_paypal_service_create_product_create(payload) {
  return privatecounselAPI.post(`/modules/paypal/service/create-product/`)
}
function modules_paypal_service_create_subscription_create(payload) {
  return privatecounselAPI.post(`/modules/paypal/service/create-subscription/`)
}
function modules_paypal_service_create_web_hook_create(payload) {
  return privatecounselAPI.post(`/modules/paypal/service/create-web-hook/`)
}
function modules_paypal_service_generate_invoice_number_create(payload) {
  return privatecounselAPI.post(
    `/modules/paypal/service/generate-invoice-number/`
  )
}
function modules_paypal_service_list_disputes_retrieve(payload) {
  return privatecounselAPI.get(`/modules/paypal/service/list-disputes/`)
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
  modules_paypal_service_accept_claim_create,
  modules_paypal_service_activate_plan_create,
  modules_paypal_service_activate_subscription_create,
  modules_paypal_service_authorize_payment_for_order_create,
  modules_paypal_service_cancel_subscription_create,
  modules_paypal_service_capture_authorized_payment_create,
  modules_paypal_service_capture_authorized_payment_on_subscription_create,
  modules_paypal_service_capture_payment_for_order_create,
  modules_paypal_service_confirm_order_create,
  modules_paypal_service_deactivate_plan_create,
  modules_paypal_service_get_authorized_payment_retrieve,
  modules_paypal_service_get_captured_payment_retrieve,
  modules_paypal_service_get_dispute_details_retrieve,
  modules_paypal_service_get_invoice_details_retrieve,
  modules_paypal_service_get_order_details_retrieve,
  modules_paypal_service_get_plan_details_retrieve,
  modules_paypal_service_get_product_details_retrieve,
  modules_paypal_service_get_refund_details_retrieve,
  modules_paypal_service_get_subscription_details_retrieve,
  modules_paypal_service_refund_capture_payment_create,
  modules_paypal_service_send_invoice_create,
  modules_paypal_service_suspend_subscription_create,
  modules_paypal_service_create_draft_invoice_create,
  modules_paypal_service_create_order_create,
  modules_paypal_service_create_plan_create,
  modules_paypal_service_create_product_create,
  modules_paypal_service_create_subscription_create,
  modules_paypal_service_create_web_hook_create,
  modules_paypal_service_generate_invoice_number_create,
  modules_paypal_service_list_disputes_retrieve,
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
