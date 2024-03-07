import React from "react";
import './footer.css'
import { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
function Footer() {
  return (
    <section className="footer">
      <div className="footer-content">
        <img src="https://erisimkablo.com.tr/wp-content/uploads/2023/06/erisim_logo_white2.png.webp" alt="" />
        <p>Mehmet Akif Ersoy Mah. Reşat Nuri Güntekin Cad. No:45C Arnavutköy / İSTANBUL</p>
        <div className="icons">
          <a href=""><FaFacebook /></a>
          <a href=""><FaSquareXTwitter /></a>
          <a href=""><FaInstagramSquare /></a>
          <a href=""><FaWhatsappSquare /></a>
        </div>
      </div>
      <div className="footer-content">
        <h4>Links</h4>
        <li><a href="">Home</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">About us</a></li>
        <li><a href="">Contacts</a></li>
      </div>
      <div className="footer-content">
        <h4>İletişim</h4>
        <li><a href="">T: +90 (212) 549 27 23 – 80</a></li>
        <li><a href="">F: +90 (212) 549 27 81</a></li>
        <li><a href="">E-Mail:
          info@erisimkablo.com.tr
          kalite@erisimkablo.com.tr</a></li>
        <li><a href="">https://erisimkablo.com.tr</a></li>
      </div>
      <hr className='br' />
      <p className="hak">Copyright 2023 © Erişim Kablo. Her hakkı saklıdır.</p>
    </section>
  )
}

export default Footer