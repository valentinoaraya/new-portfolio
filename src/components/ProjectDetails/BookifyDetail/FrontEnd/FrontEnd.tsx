import SectionWithImages from "../../common/SectionWithImages/SectionWithImages";
import mobileImage1 from "../../../../assets/images/bookify/frontend/mobileImage1.webp"
import mobileImage2 from "../../../../assets/images/bookify/frontend/mobileImage2.webp"
import clientInterfaceImage from "../../../../assets/images/bookify/frontend/turnosDisponibles.webp"
import companyInterfaceImage from "../../../../assets/images/bookify/frontend/companyInterface.webp"

const FrontEnd: React.FC<{ color: string }> = ({ color }) => {
    return (
        <>
            <SectionWithImages
                title="Librerías y diseño"
                description={`El diseño de la aplicación fue realizado en Figma y luego llevado a código utilizando React + Vite como framework y TypeScript como lenguaje.\nLa aplicación cuenta con un diseño totalmente responsive, para que sea utilizable tanto en una computadora como en un celular.\nPara los calendarios utilicé FullCalendar, una librería de calendarios que me permitía mostrar turnos en un calendario con fecha, hora, y disponibilidad.\nUtilicé React Day Picker para el Picker de días y el TimePicker de Ant Desing para seleccionar horarios en el formulario de habilitación de turnos de las empresas.\nPara alertas toast utilicé React Toastify y SweetAlert2 para alertas que requerían algún tipo de confirmación o mostrar un aviso de manera más visible.`}
                images={[mobileImage1, mobileImage2]}
                color={color}
            />
            <SectionWithImages
                title="Interfaz de cliente"
                description={`En la interfaz de cliente se muestran los turnos que el cliente ha agendado en forma de card. Indicando día, hora y datos del servicio para el cuál agendó el turno. El cliente puede cancelar el turno con más de 24 horas de anticipación, y si pagó una seña por él, se le devolverá el 50% del dinero.\nPara buscar servicios o empresas, el cliente cuenta con una barra de búsqueda en la parte superior, donde se le mostrarán todos los servicios relacionados a lo que esté buscando. También puede buscar el nombre de una empresa y se mostrarán todos los servicios que la misma ofrece.\nUna vez encontrado el servicio, el usuario puede clickear en “Ver turnos disponibles” para acceder al calendario de ese servicio, donde se muestran los turnos disponibles y ocupados. Y con un par de clicks, ya tiene su turno agendado. Si la empresa cobra una seña por el turno, se dirigirá al usuario a un checkout de Mercado Pago para realizar el pago y confirmar el turno, si no se cobra seña, con un par de clicks el turno queda agendado.`}
                images={[clientInterfaceImage]}
                color={color}
            />
            <SectionWithImages
                title="Interfaz de empresa"
                description={`En la sección “Próximos turnos” de la intrefaz de empresa se muestran todos los turnos agendados por los clientes en forma de card, indicando fecha, hora y los datos del cliente. La empresa puede cancelar el turno cuando desee, pero si se cobró una seña por el turno se le devolverá al cliente el 100% del dinero.\nEn la sección “Mis servicios” se encuentran todos los servicios que ofrece la empresa. Se pueden agregar servicios nuevos, editar campos de servicios existentes y eliminar servicios. También nos encontraremos el botón de “Habilitar turnos”, el cuál mostrará el calendario de turnos del servicio seleccionado, donde se puede habilitar turnos nuevos cuando la empresa desee.`}
                images={[companyInterfaceImage]}
                color={color}
            />
        </>
    );
}

export default FrontEnd;
