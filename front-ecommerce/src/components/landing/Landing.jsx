import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Carousel, Container } from "react-bootstrap";
import NavBar from "../navbar/NavBar.jsx";
// textos de prueba, debe mapearse desde el back!!!!!!!

const Landing = ({products}) => {

 console.log(products)
  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="animated-text d-flex justify-content-center">
        <Container className="text-center mt-5">
          <h1 className="d-flex justify-content-center mt-5 mb-5">
            Bienvenidos ⭐
          </h1>
          <Carousel
            interval={2000} // pasa cada dos segundos
            className="mb-4"
            style={{ borderRadius: "40px", }}
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
      <h2 className="d-flex justify-content-center mt-5 mb-5">
        Merchandising disponible
      </h2>
      <h3 className="d-flex justify-content-center">Prendas 🏷️</h3>
      <div className="d-flex justify-content-center mt-4">
        
        {products.map((product) => (
          <Card className="hover-card" style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src = {product.imageUrl}
          />
          <Card.Body>
            <Card.Title style={{ color: "yellow" }}>
              {product.name}
            </Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Button variant="dark">Comprar</Button>
          </Card.Body>
        </Card>
      ))}

      </div>
      <div className="d-flex justify-content-center mt-5">
        <Button variant="dark" className="mt-2 mb-5">
          Ver todo en PRENDAS 
        </Button>
      </div>
      <h3 className="d-flex justify-content-center mt-5 mb-5">Discografía 💿</h3>
      <div className="d-flex justify-content-center mt-4">
        <Card className="hover-card" style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshop.nirvana.com%2Fcdn%2Fshop%2Ffiles%2FNirvana8LP_364c9355-edf0-4829-9cd3-8b1f37ec1674_600x.png%3Fv%3D1693935428&f=1&nofb=1&ipt=5e057ed8afaad1bbe0e3418ccd23d53265af25fa5a162a5fce288390eff09b2e&ipo=images"
          />
          <Card.Body>
            <Card.Title style={{ color: "yellow" }}>
              In Utero 30th Anniversary 8LP Super Deluxe
            </Card.Title>
            <Card.Text>$324.98</Card.Text>
            <Button variant="dark">Comprar</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Button variant="dark" className="mt-2 mb-5">
          Ver todo en DISCOGRAFÍA 
        </Button>
      </div>
      <h3 className="d-flex justify-content-center mt-5 mb-5">Accesorios 🎩</h3>
      <div className="d-flex justify-content-center mt-4">
        <Card className="hover-card" style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.aNzWNaBIBNVrCn2WUCQ1yAHaHa%26pid%3DApi&f=1&ipt=5ac3e0d52234c9294d0495c8478656e3da9ea032981410bce9fbb8d71bec7bc7&ipo=images"
          />
          <Card.Body>
            <Card.Title style={{ color: "yellow" }}>
              Yellow Nevermind Patch
            </Card.Title>
            <Card.Text>$4.99</Card.Text>
            <Button variant="dark">Comprar</Button>
          </Card.Body>
        </Card>
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
