import { Skeleton } from "@/components/ui/skeleton";

const CategoryTabsSekeleton = () => {
  return (
    <div className="pt-3 -mx-3 rounded-md ps-3 pe-3">
      <div className="grid grid-cols-5 gap-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            className="w-full h-8 rounded-md bg-neutral-300"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryTabsSekeleton;
