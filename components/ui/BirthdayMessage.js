import React from 'react';
import {
  ArrowDown,
  CircularDoodle,
  DownZagDoodle,
  HeartDoodle,
  PinkHeart,
  ZigZagDoodle,
} from '../assets/Icons';
import { StaggeredText } from './Animations';
import KateImage from './KateImage';
import KateMagic from './KateMagic';
import Screen from './Screen';

export default function BirthdayMessage() {
  return (
    <div className="flex flex-col">
      <Screen>
        <div>
          <StaggeredText
            className={`text-4xl text-purple-700`}
            text={`hey baby!`}
          />
        </div>
        <div className="animate-bounce">
          <ArrowDown />
        </div>
        <div>
          <StaggeredText text={`Let me tell you a little story...`} />
        </div>
      </Screen>

      <Screen>
        <div>
          <StaggeredText text={`One warm evening, many years ago...`} />
        </div>
        <div>
          <StaggeredText
            text={`A beautiful young lady started to feel movements in her belly...`}
          />
        </div>
        <div className="animate-[spin_10s_linear_infinite]">
          <CircularDoodle />
        </div>
      </Screen>

      <Screen>
        <div>
          <StaggeredText text={`It brought a mixture of emotions...`} />
        </div>
        <div>
          <StaggeredText text={`She was a bit anxious, and very excited...`} />
          <StaggeredText text={`full of anticipation for what was coming...`} />
        </div>
      </Screen>

      <Screen>
        <StaggeredText
          text={`Few hours later, she heard that piercing cry, and felt such peace and happiness like she's never felt before...`}
        />

        <div className="animate-pulse">
          <HeartDoodle />
        </div>
      </Screen>

      <Screen>
        <StaggeredText
          text={`Over two decades later, that little bundle of joy...`}
        />
        <StaggeredText
          text={`Has spread happiness to hundreds of others, many times over...`}
        />
      </Screen>

      <Screen>
        <StaggeredText text={`As you may have guessed by now...`} />
        <StaggeredText text={`That little bundle of joy, is YOU!`} />
      </Screen>

      <Screen>
        <KateMagic />

        <div>
          <KateImage />
          <KateImage />
          <div>
            <ZigZagDoodle />
          </div>
        </div>

        <StaggeredText
          text={`I want to take this moment to show you just how much you mean to every one of us, especially me`}
        />
      </Screen>

      <Screen>
        <KateImage />
        <StaggeredText
          text={`For a lot of us, you're that one friend that turns up... whether it's slaying for a wedding, or taking a taxi to Gwarinpa by 10pm cos your friend is sick`}
        />
      </Screen>

      <Screen>
        <div>
          <KateImage />
          <KateImage />
          <KateImage />
        </div>

        <div className="flex flex-col space-y-3">
          <StaggeredText
            text={`Your work ethic is inspiring, and Nigeria thanks you immensely for your service`}
          />
          <StaggeredText
            text={`Also notice how you effortlessly slay at everything?`}
          />
          <StaggeredText
            text={`You've got this unique and amazing vibe that's very rare.`}
          />
          <StaggeredText text={`I admire it so much`} />
        </div>
      </Screen>

      <Screen>
        <div>
          <div>
            <PinkHeart />
          </div>
          <KateImage />
          <KateImage />
        </div>

        <div className="flex flex-col space-x-3">
          <StaggeredText text={`Calm and classy on the outside,`} />
          <StaggeredText text={`Certified werey on the inside`} />
          <StaggeredText text={`There's never a dull moment with you`} />
          <StaggeredText text={`Unless you are asleep`} />
        </div>
      </Screen>

      <Screen>
        <KateImage />

        <div>
          <StaggeredText
            text={`Even AI dey trip for you sef! Need I say more?`}
          />
        </div>
      </Screen>

      <Screen>
        <KateImage />

        <div>
          <StaggeredText text={`Remember this day?`} />
        </div>
      </Screen>

      <Screen>
        <KateImage />

        <div className="flex flex-col space-y-3">
          <StaggeredText text={`Katherine Adaobi Lucky`} />
          <StaggeredText
            text={`My multi-talented tech sis, number one baddie, jewel of inestimable value... the love of my life`}
          />
        </div>

        <div className="flex flex-col space-y-3">
          <StaggeredText text={`You have changed my life in so many ways`} />
          <StaggeredText
            text={`You really are the best thing that has ever happened to me, and a lot of us who are close to you share the same sentiments`}
          />
        </div>

        <div className="animate-bounce">
          <DownZagDoodle />
        </div>
      </Screen>

      <Screen>
        <div>
          <StaggeredText
            text={`On this special day in your life, I just want to remind you that you are a blessing to me. The treasure I've been waiting for.`}
          />
        </div>

        <div className="flex flex-col space-y-3">
          <StaggeredText
            text={`I'm so glad you exist, and our paths crossed.`}
          />
          <StaggeredText
            text={`I wish you long life, excellent health, happiness and joy, peace of mind, and money to effortlessly handle your needs and wants.`}
          />
        </div>
      </Screen>

      <Screen>
        <div>
          <StaggeredText text={`Happy birthday baby`} />
          <StaggeredText text={`I love you.`} />
        </div>

        <div className="animate-pulse">
          <PinkHeart />
        </div>

        <StaggeredText text={`Divi`} />
      </Screen>
    </div>
  );
}
