import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";



export default function SplashLander() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 5000)
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 1.5}}}
        exit={{opacity: 0}}
        className="splash"
        >
            <h1>Welcome to a new type of resume</h1>
            <p>Interact with my experience like you would an AI agent.</p>
        </motion.div>
    )
}