"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const navigate = (name) => {
    router.push(name);
  };

  return (
    <div>
      <h1>Link, Navigation and Basic Routing</h1>
      <Link href="/login">Go to Login Page</Link>
      <br />
      <br />
      <Link href="/about">Go to About Page</Link>
      <br />
      <br />

      <button onClick={() => navigate("/login")}>Navigate to Login Page</button>
      <br />
      <br />
      <button onClick={() => navigate("/about")}>Navigate to About Page</button>
    </div>
  );
}
