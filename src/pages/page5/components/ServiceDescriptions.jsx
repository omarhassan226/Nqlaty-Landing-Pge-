import { Grid } from "@mui/material";
import { color } from "../../../colors/colors";

const ServiceDescriptions = () => (
    <Grid container spacing={3} justifyContent="center" sx={{ width: "80%", marginLeft: "0", zIndex: "555555555555" }}>
        <Grid md={6} sm={12}>
            <h3 style={{ color: color.white, textAlign: "left", width: "90%" }}>
                <span style={{ color: color.orange }}>"NQLYAT Solutions"</span> offers a comprehensive solution that goes beyond the basic data of tonnage and freight.
            </h3>
        </Grid>
        <Grid md={6} sm={12} justifyContent="flex-end">
            <h3 style={{ color: color.white, textAlign: "left", width: "90%" }}>
                <span style={{ color: color.orange }}>Our customers</span> get exclusive access to the best carrier monitoring services and smooth registration processes, as well as Advanced Cargo Tracking Solutions, setting a new standard in freight brokerage.
            </h3>
        </Grid>
    </Grid>
);

export default ServiceDescriptions;
