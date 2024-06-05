import { FC } from 'react'

const ContactPage: FC = (): JSX.Element => {
  return <div className='min-h-screen py-6 flex flex-col justify-center sm:py-12'>
    <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
      <div className='absolute inset-0 bg-gradient-to-r bg-white shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6' />
      <div className='text-black relative px-4 py-10 bg-primary shadow-lg sm:p-20'>
      <div className='text-center pb-6'>
        <h1 className='fluid-text-3xl font-bold'>Contact Us!</h1>
        <p className='white'>Fill up the form below to send us a message.</p>
      </div>
      <form action='' method='post'>
        <input
          className='shadow mb-4 appearance-none border-4 w-full py-2 px-3 border-black text-black placeholder:text-black leading-tight focus:outline-none focus:shadow-outline'
          type='text' 
          placeholder='Name'
          name='name' 
        />
        <input
          className='shadow mb-4 appearance-none border-4 w-full py-2 px-3 border-black text-black placeholder:text-black leading-tight focus:outline-none focus:shadow-outline'
          type='email' 
          placeholder='Email'
          name='email' 
        />
        <input
          className='shadow mb-4 appearance-none border-4 w-full py-2 px-3 border-black text-black placeholder:text-black leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          placeholder='Subject'
          name='subject' 
        />
        <textarea
          className='shadow mb-4 min-h-0 appearance-none border-4 h-64 w-full py-2 px-3 border-black text-black placeholder:text-black leading-tight focus:outline-none focus:shadow-outline'
          placeholder='Type your message here...' 
          name='message' 
        />
        <div className='flex justify-between w-full'>
          <input
            className='w-full shadow bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer'
            type='submit' 
            value='Send'
          />
        </div>
      </form>
    </div>
    </div>
  </div>
}

export default ContactPage
