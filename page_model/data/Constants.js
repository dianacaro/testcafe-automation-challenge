import dotenv from 'dotenv'
dotenv.config()

export const BASE_URL = process.env.BASE_URL
export const INVALID_USER_ERROR_MSG = 'Epic sadface: Username and password do not match any user in this service'
export const EMPTY_USERNAME_ERROR_MSG = 'Epic sadface: Username is required'
export const EMPTY_PASSWORD_ERROR_MSG = 'Epic sadface: Password is required'
export const OVERVIEW_TITLE = 'Checkout: Overview'
export const CONFIRMATION_MESSAGE ='THANK YOU FOR YOUR ORDER'

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER:{
        USERNAME: 'invalid_user',
        PASSWORD: 'invalid_password'
    }   
}

export const USER_INFORMATION = {
    VALID_USER_INFO:{
        FIRST_NAME: process.env.FIRST_NAME,
        LAST_NAME: process.env.LAST_NAME,
        ZIP_CODE: process.env.ZIP_CODE
    } 
}