
export default function SplashLander() {

    return (
        <div 
            className="mainText"
            style={{
            position: "relative",
            maxWidth: "100%",
            height: "55vh",
            marginTop: "20px",
            overflowX: "hidden",
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px"
        }} 
        >
            <div
                key="lander"
                className="panel"
                style={{
                    position: "relative",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                }}
            >
                <h1 className="splashH1">AI resume agent</h1>
                <h3 style={{marginTop: "0px", marginBottom: "0px", justifySelf: "center"}}>created by Philip Ikani</h3> 
                <h3 style={{marginTop: "0px", marginBottom: "0px", justifySelf: "center"}}> powered by the latest ai models from OpenAi.</h3>
                <h5 className="teaserLandingText" style={{width: "70%", justifySelf: "center", marginTop: "10px", textAlign: "center"}}>
                    Chat with an Ai powered agent to find out about Philip's prior experience as well as how Philip will be a great fit for your team! Let's go! 🚀. 
                </h5>
            </div>
        </div>
        
    )
}