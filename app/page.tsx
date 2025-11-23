import { redirect } from "next/navigation";
import { COMPONENT_ROUTES } from "@/lib/routes-config";

export default function Home() {
  redirect(`/components${COMPONENT_ROUTES[0].href}`);
}
