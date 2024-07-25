import React, { useState } from "react";
import { styles } from "../../styles/styles";
import "./page2.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { color } from "../../colors/colors";
import WhiteButton from "./../../components/buttons/WhiteButton";

const Page2 = () => {
    const [selected, setSelected] = useState("🡢");

    const handleSetSelected = (shape) => {
        setSelected(shape);
    };

    return (
        <div id="solutions" style={styles.page2}>
            <Box sx={{ width: "80%", zIndex: "50500550" }}>
                <Grid
                    sx={{position:'relative', display: "flex", height:'100%', justifyContent:'space-between', alignContent:'center' }}
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 3, sm: 3, md: 3 }}
                >
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={5}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap:'20px',
                            alignContent:'center',
                            justifyContent:'center',
                        }}
                    >
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems:'center' }}>
                            <Box>
                                <span style={{ fontSize: "80px", color: color.white }}>🡥</span>
                            </Box>
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
                        </Box>
                        <Box sx={{textAlign:'left', display:'flex', flexDirection:'column', gap:'20px', color:'white',alignItems:'center'}}>
                            <h3>
                                Take advantage of the superior load-loading platforms of
                                "NQLYATsolutions", which serve intermediaries of all sizes.
                                Whether you are an emerging broker or a country-wide operation,
                                the pallets for loading cargo for brokers from "transport
                                solutions" guarantee prompt delivery of your shipments.
                            </h3>
                            <p>
                                Cargo loading platforms from "NQLYAT solutions" are designed to
                                simplify your operations and keep your cargo in constant motion.
                                We rely on actual transactions to deliver accurate market prices
                                across various routes, while peer reviews direct you to the
                                perfect carrier every time. With "transportation solutions", you
                                can publish and search for trucks without limits, and stay
                                informed thanks to instant alerts even when you are offline.
                            </p>
                        </Box>
                        <Box sx={{display:'flex', gap:'20px'}}>
                            <WhiteButton>Get A Quote</WhiteButton>
                            <button style={{ color: "white", border: "1px solid white", backgroundColor:'transparent',padding:'10px', borderRadius:'20px', cursor:'pointer' }}>
                                Learn More
                            </button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{position:'relative',display:'flex', justifyContent:'center', alignItems:'center', left:'4%'}}>
                        <img
                            style={{ position: "absolute",left:'55%',top:'10%' }}
                            width={"62%"}
                            src="../../../public/productShip2.png"
                            alt=""
                        />
                            <img
                                style={{ left:'30%',top:'3%',position:'absolute'  }}
                                width={"90%"}
                                src="../../../public/product3.png"
                                alt=""
                            />
                        <img
                            style={{position: "absolute", top:'0%'  }}
                            width={"90%"}
                            src="../../../public/car.png"
                            alt=""
                        />
                        <img
                            style={{  display:'none'}}
                            width={"80%"}
                            src="../../../public/car.png"
                            alt=""
                        />
                    </Grid>
                </Grid>
            </Box>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="lightPoint"></div>
        </div>
    );
};

export default Page2;
