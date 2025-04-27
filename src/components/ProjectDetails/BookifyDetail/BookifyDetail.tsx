import HeaderProject from "../common/HeaderProject/HeaderProject";
import "./BookifyDetail.css"
import backgroundBookify from "../../../assets/images/bookify/backgroundBookify.png"
import backgroundMobileBookify from "../../../assets/images/bookify/backgroundMobileBookify.png"
import BackEnd from "./BackEnd/BackEnd";
import FrontEnd from "./FrontEnd/FrontEnd";
import { useState } from "react";

const BookifyDetail = () => {
    const color = "#457B9D"
    const [activeComponent, setActiveComponent] = useState<'backend' | 'frontend'>('backend');

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
            <div className="divWithMaxWidth navigation-menu">
                <button
                    className={`nav-button ${activeComponent === 'backend' ? 'active' : ''}`}
                    onClick={() => setActiveComponent('backend')}
                >
                    Backend
                </button>
                <button
                    className={`nav-button ${activeComponent === 'frontend' ? 'active' : ''}`}
                    onClick={() => setActiveComponent('frontend')}
                >
                    Frontend
                </button>
            </div>
            {activeComponent === 'backend' ? <BackEnd color={color} /> : <FrontEnd color={color} />}
        </div>
    );
}

export default BookifyDetail;
