import React from 'react';
import {View} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
// import styles from '../styles/style'
import GLOBAL from '../global'
import getStyleSheet from '../styles/style'

const styles = getStyleSheet(GLOBAL.darkState);

export default class UnitMessagingComponent extends React.Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello World',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <View style={styles.containerView}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </View>
    )
  }
}