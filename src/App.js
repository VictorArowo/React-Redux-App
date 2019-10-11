import React, { useEffect } from 'react';
import Title from './components/Title';
import Media from './components/Media';
import Explanation from './components/Explanation';
import Copyright from './components/Copyright.js';
import axios from 'axios';
import Date from './components/Date';
import Logo from './components/Logo';
import Video from './components/Video';
import styled from 'styled-components';

import { Provider, connect } from 'react-redux';
import store from './redux/store';
import { getData } from './redux/actions/actions';

const Div = styled.div`
  text-align: center;
  font-family: 'Fjalla One', sans-serif;
  font-size: 20px;
  color: white;
  background: linear-gradient(to right, #141e30, #243b55);
  overflow: auto;

  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 50px 10px;
  }

  main {
    display: flex;
    margin: 30px 30px;
    margin-top: 50px;
  }

  .left {
    flex-basis: 40%;
    margin: auto auto;

    &p {
      line-height: 30px;
      text-align: left;
    }
  }

  .right {
    margin: auto auto;
  }
`;

function App({ data, getData }) {
  useEffect(() => {
    getData();
  }, []);

  return (
    <Provider store={store}>
      <Div>
        <div className="header">
          <Logo />
          <h1>PHOTO OF THE DAY</h1>
          <Date />
        </div>
        <main>
          <div className="left">
            <Title />
            <Explanation />
          </div>
          <div className="right">
            {data.media_type === 'image' ? (
              <Media url={data.url} />
            ) : (
              <Video url={data.url} />
            )}
          </div>
        </main>
        <Copyright />
      </Div>
    </Provider>
  );
}

const mapStateToProps = state => state.data;

export default connect(
  mapStateToProps,
  { getData }
)(App);
