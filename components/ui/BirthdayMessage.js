import React from 'react';
import { ArrowDown } from '../assets/Icons';
import AnimatedSentence from './AnimatedSentence';
import Screen from './Screen';

export default function BirthdayMessage() {
  return (
    <div className="flex flex-col">
      <Screen>
        <AnimatedSentence
          className={`text-2xl text-purple-700`}
          split={' '}
          text={`hey baby!`}
        />
        <AnimatedSentence
          className={`text-xl`}
          split={''}
          text={`Let me tell you a little story...`}
        />

        <ArrowDown />
      </Screen>

      <Screen></Screen>
    </div>
  );
}
