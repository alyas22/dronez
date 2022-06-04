import React from 'react';
import './style.scss';
import HomeLayout from '../Shared/Layout/homeLayout.js';
import HomeHero from './partial/hero';
import News from './partial/news';
import Certificates from './partial/certificates';
import Information from './partial/info';
import Events from './partial/events';
import Training from './partial/training';
import Memberships from './partial/memberships';

export default function Home() {
  return (
    <>
      <HomeLayout>
        <HomeHero />
        <News />
        <Certificates />
        <Information />
        <Events />
        <Training />
        <Memberships />
      </HomeLayout>
    </>
  );
}
