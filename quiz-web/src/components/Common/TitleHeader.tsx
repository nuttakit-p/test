import { Stack } from '@mui/material';

interface Props {
  title: JSX.Element | string;
  description?: JSX.Element | string;
}

const TitleHeader = ({ title, description }: Props) => {
  return (
    <Stack>
      <h2>{title}</h2>
      <span>{description}</span>
    </Stack>
  );
};

export default TitleHeader;
