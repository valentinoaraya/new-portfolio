import "./BackEnd.css"
import { NumberOneIcon, NumberTwoIcon, NumberThreeIcon, NumberFourIcon } from "../../../../common/Icons/Icons"
import imageStructure from "../../../../assets/images/sportymaxx/backend/estructuraGeneral.webp"
import foldersStructure from "../../../../assets/images/sportymaxx/backend/estructuraCarpetas.webp"
import foldersImage from "../../../../assets/images/sportymaxx/backend/foldersImage.webp"
import verifyTokenImage from "../../../../assets/images/sportymaxx/backend/verifytokenSporty.webp"
import processBuyImage from "../../../../assets/images/sportymaxx/backend/procesoCompra.webp"
import uploadImage from "../../../../assets/images/sportymaxx/backend/cargarImagen.webp"
import addProductImage from "../../../../assets/images/sportymaxx/backend/addProduct.webp"

const BackEnd: React.FC<{ color: string }> = ({ color }) => {
    return (
        <div className="divWithMaxWidth sectionBackend">
            <div className="sectionContent">
                <div className="structureSection">
                    <div style={{ borderBottom: `1px solid ${color}` }} className="titleSectionContainer">
                        <h2 className="titleSection">Estructura general</h2>
                    </div>
                    <div className="descriptionAndImage">
                        <p>Este es un diagrama para representar como interactúan las partes del sistema.</p>
                        <div className="imageContainerSportymaxx" style={{ margin: "1rem 0" }}>
                            <img className="image" src={imageStructure} alt="Estructura sistema" />
                        </div>
                    </div>
                    <div className="structureFolders">
                        <div className="structureFoldersDescription">
                            <p>Separo mi código en capas funcionales como: </p>
                            <ul>
                                <li>
                                    <span className="spanUL">routes/ </span> definición de endpoints y enrutamiento.
                                </li>
                                <li>
                                    <span className="spanUL">services/ </span> servicios externos.
                                </li>
                                <li>
                                    <span className="spanUL">middlewares/ </span> middlewares para validaciones, tokens, etc.
                                </li>
                                <li>
                                    <span className="spanUL">db-managers/ </span> gestión de la base de datos.
                                </li>
                                <li>
                                    <span className="spanUL">uploads/ </span> directorio temporal para imágenes.
                                </li>
                                <li>
                                    <span className="spanUL">etc/ </span> archivos de configuración.
                                </li>
                                <li>
                                    <span className="spanUL">index.ts </span> punto de entrada.
                                </li>
                            </ul>
                        </div>
                        <div className="imagesContainer">
                            <div className="imageContainerSportymaxx">
                                <img className="image" src={foldersStructure} alt="Estructura de carpetas" />
                            </div>
                            <div className="imageContainerSportymaxx imageToDelete">
                                <img className="image" src={foldersImage} alt="Estructura de carpetas" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="securitySection sectionContent">
                <div style={{ borderBottom: `1px solid ${color}` }} className="titleSectionContainer">
                    <h2 className="titleSection">Seguridad</h2>
                </div>
                <div className="featuresSecurityContainer">
                    <div>
                        <h3 className="subtitleSectionSporty">Autenticación</h3>
                        <ul className="ulSteps">
                            <li>
                                Implementación de Firebase Authentication.
                            </li>
                            <li>
                                Middleware para proteger rutas.
                            </li>
                            <li>
                                Sistemas de roles (admin/usuario).
                            </li>
                            <li>
                                Tokens JWT para sesiones.
                            </li>
                        </ul>
                        <h3 className="subtitleSectionSporty">Protección de rutas</h3>
                        <ul className="ulSteps">
                            <li>
                                Rate limiting para prevenir ataques de fuerza bruta.
                            </li>
                            <li>
                                Validación de tokens en rutas administrativas.
                            </li>
                            <li>
                                Verificación de roles para operaciones sensibles.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="imageContainerSportymaxx">
                            <img className="image" src={verifyTokenImage} alt="Estructura de carpetas" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainFunctionsSection sectionContent">
                <div style={{ borderBottom: `1px solid ${color}` }} className="titleSectionContainer">
                    <h2 className="titleSection">Funcionalidades Principales</h2>
                </div>
                <div className="imageAndSteps">
                    <div className="stepsContainer">
                        <div className="step">
                            <div className="titleIconStep">
                                <NumberOneIcon
                                    width="20"
                                    height="20"
                                    fill="#E2CFEA"
                                />
                                <h4 className="stepTitle">Gestión de productos</h4>
                            </div>
                            <ul className="ulSteps">
                                <li>
                                    CRUD completo de productos.
                                </li>
                                <li>
                                    Almacenamiento de imágenes en Cloudinary.
                                </li>
                                <li>
                                    Categorización y gestión de stock.
                                </li>
                                <li>
                                    Validación de datos de productos.
                                </li>
                            </ul>
                        </div>
                        <div className="step">
                            <div className="titleIconStep">
                                <NumberTwoIcon
                                    width="20"
                                    height="20"
                                    fill="#E2CFEA"
                                />
                                <h4 className="stepTitle">Sistema de Órdenes</h4>
                            </div>
                            <ul className="ulSteps">
                                <li>
                                    Creación y gestión de órdenes de compra.
                                </li>
                                <li>
                                    Integración con Mercado Pago.
                                </li>
                                <li>
                                    Notificaciones por correo electrónico.
                                </li>
                                <li>
                                    Actualización automática de stock.
                                </li>
                            </ul>
                        </div>
                        <div className="step">
                            <div className="titleIconStep">
                                <NumberThreeIcon
                                    width="20"
                                    height="20"
                                    fill="#E2CFEA"
                                />
                                <h4 className="stepTitle">Manejo de Imágenes</h4>
                            </div>
                            <ul className="ulSteps">
                                <li>
                                    Subida de imágenes múltiples por producto.
                                </li>
                                <li>
                                    Almacenamiento en Cloudinary.
                                </li>
                                <li>
                                    Gestión de URLs públicas y privadas.
                                </li>
                                <li>
                                    Limpieza automática de archivos temporales.
                                </li>
                            </ul>
                        </div>
                        <div className="step">
                            <div className="titleIconStep">
                                <NumberFourIcon
                                    width="20"
                                    height="20"
                                    fill="#E2CFEA"
                                />
                                <h4 className="stepTitle">Notificaciones</h4>
                            </div>
                            <p>Se implementa un sistema de notificaciones de correos electrónicos para:</p>
                            <ul className="ulSteps">
                                <li>
                                    Confirmación de compras.
                                </li>
                                <li>
                                    Notificaciones al administrador.
                                </li>
                                <li>
                                    Actualización de estado de órdenes.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="imageSecurityContainer">
                        <div className="imageContainerSportymaxx imagePayment">
                            <img className="image" src={processBuyImage} alt="Flujo de pago" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="adminSection sectionContent">
                <div style={{ borderBottom: `1px solid ${color}` }} className="titleSectionContainer">
                    <h2 className="titleSection">Gestión administrativa</h2>
                </div>
                <div className="featuresSecurityContainer">
                    <div>
                        <p>El administardor cuenta con un panel de administración protegido.</p>
                        <p>En este panel, el administrador puede:</p>
                        <ul className="ulSteps">
                            <li>
                                Gestionar productos (Agregar, editar y eliminar).
                            </li>
                            <li>
                                Monitorear órdenes de compra.
                            </li>
                            <li>
                                Actualizar el stock de los productos.
                            </li>
                        </ul>
                    </div>
                    <div className="imageContainerSportymaxx">
                        <img className="image" src={uploadImage} alt="Panel de administración" />
                    </div>
                </div>
            </div>
            <div className="sectionContent">
                <div style={{ borderBottom: `1px solid ${color}` }} className="titleSectionContainer">
                    <h2 className="titleSection">Base de datos</h2>
                </div>

                <div className="featuresSecurityContainer">
                    <div>
                        <h3 className="subtitleSectionSporty">Colección "products"</h3>
                        <ul className="ulSteps">
                            <li>
                                Información detallada de productos.
                            </li>
                            <li>
                                URLs de imágenes.
                            </li>
                            <li>
                                Stock y categorías.
                            </li>
                        </ul>
                        <h3 className="subtitleSectionSporty">Colección "orders"</h3>
                        <ul className="ulSteps">
                            <li>
                                Detalles de compras.
                            </li>
                            <li>
                                Información del comprador.
                            </li>
                            <li>
                                Estado de la orden.
                            </li>
                        </ul>
                        <h3 className="subtitleSectionSporty">Colección "users"</h3>
                        <ul className="ulSteps">
                            <li>
                                Datos de usuarios.
                            </li>
                            <li>
                                Historial de órdenes.
                            </li>
                            <li>
                                Roles y permisos.
                            </li>
                        </ul>
                    </div>
                    <div className="divImageContainerSportymaxx">
                        <div className="imageContainerSportymaxx">
                            <img className="image" src={addProductImage} alt="Estructura de carpetas" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackEnd;
