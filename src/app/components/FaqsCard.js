'use client'

import { useState } from 'react'

export default function FaqsCard() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What is Educative Unlimited?",
      answer: "Educative Unlimited is an online learning platform that provides interactive and text-based coding courses for developers and tech professionals. Unlike traditional video-based learning platforms, Educative focuses on a text-based, hands-on learning approach, where learners can practice coding directly in the browser as they progress through the learning materials."
    },
    {
      question: "Does Educative have free courses?",
      answer: "Yes, Educative offers several free courses to help you get started with programming and software development."
    },
    {
      question: "Can I pay in installments?",
      answer: "Yes, we offer flexible payment options including monthly installments for our annual subscriptions."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access until the end of your billing period."
    },
    {
      question: "What is Educative Unlimited?",
      answer: "Educative Unlimited gives you access to our entire course library, including new courses as they're released."
    }
  ]

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border-b border-gray-100 last:border-0"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full flex justify-between items-center py-4 text-left hover:text-gray-900 transition-colors"
            >
              <span className="text-gray-700 font-medium">{faq.question}</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transform transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            {openIndex === index && (
              <div className="pb-4 text-gray-600 leading-relaxed animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}