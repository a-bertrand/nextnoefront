const workWithMeStyle = {
    backgroundImage: 'url("static/images/backwood.png")',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-position': 'center',
    'background-size': 'cover'
}

export default () => (
    <article className="work-with-me" style={workWithMeStyle}>
        <div className="container">
            <h2>Ma mission</h2>
            <ul>
                <li>— Vous accompagner dans la mise en place d'une stratégie de communication visuelle solide et efficace</li>
                <li>— Vous aider à vous rendre visibles, principalement sur internet, et à acquérir une notoriété vous positionnant comme des références dans votre domaine</li>
                <li>— Participer au développement de votre identité de marque personnelle et professionnelle dans le but de diffuser un message visuel clair et performant auprès de votre cible</li>
            </ul>
            <h2>Comment ? </h2>
            <ul>
                <li>— En modifiant en profondeur les perceptions et les comportements de votre cible grâce à la créativité</li>
                <li>—  En vous accompagnant dans l'évolution de votre image de marque personnelle et professionnelle, de la conception graphique aux techniques de webmarketing</li>
                <li>—  En vous aidant à engager votre audience en lui proposant des idées qui lui parlent et dont elle parle</li>
                <li>—  En vous aidant à la fidéliser et à la faire interagir pour amplifier l'effet "boule de neige" d'une bonne communication</li>
            </ul>
            <h2>Pourquoi travailler ensemble  ? </h2>
            <ul>
                <li>— Une entreprise à taille humaine et une seule interlocutrice sur l'ensemble de vos projets</li>
                <li>—  Une relation privilégiée et pérenne avec vous grâce à un suivi toujours bienveillant</li>
            </ul>
        </div>
    </article>
)
