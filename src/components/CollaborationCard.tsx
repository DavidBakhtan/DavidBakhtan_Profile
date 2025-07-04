
import { motion } from 'motion/react';
import { useState } from 'react';

export const CollaborationCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const name = "David Bakhtan";
  const initials = name.split(" ").map(word => word[0]).join("").slice(0, 2);

  // Client logos data
  const clientLogos = [
    { id: 1, name: 'Maro Lens', logo: '/469c07a6-1c73-459f-a252-b0818dd04a2f.png', delay: 0.2 },
    { id: 2, name: 'Hope For Human', logo: '/29322301-ea7b-4a36-bf7a-a97ef373ff3b.png', delay: 0.4 },
    { id: 3, name: 'Belight Community', logo: '/unnamed.gif', delay: 0.6 },
    { id: 4, name: 'Touch Clean Services', logo: '/touch_clean_logo.png', delay: 0.8 },
  ];

  // دالة لتبديل الحالة عند النقر (تناسب الهواتف)
  const handleClick = () => {
    setIsHovered(prev => !prev);
  };

  return (
   <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      className="min-h-[350px] p-6 flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Avatar Waves */}
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full border-2 ${i % 2 === 0 ? 'border-blue-400/30' : 'border-purple-400/20'}`}
              style={{ width: `${(i + 2) * 36}px`, height: `${(i + 2) * 36}px`, willChange: 'transform, opacity' }}
              animate={{
                scale: isHovered ? [1, 1.2, 1] : [1, 1.1, 1],
                opacity: isHovered ? [0.3, 0.6, 0.3] : [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Floating Client Logos */}
        {clientLogos.map((client, index) => (
          <motion.div
            key={client.id}
            className="absolute w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 overflow-hidden"
            style={{
              top: `${Math.sin(index * 1.5) * 85 + 5}px`,
              left: `${Math.cos(index * 1.5) * 85 + 5}px`,
              willChange: 'transform, opacity',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isHovered ? 0.9 : 0,
              scale: isHovered ? 1 : 0,
              y: isHovered ? [0, 5, 0] : 0,
            }}
            transition={{
              duration: 0.5,
              delay: client.delay,
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="w-8 h-8 object-contain"
              onError={(e) => {
                // Fallback to gradient background if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.style.background = 'linear-gradient(45deg, #3b82f6, #8b5cf6)';
              }}
            />
          </motion.div>
        ))}

        {/* Profile Photo in Center */}
        <motion.div
          className="relative z-10 w-20 h-20 rounded-full overflow-hidden shadow-lg border-2 border-white/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-white text-2xl font-bold"
          style={{ willChange: 'transform, box-shadow' }}
          animate={{
            scale: isHovered ? 1.1 : 1,
            boxShadow: isHovered
              ? "0 0 20px rgba(59, 130, 246, 0.3)"
              : "0 0 0px rgba(59, 130, 246, 0)",
          }}
          transition={{ duration: 0.3 }}
        >
          {!imageError ? (
            <>
              <img
                src="/profile_image.JPG"
                alt="David Bakhtan"
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
                onLoad={() => console.log('Profile image loaded successfully')}
              />
            </>
          ) : (
            <span className="text-white font-bold text-xl">{initials}</span>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="absolute bottom-6 left-6 text-left">
        <h3 className="text-xl font-semibold mb-3 text-white font-grotesk">
          Collaboration
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Trusted by amazing clients worldwide
        </p>
      </div>
    </motion.div>
  );
};
