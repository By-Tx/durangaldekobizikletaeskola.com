"use client"
import { authClient } from "@/lib/auth-client"; 
import { useState } from 'react';
 
export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
 
 
  const signUp = async () => {
     await authClient.signUp.email({ 
        email, 
        password, 
        name, 
        callbackURL: '/sign-in'
       
     }, { 
        onRequest: () => { 
         //show loading
        }, 
        onSuccess: () => { 
          alert('Sign Up Successful');
        }, 
        onError: (ctx) => { 
          alert(ctx.error.message); 
        }, 
      }); 
  };
 
  return (
    <div className="mt-20 max-w-md mx-auto  p-8 rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
  
  <div className="space-y-4 text-black">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
      <input 
        id="name"
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
        placeholder="Enter your full name" 
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
      <input 
        id="email"
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
        placeholder="Enter your email" 
      />
    </div>

    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
      <input 
        id="password"
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
        placeholder="Enter your password" 
      />
    </div>

    <div>
      <button 
        onClick={signUp} 
        className="w-full py-3 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Sign Up
      </button>
    </div>
  </div>
</div>

  );
}