'use client'
import { useRouter } from "next/navigation";
const Homepage = ()=>{
    const router = useRouter();
    const handleBtn = ()=>{
        router.push("/")
      }

return (
  <>
    <p>adsd</p>
    <h1 className="text-3xl font-bold underline">ádsadá</h1>
    <button onClick={() => handleBtn()}> back </button>
  </>
);
}
export default Homepage;