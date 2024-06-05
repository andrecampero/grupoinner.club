import type { FC, HTMLAttributes } from 'react'
import { mergeClassNames } from '@/app/utils/classname'

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement |  HTMLElement> {
  tag?: 'p' | 'span' | 'strong' | 'b' | 'i' | 'mark' | 'small'
}

const Typography: FC<TypographyProps> = ({ className, tag = 'p', children }) => { 
  const TypographyTag = tag

  return <TypographyTag className={mergeClassNames('text-white', className)}>
    { children }
  </TypographyTag>
}

export default Typography
