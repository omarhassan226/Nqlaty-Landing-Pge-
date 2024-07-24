import { Box, Button, Grid, Typography } from "@mui/material";
import "./page5.css";
import React, { useState } from "react";
import { styles } from "../../styles/styles";
import OrangeArrow from "../../components/arrow/OrangeArrow";
import { color } from "../../colors/colors";
import AboutCard from "./components/AboutCard";
import ClientCard from "./components/ClientCard";

const Page5 = () => {
    const [value, setValue] = useState(5);
    const [selected, setSelected] = useState("🡢");

    const handleSetSelected = (shape) => {
        setSelected(shape);
    };

    return (
        <Box id="about" sx={styles.about}>
            <img
                style={{
                    position: "absolute",
                    top: "0",
                    height: "72vh",
                    width: "100%"
                }}
                src="../../../public/car3.png"
                alt=""
            />
            <OrangeArrow />
            <Box sx={{ display: "flex", justifyContent: "flex-start", width: "80%" }}>
                <p
                    style={{
                        zIndex: "5118888",
                        color: color.white,
                        maxWidth: "50%",
                        textAlign: "left"
                    }}
                >
                    Speeding up the carrier registration process and minimizing risks is
                    part of the effective process of shipping agencies.
                </p>
            </Box>
            <Grid
                container
                spacing={3}
                justifyContent="center"
                sx={{ width: "80%", marginLeft: "0", zIndex: "555555555555" }}
            >
                <Grid md={6} sm={12}>
                    <h3 style={{ color: color.white, textAlign: "left", width: "90%" }}>
                        <span style={{ color: color.orange }}>"NQLYAT Solutions"</span>{" "}
                        offers a comprehensive solution that goes beyond the basic data of
                        tonnage and freight.
                    </h3>
                </Grid>
                <Grid md={6} sm={12} justifyContent={'flex-end'}>
                    <h3 style={{ color: color.white, textAlign: "left", width: "90%" }}>
                        <span style={{ color: color.orange }}>Our customers</span> get
                        exclusive access to the best carrier monitoring services and smooth
                        registration processes, as well as Advanced Cargo Tracking
                        Solutions, setting a new standard in freight brokerage
                    </h3>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={3}
                justifyContent="center"
                sx={{ width: "80%", marginLeft: "0" }}
            >
                <Grid md={4} sm={12}>
                    <AboutCard>
                        <img
                            src="../../../public/Frame 50.png"
                            alt=""
                            style={{ zIndex: "55" }}
                        />
                    </AboutCard>
                </Grid>
                <Grid md={4} sm={12}>
                    <AboutCard>
                        <img
                            src="../../../public/Frame 51.png"
                            alt=""
                            style={{ zIndex: "55" }}
                        />
                    </AboutCard>
                </Grid>
                <Grid md={4} sm={12}>
                    <AboutCard>
                        <img
                            src="../../../public/Frame 52.png"
                            alt=""
                            style={{ zIndex: "55" }}
                        />
                    </AboutCard>
                </Grid>
            </Grid>
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
                <Box sx={{paddingTop:'200px'}}>
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold", color: color.white }}
                    >
                        What <span style={{ color: color.orange }}>Our Clients</span> Says
                    </Typography>
                </Box>
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    sx={{ width: "80%", marginLeft: "0",paddingTop:'50px' }}
                >
                    <Grid md={4} sm={12} sx={{display:'flex', justifyContent:'center'}}>
                        <ClientCard>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "20px",
                                    flexDirection: 'column',
                                }}
                            >
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    gap: "20px"
                                }} >
                                    <img width={"20%"} src="../../../public/man1.png" alt="" />
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                        <Typography
                                            variant="p"
                                            sx={{ fontWeight: "bold", textAlign: "left" }}
                                        >
                                            Ahmed
                                        </Typography>
                                        <Typography
                                            variant="p"
                                            sx={{ fontSize: "14px", textAlign: "left" }}
                                        >
                                            Owner
                                        </Typography>
                                        <Box
                                            sx={{
                                                "& > legend": { mt: 2 }
                                            }}
                                        >
                                            <Rating
                                                name="read-only"
                                                value={value}
                                                readOnly
                                                size="small"
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                                <Typography variant="p" sx={{ textAlign: 'left' }}>
                                    Lorem ipsum dolor sit amet consectetur. Tincidunt pharetra duis
                                    enim donec etiam tellus. Ac malesuada bibendum faucibus
                                    sollicitudin in amet at. Mauris donec pellentesque sit velit
                                    massa sem eget ligula. Morbi elit quis placerat pharetra in.
                                </Typography>
                            </Box>
                        </ClientCard>
                    </Grid>
                    <Grid md={4} sm={12} sx={{display:'flex', justifyContent:'center'}}>
                        <ClientCard>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "20px",
                                    flexDirection: 'column'
                                }}
                            >
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    gap: "20px"
                                }} >
                                    <img width={"20%"} src="../../../public/man2.png" alt="" />
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                        <Typography
                                            variant="p"
                                            sx={{ fontWeight: "bold", textAlign: "left" }}
                                        >
                                            Bakr
                                        </Typography>
                                        <Typography
                                            variant="p"
                                            sx={{ fontSize: "14px", textAlign: "left" }}
                                        >
                                            Owner
                                        </Typography>
                                        <Box
                                            sx={{
                                                "& > legend": { mt: 2 }
                                            }}
                                        >
                                            <Rating
                                                name="read-only"
                                                value={value}
                                                readOnly
                                                size="small"
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                                <Typography variant="p" sx={{ textAlign: 'left' }}>
                                    Lorem ipsum dolor sit amet consectetur. Tincidunt pharetra duis
                                    enim donec etiam tellus. Ac malesuada bibendum faucibus
                                    sollicitudin in amet at. Mauris donec pellentesque sit velit
                                    massa sem eget ligula. Morbi elit quis placerat pharetra in.
                                </Typography>
                            </Box>
                        </ClientCard>
                    </Grid>
                    <Grid md={4} sm={12} sx={{display:'flex', justifyContent:'center'}}>
                        <ClientCard>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "20px",
                                    flexDirection: 'column',
                                    alignContent:'center'
                                }}
                            >
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    gap: "20px"
                                }} >
                                    <img width={"20%"} src="../../../public/man3.png" alt="" />
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                        <Typography
                                            variant="p"
                                            sx={{ fontWeight: "bold", textAlign: "left" }}
                                        >
                                            Mohamed
                                        </Typography>
                                        <Typography
                                            variant="p"
                                            sx={{ fontSize: "14px", textAlign: "left" }}
                                        >
                                            Owner
                                        </Typography>
                                        <Box
                                            sx={{
                                                "& > legend": { mt: 2 }
                                            }}
                                        >
                                            <Rating
                                                name="read-only"
                                                value={value}
                                                readOnly
                                                size="small"
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                                <Typography variant="p" sx={{ textAlign: 'left' }}>
                                    Lorem ipsum dolor sit amet consectetur. Tincidunt pharetra duis
                                    enim donec etiam tellus. Ac malesuada bibendum faucibus
                                    sollicitudin in amet at. Mauris donec pellentesque sit velit
                                    massa sem eget ligula. Morbi elit quis placerat pharetra in.
                                </Typography>
                            </Box>
                        </ClientCard>
                    </Grid>
                </Grid>
                <Box sx={{ display: "flex", gap: "30px" }}>
                    <span
                        onClick={() => handleSetSelected("🡠")}
                        style={
                            selected === "🡠"
                                ? { ...styles.selectedArrow }
                                : { ...styles.normalArrow }
                        }
                    >
                        🡠
                    </span>
                    <span
                        onClick={() => handleSetSelected("🡢")}
                        style={
                            selected === "🡢"
                                ? { ...styles.selectedArrow }
                                : { ...styles.normalArrow }
                        }
                    >
                        🡢
                    </span>
                </Box>
            <Box className="shape3"></Box>
            <Box className="shape4"></Box>
        </Box>
    );
};

export default Page5;

import Rating from "@mui/material/Rating";
