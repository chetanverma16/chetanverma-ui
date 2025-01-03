// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
};

export const ROUTES: EachRoute[] = [
  { title: "Stepper", href: "/stepper" },
  { title: "Tabs", href: "/tabs" },
  { title: "Note", href: "/note" },
  { title: "Code Block", href: "/code-block" },
  { title: "Image & Link", href: "/image-link" },
  { title: "Custom", href: "/custom" },
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
