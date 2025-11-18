import React from 'react'

function ThanksModal({text1, text2}) {
    return (
        <div className=''>
            <h1 className="font-helvetica font-bold text-[47px] tracking-[2px] uppercase mb-6 text-white">
                Thank you!
            </h1>
            <p className="font-helvetica font-normal uppercase text-[18px] leading-[22px] mb-4 text-white">
                {text1}
            </p>
            <p className="font-helvetica font-normal text-[16px] leading-[22px] mb-4 text-white">
                {text2}
            </p>
            <p className="font-lato font-normal text-[16px] leading-[22px] mb-4 text-white">
                Welcome to the Ancestro Energy. #LOSANCESTROS
            </p>
        </div>
    )
}

export default ThanksModal