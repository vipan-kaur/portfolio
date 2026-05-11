'use client'

import { TypeAnimation } from 'react-type-animation'

export default function TypeWriter() {
  return (
    <TypeAnimation
      sequence={[
        'Full Stack MERN Developer',
        1000,
        'React & Next.js',
        1000,
        'Always Improving',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text"
      cursor={true}
    />
  )
}
