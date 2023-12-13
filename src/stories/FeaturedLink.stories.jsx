// TODO:
// Figure out how to load uncompiled components.
// We load one here and we get the benefit of autodocs via the prop types; however any component that imports a stylesheet, 
// will break because @layer components is not available in a stylesheet without @import "tailwind/components".
// Most likely we need to change the setup so CSS is compiled separately or just see if we can make do without @layer x.
import FeaturedLink from '../core/FeaturedLink/component.jsx';
import loadIcons from './icons.js';

loadIcons();

export default {
  title: 'Core/FeaturedLink',
  component: FeaturedLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    url: '/',
    children: 'Featured link'
  }
}

export const Default = {
  args: {
  }
}

export const Reverse = {
  args: {
    reverse: true,
  }
}

export const Large = {
  args: {
    textSize: 'text-p1',
  }
}

export const Small = {
  args: {
    textSize: 'text-p3',
  }
}

export const Pink = {
  args: {
    iconColor: 'text-pink-500',
    additionalCSS: 'text-pink-800',
  }
}