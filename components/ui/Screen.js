import React from 'react';

export default function Screen({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-evenly items-center text-center py-5 my-10">
      {children}
    </div>
  );
}
