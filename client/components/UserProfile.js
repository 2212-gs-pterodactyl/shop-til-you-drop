// ## JW.
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userSlice, {
  fetchOneUserAsync,
  selectUser,
} from "../store/reducers/userSlice";
import { Link } from "react-router-dom";
import EditUserCMP from "./EditUserCMP";

const UserProfile = () => {
  const dispatch = useDispatch();
  // const { id } = useParams();
  const id = useSelector((state) => state.auth.id);
  const user = useSelector(selectUser);
  const roulette = 1 + Math.floor(Math.random() * 25);

  useEffect(() => {
    dispatch(fetchOneUserAsync(id));
  }, []);

  // USER model has: first, last, email, pass, address, role, fullName(virtual)

  return (
    <div id="one-user">
      {user && user.fullName ? (
        <>
          <h2>
            MEMBER INFO FOR SHOPPER #{id}: {user.fullName}.
          </h2>
          <h4> • Email: {user.email}. </h4>
          <h4> • Physical address: {user.address} </h4>
          <EditUserCMP />
          {user.orders && user.orders[0] ? (
            <div>
              Order history:
              <ul>
                {user.orders.map((elem) => {
                  return <li key={elem.id}>${elem.totalPrice}</li>;
                })}
              </ul>
            </div>
          ) : (
            <h4>
              {" "}
              <i>
                {" "}
                {user.firstName} hasn't made any purchases yet. Perhaps{" "}
                <Link to={`/products/${roulette}`}>this</Link> could be the
                first one?
              </i>
            </h4>
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
