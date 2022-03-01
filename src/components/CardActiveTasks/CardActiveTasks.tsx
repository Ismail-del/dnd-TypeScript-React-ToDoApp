type props = {
  children?: JSX.Element;
};

const CardActiveTasks = (props: props) => {
  return (
    <div className="bg-[#fffdfe5c] h-fit w-full p-1 mt-7 rounded-xl text-center shadow-xl hover:shadow-2xl">
      <h1 className="text-xl font-bold border-solid border-4 border-[#7584da] rounded-3xl w-1/2 mx-auto">
        Active Tasks
      </h1>
      {props.children}
    </div>
  );
};

export default CardActiveTasks;
