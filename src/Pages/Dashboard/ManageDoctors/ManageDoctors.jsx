import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDeleteDoctor = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          alert(`Doctor ${doctor.name} deleted successfully`);
        }
      });
  };

  if (isLoading) {
    return <p>Loading . . .</p>;
  }
  return (
    <div>
      <h1>Manage Doctors {doctors?.length}</h1>
      <div>
        <table className='table table-zebra w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr key={i + 1}>
                <th>{i + 1}</th>
                <td>
                  <div className='avatar'>
                    <div className='w-12 rounded-xl'>
                      <img src={doctor.image} alt={doctor.name} />
                    </div>
                  </div>
                </td>
                <th>{doctor.name}</th>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor='confirmation-modal'
                    className='btn btn-sm btn-error'
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingDoctor.name}. It cannot be undone.`}
          successAction={handleDeleteDoctor}
          successButtonName='Delete'
          modalData={deletingDoctor}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
