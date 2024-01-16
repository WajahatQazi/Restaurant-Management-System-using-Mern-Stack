import React from "react";
import Layout from "./../Components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
       <div className="home" style={{ backgroundColor:"aliceblue" }}>
      <Box sx={{my: 5,textAlign: "center", ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}
      >
        <Typography variant="h4" style={{color:""}}>Welcome To FastEat</Typography>
        <p style={{font:"bold",color:"black"}}>
        We take great care to ensure that what we serve every day is safe, quality food. That means we use 100% real beef patties seasoned with just a pinch of salt and pepper. 
        It means our Chicken McNuggets® are made with white meat chicken. Simply put, it means real, quality ingredients and always evolving what matters to you.
        We’re on a food journey, and our menu shows it. We’ve evolved everything from how we cook our beef patties, to the ingredients we use in new and old favorites.
        </p>
      </Box>
      </div>
    </Layout>
  );
};

export default About;