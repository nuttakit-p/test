import dayjs from 'dayjs';

// Create a function to format and sort the data
const formatData = (postList: any[], authorsList: any[]) => {
  // Create an author lookup object for faster access inside the function
  const authorLookup = authorsList?.reduce((acc, author) => {
    acc[author.id] = author;
    return acc;
  }, {});

  const forumList = postList?.map((post) => {
    const authorInfo = authorLookup[post.author_id];

    if (authorInfo) {
      return {
        ...post,
        authors_info: authorInfo,
        created_at: dayjs(post?.created_at).format('dddd, MMMM D, YYYY, HH:mm'),
      };
    }

    return post;
  });

  // Sort forumList by created_at using Day.js
  forumList?.sort((a, b) => {
    const dateA = dayjs(a.created_at);
    const dateB = dayjs(b.created_at);
    return dateB.isBefore(dateA) ? -1 : dateB.isAfter(dateA) ? 1 : 0;
  });

  return forumList;
};

export default formatData;
