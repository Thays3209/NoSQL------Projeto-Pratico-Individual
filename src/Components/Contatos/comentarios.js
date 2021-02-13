import React, { useState, useEffect } from 'react';


const Comentarios = () => {
    const [coments, setComents] = useState([]);
    const [render, setRender] = useState(false);
    
    useEffect(async () => {
        const url2 = "http://localhost:3333/mostrar";
        const res2 = await fetch(url2);
        setComents(await res2.json());
    }, [render])

    return (
        <> {
            coments.map(row => {
                return (
                    <div style={{textAlign:"center", marginTop: "10px"}}>
                        Nome: {row.nome}<br />
                        Mensagem: {row.msg}<br />
                        <hr />
                    </div>
                )
            })
        }
        </>
    )
}


export default Comentarios

