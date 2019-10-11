import React from 'react';
import { connect } from 'react-redux';

const Explanation = props => {
  return <p>{props.data.explanation}</p>;
};

const mapStateToProps = state => state.data;

export default connect(mapStateToProps)(Explanation);
