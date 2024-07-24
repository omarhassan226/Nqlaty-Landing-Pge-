import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { styles } from "../../styles/styles";

const Navbar = () => {
    const [selected, setSelected] = useState("home");

    const handleSelectNavbarElement = (link) => {
        setSelected(link);
    };

    return (
        <div style={styles.navbarParent}>
            <div style={styles.navbar}>
                <div>
                    <img width={'60%'} src="../../../public/logo.png" alt="" />
                </div>
                <div style={styles.navbarLink}>
                    <ScrollLink 
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        style={selected === "home" ? {...styles.navbarLink, ...styles.selectedLink} : styles.navbarLink}
                        onClick={() => handleSelectNavbarElement("home")}
                    >
                        Home
                    </ScrollLink>
                    <ScrollLink 
                        activeClass="active"
                        to="solutions"
                        spy={true}
                        smooth={true}
                        duration={500}
                        style={selected === "solutions" ? {...styles.navbarLink, ...styles.selectedLink} : styles.navbarLink}
                        onClick={() => handleSelectNavbarElement("solutions")}
                    >
                        Solution
                    </ScrollLink>
                    <ScrollLink 
                        activeClass="active"
                        to="prices"
                        spy={true}
                        smooth={true}
                        duration={500}
                        style={selected === "prices" ? {...styles.navbarLink, ...styles.selectedLink} : styles.navbarLink}
                        onClick={() => handleSelectNavbarElement("prices")}
                    >
                        Prices
                    </ScrollLink>
                    <ScrollLink 
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        duration={500}
                        style={selected === "services" ? {...styles.navbarLink, ...styles.selectedLink} : styles.navbarLink}
                        onClick={() => handleSelectNavbarElement("services")}
                    >
                        Services
                    </ScrollLink>
                    <ScrollLink 
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        style={selected === "about" ? {...styles.navbarLink, ...styles.selectedLink} : styles.navbarLink}
                        onClick={() => handleSelectNavbarElement("about")}
                    >
                        About Us
                    </ScrollLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
