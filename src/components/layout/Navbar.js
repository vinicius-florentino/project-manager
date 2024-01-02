import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from "@mui/material/Link"
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  return (
    <Box>
      <AppBar position="static" sx={{ background: theme.palette.primary.main }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: theme.palette.secondary.main }}
            onClick={toggleDrawer(true)}
          >
          <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: theme.palette.secondary.main }}
          ></Typography>
          <Button color="inherit" sx={{ mr: 2, color: theme.palette.secondary.main }}>
            Sign-in
          </Button>
          <Button color="inherit" sx={{ color: theme.palette.secondary.main }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {['About', 'Services', 'Contact'].map((text) => 
          (<ListItem a key={text}>
              <Link href={`/${text.toLowerCase()}`} sx={{ padding: '20px', color: theme.palette.primary.main, textDecoration: 'none'}}>
                {text}
              </Link>
            </ListItem>)
          )}
        </List>
      </Drawer>
    </Box>
  );
}
