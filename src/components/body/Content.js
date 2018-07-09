import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column"
  },
  tabs: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#f0f0f0"
  },
  tab: {
    padding: "15px 0px"
  }
}

class Content extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.tabs}>
          <div className="tab" style={styles.tab}>TAB</div>
          <div className="tab" style={styles.tab}>TAB</div>
          <div className="tab" style={styles.tab}>TAB</div>
        </div>
        <div>
          <div className="placeholder">Placeholder</div>
          <div className="placeholder">Placeholder</div>
          <div className="placeholder">Placeholder</div>
          <div className="placeholder">Placeholder</div>
          <div className="placeholder">Placeholder</div>
          <div className="placeholder">Placeholder</div>
          <div className="placeholder">Placeholder</div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Content)
