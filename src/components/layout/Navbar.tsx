import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background-color: #000000;
  box-shadow: 0 2px 4px rgba(255, 23, 68, 0.1);
  position: fixed;
  z-index: 1100;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    color: #ff1744;
  }
`;

const LogoBox = styled(Box)`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const LogoIcon = styled(DirectionsCarIcon)`
  color: #ff1744;
  margin-right: 8px;
  font-size: 2rem;
`;

const LogoText = styled(Typography)`
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  font-size: 1.5rem;
  letter-spacing: 1px;
`;

const NavButton = styled(Button)`
  color: #ffffff;
  margin: 0 8px;
  font-weight: 500;
  font-size: 1rem;
  &:hover {
    color: #ff1744;
    background-color: transparent;
  }
`;

const BookButton = styled(Button)`
  background-color: #ff1744;
  color: #ffffff;
  margin-left: 16px;
  padding: 8px 24px;
  font-weight: 500;
  &:hover {
    background-color: #b2102f;
  }
`;

const navItems = [
  { text: 'Главная', path: '/' },
  { text: 'Услуги', path: '/services' },
  { text: 'О нас', path: '/about' },
  { text: 'Контакты', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List sx={{ background: '#000000', height: '100%', pt: 2 }}>
      {navItems.map((item) => (
        <ListItem key={item.text} sx={{ py: 1 }}>
          <StyledLink to={item.path} onClick={handleDrawerToggle}>
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{
                sx: { 
                  color: '#ffffff',
                  '&:hover': { color: '#ff1744' }
                }
              }}
            />
          </StyledLink>
        </ListItem>
      ))}
      <ListItem sx={{ py: 1 }}>
        <BookButton variant="contained" fullWidth>
          Записаться
        </BookButton>
      </ListItem>
    </List>
  );

  return (
    <>
      <StyledAppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LogoBox>
              <StyledLink to="/">
                <LogoIcon />
                <LogoText>DELTA MOTORS</LogoText>
              </StyledLink>
            </LogoBox>
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: '#ffffff' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {navItems.map((item) => (
                  <StyledLink key={item.text} to={item.path}>
                    <NavButton>
                      {item.text}
                    </NavButton>
                  </StyledLink>
                ))}
                <BookButton variant="contained">
                  Записаться
                </BookButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            background: '#000000',
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 