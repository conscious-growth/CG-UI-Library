import React, { Component, Fragment } from 'react';
import DirectionalIcons from './Direction';
import SuggestedIcons from './Suggested';
import ApplicationIcons from './Application';
import Brands from './Brands';

class IconPage extends Component {
  render() {
    const exampleStyle = {
      display: 'inline-block',
      marginLeft: '20px',
      padding: '10px 20px',
      background: '#eee'
    };

    return (
      <Fragment>
        <h1 className="title">Icon</h1>

        <h2 className="title">How To Use</h2>
        <p className="text">
          Check all available icons and how to use it <a href="https://ant.design/components/icon/" target="_blank">here</a>
        </p>
        {/* 
        <div style={exampleStyle}>
          &lt;<span style={{color: 'red'}}>Icon</span> <span style={{color: 'green'}}>type</span>="<span style={{color: 'blue'}}>link</span>" /&gt;
        </div> */}

        {/* <DirectionalIcons />

        <SuggestedIcons />

        <ApplicationIcons />

        <Brands /> */}
      </Fragment>
    );
  }
}

export default IconPage;