export const MAX_DESKTOP_WIDTH =  900;
export const PAGE_PADDING_INLINE = 20;

export const NAVIGATION = {
  HOME: "/",

  /*************************** Login Routes ********************************************/
  LOGIN: "/login",
  SIGNUP: "/signup",
  ABOUT_US: "/about",
  TERMS: "/terms",
  PRIVACY: "/privacy",
  CONTACT_US: "/contact",
  FORGOT_PASSWORD: `/login/authgen`,
  APPOINTMENTS: `/appointments`,
  PRESCRIPTIONS: `/prescriptions`,
  RECORDS: `/records`,
  BILLING: `/bill`,
  MISSION_VISION: `/goals`,
} as const;


export type ContactUsFormType = {
    name: string,
    email: string,
    subject: string,
    message: string
}