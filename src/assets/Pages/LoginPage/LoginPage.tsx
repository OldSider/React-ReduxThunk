import { ChangeEvent } from "react";

import {
  setEmail,
  setPassword,
} from "../../Redux/Reducers/LoginAuth/LoginAuth";

import useAppDispatch from "../../Hook/UseAppDispatch";
import useAppSelector from "../../Hook/UseAppSelector";

import "./Components/Style/LoginPage.css";

function LoginPage() {
  const dispatch = useAppDispatch();

  const authLogin = useAppSelector((state) => state.authLogin);

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(event.target.value));
  };
  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(event.target.value));
  };

  return (
    <>
      <body>
        <section>
          <div>
            <input
              type="text"
              value={authLogin.email}
              onChange={handleEmailInput}
            />
            <input
              type="text"
              value={authLogin.password}
              onChange={handlePasswordInput}
            />
          </div>
        </section>
      </body>
    </>
  );
}

export default LoginPage;
