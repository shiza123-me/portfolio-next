'use client'
import React from "react"
import Link from "next/link"
export default function GetContact(){
    return(
        <div className="max-w-2xl mx-auto text-center text-white mt-5 ">
            <p className="text-4xl">
                Are You Ready to kickstart your project with a touch of magic?
            </p>
            <p className="text-gray-400">
                Reach out and let's make it happen ✨. I'm also available for full-time or Part-time opportunities to push the boundaries of design and deliver exceptional work.
            </p>
<Link
  href="/contact"
  className="block mx-auto py-2 bg-amber-600 w-fit px-6 rounded mt-4 text-center"
>
  Get in Touch
</Link>


        </div>
    )
}