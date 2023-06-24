import Head from "next/head";
import { ToastContainer } from "react-toastify";

//internal import
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";

import MobileFooter from "@layout/footer/MobileFooter";
import FeatureCard from "@component/feature-card/FeatureCard";
import NavBarTop from "./navbar/NavBarTop";
import TopProgressBar from "@component/progress/TopProgressBar";
import { Box } from "@chakra-ui/react";


const Layout = ({ title, description, children }) => {
  return (
    <>
      <ToastContainer />
      <TopProgressBar />
      <Box className="font-sans" scrollBehavior={'smooth'}>
        <Head>
          <title>
            {title
              ? `Grocery Store | ${title} Page`
              : "Grocery Store - Developed by Karas"}
          </title>
          {description && <meta name="description" content={description} />}
          <link ref="icon" href="/favicon.png" />
        </Head>
        <NavBarTop />

        <Navbar />
        <div className="bg-gray-50">{children}</div>
        <MobileFooter />
        <div className="w-full">
          <div className="hidden my-3 relative lg:block mx-auto max-w-screen-2xl py-6 px-3 sm:px-10">
            <FeatureCard />
          </div>
          <div className=" w-full">
            <Footer />
          </div>
        </div>
      </Box>
    </>
  );
};

export default Layout;
