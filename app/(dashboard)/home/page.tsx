import React, { PropsWithChildren, Suspense } from "react";
import ProjectCard from "@/components/ProjectCard";
import { db } from "@/lib/db";
import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
import Link from "next/link";
import NewProject from "@/components/NewProject";
import { User } from "../../../types";
import NavbarSkeleton from "@/components/NavbarSkeleton";
import Navbar from "@/components/Navbar";

const getData = async () => {
  // await delay(5000);
  const user = await getUserFromCookie(cookies());
  const projects = await db.project.findMany({
    where: {
      ownerId: user?.id,
    },
    include: {
      tasks: true,
    },
  });

  return { projects };
};

const getUserData = async () => {
  // await delay(3000);
  const user = await getUserFromCookie(cookies());
  return user as User;
};

async function Page() {
  const { projects } = await getData();
  const user = await getUserData();

  // @ts-ignore
  return (
    <>
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar>
          <h1 className="text-2xl font-medium capitalize">
            {`good day,${user?.firstName} ${user?.lastName}!`}
          </h1>
        </Navbar>
      </Suspense>
      <div className="p-4">
        <div>
          <h1 className="font-medium text-xl py-2">Projects</h1>
          <div className="grid grid-cols-4 gap-4">
            {projects.map((project) => (
              <Link key={project.id} href={`/project/${project.id}`}>
                <ProjectCard key={project.id} project={project} />
              </Link>
            ))}
            <NewProject />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
