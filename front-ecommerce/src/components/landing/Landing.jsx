import "bootstrap/dist/css/bootstrap.min.css"; 
import { Card, Button, Carousel, Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import Navbar from "../navbar/NavBar";
import CardProduct from "../../cardProduct/CardProduct";

const Landing = ({ productsprendas, productsmusic, productsaccesories }) => {
  // AUDIO--------------
  const audioRef = useRef(new Audio("smells_like_teen_spirit.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayMusic = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePauseMusic = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  const handleNavClick = (link) => {
    if (link.startsWith("#")) {
      const targetId = link.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.location.href = link;
    }
  };

  return (
    <>
      <Navbar />

      {/* Botón de reproducción de música */}
      {!isPlaying ? (
        <Button id="musicButton1" onClick={handlePlayMusic} style={{ fontSize: "12px", margin: "10px" }}>
          Reproducir Música 🎧
        </Button>
      ) : (
        <Button id="musicButton2" onClick={handlePauseMusic} style={{ fontSize: "12px", margin: "10px" }}>
          Pausar Música 🎧
        </Button>
      )}

      <div className="animated-text d-flex justify-content-center">
        <Container className="text-center mt-5">
          <h1
            id="landingTitle"
            className="d-flex justify-content-center mt-5 mb-5"
            style={{ color: "yellow" }}
          >
            Bienvenidos ⭐
          </h1>
          <Carousel
            interval={2000}
            className="mb-4"
            style={{ borderRadius: "40px" }}
          >
            {[
              "https://elasombrario.publico.es/wp-content/uploads/sites/1/2022/01/nirvana.jpg",
              "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-nirvana-e9e22e4b-f7d9-4fc7-bd94-23c30084ce94.jpg",
              "https://www.billboard.com/wp-content/uploads/media/Nirvana-1990s-billboard-bw-portrait-1548.jpg",
              "https://images.kerrangcdn.com/Nirvana_1989_2.jpg?auto=compress&fit=crop&w=1200",
            ].map((src, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 carousel-image"
                  src={src}
                  alt={`Slide ${index + 1}`}
                  style={{
                    objectFit: "cover",
                    borderRadius: "50px",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>

      <h2 id="merchTitle" className="d-flex justify-content-center mt-5 mb-5" style={{ fontSize: "35px" }}>
        Merchandising disponible
      </h2>

      {/* Sección de Prendas */}
      <h3 id="clothesTitle" className="d-flex justify-content-center" style={{ fontSize: "25px" }}>
        Prendas 🏷️
      </h3>
      <Container>
        <Row className="d-flex justify-content-center mt-4 gap-3">
          {Array.isArray(productsprendas) &&
            productsprendas.map((product, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <CardProduct product={product} handleAddToCart={handleAddToCart} />
              </Col>
            ))}
        </Row>
      </Container>

      <div className="d-flex justify-content-center mt-5">
        <Button variant="dark" className="mt-2 mb-5" onClick={() => handleNavClick("/clothes")}>
          Ver todo en PRENDAS
        </Button>
      </div>

      {/* Sección de Discografía */}
      <h3 id="musicTitle" className="d-flex justify-content-center mt-5 mb-5" style={{ fontSize: "25px" }}>
        Discografía 💿
      </h3>
      <Container>
        <Row className="d-flex justify-content-center mt-4 gap-3">
          {Array.isArray(productsmusic) &&
            productsmusic.map((product, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <CardProduct product={product} handleAddToCart={handleAddToCart} />
              </Col>
            ))}
        </Row>
      </Container>

      <div className="d-flex justify-content-center mt-5">
        <Button variant="dark" className="mt-2 mb-5" onClick={() => handleNavClick("/music")}>
          Ver todo en DISCOGRAFÍA
        </Button>
      </div>

      {/* Sección de Accesorios */}
      <h3 id="accessoriesTitle" className="d-flex justify-content-center mt-5 mb-5" style={{ fontSize: "25px" }}>
        Accesorios 🎩
      </h3>
      <Container>
        <Row className="d-flex justify-content-center mt-4 gap-3">
          {Array.isArray(productsaccesories) &&
            productsaccesories.map((product, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <CardProduct product={product} handleAddToCart={handleAddToCart} />
              </Col>
            ))}
        </Row>
      </Container>

      <div className="d-flex justify-content-center mt-5">
        <Button variant="dark" className="mt-2 mb-5" onClick={() => handleNavClick("/accessories")}>
          Ver todo en ACCESORIOS
        </Button>
      </div>
    </>
  );
};

Landing.propTypes = {
  productsprendas: PropTypes.array.isRequired,
  productsmusic: PropTypes.array.isRequired,
  productsaccesories: PropTypes.array.isRequired,
};

export default Landing;
