import { motion } from 'framer-motion';

export default function AnimatedSentence({ className, split, text }) {
  const words = text.split(split);

  // Variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2 * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`${className} flex-wrap`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={split === '' ? 'min-w-max w-4' : 'mx-1'}
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
