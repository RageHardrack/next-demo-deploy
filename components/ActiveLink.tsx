import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  text: string;
  href: string;
}

const ActiveLink: React.FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();

  const style: React.CSSProperties = {
    color: "#0070f3",
    textDecoration: "underline",
  };

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
