'use client'; // Ensures it's a client-side component

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Our Site</h1>
      <Image src="/example-image.jpg" alt="Example" width={300} height={200} />
      <br />
      <button
        onClick={() => router.push('/soon')}
        style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}
      >
        Go to Coming Soon
      </button>
    </div>
  );
}
