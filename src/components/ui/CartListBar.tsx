import React from 'react'

export default function CartListBar() {
    const [cartOpen, setCartOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setCartOpen(!cartOpen)}
        className={`fixed top-0 right-0 m-4 p-2 bg-blue-600 text-white rounded-full transform ${
          cartOpen ? "translate-x-full" : ""
        } transition-transform ease-in-out duration-300 focus:outline-none`}
      >
        cart list
        <svg
          className="h-6 w-6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-1/3 bg-white p-4 transform translate-x-full ${
          cartOpen ? "translate-x-full" : ""
        } transition-transform ease-in-out duration-300`}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-medium text-green-800">My cart</h3>
        </div>
        <hr className="my-3" />
        
      </div>
    </div>
  );
}
