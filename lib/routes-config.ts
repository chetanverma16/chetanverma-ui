import AlertDemo from "@/components/main/Alert/demo";
import AnimatedTabs from "@/components/main/AnimatedTabs";
import AudioPlayerDemo from "@/components/main/AudioPlayer/demo";
import AvatarGroupDemo from "@/components/main/AvatarGroup/demo";
import CycleStatusButtonDemo from "@/components/main/CycleStatusButton/demo";
import DropdownMenuRenderer from "@/components/main/DropdownMenu/renderer";
import FloatingActionMenuDemo from "@/components/main/FloatingActionMenu/demo";
import InputWithTags from "@/components/main/InputWithTags";
import { NotificationPopover } from "@/components/main/NotificationPopover";
import StackedCardRenderer from "@/components/main/StackedCardsInteraction/renderer";
import StackingNavbar from "@/components/main/StackingNavbar";
import Switch from "@/components/main/Switch";
import VideoPlayerDemo from "@/components/main/VideoPlayer/demo";

// Type
import { EachRoute } from "@/types";

export const COMPONENT_ROUTES: EachRoute[] = [
  {
    title: "Stacking Navbar",
    href: "/stacking-navbar",
    description:
      "A simple stacking navbar component made with framer motion and tailwind css.",
    component: StackingNavbar,
  },
  {
    title: "Dropdown Menu",
    href: "/dropdown-menu",
    description: "Dropdown menu component with framer motion and tailwind css.",
    component: DropdownMenuRenderer,
  },
  {
    title: "Input With Tags",
    href: "/input-with-tags",
    description:
      "Input with tags component made with framer motion and tailwind css.",
    component: InputWithTags,
  },
  {
    title: "Stacked Cards Interaction",
    href: "/stacked-cards-interaction",
    description:
      "Stacked cards interaction component made with framer motion and tailwind css.",
    component: StackedCardRenderer,
  },
  {
    title: "Animated Tabs",
    href: "/animated-tabs",
    description:
      "Animated tabs interaction component made with framer motion and tailwind css.",
    component: AnimatedTabs,
  },
  {
    title: "Video Player",
    href: "/video-player",
    description:
      "A video player component made with framer motion and tailwind css.",
    component: VideoPlayerDemo,
  },
  {
    title: "Audio Player",
    href: "/audio-player",
    description:
      "An audio player component made with framer motion and tailwind css.",
    component: AudioPlayerDemo,
  },
  {
    title: "Cycle Status Button",
    href: "/cycle-status-button",
    description:
      "A cycle status button component made with framer motion and tailwind css.",
    component: CycleStatusButtonDemo,
  },
  {
    title: "Floating Action Menu",
    href: "/floating-action-menu",
    description:
      "A floating action menu component made with framer motion and tailwind css.",
    component: FloatingActionMenuDemo,
  },
  {
    title: "Notification Popover",
    href: "/notification-popover",
    description:
      "A notification popover component made with framer motion and tailwind css.",
    component: NotificationPopover,
  },
  {
    title: "Switch",
    href: "/switch-component",
    description: "A switch component made with framer motion and tailwind css.",
    component: Switch,
  },
  {
    title: "Alert",
    href: "/alert",
    description: "An alert component made with framer motion and tailwind css.",
    component: AlertDemo,
  },
  {
    title: "Avatar Group",
    href: "/avatar-group",
    description:
      "An avatar group component made with framer motion and tailwind css.",
    component: AvatarGroupDemo,
  },
];
