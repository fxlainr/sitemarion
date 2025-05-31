import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-cream p-8"
    >
      <h1 className="text-4xl font-serif text-brown mb-8">À propos</h1>
      <div className="prose prose-lg max-w-prose mx-auto">
        <p className="text-brown">
          Artiste inspirée par la Régence anglaise, le folklore et la nature, 
          je propose une exploration initiatique de notre mémoire sensible.
        </p>
      </div>
    </motion.div>
  );
};

export default About;