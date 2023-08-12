import bg from "../../assdests/background.jpg";
import img from "../../assdests/ROOM3.png";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS library
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import ImageCarousel from "./carosuel";
import ROOM1 from "../../assdests/ROOM3.png";
import ROOM2 from "../../assdests/ROOM2.png";
import { FaUser, FaBed, FaShower, FaCouch } from "react-icons/fa";
import RoomComponent from "./addroom";
import { FiArrowRight } from "react-icons/fi";
import Navbar from "../form/navbar";

function Second() {
  const carouselContainerStyle = {
    width: "50%", // Set carousel width to 50% of the screen
    margin: "0 auto", // Center the carousel horizontally
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)", // Add a subtle shadow
  };
  const carouselImages = [ROOM1, ROOM2, ROOM1];
  const [isImageCarouselOpen, setImageCarouselOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isStandardModalOpen, setStandardModalOpen] = useState(false);
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200, // Set the duration of the animation (in milliseconds)
    });
  }, []);

  const containerStyle = {
    width: "100%",
    height: "80vh",
    backgroundColor: "#f0f0f0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Hide any overflow
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "3.5rem",
    margin: 0, // Remove default margin
    color: "white",
  };
  const captionStyle = {
    fontSize: "1rem", // Adjust font size
    color: "darkred", // Set text color
    padding: "5px 10px", // Add padding to the caption
    borderRadius: "5px", // Add border radius to the caption
    marginBottom: "10px", // Add margin at the bottom of the caption
    background: "brown", // Set background color for the caption
    display: "inline-block", // Make the background color span the full width of the heading
    margin: 0, // Remove extra margin
  };

  const paragraphStyle = {
    textAlign: "center",
    color: "white",
    fontSize: "1.5rem",
  };
  const contentWrapperStyle = {
    width: "90%",
    margin: "auto",
    display: "flex",
    marginTop: "5%",
    marginBottom: "50px", // Margin at the bottom of each contentWrapperStyle
  };

  const div1Style = {
    width: "60%",
    padding: "10px", // Add padding
    borderRadius: "20px", // Add border radius to div1
    background: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    alignItems: "center",
    height: "500px", // Make div1 a little taller
    position: "relative", // Enable relative positioning for inner elements
  };

  const imgStyle = {
    width: "100%", // Make the image slightly smaller than the div
    height: "100%", // Make the image slightly smaller than the div
    objectFit: "cover", // Maintain aspect ratio and cover the entire div
    borderRadius: "15px", // Add border radius to the image
  };

  const headingAboveImgStyle = {
    position: "absolute", // Position the heading absolutely within div1
    top: "20px", // Place the heading 10px from the top
    left: "20px", // Place the heading 10px from the left
    fontSize: "1.2rem", // Adjust the font size
    padding: "10px 10px", // Add padding to the left and right
    color: "black", // Change the color if needed
    zIndex: 2, // Ensure the heading appears above the image
  };
  const headingStyleLarge = {
    lineHeight: "2.0rem",
    // background: 'brown', // Set background color
    padding: "10px", // Add padding to the heading
    color: "black", // Set text color
    fontSize: "28px", // Larger font size for the "Executive Apartment" heading
    marginLeft: "20px", // Space between icon and heading
    fontWeight: "800",
  };
  const para = {
    fontSize: "16px",
    lineHeight: "2.0rem", // Larger font size for the "Executive Apartment" heading
    marginLeft: "20px", // Space between icon and heading
    fontWeight: "500",
  };

  const iconTextStyle = {
    display: "flex",
    alignItems: "center",
    color: "#978667",
    padding: "1px 0",
  };
  const div2Style = {
    width: "40%",
    // border: '1px solid black',
    margin: "10px", // Add padding
    background: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
    position: "relative", // Position div2 absolutely
    right: "10%", // Overlap by 10% from the right
    top: "20px", // Position div2 20px from the top
    height: "calc(100% - 50px)", // Make div2 50px shorter than its containing element
    zIndex: 1, // Place div2 above div1
    height: "400px", // Make div2 a little taller
    borderRadius: "10px", // Add border radius to div2
    overflow: "", // Hide any overflow
    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)", // Add a subtle shadow
    zIndex: isStandardModalOpen ? 0 : 1, // Lower zIndex when modal is open
  };
  const iconStyle = {
    marginRight: "10px", // Space between icon and text
  };
  const standardLinkStyle = {
    fontSize: "22px", // Set font size
    marginLeft: "20px",
    textDecoration: "underline",
    lineHeight: "2.0rem", // Add underline to indicate it's clickable
    cursor: "pointer", // Set cursor to pointer
  };

  // Function to open the image carousel
  const openImageCarousel = (image) => {
    setSelectedImage(image); // Set the selected image
    setImageCarouselOpen(true);
  };

  // Function to close the image carousel
  const closeImageCarousel = () => {
    setImageCarouselOpen(false);
  };

  // Function to open the Standard policy modal
  const openStandardModal = () => {
    setStandardModalOpen(true);
  };

  // Function to close the Standard policy modal
  const closeStandardModal = () => {
    setStandardModalOpen(false);
  };

  const modalStyle = {
    overlay: {
      background: isStandardModalOpen
        ? "rgba(0, 0, 0, 0.5)" // Semi-transparent black background when modal is open
        : "rgba(0, 0, 0, 0)", // Fully transparent background when modal is closed
      zIndex: 3, // Higher zIndex to overlay the content
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backdropFilter: isStandardModalOpen ? "blur(5px)" : "none", // Apply backdrop blur when modal is open
    },
    content: {
      width: "40%",
      margin: "0",
      height: "450px",
      lineHeight: "2.0rem",
      fontWeight: "500",
      margin: "auto",
      color: "white",
      background: "#978667", // White background color for the modal
      borderRadius: "10px", // Add border radius to the modal
      overflow: "auto", // Enable scrolling if the content overflows
      position: "relative", // Enable relative positioning for the content
      textAlign: "center",
      paddingTop: "5%",
      paddingLeft: "2%",
    },
  };

  // Generate four repeating contentWrapperStyle divs

  const contentWrapperDivs = [...Array(4)].map((_, index) => (
    <div
      className="maindiv"
      key={index}
      style={{ ...contentWrapperStyle, marginTop: index === 0 ? "5%" : "50px" }}
    >
      <div
        style={div1Style}
        className="div1"
        data-aos="fade-right"
        data-aos-offset="100"
      >
        <img
          src={img}
          style={imgStyle}
          onClick={openImageCarousel}
          alt="Image 1"
        />
        {/* Updated caption */}
        <h3
          className="hurryuphead"
          style={{
            ...headingAboveImgStyle,
            ...captionStyle,
            background: "#978667", // Set background color for the caption
            color: "white",
          }}
        >
          HURRY! 6 ROOMS AVAILABLE
        </h3>
      </div>
      <div
        style={div2Style}
        className="div2"
        data-aos="fade-left"
        data-aos-offset="100"
      >
        <div style={iconStyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-house-door"
            viewBox="0 0 16 16"
          >
            {/* ... (icon path data) */}
          </svg>
        </div>
        <div>
          <p style={headingStyleLarge} className="heading">
            Executive Apartment
          </p>
          <h4 style={standardLinkStyle} onClick={openStandardModal}>
            Policy:Standard
          </h4>
          <p>
            {" "}
            <RoomComponent />
          </p>
          <p style={iconTextStyle}>
            <FaBed style={{ fontSize: "20px", marginRight: "5px" }} />
            One Room With Master Bed
          </p>
          <p style={iconTextStyle}>
            <FaBed style={{ fontSize: "20px", marginRight: "5px" }} />
            One Room With Master Bed + Single Bed
          </p>
          <p style={iconTextStyle}>
            <FaShower style={{ fontSize: "20px", marginRight: "5px" }} />
            Two Washrooms
          </p>
          <p style={iconTextStyle}>
            <FaCouch style={{ fontSize: "30px", marginRight: "5px" }} />
            Lounge Area With Sofa Seating
          </p>
          <p style={iconTextStyle}>
            <FaUser style={{ fontSize: "20px", marginRight: "5px" }} />
            <span>2 Adults, 2 Children</span>
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              margin: "5px 0px",
            }}
          >
            <div>
              <button className="learn-more">
                <span aria-hidden="true" className="circle">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Book Now</span>
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div class="priceroom">
                Rs. <del> 50000 </del>
              </div>
              <div class="priceroom">Rs. 40000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div style={containerStyle}>
        <p style={paragraphStyle} data-aos="fade-in" data-aos-offset="100">
          Lorem ipsum dolor sit amet.
        </p>
        <h1 style={headingStyle} data-aos="fade-in" data-aos-offset="100">
          Hotel Management
        </h1>
      </div>
      {contentWrapperDivs}

      <Modal
        isOpen={isStandardModalOpen}
        onRequestClose={closeStandardModal}
        style={modalStyle}
        contentLabel="Policy: Standard"
        className="modal"
      >
        <ul>
          <h4> Policy: Standard</h4>

          <li style={{ iconTextStyle }}>
            {" "}
            <span>
              {" "}
              <FiArrowRight size={20} />
            </span>{" "}
            <span> Breakfast: Included </span>
          </li>

          <li style={{ iconTextStyle }}>
            {" "}
            <FiArrowRight size={20} />
            Cancellation Policy: Non-Refundable
          </li>

          <li style={{ iconTextStyle }}>
            {" "}
            <FiArrowRight size={20} />
            Free Cancel Before: until 7 days before arrival
          </li>

          <li style={{ iconTextStyle }}>
            {" "}
            <FiArrowRight size={20} />
            Guest Charged For Cancellation: The cost of the first night
          </li>

          <li style={{ iconTextStyle }}>
            {" "}
            <FiArrowRight size={20} />
            Charged For No-Show: Same as the cancellation fee
          </li>
        </ul>
        {/* ... (Add your policy content here) */}
        <button
          onClick={closeStandardModal}
          style={{
            position: "absolute",
            bottom: "20px",
            right: "10px",
            width: "50px",
            height: "30px",
            background: "#978667",
            color: "white",
          }}
        >
          Close
        </button>
      </Modal>

      {/* ... (existing content) */}

      {/* Image Carousel */}
      <ImageCarousel
        images={carouselImages}
        isOpen={isImageCarouselOpen}
        onRequestClose={closeImageCarousel}
      />
    </div>
  );
}

export default Second;
