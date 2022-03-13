const conteudos = [{usuarioSrc: "assets/img/meowed.svg",usuario: "meowed", conteudoSrc: "assets/img/gato-telefone.svg",curtidaSrc: "assets/img/respondeai.svg", pefilCurtida: "respondeai", quantidadeCurtidas: "101.523"},
                   {usuarioSrc: "assets/img/barked.svg",usuario: "barked", conteudoSrc: "assets/img/dog.svg",curtidaSrc:    "assets/img/adorable_animals.svg", pefilCurtida: "adorable_animals", quantidadeCurtidas: "99.159"}            
];  
 
export default function Posts() {
    return (
        <div className="posts">
            {conteudos.map(post => <Post usuarioSrc={post.usuarioSrc} usuario={post.usuario} conteudoSrc={post.conteudoSrc} curtidaSrc = {post.curtidaSrc}
            pefilCurtida = {post.pefilCurtida} quantidadeCurtidas={post.quantidadeCurtidas}
            />)}
        </div>
    );
}

function Post(props) {
    return (
        <div className="post">
            <Topo src = {props.usuarioSrc} nome = {props.usuario}/>
            <Conteudo src = {props.conteudoSrc} />
            <Fundo src = {props.curtidaSrc} perfil = {props.pefilCurtida} quantidadeCurtidas = {props.quantidadeCurtidas}/>
        </div>
    );
}
function Topo(props) {
    return (
        <div className="topo">
            <div class="usuario">
                  <img src={props.src} />
                  {props.nome}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
        </div>
    );
};

function Conteudo(props) {
    return(
        <div className="conteudo">
            <img src={props.src} />
        </div>
    );
}

function Fundo(props) {
    return (
        <div className="fundo">
            <Acoes />
            <Curtidas src = {props.src} perfil = {props.perfil} quantidadeCurtidas = {props.quantidadeCurtidas}/>
        </div>
    );
}

function Acoes() {
    return (
        <div className="acoes">
            <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
        </div>
    );
}
function Curtidas(props) {
    return (
        <div className="curtidas">
            <img src = {props.src}/>
                  <div class="texto">
                    Curtido por <strong>{props.perfil}</strong> e <strong>outras {props.quantidadeCurtidas} pessoas</strong>
                  </div>
        </div>
    );
}
