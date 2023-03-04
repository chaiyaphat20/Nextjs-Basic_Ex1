import type { AppProps } from "next/app";
import Head from 'next/head';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../assets/styles/index.css";
import 'bootstrap/dist/css/bootstrap.css'
//pageProps ทำให้ แต่ละ ไฟล์ รับ props ได้
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Art title</title>
      </Head>
      <Nav />
      <div className="index-context">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
