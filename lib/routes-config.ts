// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  media?: {
    type: "image" | "video";
    src: string;
  };
  description?: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
};

export const ROUTES: EachRoute[] = [
  {
    title: "Stacking Navbar",
    href: "/stacking-navbar",
    media: { type: "video", src: "/videos/stacking-navbar.webm" },
    description:
      "A simple stacking navbar component made with framer motion and tailwind css.",
  },
  {
    title: "Stacked Image Card Effect",
    href: "/stacked-image-card-effect",
    media: { type: "video", src: "/videos/stacked-image-card-effect.webm" },
    description:
      "A simple stacked image card effect component made with motion and tailwind css.",
  },
  {
    title: "Dropdown Menu",
    href: "/dropdown-menu",
    media: { type: "video", src: "/videos/dropdown-menu.webm" },
    description: "Dropdown menu component with framer motion and tailwind css.",
  },
  {
    title: "Input With Tags",
    href: "/input-with-tags",
    media: { type: "video", src: "/videos/input-with-tags.webm" },
    description:
      "Input with tags component made with framer motion and tailwind css.",
  },
  {
    title: "Stacked Cards Interaction",
    href: "/stacked-cards-interaction",
    media: { type: "video", src: "/videos/stacked-cards-interaction.webm" },
    description:
      "Stacked cards interaction component made with framer motion and tailwind css.",
  },
  {
    title: "Animated Tabs",
    href: "/animated-tabs",
    media: { type: "video", src: "/videos/animated-tabs.webm" },
    description:
      "Animated tabs interaction component made with framer motion and tailwind css.",
  },
  {
    title: "Video Player",
    href: "/video-player",
    media: { type: "video", src: "/videos/video-player.webm" },
    description:
      "A video player component made with framer motion and tailwind css.",
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
