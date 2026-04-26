import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Redux/userSlice";
import { CustomLoader } from "../CustomLoader";
import { ErrorComponent } from "../ErrorComponent";

export const ReduxApiDemo = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <CustomLoader />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Redux API Demo</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
