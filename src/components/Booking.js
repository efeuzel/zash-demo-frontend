import { useDispatch } from "react-redux";
import { deleteBooking } from "../features/userSlice";

export default function Booking(props) {
  const dispatch = useDispatch();

  const id = props.booking.id;
  const name = props.booking.name;
  const numPeople = props.booking.numPeople;
  const checkIn = props.booking.checkIn;
  const checkOut = props.booking.checkOut;
  return (
    <div className="card col-7 bg-light">
      <div className="row  p-2">
        <div className="align-self-center mb-2">
          Booking for <b>{name}</b>
        </div>
        <div className="col col-4 align-self-center">
          <div>
            Check in: <b>{checkIn}</b>
          </div>
          <div>
            Check out: <b>{checkOut}</b>
          </div>
        </div>
        <div className="col align-self-center">
          Persons: <b>{numPeople}</b>
        </div>
        <div className="col align-self-center">
          <button className="btn btn-warning">Edit</button>
        </div>
        <div className="col align-self-center">
          <button
            className="btn btn-danger"
            onClick={() => dispatch(deleteBooking(id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
