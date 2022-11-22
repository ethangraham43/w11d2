import React from 'react';
import Thermometer from './Thermometer';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ClimateProvider } from '../../context/ClimateContext.js'



ReactDOM.render(
  <Thermometer />
)

export default Thermometer;
