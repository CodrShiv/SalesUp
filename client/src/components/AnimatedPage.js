import { motion } from "framer-motion";
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial={{ x:100 ,opacity: 0, }}
      animate={{ x: 0, opacity: 1, }}
      exit={{ x:-100, opacity: 0, }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
