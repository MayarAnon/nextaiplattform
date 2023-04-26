// import "@/components/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";
import { Analytics } from "@vercel/analytics/react";
import styles from "../styles/styles.css";
export default function App({ session, Component, pageProps }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </SessionProvider>
  );
}
