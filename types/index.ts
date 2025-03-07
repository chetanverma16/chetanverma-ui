// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  type: "template" | "component";
  media: {
    type: "image" | "video";
    src: string;
  };
  description?: string;
  badge?: string;
  templateTags?: TemplateTag[];
  componentTags?: ComponentTag[];
};

export interface Template {
  id: string;
  title: string;
  href: string; // Deployed template URL for preview
  github: string; // GitHub repository URL
  // ... other template properties
}

// Template Tags
export type TemplateTag =
  | "blog"
  | "saas"
  | "portfolio"
  | "e-commerce"
  | "agency"
  | "astro-js";

// Component Tags
export type ComponentTag =
  | "navbar"
  | "card"
  | "form"
  | "modal"
  | "table"
  | "dropdown"
  | "slider"
  | "input"
  | "button"
  | "media"
  | "badge"
  | "avatar"
  | "tooltip"
  | "popover"
  | "accordion"
  | "tabs"
  | "image";

export const componentsTags: ComponentTag[] = [
  "navbar",
  "card",
  "form",
  "modal",
  "table",
  "dropdown",
  "slider",
  "input",
  "button",
  "media",
  "badge",
  "avatar",
  "tooltip",
  "popover",
  "accordion",
  "tabs",
  "image",
];

export const templateTags: TemplateTag[] = [
  "blog",
  "saas",
  "portfolio",
  "e-commerce",
  "agency",
  "astro-js",
];
