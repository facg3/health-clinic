import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Slider from './slider/Slider';
import { connect } from 'react-redux';
import * as dataDoctorAction from '../../actions/dataDoctor';
import PropTypes from 'prop-types';

class Home extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }
  render() {
    return (
      <div>
        <Navbar />
        <Slider />
      </div>
    );
  }
}

Home.propTypes = {
  fetchData: PropTypes.func
};
const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, dataDoctorAction)(Home);
