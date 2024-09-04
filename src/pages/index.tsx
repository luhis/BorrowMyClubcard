import React from "react";
import { Columns } from "react-bulma-components";

import Layout from "../components/Layout";
import SEO from "../components/Head";

export const Head = () => <SEO title="Matthew McCorry CV" />;

const UsingTypescript: React.FC = () => {
  return (
    <Layout>
      <Columns>
        <Columns.Column size={3}>
        </Columns.Column>
        <Columns.Column>
        </Columns.Column>
      </Columns>
    </Layout>
  );
};

export default UsingTypescript;
