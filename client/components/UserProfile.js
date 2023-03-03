import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneUserAsync, selectUser } from "../store/reducers/userSlice";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchOneUserAsync(id));
  }, []);

  // USER model has: first, last, email, pass, address, role, fullName(virtual)

  return (
    <div id="one-user">
      <h1>BEHOLD! the UserProfile component.</h1>
      <h2>In this h2 tag, we show that this user's name is: {user.fullName}</h2>
      <h3>Email address: {user.email}. </h3>
    </div>
  );
};
export default UserProfile;

/* FOR GUIDANCE/INSPO:

  return (
    <div id="one-user">
      {student && student.firstName ? (
        <>
          <img src={student.imageUrl} />
          <h1>
            Student #{id}: {student.firstName} {student.lastName}.
          </h1>
          <h2>Email: {student.email}</h2>
          <h2>GPA: {student.gpa}</h2>
          {student.campus ? (
            <h3>
              Attends{" "}
              <Link to={`/campuses/${student.campus.id}`}>
                {" "}
                {student.campus.name}
              </Link>
              , whose campus ID is {student.campus.id}.
            </h3>
          ) : (
            <h3>{student.firstName} is too cool for school.</h3>
          )}{" "}
        </>
      ) : (
        <h2>We haven't got a student with id = {id}.</h2>
      )}{" "}
    </div>
  );
}; */
