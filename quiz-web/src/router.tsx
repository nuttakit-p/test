import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import env from './configs/env';
import ForumPage from './pages/forum';
import LandingPage from './pages/landing';
import LeaderBoardPage from './pages/LeaderBoard';
import QuizTestPage from './pages/quizTest';

const Router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <ForumPage />,
        },
        {
          path: '/forum',
          element: <ForumPage />,
        },
        {
          path: '/quiz',
          element: <QuizTestPage />,
        },
        {
          path: 'leaderboard',
          element: <LeaderBoardPage />,
        },
        {
          path: 'landing',
          element: <LandingPage />,
        },
      ],
    },
    {
      path: '*',
      element: <Layout />,
      children: [
        {
          path: '*',
          element: <LandingPage ladingType="error_404" />,
        },
      ],
    },
  ],
  {
    basename: `/${env.VITE_URL_BASENAME}/`,
  },
);

export default Router;
