/**
 * @format
 */

import { AppRegistry } from 'react-native';
// Main App
// import App from './App';

// Discuss in Week 4 Day 1
// import Container from './screens/week4/day1/Container';


// Discuss in Week 4 Day 2
// import Counter from './screens/week4/day2/Counter';

// Discuss in Week 5
// Task Caffee Billing Task [ Focus on useState]
// import CaffeBillingApp from './screens/week5/CaffeBillingApp';
// Task Shopping Bill Calculator [ Focus on useState]
// import ShoppingBillCalculator from './screens/week5/ShoppingBillCalculator';
// Age Calculator [ Focus on useState]
// import AgeCalculator from './screens/week5/AgeCalculator';

import StudentPortal from './screens/week5/StudentPortal';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => StudentPortal);
