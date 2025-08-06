import { ScrollArea } from "@/components/ui/scroll-area";
import DocsMenu from "./docs-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Leftbar() {
  return (
    <>
      {/* Mobile Menu */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] z-[1000000000] p-2">
            <ScrollArea className="h-full py-4">
              <DocsMenu isSheet={true} />
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu */}
      <aside className="md:flex hidden flex-[1.5] border-r min-w-[238px] sticky top-14 flex-col h-[93.75vh] overflow-y-auto">
        <ScrollArea className="py-4">
          <DocsMenu />
        </ScrollArea>
      </aside>
    </>
  );
}
