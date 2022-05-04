import Icons from '../assets/icon';

const mapFoodToIcon: Record<string, string> = {
  '🌯': Icons.Sawarma,
  '🍔': Icons.Burger,
  '🌭': Icons.HotDog,
  '🍟': Icons.Fries,
  '🍕': Icons.Pizza,
  '🍗': Icons.Chicken,
  '🍝': Icons.Spaghetti,
  '🍣': Icons.Sushi,
  '☕️': Icons.Coffee,
  '🍦': Icons.IceCream,
};

export const animals = ['alligator', 'anteater', 'armadillo', 'axolotl',
  'bat', 'beaver', 'buffalo', 'camel', 'capybara', 'chameleon',
  'cheetah', 'chinchilla', 'chipmunk', 'chupacabra', 'cormorant', 'wombat',
  'coyote', 'crow', 'dingo', 'dinosaur', 'duck', 'ferret', 'wolverine',
  'fox', 'frog', 'giraffe', 'gopher', 'grizzly', 'hedgehog', 'hippo', 'hyena',
  'ibex', 'iguana', 'jackal', 'kangaroo', 'koala', 'kraken', 'leopard',
  'lemur', 'liger', 'manatee', 'mink', 'monkey', 'moose', 'narwhal', 'orangutan',
  'otter', 'panda', 'penguin', 'platypus', 'pumpkin', 'python', 'quagga', 'rabbit', 'raccoon',
  'rhino', 'sheep', 'shrew', 'skunk', 'squirrel', 'tiger', 'turtle', 'walrus', 'wolf',
];

export const url = 'https://5o3kijxvl4.execute-api.us-east-2.amazonaws.com/dev/api/v1/points';

export const defaultOptions = (icon: string) => ({
  iconLayout: 'default#image',
  iconImageHref: mapFoodToIcon[icon],
  iconImageSize: [24, 24],
  iconImageOffset: [-12, -12],
});

export const foodList = [
  {
    id: 1,
    value: '🌯',
  },
  {
    id: 2,
    value: '🍔',
  },
  {
    id: 3,
    value: '🌭',
  },
  {
    id: 4,
    value: '🍟',
  },
  {
    id: 5,
    value: '🍕',
  },
  {
    id: 6,
    value: '🍗',
  },
  {
    id: 7,
    value: '🍝',
  },
  {
    id: 8,
    value: '🍣',
  },
  {
    id: 9,
    value: '☕️',
  },
  {
    id: 10,
    value: '🍦',
  },
];
