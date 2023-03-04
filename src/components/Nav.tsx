import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav>
      <Link href="/"> HOME |</Link>
      <Link href="/services"> Services |</Link>
      <Link href="/aboutus"> AboutUs |</Link>
    </nav>
  );
}
