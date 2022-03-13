import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";

export default function Corpo() {
    return(
        <div className="corpo">
        <Esquerda />
        <SideBar />
        </div>
    );
};

function Esquerda() {
    return(
        <div className="esquerda">
            <Stories />
            <Posts />
        </div>
    );
};

function FundoMobile() {
    return (
        <div className="fundo-mobile">
            <ion-icon name="home"></ion-icon>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="add-circle-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    );
}


