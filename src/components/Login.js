import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { assignLoginReponse } from "../features/userSlice";
import { assignDbResponse } from "../features/userSlice";
import axios from "axios";

export default function Login(props) {
  const clientId =
    "812513189047-rojro24sebfg9kuvooe0pdgjvbu3sdaf.apps.googleusercontent.com";

  const dispatch = useDispatch();

  const success = (response) => {
    dispatch(assignLoginReponse(response.Qs.zt));
    const email = response.Qs.zt;
    const fullName = response.Qs.Te;
    const token = response.tokenObj.access_token;

    const user = { email: email, fullName: fullName, token: token };

    axios.post("/api/user", user).then((res) => {
      console.log(res.data);
      dispatch(assignDbResponse(JSON.stringify(res.data)));
    });
    localStorage.setItem("localLoginReponse", JSON.stringify(response));
    props.history.push("/");
  };

  return (
    <div className="card bg-light">
      <div className="align-self-center d-flex justify-content-center m-3">
        <h2>Welcome!</h2>
      </div>
      <div className="align-self-center d-flex justify-content-center m-3">
        <h4>Sign-up or Log-in</h4>
      </div>
      <div className="align-self-center d-flex justify-content-center m-3">
        <GoogleLogin
          buttonText="Use your Google account"
          onSuccess={success}
          onFailure={error}
          clientId={clientId}
        />
      </div>
    </div>
  );
}

const error = (response) => {
  console.error(response); // eslint-disable-line
};
