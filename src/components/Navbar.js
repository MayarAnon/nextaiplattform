import Link from "next/link";
import Search from "./Search";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <nav>
          <div className="nav-center">
            <div>
              <Link href={"/"} className="btn">
                Home
              </Link>
              <Link href={"/aboutus"} className="btn">
                About us
              </Link>
            </div>
            <Search></Search>
          </div>
          <div className="loginDiv">
            <img
              className="profilePic"
              src={session.user.image}
              alt="Profile Picture"
            />
            <div>
              <button className="search-btn" onClick={() => signOut()}>
                Sign out
              </button>
            </div>
          </div>
          <div className="loginDiv">
            <p className="signinstatus">Welcome {session.user.name}</p>
          </div>
        </nav>
      </>
    );
  }
  return (
    <>
      <nav>
        <div className="nav-center">
          <div>
            <Link href={"/"} className="btn">
              Home
            </Link>
            <Link href={"/aboutus"} className="btn">
              About us
            </Link>
          </div>
          <Search></Search>
        </div>
        <div className="loginDiv">
          <button className="search-btn" onClick={() => signIn()}>
            Sign in now
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
//  <>
//    <nav>
//      <div className="nav-center">
//        <div>
//          <Link href={"/"} className="btn">
//            Home
//          </Link>
//          <Link href={"/aboutus"} className="btn">
//            About us
//          </Link>
//          <LoginBtn />
//        </div>
//        <Search></Search>
//      </div>
//    </nav>
//  </>;
