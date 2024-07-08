import { Button, CircularProgress } from '@mui/material';
import styled from 'styled-components';

const ButtonCustom = styled(Button)`
  width: 100%;
  margin-top: 10px !important;
`;
interface Props {
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  text?: string;
  style?: any;
  variant?: any;
}

const ButtonLoading = ({ onClick, text, style, disabled = false, isLoading = false, variant = 'contained' }: Props) => {
  return (
    <ButtonCustom style={{ ...style }} variant={variant} onClick={onClick} disabled={disabled}>
      {isLoading ? <CircularProgress color="inherit" size={28} style={{ marginRight: '10px' }} /> : text}
    </ButtonCustom>
  );
};

export default ButtonLoading;
