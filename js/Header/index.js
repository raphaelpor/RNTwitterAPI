import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
} from 'react-native';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };

    this.handlePress = this.handlePress.bind(this);
    this.handleClean = this.handleClean.bind(this);
  }

  handlePress() {
    if (this.state.text) {
      console.log(this.state.text);
    }
  }

  handleClean() {
    if (this.state.text) {
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          onPress={this.handleClean}
          title="X"
          color="red"
          accessibilityLabel="Clean search"
        />
        <Button
          onPress={this.handlePress}
          title="Search"
          color="blue"
          accessibilityLabel="Search"
        />
      </View>
    );
  }
}

export default Header;
