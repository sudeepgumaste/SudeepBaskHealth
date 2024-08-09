import { getLiveData } from "@/queries/use-get-live-data";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Dashboard = dynamic(() => import("@/components/templates/dashboard"), {
  ssr: false,
});

export default async function Home() {
  const data= await getLiveData(process.env.BACKEND_URL as string);
  
  return (
    <>
      <h1 className="text-lg lg:text-3xl font-bold | mb-3 lg:mb-5">Welcome Back</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard data={data} />
      </Suspense>
    </>
  );
}
