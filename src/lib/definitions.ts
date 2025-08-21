export const MAX_DESKTOP_WIDTH =  900;

export const NAVIGATION = {
  HOME: "/",

  /*************************** Login Routes ********************************************/
  LOGIN: "/login",
  SIGNUP: "/signup",
  ABOUT_US: "/about",
  TERMS: "/terms",
  PRIVACY: "/privacy",
  CONTACT_US: "/contact",
  // VERIFY_EMAIL: `/login/verify-email`,
  // VERIFY_OTP: `/login/verify`,
  // VALIDATE_OTP: `/login/validate`,
  FORGOT_PASSWORD: `/login/authgen`,
  APPOINTMENTS: `/appointments`,
  PRESCRIPTIONS: `/prescriptions`,
  RECORDS: `/records`,
  BILLING: `/bill`,
  // PASSWORD_RESET: `/login/reset`,
  // LOGIN_PROFILE_UPDATE: `/login/update`,
  // LOGOUT: "/logout",
  // AUTHGEN: `/login/authgen`,
  // AUTHVAL: `/login/authval`,
  // PIN_SETUP: `/login/pin`
} as const;


export type ContactUsFormType = {
    name: string,
    email: string,
    subject: string,
    message: string
}