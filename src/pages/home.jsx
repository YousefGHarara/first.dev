import React from 'react';
import Nav from '../components/nav';
import ContentBody from '../components/contentBody';

const Home = () => {
  return (
    <div>
      <Nav />
      <header className='home-page'>
        <ContentBody pageName={"HOME </>"} />
      </header>
    </div>
  );
}

export default Home;
