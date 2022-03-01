import { Fragment } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  textInput: string;
};

const SearchField = (props: any) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    props.propData(data.textInput);
    setValue("textInput", "");
  };

  return (
    <Fragment>
      <form
        className="text-center max-w-xl mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-bold m-8 text-5xl">To Do List App</h1>
        <div className="flex items-center justify-center shadow-md rounded-full bg-white">
          <input
            type="text"
            {...register("textInput", { required: true })}
            className="rounded-full w-96 h-9 shadow-sm focus:outline-none flex-grow p-4"
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 bg-red-300 p-1 m-1 cursor-pointer rounded-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        {errors.textInput && (
          <span className="text-red-600 font-bold text-lg">
            Please enter a value
          </span>
        )}
      </form>
    </Fragment>
  );
};

export default SearchField;
