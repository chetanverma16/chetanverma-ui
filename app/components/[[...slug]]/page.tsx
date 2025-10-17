import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import { COMPONENT_ROUTES } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getDocsForSlug } from "@/lib/markdown";
import { Typography } from "@/components/typography";
import {
  JsonLd,
  getArticleSchema,
  getBreadcrumbSchema,
} from "@/components/seo/json-ld";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function DocsPage(props: PageProps) {
  const params = await props.params;

  const { slug = [] } = params;

  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);

  if (!res) notFound();

  const url = `https://ui.chetanverma.com/components/${pathName}`;
  const articleSchema = getArticleSchema({
    title: res.frontmatter.title,
    description: res.frontmatter.description || "",
    url,
  });

  const breadcrumbItems = [
    { name: "Home", url: "https://ui.chetanverma.com/" },
    { name: "Components", url: "https://ui.chetanverma.com/components" },
    ...slug.map((item, index) => ({
      name: item.charAt(0).toUpperCase() + item.slice(1).replace(/-/g, " "),
      url: `https://ui.chetanverma.com/components/${slug
        .slice(0, index + 1)
        .join("/")}`,
    })),
  ];
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="flex items-start gap-10">
        <div className="flex-[4.5] pt-10">
          <DocsBreadcrumb paths={slug} />
          <Typography>
            <h1 className="text-3xl !-mt-0.5">{res.frontmatter.title}</h1>
            <p className="-mt-4 text-muted-foreground text-[16.5px]">
              {res.frontmatter.description}
            </p>
            <div>{res.content}</div>
            <Pagination pathname={pathName} />
          </Typography>
        </div>
      </div>
    </>
  );
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;

  const { slug = [] } = params;

  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);
  if (!res) return null;
  const { frontmatter } = res;

  const url = `https://ui.chetanverma.com/components/${pathName}`;
  const title = `${frontmatter.title} - React Component`;
  const description =
    frontmatter.description ||
    `Beautiful ${frontmatter.title} component built with React, Tailwind CSS, and Framer Motion. Copy, paste, and customize.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "ChetanVerma UI",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image.png"],
      creator: "@chetanvermaaa",
    },
    alternates: {
      canonical: url,
    },
    keywords: [
      frontmatter.title,
      "React component",
      "Tailwind CSS",
      "Framer Motion",
      "UI component",
      "animated component",
      "responsive design",
    ],
  };
}

export function generateStaticParams() {
  return [
    // Add empty slug for components index page
    { slug: [] },
    ...COMPONENT_ROUTES.map((item) => ({
      slug: item.href.split("/").slice(1),
    })),
  ];
}
