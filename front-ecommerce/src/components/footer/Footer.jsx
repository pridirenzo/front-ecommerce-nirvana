import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaTwitter,
} from "react-icons/fa";
import "../footer/Footer.css";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const Footer = () => {
  const [showModal, setShowModal] = useState(null);

  const handleShowModal = (modalName) => {
    setShowModal(modalName);
  };

  const handleCloseModal = () => {
    setShowModal(null);
  };

  return (
    <div
      id="landingFooter"
      style={{ backgroundColor: "#FFE603" }}
      className=" flex flex-col "
    >
      <div className="footer-custom py-2 w-full bg-#FFE603  text-dark relative mt-auto flex-grow-0">
        <div className="footer-custom container mx-auto">
          <div
            className="footer-custom"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div
              className="footer-custom "
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "12px",
              }}
            >
              <button
                className="m-0 footer-custom btn-footer text-left"
                onClick={() => handleShowModal("tablaDeTalles")}
              >
                Tabla de talles
              </button>
              <button
                className="m-0 footer-custom btn-footer text-left"
                onClick={() => handleShowModal("ayudaYSoporte")}
              >
                Ayuda y soporte
              </button>
              <button
                className="m-0 footer-custom btn-footer text-left"
                onClick={() =>
                  handleShowModal("politicaDeCambiosYDevoluciones")
                }
              >
                Política de cambios y devoluciones
              </button>
              <button
                className="m-0 footer-custom btn-footer text-left"
                onClick={() => handleShowModal("terminosYCondiciones")}
              >
                Términos y condiciones
              </button>
              <button
                className="m-0 footer-custom btn-footer text-left"
                onClick={() => handleShowModal("cookies")}
              >
                Cookies
              </button>

              {showModal === "tablaDeTalles" && (
                <Modal
                  show={true}
                  onHide={handleCloseModal}
                  className="bg-transparent"
                >
                  <Modal.Header className="bg-dark" closeButton>
                    <Modal.Title className="bg-dark" style={{color: "#FFE603"}}>
                      Tabla de talles
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <img src="https://d2r9epyceweg5n.cloudfront.net/stores/001/642/173/rte/Tabla%20talles%20Remeras.png"></img>
                  </Modal.Body>
                  <Modal.Footer className="bg-dark">
                    <Button variant="secondary" onClick={handleCloseModal}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}

              {showModal === "ayudaYSoporte" && (
                <Modal
                  show={true}
                  onHide={handleCloseModal}
                  className="bg-transparent"
                >
                  <Modal.Header className="bg-dark" closeButton>
                    <Modal.Title style={{color: "#FFE603"}}>Ayuda y soporte</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="bg-dark">
                    <h1 style={{ fontSize: "20px", color: "#FFE603"}}>Necesitás ayuda?</h1>
                    <br></br>
                    <p style={{color: "#FFE603"}}>
                      Estamos acá para ofrecerte el mejor soporte en cada paso
                      de tu experiencia en Nirvana Merch. Si tenés preguntas,
                      por favor contactate a nuestro correo oficial:
                      nirvanasupport@gmail.com <br></br>
                      Estamos disponibles para ayudarte con cualquier inquietud.
                    </p>
                  </Modal.Body>
                  <Modal.Footer className="bg-dark">
                    <Button variant="secondary" onClick={handleCloseModal}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}

              {showModal === "politicaDeCambiosYDevoluciones" && (
                <Modal
                  show={true}
                  onHide={handleCloseModal}
                  className="bg-transparent"
                >
                  <Modal.Header className="bg-dark" closeButton>
                    <Modal.Title style={{color: "#FFE603"}}>
                      Política de cambios y devoluciones
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="bg-dark">
                    <p style={{color: "#FFE603"}}>
                      En Nirvana Merch, queremos que estés satisfecho con tu
                      compra. Si necesitas realizar un cambio o devolución,
                      revisa nuestras políticas: Plazo: podés solicitar cambios
                      o devoluciones dentro de los 30 días posteriores a la
                      compra. Condiciones: Solo se aceptarán productos sin uso,
                      con su empaque y etiquetas originales. Contactanos con tu
                      número de pedido para recibir instrucciones y completar el
                      cambio o devolución. Para más información, visita nuestra
                      sección de cambios y devoluciones.
                    </p>
                  </Modal.Body>
                  <Modal.Footer className="bg-dark">
                    <Button variant="secondary" onClick={handleCloseModal}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}

              {showModal === "terminosYCondiciones" && (
                <Modal
                  show={true}
                  onHide={handleCloseModal}
                  className="bg-transparent"
                >
                  <Modal.Header className="bg-dark" closeButton>
                    <Modal.Title style={{color: "#FFE603"}}>Términos y condiciones</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="bg-dark">
                    <p style={{color: "#FFE603"}}>
                      Al acceder y utilizar Nirvana Merch, aceptas cumplir con
                      los siguientes términos y condiciones: <br></br>
                      Uso del Sitio: Los usuarios deben tener al menos 18 años o
                      contar con el permiso de un tutor legal para realizar
                      compras. <br></br>
                      Política de Precios y Pagos: Todos los precios están
                      expresados en la moneda local. Nos reservamos el derecho
                      de ajustar precios y aplicar cargos adicionales de envío o
                      impuestos cuando sea necesario. <br></br>
                      Pedidos y Disponibilidad: Los pedidos están sujetos a
                      disponibilidad. En caso de falta de stock, te
                      notificaremos a la brevedad. <br></br>
                      Políticas de Cambios y Devoluciones: Las solicitudes deben
                      realizarse dentro de los 30 días posteriores a la compra y
                      cumplir con nuestras políticas de condiciones. <br></br>
                      Privacidad: Valoramos la seguridad de tus datos personales
                      y nos comprometemos a proteger tu información según
                      nuestra Política de Privacidad. <br></br>
                      Modificación de los Términos: Nos reservamos el derecho de
                      modificar estos términos en cualquier momento. Las
                      actualizaciones se publicarán en esta página.
                    </p>
                  </Modal.Body>
                  <Modal.Footer className="bg-dark">
                    <Button variant="secondary" onClick={handleCloseModal}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}

              {showModal === "cookies" && (
                <Modal
                  show={true}
                  onHide={handleCloseModal}
                  className="bg-transparent"
                >
                  <Modal.Header className="bg-dark" closeButton>
                    <Modal.Title style={{color: "#FFE603"}}>Cookies</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="bg-dark">
                    <p style={{color: "#FFE603"}}>
                      En Nirvana Merch utilizamos cookies para mejorar tu
                      experiencia de navegación. Las cookies permiten almacenar
                      preferencias, analizar el uso del sitio y ofrecer
                      contenido personalizado. Al continuar navegando, aceptas
                      el uso de cookies. Tipos de Cookies Utilizadas: Utilizamos
                      cookies de sesión, cookies de análisis y cookies de
                      personalización para mejorar nuestros servicios. Gestión
                      de Cookies: Puedes configurar tu navegador para aceptar,
                      rechazar o eliminar cookies en cualquier momento.
                    </p>
                  </Modal.Body>
                  <Modal.Footer className="bg-dark">
                    <Button variant="secondary" onClick={handleCloseModal}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}
            </div>
            <div className="footer-custom py-4 flex gap-2">
              <a
                href="https://www.twitter.com/"
                className="footer-custom icon-hover"
                target="_blank"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/"
                className="footer-custom icon-hover"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/"
                className="footer-custom icon-hover"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/"
                className="footer-custom icon-hover"
                target="_blank"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.spotify.com/"
                className="footer-custom icon-hover"
                target="_blank"
              >
                <FaSpotify />
              </a>
            </div>
          </div>
        </div>
      </div>
      <span id="contacto"></span>{" "}
      {/* Identificador para la sección de contacto */}
    </div>
  );
};

export default Footer;
