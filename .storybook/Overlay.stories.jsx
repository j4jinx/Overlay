import React from 'react';
import { action } from '@storybook/addon-actions';
import Overlay from '../src/index.jsx';

export default {
    component: Overlay,
    title: 'Overlay',
	argTypes: {
		color: {
			options: ['#ffebee', '#e0e0e0', '#ffe0b2', '#e8f5e9', '#e3f2fd', '#f3e5f5'],
			control: { type: 'select' }
		}
	},
    args: {        
        onClose: action('onClose Called'),
      },
   
};

const Template = (args) => <Overlay {...args}/>;

export const Demo = Template.bind({});
Demo.args = {
	opened: false,
	color: '#e0e0e0'    
};