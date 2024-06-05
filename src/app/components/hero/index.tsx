'use client'
import { useEffect, useRef, type FC } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export const Hero: FC = (): JSX.Element => {
  const heroRef = useRef<HTMLDivElement>(null)
  const gsapTimeline = useRef<any>()

  useGSAP(() => {
    gsapTimeline.current = gsap
      .timeline({ paused: true })
      .to('.img-two', {
        y: 0,
        duration: 0.7,
        ease: 'power2.inOut',
        stagger: 0.1,
      }, 0.1)
      .to('.img-one', {
        y: 0,
        duration: 0.7,
        ease: 'power2.inOut',
        stagger: 0.1
      }, 0.1)
      .to('.img-three', {
        y: 0,
        duration: 0.7,
        ease: 'power2.inOut',
        stagger: 0.1
      }, 0.1)
      

  }, { scope: heroRef })

  useEffect(() => {
    setTimeout(() => gsapTimeline.current.play(), 1000)
    
  }, [])

  return <div className='mx-auto flex flex-wrap items-start text-left lg:py-44 gap-y-12 w-full' ref={heroRef}>
      <div className='flex flex-col w-full xl:w-2/5 justify-center items-start py-2 md:p-8 gap-12'>
        <h1 className='w-full fluid-text-4xl md:fluid-text-5xl lg:fluid-text-6xl font-bold'>We are Lorem Ispum!</h1>
        <h2 className='w-full fluid-text-2xl md:fluid-text-3xl lg:max-w-xl'>Lets change the way you expose your services digitally.</h2>
      </div>
      <div className='flex justify-center items-center w-full xl:w-3/5 gap-y-12'>
        <div className='flex-1 w-full max-w-[200px] h-auto'>
          <Image className='img-one xl:block translate-y-[-100px]' src='/images/hero-one.png' alt='' width={200} height={200} priority quality={100}  /> 
        </div>
        <div className='flex-1 w-full max-w-[350px] h-auto'>
          <Image className='img-two xl:block translate-y-[100px]' src='/images/hero-two.png' alt='' width={350} height={400} priority quality={100} />
        </div>  
        <div className='flex-1 w-full max-w-[200px] h-auto'>
          <Image className='img-three xl:block translate-y-[-100px]' src='/images/hero-three.png' alt='' width={200} height={300} priority quality={100} />
        </div>    
      </div>
    </div>
}

export default Hero