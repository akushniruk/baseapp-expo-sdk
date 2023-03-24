// Services - IAM
import { LoginForm } from "./services/iam/authentication/loginForm/ui/loginForm";
import { RegisterForm } from "./services/iam/authentication/registerForm/ui/registerForm";
import { ForgotPasswordForm } from "./services/iam/authentication/forgotPasswordForm/ui/forgotPasswordForm";
import { ResetPasswordForm } from "./services/iam/authentication/resetPasswordForm/ui/resetPasswordForm";
import { VerifyEmailForm } from "./services/iam/authentication/verifyEmailForm/ui/verifyEmailForm";

// Services - User - Profile
import { Profile } from "./services/user";
import { ProfileDetails } from "./services/user";

// Widgets - IAM
import { Login } from "./widgets/iam/authentication/login/ui/login";
import { Register } from "./widgets/iam/authentication/register/ui/register";
import { ForgotPassword } from "./widgets/iam/authentication/forgotPassword/ui/forgotPassword";
import { ResetPassword } from "./widgets/iam/authentication/resetPassword/ui/resetPassword";
import { VerifyEmail } from "./widgets/iam/authentication/verifyEmail/ui/verifyEmail";

// Widgets - User - Profile
import { ProfileWidget } from "./widgets/user/ui/profile";

// Shared providers
import { ReduxProvider } from "./shared/providers/redux/redux";
import { CoreProvider } from "./shared/providers/core";

// Shared LIB - withAuth
import { withAuth } from "../src/shared/libs/withAuth";

// Shared UI - Buttons
import { Button } from "./shared/ui/button";
import { SecondaryButton } from "./shared/ui/secondaryButton";

// Shared UI - Inputs
import { Input } from "./shared/ui/input";
import { OTPInput } from "./shared/ui/otpInput";

export {
    Button,
    SecondaryButton,
    Input,
    OTPInput,
    ReduxProvider,
    Login,
    Register,
    ForgotPassword,
    ResetPassword,
    VerifyEmail,
    LoginForm,
    RegisterForm,
    ForgotPasswordForm,
    ResetPasswordForm,
    VerifyEmailForm,
    CoreProvider,
    Profile,
    ProfileDetails,
    ProfileWidget,
    withAuth,
};

export { useAppSelector } from "./shared/providers/redux/lib/useAppSelector";
export { useAppDispatch } from "./shared/providers/redux/lib/useAppDispatch";
