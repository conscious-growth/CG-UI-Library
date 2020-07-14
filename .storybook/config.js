const path = require('path');
import React from 'react';
import Container from './Container'
import { configure, addDecorator } from '@storybook/react';
import '../css/style.css';
import '../css/icons.css';

function loadStories() {
  require('../stories/General/index.js');
  require('../stories/Navigation/index.js');
  require('../stories/Custom Components/index.js');
  require('../stories/Data Entry/index.js');
  require('../stories/Data Display/index.js');
  require('../stories/Feedback/index.js');
  require('../stories/Layout/index.js');
  // require('../stories/Pages/index.js');
  require('../stories/Other/index.js');
  // You can require as many stories as you need.
}
addDecorator((story) => <Container story={story} />)

configure(loadStories, module);
