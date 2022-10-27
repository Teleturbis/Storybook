import Button from './HgButton';

export default {
  title: 'Input/Button',
  component: Button,
  argTypes: {
    func: { action: 'handleClick' },
  },
};

const Template = (args) => <Button {...args} />;

export const Normal = Template.bind({});
export const Disabled = Template.bind({});
export const Icon = Template.bind({});
export const Outlined = Template.bind({});
export const Small = Template.bind({});
export const Link = Template.bind({});

Normal.args = {
  label: 'Button',
  func: () => {
    console.log('Button clicked');
  },
  size: 'big',
  state: '',
  icon: '',
  width: '20%',
  disabled: false,
};

Link.args = {
  label: 'Button',
  func: () => {
    console.log('Button clicked');
  },
  size: 'big',
  state: 'link',
  icon: '',
  width: '20%',
  disabled: false,
};

Disabled.args = {
  label: 'Button',
  func: () => {
    console.log('Button clicked');
  },
  state: 'disabled',
  size: 'big',
  icon: '',
  width: '100%',
};

Icon.args = {
  label: 'Button',
  func: () => {
    console.log('Button clicked');
  },
  icon: 'delete',
  size: 'big',
  state: '',
  width: '10rem',
};

Outlined.args = {
  label: 'Button',
  func: () => {
    console.log('Button clicked');
  },
  state: 'outlined',
  size: 'big',
  icon: '',
  width: '25%',
};

Small.args = {
  label: 'Button',
  func: () => {
    console.log('Button clicked');
  },
  size: 'small',
  state: '',
  icon: '',
  width: '60%',
};
