import { cookies } from "next/headers";
import { verifyToken } from "../../lib/auth";
import { redirect } from "next/navigation";
import ClientAdminPage from "../components/ClientAdminPage"

export default function AdminPage() {
  // Get the token from the cookie
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  // Verify the token on the server-side
  const user = token ? verifyToken(token) : null;
  if (!user) {
    // If the token is invalid or not present, redirect to the login page
    redirect("/login");
  }

  return <ClientAdminPage />;
}
