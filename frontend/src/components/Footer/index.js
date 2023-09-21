import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div id='footer-wrapper'>
            <div id='footer-inner-wrap'>
                <div>
                    <p>© Lairbnb 2023, inc.</p>
                </div>
                <div>
                    <p>•</p>
                </div>
                <div>
                    <NavLink exact to='/about'>About</NavLink>
                </div>
                <div>
                    <p>•</p>
                </div>
                <div>
                    <NavLink exact to='/attributions'>Attributions</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Footer;
