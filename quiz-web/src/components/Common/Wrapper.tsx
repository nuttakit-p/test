import { Box } from '@mui/material';
import styled from 'styled-components';

const BoxCustom = styled(Box)`
  display: flex;
  justify-content: center;
`;

interface Props {
  children?: JSX.Element;
}

const Wrapper = ({ children }: Props) => {
  return <BoxCustom>{children}</BoxCustom>;
};

export default Wrapper;
