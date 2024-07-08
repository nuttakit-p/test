import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Text = styled.span<{ currentLanguage: string }>`
  /* font-size: ${(props) => (props.currentLanguage === 'en' ? '0.8em' : 'unset')};
  font-weight: 600; */
`;

const Footer = () => {
  const { t } = useTranslation(['common']);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <footer>
      <Typography variant="body2" align="center" color="textSecondary">
        <Text currentLanguage={currentLanguage}>{t('footer.name')}</Text>
      </Typography>
    </footer>
  );
};

export default Footer;
