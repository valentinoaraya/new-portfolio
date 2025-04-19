import HeaderProject from "../common/HeaderProject/HeaderProject";
import "./BookifyDetail.css"
import backgroundBookify from "../../../assets/images/backgroundBookify.png"

const BookifyDetail = () => {
    return (
        <div className="bookifyDetail">
            <HeaderProject
                title="Bookify"
                description="Bookify es una plataforma para que empresas puedan gestionar los turnos de sus clientes de manera efectiva. Donde las empresas pueden agregar los servicios que deseen ofrecer y habilitar turnos, y los clientes pueden buscar por servicio o empresa y agendar su turno."
                imageProject={backgroundBookify}
                technologies={["typescript", "react", "express", "node", "mongodb"]}
                color="#457B9D"
                linkWeb="https://landing-bookify.vercel.app/"
                linkGitHub={["https://github.com/valentinoaraya/bookify-frontend", "https://github.com/valentinoaraya/bookify-backend"]}
            />

        </div>
    );
}

export default BookifyDetail;
