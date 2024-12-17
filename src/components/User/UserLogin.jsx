import Header from "../utils/Header";

import userLoginValidation from "../../utils/userLoginValidation"
import style from "../../assets/styles/UserStyle/cadastro.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import { useState } from "react";
import { Navigate } from "react-router-dom";


function UserLogin(){
    const [redirect, setRedirect] = useState(false)
    async function submiteForm(values, {setSubmitting}) {
        const response = await axios.post(`http://localhost:8000/login`,{
            title:"Criação de usuario",
            body: JSON.stringify(values)
        })
        .then((response)=>{
            console.log("Resposta bem sucedida", response.data)
            const userLogged = response.data.user //objeto usuario

            localStorage.setItem("id", JSON.stringify(userLogged)) //So aceita string
            setRedirect(true)
        })
        .catch((response)=>{    
            console.log("Ocorreu um erro:", response.status)
        })
        
    }
    //Se a requisição de cadastro for bem sucedida, redireciona para pagina de login.
    //Se ele está entrando para cadastrar, vai retornar o componenet de loja
    if(redirect){
        return <Navigate to="../loja" replace/>
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
                    initialValues={{nome_usuario:"", senha:""}}
                    validationSchema={userLoginValidation}
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
                    
                        <button type="submit">Submit</button>
                    </Form>

                )}
                </Formik>;
            </> 
        )
    }
}

export default UserLogin;