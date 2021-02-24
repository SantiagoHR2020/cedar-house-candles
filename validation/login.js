import Validator from "validator";
import isEmpty from "is-empty";

export default function validateLoginInput(data) {
    let errors = {};

    Object.keys(data).forEach((key) => {
        data[key] = !isEmpty(data[key]) ? data[key] : "";
    });

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
}
