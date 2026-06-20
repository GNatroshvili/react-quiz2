import { useEffect, useState } from "react";
import "./Users.css";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json() as Promise<User[]>;
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load users. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <main className="users-page">
      <div className="users-header">
        <h1 className="users-title">Team Members</h1>
        <p className="users-subtitle">Meet the people behind ProBook.</p>
      </div>

      {loading && (
        <div className="users-state">
          <div className="spinner" />
        </div>
      )}

      {error && (
        <div className="users-state">
          <p className="users-error">{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="users-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <div className="user-avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="user-info">
                <h2 className="user-name">{user.name}</h2>
                <p className="user-username">@{user.username}</p>
                <div className="user-details">
                  <span className="user-detail">
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M2.5 4.5h11v8a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-8Zm0 0 5.5 5 5.5-5"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {user.email}
                  </span>
                  <span className="user-detail">
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M8 1.5A4.5 4.5 0 0 0 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6A4.5 4.5 0 0 0 8 1.5Zm0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {user.address.city}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
