import classes from './Layout.module.css';
import { MainNavigation } from './MainNavigation';

export const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </>
  );
};
