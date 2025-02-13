"use client"; 

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link href="/">
        <button>Go Back Home</button>
      </Link>


      <style jsx>{`
        .not-found {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
          background-color: #111;
          color: white;
        }
        h1 {
          font-size: 2rem;
        }
        p {
          font-size: 1.2rem;
          margin-bottom: 20px;
        }
        button {
          padding: 10px 20px;
          background-color: #dedede;
          color: #2B509F;
          font-weight: 600;
          border: none;
          cursor: pointer;
          border-radius: 5px;
        }

        button:hover {
        background-color: #ffffff;
        }
      `}</style>
    </div>
  );
}
