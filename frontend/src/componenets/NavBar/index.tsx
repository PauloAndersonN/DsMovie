//import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './style.css';

function Navbar(){

    return (
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a id="link" href="https://github.com/devsuperior" >
                    <div className="dsmovie-contact-container">
                        <img src="assets/img/github.svg"></img>
                        <p className="dsmovie-contact-link">/devsuperior</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    )
    
}
export default Navbar;