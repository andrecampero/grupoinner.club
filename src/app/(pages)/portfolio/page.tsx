'use client'

import { useEffect, useRef, type FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import PortfolioGrid from '@/app/components/portfolio-grid'

const PortfolioPage: FC = (): JSX.Element => {
  const imgGridRef = useRef<HTMLDivElement>(null)
  const gsapTimeline = useRef<any>()

  useGSAP(() => {
    gsapTimeline.current = gsap
      .timeline({ paused: true })
      .from('.img-ctn', {
        y: 100,
        duration: 1,
        ease: 'power2.outIn'
      })
      .from('.img', {
        scale: 1.3,
        opacity: 0, 
        duration: 1,
        ease: 'power2.outIn'
      }, '<')
      

  }, { scope: imgGridRef })

  useEffect(() => {
    setTimeout(() => gsapTimeline.current.play(), 1000)
  }, [])


  return <PortfolioGrid />
}

export default PortfolioPage
