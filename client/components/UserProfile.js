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
          {user.firstName !== null ? (
            <h3>
              MEMBER INFO FOR SHOPPER #{id}: {user.fullName}.
            </h3>
          ) : (
            <h3>
              <i>Member info for shopper #{id}:</i>
            </h3>
          )}

          <h4> • Email: {user.email}. </h4>
          <h4> • Physical address: {user.address} </h4>
          <EditUserCMP />
          {user.orders && user.orders[0] ? (
            <div>
              Order history:
              <ul>
                {user.orders.map((elem) => {
                  return (
                    <li key={elem.id}>
                      Order #{elem.id} was placed on{" "}
                      {elem.createdAt.substring(0, 10)}. It cost $
                      {elem.totalPrice} and was shipped to {elem.shippingInfo}.
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <h4>
              {" "}
              <i>
                Order history: the story hasn't been written yet! Perhaps{" "}
                <Link to={`/products/${roulette}`}>this</Link> could be the
                first one?
              </i>
            </h4>
          )}
        </>
      ) : (
        <h2>Unfortunately we haven't got a user with id = {id}.</h2>
      )}
    </div>
  );
};
export default UserProfile;
