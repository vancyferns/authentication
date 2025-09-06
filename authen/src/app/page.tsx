"use client"
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>; // while Clerk is fetching user data
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {isSignedIn ? (
        <>{user?.primaryEmailAddress?.emailAddress}</>
      ) : (
        <>hello</>
      )}
    </div>
  );
}
