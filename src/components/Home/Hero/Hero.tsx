import "./Hero.css"
import Button from "../../../common/Button/Button";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "../../../common/Icons/Icons";

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
                        onClick={() => window.open("https://drive.google.com/file/d/1XIl0_KhC2BB8wKfOHyNP1nGUj63uqSYI/view?usp=sharing", '_blank')}
                        styleButton="primary"
                        arrow
                    >
                        Ver currículum
                    </Button>
                    <Button
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        styleButton="secondary"
                    >
                        Contáctame
                    </Button>
                </div>
                <div className="heroNetworks">
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
            </div>
        </div>
    );
}

export default Hero;
