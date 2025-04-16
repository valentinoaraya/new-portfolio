import "./HeaderProject.css"
import Technologies from "../../../Home/Projects/Technologies/Technologies"

interface Props {
    title: string
    imageProject: string
    description: string
    technologies: string[]
    linkWeb?: string
    linkGitHub?: string
    color: string
}

const HeaderProject: React.FC<Props> = ({ title, imageProject, description, technologies, color, linkWeb, linkGitHub }) => {
    return (
        <>
            <div className="imageProjectDetailContainer"
                style={{
                    backgroundImage: `url('${imageProject}')`,
                    backgroundSize: "cover",
                    backgroundPositionX: "center"
                }}
            >
            </div>
            <div className="dataProject divWithMaxWidth">
                <div style={{ borderBottom: `1px solid ${color}` }} className="divTitleProject">
                    <h1 className="titleProjectDetail">{title}</h1>
                </div>
                <div className="desciptionAndTechnologies">
                    <div className="divDescriptionProject">
                        <p>{description}</p>
                    </div>
                    <div className="divTechnologiesAndLinks">
                        <div className="technologiesContainer" >
                            <p className="subtitleDataProject subtitleTechnologies">Tecnologías</p>
                            <Technologies
                                noPadding
                                technologies={technologies}
                                position="end"
                                borderRadius=""
                            />
                        </div>
                        {linkWeb && <p className="subtitleDataProject">Visitá la web</p>}
                        {linkGitHub && <p className="subtitleDataProject">Mirá el código</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderProject;
