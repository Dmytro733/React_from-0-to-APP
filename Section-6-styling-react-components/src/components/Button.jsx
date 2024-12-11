export default function Button({children, viewAs, ...props}) {
  let buttonClasses = "px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500"

  if(viewAs == 'secondary') buttonClasses = "text-amber-400 hover:text-amber-500"
  return (
    <button {...props} className={buttonClasses}>
      {children}
    </button>
  );
}