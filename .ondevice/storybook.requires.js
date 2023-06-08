/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./src/shared",
    files: "**/**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src\\/shared(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
  {
    titlePrefix: "",
    directory: "./src/services",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src\\/services(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
  {
    titlePrefix: "",
    directory: "./src/services",
    files: "**/**/**/**/*.stories.@(js|jsx|ts|tsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src\\/services(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$",
  },
  {
    titlePrefix: "",
    directory: "./src/widgets",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src\\/widgets(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
  {
    titlePrefix: "",
    directory: "./src/widgets",
    files: "**/**/**/**/*.stories.@(js|jsx|ts|tsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src\\/widgets(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$",
  },
];

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./src/shared/ui/alerts/ui/stories/AlertComponent.stories.tsx": require("../src/shared/ui/alerts/ui/stories/AlertComponent.stories.tsx"),
    "./src/shared/ui/button/stories/Button.stories.tsx": require("../src/shared/ui/button/stories/Button.stories.tsx"),
    "./src/shared/ui/copyField/stories/CopyField.stories.tsx": require("../src/shared/ui/copyField/stories/CopyField.stories.tsx"),
    "./src/shared/ui/input/stories/Input.stories.tsx": require("../src/shared/ui/input/stories/Input.stories.tsx"),
    "./src/shared/ui/input/stories/InputV2.stories.tsx": require("../src/shared/ui/input/stories/InputV2.stories.tsx"),
    "./src/shared/ui/modal/stories/Modal.stories.tsx": require("../src/shared/ui/modal/stories/Modal.stories.tsx"),
    "./src/shared/ui/otpInput/stories/OTPInput.stories.tsx": require("../src/shared/ui/otpInput/stories/OTPInput.stories.tsx"),
    "./src/shared/ui/secondaryButton/stories/SecondaryButton.stories.tsx": require("../src/shared/ui/secondaryButton/stories/SecondaryButton.stories.tsx"),
    "./src/shared/ui/tabPanel/stories/TabPanel.stories.tsx": require("../src/shared/ui/tabPanel/stories/TabPanel.stories.tsx"),
    "./src/shared/ui/themeSwitcher/stories/ThemeSwitcher.stories.tsx": require("../src/shared/ui/themeSwitcher/stories/ThemeSwitcher.stories.tsx"),
    "./src/services/accountActivity/stories/AccountActivity.stories.tsx": require("../src/services/accountActivity/stories/AccountActivity.stories.tsx"),
    "./src/services/apiKeys/stories/ApiKeys2FAModal.stories.tsx": require("../src/services/apiKeys/stories/ApiKeys2FAModal.stories.tsx"),
    "./src/services/apiKeys/stories/ApiKeysActivate2FA.stories.tsx": require("../src/services/apiKeys/stories/ApiKeysActivate2FA.stories.tsx"),
    "./src/services/apiKeys/stories/ApiKeysCreateModal.stories.tsx": require("../src/services/apiKeys/stories/ApiKeysCreateModal.stories.tsx"),
    "./src/services/apiKeys/stories/ApiKeysTable.stories.tsx": require("../src/services/apiKeys/stories/ApiKeysTable.stories.tsx"),
    "./src/services/deposit/stories/DepositHistory.stories.tsx": require("../src/services/deposit/stories/DepositHistory.stories.tsx"),
    "./src/services/iam/authentication/changePasswordForm/stories/ChangePasswordForm.stories.tsx": require("../src/services/iam/authentication/changePasswordForm/stories/ChangePasswordForm.stories.tsx"),
    "./src/services/iam/authentication/forgotPasswordForm/stories/ForgotPasswordForm.stories.tsx": require("../src/services/iam/authentication/forgotPasswordForm/stories/ForgotPasswordForm.stories.tsx"),
    "./src/services/iam/authentication/loginForm/stories/LoginForm.stories.tsx": require("../src/services/iam/authentication/loginForm/stories/LoginForm.stories.tsx"),
    "./src/services/iam/authentication/registerForm/stories/RegisterForm.stories.tsx": require("../src/services/iam/authentication/registerForm/stories/RegisterForm.stories.tsx"),
    "./src/services/iam/authentication/resetPasswordForm/stories/ResetPasswordForm.stories.tsx": require("../src/services/iam/authentication/resetPasswordForm/stories/ResetPasswordForm.stories.tsx"),
    "./src/services/iam/authentication/verifyEmailForm/stories/VerifyEmailForm.stories.tsx": require("../src/services/iam/authentication/verifyEmailForm/stories/VerifyEmailForm.stories.tsx"),
    "./src/services/markets/stories/Markets.stories.tsx": require("../src/services/markets/stories/Markets.stories.tsx"),
    "./src/services/markets/stories/MarketsCarousel.stories.tsx": require("../src/services/markets/stories/MarketsCarousel.stories.tsx"),
    "./src/services/order/stories/OrderForm.stories.tsx": require("../src/services/order/stories/OrderForm.stories.tsx"),
    "./src/services/orderbook/stories/OrderbookAsks.stories.tsx": require("../src/services/orderbook/stories/OrderbookAsks.stories.tsx"),
    "./src/services/tickers/stories/Ticker.stories.tsx": require("../src/services/tickers/stories/Ticker.stories.tsx"),
    "./src/services/trades/stories/Trades.stories.tsx": require("../src/services/trades/stories/Trades.stories.tsx"),
    "./src/services/transfer/stories/TransferHistory.stories.tsx": require("../src/services/transfer/stories/TransferHistory.stories.tsx"),
    "./src/services/user/stories/BackupKeyForm.stories.tsx": require("../src/services/user/stories/BackupKeyForm.stories.tsx"),
    "./src/services/user/stories/Help.stories.tsx": require("../src/services/user/stories/Help.stories.tsx"),
    "./src/services/user/stories/ProfileDetails.stories.tsx": require("../src/services/user/stories/ProfileDetails.stories.tsx"),
    "./src/services/user/stories/ProfileNavigation.stories.tsx": require("../src/services/user/stories/ProfileNavigation.stories.tsx"),
    "./src/services/user/stories/Referral.stories.tsx": require("../src/services/user/stories/Referral.stories.tsx"),
    "./src/services/user/stories/Security.stories.tsx": require("../src/services/user/stories/Security.stories.tsx"),
    "./src/services/user/stories/Settings.stories.tsx": require("../src/services/user/stories/Settings.stories.tsx"),
    "./src/services/user/stories/TwoFactorAuthForm.stories.tsx": require("../src/services/user/stories/TwoFactorAuthForm.stories.tsx"),
    "./src/services/wallets/stories/CryptoIcon.stories.tsx": require("../src/services/wallets/stories/CryptoIcon.stories.tsx"),
    "./src/services/wallets/stories/WalletDetails.stories.tsx": require("../src/services/wallets/stories/WalletDetails.stories.tsx"),
    "./src/services/wallets/stories/Wallets.stories.tsx": require("../src/services/wallets/stories/Wallets.stories.tsx"),
    "./src/services/withdrawal/stories/WithdrawalHistory.stories.tsx": require("../src/services/withdrawal/stories/WithdrawalHistory.stories.tsx"),
    "./src/services/accountActivity/stories/AccountActivity.stories.tsx": require("../src/services/accountActivity/stories/AccountActivity.stories.tsx"),
    "./src/services/apiKeys/stories/ApiKeys2FAModal.stories.tsx": require("../src/services/apiKeys/stories/ApiKeys2FAModal.stories.tsx"),
    "./src/services/apiKeys/stories/ApiKeysActivate2FA.stories.tsx": require("../src/services/apiKeys/stories/ApiKeysActivate2FA.stories.tsx"),
    "./src/services/apiKeys/stories/ApiKeysCreateModal.stories.tsx": require("../src/services/apiKeys/stories/ApiKeysCreateModal.stories.tsx"),
    "./src/services/apiKeys/stories/ApiKeysTable.stories.tsx": require("../src/services/apiKeys/stories/ApiKeysTable.stories.tsx"),
    "./src/services/deposit/stories/DepositHistory.stories.tsx": require("../src/services/deposit/stories/DepositHistory.stories.tsx"),
    "./src/services/iam/authentication/changePasswordForm/stories/ChangePasswordForm.stories.tsx": require("../src/services/iam/authentication/changePasswordForm/stories/ChangePasswordForm.stories.tsx"),
    "./src/services/iam/authentication/forgotPasswordForm/stories/ForgotPasswordForm.stories.tsx": require("../src/services/iam/authentication/forgotPasswordForm/stories/ForgotPasswordForm.stories.tsx"),
    "./src/services/iam/authentication/loginForm/stories/LoginForm.stories.tsx": require("../src/services/iam/authentication/loginForm/stories/LoginForm.stories.tsx"),
    "./src/services/iam/authentication/registerForm/stories/RegisterForm.stories.tsx": require("../src/services/iam/authentication/registerForm/stories/RegisterForm.stories.tsx"),
    "./src/services/iam/authentication/resetPasswordForm/stories/ResetPasswordForm.stories.tsx": require("../src/services/iam/authentication/resetPasswordForm/stories/ResetPasswordForm.stories.tsx"),
    "./src/services/iam/authentication/verifyEmailForm/stories/VerifyEmailForm.stories.tsx": require("../src/services/iam/authentication/verifyEmailForm/stories/VerifyEmailForm.stories.tsx"),
    "./src/services/markets/stories/Markets.stories.tsx": require("../src/services/markets/stories/Markets.stories.tsx"),
    "./src/services/markets/stories/MarketsCarousel.stories.tsx": require("../src/services/markets/stories/MarketsCarousel.stories.tsx"),
    "./src/services/order/stories/OrderForm.stories.tsx": require("../src/services/order/stories/OrderForm.stories.tsx"),
    "./src/services/orderbook/stories/OrderbookAsks.stories.tsx": require("../src/services/orderbook/stories/OrderbookAsks.stories.tsx"),
    "./src/services/tickers/stories/Ticker.stories.tsx": require("../src/services/tickers/stories/Ticker.stories.tsx"),
    "./src/services/trades/stories/Trades.stories.tsx": require("../src/services/trades/stories/Trades.stories.tsx"),
    "./src/services/transfer/stories/TransferHistory.stories.tsx": require("../src/services/transfer/stories/TransferHistory.stories.tsx"),
    "./src/services/user/stories/BackupKeyForm.stories.tsx": require("../src/services/user/stories/BackupKeyForm.stories.tsx"),
    "./src/services/user/stories/Help.stories.tsx": require("../src/services/user/stories/Help.stories.tsx"),
    "./src/services/user/stories/ProfileDetails.stories.tsx": require("../src/services/user/stories/ProfileDetails.stories.tsx"),
    "./src/services/user/stories/ProfileNavigation.stories.tsx": require("../src/services/user/stories/ProfileNavigation.stories.tsx"),
    "./src/services/user/stories/Referral.stories.tsx": require("../src/services/user/stories/Referral.stories.tsx"),
    "./src/services/user/stories/Security.stories.tsx": require("../src/services/user/stories/Security.stories.tsx"),
    "./src/services/user/stories/Settings.stories.tsx": require("../src/services/user/stories/Settings.stories.tsx"),
    "./src/services/user/stories/TwoFactorAuthForm.stories.tsx": require("../src/services/user/stories/TwoFactorAuthForm.stories.tsx"),
    "./src/services/wallets/stories/CryptoIcon.stories.tsx": require("../src/services/wallets/stories/CryptoIcon.stories.tsx"),
    "./src/services/wallets/stories/WalletDetails.stories.tsx": require("../src/services/wallets/stories/WalletDetails.stories.tsx"),
    "./src/services/wallets/stories/Wallets.stories.tsx": require("../src/services/wallets/stories/Wallets.stories.tsx"),
    "./src/services/withdrawal/stories/WithdrawalHistory.stories.tsx": require("../src/services/withdrawal/stories/WithdrawalHistory.stories.tsx"),
    "./src/widgets/apiKeys/stories/ApiKeys.stories.tsx": require("../src/widgets/apiKeys/stories/ApiKeys.stories.tsx"),
    "./src/widgets/iam/authentication/forgotPassword/stories/ForgotPassword.stories.tsx": require("../src/widgets/iam/authentication/forgotPassword/stories/ForgotPassword.stories.tsx"),
    "./src/widgets/iam/authentication/login/stories/Login.stories.tsx": require("../src/widgets/iam/authentication/login/stories/Login.stories.tsx"),
    "./src/widgets/iam/authentication/register/stories/Register.stories.tsx": require("../src/widgets/iam/authentication/register/stories/Register.stories.tsx"),
    "./src/widgets/iam/authentication/resetPassword/stories/ResetPassword.stories.tsx": require("../src/widgets/iam/authentication/resetPassword/stories/ResetPassword.stories.tsx"),
    "./src/widgets/iam/authentication/verifyEmail/stories/VerifyEmail.stories.tsx": require("../src/widgets/iam/authentication/verifyEmail/stories/VerifyEmail.stories.tsx"),
    "./src/widgets/orderbook/stories/Orderbook.stories.tsx": require("../src/widgets/orderbook/stories/Orderbook.stories.tsx"),
    "./src/widgets/user/stories/User.stories.tsx": require("../src/widgets/user/stories/User.stories.tsx"),
    "./src/widgets/wallets/stories/WalletDetails.stories.tsx": require("../src/widgets/wallets/stories/WalletDetails.stories.tsx"),
    "./src/widgets/apiKeys/stories/ApiKeys.stories.tsx": require("../src/widgets/apiKeys/stories/ApiKeys.stories.tsx"),
    "./src/widgets/iam/authentication/forgotPassword/stories/ForgotPassword.stories.tsx": require("../src/widgets/iam/authentication/forgotPassword/stories/ForgotPassword.stories.tsx"),
    "./src/widgets/iam/authentication/login/stories/Login.stories.tsx": require("../src/widgets/iam/authentication/login/stories/Login.stories.tsx"),
    "./src/widgets/iam/authentication/register/stories/Register.stories.tsx": require("../src/widgets/iam/authentication/register/stories/Register.stories.tsx"),
    "./src/widgets/iam/authentication/resetPassword/stories/ResetPassword.stories.tsx": require("../src/widgets/iam/authentication/resetPassword/stories/ResetPassword.stories.tsx"),
    "./src/widgets/iam/authentication/verifyEmail/stories/VerifyEmail.stories.tsx": require("../src/widgets/iam/authentication/verifyEmail/stories/VerifyEmail.stories.tsx"),
    "./src/widgets/orderbook/stories/Orderbook.stories.tsx": require("../src/widgets/orderbook/stories/Orderbook.stories.tsx"),
    "./src/widgets/user/stories/User.stories.tsx": require("../src/widgets/user/stories/User.stories.tsx"),
    "./src/widgets/wallets/stories/WalletDetails.stories.tsx": require("../src/widgets/wallets/stories/WalletDetails.stories.tsx"),
  };
};

configure(getStories, module, false);
