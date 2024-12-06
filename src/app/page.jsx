'use client';
import Image from "next/image";
import Head from "next/head";
import { useState } from 'react';


const TimelineItem = ({
  company,
  period,
  description,
  image,
  position
}) => {
  return (

    <div

      className={`
        relative w-1/2 px-4 sm:px-10 
        ${position === 'left' ? 'left-0' : 'left-1/2'}
        opacity-0 animate-movedown 
        animation-delay-${Math.floor(Math.random() * 6)}
      `}

    >
      <Image
        src={image}
        alt={`${company} logo`}
        width={40}
        height={40}
        className={`
          absolute top-8 z-10 rounded-full 
          ${position === 'left' ? '-right-5' : '-left-5'}
        `}
      />

      <div className="relative bg-hour-of-code-tertiary p-5 rounded-md">
        <h2 className="font-semibold text-lg">{company}</h2>
        <small className="block mb-3 text-gray-600">{period}</small>
        <p className="text-sm">{description}</p>
        {position === 'left' ? (
          <div className="
            absolute top-7 right-[-15px] z-1 
            border-t-[15px] border-b-[15px] 
            border-t-transparent border-b-transparent 
            border-l-[15px] border-l-hour-of-code-primary-dark
          "></div>
        ) : (
          <div className="
            absolute top-7 left-[-15px] z-1 
            border-t-[15px] border-b-[15px] 
            border-t-transparent border-b-transparent 
            border-r-[15px] border-r-hour-of-code-primary-dark
          "></div>
        )}
      </div>
    </div>
  );
};

export default function Home() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };


  const faqItems = [
    {
      question: 'What is MadHack 3.0?',
      answer: 'MadHack 3.0 is a coding competition where enthusiasts come together to showcase their skills in mobile app development. It is a platform to learn, collaborate, and compete in creating innovative solutions for real-world challenges.',
    },
    {
      question: 'Who can participate in MadHack 3.0?',
      answer: 'MadHack 3.0 is open to all undergraduate students! Whether you are a seasoned developer or just starting, we welcome participants of all skill levels and backgrounds.',
    },
    {
      question: 'How can I register for MadHack 3.0?',
      answer: 'To register, visit our website and navigate to the registration page. Fill in the required details for yourself and your team members (if applicable) to secure your spot.',
    },
    {
      question: 'Do I need a team to participate?',
      answer: 'Yes, for the Initial Round and the Final Hackathon, participants are required to form teams of three or four members each.',
    },
    {
      question: "What if I'm a beginner in coding? Can I still participate?",
      answer: 'Absolutely! MadHack 3.0 is designed for participants of all skill levels. It is a great opportunity for beginners to learn and for experienced coders to showcase their expertise.',
    },
    {
      question: 'Is the usage of Flutter mandatory for MadHack 3.0 projects?',
      answer: 'No, it is not mandatory to use Flutter for your projects in MadHack 3.0. While we have Flutter sessions to help you, you are free to use other frameworks or technologies that best suit your project requirements.',
    },
    {
      question: 'Is the usage of Flutter mandatory for MadHack 3.0 projects?',
      answer: 'No, it is not mandatory to use Flutter for your projects in MadHack 3.0. While we have Flutter sessions to help you, you are free to use other frameworks or technologies that best suit your project requirements.',
    },

  ];

  const timelineData = [
    {
      company: 'Alphabet Inc.',
      period: '2018-2019',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa aliquid deserunt. Officia voluptates ipsum veniam sapiente doloribus aliquam laudantium saepe maxime distinctio in.',
      image: '/google.png',
      position: 'left'
    },
    {
      company: 'Amazon Inc.',
      period: '2019-2020',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa aliquid deserunt. Officia voluptates ipsum veniam sapiente doloribus aliquam laudantium saepe maxime distinctio in.',
      image: '/amazon.png',
      position: 'right'
    },
    {
      company: 'Tesla Inc.',
      period: '2020-2021',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa aliquid deserunt. Officia voluptates ipsum veniam sapiente doloribus aliquam laudantium saepe maxime distinctio in.',
      image: '/tesla.png',
      position: 'left'
    },
    {
      company: 'Toyota Inc.',
      period: '2021-2022',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa aliquid deserunt. Officia voluptates ipsum veniam sapiente doloribus aliquam laudantium saepe maxime distinctio in.',
      image: '/toyota.png',
      position: 'right'
    },
    {
      company: 'Flipkart Inc.',
      period: '2021-2022',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa aliquid deserunt. Officia voluptates ipsum veniam sapiente doloribus aliquam laudantium saepe maxime distinctio in.',
      image: '/flipkart.png',
      position: 'left'
    },
    {
      company: 'Youtube Inc.',
      period: '2021-2022',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa aliquid deserunt. Officia voluptates ipsum veniam sapiente doloribus aliquam laudantium saepe maxime distinctio in.',
      image: '/youtube.png',
      position: 'right'
    }
  ];

  return (

    <>
      <Head>
      <link 
      href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' 
      rel='stylesheet'
      />

      </Head>
      <div className="my-9  bg-hour-of-code-secondary w-[50%] h-16 flex justify-center items-center rounded-r-3xl">
        <h1 className="md:text-4xl text-xl ">Agenda for HOC 24</h1>
      </div>
      <div className="relative max-w-[1200px] mx-auto my-24">
        {/* Vertical Line */}
        <div className="
          absolute w-1.5 h-full bg-hour-of-code-secondary-dark
          left-1/2 -ml-0.5 z-[-1] 
          animate-moveline
        "></div>

        {/* Timeline Items */}
        <div className="relative ">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}

            />
          ))}
        </div>
      </div>
      <div className="my-9 bg-hour-of-code-secondary w-[50%] h-16 flex justify-center items-center rounded-r-3xl">
        <h1 className="md:text-4xl text-xl ">FAQ</h1>
      </div>
      <div className="m-20">
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className=" border rounded-md overflow-hidden">
              <button
                className={` w-full text-left px-4 py-3 font-medium text-lg ${activeIndex === index ? 'bg-hour-of-code-secondary-dark text-white' : 'shadow-2xl text-gray-900'}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index ? 'true' : 'false'}
              >
                <span>{item.question}</span>
                <i className={` bx ${ activeIndex === index ? 'bxs-chevron-up-circle' : 'bxs-chevron-down-circle'} text-xl `}></i>
              </button>
              <div
                className={` px-4 overflow-hidden transition-[max-height]  ease-in-out ${activeIndex === index ? 'max-h-50' : 'max-h-0'}`}
              >
                <p className="py-2 text-black">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
