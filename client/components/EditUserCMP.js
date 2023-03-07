import React, { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUserAsync, selectUser } from "../store/reducers/userSlice";

const EditUserCMP = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const address = e.target.address.value;

    dispatch(
      editUserAsync({ firstName, lastName, email, password, address, id })
    );
    setFirstName("");
    setLastName("");
    setPassword("");
    setEmail("");
    setAddress("");
    //    redirect("/");
  };

  useEffect(() => {
    setId(user.id);
    setFirstName(user.firstName || "");
    setLastName(user.lastName || "");
    setEmail(user.email || "");
    setPassword("");
    setAddress(user.address || "");
  }, [user]);

  const handlePurge = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setAddress("");
  };

  return (
    <form id="edit-user-form" onSubmit={handleSubmit}>
      <p>
        (For your convenience, most fields are pre-filled with your details.)
        <br></br>
        <button
          type="button"
          onClick={() => {
            handlePurge();
          }}
        >
          Wipe all fields.
        </button>
        <br></br>
        <label htmlFor="firstName">Update first name:</label>
        <input
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />{" "}
        <label htmlFor="lastName">Update last name:</label>
        <input
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br></br>
        <br></br>
        <label htmlFor="email">Update email address:</label>
        <input
          name="email"
          value={email}
          size="39"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br> <br></br>
        <label htmlFor="password">
          Update password (between 6 - 180 characters):
        </label>
        <input
          name="password"
          type="password"
          size="47"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <br></br>
        <label htmlFor="address">Update physical address:</label>
        <input
          name="address"
          size="50"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </p>
      <p>
        <i>Note: this button will remain gray if any fields are empty.</i>
      </p>
      <button
        type="submit"
        disabled={
          lastName === "" ||
          firstName === "" ||
          email === "" ||
          address === "" ||
          password === "" ||
          password.length < 6 ||
          password.length > 180
        }
      >
        Update my info.
      </button>
    </form>
  );
};
export default EditUserCMP;
