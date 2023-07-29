'use client';
import Button from "@/components/Button";
import { usePathname, useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const redirect = () => {
    router.push("/signin");
  };
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold capitalize text-emerald-700">
        welcome to squadflow
      </h1>
      <Button className="m-5" onClick={redirect}>
        try it
      </Button>
    </div>
  );
}

export default Page;
