import React from "react";
import TaskCard from "../components/TaskCard";
import { MoreVertical } from "react-feather";
import Button from "@/components/Button";

Column.propTypes = {};

function Column({cards}) {
  return (
    <div className="rounded-xl h-[80%] w-1/4 bg-gray-300 p-4 mr-4">
      <div className="flex justify-between pb-4">
        <div className="flex justify-center items-center gap-1">
          <span className="capitalize">done</span>
          <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
            3
          </span>
        </div>

        <MoreVertical size={20} />
      </div>
        <div className="h-[82%] overflow-auto no-scrollbar mb-4">
            {
                cards.map(({id,name},i)=>{
                    return <TaskCard key={id} data={{id,name}}/>
                })
            }
        </div>

      <Button className="w-full">+ task card</Button>
    </div>
  );
}

export default Column;
