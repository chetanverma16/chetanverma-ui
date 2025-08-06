import { Leftbar } from "@/components/leftbar";

const ComponentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start gap-8">
      <Leftbar key="leftbar" />
      <div className="flex-[5.25]">{children}</div>
    </div>
  );
};

export default ComponentLayout;
