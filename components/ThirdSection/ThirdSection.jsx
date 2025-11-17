import React from 'react';
import bgImage from '../../public/images/thirdSection.png';
import Button from '../common/Button/Button';

function ThirdSection() {
    return (
        <section className="relative bg-black w-full overflow-hidden">
            {/* Main Background with Rounded Container */}
            <div className="relative mx-auto max-w-[1920px]">
                <div
                    className="relative mx-4 sm:mx-8 lg:mx-20 xl:mx-32 2xl:mx-48"
                    style={{
                        borderRadius: '50px',
                        height: '700px',
                        backgroundImage: `
                            linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
                            linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
                            linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
                            linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
                            linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
                            linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%),
                            url(${bgImage.src})
                        `,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Content Inside the Rounded Container */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 xl:px-52">
                        {/* Banner */}
                        <div className="bg-[#F8B03B4D] border border-[#F8B03B] px-4 sm:px-6 py-2 mb-8 rounded-md">
                            <p className="font-helvetica font-normal text-lg sm:text-xl lg:text-[20px] tracking-[2px] text-white uppercase">
                                Our Culture — #LOSANCESTROS
                            </p>
                        </div>

                        {/* Heading */}
                        <h1 className="font-helvetica font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight lg:leading-10 tracking-[2px] uppercase mb-8 text-white max-w-3xl text-center">
                            We are a tribe of doers, creators, and protectors.
                        </h1>

                        {/* Paragraphs */}
                        <div className="space-y-6 max-w-3xl text-center">
                            <p className="font-helvetica font-normal text-base sm:text-lg lg:text-[20px] leading-[22px] lg:leading-[26px] text-white">
                                We value wellness, self-discipline, and divine power. We lift, we breathe, we build, and we give back.
                            </p>
                            <p className="font-helvetica font-normal text-base sm:text-lg lg:text-[20px] leading-[22px] lg:leading-[26px] text-white">
                                Our people live by example — strong bodies, sharp minds, and clear hearts.
                                We see our work as ceremony: every sale, every installation, every line of code is an offering to the planet.
                            </p>
                            <p className="font-helvetica font-normal text-base sm:text-lg lg:text-[20px] leading-[22px] lg:leading-[26px] text-white">
                                This is not a job. It’s a calling. If you are ready to align your career with your highest potential and help rewrite the story of Latin America, the Ancestro tribe is calling you home.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Frosted Glass Card — Exact same design, fully responsive */}
            <div className="relative -mt-20 sm:-mt-28 lg:-mt-32 xl:-mt-10 px-5 sm:px-10 lg:px-20 xl:px-48 2xl:px-64">
                <div
                    className="mx-auto w-full max-w-[1338px] px-[10px] rounded-2xl lg:rounded-[20px] py-16 sm:py-20 lg:py-[87px] text-center"
                    style={{
                        backdropFilter: 'blur(20px)',
                        background: 'linear-gradient(90deg, rgba(248, 176, 59, 0.3) 0%, rgba(248, 176, 59, 0.09) 100%)',
                        border: '1px solid rgba(248, 176, 59, 0.2)',
                    }}
                >
                    {/* Banner */}
                    <div className="bg-[#F8B03B4D] border border-[#F8B03B] px-6 py-2 mb-8 inline-block rounded-md">
                        <p className="font-helvetica font-normal text-lg sm:text-xl lg:text-[20px] tracking-[2px] text-white uppercase">
                            Join the Movement — #LOSANCESTROS
                        </p>
                    </div>

                    {/* Heading */}
                    <h2 className="font-helvetica font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight lg:leading-10 uppercase text-white mb-8 max-w-4xl mx-auto px-4">
                        Be part of the tribe powering a cleaner, freer Latin America.
                    </h2>

                    {/* Paragraph */}
                    <p className="font-helvetica font-normal text-base sm:text-lg lg:text-[20px] leading-[22px] lg:leading-[28px] text-white max-w-[900px] mx-auto px-4">
                        We value wellness, self-discipline, and divine power. We lift, we breathe, we build, and we give back.
                    </p>
                    <Button text={"Apply Now"} classes={" mt-[20px] mb-[10px] "} textClasses={"font-haas font-bold !text-[#F8B03B] text-[15px] mt-[10px]"} />
                    <p className="font-helvetica font-light italic text-base sm:text-lg lg:text-[20px] leading-[22px] lg:leading-[28px] text-white max-w-[900px] mx-auto px-4">
                        Your Ancestro Journey Begins Here
                    </p>

                </div>
            </div>

            {/* Extra spacing at bottom */}
            <div className="h-20 lg:h-32" />
        </section>
    );
}

export default ThirdSection;    