import "./VentaTrackDetail.css"
import HeaderProject from "../common/HeaderProject/HeaderProject";
import SectionWithImages from "../common/SectionWithImages/SectionWithImages";
import backgroundVentaTrack from "../../../assets/images/ventatrack/ventatrackBackgroundImage.webp"
import mobileBackgroundVentaTrack from "../../../assets/images/ventatrack/mobileBackgroundVentatrack.webp"
import tableProductsImage from "../../../assets/images/ventatrack/tableProducts.webp"
import panelSellImage from "../../../assets/images/ventatrack/panelVentaTrack.webp"
import formNewProductImage from "../../../assets/images/ventatrack/formNewProduct2.webp"
import historyImage from "../../../assets/images/ventatrack/historial.webp"
import sellsImage from "../../../assets/images/ventatrack/sells.webp"
import authImage from "../../../assets/images/ventatrack/firebaseauth.webp"

const VentaTrackDetail = () => {
    const color = "#a99985"

    return (
        <div className="ventatrackDetail">
            <HeaderProject
                title="VentaTrack"
                description="VentaTrack es un sistema de seguimiento de ventas, pagos e inventario. Ideal para todo negocio que maneje ventas diarias. Cuenta con un panel de venta, donde los productos son buscados por código de barra en una base de datos de Firestore y mostrados en el panel para calcular el total de la venta. Se pueden agregar, editar y eliminar productos en la sección de productos, y revisar todas las ventas realizadas por día en la sección de historial, con el detalle de cada venta. Es posible registrar todo lo que ingresa y egresa de la caja, por lo que el sistema te dá lo que generaste al final del día."
                imageProject={backgroundVentaTrack}
                mobileImageProject={mobileBackgroundVentaTrack}
                technologies={["react", "firebase"]}
                color={color}
                linkGitHub={['https://github.com/valentinoaraya/ventatrack']}
                linkWeb="https://ventatrack-trial-version.vercel.app/"
            />
            <SectionWithImages
                color={color}
                title="Panel de ventas"
                description={`Cada vez que se escanea o se ingresa un código de barras se hace un llamado a la base de datos y se obtiene el producto con ese código. Automáticamente se agrega al panel y se suma en el total de venta. Si el producto ya está en el panel y se vuelve a ingresar, se autoincrementa la cantidad y se suma.\nEs posible eliminar productos del panel, además de agregar productos sin código de barras colocando simplemente su monto. Estos productos se visualizan como "Producto suelto" en el panel.\nLos productos persisten utilizando localStorage, cada modificación que se haga en el panel se realiza también en localStorage, por lo que es posible navegar por secciones, incluso cerrar la pestaña sin perder los productos.\nPara registrar un egreso de dinero, se coloca en el input de "Egreso de dinero" y se descuenta automáticamente de la caja del día, guardándose como detalle en el detalle de venta.`}
                images={[panelSellImage]}
            />
            <SectionWithImages
                color={color}
                title="Gestión de productos"
                description={`Si se ingresa un código de barras que no se encuentra en la base de datos, automáticamente se muestra un formulario modal donde podemos agregar los datos del producto nuevo para agregarlo a la base de datos. Luego, el producto se agrega automáticamente al panel de ventas junto con el precio que se le fue colocado.\nEs posible editar o eliminar cualquier producto. En la sección de "Productos" se encuentra una tabla con todos los productos registrados y sus datos correspondientes.\nSi damos click al botón de editar, se nos mostrará un formulario modal con los datos del producto, los cuales podremos editar, y al enviar el formulario se actualizarán los datos del producto.`}
                images={[tableProductsImage, formNewProductImage]}
            />
            <SectionWithImages
                color={color}
                title="Historial de ventas"
                description={`Cada vez que se realiza una venta, se registra junto con su detalle en un historial. En la sección "Historial", se encuentran todas las ventas que se realizaron.\nSe organizan por día, en formato de card, donde se muestra el día donde se realizaron las ventas, la cantidad de ventas realizadas ese día, la cantidad de pagos, y el total de la caja de ese día.\nEs posible filtrar por las ventas realizada los últimos 30 días, la última semana, o todas las ventas.\nAl presionar el "Ver detalles" se muestran dos tablas. Una contiene las ventas relizadas y la otra contiene los pagos realizados. En la tabla de ventas podemos ver el número de venta y el total de esa venta, si presionamos en "Ver detalles" nos muestra qué productos vendimos y la cantidad de los mismos.`}
                images={[historyImage, sellsImage]}
            />
            <div className="divWithMaxWidth">
                <div style={{ borderBottom: `1px solid ${color}` }} className="titleSectionContainer">
                    <h2 className="titleSection">Autenticación de usuarios</h2>
                </div>
                <div className="descriptionAndImageVentatrack">
                    <p>Para la autenticación de usuarios utilizo Firebase Authentication. Los usuarios habilitados pueden iniciar sesión con su cuenta para entrar a la aplicación. Cada usuario cuenta con su propia base de datos para almacenar sus propios productos y su propio histoiral de ventas. </p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className="imageContainerVentatrack">
                            <img className="imageCodeVentatrack" src={authImage} alt="Archivo firebase-auth.js" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default VentaTrackDetail;
