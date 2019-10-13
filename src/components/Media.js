import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Image = styled.img`
  width: 800px;
  height: 800px;
  border-radius: 50%;
`;

const Media = props => {
  return <Image src={props.data.url} className="media" alt="potd" />;
};

const mapStateToProps = state => state.data;

export default connect(mapStateToProps)(Media);
