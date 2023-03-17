import * as yup from "yup";

const validations = yup.object().shape({
    name: yup.string().required("First Name cannot be empty"),
    lastName: yup.string().required("Last Name cannot be empty"),
    email: yup.string().email("Looks like this is not an email").required("Email cannot be empty"),
    password: yup.string().min(5, 'Password must be a minimum of 5 characters').required("Password cannot be empty"),
    passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Password is not the same').required("Confirm Password cannot be empty"),
});

export default validations;