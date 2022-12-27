import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <nav className={`navbar navbar-expand-md ${scrolled ? "scrolled" : ""}`} >
                <Container>
                    <a className="navbar-brand " href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="#home" className={activeLink === 'home' ? 'active nav-link navbar-link' : 'nav-link navbar-link'}
                                   onClick={() => onUpdateActiveLink('home')}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#skills" className={activeLink === 'skills' ? 'active nav-link navbar-link' : 'nav-link navbar-link'}
                                   onClick={() => onUpdateActiveLink('skills')}>Skills</a>
                            </li>
                            <li className="nav-item">
                                <a href="#project" className={activeLink === 'project' ? 'active nav-link navbar-link' : 'nav-link navbar-link'}
                                   onClick={() => onUpdateActiveLink('project')}>Projects</a>
                            </li>
                        </ul>

                        <span className="navbar-text">
                          <div className="social-icon">
                            <a href="https://www.linkedin.com/in/yingrui-fifi-yang/"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/andyfifi6"><img src={navIcon2} alt="" /></a>
                          </div>
                          <HashLink to='#connect'>
                            <button className="vvd"><span>Let’s Connect</span></button>
                          </HashLink>
                    </span>
                    </div>
                </Container>
            </nav>
        </Router>
    )
}