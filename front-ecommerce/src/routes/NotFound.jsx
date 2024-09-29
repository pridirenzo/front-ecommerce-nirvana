import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center" style={{ margin: "50px 0" }}>
        <img
          width={200}
          height={200}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F331-3318397_nirvanaforever-sticker-nirvana-smiley-clipart.png&f=1&nofb=1&ipt=9d1c334ea153fd59ac4d31b01ef449d5d110ee404868d4138391f48ea74f7f63&ipo=images"
          style={{ marginBottom: "20px" }} 
        />
        <h3>Lo sentimos, no pudimos encontrar la página que estás buscando. ☠️</h3>
        <h5 className="m-3">Probá chequeando la dirección URL y volvé a intentarlo.</h5>
        <h5 className="text-center">❌Error 404 - Page Not Found❌</h5>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-dark"
            onClick={handleGoBack}
            style={{ marginTop: "30px" }}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
