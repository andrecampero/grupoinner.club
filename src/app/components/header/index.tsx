'use client'
import { FC, HTMLAttributes, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

import './index.scss'


type HeaderProps = HTMLAttributes<HTMLElement>

const Header: FC<HeaderProps> = ({ className, children, ...rest }) => {
  const menuContainerRef = useRef<HTMLDivElement>(null)
  const gsapTimeline = useRef<any>()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
 
  useGSAP(() => {
    gsapTimeline.current = gsap
      .timeline({ paused: true })
      .to('.bar-1', {
        duration: 0.5,
        attr: { d: 'M8,2 L2,8' },
        x: 1,
        ease: 'power2.inOut'
      }, 0.1)
      .to('.bar-2', {
        autoAlpha: 0,
      }, 0.1)
      .to('.bar-3', {
        duration: 0.5,
        attr: { d: 'M8,8 L2,2' },
        x: 1,
        ease: 'power2.inOut'
      }, 0.1)
      .to('.fullpage-menu', {
        duration: 0,
        display: 'block',
        ease: 'power2.inOut'
      }, 0.1)
      .to('.menu-bg', {
        duration: 1,
        opacity: 1,
        ease: 'power2.inOut'
      }, 0.1)
      .from('.main-menu li a', {
        duration: 1.5,
        y: '100%',
        rotateY: 30,
        stagger: 0.2,
        ease: 'power2.inOut'
      }, 0.1)

  }, { scope: menuContainerRef })

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleLinkClick = () => setIsMenuOpen(false)

  useEffect(() => {
    if(isMenuOpen)
      gsapTimeline.current.play()
    else 
      gsapTimeline.current.reverse()
  }, [isMenuOpen])

  return <div className='menu-container' ref={menuContainerRef}>
      <header className='flex h-[75px] items-center'>
        <Image
          className='ml-12 mr-auto'
          alt='Logo'
          src='/images/logo.png'
          priority
          quality={100}
          width={145}
          height={45}
        />
        <div className='header-row'>
          <button className='menu-toggle' onClick={toggleMenu}>
            <svg viewBox='0 0 12 10' className='hamburger' height='40px' width='40px'>
              <path d='M10,2 L2,2' className='bar-1'></path>
              <path d='M2,5 L10,5' className='bar-2'></path>
              <path d='M10,8 L2,8' className='bar-3'></path>
            </svg>
          </button>
        </div>
      </header>
      <section className='fullpage-menu'>
        <div className='fullpage-menu-inner'>
          <div className='menu-bg' />
          <nav>
            <ul className='main-menu relative z-[1] text-center list-none [&>li]:overflow-hidden space-y-8'>
              <li>
                <Link href='/' onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/portfolio' onClick={handleLinkClick}>
                  Customers
                </Link>
              </li>
              <li>
                <Link href='/services' onClick={handleLinkClick}>
                  Services
                </Link>
              </li>
              <li>
                <Link href='/about' onClick={handleLinkClick}>
                  About
                </Link>
              </li>
              <li>
                <Link href='/contact' onClick={handleLinkClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
      </div>
    </section>
  </div>
}

export default Header 
