import Logo from '../../imagens/full_stack_logo.png'
import '../../estilos/estilos.css'


export default function Menu() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-danger mt-1">
            <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            
                    <a href="index.php" className="mx-5 navbar-brand" ><img className="logo" alt="logo" src={Logo}/></a>                      
                    <ul class="navbar-nav">

                        {/* home*/}
                            <li className="nav-item active">
                                <a className="text-light nav-link" href="index.php" >Home</a>
                            </li>

                        {/*Lojas */}
                            
                            <li className="nav-item">
                                <a className="text-light nav-link" href="lojas.php" >Nossas lojas</a>
                            </li>

                        {/* Contatos */}

                            <li className="nav-item">
                                <a className="text-light nav-link" href="contato.php" >Contato</a>
                            </li>
                    </ul>
            </div>
        </nav>
    )
}