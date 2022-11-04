import React from "react";
import HomeNav from "../HomeNav/HomeNav";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <HomeNav />
        <div className="foot2 text-center">
        <div className="bb">
          
          
          <p className="foot-p2">
            Social Media Links
          </p>
          <a href="https://www.instagram.com/cmrit.nss/"><i class="bi bi-instagram sizes left"></i></a>
          <a href="https://www.youtube.com/channel/UCmj-6V2rmxaFsGB1KB6CAyA/featured"><i class="bi bi-youtube sizes"></i></a>
          <a href="https://twitter.com/cmrit_nss?s=11&t=1prFEDQ3duNaIRMkn0TuLQ"><i class="bi bi-twitter sizes right"></i></a>
          </div>
          <p className="foot-p3">
            Developed by {"{ Harsha Mysore }"}
          </p>
        </div>
      </footer>
    </div>
  );
}
