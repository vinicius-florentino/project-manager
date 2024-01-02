import FormControl from "@mui/material/FormControl";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import InputForm from "./InputForm";
import { MuiThemeMod } from "../../css/muiTheme";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import DirectionSnackbar from "../layout/Message";

function ProjectForm() {
  const navigate = useNavigate();
  const theme = createTheme(MuiThemeMod);
  const [project, setProject] = useState({});
  const [msg, setMsg] = useState('');
  
  function submitForm(e) {
    e.preventDefault();
    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setMsg("Projeto enviado com sucesso!");
        navigate('/myprojects', { state: { message: "Projeto criado com sucesso!" } });
      })
      .catch((err) => console.log(err));
  }

  function handleChange(e) {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={submitForm}>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          marginTop={2}
        >
          <Grid item xs={8} md={8} lg={10}>
            <Paper>
              <FormControl fullWidth>
                <InputForm
                  text="Project name:"
                  id="name"
                  name="name"
                  type="text"
                  aria-describedby="my-helper-text"
                  handleOnChange={handleChange}
                  required
                />
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={8} md={8} lg={10}>
            <Paper>
              <FormControl fullWidth>
                <InputForm
                  text="Email"
                  id="email"
                  name="email"
                  type="text"
                  aria-describedby="my-helper-text"
                  placeholder="@.com"
                  handleOnChange ={handleChange}
                  required
                />
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={8} md={8} lg={5}>
            <Paper>
              <FormControl fullWidth>
                <InputForm
                  text="Your phone"
                  id="phone"
                  name="phone"
                  type="text"
                  handleOnChange={handleChange}
                  required
                />
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={8} md={8} lg={5}>
            <Paper>
              <FormControl fullWidth>
                <InputForm
                  text="Project budget"
                  id="budget"
                  name="budget"
                  type="number"
                  handleOnChange={handleChange}
                  required
                />
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={8} md={8} lg={10}>
            <Paper>
              <FormControl fullWidth>
                <InputForm
                  text="Project description"
                  id="description"
                  name="description"
                  type="text"
                  handleOnChange={handleChange}
                  maxLength={70}
                  required
                />
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={6} md={6} lg={5}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ color: theme.palette.secondary.main }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
        {msg && <DirectionSnackbar msg={msg} />}
      </form>
    </ThemeProvider>
  );
}

export default ProjectForm;
