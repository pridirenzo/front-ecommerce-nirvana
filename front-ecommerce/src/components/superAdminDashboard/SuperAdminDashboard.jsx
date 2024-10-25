import "bootstrap/dist/css/bootstrap.min.css";
import SysAdminNavbar from "../superAdminNavbar/SuperAdminNavbar";

const SuperAdminDashboard = () => {
  return (
    <>
      <SysAdminNavbar />
      <h1 className="text-center mb-4">Administrar Usuarios 👥</h1>;
    </>
  );
};
export default SuperAdminDashboard;
