import "./TurneroDetail.css"
import HeaderProject from "../common/HeaderProject/HeaderProject";
import backgroundImage from "../../../assets/images/turnero/backgroundTurnero.png"
import mobileBackgroundImage from "../../../assets/images/turnero/mobileBackgroundTurnero.png"
import NavigationMenu from "../common/NavigationMenu/NavigationMenu";
import BackEnd from "./BackEnd/BackEnd";
import FrontEnd from "./FrontEnd/FrontEnd";

const TurneroDetail = () => {

    const color = "#3DA35D"

    return (
        <div className="turneroDetail">
            <HeaderProject
                title="Sistema de gestión de turnos"
                description="Un sistema de gestión de turnos realizado para una clínica que tenía dificultad para agendar turnos de sus pacientes PAMI. En este trabajo aprendí mucho porque utilicé y configuré por primera vez un VPS para correr la API."
                imageProject={backgroundImage}
                mobileImageProject={mobileBackgroundImage}
                technologies={["react", "express", "node", "mysql"]}
                color={color}
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

export default TurneroDetail;
