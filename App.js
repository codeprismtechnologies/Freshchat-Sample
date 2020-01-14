/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';
import {
  FreshchatUser,
  Freshchat,
  ConversationOptions,
} from 'react-native-freshchat-sdk';

class App extends React.Component {
  openDietCoach = () => {
    var freshchatUser = new FreshchatUser();
    freshchatUser.firstName = 'Godwin';
    freshchatUser.lastName = 'Vinny Carole';
    freshchatUser.email = 'godwin.vc@codeprism.in';
    Freshchat.setUser(freshchatUser, error => {
      console.log(error);
    });
    var conversationOptions = new ConversationOptions();
    conversationOptions.tags = ['diet_coach'];
    conversationOptions.filteredViewTitle = 'GoFit Diet';
    Freshchat.showConversations(conversationOptions);
  };
  openFitnessCoach = () => {
    var freshchatUser = new FreshchatUser();
    freshchatUser.firstName = 'Godwin';
    freshchatUser.lastName = 'Vinny Carole';
    freshchatUser.email = 'godwin.vc@codeprism.in';
    Freshchat.setUser(freshchatUser, error => {
      console.log(error);
    });
    var conversationOptions = new ConversationOptions();
    conversationOptions.tags = ['fitness_coach'];
    conversationOptions.filteredViewTitle = 'GoFit Fitness Coach';
    Freshchat.showConversations(conversationOptions);
  };
  openCustomerCare = () => {
    var freshchatUser = new FreshchatUser();
    freshchatUser.firstName = 'Godwin';
    freshchatUser.lastName = 'Vinny Carole';
    freshchatUser.email = 'godwin.vc@codeprism.in';
    Freshchat.setUser(freshchatUser, error => {
      console.log(error);
    });
    var conversationOptions = new ConversationOptions();
    conversationOptions.tags = ['customer_care'];
    conversationOptions.filteredViewTitle = 'GoFit Customer Service';
    Freshchat.showConversations(conversationOptions);
  };
  openInbox = () => {
    var freshchatUser = new FreshchatUser();
    freshchatUser.firstName = 'Godwin';
    freshchatUser.lastName = 'Vinny Carole';
    freshchatUser.email = 'godwin.vc@codeprism.in';
    Freshchat.setUser(freshchatUser, error => {
      console.log(error);
    });
    var conversationOptions = new ConversationOptions();
    conversationOptions.tags = ['Inbox'];
    conversationOptions.filteredViewTitle = 'GoFit Customer Service';
    Freshchat.showConversations(conversationOptions);
  };

  openAllChannels = () => {
    var freshchatUser = new FreshchatUser();
    freshchatUser.firstName = 'Godwin';
    freshchatUser.lastName = 'Vinny Carole';
    freshchatUser.email = 'godwin.vc@codeprism.in';
    Freshchat.setUser(freshchatUser, error => {
      console.log(error);
    });
    Freshchat.showConversations();
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#EDEDED', padding: 50}}>
        <Text>Sample App</Text>

        <Button onPress={this.openAllChannels} title="Open all Channels" />
        <View style={{width: '100%', height: 30}} />
        <Button
          onPress={this.openCustomerCare}
          title="Open Customer Care Channel"
        />
        <View style={{width: '100%', height: 30}} />
        <Button onPress={this.openDietCoach} title="Open Diet Coach Channel" />
        <View style={{width: '100%', height: 30}} />
        <Button
          onPress={this.openFitnessCoach}
          title="Open Fitness Coach Channel"
        />
        <View style={{width: '100%', height: 30}} />
      </View>
    );
  }
}

export default App;
