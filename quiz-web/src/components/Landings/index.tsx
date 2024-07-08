import styled from 'styled-components';
import Wrapper from '../Common/Wrapper';
import WrapperCard from '../Common/WrapperCard';
import { Box, Grid } from '@mui/material';
import landingDetail from './types';
import ReactHtmlParser from 'html-react-parser';

const BoxCustom = styled(Box)`
  /* align-items: center */
  max-width: 420px;
  .title {
    text-align: center;
  }
  .logo_section {
    padding: 50px 0px;
  }
`;

const IconCustom = styled(Box)`
  svg {
    font-size: 80px;
  }
`;

interface Props {
  type: string | null;
}

const Landings = ({ type }: Props) => {
  const detail = landingDetail(type);
  return (
    <Wrapper>
      <WrapperCard>
        <BoxCustom>
          <Grid container textAlign={'center'}>
            <Grid item xs={12}>
              <IconCustom>{detail?.icon}</IconCustom>
            </Grid>
            <Grid item xs={12}>
              <h1 style={{ margin: '0px' }}>{detail?.code}</h1>
            </Grid>
            <Grid item xs={12}>
              <h2>{ReactHtmlParser(detail?.title)}</h2>
            </Grid>
            <Grid item xs={12} mb={4}>
              <span>{detail?.description && ReactHtmlParser(detail?.description)}</span>
            </Grid>
          </Grid>
        </BoxCustom>
      </WrapperCard>
    </Wrapper>
  );
};

export default Landings;
