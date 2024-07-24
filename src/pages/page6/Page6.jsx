import React from "react";
import { Box, Grid, TextField, Button, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { color } from "../../colors/colors";
import backgroundImage from "../../../public/productShip.png"; 
import truckImage from "../../../public/car2.png"; 

const StyledTextField = styled(TextField)({
    "& .MuiInputBase-root": {
        backgroundColor: "rgba(255, 255, 255)",
        borderRadius: "4px",
        height: "40px",
        // "& input": {
        //     textAlign: "center",
        // },
    },
    "& .MuiInputLabel-root": {
        color: "rgba(0, 0, 0, 0.60)",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "rgba(0, 0, 0, 0.23)",
        },
        "&:hover fieldset": {
            borderColor: "rgba(0, 0, 0, 0.60)",
        },
        "&.Mui-focused fieldset": {
            borderColor: "rgba(0, 0, 0, 0.60)",
        },
    },
});

const Page6 = () => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "50px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <Box
                sx={{
                    textAlign: "center",
                    marginBottom: "20px",
                }}
            >
                <h2 style={{ color: color.orange }}>Get A Competitive Instant Quote</h2>
                <p style={{ color: "white" }}>
                    Fill out the form for LTL and Full Truckload rates. Quick access without login!
                </p>
            </Box>
            <Grid
                container
                spacing={2}
                sx={{
                    width: isSmallScreen ? "100%" : "80%",
                    maxWidth: "1200px",
                    paddingLeft:'0',

                }}
            >
                <Grid item xs={12} md={7}>
                    <Box
                        sx={{
                            backgroundColor: "rgba(255,255,255, 0.1)",
                            padding: "30px",
                            borderRadius: "20px",
                            backdropFilter: "blur(2px)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            height: "100%",
                        }}
                    >
                        <Box component="form" sx={{ mt: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <StyledTextField
                                        fullWidth
                                        label="Pickup Location"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <StyledTextField fullWidth label="Date" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <StyledTextField
                                        fullWidth
                                        label="Delivery Location"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <StyledTextField fullWidth label="Date" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <StyledTextField
                                        fullWidth
                                        label="Weight (Tons)"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <StyledTextField
                                        fullWidth
                                        label="Load Category"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <StyledTextField
                                        fullWidth
                                        label="Company Name"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <StyledTextField fullWidth label="Email" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <StyledTextField
                                        fullWidth
                                        label="First Number"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <StyledTextField
                                        fullWidth
                                        label="Second Number"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            <Box sx={{ mt: 3 }}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        backgroundColor: color.orange,
                                        color: color.white,
                                        padding: "15px 0",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        borderRadius: "10px",
                                        boxShadow: "rgba(240, 83, 38, 0.3) 0px 5px",
                                        "&:hover": {
                                            backgroundColor: color.orange,
                                        },
                                    }}
                                >
                                    Request Your Quote
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <img
                            src={truckImage}
                            alt="Truck"
                            style={{
                                width: "100%",
                                maxWidth: "500px",
                                borderRadius: "10px",
                                height:'100%'
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Page6;
