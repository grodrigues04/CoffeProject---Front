import { useState } from "react";
import styles from "../assets/styles/NovoCafe.module.css"
import Header from "./Header";
import { Navigate  } from 'react-router-dom';
import { Formik } from "formik";
function CafeId(){
    const [redirect, setRedirect] = useState(false)
    async function submiteForm(e){
        e.preventDefault();
        const formData = new FormData(e.target); //Coleta os dados digitados do form
        const data = Object.fromEntries(formData.entries()); //transforma em um objeto javascript
        const response = await fetch("http://localhost:8000/createcofe",
            { 
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        )

        if(response.status == 201){
            setRedirect(true)
        }

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
                on
            >
            {pro}
            </Formik>
        </>
    )
}

export default CafeId;