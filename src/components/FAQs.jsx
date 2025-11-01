import { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

export default function FAQs() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "Emerging Technologies",
      answer: "We leverage cutting-edge biotechnology platforms and methodologies to advance drug discovery research.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "bg-[#4e74d0]",
      detailedQuestions: [
        {
          q: "What technologies do you use for drug discovery?",
          a: "We utilize advanced techniques including high-throughput screening, computational chemistry, CRISPR gene editing, and AI-driven molecular modeling to accelerate drug discovery processes."
        },
        {
          q: "How do you stay current with biotechnology advances?",
          a: "Our team actively participates in international conferences, collaborates with leading research institutions, and maintains partnerships with pharmaceutical companies to stay at the forefront of innovation."
        },
        {
          q: "Do you offer technology training programs?",
          a: "Yes, we provide training workshops and capacity-building programs for researchers and students interested in modern biotechnology techniques."
        }
      ]
    },
    {
      question: "Funding & International Organizations",
      answer: "We monitor global health funding trends and actively seek partnerships to support our mission.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-[#8eb348]",
      detailedQuestions: [
        {
          q: "What funding sources support your research?",
          a: "We receive support from various sources including government grants, international health organizations, private foundations, and strategic partnerships with pharmaceutical companies."
        },
        {
          q: "How can organizations partner with BioRep Labs?",
          a: "Organizations interested in collaboration can contact us directly. We're open to research partnerships, funding opportunities, and joint ventures aligned with our mission."
        },
        {
          q: "Do you work with WHO and other UN agencies?",
          a: "Yes, we actively monitor WHO initiatives and collaborate with international organizations focused on neglected tropical diseases and global health challenges."
        }
      ]
    },
    {
      question: "Ecosystem",
      answer: "BioRep Labs is part of Rwanda's growing biotech ecosystem, contributing to scientific advancement in the region.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-[#4e74d0]",
      detailedQuestions: [
        {
          q: "What is Rwanda's biotech ecosystem?",
          a: "Rwanda's biotech ecosystem includes research institutions, regulatory bodies like Rwanda FDA, the African Medicines Agency (AMA), startups, and established companies working together to advance life sciences."
        },
        {
          q: "How does BioRep Labs contribute to the ecosystem?",
          a: "We contribute through cutting-edge research, capacity building, technology transfer, and collaboration with academic institutions and industry partners in the region."
        },
        {
          q: "Are there opportunities for local researchers?",
          a: "Yes, we actively seek to engage local talent through internships, research positions, and collaborative projects with Rwandan universities and research centers."
        }
      ]
    },
    {
      question: "Events",
      answer: "Please check back, there are currently no events posted.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "bg-[#8eb348]",
      detailedQuestions: [
        {
          q: "What types of events does BioRep Labs host?",
          a: "We typically organize scientific symposiums, research seminars, technology workshops, and networking events for the biotech community."
        },
        {
          q: "How can I stay informed about upcoming events?",
          a: "You can subscribe to our newsletter or follow our social media channels. We'll also update this section when new events are scheduled."
        },
        {
          q: "Can external researchers present at your events?",
          a: "Yes, we welcome presentations from external researchers. Please contact us with your proposal and we'll review opportunities for collaboration."
        }
      ]
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-12 md:py-24 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation animation="scroll-animate-fade">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Learn more about our research, partnerships, and the biotech ecosystem in Rwanda.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="scroll-animate" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl md:rounded-3xl shadow-lg border-2 p-6 md:p-8 transition-all cursor-pointer ${
                  expandedIndex === index ? 'border-[#4e74d0] shadow-2xl' : 'border-gray-100 hover:shadow-xl'
                }`}
                onClick={() => toggleExpand(index)}
              >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 ${faq.color} rounded-2xl flex items-center justify-center text-white`}>
                  {faq.icon}
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-400 transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{faq.answer}</p>

              {/* Expanded Content */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  expandedIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-6 mt-6 border-t border-gray-200 space-y-6">
                  {faq.detailedQuestions.map((item, qIndex) => (
                    <div key={qIndex} className="space-y-2">
                      <h4 className="font-semibold text-gray-900 flex items-start gap-2">
                        <span className="text-[#4e74d0] mt-1">Q:</span>
                        {item.q}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed pl-6">
                        <span className="font-semibold text-[#8eb348]">A:</span> {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-500">
                Click to {expandedIndex === index ? 'collapse' : 'expand'}
              </div>
            </div>
          ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
