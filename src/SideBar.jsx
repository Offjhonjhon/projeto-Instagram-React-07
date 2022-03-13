const usuario = {
    src: "assets/img/catanacomics.svg",
    titulo: "catanacomics",
    subTitulo: "Catana"
};

const sugestao = [
    {src: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você"},
    {src: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você"},
    {src: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram"},
    {src: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você"},
    {src: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você"}
];

export default function SideBar() {
    return (
        <div className="sidebar">
            <Usuario src={usuario.src} titulo = {usuario.titulo} subTitulo={usuario.subTitulo}/>
            <Sugestoes />
            <Links />
            <Copyrigth />
        </div>
    );
}

function Usuario(props) {
    return(
        <div className="usuario">
            <img src={props.src} />
            <div class="texto">
              <strong>{props.titulo}</strong>
              {props.subTitulo}
            </div>
        </div>
    );
}

function Sugestoes() {
    return(
        <div className="sugestoes">
            <Titulo />
            {sugestao.map(elemento => <Sugestao src={elemento.src} nome={elemento.nome} razao= {elemento.razao}/>)}
        </div>
    );
}

function Titulo() {
    return(
        <div className="titulo">
            Sugestões para você
              <div>Ver tudo</div>
        </div>
    );
}

function Sugestao(props) {
    return(
        <div className="sugestao">
            <div class="usuario">
                <img src={props.src}/>
                <div class="texto">
                  <div class="nome">{props.nome}</div>
                  <div class="razao">{props.razao}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
        </div>
    );
}

function Links() {
    return(
        <div className="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma   
        </div>
    );
}

function Copyrigth() {
    return(
        <div className="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    );
}
