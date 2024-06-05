import type { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const imgStyleIconWhats = {
  position: 'fixed',
  bottom: '1em',
  left: '1em',
  z-index: '9999999'
}

const Footer: FC = () => {
  return <footer className='w-full flex flex-wrap items-end px-2 gap-6 md:gap-16 min-h-24 pb-4 md:pl-20 md:pr-4 bg-transparent'>
    <div className='flex flex-wrap gap-12 mt-12'>
      <Image
        className='ml-12 mr-auto'
        alt='Logo'
        src='/images/logo.png'
        priority
        quality={100}
        width={145}
        height={45}
      />
      <Link href='mailto:info@groupinner.club' target='_blank'>info@groupinner.club</Link>
      //<Link href='https://api.whatsapp.com/send?phone=5511945583403' target='_blank'>+1 123 4567 89</Link>
    </div>
    <div className='w-full text-center py-8'>
      447 Broadway 2nd floor, New York, NY 10013, USA
    </div>
	<div style={imgStyleIconWhats}>
		<Link href='https://api.whatsapp.com/send?phone=5511919745408&text=Hello, I contact you through groupinner.club" target="_blank">
			<Image
			  src='/images/whatsapp-logo-60x60_fx.png'
			  priority
			  quality={100}
			/>
		</Link>
	</div>
  </footer>
}

export default Footer
