import { en as loginFormEn } from "../../../services/iam/authentication/loginForm/libs/i18n/en";
import { en as loginEn } from "../../../widgets/iam/authentication/login/libs/i18n/en";

import { en as registerFormEn } from "../../../services/iam/authentication/registerForm/libs/i18n/en";
import { en as registerEn } from "../../../widgets/iam/authentication/register/libs/i18n/en";

import { en as forgotPasswordFormEn } from "../../../services/iam/authentication/forgotPasswordForm/libs/i18n/en";

const en = {
    ...loginFormEn,
    ...loginEn,
    ...registerEn,
    ...registerFormEn,
    ...forgotPasswordFormEn,
};

export { en };
