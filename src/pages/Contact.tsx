import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-cream p-8"
    >
      <h1 className="text-4xl font-serif text-brown mb-8">Contact</h1>
      <form className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block text-brown mb-2">Nom</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-brown/20 rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-brown mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-brown/20 rounded"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-brown mb-2">Message</label>
          <textarea
            id="message"
            rows={4}
            className="w-full p-2 border border-brown/20 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-teal text-white py-2 px-4 rounded hover:bg-teal/90 transition-colors"
        >
          Envoyer
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;