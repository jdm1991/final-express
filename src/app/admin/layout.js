// app/admin/layout.js
import auth from "../middleware/auth";

const layout = ({ children }) => {
  const isAuthenticated = true; // Replace with your actual authentication logic

  if (!isAuthenticated) {
    // Redirect to the login page or show an error message
    return (
      <div>
        <div>You are not authenticated. Please login.</div>
      </div>
    );
  }

  return <div>{children}</div>;
};

export const config = {
  metadata: {
    ...auth,
  },
};

export default layout;
