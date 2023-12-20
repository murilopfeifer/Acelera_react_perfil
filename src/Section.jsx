export default function Section(props) {

    switch (props.tipo) {
        case "Sobre": return (
            <>
                <section>
                    <div>
                        <h2>{props.titulo}</h2>
                        <p>{props.subtitulo}</p>

                    </div>

                </section>
            </>
        )
        case "Filmes": return (
            <>
                <section>
                    <div>
                        <h2>{props.titulo}</h2>
                        <p>{props.subtitulo}</p>
                        <ul class="list">
                            <li>


                                <a href="https://pt.wikipedia.org/wiki/Joker_(filme)" target="_blank" rel="noreferrer">
                                    <img src="https://upload.wikimedia.org/wikipedia/pt/6/63/Joker_%282019%29.jpg" alt="Coringa" title="Coringa" />
                                </a>
                            </li>
                            <li>
                                <a href="https://pt.wikipedia.org/wiki/Cidade_de_Deus_(filme)" target="_blank">
                                    <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/1/10/CidadedeDeus.jpg/220px-CidadedeDeus.jpg" alt="Cidade de Deus" title="Cidade de Deus" />
                                </a>
                            </li>
                            <li>
                                <a href="https://pt.wikipedia.org/wiki/Cavalo_de_Guerra" target="_blank">
                                    <img src="https://upload.wikimedia.org/wikipedia/pt/7/73/War_Horse_P%C3%B4ster.jpg" alt="Cavalo de Guerra" title="Cavalo de Guerra" />
                                </a>
                            </li>
                            <li>
                                <a href="https://pt.wikipedia.org/wiki/Pearl_Harbor_(filme)" target="_blank">
                                    <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/a/ae/Pearl_Harbor_filme.jpg/250px-Pearl_Harbor_filme.jpg" alt="Pearl Harbor" title="Pearl Harbor" />
                                </a>
                            </li>

                        </ul>

                    </div>
                </section>
            </>
        )
        case "Contato": return (
            <>
                <section>
                    <div>
                        <h2>Meus Contatos </h2>

                        <ul class="list">
                            <li><a href="https://pt.wikipedia.org/wiki/Orkut" target="_blank"><img src="https://oimparcial.com.br/app/uploads/2020/08/logo-orkut-cc3adrculo.png" alt="Logo orkut" title="Logo orkut" /></a></li>


                            <li><a href="https://github.com/murilopfeifer" target="_blank"><img src="https://camo.githubusercontent.com/97ffb963480b7b0b5655fd61faa6ba4a34e45272a31df53b71784c33fd687ac5/68747470733a2f2f6173736574732e69667474742e636f6d2f696d616765732f6368616e6e656c732f323130373337393436332f69636f6e732f6d6f6e6f6368726f6d655f6c617267652e706e67" alt="Logo Github" title="Logo GitHub" /></a></li>


                        </ul>
                    </div>
                </section>
            </>
        )
    }
}