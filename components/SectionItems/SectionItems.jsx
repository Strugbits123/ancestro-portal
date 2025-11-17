'use client'
import React, {useState} from 'react';
import image1 from '../../public/images/sectionItem1.png';
import image2 from '../../public/images/sectionItem2.png';
import image3 from '../../public/images/sectionItem3.png';
import image4 from '../../public/images/sectionItem4.png';
import image5 from '../../public/images/sectionItem5.png';
import image6 from '../../public/images/sectionItem6.png';
import Button from '../common/Button/Button';
import SalesRepresentativeForm from '../Form/SalesRepresentativeForm';

const sections = [
    {
        image: image1.src,
        heading: 'Sales Representatives',
        paragraphs: [
            'The voice of the Ancestro revolution.',
            'As a Sales Representative, you are the bridge between the people and their power. You help families and companies unlock clean energy — solar, battery, and EV systems with zero upfront cost — bringing freedom where dependency once existed.',
            'Your work directly transforms communities, reducing costs and emissions while generating abundance for yourself and your clients. You’ll master negotiation, storytelling, and renewable finance — backed by the continent’s most advanced project management system.',
            'We provide mentorship, training, and all the tools to scale your success remotely while still staying connected through weekly meetings and live events.',
            'Those who thrive here are disciplined, magnetic communicators with heart. You’re not just selling — you’re awakening people to a new way of life.',
        ],
    },
    {
        image: image2.src,
        heading: 'Installers',
        paragraphs: [
            'The builders of independence.',
            'Installers are the backbone of Ancestro — the hands turning vision into reality. Every bolt tightened, every wire connected, is a step toward freedom for a family or business.',
            'You’ll gain access to consistent, high-paying projects through our dealer portal. Our project managers handle permits, credit, and materials, so you can focus on what you do best: building.',
            'We train all teams on our quality, safety, and speed standards — elevating you into a regional elite of renewable builders. Your work will stand as a legacy across rooftops and charging stations throughout the continent.',
            'When you install with Ancestro, you’re not a contractor. You’re a warrior of light building the new grid.',
        ],
    },
    {
        image: image3.src,
        heading: 'Project Managers',
        paragraphs: [
            'The conductors of creation.',
            'Ancestro Project Managers are the orchestrators ensuring that every project flows from sale to installation with perfection. You will lead communication between clients, installers, and finance teams — guiding each project like a symphony of precision and trust.',
            'Our PMs are trained in leadership, logistics, and client experience. We give you the tools and autonomy to coordinate construction across multiple regions, manage schedules, and keep customers informed at every step.',
            'This is not corporate management — this is operational mastery driven by purpose. You’ll see your work come alive on rooftops, in charging hubs, and in the smiles of clients who now live energy-free.',
            'Your leadership keeps the movement’s heart beating.',
        ],
    },
    {
        image: image4.src,
        heading: 'Credit Analysts',
        paragraphs: [
            'The protectors of financial balance.',
            'Credit Analysts at Ancestro ensure that every customer financed truly qualifies for energy freedom. You’ll review applications in your assigned country, analyzing documentation and payment capacity while maintaining fairness and ethics.',
            'This role blends logic and intuition — using numbers and human understanding to extend access responsibly. Your precision safeguards our investors, clients, and installers alike.',
            'You’ll receive full training in our proprietary credit evaluation system and ongoing mentorship from our finance division. With every approval, you help another home or business join the grid — while protecting the long-term stability of the ecosystem.',
            'You are the gatekeeper of trust, balancing growth with wisdom.',
        ],
    },
    {
        image: image5.src,
        heading: 'Financial Analysts',
        paragraphs: [
            'The architects of prosperity.',
            'Financial Analysts turn energy into equity. You’ll study each project, from cash flow and CAPEX to taxes and investor returns, ensuring Ancestro remains one of the most profitable and transparent platforms in LATAM.',
            'We’ll equip you with financial modeling tools, training in international green finance, and direct collaboration with global partners. You’ll analyze not just numbers, but impact — translating sustainability into stable returns.',
            'This role requires focus, strategy, and vision. Every report you deliver helps secure institutional investment, expanding our reach to more homes, more communities, more light.',
            'You are the architect behind the flow of abundance.',
        ],
    },
    {
        image: image6.src,
        heading: 'Marketing Coordinator',
        paragraphs: [
            'Bridging the Vision and the Village.',
            'Marketing Coordinators are the messengers of Ancestro — carrying the story of light into every community we serve. You’ll be the pulse between national strategy and local impact, transforming approved campaigns into real leads, real events, and real conversations.',
            'Each cluster depends on your creativity and precision. You’ll run local ad campaigns, plan community activations, and make sure that every family or business who needs energy freedom knows our name.',
            'You’ll spend part of your week in the field — meeting people, partnering with local venues, seeing the difference your work makes. The rest, you’ll collaborate remotely with national leadership to ensure your cluster stays aligned and growing.',
            'This is not a desk job. It’s an invitation to shape the voice of a movement — to build awareness that changes how people live, save, and power their homes. You’ll be paid a base salary, plus bonuses tied to the growth of your region’s sales.',
            'When you coordinate for Ancestro, you’re not pushing ads. You’re amplifying independence. You’re helping entire cities rise. You’re the voice of the new energy.',
        ],
    },
];


function SectionItems() {
     const [modalOpen, setModalOpen] = useState(false);
    return (
        <section className="w-full bg-black">
            <div className="max-w-[1550px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-32 2xl:px-40 py-20 sm:py-28 lg:py-32">
                <div className="flex flex-col gap-y-32 lg:gap-y-40">
                    {sections.map((section, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    } items-center gap-12 lg:gap-20 xl:gap-28`}
                            >
                                {/* Image – Always first on mobile, alternates on desktop */}
                                <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[480px] xl:w-[568px] flex-shrink-0">
                                    <div className="relative w-full aspect-[568/534] rounded-2xl overflow-hidden shadow-2xl">
                                        <img
                                            src={section.image}
                                            alt={section.heading}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>


                                {/* Text Content */}
                                <div className="flex-1 text-center lg:text-left max-w-[686px]">
                                    <h2 className="font-helvetica font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight text-white mb-6 lg:mb-8">
                                        {section.heading}
                                    </h2>

                                    <div className="space-y-5 lg:space-y-6">
                                        {section.paragraphs.map((para, i) => (
                                            <p
                                                key={i}
                                                className="font-helvetica font-normal text-base sm:text-lg lg:text-[18px] leading-[1.55] lg:leading-[24px] text-white/90"
                                            >
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                    <Button text={"Apply Now"} onClick={() => setModalOpen(true)} classes={" mt-[20px] "} textClasses={"font-haas font-bold !text-[#F8B03B] text-[15px] mt-[10px]"} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
             <SalesRepresentativeForm
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
        </section>
    );
}

export default SectionItems;