import React from 'react';
import VisibleTitleList from '../containers/VisibleTitleList';

import 'antd/dist/antd.css';

import Task1 from './layout/Task1';
import Task2 from './layout/Task2';
import Task3 from './layout/Task3';
import Contacts from './layout/Contacts';


const App = () => (
  <div>
    <VisibleTitleList />
    <Task1 />
    <Task2 />
    <Task3 />
    <Contacts />
  </div>
)

export default App
