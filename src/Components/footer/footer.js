import { render } from '@testing-library/react'
import '../../estilos/estilos.css'
import FormaPagto from '../../imagens/formas_pagto.png'

export default function Footer() {
    return(
        <div className="container">
        <footer id="rodape">
            <h4 className="text-danger">Formas de pagamento</h4>
            <img src={FormaPagto} alt="Formas de pagamento" width="300px" />
            <p>&copy; Recode Pro</p>
        </footer>
    </div>
    )
}