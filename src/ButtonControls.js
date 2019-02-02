import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { buttonControls } from './styles';

export default class ButtonControls extends Component {
    render() {
        const { onClick, stats } = this.props;

        return (
            <View style={buttonControls.container}>
                <Button
                    icon={<Icon name="thumbs-o-down" size={15} color="white" />}
                    onPress={onClick('no')}
                    title={`${stats.no}`}
                    buttonStyle={{
                        ...buttonControls.button,
                        ...buttonControls.buttonNo,
                        marginRight: 10
                    }}
                    titleStyle={buttonControls.stats}
                />
                <Button
                    icon={<Icon name="hand-stop-o" size={15} color="white" />}
                    onPress={onClick('maybe')}
                    title={`${stats.maybe}`}
                    buttonStyle={{
                        ...buttonControls.button,
                        ...buttonControls.buttonMaybe,
                        marginRight: 10
                    }}
                    titleStyle={buttonControls.stats}
                />
                <Button
                    icon={<Icon name="thumbs-o-up" size={15} color="white" />}
                    onPress={onClick('yes')}
                    title={`${stats.yes}`}
                    buttonStyle={{
                        ...buttonControls.button,
                        ...buttonControls.buttonYes
                    }}
                    titleStyle={buttonControls.stats}
                />
            </View>
        );
    }
}
