import { useNavigate } from "react-router-dom";

function NewUseRegister() {
  const navigate = useNavigate();

  const handleRegisterNewUser = () => {
    navigate("/registernewuser");
  };
  return (
    <>
      <button onClick={handleRegisterNewUser}>Add New Customer</button>
    </>
  );
}
export default NewUseRegister;
