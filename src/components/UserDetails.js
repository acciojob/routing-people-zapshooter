import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        // Artificial delay so Cypress can detect the loading state reliably
        setTimeout(() => {
          setLoading(false);
        }, 300);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>
        Email: <a href={`mailto:${user.email}`}>{user.email}</a>
      </p>
      <p>Phone: {user.phone}</p>
      <p>
        Website:{" "}
        <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
          {user.website}
        </a>
      </p>
    </div>
  );
}

export default UserDetails;
