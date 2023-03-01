import { en as loginFormEn } from "../../../services/iam/authentication/loginForm";
import { en as loginEn } from "../../../widgets/iam/authentication/login";

import { en as registerFormEn } from "../../../services/iam/authentication/registerForm";
import { en as registerEn } from "../../../widgets/iam/authentication/register";

import { en as forgotPasswordFormEn } from "../../../services/iam/authentication/forgotPasswordForm";
import { en as forgotPasswordEn } from "../../../widgets/iam/authentication/forgotPassword";

import { en as resetPasswordFormEn } from "../../../services/iam/authentication/resetPasswordForm";
import { en as resetPasswordEn } from "../../../widgets/iam/authentication/resetPassword";

import { en as verifyEmailFormEn } from "../../../services/iam/authentication/verifyEmailForm";
import { en as verifyEmailEn } from "../../../widgets/iam/authentication/verifyEmail";

const en = {
    ...loginFormEn,
    ...loginEn,
    ...registerEn,
    ...registerFormEn,
    ...forgotPasswordFormEn,
    ...forgotPasswordEn,
    ...resetPasswordFormEn,
    ...resetPasswordEn,
    ...verifyEmailFormEn,
    ...verifyEmailEn,
};

export { en };
