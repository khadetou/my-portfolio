import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/style.module.scss";
export default function Logo({ src, ...rest }) {
  const { logo } = styles;
  return (
    <Link href="/">
      <a className={logo} {...rest}>
        <Image
          src="/images/logo.svg"
          width={94}
          height={32}
          alt="nextjs landing"
        />
      </a>
    </Link>
  );
}
