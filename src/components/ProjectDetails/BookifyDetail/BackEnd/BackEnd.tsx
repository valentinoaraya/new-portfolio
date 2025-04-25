import "./BackEnd.css"
import { NumberOneIcon, NumberTwoIcon, NumberThreeIcon, NumberFourIcon } from "../../../../common/Icons/Icons"
import imageStructure from "../../../../assets/images/bookify/backend/estructura-principal.png"
import imageStructureFolders from "../../../../assets/images/bookify/backend/estructura-carpetas.png"
import imageConfig from "../../../../assets/images/bookify/backend/config.png"
import imageAuth from "../../../../assets/images/bookify/backend/flujo-auth.png"
import imageToken from "../../../../assets/images/bookify/backend/Captura de pantalla de 2025-04-13 19-49-59.png"
import imageVinculation from "../../../../assets/images/bookify/backend/flujoVinculacion.png"
import imagePayment from "../../../../assets/images/bookify/backend/flujo-pago.png"
import imagePaymentComplete from "../../../../assets/images/bookify/backend/flujo-confirmar-turno.png"
import imageReturn from "../../../../assets/images/bookify/backend/flujo-reembolso.png"
import imageSendEmail from "../../../../assets/images/bookify/backend/sendEmailFunction.png"
import imageReminders from "../../../../assets/images/bookify/backend/remindersFunction.png"
import imageDatabaseClean from "../../../../assets/images/bookify/backend/deleteAppointments.png"

const BackEnd: React.FC<{ color: string }> = ({ color }) => {
    return (
        <div className="sectionBackend divWithMaxWidth">
            <div className="sectionContent">
                <div className="structureSection">
                    <div style={{ borderBottom: `1px solid ${color}` }} className="titleSectionContainer">
                        <h2 className="titleSection">Estructura general</h2>
                    </div>
                    <div className="descriptionAndImage">
                        <p>Este es un diagrama para representar como interactúan las partes del sistema.</p>
                        <div className="imageContainer" style={{ margin: "1rem 0" }}>
                            <img className="image" src={imageStructure} alt="Estructura sistema" />
                        </div>
                    </div>
                    <div className="structureFolders">
                        <div className="structureFoldersDescription">
                            <p>Utilicé una arquitectura por capas (Layered Architecture) o Modular Folder Structure.</p>
                            <p>Separo mi código en capas funcionales como: </p>
                            <ul>
                                <li>
                                    <span className="spanUL">controllers/ </span> lógica que responde a las rutas (controladores).
                                </li>
                                <li>
                                    <span className="spanUL">routes/ </span> definición de endpoints y enrutamiento.
                                </li>
                                <li>
                                    <span className="spanUL">models/ </span> modelos para MongoDB.
                                </li>
                                <li>
                                    <span className="spanUL">middlewares/ </span> middlewares para validaciones, tokens, etc.
                                </li>
                                <li>
                                    <span className="spanUL">services/ </span> lógica de conexión a APIs externas (como Mercado Pago).
                                </li>
                                <li>
                                    <span className="spanUL">utils/ </span> funciones reutilizables.
                                </li>
                                <li>
                                    <span className="spanUL">config.ts, index.ts, etc. </span> configuración global y punto de entrada.
                                </li>
                            </ul>
                        </div>
                        <div className="imagesContainer">
                            <div className="imageContainer">
                                <img className="image" src={imageStructureFolders} alt="Estructura de carpetas" />
                            </div>
                            <div className="imageContainer imageToDelete">
                                <img className="image" src={imageConfig} alt="Estructura de carpetas" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="securitySection">
                    <div style={{ borderBottom: `1px solid ${color}` }} className="titleSectionContainer">
                        <h2 className="titleSection">Seguridad</h2>
                    </div>
                    <p className="descriptionSecurity">Para la autenticación de usuarios y seguridad en las peticiones utilicé JSON Web Tokens en cada petición que se enviaba para desencriptar con mi firma los datos del usuario y evaluar la petición.</p>
                    <p className="descriptionSecurity">Para la generación y comparación de contraseñas utilicé bcrypt. Me permite realizar un hash a la contraseña que el usuario ingrese cuando se va a registrar y guardarla, luego cuando el usuario se loguee me permite comparar la contraseña del usuario con la contraseña almacenada en la base de datos.</p>
                    <div className="subSectionSecurity">
                        <h3 className="subtitleSection">Autenticación de usuarios</h3>
                        <div className="imageAndSteps">
                            <div style={{ width: "300px" }} className="imageContainer">
                                <img className="image" src={imageAuth} alt="Flujo de autenticación" />
                            </div>
                            <div style={{ width: "50%" }} className="stepsContainer">
                                <div className="step">
                                    <div className="titleIconStep">
                                        <NumberOneIcon
                                            width="20"
                                            height="20"
                                            fill="#E2CFEA"
                                        />
                                        <h4 className="stepTitle">Usuario se loguea</h4>
                                    </div>
                                    <p className="stepDescription">Cuando el usuario se loguea en la plataforma, envía  una petición POST con su correo electróico y su contraseña al endpoint  “/users/login”.</p>
                                </div>
                                <div className="step">
                                    <div className="titleIconStep">
                                        <NumberTwoIcon
                                            width="20"
                                            height="20"
                                            fill="#E2CFEA"
                                        />
                                        <h4 className="stepTitle">Validación de datos</h4>
                                    </div>
                                    <p className="stepDescription">El backend verifica los datos ingresados por el usuario. Primero se revisa que el usuario exista buscando el documento por su correo en la base de datos, si el usuario existe, compara la contraseña ingresada y la contraseña almacenada en la base de datos utilizando bcrypt.</p>
                                </div>
                                <div className="step">
                                    <div className="titleIconStep">
                                        <NumberThreeIcon
                                            width="20"
                                            height="20"
                                            fill="#E2CFEA"
                                        />
                                        <h4 className="stepTitle">Generación de token</h4>
                                    </div>
                                    <p className="stepDescription">Si los datos coinciden, se genera un token de autenticación con JWT. Una vez generado el token se envía en la respuesta al frontend.</p>
                                </div>
                                <div className="step">
                                    <div className="titleIconStep">
                                        <NumberFourIcon
                                            width="20"
                                            height="20"
                                            fill="#E2CFEA"
                                        />
                                        <h4 className="stepTitle">Almacenamiento de token</h4>
                                    </div>
                                    <p className="stepDescription">Se envía el token al frontend, el cuál al recibirlo lo guarda en localStorage para utilizarlo en futuras peticiones.</p>
                                </div>
                            </div>
                        </div>
                        <p style={{ margin: "2rem 0" }}>Luego, para cada petición que realiza el usuario se utiliza un middleware para autenticarlo</p>
                        <div className="imageTokenContainer">
                            <div className="imageContainer">
                                <img className="image" src={imageToken} alt="Middleware para desencriptar tokens" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="paymentsSection">
                    <div style={{ borderBottom: `1px solid ${color}` }} className="titleSectionContainer">
                        <h2 className="titleSection">Pagos y reembolsos</h2>
                    </div>
                    <p className="descriptionSecurity">Para que una empresa pueda recibir pagos en Bookify debe autorizar a Bookify a cobrar a su nombre. Para autorizar, Bookify automáticamente detecta si la empresa está vinculada con Mercado Pago o no, en caso de qué no esté vinculada se muestra un botón “Vincularse con Mercado Pago” en el frontend, donde al clickear se envía una petición al endpoint donde se genera una URL de autorización a la cuál el usuario es redirigido para completar la autorización.</p>
                    <div className="subSectionSecurity">
                        <h3 className="subtitleSection">Vincularse a Mercado Pago</h3>
                        <div className="imageContainer">
                            <img className="image" src={imageVinculation} alt="Flujo de vinculación con Mercado Pago" />
                        </div>
                    </div>
                    <div className="subSectionSecurity">
                        <h3 className="subtitleSection">Pagos con Mercado Pago</h3>
                        <div className="imageAndSteps">
                            <div className="imageContainer">
                                <img className="image" src={imagePayment} alt="Flujo de pago" />
                            </div>
                            <div style={{ width: "80%", display: "flex", flexDirection: "column", justifyContent: "space-between" }} className="stepsContainer">
                                <div className="steps">
                                    <div className="step">
                                        <div className="titleIconStep">
                                            <NumberOneIcon
                                                width="20"
                                                height="20"
                                                fill="#E2CFEA"
                                            />
                                            <h4 className="stepTitle">Crear preferencia de pago</h4>
                                        </div>
                                        <p className="stepDescription">El cliente confirma que quiere pagar con Mercado Pago y se envía una petición al endpoint donde generamos la preferencia de pago. Cuando se resuelve, devolvemos el link donde el usuario realizará el pago a la empresa.</p>
                                    </div>
                                    <div className="step">
                                        <div className="titleIconStep">
                                            <NumberTwoIcon
                                                width="20"
                                                height="20"
                                                fill="#E2CFEA"
                                            />
                                            <h4 className="stepTitle">Confirmar Pago</h4>
                                        </div>
                                        <p className="stepDescription">Una vez que el usuario realizó el pago, Mercado Pago se comunica mediante Webhooks con un endpoint en el backend donde envía la información del pago, los datos del usuario, de la empresa, y del turno para el que se realizó el pago.</p>
                                    </div>
                                    <div className="step">
                                        <div className="titleIconStep">
                                            <NumberThreeIcon
                                                width="20"
                                                height="20"
                                                fill="#E2CFEA"
                                            />
                                            <h4 className="stepTitle">Agendar turno</h4>
                                        </div>
                                        <p className="stepDescription">En caso de que el pago haya sido aprobado se le agenda el turno al cliente con el día y horario correspondiente.</p>
                                    </div>
                                </div>
                                <div className="imageContainer imageToDelete">
                                    <img className="image" src={imagePaymentComplete} alt="Flujo de pago completado" />
                                </div>
                            </div>
                        </div>
                        <div style={{ margin: "2rem 0" }} className="imageContainer imageToEnter">
                            <img className="image" src={imagePaymentComplete} alt="Flujo de pago completado" />
                        </div>
                    </div>
                    <div className="subSectionSecurity">
                        <h3 className="subtitleSection">Sistema de reembolsos</h3>
                        <p className="descriptionSecurity">Cuando un cliente o empresa cancela un turno, se envía una petición un endpoint donde se calcula el monto a reembolsar, luego enviamos una petición a la API de Mercado Pago con información del pago que realizó el cliente y luego, Mercado pago se encarga de realizar el reembolso.</p>
                        <p className="descriptionSecurity">En caso de que un usuario haya pagado una seña para un turno, y el mismo cancele el turno (solo puede hacerlo con más de 24 horas de anticipación) se le devuelve el 50% del dinero que abonó para poder confirmar el turno. En el caso de que la empresa sea quién cancele el turno (puede hacerlo cuando desee), se le devuelve la totalidad del dinero al cliente.</p>
                        <div style={{ margin: "2rem 0" }} className="imageContainer">
                            <img className="image" src={imageReturn} alt="Flujo de cancelación de turnos" />
                        </div>
                    </div>
                </div>
                <div className="notificationsSection">
                    <div style={{ borderBottom: `1px solid ${color}` }} className="titleSectionContainer">
                        <h2 className="titleSection">Notificaciones y recordatorios</h2>
                    </div>
                    <div className="imageAndDescription">
                        <div className="descriptionNotification">
                            <p className="descriptionSecurity">Cada vez que se realiza una acción como confirmar o cancelar un turno, se notifica a la empresa y al usuario de dicha acción. Esto lo realizo implementando Nodemailer para el envío de mails y Brevo como host.</p>
                            <p className="descriptionSecurity">Utilizo algunas plantillas de emails dependiendo a quién vaya dirigido (empresa o cliente).</p>
                        </div>
                        <div className="imageNotification">
                            <div style={{ width: "100%" }} className="imageContainer">
                                <img className="image" src={imageSendEmail} alt="Función de enviar email" />
                            </div>
                        </div>
                    </div>
                    <div className="subSectionSecurity">
                        <h3 className="subtitleSection">Recordatorios</h3>
                        <p className="descriptionSecurity">Le recordamos a los clientes sobre los turnos que tienen agendados cuando el turno es al día siguiente. Utilizamos node-cron para ejecutar la función de recordatorios todos los días a una hora determinada. La función obtiene todos los turnos que con la fecha de mañana y envía un recordatorio a los clientes que tienen esos turnos.</p>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div style={{ width: "80%", margin: "2rem 0" }} className="imageContainer">
                                <img className="image" src={imageReminders} alt="Función de enviar recordatorios" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="databaseSection">
                    <div style={{ borderBottom: `1px solid ${color}` }} className="titleSectionContainer">
                        <h2 className="titleSection">Limpieza de la base de datos</h2>
                    </div>
                    <p className="descriptionSecurity">Para no sobrecargar la base de datos con datos viejos que no se utilizan, implementé una función que elimina todos los turnos agendados y habilitados para agendar anteriores al día actual. La función se ejecuta con node-cron a una cierta hora todos los días.</p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ width: "80%", margin: "2rem 0" }} className="imageContainer">
                            <img className="image" src={imageDatabaseClean} alt="Función de limpiar base de datos" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackEnd;
