
import Image from 'next/image'

import services from '../../../../../portfolio-mock.json'
import Typography from '@/app/components/typography'

export async function generateStaticParams() {
  return services.map((service) => ({ ...service }))
}

export default function Portfolio({ params }: any) {
  console.log(params)
  const service = services.find(service => service.id === params.id)
  console.log(service)
 
  return <section className={'min-h-screen mx-auto flex flex-col'}>
    <div className='relative flex flex-col min-h-[600px] w-full h-full'>
      { service?.imgSrc && <Image
        className='mx-auto object-fill z-10'
        alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
        src={`${service?.imgSrc}`}
        priority
        quality={100}
        fill

      /> }
      <h1 className='text-white fluid-text-9xl my-auto z-20 text-left font-bold font-domaine pl-6 md:pl-44'>
        { service?.brandName }
      </h1>
    </div>
    <div className='mt-12 flex flex-col gap-y-12  '>
      { service?.content.map(({ title, content }, i) => 
          <article className='text-black fluid-text-2xl my-auto z-20 text-left font-bold w-full px-5 py-3' key={i}>
            <h2 className=''>{title}</h2>
            <Typography className='mt-4 text-lg'>{ content }</Typography>
          </article>
        )}
    </div>
  </section>
  
}
