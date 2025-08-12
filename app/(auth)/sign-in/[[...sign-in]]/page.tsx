import { SignIn } from '@clerk/nextjs';
import React from 'react';


const SignInPage = () => {
  return (
    <div className="signin-background-wrapper" style={{ position: "relative" }}>
      <SignIn
        appearance={{
      
        }}
      />
      <div className="beam beam1"></div>
      <div className="beam beam2"></div>
    </div>
  );
};

export default SignInPage;
