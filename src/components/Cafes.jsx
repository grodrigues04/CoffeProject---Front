import { useEffect, useState } from "react";
function Tasks(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await fetch('http://localhost:8000');
                if (!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                else{
                    const result = await response.json(); // Converte para JSON
                    setData(result); // Salva os dados no state
                }
            } catch(err){
                setError(err.message); // Salva o erro no state
            }
        }
        fetchData();

    })

    if(error){
        return <div>Erro: {error}</div>;
    }

    if (!data) {
        return <div>Carregando...</div>;
    }

    return(
        <div>
            <h1>Lista de Pessoas</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {item.nome}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks