export const MAX_DESKTOP_WIDTH =  900;

export enum NAVIGATION {
    HOME = "/",

     /*************************** Login Routes ********************************************/
    LOGIN = "/login",
    SIGNUP = "/signup",
    // VERIFY_EMAIL = `${LOGIN}/verify-email`,
    // VERIFY_OTP = `${LOGIN}/verify`,
    // VALIDATE_OTP = `${LOGIN}/validate`,
    FORGOT_PASSWORD = `${LOGIN}/authgen`,
    APPOINTMENTS = `/appointments`,
    PRESCRIPTIONS = `/prescriptions`,
    RECORDS = `/records`,
    BILLING = `/bill`,
    // PASSWORD_RESET = `${LOGIN}/reset`,
    // LOGIN_PROFILE_UPDATE = `${LOGIN}/update`,
    // LOGOUT = "/logout",
    // AUTHGEN = `${LOGIN}/authgen`,
    // AUTHVAL = `${LOGIN}/authval`,
    // PIN_SETUP = `${LOGIN}/pin`
}