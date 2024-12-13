"use client"
import { authClient } from "@/lib/auth-client"; //import the auth client
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
    <div className="mt-52">
      <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
}