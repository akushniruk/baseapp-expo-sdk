import { es as loginFormEs } from "../../../services/iam/authentication/loginForm/libs/i18n/es";
import { es as loginEs } from "../../../widgets/iam/authentication/login/libs/i18n/es";

import { es as registerFormEs } from "../../../services/iam/authentication/registerForm/libs/i18n/es";
import { es as registerEs } from "../../../widgets/iam/authentication/register/libs/i18n/es";

const es = {
    ...loginFormEs,
    ...loginEs,
    ...registerEs,
    ...registerFormEs,
};

export { es };
