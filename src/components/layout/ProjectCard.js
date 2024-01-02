import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import * as React from 'react';
import { Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

function ProjectCard({id, name, email, handleRemove}){

    const theme = useTheme();

    const remove = (e) =>{
        e.preventDefault()
        handleRemove(id)
    }

      const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 22, fontWeight: "bold", color: theme.palette.primary.main }}>
                    {name}
                </Typography>
                <Typography sx={{fontSize: 15, color: theme.palette.primary.main}} component="div">
                    Owner's email: {email}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/EditProject/${id}`} >
                    <Button>
                        <EditIcon/>
                    </Button>
                </Link>
                <Button onClick={remove}>
                    <DeleteIcon/>
                </Button>
            </CardActions>
        </React.Fragment>
    );

    return( 
    <>
        <Grid item xs={8} md={5} lg={5}>
            <Box>
                <Card variant="outlined">{card}</Card>
            </Box>
        </Grid>
    </>
    )
}

export default ProjectCard