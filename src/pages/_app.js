import "../styles/globals.css";
import Layout from "../Components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Components/Navigation";
import Footer from "../Components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
