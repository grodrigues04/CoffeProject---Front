import { data } from "@remix-run/router"
import * as yup from "yup"


const userSchema = yup.object().shape({
    nome_usuario: yup.string("Por favor, digita um nome válido")
        .required("Por favor, preecha este campo com seu nome de usuário"),
    senha: yup.string("Digite sua senha").required("Por favor, digite sua senha"),
})

export default userSchema;

