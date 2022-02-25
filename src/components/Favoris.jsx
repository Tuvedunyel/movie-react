import Header from "../layout/Header";
import { motion } from "framer-motion"

function Favoris() {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
      <Header />
      <div className='container-narrow'>
        <h1>Ma liste</h1>
      </div>
    </motion.div>
  );
}

export default Favoris;
