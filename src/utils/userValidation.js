import { data } from "@remix-run/router"
import * as yup from "yup"

const year = new Date().getFullYear();

const userSchema = yup.object().shape({
    nome_usuario: yup.string("Por favor, digita um nome válido")
        .required("Por favor, preecha este campo com seu nome de usuário"),
    senha: yup.string("Digite sua senha").required("Por favor, digite sua senha"),
    senha_confim:
        yup.string()
        .required("Confirme sua senha!")
        .oneOf([yup.ref('senha')], 'Senhas não conferem!'), 
    email: yup.string().required("Digite seu email")
})

export default userSchema;

