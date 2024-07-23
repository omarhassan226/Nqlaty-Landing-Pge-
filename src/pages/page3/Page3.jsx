import React, { useState } from "react";
import OrangeArrow from "../../components/arrow/OrangeArrow";
import Card1 from "./components/Card1";
import { Box, Grid } from "@mui/material";
import { styles } from "../../styles/styles";
import "../page2/page2.css";

const Page3 = () => {
    const [selected, setSelected] = useState("Cargo loading platforms from NQLYAT solutions are designed to simplify your operations and keep your cargo in constant motion.");

    const handleSelectNavbarElement = (text) => {
        setSelected(text);
    };

    return (
        <div
            id="prices"
            style={{
                backgroundColor: "#383838",
                display: "flex",
                justifyContent: "center",
                padding: "50px 20px",
                position: "relative",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "left",
                width: "100%",
                boxSizing: "border-box"
            }}
        >
            <div className="lightPoint" style={{ top: "-300px", opacity: "0.2" }}></div>
            <OrangeArrow />
            <Box sx={{ width: '80%', maxWidth: '1200px' }}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4} display={"flex"}>
                        <Card1 handleSelectNavbarElement={handleSelectNavbarElement} selected={selected} selectionText="Cargo loading platforms from NQLYAT solutions are designed to simplify your operations and keep your cargo in constant motion.">
                            <span>
                                <img width={"12%"} src="../../../public/icon1.png" alt="Icon 1" />
                            </span>
                            <p style={{ color: "white" }}>
                                Cargo loading platforms from "NQLYAT solutions" are designed to simplify your operations and keep your cargo in constant motion.
                            </p>
                            <span style={styles.cardArrow}>🡦</span>
                        </Card1>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card1 handleSelectNavbarElement={handleSelectNavbarElement} selected={selected} selectionText="We rely on actual transactions to deliver accurate market prices across various routes, while peer reviews direct you to the perfect carrier every time.">
                            <span>
                                <img width={"12%"} src="../../../public/icon2.png" alt="Icon 2" />
                            </span>
                            <p style={{ color: "white" }}>
                                We rely on actual transactions to deliver accurate market prices across various routes, while peer reviews direct you to the perfect carrier every time.
                            </p>
                            <span style={styles.cardArrow}>🡦</span>
                        </Card1>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card1 handleSelectNavbarElement={handleSelectNavbarElement} selected={selected} selectionText="With transportation solutions, you can publish and search for trucks without limits, and stay informed thanks to instant alerts even when you are offline.">
                            <span>
                                <img width={"12%"} src="../../../public/icon3.png" alt="Icon 3" />
                            </span>
                            <p style={{ color: "white" }}>
                                With "transportation solutions", you can publish and search for trucks without limits, and stay informed thanks to instant alerts even when you are offline.
                            </p>
                            <span style={styles.cardArrow}>🡦</span>
                        </Card1>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Page3;
