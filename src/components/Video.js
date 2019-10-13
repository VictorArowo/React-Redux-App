import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Iframe = styled.iframe`
  width: 800px;
  height: 800px;
`;
const Video = props => {
  return <Iframe src={props.data.url} className="video" title="video"></Iframe>;
};

const mapStateToProps = state => state.data;

export default connect(mapStateToProps)(Video);
