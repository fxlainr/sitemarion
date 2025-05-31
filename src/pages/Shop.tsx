import { motion } from 'framer-motion';

const Shop = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-cream p-8"
    >
      <h1 className="text-4xl font-serif text-brown mb-8">Boutique</h1>
      <p className="text-brown">Section e-commerce à venir.</p>
    </motion.div>
  );
};

export default Shop;