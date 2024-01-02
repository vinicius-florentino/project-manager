import Grid from "@mui/material/Grid"
import { useState, useEffect } from "react"
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import InputForm from "./InputForm";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import { MuiThemeMod } from "../../css/muiTheme";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
function EditProject(){

    const {id} = useParams()
    const theme = createTheme(MuiThemeMod);
    const [project, setProject] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:5000/projects/${id}`,{
        method: "GET",
        headers: {
            'Content-type': 'application/json',
        },
        }).then(resp => resp.json())
        .then((data)=>{
            setProject(data)
        })
        .catch(err => console.log(err))
    }, [id])

    function handleChange(e) {
        setProject({
          ...project,
          [e.target.name]: e.target.value,
        });
    }

    function removeProject(id){
        fetch(`http://localhost:5000/projects/${id}`,{
          method: 'DELETE',
          headers:{
            'Content-type': 'appication/json'
          },
        }).then(resp=> resp.json())
          .then(()=>{
            setProject(project.filter((project)=>project.id !== id))
            navigate('/myprojects', { state: { message: "Projeto Deletado com sucesso!" } });
          })
    }
      
    function editProject(project){
        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        }).then(resp => resp.json())
          .then((data)=>{
            console.log("chegou aqui")
            setProject(data)
            navigate('/myprojects', { state: { message: "Projeto atualizado com sucesso!" } });
        })
        .catch(err => console.log(err))
    }

    return(
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                editProject(project);
            }}>
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
                                    placeholder={project.name}
                                    handleOnChange ={handleChange}
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
                                    placeholder={project.email}
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
                                    placeholder={project.phone}
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
                                    placeholder={project.budget}
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
                                    placeholder={project.description}
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
            </form>
        </>
    )
}

export default EditProject