  'use client';
  import Image from 'next/image';
  import React, { useState } from 'react';

  type FAQItem = {
    question: string;
    answer1: string;
    answer2?: string;
    answer3?: string;
    answer4?: string;
    answer5?: string;
    image?: string;
  };

  export default function Benefits(){
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqData: FAQItem[] = [

      {
        question: 'We offer to our human capital',
        answer1:
          'A relaxed and stress-free work environment with stability that enables you to channelize energies towards positive results at work.',
        answer2:
          'An equal opportunity employer with diverse workforce, excelling in a safe and harassment free environment.',
        image: '/Gallery/acordian1.webp',
      },
      {
        question: 'Comprehensive compensation plans',
        answer1:
          'You will have one of the best in the industry – competitive pay structure, bonuses and benefit programs. Employees are covered for retiral benefits with provident fund and gratuity schemes.',
        image: '/Gallery/acordian2.webp',
      },
      {
        question: 'Insure the human capital',
        answer1:
          'We offer invaluable support during life’s most challenging moments of our employees by offering a comprehensive health insurance to the employees, dependents and parents.',
        answer2:
          'We also offer financial security assurance to employee’s family with a Term Insurance (life insurance) protection.',
        image: '/Gallery/acordian3.webp',
      },
      {
        question: 'Career, stability, and progression',
        answer1:
          'Mirafra believes in innovation, creativity and skill excellence. We offer a wide range of amazing opportunities to boost work knowledge, develop and enhance leadership abilities, and expand technical and non-technical skills.',
        answer2:
          'Varied options of working in different projects, ODCs, technologies, locations and teams.',
        answer3:
          'Major focus on Learning and Development through extensive and continual offering of Technical and Soft skill training programs. Well established CoEs at Hyderabad and Manipal for training and grooming few handpicked exceptional freshers.',
        answer4:
          'Guidance of Managers as Mentors in learning and career support.',
        answer5:
          'Ample opportunities to prove and move up in the career ladder or move lateral or cross-functional for the growth and stability.',
        image: '/Gallery/acordian4.webp',
      },
      {
        question: 'Assistance to the parent employees',
        answer1:
          'Offering of Maternity Benefits and Paternity Leaves to take care of the new born to enable them to assist their spouses and actively engage in child’s early stage.',
        answer2:
          'We also offer extended maternity leave in certain complex cases on agreed terms.',
        image: '/Gallery/acordian5.webp',
      },
      {
        question: 'Personal time, well-being and work-life balance',
        answer1:
          'We value personal time, wellbeing, and work-life balance and hence employees are encouraged to take personal paid time off by availing Earned Leaves or Casual Leaves.',
        answer2:
          'Sick leaves are provided to take a break for wellness, recovery and self-care.',
        answer3:
          'Bereavement leave is offered as mark of support during the time of grief.',
        answer4:
          'Flexi work hours and hybrid work mode are the USP of Mirafra for many years now.',
        answer5:
          'Open-door approach has been adopted to make employees at ease to communicate with hire-ups without any bureaucratic hassles.',
        image: '/Gallery/acordian5.webp',
      },
      {
        question: 'Merry merry @mirafra',
        answer1:
          'We keep the Mirafra environment and work floor alive, vibrant and happy. Celebrations and Fun is always on the cards in the form of festivals, birthdays, sports events, team outings, casual meets and many more to keep employees well connected and relaxed at work place.',
        image: '/Gallery/acordian6.webp',
      },
      {
        question: 'Culture of appreciation',
        answer1:
          'While learning and development is one of the focus areas, Mirafra also fosters a culture of appreciation by recognizing and rewarding deserving talent and motivating others to join elite performers.',
        image: '/Gallery/acordian6.webp',
      },
      {
        question: 'Refer a Friend program',
        answer1:
          'We offer a rewarding Refer a Friend program to our employees, recognizing their crucial contribution to assembling strong and effective teams. We deeply value and trust in our employees’ referrals.',
        answer2: 'Referrals help build stronger, more aligned teams.',
        image: '/Gallery/acordian7.webp',
      },
    ];

    const toggleAccordion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    return (
      <div className="px-2 md:px-5 py-10 md:py-16 bg-[linear-gradient(315.61deg,_#FFFFFF_53.51%,_#F2FAFF_91.44%)]">
        <div className="container p-0">
          <h2 className='text-3xl md:text-5xl text-center mb-10'>Benefits</h2>

          <div className="max-w-6xl mx-auto space-y-4">
            {faqData.map((item, index) => {
              const answers = [item.answer1, item.answer2, item.answer3, item.answer4, item.answer5].filter(Boolean);
              return (
                <div key={index} className="bg-[#FFFFFF] border border-[#EFEFEF] md:max-w-6xl  w-full rounded shadow-sm ">
                  <div
                    className="flex justify-between items-center p-8  cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') toggleAccordion(index);
                    }} >
                    <h4 className="text-xl font-normal text-[#000000]">{item.question}</h4>
                    {openIndex === index ? (
                      <Image src="/minus.svg" alt="Collapse" height={31} width={31} />
                    ) : (
                      <Image src="/plus.svg" alt="Expand" height={31} width={31} />
                    )}
                  </div>

                  {openIndex === index && (


                    <div>
                      <div className='px-6'>
                        <hr className='border-[#EFEFEF] border-t'/>
                      </div>

                      <div className="w-full flex flex-col md:flex-row justify-between gap-4 p-4 md:p-8">
                        <div className="md:w-1/2 p-4">
                          <ul className="list-disc  space-y-2 list-outside ">
                            {answers.map((ans, idx) => (
                              <li key={idx} className='text-[#4F4F4F] text-base'>{ans}</li>
                            ))}
                          </ul>
                        </div>
                        {item.image && (
                        
                          <div className="md:w-1/2 flex justify-center items-start ">
                            <Image
                              src={item.image}
                              alt="accordion"
                              height={400}
                              width={400}
                              className="rounded w-full"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

