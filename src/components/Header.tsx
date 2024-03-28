'use client'

import { useRouter } from 'next/navigation';
import UserProfile from './UserProfile';
import logo from '/public/logo.png'
import Image from 'next/image';
// type newUser = User

// interface Props {
//   currentUser?: newUser | null;
//   open
// }


export default function ({ currentUser}) {

  const access = currentUser?.role === 'admin' || currentUser?.role === 'owner'
  const router = useRouter()
  
  return (

    <div className=' px-2 z-10 sticky top-0 header'>
      <div className='flex items-center justify-between p-1  '>
        <div className='text-xl sm:text-2xl font-bold flex gap-1.5 items-center'>
          <Image onClick={()=>router.push('/')} src={logo} width={'50'} className='cursor-pointer' height={'50'} alt='Logo' />
          <h1>StudySphere</h1>
        </div>
        <UserProfile currentUser={currentUser} access={access} />
      </div>
    </div>
  )
}