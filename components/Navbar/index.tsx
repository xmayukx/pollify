import NavLink from "./navlink";

const Navbar = () => {
  return <div>
    <nav>
        <ul className="flex lg:p-4 p-3 gap-x-3.5">
            <NavLink href='/createPoll'>Create-Poll</NavLink>
            <NavLink href='/polls'>Polls</NavLink>
            <NavLink href='/login'>Login</NavLink>
            <NavLink href='/signup'>SignUp</NavLink>
        </ul>
    </nav>
  </div>;
};

export default Navbar

