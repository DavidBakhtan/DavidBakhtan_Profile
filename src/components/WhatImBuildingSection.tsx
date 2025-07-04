
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const projects = [
  {
    title: "API Gateway & Docs",
    description:
      "Building scalable API architectures with comprehensive documentation and monitoring",
    icon: "🔌",
  },
  {
    title: "Monitoring & Analytics",
    description:
      "Real-time monitoring solutions and data visualization dashboards for business insights",
    icon: "📊",
  },
  {
    title: "Design Systems",
    description:
      "Component libraries and design tokens for consistent user experiences across platforms",
    icon: "🎨",
  },
  {
    title: "User Onboarding",
    description:
      "Streamlined user journey optimization with interactive tutorials and progressive disclosure",
    icon: "👋",
  },
  {
    title: "DevOps Automation",
    description:
      "CI/CD pipelines, infrastructure as code, and automated deployment strategies",
    icon: "⚙️",
  },
  {
    title: "Integration Workflows",
    description:
      "Seamless third-party integrations and workflow automation for business processes",
    icon: "🔗",
  },
];

export const WhatImBuildingSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0.9, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="min-h-[350px] px-4 py-6 flex flex-col justify-center items-center relative overflow-hidden max-w-screen-lg mx-auto"
    >
      <h3 className="text-xl font-semibold mb-6 text-white font-grotesk">
        What I'm Building
      </h3>

      {isMobile ? (
        /* على الهاتف: بطاقات قابلة للتمرير أفقياً مع تعتيم متوسط */
        <div className="w-full overflow-x-auto flex gap-2 pb-4">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="
                flex-shrink-0 
                w-64 
                bg-slate-800/40 
                rounded-2xl 
                p-2 
                border 
                border-slate-700/50
                shadow-sm
              "
            >
              <div className="text-3xl mb-2">{proj.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-1">
                {proj.title}
              </h4>
              <p className="text-slate-200 text-sm">{proj.description}</p>
            </div>
          ))}
        </div>
      ) : (
        /* على المكتب/التابلت: بطاقات ثابتة في InfiniteMovingCards مع زيادة التباين والظل */
        <div className="flex-1 overflow-hidden w-full">
          <InfiniteMovingCards
            items={projects.map((proj, idx) => ({
              ...proj,
              /* نمرّر خاصية إضافية تُظهر نمط البطاقة المعدّل */
              cardClassName: `
                w-72
                bg-slate-800/40 
                rounded-2xl 
                p-2 
                border 
                border-slate-700/40 
                shadow-sm
                text-white
              `,
              titleClassName: "text-xl font-semibold text-white mb-2",
              descClassName: "text-slate-200 text-sm",
              iconClassName: "text-4xl mb-3",
              key: idx,
            }))}
            direction="right"
            speed="fast"
            pauseOnHover={true}
            className="h-full"
            /* إذا كانت مكتبتك تسمح بتمرير كلاس مخصص لكل بطاقة، استخدم cardClassName كما في المثال */
          />
        </div>
      )}
    </motion.div>
  );
};
