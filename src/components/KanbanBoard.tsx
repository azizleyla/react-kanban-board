import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import { Column, Id } from "../types";
import { generateId } from "../utils";
import ColumnContainer from "./ColumnContainer";
import { DndContext } from "@dnd-kit/core";

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>([]);

  const createNewColumn = () => {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    console.log(columns);
    setColumns([...columns, columnToAdd]);
  };

  const deleteColumn = (id: Id) => {
    const filteredColumns = columns.filter((col) => id !== col.id);
    setColumns(filteredColumns);
  };

  return (
    <div className="flex  min-h-screen items-center w-full px-[40px] m-auto overflow-x-auto overflow-y-hidden">
      <DndContext>
        <div className="m-auto flex gap-2">
          <div className="flex gap-4">
            {columns.map((col) => (
              <ColumnContainer deleteColumn={deleteColumn} column={col} />
            ))}
          </div>
          <button
            onClick={() => createNewColumn()}
            className="min-w-[300px]  bg-primary border-primary text-white border-2  ring-rose-500 hover:ring-2  h-[50px] flex  items-center cursor-pointer rounded-lg w-[300px]"
          >
            <PlusIcon />
            Add Column
          </button>
        </div>
      </DndContext>
    </div>
  );
};

export default KanbanBoard;
