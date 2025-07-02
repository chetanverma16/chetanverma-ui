// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  type: "template" | "component" | "block";
  media: {
    type: "image" | "video";
    src: string;
  };
  description?: string;
  badge?: string;
};

export interface Template {
  id: string;
  title: string;
  href: string; // Deployed template URL for preview
  github: string; // GitHub repository URL
  badge?: string;
  description?: string;
}
