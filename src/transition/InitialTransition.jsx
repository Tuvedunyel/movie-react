import { motion } from "framer-motion";

function InitialTransition() {
  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.25,
        when: "afterChildren",
      },
    },
  };

  const text = {
    initial: {
      y: 40,
    },
    animate: {
      y: 80,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  return (
    <div className='absolute'>
      <motion.div
        className='relative'
        initial='initial'
        animate='animate'
        variants={blackBox}
      >
        <motion.svg variants={textContainer} className='flex'>
          <pattern
            id='pattern'
            patternUnits='userSpaceOnUse'
            width={750}
            height={800}
            className='text-white'
          >
            <rect className='w-full' />
            <motion.rect variants={text} className='text-gray' />
          </pattern>
          <text
            className='text-4xl font-bold'
            textAnchor='middle'
            x='50%'
            y='50%'
            style={{ fill: "url(#pattern)" }}
          >
            LOADING
          </text>
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default InitialTransition;
