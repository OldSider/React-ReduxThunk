import { useNavigate } from "react-router-dom";

import useAppDispatch from "../../../../Hook/UseAppDispatch";
import useAppSelector from "../../../../Hook/UseAppSelector";
import LoginAuth from "../../../../Redux/Reducers/LoginAuth/Components/AsyncThunk";
import { unwrapResult } from "@reduxjs/toolkit";

function LoginButton() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authInfo = useAppSelector((state) => state.authLogin);

  const handleInputValidation = async () => {
    try {
      const resultAction = await dispatch(
        LoginAuth({ email: authInfo.email, password: authInfo.password })
      );
      const loginResult = unwrapResult(resultAction);
      loginResult ? navigate("/home") : alert("Client not found, Try again");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button onClick={handleInputValidation} className="btn">
        Login
      </button>
    </>
  );
}
export default LoginButton;
