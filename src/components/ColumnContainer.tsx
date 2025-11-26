import TrashIcon from "../icons/TrashIcon";
import { Column, Id } from "../types";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
}

const ColumnContainer = ({ column, deleteColumn }: Props) => {
  return (
    <div className="text-white bg-background flex flex-col w-[350px] h-[500px] max-h-[500px] rounded-md bg-columnBackgroundColor">
      <div className="bg-primary border-4 flex items-center justify-between border-background text-md h-[60px] cursor-grab rounded-md p-3 font-bold">
        <div className="flex gap-2">
          <div className="flex rounded-full justify-center items-center bg-background px-2 py-1 text-sm">
            0
          </div>
          {column.title}
        </div>
        <button
          onClick={() => deleteColumn(column.id)}
          className="stroke-gray-500 rounded px-1 py-1"
        >
          <TrashIcon />
        </button>
      </div>
      <div className="flex flex-grow ">Content</div>
      <div>Footer</div>
    </div>
  );
};

export default ColumnContainer;
