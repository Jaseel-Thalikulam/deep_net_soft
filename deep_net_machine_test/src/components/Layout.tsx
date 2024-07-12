import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import "../styles/layout.css";
const LayoutComponent = () => {
  return (
    <>
      <Layout className="layout--wrap">
        <Header />
        <Layout className="content">
          {/* <Sider>left sidebar</Sider> */}
          <Outlet />
        </Layout>
        <Footer />
      </Layout>
    </>
  );
};

export default LayoutComponent;
