import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const baseURL = import.meta.env.VITE_BASE_URL;
  const apiVersion = import.meta.env.VITE_API_VERSION;

  const handleDelete = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Login
      const loginRes = await axios.post(
        `${baseURL}/api/${apiVersion}/auth/login`,
        {
          email,
          password,
          fcm_token: {
            token: crypto.randomUUID(),
            platform: "web",
          },
        }
      );

      const token =
        loginRes.data.accessToken ||
        loginRes.data.token ||
        loginRes.data?.data?.accessToken;

      if (!token) throw new Error("No access token returned");

      // Confirm deletion
      if (
        !window.confirm(
          "Are you sure you want to permanently delete your account?"
        )
      ) {
        setLoading(false);
        return;
      }

      // Delete account
      const deleteRes = await axios.delete(
        `${baseURL}/api/${apiVersion}/users/delete-account`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(deleteRes?.data?.message || "Account deleted successfully");

      
      setEmail("");
      setPassword("");
      setMessage("");
      
      navigate("/goodbye");

    } catch (error) {
      setMessage(
        error?.response?.data?.message || error.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 pt-32 pb-16">
      <div className="w-full max-w-md bg-white border border-gray-200 shadow-lg p-10">
        <h1 className="text-2xl font-bold text-center text-orange-500 mb-4">
          Delete Account
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Enter your email and password to permanently delete your account.
        </p>

        <form onSubmit={handleDelete} className="space-y-4">
          <input
            type="email"
            required
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
          />

          <input
            type="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 py-3 text-white font-semibold hover:bg-orange-600 transition"
          >
            {loading ? "Processing..." : "Delete Account"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-500">{message}</p>
        )}

        <p className="text-gray-400 text-xs text-center mt-6">
          Once processed, your account and all associated data will be permanently deleted.
        </p>
      </div>
    </div>
  );
};

export default DeleteAccount;
