import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import './rn-addons';  addDecorator(withKnobs);

configure(() => {

  require('./stories');
  //require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,

});

export default StorybookUIRoot;
