import { Backdrop, CircularProgress } from '@mui/material';

interface Props {
  loading: boolean;
}

const Loading = ({ loading = false }: Props) => {
  return (
    <Backdrop open={loading}>
      <CircularProgress />
    </Backdrop>
  );
};

export default Loading;
