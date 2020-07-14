import React from 'react';
import { storiesOf } from '@storybook/react';

import Composed from './AppLayout';
import Sider from './Sider';
import AppHeader from './Header';

storiesOf('Layout', module)
    .add('Composed', () => <Composed />)
    .add('Sider', () => <Sider />)
    .add('Header', () => <AppHeader />)