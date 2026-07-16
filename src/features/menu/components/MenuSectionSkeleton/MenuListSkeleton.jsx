import { Skeleton } from "@/components/ui/skeleton";
import MenuCardSkeletonLoop from "./MenuCardSkeletonLoop";

const MenuListSkeleton = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, sectionIndex) => {
        return (
          <div className="flex flex-col mt-4 gap-3 mb-8" key={sectionIndex}>
            <Skeleton className="h-5 w-1/3 bg-neutral-300" />
            <MenuCardSkeletonLoop />
          </div>
        );
      })}
    </>
  );
};

export default MenuListSkeleton;
