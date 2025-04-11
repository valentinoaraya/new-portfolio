import "./Hero.css"
import Button from "../../common/Button/Button";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "../../common/Icons/Icons";

const Hero = () => {
    return (
        <div className="hero">
            <div className="heroContent">
                <div className="heroTitles">
                    <h1 className="titleHero">Hola, soy <span>Valentino</span></h1>
                    <h2 className="subtitleHero">Desarrollador Full Stack</h2>
                    <p className="descriptionHero">Puedo construir aplicaaciones web completas, desde el diseño y desarrollo del frontend hasta la implementación del backend.</p>
                </div>
                <div className="heroButtons">
                    <Button
                        onClick={() => console.log("Acción de botón")}
                        styleButton="primary"
                        arrow
                    >
                        Ver currículum
                    </Button>
                    <Button
                        onClick={() => console.log("Acción de botón")}
                        styleButton="secondary"
                    >
                        Contáctame
                    </Button>
                </div>
                <div className="heroNetworks">
                    <GitHubIcon
                        cursorPointer
                        onClick={() => console.log("Llevar a red social")}
                        width="25"
                        height="25"
                        fill="#ffff"
                    />
                    <LinkedInIcon
                        cursorPointer
                        onClick={() => console.log("Llevar a red social")}
                        width="25"
                        height="25"
                        fill="#ffff"
                    />
                    <InstagramIcon
                        cursorPointer
                        onClick={() => console.log("Llevar a red social")}
                        width="25"
                        height="25"
                        fill="#ffff"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
