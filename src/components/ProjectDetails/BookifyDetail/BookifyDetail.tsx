import "./BookifyDetail.css"
import HeaderProject from "../common/HeaderProject/HeaderProject";
import backgroundBookify from "../../../assets/images/bookify/backgroundBookify.webp"
import backgroundMobileBookify from "../../../assets/images/bookify/backgroundMobileBookify.webp"
import BackEnd from "./BackEnd/BackEnd";
import FrontEnd from "./FrontEnd/FrontEnd";
import NavigationMenu from "../common/NavigationMenu/NavigationMenu";

const BookifyDetail = () => {
    const color = "#457B9D"

    return (
        <div className="bookifyDetail">
            <HeaderProject
                title="Bookify"
                description="Bookify es una plataforma para que empresas puedan gestionar los turnos de sus clientes de manera efectiva. Donde las empresas pueden agregar los servicios que deseen ofrecer y habilitar turnos, y los clientes pueden buscar por servicio o empresa y agendar su turno."
                imageProject={backgroundBookify}
                mobileImageProject={backgroundMobileBookify}
                technologies={["typescript", "react", "express", "node", "mongodb"]}
                color={color}
                linkWeb="https://landing-bookify.vercel.app/"
                linkGitHub={["https://github.com/valentinoaraya/bookify-frontend", "https://github.com/valentinoaraya/bookify-backend"]}
            />
            <NavigationMenu
                color={color}
                menu1={{
                    title: "Back End",
                    element: <BackEnd color={color} />
                }}
                menu2={{
                    title: "Front End",
                    element: <FrontEnd color={color} />
                }}
            />
        </div>
    );
}

export default BookifyDetail;
