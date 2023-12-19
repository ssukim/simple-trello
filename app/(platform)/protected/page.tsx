"use client";

import { UserButton, useAuth } from "@clerk/nextjs";

const ProtectedPage = () => {
  const { userId } = useAuth();

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Hello {userId}</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default ProtectedPage;