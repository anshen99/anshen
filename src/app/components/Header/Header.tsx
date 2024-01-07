'use client'
import styles from './style.module.css';
import {Link} from 'react-router-dom'
import AccountDetails from '../Auth/AccountDetails';
import AuthDetails from '../Auth/AuthDetails';
const Header=()=>{
    return(
        
        
            
            <nav className={`${styles.nav}`}>
                <Link to='/'>
                <img className={`${styles.logo}`} src='brown.Png'/>
                </Link>
                <Link to='/' className={`${styles.button}`} data-text="Awesome">
                    <span className={`${styles.actualText}`}>&nbsp;Anshen&nbsp;</span>
                    <span aria-hidden="true" className={`${styles.hover_text}`}>&nbsp;Anshen&nbsp;</span>
                    
                </Link>
                
                <ul className={`${styles.ul}`}>
                    <div className={`${styles.account}`}><AccountDetails/></div>
                    <AuthDetails/>
                    
                </ul>
                
            </nav>
            
            
        
    )
}
export default Header;