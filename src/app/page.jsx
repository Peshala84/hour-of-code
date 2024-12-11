'use client';
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from 'react';

const TimelineItem = ({
  company,
  period,
  description,
  image,
  position
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentElement = document.querySelector(`[data-company="${company}"]`);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [company]);

  return (
    <div 
      data-company={company}
      className={`
        relative sm:w-1/2 px-4 sm:px-10
        ${position === 'left' ? 'sm:left-0' : 'sm:left-1/2 '}
        transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      <Image
        src={image}
        alt={`${company} logo`}
        width={40}
        height={40}
        className={`
          hidden sm:block
          absolute top-8 z-10 rounded-full 
          transition-transform duration-300 hover:scale-110
          ${position === 'left' ? '-right-5' : '-left-5'}
        `}
      />

      <div 
        className="
          relative p-5 rounded-md bg-hour-of-code-tertiary 
          transition-all duration-500 
          hover:shadow-lg hover:scale-[1.03] h-[200px] md: m-7
        "
      >
        <h2 className="text-3xl font-bold">{company}</h2>
        <small className="block mb-3 text-sm font-semibold text-gray-600">{period}</small>
        <p className="text-lg ">{description}</p>
        {position === 'left' ? (
          <div className="
            hidden md:block
            absolute top-7 right-[-15px] z-1 
            border-t-[15px] border-b-[15px] 
            border-t-transparent border-b-transparent 
            border-l-[15px] border-l-hour-of-code-primary-dark
          "></div>
        ) : (
          <div className="
            hidden md:block
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqItems = [
        {
          question: 'What is ACM Hour of Code?',
          answer: 'ACM Hour of Code is an interactive session designed to introduce participants to coding and its applications. This year’s event focuses on Python and AI.',
        },
        {
          question: 'When and where will it be held?',
          answer: 'The event will take place on 12th December, from 4 PM to 6 PM, at S104 Hall, UCSC.',
        },
        {
          question: 'Who can participate in the event?',
          answer: 'The event is open to all UCSC students, regardless of their coding experience.',
        },
        {
          question: 'How do I register for the event?',
          answer: 'Registration links will be shared on our social media pages. Be sure to register before the deadline to secure your spot.',
        },
        {
          question: "What should I bring to the session?",
          answer: 'Participants are encouraged to bring a laptop to follow along with the coding exercises. Ensure your device is charged and has Python installed',
        },
      ];

  const timelineData = [
        {
          company: 'Introduction',
          period: '16:00 PM- 16:05 PM',
          description: 'Introduction Session By ACM & introducting The Guest Speaker',
          image: '/one.png',
          position: 'left'
        },
        {
          company: 'Speaker Session',
          period: '16:05 PM - 16:50 PM',
          description: 'Session By Guest Speaker',
          image: '/two.png',
          position: 'right'
        },
        {
          company: 'Explain Session',
          period: '16:50 PM - 17:00 PM',
          description: 'Explain The Game Guidelines',
          image: '/three.png',
          position: 'left'
        },
        {
          company: 'Competition Session',
          period: '17:00 PM - 18:00 PM',
          description: 'Hour Of Code Games',
          image: '/four.png',
          position: 'right'
        },
        {
          company: 'Awarding Ceremony Session',
          period: '18:00 PM - 18:10 PM',
          description: 'Awarding Ceremony',
          image: '/five.png',
          position: 'left'
        },
        {
          company: 'Final Session',
          period: '18:10 PM',
          description: 'Vote Of Thanks And Closing Remarks',
          image: '/six.png',
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
      
      <div 
        className={`
          my-9 bg-hour-of-code-secondary w-full md:w-[50%] h-16 
          flex justify-center items-center rounded-r-3xl sm:mb-6
          
        `}
      >
        <h1 className="text-xl md:text-4xl">Agenda for HOC 24</h1>
      </div>
      
      <div className="relative max-w-[1200px] mx-auto my-12 md:my-8 px-4 ">
        {/* Vertical Line */}
        <div className="
          hidden sm:block
          absolute w-1.5 h-full bg-hour-of-code-secondary-dark
          left-1/2 -ml-0.5 z-[-1] 
          animate-moveline
        "></div>

        {/* Timeline Items */}
        <div className="relative">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
      
      <div 
        className={`
          my-9 bg-hour-of-code-secondary w-full md:w-[50%] h-16 
          flex justify-center items-center rounded-r-3xl
          
        `}
      >
        <h1 className="text-xl md:text-4xl">FAQ</h1>
      </div>
      
      <div className="m-4 md:m-20">
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`
                overflow-hidden border rounded-md 
                transition-all duration-500
                transform hover:scale-[1.01] hover:shadow-md
              `}
            >
              <button
                className={`
                  w-full text-left px-4 py-3 font-medium text-lg 
                  transition-all duration-300
                  ${activeIndex === index ? 'bg-hour-of-code-secondary-dark text-white' : 'shadow-2xl text-gray-900'}
                `}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index ? 'true' : 'false'}
              >
                <span>{item.question}</span>
                <i 
                  className={`
                    bx ${activeIndex === index ? 'bxs-chevron-up-circle' : 'bxs-chevron-down-circle'} 
                    text-xl transition-transform duration-300
                    ${activeIndex === index ? 'rotate-180' : 'rotate-0'}
                  `}
                ></i>
              </button>
              <div
                className={`
                  px-4 overflow-hidden transition-all duration-500 ease-in-out
                  ${activeIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
                `}
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