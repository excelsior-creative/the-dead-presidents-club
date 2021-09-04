import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';

import { Button } from 'antd';
import React from 'react';

export const Footer = () => {
  return (
    <div className={'footer'}>
      <h2>Disclaimer</h2>
      <p>
        This project and the information on this site is purely for
        entertainment purposes. This project has no political affiliations
        either explicit or implied.
      </p>
      <Button
        shape={'circle'}
        target={'_blank'}
        href={'https://github.com/metaplex-foundation/metaplex'}
        icon={<GithubOutlined />}
        style={{ marginRight: '20px' }}
      ></Button>
      <Button
        shape={'circle'}
        target={'_blank'}
        href={'https://twitter.com/solana'}
        icon={<TwitterOutlined />}
      ></Button>
    </div>
  );
};
