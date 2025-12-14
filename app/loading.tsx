import Skeleton from "@/components/ui/skeleton";

export default function LoadingPage() {
  return (
    <div className="p-8 space-y-6">
      {/* Hero skeleton */}
      <div className="flex flex-col items-center text-center space-y-4">
        <Skeleton className="h-10 w-64" /> {/* title */}
        <Skeleton className="h-6 w-96" /> {/* subtitle */}
      </div>

      {/* Cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>

      {/* Form skeleton */}
      <div className="space-y-4 mt-8">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  );
}
