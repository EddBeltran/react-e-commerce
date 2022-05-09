import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="flex justify-between bg-red-300 p-2">
        <div className="burger-icon">=</div>
        <div>E-commerce</div>
        <div className="grid grid-cols-2 gap-2 bg-yellow-800">
          <span>|#|</span>
          <span>/O</span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
