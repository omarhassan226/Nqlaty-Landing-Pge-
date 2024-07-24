import React, { useState } from "react";
import OrangeArrow from "../../components/arrow/OrangeArrow";
import Card1 from "./components/Card1";
import { Box, Grid } from "@mui/material";
import { styles } from "../../styles/styles";
import "../page2/page2.css";
import Masonry1 from "./components/Masonry1";
import { color } from "../../colors/colors";
import LoadingPlatform from "./components/LoadingPlatform";

const platformServices = [
    { title: "transportation solutions" },
    { title: "Shipping" },
    { title: "Charger" },
    { title: "Middle East" },
    { title: "North Africa" },
    { title: "Loads" },
    { title: "Communication" },
    { title: "Agreements" },
    { title: "Acceleration" },
    { title: "Business Growth" },
    { title: "Ease" }
];

const Page3 = () => {
    const [selected, setSelected] = useState(
        "Cargo loading platforms from NQLYAT solutions are designed to simplify your operations and keep your cargo in constant motion."
    );

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
                boxSizing: "border-box",
                gap: "50px"
            }}
        >
            <div
                className="lightPoint"
                style={{ top: "-300px", opacity: "0.2" }}
            ></div>
            <OrangeArrow />
            <Box sx={{ width: "80%", maxWidth: "1200px" }}>
                <Grid container spacing={3} justifyContent="center" >
                    <Grid item xs={12} sm={6} md={4} sx={{ display:'flex'}}>
                        <Card1
                            handleSelectNavbarElement={handleSelectNavbarElement}
                            selected={selected}
                            selectionText="Cargo loading platforms from NQLYAT solutions are designed to simplify your operations and keep your cargo in constant motion."
                        >
                            <span>
                                <img
                                    width={"12%"}
                                    src="../../../public/icon1.png"
                                    alt="Icon 1"
                                />
                            </span>
                            <p style={{ color: "white" }}>
                                Cargo loading platforms from "NQLYAT solutions" are designed to
                                simplify your operations and keep your cargo in constant motion every time.
                            </p>
                            <span style={styles.cardArrow}>🡦</span>
                        </Card1>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ display:'flex'}}>
                        <Card1
                            handleSelectNavbarElement={handleSelectNavbarElement}
                            selected={selected}
                            selectionText="We rely on actual transactions to deliver accurate market prices across various routes, while peer reviews direct you to the perfect carrier every time."
                        >
                            <span>
                                <img
                                    width={"12%"}
                                    src="../../../public/icon2.png"
                                    alt="Icon 2"
                                />
                            </span>
                            <p style={{ color: "white" }}>
                                We rely on actual transactions to deliver accurate market prices
                                across various routes, while peer reviews direct you to the
                                perfect carrier every time.
                            </p>
                            <span style={styles.cardArrow}>🡦</span>
                        </Card1>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ display:'flex'}}>
                        <Card1
                            handleSelectNavbarElement={handleSelectNavbarElement}
                            selected={selected}
                            selectionText="With transportation solutions, you can publish and search for trucks without limits, and stay informed thanks to instant alerts even when you are offline."
                        >
                            <span>
                                <img
                                    width={"12%"}
                                    src="../../../public/icon3.png"
                                    alt="Icon 3"
                                />
                            </span>
                            <p style={{ color: "white" }}>
                                With "transportation solutions", you can publish and search for
                                trucks without limits, and stay informed thanks to instant
                                alerts even when you are offline.
                            </p>
                            <span style={styles.cardArrow}>🡦</span>
                        </Card1>
                    </Grid>
                </Grid>
            </Box>
            <Grid container spacing={3} justifyContent="space-around" sx={{ width: "100%", maxWidth: "1200px", paddingTop:'50px' }}>
                <Grid item xs={12} sm={12} md={4}>
                        <Masonry1 />
                </Grid>
                <Grid item xs={12} sm={12} md={4.5}>
                        <Box sx={{ textAlign: "left" }}>
                            <Box sx={{ marginBottom: "20px" }}>
                                <h1 style={{ color: color.orange }}>NQLYAT Loading Platform</h1>
                            </Box>
                            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", gap: "20px" }}>
                                {platformServices.map((service, index) => (
                                    <LoadingPlatform key={index}>{service.title}</LoadingPlatform>
                                ))}
                            </Box>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ width: "80%", maxWidth: "1200px", textAlign: "center", display: "flex", justifyContent: "center", gap: "7%" }}>
                <div
                    className="lightPoint"
                    style={{ top: "15%", left: "105%", opacity: "0.2" }}
                ></div>
                <div
                    className="lightPoint"
                    style={{ top: "40%", left: "-5%", opacity: "0.2" }}
                ></div>
            </Box>
        </div>
    );
};

export default Page3;
