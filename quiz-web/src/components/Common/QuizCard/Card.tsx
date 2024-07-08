import { Box, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import Avatar from '../Avatar';
import Image from '../Image';

interface Props {
  data: any;
}

const PostsCard = ({ data }: Props) => {
  return (
    <Card className="forum-list-item" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Stack spacing={1} direction="row" alignItems="center">
            <Avatar
              alt={data?.authors_info?.name}
              src={data?.authors_info?.avatar_url}
              name={data?.authors_info?.name}
            />
            <Typography noWrap sx={{ color: deepOrange[500] }}>
              {data?.authors_info?.name}
            </Typography>
            <Typography noWrap>posted on {data?.created_at}</Typography>
          </Stack>
          <Divider style={{ color: '#000', margin: '20px 0px' }} />
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Stack>
              <Image
                sx={{ width: '263px', height: '200px', borderRadius: 5 }}
                src={data?.image_url}
                alt={data?.title}
              />
            </Stack>
            <Stack spacing={2} direction="column">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data?.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {data?.body}
                </Typography>
              </CardContent>
            </Stack>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default PostsCard;
