'use client'
import { useEffect, useRef, useState } from 'react'

import Hero from '@/app/components/hero'
import Typography from '@/app/components/typography'
import PortfolioGrid from './components/portfolio-grid'
import Heading from './components/heading'

const slides = [
  {
    title: 'Valve Software',
    videoSrc: 'https://cdn.cloudflare.steamstatic.com/valvesoftware/images/videos/hero_01_small.mp4'
  },
  {
    title: 'Activision Blizzard',
    videoSrc: 'https://www.activision.com/cdn/activisionblizzard/videos/ab_cod.mp4'
  },
  {
    title: 'Tencent Games',
    videoSrc: 'https://www.tencentgames.com/overseas-img/images/index/video1.mp4'
  },
  {
    title: 'Square Enix',
    videoSrc: 'https://fyre.cdn.sewest.net/ff-xvi/65522604aed7bb35a2c83d44/video_loop4-9T3mAtoo5.mp4'
  },
  {
    title: 'NetEase',
    videoSrc: 'https://comm.v.easebar.com/nie/2024/0424/9ee9f9163d499d4f54b4c0801ddcc13d.mp4'
  },
  {
    title: 'Bethesda Game Studios',
    videoSrc: 'https://videos.ctfassets.net/rporu91m20dc/4Klt84M36MyCw0ICWWQoQs/a1c8c60c55ef634dd99fc3955fc5fe26/BnetStudios_page-loopingVideo_02_lower_bitrate.mp4'
  },
  {
    title: 'CD Projekt Red',
    videoSrc: 'https://cdn-l.cdprojektred.com/video/cdpr_website_001.mp4'
  }
]

export default function HomePage() {
  const [ currentSlideIndex, setCurrentSlideIndex ] = useState<number>(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const slideRef = useRef<HTMLDivElement>(null)

  const SLIDER_LENGTH = 7

  const changeSlide = (direction: 'up' | 'down') => {
    if (!(containerRef.current && slideRef.current)) return

    if (direction === 'up') 
      setCurrentSlideIndex(prevIndex => (prevIndex - 1 + SLIDER_LENGTH) % SLIDER_LENGTH)
    
    if (direction === 'down') 
      setCurrentSlideIndex(prevIndex => (prevIndex + 1) % SLIDER_LENGTH)
      
  }

  const handleSlideBtnClick = (direction: 'up' | 'down') => changeSlide(direction)

  return <div className='w-full flex flex-col overflow-hidden'>
    <section className='flex flex-col items-start h-screen'>
      <div className='absolute z-[9999] flex flex-col items-center justify-center h-full bg-red pl-12 gap-4 '>
        <button className='down-button text-white' onClick={() => handleSlideBtnClick('up')}>
          prev
        </button>
        <div className='w-[1px] h-24 bg-white'></div>
        <button className='up-button text-white' onClick={() => handleSlideBtnClick('down')}>
          next
        </button>
      </div>
      <div className='slider-container overflow-hidden w-[100vw] h-[100vh]' ref={containerRef}>        
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlideIndex ? 'absolute' : 'hidden'} h-full w-full inset-0`}
            ref={slideRef}
          >
            <div className='flex flex-col justify-center h-full w-full'>
              <div className='absolute z-30 top-[100px] md:top-[unset] px-4 md:left-[115px] max-w-lg'>
                <Heading className='fluid-text-7xl font-bold uppercase font-domaine'>{slide.title}</Heading>
                <Typography className='max-w-sm mt-4'>
                </Typography>
              </div>
              <div className='relative md:left-2/3 md:-translate-x-2/3 w-full h-full md:w-[575px] md:h-[750px] z-20'>
                <video autoPlay muted loop className='absolute inset-0 w-full h-full object-cover'>
                  <source src={slide.videoSrc} type='video/mp4'></source>
                </video>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <PortfolioGrid className='mt-12 w-full max-w-full' />
  </div>
}
