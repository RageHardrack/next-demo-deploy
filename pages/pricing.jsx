import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";

const pricing = () => {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>

      <h2 className="title">
        Ir al <Link href="/about">Pricing</Link>
      </h2>

      <p className="description">
        Get started by editing <code className="code">pages/pricing.js</code>
      </p>
    </MainLayout>
  );
};

export default pricing;
