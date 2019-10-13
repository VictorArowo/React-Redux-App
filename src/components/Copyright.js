import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

const Div = styled.div`
  margin-bottom: 50px;
`;

const Copyright = props => {
  return <Div>&copy; {props.data.copyright} - All Right Reserved</Div>;
};

const mapStateToProps = state => state.data;

export default connect(mapStateToProps)(Copyright);
