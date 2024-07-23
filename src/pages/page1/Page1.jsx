import React from "react";
import { styles } from "../../styles/styles";
import { color } from "../../colors/colors";
import Page2 from "../page2/Page2";
import OrangeArrow from "../../components/arrow/OrangeArrow";

const Page1 = () => {
    return (
        <>
        <div id="home" style={styles.landing}>
            <div style={{width:'50%', display:'flex', flexDirection:'column', gap:'24px', alignItems:'center'}}>
                <p style={{ display: "flex", flexDirection: "column",fontWeight:700, fontSize:'53px' }}>
                    <span style={{ color: `${color.white}` }}>Intermediaries in</span>{" "}
                    <span style={{ color: `${color.orange}` }}>"NQLYAT solutions"</span>{" "}
                </p>
                <p style={{maxWidth:'85%', color:`${color.white}`, fontWeight:700, fontSize:'22px' }}>
                    can now transport more cargo and tackle any logistical challenge,
                    thanks to access to the largest fleet and the widest data in the
                    market.
                </p>
                <button style={{fontSize:'15px',fontWeight:700,width:'200px', padding:'18px 0px', backgroundColor:color.white, color:color.orange, borderRadius:'30px', boxShadow:' rgba(240, 83, 38, 0.3) 0px 5px ', border:'none', cursor:'pointer'}}>Get In Touch</button>
            </div>
        </div>
        </>
    );
};

export default Page1;
