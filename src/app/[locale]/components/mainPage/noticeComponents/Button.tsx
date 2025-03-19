"use client"
import { redirect } from '@/i18n/routing';
export default function ButtonNotice() {
    

    return(
        <div className="w-full flex justify-end mt-6 ">
        <button className="bg-customDarkBlue p-2 font-fredoka font-semibold text-xl rounded-lg mx-auto  lg:mr-32 mb-20" onClick={() => redirect({ href: "/notices", locale: "eus" })}>ikuzi gehiago</button>
      </div> 
    )
}