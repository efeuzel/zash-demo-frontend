import { useDispatch } from "react-redux";
import { assignLoginReponse } from "../features/userSlice";

export default function NavigationBar() {
  const dispatch = useDispatch();

  return (
    <div className="bg-primary">
      <div className="row">
        <div className="col align-self-center">
          <h2 className="text-white m-3">Demo Application</h2>
        </div>
        <div className="col align-self-center d-flex justify-content-end">
          <button
            className="btn btn-warning m-3"
            onClick={() => {
              localStorage.clear();
              dispatch(assignLoginReponse(null));
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
