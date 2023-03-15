import * as yup from "yup";

const validations = yup.object().shape({
    name: yup.string().required("Zorunlu"),
    lastName: yup.string().required("Zorunlu"),
    email: yup.string().email("Geçerli bir email girin.").required("Zorunlu"),
    password: yup.string().min(5, 'Parolanız en az 5 karakter olmalıdır.').required("Zorunlu"),
    passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Parola eşleşme hatası.').required("Zorunlu"),
});

export default validations;