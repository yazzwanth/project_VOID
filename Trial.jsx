import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Trial = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAdminSubModal, setShowAdminSubModal] = useState(false);

  return (
    <div className="min-h-screen bg-cover bg-center text-gray-900">
      
      {/* Header */}
      {/* <header className="fixed top-0 left-0 right-0 z-50 justify-between items-center p-6 bg-black/90 text-white">
        <h1 className="text-3xl font-bold">Void: Web3 T-Shirt Store</h1>
        <button className="px-4 py-2 bg-white text-blue-700 font-semibold rounded hover:bg-blue-500 hover:text-white"
          onClick={() => setShowLoginModal(true)}>Login</button>
      </header> */}
      <Navbar />

      {/* About Section */}
      {/* About Section */}
{/* About Section */}
<div className="flex items-center justify-center min-h-screen bg-cover bg-fixed" >
  <section className="w-full md:w-3/4 lg:w-4/5 xl:w-3/4 bg-zinc-800 bg-opacity-95 rounded-lg shadow-lg p-10">
    <h2 className="text-3xl font-bold text-zinc-400 mb-4 text-center">About Void</h2>
    <ul className="list-disc pl-6 space-y-3 text-lg text-zinc-400">
      <li><strong>What is Void?</strong> A Web3-based e-commerce platform for T-shirts powered by Ethereum blockchain.</li>
      <li><strong>Track Your T-Shirt:</strong> Follow your purchase with full transparency.</li>
      <li><strong>Tamper-Proof Security:</strong> Built with blockchain for secure data.</li>
      <li><strong>Smart Contracts:</strong> Automates verification and dispute resolution.</li>
      <li><strong>IPFS Storage:</strong> Secure, decentralized T-shirt data storage.</li>
      <li><strong>Fight Counterfeits:</strong> Ensures authenticity in the fashion industry.</li>
      <li><strong>QR Code Access:</strong> Scan and view the T-shirt’s supply chain history.</li>
      <li><strong>Our Mission:</strong> Revolutionize e-commerce with trust and transparency.</li>
    </ul>
  </section>
</div>



      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-pink-100 p-6 rounded-lg shadow-lg border-2 border-pink-300 text-center w-80">
            <h3 className="text-2xl font-bold text-pink-500">Pick Your Role! 🌸</h3>
            <button className="w-full py-2 my-2 bg-blue-400 text-white rounded-lg hover:bg-pink-500"
              onClick={() => { setShowLoginModal(false); setShowAdminSubModal(true); }}>Admin Login</button>
            <button className="w-full py-2 my-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-red-400"
              onClick={() => setShowLoginModal(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Admin Sub-Modal */}
      {showAdminSubModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-green-100 p-6 rounded-lg shadow-lg border-2 border-green-300 text-center w-80">
            <h3 className="text-2xl font-bold text-green-600">Admin Type? 🌟</h3>
            <a href="/admin-buyer-login" className="block w-full py-2 my-2 bg-green-400 text-white rounded-lg hover:bg-green-500">Buyer Admin</a>
            <a href="/admin-seller-login" className="block w-full py-2 my-2 bg-green-400 text-white rounded-lg hover:bg-green-500">Seller Admin</a>
            <button className="w-full py-2 my-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-red-400"
              onClick={() => setShowAdminSubModal(false)}>Close</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Trial;