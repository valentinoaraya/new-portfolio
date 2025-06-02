import "./FrontEnd.css"
import SectionWithImages from "../../common/SectionWithImages/SectionWithImages";
import clandarClientImage from "../../../../assets/images/turnero/frontend/calendarioCliente.webp"
import mainPageImage from "../../../../assets/images/turnero/frontend/paginaPrincipal.webp"
import adminPanelImage from "../../../../assets/images/turnero/frontend/adminPanel.webp"
import confirmFormImage from "../../../../assets/images/turnero/frontend/formularioConfirmacion.webp"
import doctorCalendarImage from "../../../../assets/images/turnero/frontend/calendarioDoctor.webp"

const FrontEnd: React.FC<{ color: string }> = ({ color }) => {
    return (
        <>
            <SectionWithImages
                title="Interfaz del usuario"
                description={`Lo primero con lo que se encuentra el usuario cuando entra a la web es con una lista de todos los doctores que trabajan en la clínica.\n El usuario puede seleccionar al doctor que desee, al seleccionarlo, se enviará al usuario al calendario del doctor seleccionado.\n En el calndario, el usuario verá todos los turnos habilitados del doctor, si el doctor no cuenta con turnos se mostrará un cartel que indica que no hay turnos disponibles para ese doctor.\nEl usuario puede navegar hacia delante por semanas para buscar algún turno disponible.\n La interfaz web cuenta con un diseño totalmente responsive para que los usuarios y los administradores puedan manejar tanto desde una computadora como desde un celular.`}
                images={[mainPageImage, clandarClientImage]}
                color={color}
            />
            <SectionWithImages
                title="Interfaz del administrador"
                description={`El administrador de los turnos es quien se encarga de habilitar y deshabilitar los turnos de cada doctor. Además de poder agregar, editar y eliminar doctores.\nPara acceder a esta interfaz, el administrador cuenta con una URL especial, al ingresar a ella se piden credenciales de usuario y contraseña.\nEn la interfaz se encuentra una lista con todos los doctores disponibles, y una tabla con todos los turnos agendados a partir del día actual.\nAl seleccionar un doctor, se enviará al administrador al calendario de ese doctor, donde puede habilitar y deshabilitar turnos en el día y horario que desee. Además, en la tabla de turnos agendados el administrador podrá eliminar algún turno si así lo desea.`}
                images={[adminPanelImage]}
                color={color}
            />
            <SectionWithImages
                title="Calendario de doctor"
                description={`Cuando el administrador selecciona un doctor desde el panel de administrador, se le muestra este calendario, donde clickeando en un horario, el turno se habilita automáticamente, y pasa a estar disponible en el calendario que visualiza el usuario.\nSi el administrador selecciona un turno habilitado, éste se deshabilitará automáticamente. En el caso de que el turno esté tomado, se le notificará al administrador que no es posible deshabilitar ese turno.`}
                images={[doctorCalendarImage]}
                color={color}
            />
            <SectionWithImages
                title="Formulario de confirmación"
                description={`Cuando un usuario selecciona un turno, se le redirige hacia un formulario de confirmación, donde debe colocar sus datos.\nAl confirmar, el turno se agenda en la base de datos y automáticamente se le descarga al usuaio un comprobante de confirmación, el cuál deberá presentar a la hora de tomar el turno.`}
                images={[confirmFormImage]}
                color={color}
            />
        </>
    );
}

export default FrontEnd;
