// import React from 'react';
// import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import backgroundImage from '../../../public/car3.png'; // Adjust the path to your image
// console.log(backgroundImage);
// import OrangeArrow from '../../components/arrow/OrangeArrow';

// const useStyles = styled({
//     root: {
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         position: 'relative',
//         color: 'white',
//         textAlign: 'center',
//         padding: '50px 20px',
//     },
//     overlay: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
//         zIndex: 1,
//     },
//     content: {
//         position: 'relative',
//         zIndex: 2,
//     },
//     card: {
//         backgroundColor: 'rgba(255, 255, 255, 0.1)',
//         color: 'white',
//         padding: '20px',
//         borderRadius: '15px',
//         textAlign: 'left',
//         transition: 'transform 0.3s ease, backgroundColor 0.3s ease',
//         '&:hover': {
//             transform: 'scale(1.05)',
//             backgroundColor: 'rgba(255, 255, 255, 0.2)',
//         },
//     },
//     button: {
//         backgroundColor: 'orange',
//         color: 'white',
//         '&:hover': {
//             backgroundColor: 'darkorange',
//         },
//     },
// });

// const Page5 = () => {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <div className={classes.overlay}></div>
//             <Box className={classes.content}>
//                 <OrangeArrow />
//                 <Typography variant="h4" gutterBottom>
//                     Speeding up the carrier registration process and minimizing risks
//                 </Typography>
//                 <Typography variant="h6" gutterBottom>
//                     "NQLYAT Solutions" offers a comprehensive solution that goes beyond the basic data of tonnage and freight.
//                 </Typography>
//                 <Grid container spacing={3} justifyContent="center">
//                     <Grid item xs={12} sm={6} md={4}>
//                         <Card className={classes.card}>
//                             <CardContent>
//                                 <Typography variant="h5" gutterBottom>
//                                     1
//                                 </Typography>
//                                 <Typography variant="body2">
//                                     With "NQLYAT Solutions", you can reach a fleet size that is three times larger than what other loading platforms offer to intermediaries.
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4}>
//                         <Card className={classes.card}>
//                             <CardContent>
//                                 <Typography variant="h5" gutterBottom>
//                                     2
//                                 </Typography>
//                                 <Typography variant="body2">
//                                     The selected plans include the "NQLYAT Solutions" carrier monitoring service, a service that helps you quickly qualify carriers, avoid risks, track instant loads, and ensure safety compliance.
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4}>
//                         <Card className={classes.card}>
//                             <CardContent>
//                                 <Typography variant="h5" gutterBottom>
//                                     3
//                                 </Typography>
//                                 <Typography variant="body2">
//                                     In addition, "NQLYAT Solutions" offers additional services such as registration and cargo tracking. To provide accurate and timely information, we will be connecting to a ready-made network of carriers equipped to track loads instantly.
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 </Grid>
//                 <Button variant="contained" className={classes.button} style={{ marginTop: '30px' }}>
//                     Read More
//                 </Button>
//             </Box>
//             <Box sx={{ marginTop: '50px', textAlign: 'center' }}>
//                 <Typography variant="h4" style={{ color: 'orange' }}>
//                     What Our Client Says
//                 </Typography>
//                 <Grid container spacing={3} justifyContent="center" style={{ marginTop: '20px' }}>
//                     <Grid item xs={12} sm={6} md={4}>
//                         <Card className={classes.card}>
//                             <CardContent>
//                                 <Typography variant="h6" gutterBottom>
//                                     Ahmed
//                                 </Typography>
//                                 <Typography variant="body2">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non dui vitae massa egestas ullamcorper.
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4}>
//                         <Card className={classes.card}>
//                             <CardContent>
//                                 <Typography variant="h6" gutterBottom>
//                                     Bakr
//                                 </Typography>
//                                 <Typography variant="body2">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non dui vitae massa egestas ullamcorper.
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4}>
//                         <Card className={classes.card}>
//                             <CardContent>
//                                 <Typography variant="h6" gutterBottom>
//                                     Mohamed
//                                 </Typography>
//                                 <Typography variant="body2">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non dui vitae massa egestas ullamcorper.
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 </Grid>
//             </Box>
//         </div>
//     );
// };

// export default Page5;

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
                <Grid md={6} sm={12}>
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
            {/* <Box sx={{paddingTop:'100px'}}> */}
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
                    <Grid md={4} sm={12}>
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
                    <Grid md={4} sm={12}>
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
                    <Grid md={4} sm={12}>
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
            {/* </Box> */}

            <Box className="shape1"></Box>
            <Box className="shape2"></Box>
        </Box>
    );
};

export default Page5;

import Rating from "@mui/material/Rating";
