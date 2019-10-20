import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  SafeAreaView,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import {Data, Colors} from '../resources';

export default class DecisionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Data.recruitablePlayers,
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0,
    };
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <View stles={styles.profileContainer}>
          <Image style={styles.avatarImage} source={card.avatar} />
          <Text style={styles.nameText}>{card.name}</Text>
          <Text style={styles.tribeText}>{card.tribe}</Text>
        </View>
        <View style={styles.majorSkillContainer}>
          <Image style={styles.skillImage} source={card.majorSkill.icon} />
          <Text style={styles.skillTitle}>{card.majorSkill.name}</Text>
          <Text style={styles.skillLevel}>{card.majorSkill.level}</Text>
        </View>
      </View>
    );
  };

  onSwiped = type => {
    console.log(`on swiped ${type}`);
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true,
    });
  };

  swipeLeft = () => {
    this.swiper.swipeLeft();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper;
          }}
          onSwiped={() => this.onSwiped('general')}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
          onSwipedTop={() => this.onSwiped('top')}
          onSwipedBottom={() => this.onSwiped('bottom')}
          onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          backgroundColor={Colors.gray}
          overlayLabels={{
            bottom: {
              title: 'BLEAH',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              },
            },
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30,
                },
              },
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30,
                },
              },
            },
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard>
          <Button onPress={() => this.swiper.swipeBack()} title="Swipe Back" />
        </Swiper>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
  },
  card: {
    flex: 0.9,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
  },
  majorSkillContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.lightGray,
    padding: 20,
    alignItems: 'center',
  },
  skillImage: {
    height: 40,
    width: 40,
  },
  skillLevel: {
    fontSize: 24,
  },
  skillTitle: {
    fontSize: 32,
  },
  profileContainer: {
    flex: 1,
  },
  avatarImage: {
    height: 200,
    width: 200,
    borderWidth: 2,
    borderColor: Colors.gray,
    borderRadius: 100,
    backgroundColor: Colors.lightGray,
    alignSelf: 'center',
    marginTop: 64,
  },
  nameText: {
    alignSelf: 'center',
    marginTop: 24,
    fontSize: 18,
    fontWeight: 'bold',
  },
  tribeText: {
    alignSelf: 'center',
    marginTop: 16,
    fontSize: 28,
    fontWeight: 'bold',
    backgroundColor: Colors.lightGray,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
});
