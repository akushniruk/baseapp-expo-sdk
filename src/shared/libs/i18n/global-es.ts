import { es as loginFormEs } from "../../../services/iam/authentication/loginForm";
import { es as loginEs } from "../../../widgets/iam/authentication/login";

import { es as registerFormEs } from "../../../services/iam/authentication/registerForm";
import { es as registerEs } from "../../../widgets/iam/authentication/register";

import { es as forgotPasswordFormEs } from "../../../services/iam/authentication/forgotPasswordForm";
import { es as forgotPasswordEs } from "../../../widgets/iam/authentication/forgotPassword";

import { es as resetPasswordFormEs } from "../../../services/iam/authentication/resetPasswordForm";
import { es as resetPasswordEs } from "../../../widgets/iam/authentication/resetPassword";

import { es as verifyEmailFormEs } from "../../../services/iam/authentication/verifyEmailForm";
import { es as verifyEmailEs } from "../../../widgets/iam/authentication/verifyEmail";

import { es as changePasswordFormEs } from "../../../services/iam/authentication/changePasswordForm";

import { es as accountActivityEs } from "../../../services/accountActivity/libs/i18n/es";
import { es as apiKeysEs } from "../../../services/apiKeys/libs/i18n/es";

import { es as depositHistoryEs } from "../../../services/deposit/libs/i18n/es";
import { es as withdrawalHistoryEs } from "../../../services/withdrawal/libs/i18n/es";
import { es as transferHistoryEs } from "../../../services/transfer/libs/i18n/es";

import { es as active2FAEs } from "../../ui/activate2FA/libs/i18n/es";

const es = {
    ...loginFormEs,
    ...loginEs,
    ...registerEs,
    ...registerFormEs,
    ...forgotPasswordFormEs,
    ...forgotPasswordEs,
    ...resetPasswordFormEs,
    ...resetPasswordEs,
    ...verifyEmailFormEs,
    ...verifyEmailEs,
    ...depositHistoryEs,
    ...withdrawalHistoryEs,
    ...transferHistoryEs,
    ...active2FAEs,
    ...changePasswordFormEs,
    ...accountActivityEs,
    ...apiKeysEs,
};

export { es };
