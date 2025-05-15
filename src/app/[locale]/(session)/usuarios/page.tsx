import UsersTable from "../../components/session/Usuarios";
import { API_URL } from "@/lib/config";

async function getUsers() {
    const res = await fetch(`${API_URL}/api/usersManagement`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
  
    const data = await res.json();
    return data;
  }
  
  export default async function UsersPage() {
    const users = await getUsers();
  
    return <UsersTable users={users} />;
  }