import { useSelector } from "react-redux";
import NavigationBar from "./NavigationBar";

import "react-dropdown/style.css";

export default function Home(props) {
  const loginResponse = useSelector((state) => state.user.loginResponse);
  const dbResponse = useSelector((state) => state.user.dbResponse);
  console.log(loginResponse);

  if (!loginResponse) {
    props.history.push("/login");
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="card bg-light col-7 m-5">
        <p>You are logged in!</p>
        <p>Refreshing this page will not ask for login again.</p>
      </div>

      {(() => {
        if (dbResponse) {
          return (
            <div className="card bg-light col-7 m-5">
              <p>Your user info has been updated in the database.</p>
              <p>Confirmation data coming from the database is below.</p>
              <p>{dbResponse}</p>
            </div>
          );
        }
      })()}
    </div>
  );
}
