import Btn from "../Buttons";
import "./cp.scss";
export default function Navabr() {
  const isAuth = true;

  return (
    <>
      <nav>
        <div className="logo">
          <img src="/logo.svg" alt="" />
        </div>
        {isAuth ? (
          <div className="nav-items">
            <Btn style="null">My ticket</Btn>
            <Btn style="red">Logout</Btn>
          </div>
        ) : (
          <div className="nav-items">
            <Btn style="green">Login</Btn>
            <Btn style="border">Register</Btn>
          </div>
        )}
      </nav>
    </>
  );
}
