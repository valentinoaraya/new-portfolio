import "./BackEnd.css"
import { NumberOneIcon, NumberTwoIcon, NumberThreeIcon, NumberFourIcon } from "../../../../common/Icons/Icons";

const BackEnd: React.FC<{ color: string }> = ({ color }) => {
    return (
        <div className="divWithMaxWidth">
            <div className="sectionContent">
                <div style={{ borderBottom: `1px solid ${color}` }} className="titleSectionContainer">
                    <h2 className="titleSection">Estructura general</h2>
                </div>
                <div className="structureFoldersDescription">
                    <p>No es un Back End con mucha complejidad. Implementa las medidas de seguridad necesarias, enrutamiento, autenticación, una arquitectura RESTful y utiliza MySQL como base de datos.</p>
                    <p>El proyecto está organizado en tres rutas principales:</p>
                    <ul>
                        <li>
                            <span className="spanUL">/appointments </span> donde se realiza la gestión de los turnos.
                        </li>
                        <li>
                            <span className="spanUL">/login </span> donde se gestiona la autorización y autenticación.
                        </li>
                        <li>
                            <span className="spanUL">/doctors </span> donde se realiza la gestión de doctores.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sectionContent">
                <div style={{ borderBottom: `1px solid ${color}` }} className="titleSectionContainer">
                    <h2 className="titleSection">Características de seguridad</h2>
                </div>
                <h3 className="subtitleSection">Protección de contraseñas</h3>
                <ul className="ulSteps">
                    <li>
                        Uso de bcrypt para el hash de contraseñas.
                    </li>
                    <li>
                        Almacenamiento seguro en la base de datos.
                    </li>
                </ul>
                <h3 className="subtitleSection">Autenticación JWT</h3>
                <ul className="ulSteps">
                    <li>
                        Tokens firmados con una clave secreta.
                    </li>
                    <li>
                        Información del usuario codificada en el token.
                    </li>
                    <li>
                        Verificación de tokens en cada petición.
                    </li>
                </ul>
                <h3 className="subtitleSection">Manejo de errores</h3>
                <ul className="ulSteps">
                    <li>
                        Respuestas HTTP apropiadas para diferentes situaciones.
                    </li>
                    <li>
                        Mensajes de error descriptivos.
                    </li>
                    <li>
                        Manejo de excepciones en operaciones asincrónicas.
                    </li>
                </ul>
            </div>
            <div className="sectionContent">
                <div style={{ borderBottom: `1px solid ${color}` }} className="titleSectionContainer">
                    <h2 className="titleSection">Sistema de autenticación</h2>
                </div>
                <p style={{ marginBottom: "2rem" }}>En el proyecto, implemento el siguiente sistema de seguridad:</p>
                <h3 className="subtitleSection">Autenticación de usuarios</h3>
                <p className="stepDescription">Ruta
                    <span className="spanRoute" style={{
                        backgroundColor: color,
                        marginLeft: ".5rem",
                        padding: ".1rem",
                        borderRadius: "5px"
                    }}>
                        POST /login/login-admin
                    </span>
                </p>
                <ul className="ulSteps">
                    <li>
                        Primero se verifican las credenciales contra la base de datos.
                    </li>
                    <li>
                        Se utiliza bcrypt para comparar contraseñas hasheadas.
                    </li>
                    <li>
                        Geneara un token JWT con información del usuraio.
                    </li>
                    <li>
                        El token incluye: id, username y rol del administrador.
                    </li>
                </ul>
                <h3 className="subtitleSection">Verificación de Token</h3>
                <p className="stepDescription">Ruta
                    <span className="spanRoute" style={{
                        backgroundColor: color,
                        marginLeft: ".5rem",
                        padding: ".1rem",
                        borderRadius: "5px"
                    }}>
                        GET /login/verify-token
                    </span>
                </p>
                <ul className="ulSteps">
                    <li>
                        Verifica la validez del token.
                    </li>
                    <li>
                        Se utiliza para proteger las rutas que requieren autenticación.
                    </li>
                </ul>
            </div>
            <div className="sectionContent">
                <div style={{ borderBottom: `1px solid ${color}` }} className="titleSectionContainer">
                    <h2 className="titleSection">Base de datos</h2>
                </div>
                <p>Utiliza MySQL con un pool de conexiones. La configuración se realiza mediante variables de entorno como:</p>
                <ul className="ulSteps">
                    <li>
                        Host
                    </li>
                    <li>
                        Usuario
                    </li>
                    <li>
                        Contraseña
                    </li>
                    <li>
                        Nombre de la base de datos
                    </li>
                </ul>
            </div>
            <div className="sectionContent">
                <div style={{ borderBottom: `1px solid ${color}` }} className="titleSectionContainer">
                    <h2 className="titleSection">Configuración del servidor</h2>
                </div>
                <p>Una vez finalizado el Back End había que desplegarlo.</p>
                <h3 className="subtitleSection">Despliegue del proyecto</h3>
                <div className="stepsContainer">
                    <div className="step">
                        <div className="titleIconStep">
                            <NumberOneIcon
                                width="20"
                                height="20"
                                fill="#E2CFEA"
                            />
                            <h4 className="stepTitle">Se compró un VPS</h4>
                        </div>
                        <p className="stepDescription">Se compró un servidor VPS (Virtual Private Server) en Hostinger con sistema operativo Linux para alojar la API y que quede siempre corriendo.</p>
                    </div>
                    <div className="step">
                        <div className="titleIconStep">
                            <NumberTwoIcon
                                width="20"
                                height="20"
                                fill="#E2CFEA"
                            />
                            <h4 className="stepTitle">Configuración del servidor</h4>
                        </div>
                        <p className="stepDescription">Mediante SSH se accedió al servidor y se instalaron las dependencias básicas (curl git nginx) y luego se instaló Node.js</p>
                    </div>
                    <div className="step">
                        <div className="titleIconStep">
                            <NumberThreeIcon
                                width="20"
                                height="20"
                                fill="#E2CFEA"
                            />
                            <h4 className="stepTitle">Clonación del proyecto en el servidor</h4>
                        </div>
                        <p className="stepDescription">Se creó un directorio para la aplicación y se clonó el repositorio de GitHub. Se instalaron las dependencias con npm y se creó el archivo .env con las variables de entorno correspondientes.</p>
                    </div>
                    <div className="step">
                        <div className="titleIconStep">
                            <NumberFourIcon
                                width="20"
                                height="20"
                                fill="#E2CFEA"
                            />
                            <h4 className="stepTitle">Mantener la API en ejecución</h4>
                        </div>
                        <p className="stepDescription">Se instaló PM2, se inició la aplicación y se configuró para que inicie con el sistema.</p>
                    </div>
                </div>
            </div>
            <div className="sectionContent">
                <div style={{ borderBottom: `1px solid ${color}` }} className="titleSectionContainer">
                    <h2 className="titleSection">Buenas prácticas implementadas</h2>
                </div>
                <h3 className="subtitleSection">Seguridad</h3>
                <ul className="ulSteps">
                    <li>
                        Uso de variables de entorno para datos sensibles.
                    </li>
                    <li>
                        Implementación de JWT para autenticación.
                    </li>
                    <li>
                        Hash de contraseñas.
                    </li>
                </ul>
                <h3 className="subtitleSection">Organización</h3>
                <ul className="ulSteps">
                    <li>
                        Separación de rutas en módulos.
                    </li>
                    <li>
                        Código modular y mantenible.
                    </li>
                    <li>
                        Estructura clara del proyecto.
                    </li>
                </ul>
                <h3 className="subtitleSection">Manejo de errores</h3>
                <ul className="ulSteps">
                    <li>
                        Try-catch en operaciones asincrónicas.
                    </li>
                    <li>
                        Respuestas HTTP apropiadas para diferentes situaciones.
                    </li>
                    <li>
                        Mensajes de error descriptivos.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BackEnd;
