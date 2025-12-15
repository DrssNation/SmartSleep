import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/ui/guest";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans text-green-400 text-3xl">
     <p>Welcome {user?.firstName}!</p>
    </div>
  );
}
