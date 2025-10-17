import React from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ChetanVerma UI",
    url: "https://ui.chetanverma.com",
    logo: "https://ui.chetanverma.com/logo.svg",
    description:
      "A collection of beautiful, animated, and responsive design components built with React, Tailwind CSS, and Framer Motion.",
    sameAs: [
      "https://x.com/chetanvermaaa",
      "https://www.chetanverma.com/",
      "https://github.com/chetanverma16/chetanverma-ui",
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ChetanVerma UI",
    url: "https://ui.chetanverma.com",
    description:
      "A collection of beautiful, animated, and responsive design components built with React, Tailwind CSS, and Framer Motion.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://ui.chetanverma.com/components?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ChetanVerma UI",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "A collection of beautiful, animated, and responsive design components built with React, Tailwind CSS, and Framer Motion.",
    url: "https://ui.chetanverma.com",
    screenshot: "https://ui.chetanverma.com/opengraph-image.png",
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description: description,
    url: url,
    image: image || "https://ui.chetanverma.com/opengraph-image.png",
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: "Chetan Verma",
      url: "https://www.chetanverma.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "ChetanVerma UI",
      logo: {
        "@type": "ImageObject",
        url: "https://ui.chetanverma.com/logo.svg",
      },
    },
  };
}
