
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Manraj Gupta - Full Stack Developer & Community Builder",
  description = "Full Stack Developer specializing in React, TypeScript, and modern web technologies. Building scalable projects and fostering developer communities.",
  keywords = "Full Stack Developer, React, TypeScript, JavaScript, Web Developer, Community Builder, IT Student",
  image = "https://manraj.lovable.app/lovable-uploads/6696c206-a53a-4cb4-bde6-684c356e37bc.png",
  url = "https://manraj.lovable.app",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Manraj Gupta Portfolio",
    "url": url,
    "description": description,
    "author": {
      "@type": "Person",
      "name": "Manraj Gupta",
      "jobTitle": "Full Stack Developer",
      "url": url,
      "sameAs": [
        "https://github.com/manraj777"
      ]
    },
    "mainEntity": {
      "@type": "Person",
      "name": "Manraj Gupta",
      "jobTitle": "Full Stack Developer",
      "description": description,
      "image": image,
      "url": url
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
