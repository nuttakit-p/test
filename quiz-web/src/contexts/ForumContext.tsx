import { createContext, useContext, useEffect, useState } from 'react';
import authorsService from '../services/authors';
import postService from '../services/post';
import formatData from '../utils/helpers/formatForumData';

interface Post {
  total?: number | null;
  data?:
    | [
        {
          id: number | null;
          author_id: number | null;
          title: string | null;
          body: string | null;
          image_url: string | null;
          created_at: string | null;
        },
      ]
    | []
    | null;
  error?: any | null;
}

interface AuthorData {
  total?: number | null;
  data?:
    | [
        {
          id: number | null;
          name: string | null;
          role: string | null;
          place: string | null;
          avatar_url: string | null;
        },
      ]
    | []
    | null;
  error?: any | null;
}

interface ForumData {
  total?: number | null;
  data?:
    | [
        {
          id: number | null;
          author_id: number | null;
          title: string | null;
          body: string | null;
          image_url: string | null;
          created_at: string | null;
          author_info: {
            id: number | null;
            name: string | null;
            role: string | null;
            place: string | null;
            avatar_url: string | null;
          };
        },
      ]
    | [];
  error?: any | null;
}
[];

// type isLoading = boolean

interface ForumContextValueType {
  postLis: Post;
  authorsList: AuthorData;
  // isLoading: isLoading
}

const ForumContext = createContext<any | null>(null);

export const useForumContext = () => {
  return useContext(ForumContext);
};

interface Props {
  children: JSX.Element;
}

const ForumProvider = ({ children }: Props) => {
  const [postList, setPostList] = useState<Post | null>(null);
  const [authorsList, setAuthorsList] = useState<AuthorData | null>(null);
  const [forumList, setForumList] = useState<ForumData | any[] | null>(null);
  // const [isLoading, setIsLoading] = useState<boolean>(false)

  const getDataPosts = async () => {
    try {
      const responsePosts = await postService.getPosts();
      const postData = {
        total: responsePosts?.data?.length,
        data: responsePosts?.data,
      };
      setPostList(postData);
      return postData;
    } catch (error: any) {
      console.error('get posts error', error);
      setPostList({ error });
      return error;
    }
  };

  const getDataAuthorsList = async () => {
    try {
      const responseAuthors = await authorsService.getAuthors();
      const authorsData = {
        total: responseAuthors?.data?.length,
        data: responseAuthors?.data,
      };
      setAuthorsList(authorsData);
      return authorsData;
    } catch (error: any) {
      console.error('get authors error', error);
      setAuthorsList({ error });
      return error;
    }
  };

  // Use async await fetch data from both functions simultaneously
  // const getForum = async () => {
  //   try {
  //     setIsLoading(true)
  //     const posts = await getDataPosts()
  //     const authors = await getDataAuthorsList()
  //     if (posts?.total > 0 && authors?.total > 0) {
  //       const forum: any = formatData(posts?.data, authors?.data)
  //       setForumList({
  //         total: forum?.length,
  //         data: forum,
  //       })
  //     } else {
  //       setForumList({
  //         total: 0,
  //         data: [],
  //       })
  //     }
  //     setIsLoading(false)
  //   } catch (error) {
  //     setIsLoading(false)
  //     setForumList({ error })
  //     console.error('get forum error', error)
  //   }
  // }

  // Use Promise.all to fetch data from both functions simultaneously
  const getForum = async () => {
    try {
      // setIsLoading(true);

      const [posts, authors] = await Promise.all([getDataPosts(), getDataAuthorsList()]);

      if (posts?.total > 0 && authors?.total > 0) {
        const forum: any = formatData(posts?.data, authors?.data);
        setForumList({
          total: forum?.length,
          data: forum,
        });
      } else {
        setForumList({
          total: 0,
          data: [],
        });
      }
      // setIsLoading(false);
    } catch (error) {
      // setIsLoading(false);
      setForumList({ error });
      console.error('get forum error', error);
    }
  };

  useEffect(() => {
    getForum();
  }, []);

  const ForumContextValue: ForumContextValueType | any = {
    postList,
    authorsList,
    forumList,
    // isLoading,
  };

  return <ForumContext.Provider value={ForumContextValue}>{children}</ForumContext.Provider>;
};

export default ForumProvider;
