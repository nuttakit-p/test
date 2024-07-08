import { AppBar, Box, Container, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import env from '../../configs/env';
import { useMenuContext } from '../../contexts/MenuContext';
import SwitchLanguage from '../Common/SwitchLanguage';

const LogoImg = styled.img`
  width: 120px;
`;

const Header = () => {
  const { t } = useTranslation(['common']);
  const { setCurrentMenu } = useMenuContext();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setCurrentMenu(newValue);
    navigate(newValue);
  };

  const menuRoutes = [
    { path: '/', label: t('menu.home-page') },
    { path: '/quiz', label: t('menu.quiz-page') },
    { path: '/leaderboard', label: t('menu.leaderboard-page') },
  ];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={env.URL_BDMS}
            // onClick={() => handleCloseNavMenu('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              // fontWeight: 400,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <LogoImg src="images/bdms_logo.png" alt="logo" />
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href={env.URL_BDMS}
            sx={{
              // mr: 2,
              display: { xs: 'flex', md: 'none', justifyContent: 'center' },
              flexGrow: 1,
              fontFamily: 'monospace',
              // fontWeight: 400,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <LogoImg src="images/bdms_logo.png" alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Tabs
              value={currentPath}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              aria-label="secondary tabs example"
            >
              {menuRoutes.map((route, index) => {
                return <Tab key={`menu-${index}`} value={route.path} label={route.label} />;
              })}
            </Tabs>
            {/* {pages.map((page) => (
              <Button
                // color="primary"
                // variant="text"
                key={page.path}
                onClick={() => handleCloseNavMenu(page.path)}
                sx={{ my: 2, display: 'block' }}
              >
                {page.name}
              </Button>
            ))} */}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <SwitchLanguage />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
