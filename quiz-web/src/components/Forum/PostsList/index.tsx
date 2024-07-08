import { Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useForumContext } from '../../../contexts/ForumContext';
import PostsCard from '../../Common/QuizCard/Card';
import PostsCardLoading from '../../Common/QuizCard/CardLoading';

const StackCustom = styled(Stack)`
  .forum-list-item:nth-child(even) {
    background-color: #eff9ff;
  }

  .forum-list-item:nth-child(odd) {
    background-color: #ffff;
  }
`;

const PostsList = () => {
  const navigate = useNavigate();

  const { forumList } = useForumContext();

  const ItemCardPost = () => {
    return (
      <Box>
        <StackCustom spacing={2}>
          {forumList?.data?.map((item: any, index: number) => {
            return <PostsCard data={item} key={`post-${index}`} />;
          })}
        </StackCustom>
      </Box>
    );
  };

  const ItemPostsCardLoading = () => {
    return (
      <Box>
        <StackCustom spacing={2}>
          <PostsCardLoading />
          <PostsCardLoading />
          <PostsCardLoading />
        </StackCustom>
      </Box>
    );
  };

  if (forumList?.error) {
    navigate('/landing?type=fail'); // Your can make component for handle case error.
  } else if (forumList?.data) {
    return forumList?.data?.length > 0 ? <ItemCardPost /> : <span>No Data</span>; // Your can make component for handle case no data.
  }

  return <ItemPostsCardLoading />;
};

export default PostsList;
