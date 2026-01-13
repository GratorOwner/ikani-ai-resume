import { Link } from "react-router-dom";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
{/*import { FiMail } from "react-icons/fi";*/}

interface TitleBarProps { onContactClick: () => void; }

export default function TitleBar({ onContactClick }: TitleBarProps) {
  return (
    <header className="titlebar">
      <div className="titlebar-left">
        <Link to="/" className="titlebar-logo">
          Phil's AI Resume Agent
        </Link>
      </div>

      <nav className="titlebar-center">
        {/**This button scrolls page to chat box */}
        <Link to="/chat" className="titlebar-link">Chat</Link>

        {/**This button scrolls page to work history panel */}
        <Link to="/history" className="titlebar-link">History</Link>

        {/**This button scrolls page to a section that lets teh user learn about the
         * underlying architecture of the app.
         */}
        <Link to="/learn" className="titlebar-link">Learn</Link>
      </nav>

      <div className="titlebar-right">
        <button className="contact-btn" onClick={onContactClick}>
          {/*<FiMail size={20} />*/}Contact
        </button>
      </div>
    </header>
  );
}
