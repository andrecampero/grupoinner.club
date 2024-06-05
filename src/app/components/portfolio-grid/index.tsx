import { HTMLAttributes, type FC } from 'react'
import Image from 'next/image'

import { mergeClassNames } from '@/app/utils/classname'

import Heading from '@/app/components/heading'

type PortfolioGridProps = HTMLAttributes<HTMLDivElement>

const PortfolioGrid: FC<PortfolioGridProps> = ({ className, ...rest }): JSX.Element => {

  return <div className={mergeClassNames('grid grid-cols-1 lg:grid-cols-4 grid-rows-11 lg:grid-rows-6 gap-y-4 md:gap-x-4 px-2 min-h-[500vh] lg:min-h-[200vh]', className)} { ...rest }>
      <div className='col-span-1 lg:col-span-3 lg:row-span-2'>
        <div className='img-ctn relative h-full'>
          <div className='relative w-full h-full'>
            <video autoPlay muted loop className='absolute inset-0 w-full h-full object-cover' >
              <source src='https://cdn.cloudflare.steamstatic.com/valvesoftware/images/videos/hero_01_small.mp4' type='video/mp4'></source>
            </video>
          </div>
          <div className='absolute flex flex-col justify-center items-center inset-0 px-2 h-full w-full overflow-hidden bg-primary text-white opacity-0 transition duration-500 ease-in-out hover:opacity-95 py-2'>
            <Heading className='fluid-text-2xl text-white break-all text-center'>Valve Software</Heading>
            <div className='w-[1px] h-24 bg-black my-4'></div>
            <p className='text-black'>GAMING</p>
          </div>
        </div>
      </div>
      <div className='col-span-1 lg:row-span-2 lg:col-start-4'>
        <div className='img-ctn relative h-full'>
          <div className='relative w-full h-full'>
            <video autoPlay muted loop className='absolute inset-0 w-full h-full object-cover' >
              <source src='https://www.tencentgames.com/overseas-img/images/index/video1.mp4' type='video/mp4'></source>
            </video>
          </div>
          <div className='absolute flex flex-col justify-center items-center inset-0 px-2 h-full w-full overflow-hidden bg-primary text-white opacity-0 transition duration-500 ease-in-out hover:opacity-95 py-2'>
            <Heading className='fluid-text-2xl text-white break-all text-center'>Tencent Games</Heading>
            <div className='w-[1px] h-24 bg-black my-4'></div>
            <p className='text-black'>GAMING</p>
          </div>
        </div>
      </div>
      <div className='col-span-1 lg:row-start-3'>
        <div className='img-ctn relative h-full'>
          <div className='relative w-full h-full'>
            <video autoPlay muted loop className='absolute inset-0 w-full h-full object-cover' >
              <source src='https://fyre.cdn.sewest.net/ff-xvi/65522604aed7bb35a2c83d44/video_loop4-9T3mAtoo5.mp4' type='video/mp4'></source>
            </video>
          </div>
          <div className='absolute flex flex-col justify-center items-center inset-0 px-2 h-full w-full overflow-hidden bg-primary text-white opacity-0 transition duration-500 ease-in-out hover:opacity-95 py-2'>
            <Heading className='fluid-text-2xl text-white break-all text-center'>Square Enix</Heading>
            <div className='w-[1px] h-24 bg-black my-4'></div>
            <p className='text-black'>BRANDING & DESIGN</p>
          </div>
        </div>
      </div>
      <div className='col-span-1 lg:col-start-1 lg:row-start-4'>
        <div className='img-ctn relative h-full'>
          <div className='relative w-full h-full'>
            <video autoPlay muted loop className='absolute inset-0 w-full h-full object-cover' >
              <source src='https://comm.v.easebar.com/nie/2024/0424/9ee9f9163d499d4f54b4c0801ddcc13d.mp4' type='video/mp4'></source>
            </video>
          </div>
          <div className='absolute flex flex-col justify-center items-center inset-0 px-2 h-full w-full overflow-hidden bg-primary text-white opacity-0 transition duration-500 ease-in-out hover:opacity-95 py-2'>
            <Heading className='fluid-text-2xl text-white break-all text-center'>NetEase</Heading>
            <div className='w-[1px] h-24 bg-black my-4'></div>
            <p className='text-black'>Gaming</p>
          </div>
        </div>
      </div>
      <div className='col-span-1 lg:row-span-2 lg:col-start-2 lg:row-start-3'>
        <div className='img-ctn relative h-full'>
          <div className='relative w-full h-full'>
            <video autoPlay muted loop className='absolute inset-0 w-full h-full object-cover' >
              <source src='https://videos.ctfassets.net/rporu91m20dc/4Klt84M36MyCw0ICWWQoQs/a1c8c60c55ef634dd99fc3955fc5fe26/BnetStudios_page-loopingVideo_02_lower_bitrate.mp4' type='video/mp4'></source>
            </video>
          </div>
          <div className='absolute flex flex-col justify-center items-center inset-0 px-2 h-full w-full overflow-hidden bg-primary text-white opacity-0 transition duration-500 ease-in-out hover:opacity-95 py-2'>
            <Heading className='fluid-text-2xl text-white break-all text-center'>Bethesda Game Studios</Heading>
            <div className='w-[1px] h-24 bg-black my-4'></div>
            <p className='text-black'>GAMING</p>
          </div>
        </div>
      </div>
      <div className='col-span-1 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-3'>
        <div className='img-ctn relative h-full'>
          <div className='relative w-full h-full'>
            <video autoPlay muted loop className='absolute inset-0 w-full h-full object-cover' >
              <source src='https://www.activision.com/cdn/activisionblizzard/videos/ab_cod.mp4' type='video/mp4'></source>
            </video>
          </div>
          <div className='absolute flex flex-col justify-center items-center inset-0 px-2 h-full w-full overflow-hidden bg-primary text-white opacity-0 transition duration-500 ease-in-out hover:opacity-95 py-2'>
            <Heading className='fluid-text-2xl text-white break-all text-center'>Activision Blizzard</Heading>
            <div className='w-[1px] h-24 bg-black my-4'></div>
            <p className='text-black'>GAMING</p>
          </div>
        </div>
      </div>
      <div className='col-span-1 lg:row-span-2 lg:row-start-5'>
        <div className='img-ctn relative h-full'>
          <div className='relative w-full h-full'>
            <video autoPlay muted loop className='absolute inset-0 w-full h-full object-cover' >
              <source src='https://cdn-l.cdprojektred.com/video/cdpr_website_001.mp4' type='video/mp4'></source>
            </video>
          </div>
          <div className='absolute flex flex-col justify-center items-center inset-0 px-2 h-full w-full overflow-hidden bg-primary text-white opacity-0 transition duration-500 ease-in-out hover:opacity-95 py-2'>
            <Heading className='fluid-text-2xl text-white break-all text-center'>CD Projekt Red</Heading>
            <div className='w-[1px] h-24 bg-black my-4'></div>
            <p className='text-black'>GAMING</p>
          </div>
        </div>
      </div>
      <div className='col-span-1 lg:col-start-2 lg:row-start-5'>
        <div className='img-ctn relative h-full'>
          <div className='relative w-full h-full'>
            <Image
              alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
              src='/images/fs.png'
              fill
              sizes='(max-width: 768px) 213px, 33vw'
              priority
              className='object-cover'
            /> 
          </div>
          <div className='absolute flex flex-col justify-center items-center inset-0 px-2 h-full w-full overflow-hidden bg-primary text-white opacity-0 transition duration-500 ease-in-out hover:opacity-95 py-2'>
            <h1 className='fluid-text-2xl text-white break-all text-center'>From Software</h1>
            <div className='w-[1px] h-24 bg-black my-4'></div>
            <p className='text-black'>BRANDING & DESIGN</p>
          </div>
        </div>
      </div>
      <div className='col-span-1 lg:col-start-2 lg:row-start-6'>
        <div className='img-ctn relative h-full'>
          <div className='relative w-full h-full'>
            <Image
              alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
              src='/images/kojima.jpg'
              fill
              sizes='(max-width: 768px) 213px, 33vw'
              priority
              className='object-cover'
            /> 
          </div>
          <div className='absolute flex flex-col justify-center items-center inset-0 px-2 h-full w-full overflow-hidden bg-primary text-white opacity-0 transition duration-500 ease-in-out hover:opacity-95 py-2'>
            <Heading className='fluid-text-2xl text-white break-all text-center'>Kojima Productions</Heading>
            <div className='w-[1px] h-24 bg-black my-4'></div>
            <p className='text-black'>Gaming</p>
          </div>
        </div>
      </div>
      <div className='col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-5'>
        <div className='img-ctn relative h-full'>
          <div className='relative w-full h-full'>
          <Image
              alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
              src='/images/imsomniac_games.jpg'
              fill
              sizes='(max-width: 768px) 213px, 33vw'
              priority
              className='object-cover'
            /> 
          </div>
          <div className='absolute flex flex-col justify-center items-center inset-0 px-2 h-full w-full overflow-hidden bg-primary text-white opacity-0 transition duration-500 ease-in-out hover:opacity-95 py-2'>
            <Heading className='fluid-text-2xl text-white break-all text-center'>Insomniac Games</Heading>
            <div className='w-[1px] h-24 bg-black my-4'></div>
            <p className='text-black'>GAMING</p>
          </div>
        </div>
      </div>
      <div className='col-span-1 lg:col-start-4 lg:row-span-2 lg:row-start-5'>
        <div className='img-ctn relative h-full'>
          <div className='relative w-full h-full'>
          <Image
              alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
              src='/images/bungie.jpg'
              fill
              sizes='(max-width: 768px) 213px, 33vw'
              priority
              className='object-cover'
            /> 
          </div>
          <div className='absolute flex flex-col justify-center items-center inset-0 px-2 h-full w-full overflow-hidden bg-primary text-white opacity-0 transition duration-500 ease-in-out hover:opacity-95 py-2'>
            <Heading className='fluid-text-2xl text-white break-all text-center'>Bungie</Heading>
            <div className='w-[1px] h-24 bg-black my-4'></div>
            <p className='text-black'>GAMING</p>
          </div>
        </div>
      </div>
    </div>
}

export default PortfolioGrid
