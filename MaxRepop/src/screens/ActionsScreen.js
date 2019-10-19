import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';

const ACTIONS_DATA = [
  {
    id: '1',
    title: 'Hunt (small)',
    descr:
      'You venture out into the nearby woods, malformed and dead trees looming on all sides; shadows sending chills down your spine. It is eerily silent.',
    cooldown: 0.5,
    risk: 'low',
    selected: false,
  },
  {
    id: '2',
    title: 'Hunt (large)',
    descr:
      'You steel your courage and set off for the overgrown ruins of what was once a great city with nothing but your hunters’ instincts and a pointy stick.',
    cooldown: 1,
    risk: 'high',
    selected: true,
  },
  {
    id: '3',
    title: 'Read',
    descr:
      'You pack up your survival gear, strap on your boots and a gasmask, and with the sun on your back head out into the great unknown.',
    cooldown: 0.5,
    risk: 'low',
    selected: false,
  },
  {
    id: '4',
    title: 'Scavenge (small)',
    descr:
      'You head out to a rusted, half flooded warehouse out by the old docks. The shadow of the foreboding, complex structure looms over your comparably insignificant form.',
    cooldown: 0.5,
    risk: 'low',
    selected: false,
  },
  {
    id: '5',
    title: 'Scavenge (small)',
    descr: 'You head for the nearest rust heap in search of scrap.',
    cooldown: 0.5,
    risk: 'low',
    selected: false,
  },
  {
    id: '6',
    title: 'Explore',
    descr:
      'You pack up your survival gear, strap on your boots and a gasmask, and with the sun on your back head out into the great unknown.',
    cooldown: 1,
    risk: 'low',
    selected: false,
  },
];

function Item({title, descr, cooldown, risk, selected}) {
  return (
    <TouchableOpacity
      style={
        selected !== true
          ? styles.item
          : {...styles.item, ...styles.selectedItem}
      }>
      <View style={styles.listItemWrapper}>
        <View style={styles.listItemTop}>
          <View style={styles.listItemIcon}>
            <View style={styles.icon}></View>
          </View>
          <View style={styles.listItemInfo}>
            <Text style={styles.listItemTitle}>{title}</Text>
          </View>
          <View style={styles.listItemStats}>
            <Text style={styles.listItemCooldown}>
              Cooldown: {cooldown} day
            </Text>
            <Text style={styles.listItemRisk}>Risk: {risk}</Text>
          </View>
        </View>
        <Text style={styles.listItemDescr}>{descr}</Text>
      </View>
    </TouchableOpacity>
  );
}

function renderSeparator() {
  return <View style={styles.separator} />;
}

function renderHeader() {
  return <Text style={styles.listCaption}>Choose your action:</Text>;
}

export default class ActionsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={ACTIONS_DATA}
          renderItem={({item}) => (
            <Item
              title={item.title}
              descr={item.descr}
              cooldown={item.cooldown}
              risk={item.risk}
              selected={item.selected}
            />
          )}
          ItemSeparatorComponent={renderSeparator}
          ListHeaderComponent={renderHeader}
          keyExtractor={item => item.id}
        />
        <View style={styles.screenFooter}>
          <TouchableOpacity style={styles.primaryLargeButton}>
            <Text style={styles.primaryLargeButtonText}>Do it!</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  listCaption: {
    textAlign: 'center',
    fontSize: 32,
  },
  selectedItem: {
    backgroundColor: 'lightblue',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgray',
  },
  primaryLargeButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignSelf: 'flex-start',
    backgroundColor: 'green',
    borderRadius: 3,
  },
  primaryLargeButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 26,
  },
  screenFooter: {
    paddingVertical: 30,
  },
  item: {
    // width: '100%',
    // overflow: 'hidden',
  },
  listItemWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  listItemTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  listItemIcon: {
    // width: 60,
  },
  listItemInfo: {
    flexGrow: 1,
  },
  listItemStats: {
    width: 120,
    alignItems: 'flex-end',
  },
  listItemTitle: {
    fontSize: 18,
    width: '100%',
    paddingHorizontal: 10,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: 'gray',
  },
});
