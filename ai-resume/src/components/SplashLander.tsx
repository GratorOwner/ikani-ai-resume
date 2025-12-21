import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";



export default function SplashLander() {
    const [showSplash, setShowSplash] = useState(true);
    const [showLander, setShowLander] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 5000)
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            style={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
        }} 
        >
            <AnimatePresence
                onExitComplete={() => {setShowLander(true);}}>
            {showSplash ? (
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {duration: 1.5}}}
                exit={{opacity: 0, scale: 0, transition: {duration: 1.5}}}
                key="splashText"
                className="splash"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh", 
                }}
                >
                    <h1>Welcome to a new type of resume</h1>
                    <p>Interact with my experience like you would an AI agent.</p>
                </motion.div>
            ) : null}
            </AnimatePresence>

            {showLander && (
                <motion.div
                key="lander"
                initial={{ height: "10vh" }}
                animate={{ height: showLander ? "100vh" : "10vh" }}
                transition={{ duration: 0.6 }}
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100vw",
                    background: "lightblue",
                }}
            >
                <h2>Congrats! We now have the transition from splash to lander.</h2>
            </motion.div>
            )}
        </div>
        
    )
}