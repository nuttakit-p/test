import { Avatar as MuiAvatar, Skeleton } from '@mui/material';
import { deepOrange, deepPurple, blue, green, pink } from '@mui/material/colors';

interface Props {
  sx?: any;
  alt?: string;
  src?: string;
  name?: string;
  isLoading?: boolean;
}

const Avatar = ({ sx, alt, src, name, isLoading }: Props) => {
  const getRandomColor = () => {
    const colors = [deepOrange[500], deepPurple[500], blue[500], green[500], pink[500]];
    const randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];
  };

  const getInitials = (name: string) => {
    const words = name.split(' ');
    let initials = '';

    for (const word of words) {
      if (word.length > 0) {
        initials += word[0];
      }
    }

    return initials;
  };

  return isLoading ? (
    <Skeleton animation="wave" variant="circular" sx={{ width: 40, height: 40, ...sx }} />
  ) : (
    <MuiAvatar sx={{ bgcolor: getRandomColor(), ...sx }} alt={alt} src={src}>
      {name && getInitials(name)}
    </MuiAvatar>
  );
};

export default Avatar;
