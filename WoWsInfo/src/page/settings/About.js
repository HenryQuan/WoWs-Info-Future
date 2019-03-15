import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions, Linking } from 'react-native';
import { WoWsInfo, Touchable } from '../../component';
import { TintColour } from '../../value/colour';
import { lang } from '../../value/lang';
import { getRandomAnimation } from '../../core';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: 'pulse'
    };

    setInterval(() => {
      this.setState({animation: getRandomAnimation()});
    }, 2000);
  }

  render() {
    const { touch } = styles;
    const { animation } = this.state;
    const { width, height } = Dimensions.get('window');
    let imageWidth = width > height ? height * 0.5 : width * 0.5;

    return (
      <WoWsInfo>
        <Touchable style={touch} onPress={() => Linking.openURL(lang.abour_github_link)}>
          <Image style={{tintColor: TintColour()[500], height: imageWidth, width: imageWidth }}
            source={require('../../img/Logo.png')} />
        </Touchable>
      </WoWsInfo>
    )
  };
}

const styles = StyleSheet.create({
  touch: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export { About };
