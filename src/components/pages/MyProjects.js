import { ThemeProvider, createTheme } from "@mui/material/styles";
import { MuiThemeMod } from "../../css/muiTheme";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import * as React from 'react';
import ProjectCard from "../layout/ProjectCard";
import DirectionSnackbar from "../layout/Message";
function MyProjects() {
  const theme = createTheme(MuiThemeMod);
  const [projects, setProjects] = useState([])
  const location = useLocation();
  const [notificationMsg, setNotificationMsg] = useState("");
  
  let msg = "";
  if (location.state) {
    msg = location.state.message;
  }

  function removeProject(id){
    fetch(`http://localhost:5000/projects/${id}`,{
      method: 'DELETE',
      headers:{
        'Content-type': 'appication/json'
      },
    }).then(resp=> resp.json())
      .then(()=>{
        setProjects(projects.filter((project)=>project.id !== id))
        setNotificationMsg("Projeto deletado com sucesso!");
      })
  }

  useEffect(() =>{
      fetch('http://localhost:5000/projects',{
      method: "GET",
      headers:{
        'Content-Type': 'application/json',
      },
    }).then(resp=>resp.json())
      .then(data=>{
        setProjects(data)
        console.log(data)
      })
      .catch((err) => console.log(err)
      )
  },[])
  
  return (
    <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          marginTop={2}
        >        
          <Grid item xs={8} md={8} lg={10}>
            <Typography variant="h4" align="center" gutterBottom sx={{
                    color: theme.palette.primary.main
                  }}>
            Hello user
            </Typography>
          </Grid>
          {projects.length > 0 ? (
                <>
                <Grid item xs={8} md={8} lg={10}>
                  <Typography variant="body1" align="center" sx={{
                    color: theme.palette.primary.main
                  }}>
                    Your projects are headers
                  </Typography>
                </Grid>
                {projects.map((project) => (
                  <ProjectCard 
                    name={project.name} 
                    id={project.id}
                    email={project.email}
                    key={project.id}
                    handleRemove={removeProject}
                  />
                ))}
              </> 
          ) : (
            <Grid item xs={8} md={8} lg={10}>
              <Typography variant="body1" align="center"sx={{
                    color: theme.palette.primary.main
                  }}>
                You don't have any projects yet
              </Typography>
            </Grid>
          )}
        {msg && <DirectionSnackbar msg={msg} />}
        {notificationMsg && <DirectionSnackbar msg={notificationMsg} />}
      </Grid>
    </ThemeProvider>
  );
}

export default MyProjects;

