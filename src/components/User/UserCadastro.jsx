import Header from "../utils/Header";
import UserLogin from "./UserLogin";
import userValidation from "../../utils/userValidation"
import style from "../../assets/styles/UserStyle/cadastro.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import { useState } from "react";
import { Navigate } from "react-router-dom";

function UserCadastro(){
    const [redirect, setRedirect] = useState(false)
    const [error, setError] = useState(false)
    async function submiteForm(values, {setSubmitting}) {
        const response = axios.post('http://localhost:8000/cadastro',{
            body:JSON.stringify(values) 
        })
        .then((response)=>{
            console.log("Resposta bem sucedida")
            setRedirect(true)
        })
        .catch((response)=>{
            console.log("Ocorreu um erro:", response)
            if(response.status == 409){
                window.alert(response.response.data.message)
            }
        })
  
    }
    //Se a requisição de cadastro for bem sucedida, redireciona para pagina de login.
    //Se ele está entrando para cadastrar, vai retornar o componenet de forms
    if(redirect){
        return <Navigate to="../login" replace/>
    }
    else{
        return(
            <>
                <Header
                home="../"
                loja="../loja"
                novocafe="../novocafe"
                cafes="../cafes"
                />
                <Formik
                    initialValues={{nome_usuario:"", senha:"", email:""}}
                    validationSchema={userValidation}
                    onSubmit={submiteForm}
                >
                {({isSubmitting}) =>(
                    <Form className={style.forms_class}>
                        <label htmlFor="nome_usuario">Digite seu nome de usuario</label>
                        <Field name="nome_usuario" type="text"></Field>    
                        <ErrorMessage name="nome_usuario"/>
                        
                        <label htmlFor="senha">Digite sua senha</label>
                        <Field name="senha" type="password"></Field>
                        <ErrorMessage name="senha"/>
                        
                        <label htmlFor="senha_confim">Digite sua senha</label>
                        <Field name="senha_confim" type="password"></Field>
                        <ErrorMessage name="senha_confim"/>
                        
                        <label htmlFor="email">Digite seu Email</label>
                        <Field name="email" type="email"></Field>
                        <ErrorMessage name="email"/>


                        <button type="submit">Submit</button>
                    </Form>

                )}
                </Formik>;
            </> 
        )
    }
}

export default UserCadastro;