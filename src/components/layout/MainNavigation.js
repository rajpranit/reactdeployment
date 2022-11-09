import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>My Quotes</h1>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to="/quotes" activeClassName={styles.active}>
                All Quotes
              </NavLink>
            </li>
            <li>
              <NavLink to="/quote-form" activeClassName={styles.active}>
                New Quote
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigation;
