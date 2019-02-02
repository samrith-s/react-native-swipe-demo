import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

import styles from './styles';
import img_apple from './images/apple.png';
import img_blueberries from './images/blueberries.png';
import img_coconut from './images/coconut.png';
import img_grapes from './images/grapes.png';
import img_lime from './images/lime.png';
import img_orange from './images/orange.png';

const images = {
    apple: img_apple,
    blueberries: img_blueberries,
    coconut: img_coconut,
    grapes: img_grapes,
    lime: img_lime,
    orange: img_orange
};

export default class Card extends Component {
    render() {
        const { text = '', color } = this.props;

        return (
            <View
                style={[
                    styles.card,
                    {
                        backgroundColor: color
                    }
                ]}
            >
                <Text style={{ color: '#fff', fontSize: 30 }}>{text}</Text>
                <Image
                    PlaceholderContent={<ActivityIndicator />}
                    style={{
                        width: 50,
                        height: 50,
                        marginTop: 10,
                        borderRadius: '50%'
                    }}
                    source={images[text.toLowerCase()]}
                />
            </View>
        );
    }
}
