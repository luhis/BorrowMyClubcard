import React, { useState } from "react";
import { Columns, Dropdown, Level } from "react-bulma-components";
import QRCode from "react-qr-code";
import {sample} from "lodash";

import Layout from "../components/Layout";
import SEO from "../components/Head";
import { Card, cards } from "../libs/cards";

export const Head = () => <SEO title="Borrow my Clubcard" />;

const UsingTypescript: React.FC = () => {
  const [card, setCard] = useState<Card>();
  return (
    <Layout>
      <Level>
        Supermarkets now often offer discounts to card members. Left it at home?  Borrow a card for your shop today and get the prices you deserve.
        <Dropdown onChange={(v: Card) => setCard(v)}>
          <Dropdown.Item value={undefined}>Please Select</Dropdown.Item>
          {cards.map(c => <Dropdown.Item value={c}>{c.shop}</Dropdown.Item>)}
        </Dropdown>

      </Level>
      {card ? <QRCode value={sample(card.number) || ''}></QRCode> : null}

    </Layout>
  );
};

export default UsingTypescript;
