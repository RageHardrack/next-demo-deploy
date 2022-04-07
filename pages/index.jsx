import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>

      <h2 className="title">
        {/* Ir al <a href="/about">About!</a> */}
        Ir al <Link href="/about">About</Link>
      </h2>

      <p className="description">
        Get started by editing <code className="code">pages/index.js</code>
      </p>
    </MainLayout>
  );
}
