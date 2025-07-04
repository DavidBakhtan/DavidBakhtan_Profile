
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ExperienceCTA = () => {
  return (
    <div className="mt-16 text-center">
      <h3 className="text-2xl font-bold mb-4 text-slate-200">Ready to work together?</h3>
      <p className="text-slate-400 mb-8">Let's discuss how I can help automate and optimize your business operations</p>
      <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg">
        <Link to="/contact">Get in Touch</Link>
      </Button>
    </div>
  );
};

export default ExperienceCTA;
