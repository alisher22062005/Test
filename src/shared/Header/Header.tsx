import { useSelector } from "react-redux";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import type { AppDispatch, RootState } from "../../store";
import { resetUsers } from "../../slice/userSlice/userSlice";
import { useDispatch } from "react-redux";
import { Out } from "../../slice/isLogedIn/isLogedIn";
import { useEffect } from "react";

export default function Header() {
  const logIn = useSelector((state: RootState) => state.logIn.isLoggedIn);
  const allUsers = useSelector((state: RootState) => state.user.arrayUser);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {}, [allUsers]);
  function handleClick() {
    if (logIn) {
      dispatch(resetUsers());
      dispatch(Out());
    }
  }
  return (
    <>
      <div className={styles.header}>
        <div id={styles.best}>Best Application</div>
        <div className={styles.logIn}>
          <Link to="/log-in">
            <button onClick={handleClick}>
              {logIn ? "Log out" : "Log in"}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
