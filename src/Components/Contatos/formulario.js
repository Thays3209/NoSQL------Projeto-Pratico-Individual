import React, { useState } from 'react';
export default function FormContatos () {
    const [msg, setMsg] = useState('');
    const [nome, setNome] = useState('');
    const [render, setRender] = useState(false);

    return (
        <div>
             { msg && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
            Mensagem enviada com sucesso!
        </div>}
            <form className="formCont" method="POST" action="http://localhost:3333/comentarios">
             <div className="form-group mx-5 text-center ">
                 <p>Nome: </p>
                 <input className="nome form-control inputNome" type="text" name="nome" id="nome" />
                 <p>Mensagem:</p>
                 <input className="area_texto form-control inputMsg" type="text" name="msg" id="msg" /><br />
                 <input className="enviar bg-light mt-1 btn-lg" type="submit" />
             </div>
        </form>
        </div>
    )
}