import { FaFacebookF, FaInstagram, FaYoutube, FaSpotify, FaTwitter } from 'react-icons/fa'; 
import "../footer/Footer.css";
import { Modal, Button } from 'react-bootstrap';
import {useState} from 'react';

const Footer = () => { 
  const [showModal, setShowModal] = useState(null);

  const handleShowModal = (modalName) => {
    setShowModal(modalName);
  };

  const handleCloseModal = () => {
    setShowModal(null);
  };
  
  return (
    <div className="min-h-screen flex flex-col ">
      <div className="footer-custom py-2 w-full bg-yellow  text-dark relative mt-auto flex-grow-0">
        <div className="footer-custom container mx-auto">
          <div className="footer-custom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
            <div className="footer-custom " style={{ display: 'flex', flexDirection: 'column', fontSize: '12px'}}>
              <button className="m-0 footer-custom btn-footer text-left" onClick={() => handleShowModal('tablaDeTalles')}>Tabla de talles</button>
              <button className="m-0 footer-custom btn-footer text-left" onClick={() => handleShowModal('ayudaYSoporte')}>Ayuda y soporte</button>
              <button className="m-0 footer-custom btn-footer text-left" onClick={() => handleShowModal('politicaDeCambiosYDevoluciones')}>Política de cambios y devoluciones</button>
              <button className="m-0 footer-custom btn-footer text-left" onClick={() => handleShowModal('terminosYCondiciones')}>Términos y condiciones</button>
              <button className="m-0 footer-custom btn-footer text-left" onClick={() => handleShowModal('cookies')}>Cookies</button>

              {showModal === 'tablaDeTalles' && (
                <Modal show={true} onHide={handleCloseModal} className="bg-transparent">
                  <Modal.Header closeButton >
                    <Modal.Title>Tabla de talles</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>zxcvbn</p>
                  </Modal.Body>
                  <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
                  </Modal.Footer>
                </Modal>
              )}

              {showModal === 'ayudaYSoporte' && (
                <Modal show={true} onHide={handleCloseModal} className="bg-transparent">
                  <Modal.Header closeButton>
                    <Modal.Title>Ayuda y soporte</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>hjlhjghjke</p>
                  </Modal.Body>
                  <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
                  </Modal.Footer>
                </Modal>
              )}

              {showModal === 'politicaDeCambiosYDevoluciones' && (
                <Modal show={true} onHide={handleCloseModal} className="bg-transparent">
                  <Modal.Header closeButton>
                    <Modal.Title>Política de cambios y devoluciones</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>fdggjfj</p>
                  </Modal.Body>
                  <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
                  </Modal.Footer>
                </Modal>
              )}

              {showModal === 'terminosYCondiciones' && (
                <Modal show={true} onHide={handleCloseModal} className="bg-transparent">
                  <Modal.Header closeButton>
                    <Modal.Title>Términos y condiciones</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>qwergw</p>
                  </Modal.Body>
                  <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
                  </Modal.Footer>
                </Modal>
              )}

              {showModal === 'cookies' && (
                <Modal show={true} onHide={handleCloseModal} className="bg-transparent">
                  <Modal.Header closeButton>
                    <Modal.Title>Cookies</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>sadasdqfqe</p>
                  </Modal.Body>
                  <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
                  </Modal.Footer>
                </Modal>
              )}
            </div>
            <div className="footer-custom py-4 flex gap-2" >  
              <a href="https://www.twitter.com/" className="footer-custom icon-hover" target="_blank">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/" className="footer-custom icon-hover" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/" className="footer-custom icon-hover" target="_blank">
                <FaFacebookF />
              </a>
              <a href="https://www.youtube.com/" className="footer-custom icon-hover" target="_blank">
                <FaYoutube />
              </a>
              <a href="https://www.spotify.com/" className="footer-custom icon-hover" target="_blank">
                <FaSpotify />
              </a>
              
            </div>
          </div>
        </div>
        
      </div>
      <span id="contacto"></span> {/* Identificador para la sección de contacto */}
    </div>
  );
};

export default Footer;
