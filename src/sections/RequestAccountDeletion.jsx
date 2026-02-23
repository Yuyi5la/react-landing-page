import { useState } from "react";
import axios from "axios";

const DeleteAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Login to get access token
      const loginRes = await axios.post(
        "https://api.yourbackend.com/api/v1/auth/login",
        { email, password }
      );

      const token = loginRes.data.accessToken;

      // Delete account
      const deleteRes = await axios.patch(
        "https://api.yourbackend.com/api/v1/users/delete",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage(deleteRes.data.message || "Account deleted successfully.");
      setEmail("");
      setPassword("");

      // Optional: clear auth storage
      localStorage.removeItem("token");

    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
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

        <form onSubmit={handleSubmit} className="space-y-4">
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
          Once processed, your account and all associated data will be
          permanently deleted.
        </p>
      </div>
    </div>
  );
};

export default DeleteAccount;