// TODO: split into separate files

// Services - IAM
import { LoginForm } from "./services/iam/authentication/loginForm/ui/loginForm";
import { RegisterForm } from "./services/iam/authentication/registerForm/ui/registerForm";
import { ForgotPasswordForm } from "./services/iam/authentication/forgotPasswordForm/ui/forgotPasswordForm";
import { ResetPasswordForm } from "./services/iam/authentication/resetPasswordForm/ui/resetPasswordForm";
import { VerifyEmailForm } from "./services/iam/authentication/verifyEmailForm/ui/verifyEmailForm";

// Services - User - Profile
import { Profile } from "./services/user/ui/profile/profile";
import { ProfileDetails } from "./services/user/ui/profile/profileDetails";
import { Referral } from "./services/user/ui/referral";
import { Security } from "./services/user/ui/security";
import { AccountActivity } from "./services/accountActivity/ui";
import { TwoFactorAuthForm } from "./services/user/ui/security/twoFactorAuthForm";
import { BackupKeyForm } from "./services/user/ui/security/backupKeyForm";
import { ChangePasswordForm } from "./services/iam/authentication/changePasswordForm/ui/changePasswordForm";
import { Settings } from "./services/user/ui/settings";
import { Help } from "./services/user/ui/help";

// Services - Markets - V1
import { MarketsV1 } from "./services/markets/ui/marketsV1";

// Services - Ticker - V1
import { TickerV1 } from "./services/tickers/ui/ticker";

// Services - Trades
import { Trades } from "./services/trades/ui/trades";

// Services - Wallets
import { Wallets } from "./services/wallets/ui";

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

// Widgets - Wallets
import { WalletDetailsWidget } from "./widgets/wallets/ui/walletDetails";

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

import { Beneficiaries } from "./services/withdrawal/ui/beneficiaries";
import { CreateCryptoBeneficiary } from "./services/withdrawal/ui/createCryptoBeneficiary";
import { ConfirmBeneficiary } from "./services/withdrawal/ui/confirmBeneficiary";
import { Deposit } from "./services/deposit/ui";
import { Withdrawal } from "./services/withdrawal/ui";

import { DepositHistory } from "./services/deposit/ui/depositHistory";
import { WithdrawalHistory } from "./services/withdrawal/ui/withdrawalHistory";
import { TransferHistory } from "./services/transfer/ui/transferHistory";

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
    Settings,
    Help,
    TwoFactorAuthForm,
    BackupKeyForm,
    CoreProvider,
    Profile,
    ProfileDetails,
    ProfileWidget,
    MarketsV1,
    TickerV1,
    OrderbookWidget,
    ApiKeysWidget,
    Wallets,
    WalletDetailsWidget,
    Beneficiaries,
    CreateCryptoBeneficiary,
    ConfirmBeneficiary,
    Deposit,
    Withdrawal,
    DepositHistory,
    WithdrawalHistory,
    TransferHistory,
    withAuth,
};

export { useAppSelector } from "./shared/providers/redux/lib/useAppSelector";
export { useAppDispatch } from "./shared/providers/redux/lib/useAppDispatch";
