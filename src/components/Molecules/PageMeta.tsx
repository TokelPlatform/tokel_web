import { Helmet } from 'react-helmet';
import React from 'react';

type PageMetaProps = {
  title: string;
  description: string;
  image?: string;
};

export default function PageMeta({ title, description, image }: PageMetaProps) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://tokel.io/${image}.png`} />
      <meta property="og:url" content={`https://tokel.io/${image}`} />
    </Helmet>
  );
}
