import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./form.css"; // Import your custom styles
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS library
import { useNavigate } from "react-router-dom";
import bg from "../../assdests/frombg.mp4";
import Navbar from "./navbar";

function Form() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  // navigate
  const navigate = useNavigate();

  const handleIncrement = (type) => {
    if (type === "adults") {
      setAdults(adults + 1);
    } else {
      setChildren(children + 1);
    }
  };

  const handleDecrement = (type) => {
    if (type === "adults" && adults > 1) {
      setAdults(adults - 1);
    } else if (type === "children" && children > 0) {
      setChildren(children - 1);
    }
  };

  const handleSearch = () => {
    if (checkInDate && checkOutDate && adults > 0) {
      navigate("/second-page");
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const headingStyle = {
    textAlign: "center",
    fontSize: "3.5rem",
    margin: 0, // Remove default margin
    color: "white",
  };

  const paragraphStyle = {
    textAlign: "center",
    color: "white",
    fontSize: "1.5rem",
    marginTop: "100px",
  };

  return (
    <>
      <div className="video-background">
        {/* You can place your video element here */}
        <video autoPlay muted loop>
          <source src={bg} type="video/mp4" />
        </video>
      </div>
      <Navbar />
      <div>
        <p style={paragraphStyle} data-aos="fade-in" data-aos-offset="500">
          Lorem ipsum dolor sit amet.
        </p>
        <h1 style={headingStyle} data-aos="fade-in" data-aos-offset="100">
          Hotel Management
        </h1>
      </div>
      <div className="form-container">
        <div className="search-form-container" data-aos="fade-up">
          <div className="input-container date-picker-input">
            <label className="field-label">Check In</label>
            <DatePicker
              className="date-input"
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              dateFormat="MM/dd/yyyy"
              placeholderText="Select check-in date"
              maxDate={checkOutDate}
              selectsStart
              startDate={checkInDate}
              endDate={checkOutDate}
              style={{ backgroundColor: checkInDate ? "#e4e4e4" : "#f7f7f7" }}
            />
          </div>

          <div className="input-container date-picker-input">
            <label className="field-label">Check Out</label>
            <DatePicker
              className="date-input"
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              dateFormat="MM/dd/yyyy"
              placeholderText="Select check-out date"
              minDate={checkInDate}
              selectsEnd
              startDate={checkInDate}
              endDate={checkOutDate}
              style={{ backgroundColor: checkInDate ? "#e4e4e4" : "#f7f7f7" }}
            />
          </div>

          <div className="input-container number-input">
            <label className="field-label">Adults</label>
            <button
              className="decrement-button"
              onClick={() => handleDecrement("adults")}
            >
              -
            </button>
            <input
              className="number-field"
              placeholder="Adults"
              value={adults}
              readOnly
            />
            <button
              className="increment-button"
              onClick={() => handleIncrement("adults")}
            >
              +
            </button>
          </div>

          <div className="input-container number-input">
            <label className="field-label">Children</label>
            <button
              className="decrement-button"
              onClick={() => handleDecrement("children")}
            >
              -
            </button>
            <input
              className="number-field"
              placeholder="Children"
              value={children}
              readOnly
            />
            <button
              className="increment-button"
              onClick={() => handleIncrement("children")}
            >
              +
            </button>
          </div>

          <button
            className="searchbtn"
            onClick={handleSearch}
            disabled={!(checkInDate && checkOutDate && adults > 0)} // Disable the button if conditions are not met
          >
            <span class="transition"></span>
            <span class="gradient"></span>
            <span class="label">Search</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
