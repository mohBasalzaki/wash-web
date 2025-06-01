import React from 'react';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Breadcrumb from '../components/Breadcrumb';
import Content from '../components/Content';
import { useTranslations } from 'next-intl';
import { generatePageMetadata } from '../components/PageMetadata';

export async function generateMetadata({ params }) {
  return await generatePageMetadata({ params, namespace: 'Home', key: 'about' });
}

export default function About({ params }) {
  const t = useTranslations('Home');

  return (
    <>
      <Breadcrumb title={t('about')} />
      <Content locale={params.locale} />
      <AboutUs
        locale={params.locale}
        bgImg={"../image/clement-m-Ng3xrviPrhk-unsplash.png"}
        hideBtn={"d-none"}
      />
      <Features locale={params.locale} />
      <Services locale={params.locale} />
    </>
  );
}
