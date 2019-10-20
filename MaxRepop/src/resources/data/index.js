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
  demoMembers: [
    {
      id: 1,
      name: 'Nathan Schneider',
      avatar: Images.avatar1,
      skills: {
        strength: 10,
        intelligence: 5,
        agility: 3,
      },
      rank: 1,
    },
    {
      id: 2,
      name: 'Anton Samoilov',
      avatar: Images.avatar2,
      skills: {
        strength: 4,
        intelligence: 3,
        agility: 5,
      },
      rank: 1,
    },
    {
      id: 3,
      name: 'Pedro Belfort',
      avatar: Images.avatar3,
      skills: {
        strength: 3,
        intelligence: 10,
        agility: 3,
      },
      rank: 1,
    },
    {
      id: 4,
      name: 'Rhys Stephens',
      avatar: Images.avatar4,
      skills: {
        strength: 5,
        intelligence: 5,
        agility: 10,
      },
      rank: 1,
    },
  ],
};

export default data;
