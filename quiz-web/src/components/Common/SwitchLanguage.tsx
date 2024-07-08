import { Avatar, Button, Menu, Stack, Tooltip, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
// import { useNavigate, useParams, useLocation } from 'react-router';

const ButtonChange = styled(Button)`
  :hover {
    /* background-color: #babdbf; */
  }

  span {
    color: #585757;
    /* font-size: 14px; */
    margin-left: 8px;
    font-weight: bold;
  }
`;

const MenuCustom = styled(Menu)`
  .MuiPaper-root {
    width: 100px;
    border-radius: 20px;
  }
  .MuiList-root {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .active {
    background-color: #9f9f9f69;
  }
`;

const SwitchLanguage = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const changeLanguage = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng);
      handleCloseUserMenu();
    },
    [i18n],
  );

  return (
    <>
      <Tooltip title="Open change language">
        {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar>
            {currentLanguage.toUpperCase()}
          </Avatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          <Avatar alt="icon-th" src="/images/icon_language_flag-for-thailand.svg" />TH 
          <Avatar alt="icon-en" src="/images/icon_language_flag-for-united-kingdom.svg" />
        </IconButton> */}
        <Stack spacing={2} direction="row">
          <ButtonChange onClick={handleOpenUserMenu} variant="text">
            {currentLanguage === 'th' ? (
              <Avatar alt="icon-th" src="images/icon_language_flag-for-thailand.svg" />
            ) : (
              <Avatar alt="icon-en" src="images/icon_language_flag-for-united-kingdom.svg" />
            )}
            <span>{currentLanguage.toUpperCase()}</span>
          </ButtonChange>
        </Stack>
      </Tooltip>
      <MenuCustom
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem
          className={`${currentLanguage === 'th' && 'active'}`}
          key="th-language"
          onClick={() => changeLanguage('th')}
        >
          <Typography textAlign="center">TH</Typography>
        </MenuItem>
        <MenuItem
          className={`${currentLanguage === 'en' && 'active'}`}
          key="en-language"
          onClick={() => changeLanguage('en')}
        >
          <Typography textAlign="center">EN</Typography>
        </MenuItem>
      </MenuCustom>
    </>
  );
};

export default SwitchLanguage;
