import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';
import MainPage from '../pages/main-page';
import AboutPage from '../pages/about-page';
import Page404 from '../pages/page-404';

const App = () => {

  return (
    <Main>
        <Header />
        <Wrapper>

          <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/about" component={AboutPage} exact />
            <Route component={Page404} />
          </Switch>

        </Wrapper>
        <Footer />
    </Main>
  );
};

const Main = styled.main`
    max-width: 1200px;
    min-width: 500px;
    margin: auto;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    //background: #61DAFB;
`;

const Wrapper = styled.section`
    flex: 1;
    padding: 0 43px;
`;

export default App;