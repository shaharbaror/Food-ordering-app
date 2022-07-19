import React from 'react';

import styles from './Header.module.css';

const Header = (props) => {
    return <header className={styles.header} >
         <h1>React Meals</h1>
         <div className={styles.cart}>
            <h3>Your cart</h3>
            <div className={styles.numbers} >3</div>
         </div>
         </header>
};

export default Header;