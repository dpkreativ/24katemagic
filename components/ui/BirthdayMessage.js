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
        <div className="text-4xl">Scroll down</div>
        <div className="animate-bounce">
          <ArrowDown />
        </div>
      </Screen>

      <Screen>
        <StaggeredText
          className={`text-4xl text-purple-700`}
          text={`hey baby!`}
        />
        <div className="h-40"></div>
        <StaggeredText text={`Let me tell you a little story...`} />
      </Screen>

      <Screen>
        <StaggeredText text={`One warm evening, many years ago...`} />
        <StaggeredText
          text={`A beautiful young lady started to feel movements in her belly...`}
        />
        <div className="animate-[spin_10s_linear_infinite]">
          <CircularDoodle />
        </div>
      </Screen>

      <Screen>
        <StaggeredText text={`It brought a mixture of emotions...`} />
        <StaggeredText text={`She was a bit anxious, and very excited...`} />
        <StaggeredText text={`full of anticipation for what was coming...`} />
      </Screen>

      <Screen>
        <StaggeredText text={`Few hours later, she heard that piercing cry,`} />
        <StaggeredText
          text={`and felt such peace and happiness like she's never felt before...`}
        />
      </Screen>

      <Screen>
        <div className="animate-pulse">
          <HeartDoodle />
        </div>
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
        <div className="w-full relative min-h-[250px]">
          <div className="absolute top-0 right-0">
            <KateImage
              src={`/images/two.jpeg`}
              className={`h-40 w-52 rotate-12`}
            />
          </div>
          <div className="absolute top-0 left-0">
            <KateImage
              src={`/images/one.jpeg`}
              className={`h-52 w-32 -rotate-12`}
            />
          </div>
          <div className="absolute bottom-16 right-28">
            <ZigZagDoodle />
          </div>
        </div>
        <StaggeredText
          text={`I want to take this moment to show you just how much you mean to every one of us, especially me`}
        />
      </Screen>

      <Screen>
        <KateImage src={`/images/three.jpg`} className={`w-full h-48`} />
        <StaggeredText
          text={`For a lot of us, you're that one friend that turns up... whether it's slaying for a wedding, or taking a taxi to Gwarinpa by 10pm cos your friend is sick`}
        />
      </Screen>

      <Screen>
        <div className="relative w-full min-h-[250px] mb-10">
          <div className="absolute top-0 left-0">
            <KateImage
              src={`/images/four.jpg`}
              className={`w-32 h-44 -rotate-[20deg]`}
            />
          </div>
          <div className="absolute top-0 right-0">
            <KateImage
              src={`/images/five.jpg`}
              className={`w-36 h-56 rotate-[16deg]`}
            />
          </div>
          <div className="absolute bottom-1 left-1/4">
            <KateImage
              src={`/images/six.jpg`}
              className={`w-44 h-28 -rotate-12`}
            />
          </div>
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
        <div className="relative w-full min-h-[250px]">
          <div className="absolute top-0 left-2/4">
            <PinkHeart />
          </div>
          <div className="absolute top-10 right-0">
            <KateImage className={`w-36 h-56 rotate-[20deg]`} />
          </div>
          <div className="absolute top-5 left-0">
            <KateImage
              src={`/images/seven.jpg`}
              className={`w-40 h-56 -rotate-[16deg]`}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <StaggeredText text={`Calm and classy on the outside,`} />
          <StaggeredText text={`Certified werey on the inside`} />
          <StaggeredText text={`There's never a dull moment with you`} />
          <StaggeredText text={`Unless you are asleep`} />
        </div>
      </Screen>

      <Screen>
        <div className="flex flex-col space-y-8">
          <KateImage src={`/images/nine.jpg`} className={`w-64 h-64 mx-auto`} />
          <StaggeredText
            text={`Even AI dey trip for you sef! Need I say more?`}
          />
        </div>
      </Screen>

      <Screen>
        <div className="flex flex-col space-y-8">
          <KateImage src={`/images/ten.jpg`} className={`w-72 h-96`} />
          <StaggeredText text={`Remember this day? 🤭`} />
        </div>
      </Screen>

      <Screen>
        <KateImage src={`/images/eleven.jpg`} className={`w-72 h-96`} />

        <div className="flex flex-col space-y-5 mt-8">
          <StaggeredText text={`Katherine Adaobi Lucky`} />
          <StaggeredText
            text={`My multi-talented tech sis, number one baddie, jewel of inestimable value... the love of my life`}
          />
        </div>
      </Screen>

      <Screen>
        <div className="flex flex-col space-y-3 mt-8">
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
