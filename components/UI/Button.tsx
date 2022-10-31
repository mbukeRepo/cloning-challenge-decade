const Button = (props: any) => {
  let classes =
    "text-white outline-none cursor-pointer text-sm md:text-base rounded-full bg-zinc-700 px-5 py-2";
  if (props.variant === "primary") {
    classes =
      "border-zinc-700 border outline-none cursor-pointer text-sm rounded-full bg-white text-zinc-700 px-5 py-2";
  }
  if (props.variant === "secondary") {
    classes =
      "border-zinc-300 border outline-none cursor-pointer text-sm rounded-full bg-white font-secondary text-zinc-600 px-5 py-2";
  }
  return <button className={classes}>{props.children}</button>;
};
export default Button;
