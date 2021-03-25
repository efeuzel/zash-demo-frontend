import "react-calendar/dist/Calendar.css";

import Login from "./components/Login";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import { assignLoginReponse } from "./features/userSlice";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  //const bookings = useSelector((state) => state.bookings);
  //const bookings = [];
  const dispatch = useDispatch();

  const localLoginReponse = localStorage.localLoginReponse;
  if (typeof localLoginReponse !== "undefined") {
    const response = JSON.parse(localLoginReponse);
    dispatch(assignLoginReponse(response.Qs.zt));
  }

  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}></Route>
      </div>
    </Router>
  );
}

export default App;
