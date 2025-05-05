import { auth, signIn, signOut } from '@/auth'
import Link from 'next/link';
import React from 'react'

export default async function Navbar() {

    const session = await auth();
  return (
    <>
        <header className=''>
            <nav>
                <div className="flex">

                <div className="bg-red-200 flex-1">

                <Link href='/'>
                    Uber Clone
                </Link>
                </div>

                <div className="bg-pink-500 flex-1">
                    <div className="flex justify-between">

                    {session && session?.user ? (
                        <>

                       <Link href={`/user/${session?.user?.id}`}>
                        <span> {session?.user?.name}</span>
                       
                       </Link>
                       <form 
                       action={async() => {
                        'use server'
                        await signOut({redirectTo:"/"})
                       }}>

                        <input type='submit' value='Logout' />

                       </form>
                        </>

                       

                      

                    ):(
                        <>
                        
                        <form
                        action={async() => {
                            'use server'

                            await signIn('github');

                        }}
                        >

                            <input type='submit' value='Login With Github'/>

                        </form>
                        <form
                        action={async() => {
                            'use server'

                            await signIn('google')

                        }}
                        >

                            <input type='submit' value='Login with Google'/>

                        </form>
                        </>
                    )}
                    </div>
                </div>
                </div>
            </nav>
        </header>
    </>
  )
}
