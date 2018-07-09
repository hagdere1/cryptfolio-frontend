import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const styles = {}

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-item footer-one'>© Armeneum, Inc.</div>
        <div className='footer-item footer-two'>Terms</div>
        <div className='footer-item footer-three'>Help</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
