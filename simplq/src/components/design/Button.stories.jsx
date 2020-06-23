import React from 'react';
import { StandardButton } from './Button';
import { action } from '@storybook/addon-actions';

export default {
  component: StandardButton,
  title: 'Button',
};

export const CreateQButton = (props) => {
  return <StandardButton onClick={props.onClick} text={'Create a Queue'} />;
};

export const JoinQButton = (props) => {
  return <StandardButton onClick={props.onClick} text={'Join a Queue'} />;
};