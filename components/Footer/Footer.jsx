import React from 'react'
import companyLogo from '../../public/images/company-logo.png'

function Footer() {
    return (
        <div className='h-[259px] bg-black w-full flex flex-col justify-center items-center gap-y-[80px]'>
            <img src={companyLogo.src} alt="Company Logo" className='h-[119px] w-[337px]'/>
            <p className="font-helvetica font-normal text-center sm:text-lg lg:text-[20px] leading-[22px] lg:leading-[28px] text-white w-full mx-auto px-4">
                Address: 123 Green Avenue, Ancestro Business Park, Suite 405, New York, NY 10001, United States —  Contact us: +1 (555) 123-4567s  |  +44 20 7946 0958
            </p>
        </div>
    )
}

export default Footer