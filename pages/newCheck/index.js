import { useRouter } from "next/router";

const NewCheck = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Selected brand</h1>
      <button onClick={() => router.push("/newCheck/startCheck")}>123</button>
    </div>
  );
};

export default NewCheck;
