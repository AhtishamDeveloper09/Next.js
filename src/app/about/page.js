"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  return (
    <div>
      <h1>About Page</h1>

      <button onClick={() => router.push("/")}>Navigate to Home Page</button>
      <br />
      <br />

      <Link href="/about/aboutcollege">Go to About College Page</Link>
      <br />
      <br />

      <Link href="/about/aboutstudent">Go to About Student Page</Link>
    </div>
  );
}

export default page;
