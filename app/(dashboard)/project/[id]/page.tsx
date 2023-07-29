import React, { Suspense } from "react";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import NavbarSkeleton from "@/components/NavbarSkeleton";
import Navbar from "@/components/Navbar";
import Column from "../components/Column";
import Button from "@/components/Button";
import TaskDetails from "../components/TaskDetails";

const getData = async (id: string) => {
  const user = await getUserFromCookie(cookies());
  return await db.project.findFirst({
    where: { id, ownerId: user?.id },
    include: {
      tasks: true,
    },
  });
};
type Props = {
  params: {
    id?: string;
  };
  searchParams?: {
    task?: string;
  };
};
export default async function ProjectPage({ params }: Props) {
  const project = await getData(params.id as string);

  return (
    <>
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar>
          <h1 className="text-2xl font-medium capitalize">
            {project?.name as string}
          </h1>
        </Navbar>
      </Suspense>
      <div className="h-full w-full overflow-y-auto px-4 flex flex-row">
        <Column cards={project?.tasks} />
        <div className="w-1/4">
          <Button
            intent="secondary"
            className="w-full capitalize bg-transparent"
          >
            + new column
          </Button>
        </div>
        <Suspense fallback={<p>loadings</p>}>
          <TaskDetails />
        </Suspense>
      </div>
    </>
  );
}
