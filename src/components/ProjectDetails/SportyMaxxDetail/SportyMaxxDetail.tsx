import "./SportyMaxxDetail.css"
import HeaderProject from "../common/HeaderProject/HeaderProject";
import backgroundImage from "../../../assets/images/sportymaxx/backgroundImage.webp"
import mobileBackgroundImage from "../../../assets/images/sportymaxx/mobileBackgroundImage.webp"
import NavigationMenu from "../common/NavigationMenu/NavigationMenu";
import BackEnd from "./BackEnd/BackEnd";
import FrontEnd from "./FrontEnd/FrontEnd";

const SportyMaxxDetail = () => {

    const color = "#CED4DA"

    return (
        <div className="sportymaxxDetail">
            <HeaderProject
                title="SportyMaxx"
                description="Comercio electrónico desarrollado para una empresa dedicada a la venta de ropa. Cuenta con interfaces para que el administrador pueda subir, editar y eliminar productos cuando desee."
                imageProject={backgroundImage}
                mobileImageProject={mobileBackgroundImage}
                technologies={["react", "express", "node", "firebase"]}
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

export default SportyMaxxDetail;
