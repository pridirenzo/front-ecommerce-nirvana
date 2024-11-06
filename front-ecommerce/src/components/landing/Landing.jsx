import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Carousel, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import Navbar from "../navbar/NavBar";
import CardProduct from "../cardProduct/CardProduct"
// textos de prueba, debe mapearse desde el back!!!!!!! hecho B)

const Landing = ({ productsprendas, productsmusic, productsaccesories }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <>
      <Navbar />
      <div className="animated-text d-flex justify-content-center">
        <Container className="text-center mt-5">
          <h1
            id="landingTitle"
            className="d-flex justify-content-center mt-5 mb-5"
            style={{color: "yellow"}}
          >
            Bienvenidos ⭐
          </h1>
          <Carousel
            interval={2000} // pasa cada dos segundos
            className="mb-4"
            style={{ borderRadius: "40px" }}
          >
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://elasombrario.publico.es/wp-content/uploads/sites/1/2022/01/nirvana.jpg"
                alt="First slide"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50px",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rollingstone.com%2Fwp-content%2Fuploads%2F2018%2F06%2Frs-nirvana-e9e22e4b-f7d9-4fc7-bd94-23c30084ce94.jpg&f=1&nofb=1&ipt=c2c2b10d53ab3310f98180b7abe1c70348bae7b8566eba740b1edf09221c2027&ipo=images"
                alt="Second slide"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50px",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.billboard.com%2Ffiles%2Fmedia%2FNirvana-1990s-billboard-bw-portrait-1548-compressed.jpg&f=1&nofb=1&ipt=9e6f565aa4e0f37da7c9266b08ff91a1e74ca9ea8c6c861e3912243135cf96a3&ipo=images"
                alt="Third slide"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50px",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.kerrangcdn.com%2FNirvana_1989_2.jpg%3Fauto%3Dcompress%26fit%3Dcrop%26w%3D1200&f=1&nofb=1&ipt=77ff81649b10278c032928eee9154200be7d246b2de9754b59e30366b6b6d0d7&ipo=images"
                alt="Fourth slide"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50px",
                }}
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
      <h2 id="merchTitle" className="d-flex justify-content-center mt-5 mb-5" style={{fontSize: "35px"}}>
        Merchandising disponible
      </h2>
      <h3 id="clothesTitle" className="d-flex justify-content-center" style={{fontSize: "25px"}} >Prendas 🏷️</h3>
      <div className="d-flex justify-content-center mt-4 gap-3">
        {Array.isArray(productsprendas) &&
          productsprendas
            // .filter(
            //   (product) => product.idCategory === 4 || product.idCategory === 5
            // )
            // .slice(0, 3) // Solo toma los primeros 3 productos
            .map((product, index) => (
              <CardProduct key={index} product={product} handleAddToCart={handleAddToCart}/> 
            ))}
        <span id="MERCH"></span>{" "}
        {/* Identificador para la sección de contacto */}
      </div>

      <div className="d-flex justify-content-center mt-5">
        <Button variant="dark" className="mt-2 mb-5">
          Ver todo en PRENDAS
        </Button>
      </div>
      <h3 id="musicTitle" className="d-flex justify-content-center mt-5 mb-5" style={{fontSize: "25px"}}>
        Discografía 💿
      </h3>
      <div className="d-flex justify-content-center mt-4 gap-3">
        {Array.isArray(productsmusic) &&
          productsmusic
            // .filter(
            //   (product) => product.idCategory === 6 || product.idCategory === 7
            // )
            // .slice(0, 3) // Solo toma los primeros 3 productos
            .map((product, index) => (
              <CardProduct key={index} product={product} handleAddToCart={handleAddToCart}/> 
            ))}

        <span id="MUSIC"></span>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <Button variant="dark" className="mt-2 mb-5">
          Ver todo en DISCOGRAFÍA
        </Button>
      </div>
      <h3 id="accessoriesTitle" className="d-flex justify-content-center mt-5 mb-5" style={{fontSize: "25px"}}>Accesorios 🎩</h3>
      <div className="d-flex justify-content-center mt-4 gap-3">
        {Array.isArray(productsaccesories) &&
          productsaccesories
            // .filter((product) => product.idCategory === 3)
            // .slice(0, 3) // Solo toma los primeros 3 productos
            .map((product, index) => (
              <CardProduct key={index} product={product} handleAddToCart={handleAddToCart}/> 
            ))}

        <span id="ACCESORIES"></span>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <Button variant="dark" className="mt-2 mb-5">
          Ver todo en ACCESORIOS
        </Button>
      </div>
    </>
  );
};

export default Landing;

Landing.propTypes = {
  products: PropTypes.function,
};
