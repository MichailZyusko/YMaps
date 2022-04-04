import React from 'react';
import Animal from 'react-animals';
import { TFeedback } from '../../types';

type TProps = {
    feedback: TFeedback;
}

const animals = ['alligator', 'anteater', 'armadillo', 'aurochs', 'axolotl',
    'badger', 'bat', 'beaver', 'buffalo', 'camel', 'capybara', 'chameleon',
    'cheetah', 'chinchilla', 'chipmunk', 'chupacabra', 'cormorant', 'wombat',
    'coyote', 'crow', 'dingo', 'dinosaur', 'duck', 'elephant', 'ferret', 'wolverine',
    'fox', 'frog', 'giraffe', 'gopher', 'grizzly', 'hedgehog', 'hippo', 'hyena',
    'ibex', 'iguana', 'jackal', 'jackalope', 'kangaroo', 'koala', 'kraken', 'leopard',
    'lemur', 'liger', 'loris', 'manatee', 'mink', 'monkey', 'moose', 'narwhal', 'orangutan',
    'otter', 'panda', 'penguin', 'platypus', 'pumpkin', 'python', 'quagga', 'rabbit', 'raccoon',
    'rhino', 'sheep', 'shrew', 'skunk', 'squirrel', 'tiger', 'turtle', 'walrus', 'wolf',
];
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#ffffff'];

export default function Feedback({ feedback }: TProps) {
  return (
    <>
      <div>{feedback.description}</div>
      <div>{feedback.rating}</div>
      <Animal
          name={animals[Math.floor(Math.random() * animals.length)]}
          size="100px"
          color={colors[Math.floor(Math.random() * colors.length)]}
      />
    </>
  );
}
