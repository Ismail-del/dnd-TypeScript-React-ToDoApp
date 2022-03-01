type props = {
  children?: JSX.Element;
};

const CardCompletedTasks = (props: props) => {
  return (
    <div className="bg-[#e7efff21] w-full p-1 mt-7 rounded-xl text-center shadow-xl hover:shadow-2xl hover:shadow-slate-900 cursor-pointer">
      <h1 className="text-xl font-bold border-solid border-4 border-[#7584da] rounded-3xl w-1/2 mx-auto">
        Completed Tasks
      </h1>
      {props.children}
    </div>
  );
};

export default CardCompletedTasks;
