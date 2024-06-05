import { type FC } from 'react'
import Image from 'next/image'
import Typography from '@/app/components/typography'

const AboutPage: FC = (): JSX.Element => {
      
  return <section className='flex flex-col px-4 pb-24'>
    <h1 className='mt-6 fluid-text-4xl text-center font-bold uppercase'>Do. Research. Introduce</h1>
    <Image
      className='mt-24 mx-auto'
      alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
      src='/images/about.gif'
      priority
      quality={100}
      width={467}
      height={700}
    />

    <div className='mt-24 grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-12 w-full max-w-5xl px-2 mx-auto'>
      <Typography>
        Our software company was born in 2009. Back then, cell phones were used to make calls and send SMS messages (believe it or not!) and Orkut was in its inevitable decline. Today, everything has changed, and so have we. We matured, got even better at what we were already good at, and learned a lot about what we didn't know. Now we are social, technological, and digital experts. We are the improved version of ourselves.
      </Typography>
      <Typography>
        But some things haven’t changed. We still believe that excellence is the only way to achieve our goals. We still think that communication is made by people and for people. We also understand that strategy, creativity, and performance only work with a strong willingness to experiment, dedication, and, when necessary, a touch of boldness to move forward.
      </Typography>
    </div>
  </section>
}

export default AboutPage
