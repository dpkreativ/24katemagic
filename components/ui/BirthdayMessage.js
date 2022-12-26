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
          text={`hey baby!`}
        />
        <AnimatedSentence
          className={`text-xl`}
          text={`Let me tell you a little story...`}
          split={' '}
        />

        <div className="animate-bounce">
          <ArrowDown />
        </div>
      </Screen>
    </div>
  );
}
