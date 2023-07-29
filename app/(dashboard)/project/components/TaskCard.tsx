"use client";
import Card from "@/components/Card";
import { MoreVertical, Calendar } from "react-feather";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const TaskCard = ({data}) => {
  const {id,name} =  data
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Link href={`${pathname}?task=${id}`}>
      <Card className="px-2 py-1 mb-2">
        <div className="flex justify-between items-center">
          <p>{name}</p>
          <MoreVertical size={20} />
        </div>

        <p className="flex text-gray-400 gap-1">
          <Calendar size={20} /> until
        </p>
      </Card>
    </Link>
  );
};

export default TaskCard;
