import "./Projects.css"
import { DollarIcon, CashStackIcon, BellIcon } from "../../../common/Icons/Icons";
import Button from "../../../common/Button/Button";
import panelBookify from "../../../assets/images/bookify/panelBookify.png"
import panelVentaTrack from "../../../assets/images/ventatrack/panelImage.png"
import panelTurnero from "../../../assets/images/turnero/calendarioDoctor.webp"
import sportyMaxxPage from "../../../assets/images/sportymaxx/sportymaxxPage.png"
import SelectRepository from "../../../common/SelectRepository/SelectRepository";
import Technologies from "../../../common/Technologies/Technologies";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {

    const [isOpenSelect1, setIsOpenSelect1] = useState(false)
    const [isOpenSelect2, setIsOpenSelect2] = useState(false)
    const navigate = useNavigate()

    return (
        <div className="projects">
            <div className="projectsContent">
                <h3 className="titleProjects">Mi trabajo</h3>
                <div className="bentoProjects">
                    <div className="box bookify-box" style={{ gridArea: "box-1" }}>
                        <h2 className="titleProject">Bookify</h2>
                        <p className="description">Es una plataforma para que empresas puedan gestionar los turnos de sus clientes de manera efectiva.</p>
                    </div>
                    <div className="box bookify-box features-bookify-box" style={{ gridArea: "box-2" }}>
                        <div className="featuresBookify">
                            <div className="featureBookify">
                                <DollarIcon
                                    width={window.innerWidth < 1350 ? "20" : "30"}
                                    height="30"
                                    fill="white"
                                />
                                <h3 className="titleFeatureBookify">Cobro de señas</h3>
                            </div>
                            <div className="featureBookify">
                                <CashStackIcon
                                    width={window.innerWidth < 1350 ? "20" : "30"}
                                    height="30"
                                    fill="white"
                                />
                                <h3 className="titleFeatureBookify">Sistema de reembolsos</h3>
                            </div>
                            <div className="featureBookify">
                                <BellIcon
                                    width={window.innerWidth < 1350 ? "20" : "30"}
                                    height="30"
                                    fill="white"
                                />
                                <h3 className="titleFeatureBookify">Notificaciones automáticas</h3>
                            </div>
                        </div>
                        <div className="buttonsProject buttonsProjectBookify">
                            <Button styleButton="primary" color="white" onClick={() => navigate("/bookify-detail")}>Ver detalles</Button>
                            <div
                                onMouseEnter={() => setIsOpenSelect1(true)}
                                onMouseLeave={() => setIsOpenSelect1(false)}
                                style={{ position: 'relative' }}
                            >
                                <Button styleButton="secondary" arrow color="white" onClick={() => setIsOpenSelect1(!isOpenSelect1)}>Ver código</Button>
                                <SelectRepository
                                    isOpen={isOpenSelect1}
                                    onSelectOption1={() => window.open('https://github.com/valentinoaraya/bookify-frontend', '_blank')}
                                    onSelectOption2={() => window.open('https://github.com/valentinoaraya/bookify-backend', '_blank')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="box bookify-box bookify-image-box" style={{ gridArea: "box-3" }}>
                        <div className="image-container">
                            <img className="bookifyImage" src={panelBookify} alt="Panel Bookify" />
                            <Technologies position="end" technologies={["typescript", "react", "express", "node", "mongodb"]} borderRadius="0 0 10px 10px" />
                        </div>
                    </div>
                    <div className="box ventatrack-box ventatrack-image-box" style={{ gridArea: "box-4" }}>
                        <div className="image-container">
                            <img className="imageVentaTrack" src={panelVentaTrack} alt="Panel de VentaTrack" />
                            <Technologies position="end" technologies={["react", "firebase",]} borderRadius={window.innerWidth <= 850 ? "10px" : ""} />
                        </div>
                    </div>
                    <div className="box ventatrack-box data-ventatrack-box" style={{ gridArea: "box-5" }}>
                        <div className="dataVentaTrack">
                            <h2 className="titleProject">VentaTrack</h2>
                            <p className="description">Software para gestión de ventas, cuenta con historial y tabla de productos. Ideal para cualquier tipo de negocio.</p>
                        </div>
                        <div className="buttonsProject">
                            <Button styleButton="primary" color="white" onClick={() => navigate("/ventatrack-detail")}>Ver detalles</Button>
                            <Button styleButton="secondary" arrow color="white" onClick={() => window.open('https://github.com/valentinoaraya/ventatrack', '_blank')}>Ver código</Button>
                        </div>
                    </div>
                    <div className="box turnero-box data-turnero-box" style={{ gridArea: "box-6" }}>
                        <div className="dataTurnero">
                            <h2 className="titleProject">Turnero PAMI</h2>
                            <p className="description descriptionTurnero">Sistema de gestión de turnos desarrollado para una clínica con varios doctores que atienden pacientes PAMI. Cuenta con un panel de administración, donde se pueden agregar, editar y eliminar doctores, administrar el calendario de turnos de los mismos, y visualizar los turnos pendientes dentro de una tabla.</p>
                        </div>
                        <div className="buttonsProject">
                            <Button styleButton="primary" color="white" onClick={() => console.log("ver detalles")}>Ver detalles</Button>
                        </div>
                    </div>
                    <div className="box turnero-box image-turnero-box" style={{ gridArea: "box-7" }}>
                        <div className="image-container">
                            <img className="imageTurnero" src={panelTurnero} alt="Panel Turnero PAMI" />
                            <Technologies position="end" technologies={["react", "express", "node", "mysql"]} borderRadius="0 0 10px 10px" />
                        </div>
                    </div>
                    <div className="box sportymaxx-box" style={{ gridArea: "box-8" }}>
                        <div className="divImageSportyMaxx">
                            <img className="imgSportyMaxx" src={sportyMaxxPage} alt="Página principal de SportyMaxx" />
                            <Technologies position="end" technologies={["react", "express", "node", "firebase"]} borderRadius="" />

                        </div>
                        <div className="divDataSportyMaxx">
                            <div className="dataSportyMaxx">
                                <h2 className="titleProject">SportyMaxx</h2>
                                <p className="description descriptionSportyMaxx">Comercio electrónico desarrollado para una empresa dedicada a la venta de ropa. Cuenta con interfaces para que  el administrador (dueño) pueda subir, editar y eliminar productos cuando desee.</p>
                            </div>
                            <div className="buttonsProject buttonsSportyMaxx">
                                <Button styleButton="primary" color="white" onClick={() => console.log("ver detalles")}>Ver detalles</Button>
                                <div
                                    onMouseEnter={() => setIsOpenSelect2(true)}
                                    onMouseLeave={() => setIsOpenSelect2(false)}
                                    style={{ position: 'relative' }}
                                >
                                    <Button styleButton="secondary" arrow color="white" onClick={() => setIsOpenSelect2(!isOpenSelect2)}>Ver código</Button>
                                    <SelectRepository
                                        isOpen={isOpenSelect2}
                                        onSelectOption1={() => window.open('https://github.com/valentinoaraya/SportyMaxx', '_blank')}
                                        onSelectOption2={() => window.open('https://github.com/valentinoaraya/sporty-maxx-backend', '_blank')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box sportymaxx-image" style={{ gridArea: "box-9" }}>
                        <div className="image-container">
                            <img className="imageVentaTrack" src={sportyMaxxPage} alt="Página de SportyMaxx" />
                            <Technologies position="end" technologies={["react", "express", "node", "firebase"]} borderRadius="10px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
