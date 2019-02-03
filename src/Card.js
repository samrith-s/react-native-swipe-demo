import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

import styles from './styles';
import images from './images';

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
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 75,
                        height: 75,
                        marginBottom: 20,
                        padding: 10,
                        backgroundColor: '#fff',
                        borderRadius: '50%'
                    }}
                >
                    <Image
                        PlaceholderContent={<ActivityIndicator />}
                        placeholderStyle={{
                            backgroundColor: 'transparent'
                        }}
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: 'transparent'
                        }}
                        source={images[text.toLowerCase()]}
                    />
                </View>
                <Text
                    style={{
                        color: 'rgba(255,255,255,0.25)',
                        fontSize: 30
                    }}
                >
                    {text}
                </Text>
            </View>
        );
    }
}
