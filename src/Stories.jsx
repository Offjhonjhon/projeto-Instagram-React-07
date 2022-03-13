export const stories = [{src : "assets/img/9gag.svg", nome : "9gag"},
                 {src : "assets/img/meowed.svg", nome : "meowed"},
                 {src : "assets/img/barked.svg", nome : "barked"}, 
                 {src : "assets/img/nathanwpylestrangeplanet.svg", nome : "nathanwpylestrangeplanet"}, 
                 {src : "assets/img/wawawicomics.svg", nome : "wawawicomics"},    
                 {src : "assets/img/respondeai.svg", nome : "respondeai"}, 
                 {src : "assets/img/filomoderna.svg", nome : "filomoderna"}, 
                 {src : "assets/img/memeriagourmet.svg", nome : "memeriagourmet"}, 
];

export default function Stories() {
    return(
        <div className="stories">
            {stories.map(elemento => <Story src={elemento.src} nome={elemento.nome}/>)};
            <Setinha />
        </div>
    );
};

function Story(props) {
    return (
        <div className="story">
            <div class="imagem">
                <img src={props.src} />
              </div>
              <div class="usuario">
                {props.nome}
              </div>
        </div>
    );
};
function Setinha() {
    return(
        <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    );
};