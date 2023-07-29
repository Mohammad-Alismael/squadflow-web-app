import Card from "@/components/Card";

function LoadingProjectCard() {
  return (
    <Card className="h-36 relative">
      <div className="grid grid-cols-3 gap-4">
        <div className="h-2 bg-gray-300 rounded col-span-2"></div>
        <div className="h-2 bg-gray-300 rounded col-span-1"></div>
      </div>
    </Card>
  );
}
export default function Loading() {
  return (
    <div className="p-4">
      <h1 className="font-medium text-xl py-2">Projects</h1>
      <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
          <LoadingProjectCard key={i} />
        ))}
      </div>
    </div>
  );
}
