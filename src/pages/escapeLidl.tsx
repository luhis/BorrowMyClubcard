import React from "react";
import Barcode from "react-barcode";

import Layout from "../components/Layout";
import SEO from "../components/Head";

export const Head = () => <SEO title="Escape Lidl" />;

//examples
// 0888007908163875130546
// 088800790{code from receipt}{date}

const UsingTypescript: React.FC = () => {
    const today = new Date();
    const barcode = `0888007908163875130546${today.getDate()}${today.getMonth()}${today.getFullYear() + 20}`;
  return (
    <Layout>
      <Barcode value={barcode}></Barcode>

    </Layout>
  );
};

export default UsingTypescript;
