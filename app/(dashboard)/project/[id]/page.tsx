import React, { Suspense } from "react";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import NavbarSkeleton from "@/components/NavbarSkeleton";
import Navbar from "@/components/Navbar";

const getData = async (id: string) => {
  const user = await getUserFromCookie(cookies());
  return await db.project.findFirst({
    where: { id, ownerId: user?.id },
    include: {
      tasks: true,
    },
  });
};

export default async function ProjectPage({ params }: any) {
  const project = await getData(params.id);

  // @ts-ignore
  return (
    <>
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar>
          <h1 className="text-2xl font-medium capitalize">
            {project?.name as string}
          </h1>
        </Navbar>
      </Suspense>
      <div className="h-full overflow-y-auto pr-6 w-1/1">
        <p>project id : {project?.id}</p>
      </div>
    </>
  );
}
