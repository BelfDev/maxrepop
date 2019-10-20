import {Images} from '..';

const data = {
  mainPlayerSkills: [
    {
      id: 1,
      name: 'Strength',
      icon: Images.circle,
      level: 10,
    },
    {
      id: 2,
      name: 'Intelligence',
      icon: Images.circle,
      level: 29,
    },
    {
      id: 3,
      name: 'Agility',
      icon: Images.circle,
      level: 12,
    },
  ],
  recruitablePlayers: [
    {
      name: 'Rhys',
      avatar: Images.spartan,
      tribe: 'QMU',
      majorSkill: {
        id: 2,
        name: 'Intelligence',
        icon: Images.circle,
        level: 34,
      },
    },
    {
      name: 'Anton',
      avatar: Images.spartan,
      tribe: 'GMU',
      majorSkill: {
        id: 2,
        name: 'Intelligence',
        icon: Images.circle,
        level: 22,
      },
    },
    {
      name: 'Pedro',
      avatar: Images.spartan,
      tribe: 'CIA',
      majorSkill: {
        id: 2,
        name: 'Intelligence',
        icon: Images.circle,
        level: 12,
      },
    },
  ],
};

export default data;
