import "./FrontEnd.css"
import SectionWithImages from "../../common/SectionWithImages/SectionWithImages";
import mobileImage1 from "../../../../assets/images/sportymaxx/mobileImage1.png"
import mobileImage2 from "../../../../assets/images/sportymaxx/mobileImage2.png"
import adminInterfaceImage from "../../../../assets/images/sportymaxx/adminInterface.png"
import addProductImage from "../../../../assets/images/sportymaxx/agregarProductoInterfaz.png"
import updateProductImage from "../../../../assets/images/sportymaxx/updateProductInterface.png"
import checkoutImage from "../../../../assets/images/sportymaxx/checkoutImage.png"

const FrontEnd: React.FC<{ color: string }> = ({ color }) => {
    return (
        <>
            <SectionWithImages
                title="Diseño de la página"
                description={`El diseño principal fue realizado en Figma, se pasó por un proceso de modelado con mockups hasta llegar al diseño final.\nPara el desarrollo de la página se utilizó React junto con Bootstrap. Cuenta con interfaces de usuarios y administradores, detalles de productos, un carrito dinámico y una página de checkout.\nEs totalmente responsive, puedes comprar tanto desde una computadora como desde un teléfono celular.\nGestiono el estado global de la aplicación con Context API de React e implemento Firebase Authentication para la autenticación de usuarios.`}
                images={[mobileImage1, mobileImage2]}
                color={color}
            />
            <SectionWithImages
                title="Interfaz de administrador"
                description={`Si el usuario tiene el rol de administrador, al ingresar a su perfil, se encontrará con funcionalidades con las que no cuentan los usuarios normales.\nEl administrador cuenta con botones como los de "Agregar Producto", "Editar Producto" y "Órdenes de compra".\nCada uno de estos botones llevará al administrador a una interfaz distinta para que pueda administrar lo que desee.`}
                images={[adminInterfaceImage]}
                color={color}
            />
            <SectionWithImages
                title="Interfaz para agregar productos"
                description={`Cuando el administrador da click en el botón "Agregar Producto", se lo envía a una interfaz en donde encontrará distintos inputs para introducir la información del producto que desea agregar.\nPrimero debe de colocar el nombre, el precio y cuánto stock hay del producto. Luego, debe de categorizarlo, existen varias categorías de productos y un producto puede incluir varias de ellas. Luego debe de subir las imágenes del producto y por último los talles si es que contiene.\nEsta información se envía al Backend donde se procesa y se guarda en la base de datos.`}
                images={[addProductImage]}
                color={color}
            />
            <SectionWithImages
                title="Interfaz para editar productos"
                description={`Cuando el administrador da click en el botón "Editar Producto", se lo envía a una interfaz en donde se muestran todos los productos que hay en la base de datos. El administrador debe de seleccionar el que quiera editar.\nCuando selecciona un producto se muestra en la parte izquierda los datos actuales del producto seleccionado, y en la parte derecha los inputs para actualizar los campos que desee.\nEl administrador introduce los campos que desea actualizar y envía una petición al Backend, donde se procesan los datos y se actualizan los productos.`}
                images={[updateProductImage]}
                color={color}
            />
            <SectionWithImages
                title="Checkout"
                description={`Cuando el usuario confirma los productos que desea comprar, es redirigido al Checkout, una interfaz donde se encuentran sus datos, los datos de los productos a pagar, el total de la compra, y todos los métodos de pago disponibles.`}
                images={[checkoutImage]}
                color={color}
            />
        </>
    );
}

export default FrontEnd;
