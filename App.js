import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/addTodo';
import actions from './actions/';

export const App = ({submitTodo}) => (
  <div>
    <h1>Todo list</h1>
    <AddTodo submitTodo = {submitTodo} />
  </div>
);

export default App;
