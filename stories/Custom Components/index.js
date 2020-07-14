import React from 'react';
import { storiesOf } from '@storybook/react';

import CreditCard from './CreditCard'

storiesOf('Custom Components', module)
    .add('Credit Card', () => <CreditCard />)