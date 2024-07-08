import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
// import { useTranslation } from "react-i18next";
import LoadingPage from '../Common/LoadingPage';
import Footer from './Footer';
import Container from './Container';
// import { useAccountContext } from "../../contexts/AccountContext";
// import session from "../../utils/helpers/session";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background: url(images/2x_desktop_bg.cc25003ddde3b61117b8479ca3479538.png) no-repeat 50% fixed; */
  background-size: cover;
  /* background-color: #284a6e; */
`;

const Layout = () => {
  const [loading, setLoading] = useState(true);
  // const { code, checkLinkEmail } = useAccountContext();
  // const dataCode = session.checkLink()
  // dataCode && checkLinkEmail(dataCode.code)

  useEffect(() => {
    handleLoad();
  }, []);

  const handleLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Wrapper>
      <Header />
      <Container />
      <Footer />
    </Wrapper>
  );
};

export default Layout;
