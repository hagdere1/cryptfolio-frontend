import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    overflowY: "scroll"
  },
  tabs: {
    display: "flex",
    flexShrink: 0,
    justifyContent: "space-around",
    backgroundColor: "#f0f0f0"
  },
  tab: {
    display: "flex",
    flexShrink: 0,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center"
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
        <div style={{display: "flex", flexDirection: "column"}}>
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
