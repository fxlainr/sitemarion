import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-brown/40 backdrop-blur-sm" />
      
      <div className="relative z-10 text-center p-8">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif text-cream mb-6"
        >
          Le Cottage de Marion
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto leading-relaxed"
        >
          Art inspiré de la nature, du folklore et des symboles anciens.
          Une invitation à ralentir et ressentir.
        </motion.p>
      </div>
    </motion.div>
  );
}