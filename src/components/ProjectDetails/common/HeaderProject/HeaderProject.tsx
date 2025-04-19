import "./HeaderProject.css"
import Technologies from "../../../../common/Technologies/Technologies"
import { ArrowUpIcon } from "../../../../common/Icons/Icons"
import SelectRepository from "../../../../common/SelectRepository/SelectRepository"
import { useState } from "react"

interface Props {
    title: string
    imageProject: string
    description: string
    technologies: string[]
    linkWeb?: string
    linkGitHub?: string[]
    color: string
}

const HeaderProject: React.FC<Props> = ({ title, imageProject, description, technologies, color, linkWeb, linkGitHub }) => {

    const [isOpenSelect, setIsOpenSelect] = useState(false)

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
                        {
                            linkWeb &&
                            <div
                                className="divSubtitleDataProject"
                                onClick={() => window.open(linkWeb, "_blank")}
                            >
                                <p className="subtitleDataProject">Visitá la web</p>
                                <ArrowUpIcon
                                    width="16"
                                    height="16"
                                    fill="#E2CFEA"
                                />
                            </div>
                        }
                        {
                            linkGitHub &&
                            <>
                                {
                                    linkGitHub.length === 1 ?
                                        <div
                                            className="divSubtitleDataProject"
                                            onClick={() => window.open(linkGitHub[0], "_blank")}
                                        >
                                            <p className="subtitleDataProject">Mirá el código</p>
                                            <ArrowUpIcon
                                                width="16"
                                                height="16"
                                                fill="#E2CFEA"
                                            />
                                        </div>
                                        :
                                        <div
                                            className="divSubtitleDataProject"
                                            onMouseEnter={() => setIsOpenSelect(true)}
                                            onMouseLeave={() => setIsOpenSelect(false)}
                                            onClick={() => setIsOpenSelect(!isOpenSelect)}
                                            style={{ position: 'relative' }}
                                        >
                                            <SelectRepository
                                                selectRepositoryRight
                                                isOpen={isOpenSelect}
                                                onSelectOption1={() => window.open(linkGitHub[0], '_blank')}
                                                onSelectOption2={() => window.open(linkGitHub[1], '_blank')}
                                            />
                                            <p className="subtitleDataProject">Mirá el código</p>
                                            <ArrowUpIcon
                                                width="16"
                                                height="16"
                                                fill="#E2CFEA"
                                            />
                                        </div>
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderProject;
