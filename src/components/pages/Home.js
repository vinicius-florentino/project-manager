import { Grid, Typography } from "@mui/material";
import * as React from 'react';
import savingsLogo from "../../img/savings.svg";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

function Home() {
  const theme = useTheme();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '80vh' }}
    >
      <Grid item xs={12} md={8} lg={6} textAlign="center">
        <Grid container justifyContent="center" variant="h1">
          <Typography variant="h4" sx={{
            color: theme.palette.primary.main,
            marginBottom:'3vh'
          }}>
            Welcome to project manager
          </Typography>
        </Grid>
        <Link to="/ProjectForm">
          <Button sx={{
            marginBottom:'2vh',
            fontSize: 18, 
            }}>
              Create a new project
          </Button>
        </Link>
        <img
          src={savingsLogo}
          style={{
            width: '50%',
            display: 'block',
            margin: '0 auto',
          }}
          alt="Savings Logo"
        />
      </Grid>
    </Grid>
  );
}

export default Home;
