import { Button, CircularProgress } from '@mui/material';
import styled from 'styled-components';

const CircularProgressCustom = styled(CircularProgress)`
  margin-right: 5px;
`;

interface Props {
  children?: JSX.Element;
  loading?: boolean;
  wording?: string;
  style?: any;
  text: string;
  variant?: 'text' | 'outlined' | 'contained';
}

const LoadingButton = ({ variant, text, loading = false }: Props) => {
  return (
    <Button variant={variant} fullWidth>
      {loading && <CircularProgressCustom color="inherit" size={20} style={{ marginRight: '10px' }} />}
      {text}
    </Button>
  );
};

export default LoadingButton;
