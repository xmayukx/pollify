import NavLink from "./navlink";

const Navbar = () => {
  return <div>
    <nav>
        <ul className="flex lg:p-10 p-3 gap-x-7 justify-center">
            <NavLink href='/createPoll'>Create-Poll</NavLink>
            <NavLink href='/polls'>Polls</NavLink>
            <NavLink href='/login'>Login</NavLink>
            <NavLink href='/signup'>SignUp</NavLink>
        </ul>
    </nav>
  </div>;
};

export default Navbar

