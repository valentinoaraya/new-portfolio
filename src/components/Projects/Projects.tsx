import "./Projects.css"
import { DollarIcon, CashStackIcon, BellIcon } from "../../common/Icons/Icons";
import Button from "../../common/Button/Button";
import panelBookify from "../../assets/images/panelBookify.png"
import panelVentaTrack from "../../assets/images/panelImage.png"
import panelTurnero from "../../assets/images/calendarioDoctor.webp"
import sportyMaxxPage from "../../assets/images/sportymaxxPage.png"

const Projects = () => {
    return (
        <div className="projects">
            <div className="projectsContent">
                <h3 className="titleProjects">Mi trabajo</h3>
                <div className="bentoProjects">
                    <div className="box bookify-box" style={{ gridArea: "box-1" }}>
                        <h2 className="titleProject">Bookify</h2>
                        <p className="description bookifyDescription">Es una plataforma para que empresas puedan gestionar los turnos de sus clientes de manera efectiva.</p>
                    </div>
                    <div className="box bookify-box features-bookify-box" style={{ gridArea: "box-2" }}>
                        <div className="featuresBookify">
                            <div className="featureBookify">
                                <DollarIcon
                                    width="40"
                                    height="40"
                                    fill="white"
                                />
                                <h3 className="titleFeatureBookify">Cobro de señas</h3>
                            </div>
                            <div className="featureBookify">
                                <CashStackIcon
                                    width="40"
                                    height="40"
                                    fill="white"
                                />
                                <h3 className="titleFeatureBookify">Sistema de reembolsos</h3>
                            </div>
                            <div className="featureBookify">
                                <BellIcon
                                    width="40"
                                    height="40"
                                    fill="white"
                                />
                                <h3 className="titleFeatureBookify">Notificaciones automáticas</h3>
                            </div>
                        </div>
                        <div className="buttonsProject">
                            <Button styleButton="primary" color="white" onClick={() => console.log("ver detalles")}>Ver detalles</Button>
                            <Button styleButton="secondary" arrow color="white" onClick={() => console.log("ver código")}>Ver código</Button>
                        </div>
                    </div>
                    <div className="box bookify-box bookify-image-box" style={{ gridArea: "box-3" }}>
                        <img className="bookifyImage" src={panelBookify} alt="Panel Bookify" />
                    </div>
                    <div className="box ventatrack-box ventatrack-image-box" style={{ gridArea: "box-4" }}>
                        <img className="imageVentaTrack" src={panelVentaTrack} alt="Panel de VentaTrack" />
                    </div>
                    <div className="box ventatrack-box data-ventatrack-box" style={{ gridArea: "box-5" }}>
                        <div className="dataVentaTrack">
                            <h2 className="titleProject">VentaTrack</h2>
                            <p className="description">Software para gestión de ventas, cuenta con historial y tabla de productos. Ideal para cualquier tipo de negocio.</p>
                        </div>
                        <div className="buttonsProject">
                            <Button styleButton="primary" color="white" onClick={() => console.log("ver detalles")}>Ver detalles</Button>
                            <Button styleButton="secondary" arrow color="white" onClick={() => console.log("ver código")}>Ver código</Button>
                        </div>
                    </div>
                    <div className="box turnero-box data-turnero-box" style={{ gridArea: "box-6" }}>
                        <div className="dataTurnero">
                            <h2 className="titleProject">Turnero PAMI</h2>
                            <p className="description descriptionTurnero">Sistema de gestión de turnos desarrollado para una clínica con varios doctores que atienden pacientes PAMI. Cuenta con un panel de administración, donde se pueden agregar, editar y eliminar doctores, administrar el calendario de turnos de los mismos, y visualizar los turnos pendientes dentro de una tabla.</p>
                        </div>
                        <div className="buttonsProject">
                            <Button styleButton="primary" color="white" onClick={() => console.log("ver detalles")}>Ver detalles</Button>
                            <Button styleButton="secondary" arrow color="white" onClick={() => console.log("ver código")}>Ver código</Button>
                        </div>
                    </div>
                    <div className="box turnero-box image-turnero-box" style={{ gridArea: "box-7" }}>
                        <img className="imageTurnero" src={panelTurnero} alt="Panel Turnero PAMI" />
                    </div>
                    <div className="box sportymaxx-box" style={{ gridArea: "box-8" }}>
                        <div className="divImageSportyMaxx">
                            <img className="imgSportyMaxx" src={sportyMaxxPage} alt="Página principal de SportyMaxx" />
                        </div>
                        <div className="divDataSportyMaxx">
                            <div className="dataSportyMaxx">
                                <h2 className="titleProject">SportyMaxx</h2>
                                <p className="description descriptionSportyMaxx">Comercio electrónico desarrollado para una empresa dedicada a la venta de ropa. Cuenta con interfaces para que  el administrador (dueño) pueda subir, editar y eliminar productos cuando desee.</p>
                            </div>
                            <div className="buttonsProject buttonsSportyMaxx">
                                <Button styleButton="primary" color="white" onClick={() => console.log("ver detalles")}>Ver detalles</Button>
                                <Button styleButton="secondary" arrow color="white" onClick={() => console.log("ver código")}>Ver código</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
