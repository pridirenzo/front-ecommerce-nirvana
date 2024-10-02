import { FaFacebookF, FaInstagram, FaYoutube, FaSpotify, FaTwitter } from 'react-icons/fa'; 

const Footer = () => { 

  return (
    <>
      <div className="footer-custom py-2 w-full bg-yellow  text-dark relative">
        <div className="footer-custom container mx-auto">
          <div className="footer-custom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
            <div className="footer-custom" style={{ display: 'flex', flexDirection: 'column', fontSize: '12px' }}>
              <p className="m-0 footer-custom">Tabla de talles</p>
              <p className="m-0 footer-custom">Ayuda y soporte</p>
              <p className="m-0 footer-custom">Política de cambios y devoluciones</p>
              <p className="m-0 footer-custom">Términos y condiciones</p>
              <p className="m-0 footer-custom">Cookies</p>
            </div>
            <div className="footer-custom py-4" style={{ display: 'flex', gap: '10px' }}>
              <a href="https://www.twitter.com/" className="footer-custom" target="_blank">
                <FaTwitter className=" text-black" />
              </a>
              <a href="https://www.instagram.com/" className="footer-custom" target="_blank">
                <FaInstagram className="  text-black " />
              </a>
              <a href="https://www.facebook.com/" className="footer-custom" target="_blank">
                <FaFacebookF className=" text-black " />
              </a>
              <a href="https://www.youtube.com/" className="footer-custom" target="_blank">
                <FaYoutube className=" text-black " />
              </a>
              <a href="https://www.spotify.com/" className="footer-custom" target="_blank">
                <FaSpotify className="  text-black" />
              </a>
              
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Footer;
