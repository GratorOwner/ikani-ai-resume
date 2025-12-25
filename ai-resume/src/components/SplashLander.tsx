import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";



export default function SplashLander() {
    const [showSplash, setShowSplash] = useState(true);
    const [showLander, setShowLander] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 5000)
        return () => clearTimeout(timer);
    }, []);

    return (
        <div 
            className="mainText"
            style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px"
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
                    width: "100%",
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
                className="panel"
                initial={{ height: "10vh" }}
                animate={{ height: showLander ? "100vh" : "10vh" }}
                transition={{ duration: 0.6 }}
                style={{
                    position: "relative",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                }}
            >
                <h1>AI agent resumé</h1>
                <h3>created by Philip Ikani</h3>
                <p className="teaserLandingText">
                    Chat with an Ai powered agent to find out exactly what you want to know about Philip's 
                    prior experience and work history. 
                </p>
                <p className="teaserLandingText">
                    Find out exactly how Philip will be a great fit for your
                    team! Let's go! 🚀
                </p>
                <Button>Chat with my AI agent</Button>
                <Button>Check out an interactive work history summary</Button>
                <Button>Learn about this exciting new type of resume</Button>

            </motion.div>
            )}
        </div>
        
    )
}