import { CardMedia, Grid, Stack } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

const WrapperStack = styled(Stack)`
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  width: 100%;
  height: 50px;
  animation: skeleton-animation 1.5s ease-in-out infinite;

  @keyframes skeleton-animation {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  }
`;

interface Props {
  sx?: any;
  src?: string | '';
  alt?: string;
  isLoading?: boolean;
}

const Image = ({ sx, src = '', alt, isLoading }: Props) => {
  const [imgNotFound, setImgNotFound] = useState(false);
  if (imgNotFound) {
    return (
      <WrapperStack sx={sx}>
        <Grid>
          <Grid>
            <ImageSearchIcon />
          </Grid>
          <Grid>
            <span>Image not found</span>
          </Grid>
        </Grid>
      </WrapperStack>
    );
  }
  return (
    <WrapperStack sx={sx}>
      {!isLoading && <CardMedia component="img" sx={sx} image={src} alt={alt} onError={() => setImgNotFound(true)} />}
    </WrapperStack>
  );
};

export default Image;
