import clsx from "clsx";
type PropsType = {
  className: string;
  props: any;
};

const Input = ({ className, ...props }: PropsType) => {
  return (
    <input
      className={clsx(
        "border-solid border-gray border-2 px-6 py-2 text-lg rounded-xl w-full",
        className
      )}
      {...props}
    />
  );
};

export default Input;
