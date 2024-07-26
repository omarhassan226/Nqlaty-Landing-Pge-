import { Grid } from "@mui/material";
import AboutCard from "./AboutCard";

const AboutCardsSection = () => (
    <Grid container spacing={3} justifyContent="center" sx={{ width: "80%", marginLeft: "0" }}>
        <Grid item md={4} sm={12} sx={{paddingLeft:'0 !important'}}>
            <AboutCard>
                <img src="../../../public/Frame 50.png" alt="" style={{ zIndex: "55" }} />
            </AboutCard>
        </Grid>
        <Grid item md={4} sm={12} sx={{paddingLeft:'0 !important'}}>
            <AboutCard>
                <img src="../../../public/Frame 51.png" alt="" style={{ zIndex: "55" }} />
            </AboutCard>
        </Grid>
        <Grid item md={4} sm={12} sx={{paddingLeft:'0 !important'}}>
            <AboutCard>
                <img src="../../../public/Frame 52.png" alt="" style={{ zIndex: "55" }} />
            </AboutCard>
        </Grid>
    </Grid>
);

export default AboutCardsSection;
