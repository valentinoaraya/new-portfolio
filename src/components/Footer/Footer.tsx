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
                        cursorPointer
                        onClick={() => window.open('https://github.com/valentinoaraya', '_blank')}
                        width="25"
                        height="25"
                        fill="#ffff"
                    />
                    <LinkedInIcon
                        cursorPointer
                        onClick={() => window.open('https://www.linkedin.com/in/valentino-araya-18915825b', '_blank')}
                        width="25"
                        height="25"
                        fill="#ffff"
                    />
                    <InstagramIcon
                        cursorPointer
                        onClick={() => window.open('https://www.instagram.com/tinoaraya', '_blank')}
                        width="25"
                        height="25"
                        fill="#ffff"
                    />
                </div>
                <p className="copyright">© 2025 Valentino Araya. Todos los derechos reservados.</p>
            </div>
        </div>
    );
}

export default Footer;
