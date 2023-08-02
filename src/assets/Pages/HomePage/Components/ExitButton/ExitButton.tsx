import { useNavigate } from "react-router-dom";

function ExitButton() {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/");
  };

  return (
    <>
      <button onClick={handleExit} className="header-btn">Exit</button>
    </>
  );
}

export default ExitButton;
