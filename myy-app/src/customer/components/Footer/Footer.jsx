import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#232f3e", color: "white", marginTop: "20px", fontFamily: "Arial, sans-serif" }}>
 
      <div style={{backgroundColor: "#37475a", textAlign: "center",padding: "10px",cursor: "pointer",}}onClick={scrollToTop}>
        <p style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>Back to top</p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", padding: "20px 50px" }}>
        <div style={{ flex: 1, margin: "10px", minWidth: "200px" }}>
          <h3 style={{ fontSize: "16px", marginBottom: "10px", color: "#ddd" }}>Get to Know Us</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ margin: "5px 0", fontSize: "14px", color: "#bbb", cursor: "pointer" }}>About Us</li>
            <li style={{ margin: "5px 0", fontSize: "14px", color: "#bbb", cursor: "pointer" }}>Careers</li>
            <li style={{ margin: "5px 0", fontSize: "14px", color: "#bbb", cursor: "pointer" }}>DEMo</li>
            <li style={{ margin: "5px 0", fontSize: "14px", color: "#bbb", cursor: "pointer" }}>demo</li>
          </ul>
        </div>
        <div style={{ flex: 1, margin: "10px", minWidth: "200px" }}>
          <h3 style={{ fontSize: "16px", marginBottom: "10px", color: "#ddd" }}>products</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ margin: "5px 0", fontSize: "14px", color: "#bbb", cursor: "pointer" }}>demo</li>
            <li style={{ margin: "5px 0", fontSize: "14px", color: "#bbb", cursor: "pointer" }}>demo</li>
            <li style={{ margin: "5px 0", fontSize: "14px", color: "#bbb", cursor: "pointer" }}>demo</li>
            <li style={{ margin: "5px 0", fontSize: "14px", color: "#bbb", cursor: "pointer" }}>demo</li>
          </ul>
        </div>
        <div style={{ flex: 1, margin: "10px", minWidth: "200px" }}>
          <h3 style={{ fontSize: "16px", marginBottom: "10px", color: "#ddd" }}>Payment</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ margin: "5px 0", fontSize: "14px", color: "#bbb", cursor: "pointer" }}>Ademo</li>
            <li style={{ margin: "5px 0", fontSize: "14px", color: "#bbb", cursor: "pointer" }}>demo</li>
            <li style={{ margin: "5px 0", fontSize: "14px", color: "#bbb", cursor: "pointer" }}>/ / /</li>
            <li style={{ margin: "5px 0", fontSize: "14px", color: "#bbb", cursor: "pointer" }}>/////</li>
          </ul>
        </div>
        <div style={{ flex: 1, margin: "10px", minWidth: "200px" }}>
          <h3 style={{ fontSize: "16px", marginBottom: "10px", color: "#ddd" }}>Let Us Help You</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ margin: "5px 0", fontSize: "14px", color: "#bbb", cursor: "pointer" }}>Your Account</li>
            <li style={{ margin: "5px 0", fontSize: "14px", color: "#bbb", cursor: "pointer" }}>Help</li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #3a4553", padding: "20px 50px", textAlign: "center" }}>
        <div style={{ marginBottom: "10px" }}>
          <img
            src="/assets/logos/WhatsApp Image 2025-01-09 at 23.26.16_a0316a31.jpg"
            alt="Logo"
            style={{ height: "40px" }}
          />
        </div>
        <div>
      <ul
        style={{ listStyleType: "none",padding: 0,margin: 0,display: "flex",justifyContent: "center",flexWrap: "wrap",}}>
        <li style={{ margin: "0 10px", cursor: "pointer" }}>
          <FaFacebookF style={{ fontSize: "24px", color: "#4267B2" }} />
        </li>
        <li style={{ margin: "0 10px", cursor: "pointer" }}>
          <FaTwitter style={{ fontSize: "24px", color: "#1DA1F2" }} />
        </li>
        <li style={{ margin: "0 10px", cursor: "pointer" }}>
          <FaInstagram style={{ fontSize: "24px", color: "#E1306C" }} />
        </li>
        <li style={{ margin: "0 10px", cursor: "pointer" }}>
          <FaLinkedinIn style={{ fontSize: "24px", color: "#0077B5" }} />
        </li>
        <li style={{ margin: "0 10px", cursor: "pointer" }}>
          <FaYoutube style={{ fontSize: "24px", color: "#FF0000" }} />
        </li>
      </ul>
        </div>

        <p style={{ fontSize: "12px", color: "#bbb", marginTop: "10px" }}>
          © {new Date().getFullYear()} Infinia. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
