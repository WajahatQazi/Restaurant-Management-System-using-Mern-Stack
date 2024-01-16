import React from "react";
import Layout from "./../Components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Box style={{backgroundColor:"aliceblue"}}>
    <Layout >
     
      <Box sx={{ my: 5,textAlign: "center", ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Us</Typography>
        <p>
          We here welcome you to ask any query or question related to our services.You can also contact with the customer support service,details are given as: 
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          textAlign: "center",
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        
        <TableContainer component={Paper}>
          <Table aria-label="contact table"  >
            <TableHead>
              <TableRow>
                <TableCell 
                  sx={{ bgcolor: "black", color: "white" }}
                  textalign="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      
    </Layout>
    </Box>
  );
};

export default Contact;