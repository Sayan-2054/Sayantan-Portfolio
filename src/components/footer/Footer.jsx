import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Sayantan</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/sayan_2054/" className="footer__social-link" target='_blank'>
        <i class="bx bxl-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/sayantan-chowdhury-24015620a/
" className="footer__social-link" target='_blank'>
        <i class="bx bxl-linkedin"></i>
        </a>
        <a href="http://github.com/sayan-2054/" className="footer__social-link" target='_blank'>
        <i class="bx bxl-github"></i>
        </a>
            </div>

            <span className="footer__copy">&#169; Sayantan Chowdhury 2025. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer