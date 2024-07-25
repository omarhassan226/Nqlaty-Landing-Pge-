import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styles } from "../../styles/styles";
import OrangeButton from './../buttons/OrangeBtton';
import WhiteButton from "../buttons/WhiteButton";

const Navbar = () => {
    const [selected, setSelected] = useState("home");
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleSelectNavbarElement = (link) => {
        setSelected(link);
        setDrawerOpen(false);
    };

    const toggleDrawer = (open) => (event) => {
        setDrawerOpen(open);
    };

    const navLinks = [
        { label: "Home", to: "home" },
        { label: "Solution", to: "solutions" },
        { label: "Prices", to: "prices" },
        { label: "Services", to: "services" },
        { label: "About Us", to: "about" },
    ];

    const drawer = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {navLinks.map((link) => (
                    <ListItem button key={link.to} onClick={() => handleSelectNavbarElement(link.to)}>
                        <ScrollLink
                            activeClass="active"
                            to={link.to}
                            spy={true}
                            smooth={true}
                            duration={500}
                            style={styles.drawerLink}
                        >
                            <ListItemText primary={link.label} />
                        </ScrollLink>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="static" sx={styles.navbarParent}>
            <Toolbar sx={styles.navbar}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img width={'60%'} src="../../../public/logo.png" alt="Logo" />
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex", alignItems: 'center' }, gap: '100px' }}>
                    <Box>
                        {navLinks.map((link) => (
                            <ScrollLink
                                key={link.to}
                                activeClass="active"
                                to={link.to}
                                spy={true}
                                smooth={true}
                                duration={500}
                                style={selected === link.to ? { ...styles.navbarLink, ...styles.selectedLink } : styles.navbarLink}
                                onClick={() => handleSelectNavbarElement(link.to)}
                            >
                                {link.label}
                            </ScrollLink>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                        <ScrollLink
                            activeClass="active"
                            to={"footer"}
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={() => handleSelectNavbarElement("footer")}
                        ><WhiteButton>Login</WhiteButton></ScrollLink>
                        <ScrollLink
                            activeClass="active"
                            to={"signUp"}
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={() => handleSelectNavbarElement("signUp")}
                        ><OrangeButton>Sign up</OrangeButton>
                        </ScrollLink>
                    </Box>
                </Box>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: "flex", md: "none" } }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Drawer
                sx={{ zIndex: '8888888888888' }}
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
