import React from 'react';

const Grid = (props) => {
  return (
    <div style={Object.assign(
      {},
      {
        display: "flex",
        flexDirection: props.flexDirection ? props.flexDirection : "row",
        justifyContent: props.justifyContent ? props.justifyContent : "flex-start",
        alignItems: props.alignItems ? props.alignItems : "stretch"
      },
      props.style
    )}>
      {props.children}
    </div>
  );
}

export default Grid;
