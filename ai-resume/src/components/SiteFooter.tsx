import { Button } from "@mui/material";


export default function SiteFooter() {
    return (
        <div className="site-footer">
            {/**This is the last section of the site.
             * It should contain the following:
             *      -Credit for any items I used on my site.
             *      -Contact info. Make it a pop up modal.
             *      -Site powered by: A modal with the symbols behind the site.
             */}
             <div className="site-footer-child credits">
                <Button>Site credits</Button>
             </div>
             <div className="site-footer-child contact-info-footer">
                <Button>Contact Philip Ikani</Button>
             </div>
             <div className="site-footer-child site-about">
                <Button>Like the site? Learn more here</Button>
             </div>
        </div>
    );
}