const path = require('path');
import { configure } from '@storybook/react';
import '../css/style.css';
import '../css/icons.css';

function loadStories() {
  require('../stories/General/index.js');
  require('../stories/Navigation/index.js');
  require('../stories/Data Entry/index.js');
  require('../stories/Data Display/index.js');
  require('../stories/Feedback/index.js');
  require('../stories/Layout/index.js');
  require('../stories/Other/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);