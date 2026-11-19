import "./App.css";

function App() {

    return (
        <div className="pagina">

            <header className="cabecalho">
                <h1>VIO Web</h1>

                <p>
                    Projeto de Integração Online
                </p>
            </header>

            <main className="conteudo">

                <section className="card">

                    <h2>
                        Ambiente preparado com sucesso!
                    </h2>

                    <p>
                        O Front-End React do projeto VIO
                        está funcionando corretamente.
                    </p>

                    <p className="status">
                        Front-End: Online
                    </p>

                    <footer className="identificacao" aria-label="Identificação do estudante">
                        <div className="identificacao-autor">
                            <p className="identificacao-legenda">Desenvolvido por</p>
                            <p className="identificacao-nome">Guilherme Barbosa Baldoino Campos</p>
                        </div>
                        <span className="identificacao-turma">4ºDSM</span>
                    </footer>

                </section>

            </main>

        </div>
    );

}

export default App;
