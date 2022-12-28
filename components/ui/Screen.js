import React from 'react';

export default function Screen({ children }) {
  return (
    <div className="h-screen flex flex-col justify-around items-center text-center py-5">
      {children}
    </div>
  );
}
