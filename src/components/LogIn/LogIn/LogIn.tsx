import { useEffect, useState } from "react";
import styles from "../LogIn/LogIn.module.css";
import Header from "../../../shared/Header/Header";
import { useLazyGetUsersQuery } from "../../../slice/userSlice/userApi";
import { ToastContainer, toast } from "react-toastify";
import type { AppDispatch } from "../../../store";
import { useDispatch } from "react-redux";
import { In, Out } from "../../../slice/isLogedIn/isLogedIn";
import { useNavigate } from "react-router-dom";
export default function LogIn() {
  const [userInput, setUserInput] = useState("");
  const [trigger, { data = [], isFetching }] = useLazyGetUsersQuery();
  const [clicked, setClicked] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!clicked) return;
    else if (data.length == 0) {
      toast.error("No such user!");
      dispatch(Out());
    } else {
      dispatch(In());
      navigate("/");
    }
  }, [data]);

  function handleClick() {
    userInput.trim() ? trigger(userInput) : toast.error("Input some text");
    setUserInput("");
    setClicked(true);
  }

  return (
    <>
      <Header></Header>

      <div className={styles.screen}>
        {" "}
        <div className={styles.inputBlock}>
          <div className={styles.block1}>
            <div className={styles.center} style={{ fontWeight: "bold" }}>
              Welcome Back
            </div>
            <div
              className={styles.center}
              style={{ color: "gray", fontSize: "0.9rem" }}
            >
              Enter your username to explore amazing places
            </div>
          </div>
          <div className={styles.block2}>
            <div style={{ fontWeight: "bold" }}>Username</div>

            <input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Enter your username "
            ></input>

            <button onClick={handleClick}>Submit</button>
            {isFetching && <div style={{ marginTop: "10px" }}>Loading...</div>}
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
