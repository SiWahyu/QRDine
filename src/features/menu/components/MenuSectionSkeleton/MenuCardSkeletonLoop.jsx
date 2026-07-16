import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const MenuCardSkeletonLoop = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {Array.from({ length: 2 }).map((_, sectionIndex) => {
        return (
          <Card className="w-full max-w-xs" key={sectionIndex}>
            <CardHeader>
              <Skeleton className="aspect-video w-full bg-neutral-300 rounded-xl animation-duration-[2s]" />
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Skeleton className="w-full h-4 bg-neutral-200" />
              <Skeleton className="w-1/2 h-4 bg-red-200" />
              <Skeleton className="self-center w-3/4 h-8 mt-3 text-center bg-blue-200" />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default MenuCardSkeletonLoop;
