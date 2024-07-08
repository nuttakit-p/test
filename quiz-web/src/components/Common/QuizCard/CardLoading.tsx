import { Box, Card, CardContent, Divider, Skeleton, Stack, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import Avatar from '../Avatar';
import Image from '../Image';

const PostsCardLoading = () => {
  return (
    <Card className="forum-list-item" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Stack spacing={1} direction="row" alignItems="center" sx={{ width: '100%' }}>
            <Avatar isLoading={true} />
            <Typography noWrap sx={{ color: deepOrange[500] }}>
              <Skeleton animation="wave" sx={{ width: '100px' }} />
            </Typography>
            <Typography noWrap>
              <Skeleton animation="wave" sx={{ width: '200px' }} />
            </Typography>
          </Stack>
          <Divider style={{ color: '#000', margin: '20px 0px' }} />
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Stack>
              <Image isLoading={true} sx={{ width: '263px', height: '200px', borderRadius: 5 }} />
            </Stack>
            <Stack spacing={2} direction="column" sx={{ width: '100%' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Skeleton animation="wave" sx={{ width: '30%' }} />
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <Skeleton animation="wave" sx={{ width: '100%' }} />
                  <Skeleton animation="wave" sx={{ width: '80%' }} />
                  <Skeleton animation="wave" sx={{ width: '90%' }} />
                  <Skeleton animation="wave" sx={{ width: '90%' }} />
                </Typography>
              </CardContent>
            </Stack>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default PostsCardLoading;
