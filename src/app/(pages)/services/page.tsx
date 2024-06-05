import { type FC } from 'react'

import Image from 'next/image'
import Typography from '@/app/components/typography'
import Heading from '@/app/components/heading'

const ServicesPage: FC = (): JSX.Element => 
  <section className='flex flex-col px-4'>
    <h1 className='mt-16 fluid-text-4xl text-center font-bold'>Services</h1>
    <div className='mt-24 grid grid-cols-1 md:grid-cols-2 grid-rows-8 md:grid-rows-4 gap-16'>
      <div className='flex flex-col items-start gap-4 max-w-lg mx-auto'>
        <Image
          className='mx-auto'
          alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          src='/images/svc.png'
          priority
          quality={100}
          width={467}
          height={700}

        />
        <Heading className='fluid-text-2xl'>Strategic Planning and Consulting</Heading>
        <Typography>
          Partners from brand positioning to the execution of integrated communication. Data to define strategy. Strategy to enhance business
        </Typography>
      </div>
      <div className='flex flex-col items-start gap-4 max-w-lg mx-auto'>
        <Image
          className='mx-auto'
          alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          src='/images/svc2.png'
          priority
          quality={100}
          width={467}
          height={700}
        />
        <Heading className='fluid-text-2xl'>Branding & Design</Heading>
        <Typography>
          Brand goes beyond business. Here, our mission is to help people and companies build value, meaning and experiences, bringing purpose from strategy to creation.
        </Typography>
      </div>
      <div className='flex flex-col items-start gap-4 max-w-lg mx-auto'>
        <Image
          className='mx-auto'
          alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          src='/images/svc3.png'
          priority
          quality={100}
          width={467}
          height={700}
        />
        <Heading className='fluid-text-2xl'>Social Media</Heading>
        <Typography>
          We produce social-first content in house, with planning, creation and intelligence always guided by always-on thinking.
        </Typography>
      </div>
      <div className='flex flex-col items-start gap-4 max-w-lg mx-auto'>
        <Image
          className='mx-auto'
          alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          src='/images/svc4.png'
          priority
          quality={100}
          width={467}
          height={700}
        />
        <Heading className='fluid-text-2xl'>Campaigns</Heading>
        <Typography>
        We create stories based on cultural and business intelligence, combining creativity with data to deliver unique experiences to the brand that can be adapted to all necessary formats.
        </Typography>
      </div>
      <div className='flex flex-col items-start gap-4 max-w-lg mx-auto'>
        <Image
          className='mx-auto'
          alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          src='/images/svc5.png'
          priority
          quality={100}
          width={467}
          height={700}
        />
        <Heading className='fluid-text-2xl'>UX, UI & Interface</Heading>
        <Typography>
          The infinite search for the best interface solutions for all devices. Research, project, design and deploy - it's all about the user.
        </Typography>
      </div>
      <div className='flex flex-col items-start gap-4 max-w-lg mx-auto'>
        <Image
          className='mx-auto'
          alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          src='/images/svc6.png'
          priority
          quality={100}
          width={467}
          height={700}
        />
        <Heading className='fluid-text-2xl'>IT Development</Heading>
        <Typography>
          Development specialists: from apps to systems integration, including website construction,
          we solve business problems and create experiences, putting the user at the center of everything.
        </Typography>
      </div>
      <div className='flex flex-col items-start gap-4 max-w-lg mx-auto'>
        <Image
          className='mx-auto'
          alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          src='/images/svc7.png'
          priority
          quality={100}
          width={467}
          height={700}
        />
        <Heading className='fluid-text-2xl'>Midia Performance</Heading>
        <Typography>
          Real-time media planning, production, buying and optimization. We define, execute and measure in an always-on process, because every metric impacts the whole.
        </Typography>
      </div>
    </div>
  </section>

export default ServicesPage
