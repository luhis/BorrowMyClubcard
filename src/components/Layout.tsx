import React, { PropsWithChildren } from "react";
import { Button, Container } from "react-bulma-components";
import { Link } from "gatsby";

import CookieConsent from "./CookieConsent";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container max>
      <main>{children}</main>
      <footer>
        <Button.Group>
          <Link to="/privacyPolicy">Privacy Policy</Link>
          <span>© {new Date().getFullYear()} Mangaji Lrd</span>
        </Button.Group>
        <CookieConsent />
      </footer>
    </Container>
  );
};

export default Layout;
