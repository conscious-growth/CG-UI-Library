import React from 'react';
import { storiesOf } from '@storybook/react';

import Transactions from './Transactions'

storiesOf('Pages', module)
    .add('Transactions', () => <Transactions />)