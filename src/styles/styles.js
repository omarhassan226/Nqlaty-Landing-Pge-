import zIndex from "@mui/material/styles/zIndex";
import { color } from "../colors/colors";

export const styles = {
    whiteButton: {
        backgroundColor: color.white,
        color: color.orange,
        border: "none",
        borderRadius: "20px",
        cursor: "pointer",
        padding: "10px"
    },
    OrangeButton: {
        backgroundColor: color.orange,
        color: color.white,
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    },
    navbarParent: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent)",
        color: color.white,
        position: "fixed",
        width: "100%",
        top: "0",
        zIndex: 500550550505888
    },
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        color: color.white,
        position: "relative",
        width: "80%",
        top: "0",
        zIndex: 500550550505888
    },
    navbarLink: {
        color: color.white,
        display: "flex",
        gap: "20px",
        textDecoration: "none",
        transition: "background-color 0.3s, color 0.3s",
        cursor: "pointer"
    },
    selectedLink: {
        backgroundColor: color.orange,
        color: color.white,
        padding: "10px",
        borderRadius: "20px"
    },
    landing: {
        position: "relative",
        background:
            "url('../../../public/landing.png') no-repeat center center/cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    services: {
        padding:'10% 0',
        position: "relative",
        background:
            "url('../../../public/product4.png') no-repeat center center/cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection:'column',
        gap:'50px'
    },
    about: {
        padding:'5% 0',
        position: "relative",
        backgroundColor:color.cardColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection:'column',
        gap:'50px',
    },
    page2: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#383838",
        width: "100%"
    },
    selectedArrow: {
        backgroundColor: color.orange,
        color: color.white,
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "none",
        fontSize: "35px",
        cursor: "pointer"
    },
    normalArrow: {
        backgroundColor: "transparent",
        color: color.white,
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "1px solid white",
        fontSize: "35px",
        cursor: "pointer"
    },
    cardArrow: {
        alignSelf: "flex-end",
        border: "1px solid white",
        borderRadius: "50%",
        width: "25px",
        height: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
    }
};
