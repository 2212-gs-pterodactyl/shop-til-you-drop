// ## JW.
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userSlice, {
  fetchOneUserAsync,
  selectUser,
} from "../store/reducers/userSlice";
import { useParams, useResolvedPath } from "react-router-dom";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector(selectUser);
  console.log("UserCMP.11, id========", id);
  console.log("userCMP.12, user======", user);

  useEffect(() => {
    dispatch(fetchOneUserAsync(id));
  }, []);

  // USER model has: first, last, email, pass, address, role, fullName(virtual)

  return (
    <div id="one-user">
      {user && user.fullName ? (
        <>
          <h1>
            MEMBER INFO FOR SHOPPER #{id}: {user.fullName}.
          </h1>
          <h2>
            [A member should be able to see only his/her own info; but an ADMIN
            should be able to freely traverse users/4, users/5, users/6 etc.]
          </h2>
          <h3>Email: {user.email}. </h3>
          <h3>Cost of past orders: </h3>
          {user.orders && user.orders[0] ? (
            <ul>
              {user.orders.map((elem) => {
                return <li key={elem.id}>${elem.totalPrice}</li>;
              })}
            </ul>
          ) : (
            <h4>$0; {user.firstName} hasn't made any purchases yet.</h4>
          )}
        </>
      ) : (
        <h2>Welp. We haven't got a user with an id of {id}.</h2>
      )}
    </div>
  );
};
export default UserProfile;

/////////////////
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
