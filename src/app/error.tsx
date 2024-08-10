'use client'
 
import { useEffect } from 'react'
 
export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className='w-full h-full | flex items-center justify-center | flex-col'>
      <h2 className='text-3xl font-bold | mb-8'>Something unexpected happened!</h2>
      <button
        onClick={
          () => window.location.reload()
        }
        className='px-4 py-2 bg-red-500 text-white rounded-lg | hover:bg-red-600 hover:text-white'
      >
        Try again
      </button>
    </div>
  )
}