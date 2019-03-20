/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/routers/app';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
