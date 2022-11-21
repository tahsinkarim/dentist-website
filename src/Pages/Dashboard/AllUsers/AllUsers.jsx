import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Made Admin");
          refetch;
        }
      });
  };
  return (
    <div>
      <h2>All Users</h2>
      <div className='overflow-x-auto mx-8'>
        <table className='table table-zebra w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i + 1}>
                <th>{i + 1}</th>
                <th>{user.name}</th>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className='btn btn-xs btn-primary'
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className='btn btn-xs btn-ghost'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
