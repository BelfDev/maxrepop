import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Images, Colors, Strings, Data} from '../resources';

const _renderSkillListItem = skill => (
  <View style={styles.skillListItem}>
    <Image style={styles.skillImage} source={skill.icon} />
    <Text style={styles.skillTitle}>{skill.name}</Text>
    <Text style={styles.skillLevel}>{skill.level}</Text>
  </View>
);

const _renderSeparator = () => {
  return <View style={styles.itemSeparator} />;
};

export default class ProfileScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View stles={styles.overviewContainer}>
          <Image style={styles.image} source={Images.spartan} />
          <Text style={styles.nameText}>{Strings.mainPlayerName}</Text>
          <Text style={styles.tribeText}>{Strings.mainPlayerTribe}</Text>
        </View>
        <View style={styles.skillsContainer}>
          <FlatList
            data={Data.mainPlayerSkills}
            renderItem={({item}) => _renderSkillListItem(item)}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={_renderSeparator}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overviewContainer: {
    flex: 1,
  },
  skillsContainer: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    marginTop: 32,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 16,
  },
  image: {
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
  skillListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.lightGray,
    padding: 20,
    alignItems: 'center',
  },
  skillTitle: {
    fontSize: 32,
  },
  itemSeparator: {
    height: 1,
    width: '86%',
    marginLeft: '14%',
    backgroundColor: Colors.separatorGray,
  },
  skillImage: {
    height: 40,
    width: 40,
  },
  skillLevel: {
    fontSize: 24,
  },
});
