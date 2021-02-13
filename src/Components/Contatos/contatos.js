import '../../estilos/estilos.css'
import Whatsapp from '../../imagens/whatsapp_icon.png'
import Email from '../../imagens/email.png'


export default function Contatos() {
    return (
        <div>
            <header>
                 <h2 className="display-4">Contatos</h2>
             </header>
             <hr />
            <div className="container_contatos row">
             <div className="zap col text-center">
                 <img src={Whatsapp} alt="Whatsapp-Icone" />
                 <p>(11) 99658-2154</p>
             </div>
             <div className="email col text-center">
                 <img src={Email} alt="Email-Icone" />
                 <p>fullstackeletro@gmail.com</p>
             </div>
         </div>
        </div>
    )
}