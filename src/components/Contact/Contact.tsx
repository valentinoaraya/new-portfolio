import "./Contact.css"
import { MailIcon, PhoneIcon, PinIcon } from "../../common/Icons/Icons";

const Contact = () => {
    return (
        <div className="contact">
            <h2 className="titleContact">Contáctame</h2>
            <p className="parrafContact">¿Tenés algún proyecto en mente o queŕes hablar sobre posibles oportunidades? No dudes en contactarme.</p>
            <div className="cardsContact">
                <div className="cardContact">
                    <div className="iconContainer">
                        <PhoneIcon
                            width="30"
                            height="30"
                            fill="#02010A"
                        />
                    </div>
                    <p className="titleCard">Teléfono</p>
                    <p className="subtitleCard">(+54) 2625 660880</p>
                </div>
                <div className="cardContact">
                    <div className="iconContainer">
                        <MailIcon
                            width="30"
                            height="30"
                            fill="#02010A"
                        />
                    </div>
                    <p className="titleCard">Email</p>
                    <p className="subtitleCard">valentinoaraya04@gmail.com</p>
                </div>
                <div className="cardContact">
                    <div className="iconContainer">
                        <PinIcon
                            width="30"
                            height="30"
                            fill="#02010A"
                        />

                    </div>
                    <p className="titleCard">Ubicación</p>
                    <p className="subtitleCard">San Rafael - Mendoza, Argentina</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
