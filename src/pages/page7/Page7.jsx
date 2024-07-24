import React from 'react';
import { Box, Grid, Typography, Button, TextField } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from '/landing.png';
import emailIcon from '/email.svg';
import phoneIcon from '/phone.svg';
import logo from '/logo.png';
import './page7.css'
import { color } from '../../colors/colors';

const useStyles = {
    root: {
        backgroundColor: '#333',
        color: 'white',
    },
    leftSection: {
        textAlign: 'left',
        padding: '20px',
    },
    logo: {
        marginBottom: '20px',
        paddingTop:'50px'
    },
    getInTouch: {
        margin: '20px 0',
    },
    contactInfo: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    },
    icon: {
        marginRight: '10px',
        backgroundColor:color.orange,
        color:"white",
        borderRadius:'5px',
        padding:'5px'
    },
    middleSection: {
        display: 'flex',
        padding: '20px',
        flexDirection:'column',
        alignItems:'flex-start',
        textAlign: 'left',
        paddingLeft:'20px'
    },
    subscribeSection: {
        backgroundImage:`url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display:'flex',
        padding: '20px',
        flexDirection:'column',
        alignItems:'flex-start'
    },
    input: {
        backgroundColor: 'white',
        borderRadius: '10px',
        marginRight: '10px',
        height:'40px',
        width:'100%'
    },
    button: {
        borderRadius:'10px',
        backgroundColor: '#F05326',
        color: 'white',
        '&:hover': {
            backgroundColor: '#D9431D',
        },
    },
    socialIcons: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    },
    socialIcon: {
        margin: '0 10px',
        color: 'white',
        fontSize: '24px',
    },
};

const Page7 = () => {
    return (
        <Box sx={useStyles.root}>
            <Grid container spacing={2} sx={{display:'flex', width:'90%', margin:'0 0 0 auto'}}>
                <Grid item xs={12} md={3} sx={useStyles.leftSection}>
                    <img src={logo} alt="Logo" style={useStyles.logo} />
                    <Typography variant="h6" sx={{fontSize:'16px'}}>Nqlyat solutions: the leading shipping platform with superior service quality</Typography>
                    <Typography variant="h5" sx={useStyles.getInTouch}>Get in touch</Typography>
                    <Box sx={useStyles.contactInfo}>
                        <img src={emailIcon} alt="Email Icon" style={useStyles.icon} />
                        <Typography>marie28@yahoo.com</Typography>
                    </Box>
                    <Box sx={useStyles.contactInfo}>
                        <img src={emailIcon} alt="Email Icon" style={useStyles.icon} />
                        <Typography>marie28@yahoo.com</Typography>
                    </Box>
                    <Box sx={useStyles.contactInfo}>
                        <img src={phoneIcon} alt="Phone Icon" style={useStyles.icon} />
                        <Typography>360.766.0553</Typography>
                    </Box>
                    <Box sx={useStyles.contactInfo}>
                        <img src={phoneIcon} alt="Phone Icon" style={useStyles.icon} />
                        <Typography>360.766.0553</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3} className='middleSection' sx={useStyles.middleSection}>
                    <Typography variant="h5" sx={{paddingTop:'55px'}}>Company</Typography>
                    <Typography style={{color:color.orange, paddingTop:'30px'}}>Home</Typography>
                    <Typography>Solution</Typography>
                    <Typography>Pricing</Typography>
                    <Typography>Services</Typography>
                    <Typography>About Us</Typography>
                    <Typography>News</Typography>
                    <Typography>Contact Us</Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={useStyles.subscribeSection}>
                    <Typography variant="h5"style={{color:color.orange, paddingTop:'50px', fontWeight:'bold'}}>Subscribe</Typography>
                    <Box display="flex" justifyContent="center" alignItems="center" sx={{width:'80%'}} mt={2}>
                        <TextField
                            placeholder="Your Email Address"
                            variant="outlined"
                            size="small"
                            sx={useStyles.input}
                        />
                        <Button variant="contained" sx={useStyles.button}>Subscribe</Button>
                    </Box>
                        <span style={{height:'1px', width:'80%', backgroundColor:'white', marginTop:'10px'}}></span>
                    <Box sx={useStyles.socialIcons}>
                        <i className={`fab fa-instagram`} style={useStyles.socialIcon} />
                        <i className={`fab fa-facebook`} style={useStyles.socialIcon} />
                        <i className={`fab fa-twitter`} style={useStyles.socialIcon} />
                        <i className={`fab fa-linkedin`} style={useStyles.socialIcon} />
                    </Box>
                </Grid>
            </Grid>

            </Box>
    );
};

export default Page7;
