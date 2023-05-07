import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
function Footer() {
  const data = [
    {
      type: "Product",
      subTypes: [
        "Cards",
        "Papers",
        "Stickers",
        "Covers",
        "Bond Sheets",
        "Flex",
      ],
    },
    {
      type: "Services",
      subTypes: [
        
        "Design",
        "Themes",
        "Quality Printing",
        "24/7 support",
      ],
    },
    {
      type: "Company",
      subTypes: ["About", "Products", "Contact Us", "Help?"],
    },
    {
      type: "Contact",
      subTypes: ["10,1st Floor", "VMK complex", "Opp.Hotel Oxford", "Vctv road","Erode -638003"],
    },
  ];
  const socialLinks = [
    <BsFacebook />,
    <BsInstagram />,
    <BsTwitter />,
    <BsLinkedin />,
  ];
  return (
    <footer className="py-3 mx-3">
      <div className="brand-container">
        <div className="brand">
          <span>Ero Prints</span>
          <span className="dot">.</span>
        </div>
        <p className="description">
          
        </p>

        <ul className="social-links">
          {socialLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
      <div className="links">
        {data.map(({ type, subTypes }, index) => {
          return (
            <div className="link" key={index}>
              <h3 className="title">{type}</h3>
              <ul>
                {subTypes.map((type, index) => (
                  <li key={index}>
                    <a href="#">{type}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;