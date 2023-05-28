// Services - IAM
import { LoginForm } from "./services/iam/authentication/loginForm/ui/loginForm";
import { RegisterForm } from "./services/iam/authentication/registerForm/ui/registerForm";
import { ForgotPasswordForm } from "./services/iam/authentication/forgotPasswordForm/ui/forgotPasswordForm";
import { ResetPasswordForm } from "./services/iam/authentication/resetPasswordForm/ui/resetPasswordForm";
import { VerifyEmailForm } from "./services/iam/authentication/verifyEmailForm/ui/verifyEmailForm";

// Services - User - Profile - ChangePasswordForm
import { ChangePasswordForm } from "./services/iam/authentication/changePasswordForm/ui/changePasswordForm";

// Services - User - Profile - Security
import { Security } from "./services/user/ui/security";

// Services - User - Profile - AccountActivity
import { AccountActivity } from "./services/accountActivity/ui";

// Services - User - Profile - Referral
import { Referral } from "./services/user/ui/referral";

// Services - User - Profile
import { Profile } from "./services/user/ui/profile/profile";
import { ProfileDetails } from "./services/user/ui/profile/profileDetails";

// Services - Markets - V1
import { MarketsV1 } from "./services/markets/ui/marketsV1";

// Services - Ticker - V1
import { TickerV1 } from "./services/tickers/ui/ticker";

// Services - Trades
import { Trades } from "./services/trades/ui/trades";

// Widgets - Orderbook
import { OrderbookWidget } from "./widgets/orderbook/ui/orderbook";

// Widgets - IAM
import { Login } from "./widgets/iam/authentication/login/ui/login";
import { Register } from "./widgets/iam/authentication/register/ui/register";
import { ForgotPassword } from "./widgets/iam/authentication/forgotPassword/ui/forgotPassword";
import { ResetPassword } from "./widgets/iam/authentication/resetPassword/ui/resetPassword";
import { VerifyEmail } from "./widgets/iam/authentication/verifyEmail/ui/verifyEmail";

// Widgets - User - Profile
import { ProfileWidget } from "./widgets/user/ui/profile";

// Widgets - User - Profile - ApiKeys
import { ApiKeysWidget } from "./widgets/apiKeys/ui/apiKeys";

// Shared providers
import { ReduxProvider } from "./shared/providers/redux/redux";
import { CoreProvider } from "./shared/providers/core";

// Shared LIB - withAuth
import { withAuth } from "./shared/libs/withAuth";

// Shared UI - Buttons
import { Button } from "./shared/ui/button";
import { SecondaryButton } from "./shared/ui/secondaryButton";

// Shared UI - Inputs
import { Input } from "./shared/ui/input";
import { OTPInput } from "./shared/ui/otpInput";

// Shared UI - TabPanel
import { TabPanel } from "./shared/ui/tabPanel";

export {
    Trades,
    TabPanel,
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
    ChangePasswordForm,
    AccountActivity,
    Referral,
    Security,
    CoreProvider,
    Profile,
    ProfileDetails,
    ProfileWidget,
    MarketsV1,
    TickerV1,
    OrderbookWidget,
    ApiKeysWidget,
    withAuth,
};

export { useAppSelector } from "./shared/providers/redux/lib/useAppSelector";
export { useAppDispatch } from "./shared/providers/redux/lib/useAppDispatch";
