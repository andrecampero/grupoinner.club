import type { FC, HTMLAttributes } from 'react'

import { mergeClassNames } from '@/app/utils/classname'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
}

const Heading: FC<HeadingProps> = ({ className, tag = 'h1', children }) => { 
  const HeadingTag = tag
  
  return <HeadingTag className={mergeClassNames('text-white', className)}>
    { children }
  </HeadingTag>
}

export default Heading
