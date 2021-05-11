
export const BASE_URL = process.env.NODE_ENV === "production" ? "https://strapi-api-holidaze.herokuapp.com" : "http://localhost:1337"; 


export const TOKEN_PATH = '/auth/local';

export const HOTEL_PATH = '/establishments';
export const INBOX_PATH = '/messages';
export const ENQUIRIES_PATH = '/booking-enquiries';
