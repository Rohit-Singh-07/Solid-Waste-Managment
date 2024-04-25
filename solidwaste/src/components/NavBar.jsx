import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-center items-center w-[100vw] py-[1.5vw]">
      <div className="bg-zinc-900 sm:w-[40vw] w-[90vw] z-10 flex justify-around items-center h-[6vh] rounded-2xl text-zinc-400 shadow-[8px_8px_40px_3px_#4359CF83] fixed top-5">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "shadow-[2px_2px_7px_3px_#4359CF83] py-[0.2vw] px-[1vw] hover:text-zinc-100" : "hover:text-zinc-100")}
      >
        Home
      </NavLink>
      <NavLink
        to="/contribute"
        className={({ isActive }) => (isActive ? "shadow-[2px_2px_7px_3px_#4359CF83] py-[0.2vw] px-[1vw]" : "hover:text-zinc-100")}
      >
        Contribute
      </NavLink>
      <NavLink
        to="/publications"
        className={({ isActive }) => (isActive ? "shadow-[2px_2px_7px_3px_#4359CF83] py-[0.2vw] px-[1vw]" : "hover:text-zinc-100")}
      >
        Publications
      </NavLink>

      <NavLink
        to="/faq"
        className={({ isActive }) => (isActive ? "shadow-[2px_2px_7px_3px_#4359CF83] py-[0.2vw] px-[1vw]" : "hover:text-zinc-100")}
      >
        FAQs
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "shadow-[2px_2px_7px_3px_#4359CF83] py-[0.2vw] px-[1vw]" : "hover:text-zinc-100")}
      >
        About
      </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
