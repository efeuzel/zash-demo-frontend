import React, { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addBooking } from "../features/userSlice";

export default function BookingForm(props) {
  const [name, setName] = useState("");
  const [numPerson, setNumPerson] = useState("");
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const booking = {
      id: 0,
      name: name,
      numPeople: numPerson,
      checkIn: formatDate(dateRange[0]),
      checkOut: formatDate(dateRange[1]),
    };
    axios
      .post(`/api/booking`, booking)
      .then((res) => {
        console.log("res.data: ", res.data, res.status);
        dispatch(addBooking(res.data));
        setError(null);
      })
      .catch((err) => {
        console.log("err.response.data: ", err);
        //setError(err.response.data);
      });
  };

  return (
    <div className="col-3 card m-2 p-2">
      <form>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Number of People</label>
          <input
            className="form-control"
            type="number"
            value={numPerson}
            onChange={(e) => setNumPerson(e.target.value)}
          />
        </div>
        <div className="row mb-3">
          <label className="form-label">Check-in and Check-out Dates</label>
          <div className="">
            <DateRangePicker
              onChange={setDateRange}
              value={dateRange}
              clearIcon={null}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {error ? error : null}
      </form>
    </div>
  );
}

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}
