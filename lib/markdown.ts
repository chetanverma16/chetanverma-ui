import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { promises as fs } from "fs";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import { COMPONENT_ROUTES } from "./routes-config";
import { visit } from "unist-util-visit";
import matter from "gray-matter";

// custom components imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Outlet from "@/components/main/Markdown/Outlet";
import Preview from "@/components/main/Preview";
import Pre from "@/components/main/Markdown/Pre";
import PropsTable from "@/components/PropsTable";

// Stacking Navbar
import StackingNavbar from "@/components/main/StackingNavbar";
import StackedImageCardEffect from "@/components/main/StackedImageCardEffect";
import DropdownMenuRenderer from "@/components/main/DropdownMenu/renderer";
import InputWithTags from "@/components/main/InputWithTags";
import { StackedCardsInteraction } from "@/components/main/StackedCardsInteraction";
import AnimatedTabs from "@/components/main/AnimatedTabs";
import VideoPlayer from "@/components/main/VideoPlayer";
import AudioPlayer from "@/components/main/AudioPlayer";
import CycleStatusButton from "@/components/main/CycleStatusButton";
import FloatingActionMenu from "@/components/main/FloatingActionMenu";
import { NotificationPopover } from "@/components/main/NotificationPopover";
import KanbanBoardView from "@/components/main/KanbanBoard/KanbanBoardView";
import Switch from "@/components/main/Switch";
import Alert from "@/components/main/Alert";
import AvatarGroup from "@/components/main/AvatarGroup";
import Calendar from "@/components/main/Calendar";
import TextRevealEffect from "@/components/main/TextRevealEffect";
import TextRevealEffectDemo from "@/components/main/TextRevealEffect/Demo";

// Icons
import { User, Settings, LogOut } from "lucide-react";

// add custom components
const components = {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Outlet,
  Preview,
  Pre,

  // Custom Components
  StackingNavbar,
  StackedImageCardEffect,
  DropdownMenuRenderer,
  InputWithTags,
  StackedCardsInteraction,
  PropsTable,
  AnimatedTabs,
  VideoPlayer,
  AudioPlayer,
  CycleStatusButton,
  FloatingActionMenu,
  NotificationPopover,
  KanbanBoardView,
  Switch,
  Alert,
  AvatarGroup,
  Calendar,
  TextRevealEffect,
  TextRevealEffectDemo,

  // Icons
  User,
  Settings,
  LogOut,
};

// can be used for other pages like blogs, Guides etc
async function parseMdx<Frontmatter>(rawMdx: string) {
  return await compileMDX<Frontmatter>({
    source: rawMdx,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          preProcess,
          rehypeCodeTitles,
          rehypePrism,
          rehypeSlug,
          rehypeAutolinkHeadings,
          postProcess,
        ],
        remarkPlugins: [remarkGfm],
      },
    },
    components,
  });
}

// logic for docs

export type BaseMdxFrontmatter = {
  title: string;
  description: string;
};

export async function getDocsForSlug(slug: string) {
  try {
    const contentPath = getDocsContentPath(slug);
    const rawMdx = await fs.readFile(contentPath, "utf-8");
    return await parseMdx<BaseMdxFrontmatter>(rawMdx);
  } catch (err) {
    console.log(err);
  }
}

export async function getDocsTocs(slug: string) {
  const contentPath = getDocsContentPath(slug);
  const rawMdx = await fs.readFile(contentPath, "utf-8");
  // captures between ## - #### can modify accordingly
  const headingsRegex = /^(#{2,4})\s(.+)$/gm;
  let match;
  const extractedHeadings = [];
  while ((match = headingsRegex.exec(rawMdx)) !== null) {
    const headingLevel = match[1].length;
    const headingText = match[2].trim();
    const slug = sluggify(headingText);
    extractedHeadings.push({
      level: headingLevel,
      text: headingText,
      href: `#${slug}`,
    });
  }
  return extractedHeadings;
}

export function getPreviousNext(path: string) {
  const index = COMPONENT_ROUTES.findIndex(({ href }) => href == `/${path}`);
  return {
    prev: COMPONENT_ROUTES[index - 1],
    next: COMPONENT_ROUTES[index + 1],
  };
}

function sluggify(text: string) {
  const slug = text.toLowerCase().replace(/\s+/g, "-");
  return slug.replace(/[^a-z0-9-]/g, "");
}

function getDocsContentPath(slug: string) {
  // Handle empty slug for components index page
  if (!slug || slug === '') {
    return path.join(process.cwd(), "/contents/components/", `index.mdx`);
  }
  return path.join(process.cwd(), "/contents/components/", `${slug}/index.mdx`);
}

function justGetFrontmatterFromMD<Frontmatter>(rawMd: string): Frontmatter {
  return matter(rawMd).data as Frontmatter;
}

export async function getAllChilds(pathString: string) {
  const items = pathString.split("/").filter((it) => it != "");
  const component_routes_copy = COMPONENT_ROUTES;

  let prevHref = "";
  for (const it of items) {
    const found = component_routes_copy.find(
      (innerIt) => innerIt.href == `/${it}`
    );
    if (!found) break;
    prevHref += found.href;
  }
  if (!prevHref) return [];

  return await Promise.all(
    component_routes_copy.map(async (it) => {
      const totalPath = path.join(
        process.cwd(),
        "/contents/docs/",
        prevHref,
        it.href,
        "index.mdx"
      );
      const raw = await fs.readFile(totalPath, "utf-8");
      return {
        ...justGetFrontmatterFromMD<BaseMdxFrontmatter>(raw),
        href: `/docs${prevHref}${it.href}`,
      };
    })
  );
}

// for copying the code in pre
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const preProcess = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl.tagName !== "code") return;
      node.raw = codeEl.children?.[0].value;
    }
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const postProcess = () => (tree: any) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      node.properties["raw"] = node.raw;
    }
  });
};

export type Author = {
  avatar?: string;
  handle: string;
  username: string;
  handleUrl: string;
};

export type BlogMdxFrontmatter = BaseMdxFrontmatter & {
  date: string;
  authors: Author[];
  cover: string;
};

export async function getAllBlogStaticPaths() {
  try {
    const blogFolder = path.join(process.cwd(), "/contents/blogs/");
    const res = await fs.readdir(blogFolder);
    return res.map((file) => file.split(".")[0]);
  } catch (err) {
    console.log(err);
  }
}
export async function getAllBlogs() {
  const blogFolder = path.join(process.cwd(), "/contents/blogs/");
  const files = await fs.readdir(blogFolder);
  const uncheckedRes = await Promise.all(
    files.map(async (file) => {
      if (!file.endsWith(".mdx")) return undefined;
      const filepath = path.join(process.cwd(), `/contents/blogs/${file}`);
      const rawMdx = await fs.readFile(filepath, "utf-8");
      return {
        ...justGetFrontmatterFromMD<BlogMdxFrontmatter>(rawMdx),
        slug: file.split(".")[0],
      };
    })
  );
  return uncheckedRes.filter((it) => !!it) as (BlogMdxFrontmatter & {
    slug: string;
  })[];
}

export async function getBlogForSlug(slug: string) {
  const blogFile = path.join(process.cwd(), "/contents/blogs/", `${slug}.mdx`);
  try {
    const rawMdx = await fs.readFile(blogFile, "utf-8");
    return await parseMdx<BlogMdxFrontmatter>(rawMdx);
  } catch {
    return undefined;
  }
}
