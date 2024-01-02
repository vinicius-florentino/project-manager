import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useTheme } from '@mui/material/styles';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function Footer() {
  const theme = useTheme();

  const handleClick = (href) => {
    setTimeout(() => {
      window.location.href = href;
    }, 125);
  };

  return (
    <BottomNavigation sx={{
      marginTop: '44.1vh',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    }}>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
        sx={{ color: theme.palette.secondary.main }}
        showLabel
        onClick={() => handleClick('/')}
      />
      <BottomNavigationAction
        label="My Projects"
        value="myprojects"
        icon={<FavoriteIcon />}
        sx={{ color: theme.palette.secondary.main }}
        showLabel
        onClick={() => handleClick('/myprojects')}
      />
      <BottomNavigationAction
        label="New project"
        value="newproject"
        icon={<AddBoxIcon />}
        sx={{ color: theme.palette.secondary.main }}
        showLabel
        onClick={() => handleClick('/projectform')}
      />
    </BottomNavigation>
  );
}
