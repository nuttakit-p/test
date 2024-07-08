import { Card } from '@mui/material';
import styled from 'styled-components';

const CardCustom = styled(Card)`
  padding: 20px;
`;

type Props = {
  children?: JSX.Element;
};

const WrapperCard = ({ children }: Props) => {
  return <CardCustom>{children}</CardCustom>;
};

export default WrapperCard;
