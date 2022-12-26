import React from 'react';
import AnimatedSentence from './AnimatedSentence';

export default function BirthdayMessage() {
  return (
    <div>
      <AnimatedSentence
        className={`flex justify-center text-purple-700 text-2xl`}
        split={' '}
        text={`hey baby!`}
      />

      <AnimatedSentence
        className={`flex justify-center text-xl`}
        split={''}
        text={`Let me tell you a little story...`}
      />
    </div>
  );
}
