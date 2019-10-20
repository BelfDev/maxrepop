import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Images, Colors, Strings, Data} from '../resources';

const _renderSkillListItem = skill => (
  <View style={styles.skillListItem}>
    <Image style={styles.skillImage} source={skill.icon} />
    <Text style={styles.skillTitle}>{skill.name}</Text>
    <Text style={styles.skillLevel}>{skill.level}</Text>
  </View>
);

const _renderMemberListItem = member => (
  <View style={styles.memberListItem}>
    <Image style={styles.memberAvatar} source={member.avatar} />
    <View style={styles.memberInfo}>
      <View style={styles.memberListItemTop}>
        <Text style={styles.memberName}>{member.name}</Text>
        <Text style={styles.memberRank}>Rank: {member.rank}</Text>
      </View>
      <View style={styles.memberListItemBottom}>
        <Text style={styles.memberListItemSkill}>
          Str: {member.skills.strength}
        </Text>
        <Text style={styles.memberListItemSkill}>
          Int: {member.skills.intelligence}
        </Text>
        <Text style={styles.memberListItemSkill}>
          Agi: {member.skills.agility}
        </Text>
      </View>
    </View>
  </View>
);

const _renderSeparator = () => {
  return <View style={styles.itemSeparator} />;
};

export default class ActionsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.tribeHeader}>
          <Image style={styles.image} source={Images.vikingHelmet} />
          <Text style={styles.tribeText}>{Strings.mainPlayerTribe}</Text>
        </View>

        <View>
          <Text style={styles.sectionCaption}>Skills:</Text>
          <FlatList
            data={Data.mainPlayerSkills}
            renderItem={({item}) => _renderSkillListItem(item)}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={_renderSeparator}
          />
        </View>

        <View style={styles.membersContainer}>
          <Text style={styles.sectionCaption}>Members:</Text>
          <FlatList
            data={Data.demoMembers}
            renderItem={({item}) => _renderMemberListItem(item)}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={_renderSeparator}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  tribeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 40,
  },
  membersContainer: {
    marginTop: 40,
  },
  sectionCaption: {
    fontSize: 32,
    textAlign: 'center',
  },
  memberListItem: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    flexDirection: 'row',
  },
  memberListItemSkill: {
    marginRight: 10,
  },
  memberListItemTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberListItemBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberInfo: {
    marginLeft: 20,
    flex: 1,
  },
  memberRank: {
    marginLeft: 'auto',
  },
  memberName: {
    marginRight: 20,
    fontSize: 20,
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
  memberAvatar: {
    height: 40,
    width: 40,
  },
  skillImage: {
    height: 40,
    width: 40,
  },
  skillLevel: {
    fontSize: 24,
  },
  image: {
    height: 100,
    width: 100,
    borderWidth: 2,
    borderColor: Colors.gray,
    borderRadius: 100,
    backgroundColor: Colors.lightGray,
  },
  nameText: {
    alignSelf: 'center',
    marginTop: 24,
    fontSize: 18,
    fontWeight: 'bold',
  },
  tribeText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
