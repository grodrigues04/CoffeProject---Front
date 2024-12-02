import { data } from "@remix-run/router"
import * as yup from "yup"

const year = new Date().getFullYear();

const basicSchema = yup.object().shape({
    nome_cafe: yup.string("Por favor, digita um nome válido").required("Por favor, preecha este campo com o nome do cafe! "),
    preco: yup.number("Digite um preço valido").required("Por favor, preecha este campo com o preço "),
    marca: yup.string().min(2, "Marca deve conter pelo menos 2 caracteres").required("Por favor, preecha este campo com a marca do cafe "),
    ano_vencimento: yup.number().required("Por favor, preecha este campo! ").test(
        "ano-vencimento",
        `O ano de vencimento deve ser pelo menos ${year +1}`,
        (value) => value >= year
    ),
    img: yup.string().min(10,"insira uma URL válida")
})

export default basicSchema;

