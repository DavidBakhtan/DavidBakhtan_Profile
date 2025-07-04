
import { useState, useEffect } from 'react';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { PullToRefresh } from '@/components/PullToRefresh';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import ExperienceNav from '@/components/ExperienceNav';
import Timeline from '@/components/Timeline';
import CareerHighlights from '@/components/CareerHighlights';
import ExperienceCTA from '@/components/ExperienceCTA';

const Experience = () => {
  useScrollToTop();
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRefresh = async () => {
    // Show loading state
    setIsVisible(false);
    
    // Simulate loading delay and then actually refresh the page
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Reload the entire page for a true refresh
    window.location.reload();
  };

  const experiences = [
    {
      title: "Software Tutor (Tech & Certificate Calls)",
      period: "2024 - Present",
      companies: ["VeroSkills"],
      location: "USA  | Remote",
      description: "I conduct live tutoring sessions to explain technical concepts and solve student challenges. I also lead assessment calls where I ask students questions, evaluate their responses, and determine their scores to decide whether they qualify for certification.",
      responsibilities: [
      "Deliver one-on-one tutoring sessions to students enrolled in tech and certificate programs, focusing on practical understanding and problem-solving.",
      "Conduct live assessment sessions by asking technical questions and evaluating student responses in real-time.",
      "Decide on certification eligibility based on student performance during evaluations.",
      "Provide personalized feedback and support to help students overcome learning challenges.",
      "Utilize video conferencing tools effectively to ensure smooth communication and screen sharing during sessions."
    ],
      achievements: [
        "Successfully guided over [X] students through course completion and certification.",
        "Improved student satisfaction scores through engaging and customized tutoring approaches.",
        "Reduced student dropout rate by providing consistent support and motivation.",
        "Developed structured evaluation criteria to ensure fair and accurate assessment results.",
        "Received positive feedback from both students and program coordinators for clear communication and professionalism."
      ]
    },
    {
      "title": "Co-Founder, Media & Technical Lead",
      "period": "2024 – Present",
      "companies": ["Touch Clean Services"],
      "location": "Canada | Hybrid",
      "description": "Co-founded and manage the ongoing growth of Touch Clean Services, a fast-growing cleaning company. Oversee all aspects of technical development, marketing, and media content to support business expansion.",
      "responsibilities": [
        "Full-stack development of the company's booking and management platform",
        "Lead web design, user experience, and automation of service workflows",
        "Manage online booking system with real-time price calculation and payment integration",
        "Create and execute marketing strategies across social media and Google Ads",
        "Design branded media content (video, photo, social posts) for promotions and campaigns",
        "Collaborate with co-founder on business operations, hiring, and service expansion"
      ],
      "achievements": [
        "Co-founded a profitable and scalable service business in the Canadian market",
        "Developed a fully automated online booking system with dynamic pricing logic",
        "Built brand identity and marketing assets from the ground up",
        "Increased customer base to 500+ clients with high retention and satisfaction",
        "Generated consistent growth through data-driven marketing and community engagement"
      ]
    },
    {
      title: "Mobile App Developer",
      period: "2022 - 2023",
      companies: ["Tomorrow Services"],
      location: "Lebanon | On-site",
      description: "Contributed to mobile and web app development projects with a focus on version control, performance optimization, and cross-team collaboration.",
      responsibilities: [
         "Managed feature deployments and bug fixes using Git and SVN to maintain version consistency",
         "Collaborated with design, QA, and product teams to ensure smooth feature delivery",
         "Implemented UI components following Material Design principles",
         "Optimized app performance by identifying and resolving code inefficiencies"
        ],
      achievements: [
        "Reduced bug backlog by 35% through efficient debugging and version control practices",
        "Improved app load times by 25% with performance enhancements",
        "Received recognition from the product team for consistently delivering features ahead of schedule"
      ]
    },
    {
      title: "Android Developer ",
      period: "2018 - 2021",
      companies: ["Wiruda"],
      location: "Lebanon | On-site",
      description: "Worked on the end-to-end development of Android applications, contributing to planning, design, custom UI implementation, and secure deployment.",
      responsibilities: [
        "Participated in the full application development lifecycle: planning, design, coding, testing, and deployment",
        "Built and integrated custom UI components to enhance user experience and interface engagement",
        "Handled version control and continuous delivery using Git and SVN",
        "Ensured app security and stability by promptly fixing bugs and addressing vulnerabilities"
      ],
      achievements: [
        "Successfully launched multiple Android apps with a user base exceeding 10K+ downloads",
        "Improved app UI responsiveness through advanced custom component design",
        "Maintained zero critical security issues throughout active development period"
      ]
    }
  ];

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Navigation */}
        <Navigation />

        <div className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Career & Experience
              </h1>
              
              <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
                A timeline of my professional journey in technology, automation, and business innovation
              </p>

              <Timeline experiences={experiences} />
              <CareerHighlights />
              <ExperienceCTA />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PullToRefresh>
  );
};

export default Experience;
