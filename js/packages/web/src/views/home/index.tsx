import { AuctionListView } from './auctionList';
import { Hero } from '../../components/Hero';
import { Layout } from 'antd';
import React from 'react';
import { SetupView } from './setup';
import { Timeline } from '../../components/Timeline';
import { useMeta } from '../../contexts';
import { useStore } from '@oyster/common';

export const HomeView = () => {
  const { isLoading, store } = useMeta();
  const { isConfigured } = useStore();

  const showAuctions = (store && isConfigured) || isLoading;

  return (
    <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
      <Hero />
      <Timeline />
      <div className="welcome container-width" style={{ padding: 20 }}>
        <h2>Welcome to the DPC</h2>
        <p>
          The Dead Presidents Club is a fraternal order paying homage to our
          forefathers that we now immortalize on the blockchain. Owners of a
          Dead President gain access to exclusive content as well as the
          opportunity to financially benefit from all future sales and trading
          of their president.
        </p>
        <h2>The Art</h2>
        <p>
          Each of our dearly departed are hand drawn our art director and team
          of designers. No two dead presidents are the same and their rarity
          varies greatly. Their popularity in undeath is highly correlated to
          their popularity in life. Don't miss the opportunity to own one of our
          more famous leaders because we expect them to sell out very quickly
          after they are released.
        </p>
        <h2>Where is President XYX?</h2>
        <p>
          They are probably still alive! Therefore, they are not a member of our
          club. You see, our collection has a very high price for entry. Some
          may say it is the highest price. Eventually, the team will be
          releasing each and every American President but not until 'their time'
          comes.
        </p>
        <h2>Schedule</h2>
        <p>
          Our team will be releasing one new President from our collection
          Tuesday of each week at 5PM UTC. We will continue this schedule until
          our entire collection has been released.
        </p>
        <h2>Airdrops</h2>
        <p>
          Holders of a any of our departed leaders will be eligible for an
          airdrop of a closely related political figure at a date in the not so
          distant future. The details of this drop are coming soon.
        </p>
      </div>
      {showAuctions ? <AuctionListView /> : <SetupView />}
    </Layout>
  );
};
