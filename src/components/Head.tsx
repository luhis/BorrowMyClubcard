/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from "react";

const metas = [
  {
    name: `author`,
    content: "Matthew McCorry",
  },
  {
    property: `description`,
    content: "",
  },
  {
    property: `keywords`,
    content: "",
  },
  {
    property: `geo.region`,
    content: "GB-ESX",
  },
  {
    name: `viewport`,
    content: "width=device-width, initial-scale=1",
  },
];

const SEO: FunctionComponent<{ readonly title: string }> = ({ title }) => {
  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      {metas.map(m => (
        <meta
          key={m.name}
          property={m.property}
          name={m.name}
          content={m.content}
        />
      ))}
    </>
  );
};
export default SEO;
