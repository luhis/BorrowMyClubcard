import React, { useState } from "react";
import { Dropdown, Level } from "react-bulma-components";
import QRCode from "react-qr-code";
import {sample} from "lodash";

import Layout from "../components/Layout";
import SEO from "../components/Head";
import { Card, cards } from "../libs/cards";
import Barcode from "react-barcode";

export const Head = () => <SEO title="Borrow my Clubcard" />;

const UsingTypescript: React.FC = () => {
  const [card, setCard] = useState<Card>();
  return (
    <Layout>
      <Level>
        Supermarkets now often offer discounts to card members. Left it at home?  Borrow a card for your shop today and get the prices you deserve.
        <Dropdown value={card} onChange={(v: Card) => setCard(v)}>
          <Dropdown.Item value={undefined}>Please Select</Dropdown.Item>
          <Dropdown.Divider/>
          {cards.map(c => <Dropdown.Item key={c.shop} value={c}>{c.shop}</Dropdown.Item>)}
        </Dropdown>

      </Level>
      {card ? <Barcode value={sample(card.number) || ''}></Barcode> : null}

    </Layout>
  );
};

export default UsingTypescript;
