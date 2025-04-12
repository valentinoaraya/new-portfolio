import "./Footer.css"
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "../../common/Icons/Icons";

const Footer = () => {
    return (
        <div className="footer">
            <div className="nameContainer">
                <h2 className="nameFooter">Valentino Araya</h2>
                <p className="subtitleFooter">Desarrollador Full Stack</p>
            </div>
            <div className="networksCopyright">
                <div className="networks">
                    <GitHubIcon
                        width="30"
                        height="30"
                        fill="#ffff"
                        cursorPointer
                    />
                    <LinkedInIcon
                        width="30"
                        height="30"
                        fill="#ffff"
                        cursorPointer
                    />
                    <InstagramIcon
                        width="30"
                        height="30"
                        fill="#ffff"
                        cursorPointer
                    />
                </div>
                <p className="copyright">© 2025 Valentino Araya. Todos los derechos reservados.</p>
            </div>
        </div>
    );
}

export default Footer;
