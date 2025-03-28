import { useState } from "react";
import { Mail } from "lucide-react"; // Using lucide-react for icons
import { useNavigate } from "react-router-dom"; // For redirection
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  // Function to connect to MetaMask and get the user's Ethereum address
  const connectToMetaMask = async () => {
    const provider = await detectEthereumProvider();
    if (!provider) {
      setError("MetaMask is not installed. Please install it to proceed.");
      return null;
    }

    try {
      // Request access to the user's MetaMask accounts
      const accounts = await provider.request({ method: "eth_requestAccounts" });
      const address = accounts[0]; // Get the first account
      return { provider, address };
    } catch (err) {
      setError("Failed to connect to MetaMask. Please try again.");
      return null;
    }
  };

  // Function to sign a message with MetaMask
  const signMessage = async (provider, address, message) => {
    try {
      const signer = new ethers.BrowserProvider(provider).getSigner();
      const signature = await (await signer).signMessage(message);
      return signature;
    } catch (err) {
      setError("Failed to sign the message. Please try again.");
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    // Step 1: Connect to MetaMask and get the user's address
    const metaMaskData = await connectToMetaMask();
    if (!metaMaskData) return;

    const { provider, address } = metaMaskData;

    // Step 2: Create a nonce (a random message) for the user to sign
    const nonce = Math.floor(Math.random() * 1000000).toString(); // Simple random nonce
    const message = `Login verification nonce: ${nonce}`;

    // Step 3: Sign the message with MetaMask
    const signature = await signMessage(provider, address, message);
    if (!signature) return;

    // Step 4: Send the email, address, signature, and message to the backend for verification
    try {
      const response = await fetch("http://your-backend-api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          address,
          signature,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Step 5: If verification succeeds, redirect to the admin page
        navigate("/admin");
        onClose(); // Close the popup
      } else {
        setError(data.message || "Verification failed. Please try again.");
      }
    } catch (err) {
      setError("Failed to verify with the backend. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        {error && (
          <div className="mb-4 text-red-500 text-center">{error}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <div className="flex items-center border border-gray-600 rounded-md w-full p-2 mt-1 bg-white">
              <Mail className="text-gray-500 mr-2" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-600 rounded-md w-full p-2 mt-1 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;