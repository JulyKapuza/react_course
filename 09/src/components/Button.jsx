export default function Button({text, darkBtn, ...props}){
    return (
      <button {...props} className={darkBtn? 'px-6 py-2 rounded-md bg-stone-900 text-stone-50 hover:bg-stone-950':'text-stone-800 hover:text-stone-950'}>
        {text}
      </button>
    );
}