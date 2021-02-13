import '../../estilos/estilos.css'

export default function Lojas() {
    return (
        <div>
            <main>
                <header>
                    <h2 className="display-4">Nossas Lojas</h2>
                </header>
                <hr />
                    <div className="row">
                        <div className="container_lojas">
                            <div className="lojas">
                                <h3>São Paulo</h3>
                                <p>Avenida Casa Grande</p>
                                <p>2 &ordm; andar</p>
                                <p>Diadema</p>
                                <p>(11)97352-4499</p>
                            </div>

                            <div className="lojas">
                                <h3>São Paulo</h3>
                                <p>Avenida Piraporinha</p>
                                <p>5 &ordm; andar</p>
                                <p>Centro</p>
                                <p>(11)97352-4499</p>
                            </div>

                            <div className="lojas">
                                <h3>São Paulo</h3>
                                <p>Rua Raul Seixas</p>
                                <p>5 &ordm; andar</p>
                                <p>Casa Grande</p>
                                <p>(11)97352-4499</p>
                            </div>
                        </div>
                    </div>
            </main>
        </div>
    )
}