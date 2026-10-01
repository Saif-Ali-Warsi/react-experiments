function UserPage({ user }) {
  return (
    <div>
      <h2>User Page</h2>
      
      {/* If data exists, show it. Otherwise, show a placeholder message. */}
      {user ? (
        <div style={{ marginTop: "20px" }}>
          <p><strong>Name:</strong> {user.userName}</p>
          <p><strong>Role:</strong> {user.userRole}</p>
          <p><strong>City:</strong> {user.userCity}</p>
        </div>
      ) : (
        <p>Please submit the form on the left.</p>
      )}
    </div>
  );
}

export default UserPage;