import React from "react";
import Cards from "./components/Cards";

const Homepage = () => {
  return (
    <div>
      <Cards
        image="/images/image-qr-code.png"
        name_alt="QR code"
        width={400}
        height={400}
        description="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
        title="Improve your front-end skills by building projects"
      />
    </div>
  );
};

export default Homepage;
