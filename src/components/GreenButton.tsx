import React from "react";

type Props = {
  children: React.ReactNode;
  onClick? : ()=>void;
  type? : string; 
};

function GreenButton({ children , onClick }: Props) {
  return (
    <button onClick={onClick} className="text-xl border-green-400 border-solid border-2 p-4 rounded-lg hover:shadow-md hover:shadow-slate-500 active:bg-green-400 w-[40%]">
      {children}
    </button>
  );
}

export default GreenButton;
