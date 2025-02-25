import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Section = ({ id, title, children }) => {

    const { ref, inView } = useInView({
    triggerOnce: false, // Permite que la animación se repita
    threshold: 0.2, // Se activa cuando el 20% de la sección es visible
  });
  return (
    <motion.section
      ref={ref}
      id={id}
      className="section"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2>{title}</h2>
      <p>{children}</p>
    </motion.section>
  );
};

export default Section;
