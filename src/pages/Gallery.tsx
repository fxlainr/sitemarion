import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-cream p-8"
    >
      <h1 className="text-4xl font-serif text-brown mb-8">Galerie</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Gallery items will be added here */}
      </div>
    </motion.div>
  );
};

export default Gallery;