import { useState } from "react";
import styles from "../assets/styles/NovoCafe.module.css"
import Header from "./Header";
import { Navigate  } from 'react-router-dom';
import basicSchema from "../utils/validation"
import { Formik, Form, Field, ErrorMessage } from "formik";

function CafeId(){
    const [redirect, setRedirect] = useState(false)
    async function submiteForm(values, {setSubmitting}){
        // const data = Object.fromEntries(formData.entries()); //transforma em um objeto javascript
        const response = await fetch("http://localhost:8000/createcofe",
            { 
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            }
        )

        if(response.status == 201){
            setRedirect(true)
        }
        setSubmitting(false); // Para habilitar novamente o botão de envio
    }
    if(redirect){
        return <Navigate to="../loja" replace />;
    }


    return(
        <>
            <Header
            home="../"
            loja="../loja"
            novocafe="../novocafe"
            cafes="../cafes"
            />
            <Formik
                initialValues={{nome:"", preco:"", marca:"", ano_vencimento:"", img:""}}
                validationSchema={basicSchema}
                onSubmit={submiteForm}
            >
            {({ isSubmitting }) => (
                <Form className={styles.recipe_form}>
                    <label htmlFor="nome_cafe">Nome do Café</label>
                    <Field name="nome_cafe" type="text"></Field>
                    <ErrorMessage name="nome_cafe"/>
                    
                    <label htmlFor="preco">Preço</label>
                    <Field name="preco" type="number"></Field>
                    <ErrorMessage name="preco"/>
                    
                    <label htmlFor="marca">Marca</label>
                    <Field name="marca" type="text"></Field>
                    <ErrorMessage name="marca"/>
                    
                    <label htmlFor="ano_vencimento">Ano de vencimento</label>
                    <Field name="ano_vencimento" type="number"></Field>
                    <ErrorMessage name="ano_vencimento"/>
                    
                    <label htmlFor="img">IRL da imagem</label>
                    <Field name="img" type="url"></Field>
                    <ErrorMessage name="img"/>

                    <button type="submit">Submit</button>
                </Form>
            )
            }   
            </Formik>
        </>
    )
}

export default CafeId;