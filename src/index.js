import React, { Component } from 'react';
import { View } from 'react-native';
import CardStack, { Card as CardWrapper } from 'react-native-card-stack-swiper';

import cardsData from './cards.json';

import Card from './Card';
import ButtonControls from './ButtonControls';

import styles from './styles';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: shuffleArray(cardsData),
            stats: {
                yes: 0,
                no: 0,
                maybe: 0
            }
        };
    }

    renderCards = () => {
        return this.state.cards.map((card, index) => (
            <CardWrapper key={index}>
                <Card {...card} />
            </CardWrapper>
        ));
    };

    handleSwiperRef = swiper => {
        this.swiper = swiper;
    };

    handleSwipeAction = actionType => () => {
        const stats = { ...this.state.stats };
        stats[actionType]++;
        this.setState(() => ({
            stats
        }));
    };

    handleButtonClick = actionType => () => {
        const stats = { ...this.state.stats };

        switch (actionType) {
            case 'maybe': {
                this.swiper.swipeTop();
                break;
            }

            case 'no': {
                this.swiper.swipeLeft();
                break;
            }

            case 'yes': {
                this.swiper.swipeRight();
                break;
            }

            default: {
                return false;
            }
        }

        stats[actionType]++;
        this.setState(() => ({
            stats
        }));
    };

    render() {
        const { stats } = this.state;

        return (
            <View style={styles.containerWrapper}>
                <CardStack
                    style={styles.container}
                    ref={this.handleSwiperRef}
                    onSwipedLeft={this.handleSwipeAction('no')}
                    onSwipedRight={this.handleSwipeAction('yes')}
                    onSwipedTop={this.handleSwipeAction('maybe')}
                    disableBottomSwipe
                    loop
                >
                    {this.renderCards()}
                </CardStack>
                <ButtonControls
                    onClick={this.handleButtonClick}
                    swiper={this.swiper}
                    stats={stats}
                />
            </View>
        );
    }
}

function shuffleArray(array) {
    array = array.slice();
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}
