"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="hero-section">
        <div className="overlay">
          <div className="content">
            <h2 className="hero-head">Ready to take the Solar Step?</h2>
            <div className="hero-text">
              Our Solar Calculator gives you real-time estimates on how much solar can cut your electricity bills.
              No sales pitch, just clear numbers.
              Find out how much power your roof can generate today.
            </div>

            <button
              className="hero-btn"
              onClick={() => router.push("/calculator")}>
              Start Calculation
            </button>
          </div>
        </div>
      </div>

      main page
    </>
  );
}
