
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { WavyBackground } from '@/components/ui/wavy';

export const CTACard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="min-h-[350px] p-6 flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-blue-500/50 hover:border-blue-400 transition-all duration-300"
    >
      {/* Wavy Background */}
      <WavyBackground className="absolute inset-0">
        <div />
      </WavyBackground>
      
      {/* Content */}
      <div className="relative z-20 text-center">
        <h3 className="text-xl font-semibold mb-4 text-white font-grotesk">
          Let's Work Together
        </h3>
        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
          on your next project
        </p>
        
        <Button
          asChild
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
        >
          <a href="mailto:davidbakhtan@gmail.com">
            davidbakhtan@gmail.com
          </a>
        </Button>
      </div>
    </motion.div>
  );
};
