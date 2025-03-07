import Templateview from "@/components/TemplateView";
import { notFound } from "next/navigation";

// Data
import { templates } from "@/lib/template-data";

export default async function TemplatePage({
  params,
}: {
  params: { templateid: string };
}) {
  const unwrappedParams = await params;
  const template = templates.find((t) => t.id === unwrappedParams.templateid);

  if (!template) {
    notFound();
  }

  return <Templateview template={template} />;
}
