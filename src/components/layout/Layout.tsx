import React, { ReactNode } from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => (
  <>
    <MainNavigation />
    <main className={classes.main}>{children}</main>
  </>
);

export default Layout;
