import { useContext, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MyContext } from "../Context";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormPage: React.FC = () => {
  const { state, setState, clockState } = useContext(MyContext);
  const history = useHistory();
  const getData = async () => {
    const response = await fetch(
      "https://baconipsum.com/api/?type=all-meat&paras=2"
    );
    const responseJSON = await response.json();
    const MAX_LENGTH = 5000;
    setState({
      ...state,
      message: responseJSON.join(" ").substring(0, MAX_LENGTH),
    });
  };

  useEffect(() => {
    getData();
    if (state.facility === "") {
      toast.error("Please choose facility first...!");
      history.push("/");
    }
    // eslint-disable-next-line
  }, []);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const seconds: number = Number(
      clockState.hour.slice(-2, clockState.hour.length)
    );
    const wrongTime =
      (10 <= seconds && seconds <= 19) ||
      (30 <= seconds && seconds <= 39) ||
      (50 <= seconds && seconds <= 59);
    if (wrongTime) {
      toast.error("Oops, looks like we have a problem :( ... Try Again.");
    } else {
      let localMessages;
      const LOCAL = "local";
      if (localStorage.getItem(LOCAL) === null) {
        localMessages = [];
      } else {
        localMessages = JSON.parse(localStorage.getItem(LOCAL) || "");
      }
      localMessages.push(state);
      localStorage.setItem(LOCAL, JSON.stringify(localMessages));
      history.push("/form/sent");
    }
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, name: e.target.value });
  };
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, email: e.target.value });
  };
  const messageHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({ ...state, message: e.target.value });
  };

  return (
    <Wrapper className="main-content">
      <h3>FORM</h3>
      <form onSubmit={submitHandler}>
        <div className="label-container">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={state.name}
            type="text"
            placeholder="Jan Kowalski"
            onChange={nameHandler}
            required
          />
        </div>
        <div className="label-container">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            value={state.email}
            type="email"
            placeholder="Jan@Kowalski"
            onChange={emailHandler}
            required></input>
        </div>
        <div className="label-container">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={state.message}
            rows={7}
            maxLength={5000}
            onChange={messageHandler}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  form {
    width: 80%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
      width: 100%;
    }
    #message {
      margin-bottom: 1rem;
      width: 100%;
      padding: 0.5rem 1rem;
      resize: none;
    }
  }
`;

export default FormPage;
