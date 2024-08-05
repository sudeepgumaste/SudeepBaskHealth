import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("@/components/templates/dashboard"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <h1 className="text-lg lg:text-2xl font-bold | mb-3 lg:mb-5">Welcome Back</h1>
      <Dashboard />
    </>
  );
}
