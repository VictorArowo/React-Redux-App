import React from 'react';
import {connect} from 'react-redux';

const Title = props => {
  return <h1>{props.data.title}</h1>;
};

const mapStateToProps = state => state.data;

export default connect(mapStateToProps)(Title);
