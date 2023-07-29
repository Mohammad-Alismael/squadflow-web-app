import React, { FC } from "react";
import Card from "@/components/Card";
import { Prisma } from "@prisma/client";

const projectWithTasks = Prisma.validator<Prisma.ProjectArgs>()({
  include: { tasks: true },
});

type ProjectWithTasks = Prisma.ProjectGetPayload<typeof projectWithTasks>;
const ProjectCard: FC<{ project: ProjectWithTasks }> = ({ project }) => {
  const completedCount = project.tasks.filter(
    (t) => t.status === "COMPLETED"
  ).length;
  const progress = Math.ceil((completedCount / project.tasks.length) * 100);
  return (
    <Card className="h-36 relative">
      <div className="h-36 left-0 top-0 absolute bg-white rounded-2xl border" />
      <div className="left-[15px] top-[26px] absolute text-black text-lg font-semibold leading-none">
        {project.name}
      </div>
      {/*<div className="left-[15px] top-[56px] absolute text-neutral-400 text-xs font-normal leading-3">*/}
      {/*  UI Design Kit*/}
      {/*</div>*/}
      <div className="left-[110px] top-[98px] absolute text-neutral-400 text-xs font-normal leading-3">
        Progress
      </div>
      <div className="right-[18px] top-[98px] absolute text-teal-700 text-xs font-medium leading-3">
        {isNaN(progress) ? 0 : progress}%
      </div>
      <div className="w-32 h-2 right-[15px] top-[118px] absolute bg-zinc-300 rounded-sm border" />
      <div
        className={`w-[${
          progress / 32
        }] h-2 left-[110px] top-[118px] absolute bg-emerald-800 rounded-sm border`}
      />
      <div className="w-20 h-8 left-[15px] top-[94px] absolute">
        <img
          className="w-8 h-8 left-0 top-0 absolute rounded-full border border-white"
          src="https://via.placeholder.com/32x32"
        />
        <img
          className="w-8 h-8 left-[21px] top-0 absolute rounded-full border border-white"
          src="https://via.placeholder.com/32x32"
        />
        <img
          className="w-8 h-8 left-[42px] top-0 absolute rounded-full border border-white"
          src="https://via.placeholder.com/32x32"
        />
      </div>
    </Card>
  );
};

export default ProjectCard;
