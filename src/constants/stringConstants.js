export const PAGE_NOT_ACCESSIBLE = 'You cannot access this page';
export const EMAIL_REQUIRED = "Please enter the email";
export const INCORRECT_EMAIL = "The email must be a valid email address";
export const PHONE_REQUIRED = "Please enter Phone Number";
export const INVALID_PHONE = "The phone number must be a valid phone number";
export const PASSWORD_REQUIRED = "Please enter the password";
export const INVALID_PASSWORD = "Password should be of at least 6 characters";
export const CONFIRM_PASSWORD_NOT_MATCHED = "Password and Confirm Password should match";
export const NAME_REQUIRED = name => `Please enter ${name || ''} Name`;
export const maximumLengthAllowed = (length, value) => `Maximum ${length} ${value ?? "Characters"} Allowed`;

