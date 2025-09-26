/**
 * @format
 */

import { AppRegistry } from 'react-native';
// Main App
// import App from './App';

// Discuss in Week 4 Day 1
// import Container from './screens/week4/day1/Container';


// Discuss in Week 4 Day 2
import Counter from './screens/week4/day2/Counter';


import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Counter);
