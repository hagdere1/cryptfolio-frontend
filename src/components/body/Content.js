import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Holdings from '../portfolio/Holdings';

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
    justifyContent: "center",
    width: "50%",
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
          <div className="tab" style={Object.assign({}, styles.tab, {backgroundColor: "#fff", borderRight: "1px solid #bbb"})}>Holdings</div>
          <div className="tab" style={Object.assign({}, styles.tab, {color: "#808080"})}>Performance</div>
        </div>

        <Holdings />
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
