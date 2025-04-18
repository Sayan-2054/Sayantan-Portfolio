import React, { useState, useEffect } from 'react'
import "./header.css"

const Header = () => {
    // Change background header
    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header");
        if (this.scrollY>=80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });
    // Toggle Menu
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    // Theme state
    const [theme, setTheme] = useState(() => {
        // Get saved theme from localStorage or default to 'light'
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        // Apply theme class to body
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(`${theme}-theme`);
        // Save theme to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Toggle theme handler
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Sayantan</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-briefcase-alt nav__icon"></i> Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav__close" 
                onClick={()=>showMenu(!Toggle)}></i>
            </div>

            <div className="nav__toggle" 
            onClick={()=>showMenu(!Toggle)}>
                <i className="uil uil-apps nav__icon"></i>
            </div>

            {/* Theme toggle button */}
            <div className="nav__theme-toggle" onClick={toggleTheme} style={{cursor: 'pointer', fontSize: '1.5rem', color: 'var(--text-color)'}}>
                {theme === 'light' ? (
                    <i className="uil uil-moon"></i>
                ) : (
                    <i className="uil uil-sun"></i>
                )}
            </div>
        </nav>
    </header>
  )
}

export default Header
