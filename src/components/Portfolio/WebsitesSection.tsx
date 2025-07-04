
import { Upload } from 'lucide-react';
import ProjectCard from './ProjectCard';

const WebsitesSection = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="w-full">
          <ProjectCard
            title="Hope For Human"
            description="An end-to-end web platform built for a humanitarian organization to raise awareness, manage donations, and engage volunteers. Built using React.js, Tailwind CSS, and Supabase with real-time database functionality, secure form handling, and SEO optimization."
            technologies={['React.js', 'Tailwind CSS', 'Supabase', 'Hostinger', 'TypeScript', 'Python']}
            liveUrl="https://hope4human.ca"
            codeUrl="https://github.com/DavidBakhtan/hope4human"
            featured={true}
            img="Screenshot1.png"
            colorTheme='blue'
            width='full'
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="w-full">
          <ProjectCard
            title="Belight Community Mobile App"
            description="A dedicated platform that brings Arabic Christian content to users' fingertips. Developed using Jetpack Compose with clean architecture and Shared Module integration. Features seamless backend service integration and real-time database for high performance."
            liveUrl="https://play.google.com/store/apps/details?id=tv.belight.mobile.android&hl=en"
            featured={true}
            img="unnamed.png"
            colorTheme='yellow'
            width='half'
          />
        </div>

        <div className="w-full">
          <ProjectCard
            title="Maro Lens Website"
            description="A modern, responsive web project built with React and Tailwind CSS, featuring smooth animations and elegant design. Includes functional backend integration for direct email communication via contact forms with refined interface for creative brand identity."
            liveUrl="https://marolens.com"
            codeUrl="https://github.com/DavidBakhtan/Maro-Lens"
            featured={true}
            img="Screenshot2.png"
            colorTheme='purple'
            width='half'
          />
        </div>
      </div>
    </div>
  );
};

export default WebsitesSection;
