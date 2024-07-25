import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import HeaderSection from "./components/HeaderSection";
import ServiceDescriptions from "./components/ServiceDescriptions";
import AboutCardsSection from "./components/AboutCardsSection";
import ClientTestimonials from "./components/ClientTestimonials";
import NavigationArrows from "./components/NavigationArrows";
import { styles } from "../../styles/styles";
import { color } from "../../colors/colors";
import "./page5.css"

const Page5 = () => {
    const [selected, setSelected] = useState("🡢");

    const handleSetSelected = (shape) => {
        setSelected(shape);
    };

    return (
        <Box id="about" sx={styles.about}>
            <img
                style={{ position: "absolute", top: "0", height: "72vh", width: "100%" }}
                src="../../../public/car3.png"
                alt=""
            />
            <HeaderSection />
            <ServiceDescriptions />
            <AboutCardsSection />
            <Button
                variant="contained"
                sx={{
                    fontSize: "15px",
                    fontWeight: 600,
                    width: "200px",
                    padding: "18px 0",
                    backgroundColor: color.white,
                    color: color.orange,
                    borderRadius: "30px",
                    boxShadow: "rgba(240, 83, 38, 0.3) 0px 5px",
                    border: "none",
                    cursor: "pointer",
                    "&:hover": {
                        backgroundColor: color.white,
                        boxShadow: "rgba(240, 83, 38, 0.5) 0px 7px"
                    }
                }}
            >
                Read More
            </Button>
            <ClientTestimonials />
            <NavigationArrows selected={selected} handleSetSelected={handleSetSelected} />
            <Box className="shape3"></Box>
            <Box className="shape4"></Box>
        </Box>
    );
};

export default Page5;
