/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Freshchat, FreshchatConfig } from 'react-native-freshchat-sdk';
var freshchatConfig = new FreshchatConfig("4d6880f7-63f6-4ed7-988d-a87a64a2988d", "0624e102-b010-40e7-b7b0-206aa90f23ba");
Freshchat.init(freshchatConfig);


AppRegistry.registerComponent(appName, () => App);
