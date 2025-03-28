import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
        <Navbar />
      <section className="w-full mt-17 bg-zinc-800 text-zinc-400 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">GET IN TOUCH</h1>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="text-center">
            <h2 className="text-xl font-semibold">ADDRESS</h2>
            <p>1234 Street Name</p>
            <p>City, State, ZIP</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold">PHONE</h2>
            <p>+123 456 7890</p>
            <p>Support: +098 765 4321</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold">EMAIL</h2>
            <p>contact@example.com</p>
            <p>support@example.com</p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-3xl bg-white p-8 shadow-md rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-6">Message Us</h2>
        <form className="grid grid-cols-1 gap-6">
          <input type="text" placeholder="Name" className="border p-3 rounded-lg" required />
          <input type="email" placeholder="Email" className="border p-3 rounded-lg" required />
          <input type="tel" placeholder="Phone" className="border p-3 rounded-lg" required />
          <textarea placeholder="Message" className="border p-3 rounded-lg h-32" required></textarea>
          <button type="submit" className="bg-zinc-800 text-white py-3 rounded-lg">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
