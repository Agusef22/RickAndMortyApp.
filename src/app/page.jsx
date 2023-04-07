'use client'
import Link from 'next/link'
import Button from '@mui/material/Button'

export default function HomePage() {
  return (
    <div className='h-screen w-screen overflow-hidden flex flex-col justify-center '>
      <div className='flex flex-col justify-center items-center h-full'>
        <h1 className='text-4xl mb-4'>Rick and Morty APP</h1>
        <Link className='text-blue-500 text-2xl' href='/character'>
          <Button variant='outlined'>Open App</Button>
        </Link>
      </div>
      <footer className='text-center mb-4'>
        <p className='text-xl'>
          Created by Agustin Fernandez <span>&#x1F60A;</span>
        </p>
      </footer>
    </div>
  )
}
