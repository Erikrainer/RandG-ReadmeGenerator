import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaHome, FaInfoCircle, FaBriefcase,  FaEnvelope, FaFile} from 'react-icons/fa';
import "./style.css"
function NavTabs() {
  const currentPage = useLocation().pathname;
  return (
    <nav className="navbar-expand-sm border-info border-bottom border-1" id="navBar">
      <div className="navbar-collapse justify-content-between">
    <h1 className="navbar-brand m-3 fw-bold" id="headerTitle">RandG Readme Generator</h1>
    <a className="m-4" id="icons" href="https://github.com/Erikrainer" target="_blank" rel="noopener noreferrer">
      <FaGithub size={50} style={{ color: '#2e94b9' }} />
    </a>
    </div>
    </nav>
  );
}

export default NavTabs;