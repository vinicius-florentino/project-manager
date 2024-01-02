import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MuiThemeMod } from '../src/css/muiTheme';
import Navbar from './components/layout/Navbar'; 
import Footer from './components/layout/Footer'; 
import ProjectForm from "./components/form/ProjectForm";
import EditProject from './components/form/EditProject';
import Home from "./components/pages/Home"
import MyProjects from './components/pages/MyProjects';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import About from './components/pages/About';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import "./css/App.css"
export default function App() {
  const theme = createTheme(MuiThemeMod);
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/projectform" element={<ProjectForm/> } />
            <Route path="/" element={<Home/> } />
            <Route path="/myprojects" element={<MyProjects/> } />
            <Route path="/contact" element={<Contact/> } />
            <Route path="/about" element={<About/> } />
            <Route path="/services" element={<Services/> } />
            <Route path="/EditProject/:id" element={<EditProject />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}