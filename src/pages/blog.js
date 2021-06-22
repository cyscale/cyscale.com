import React from "react";
import Layout from "../components/layout/layout.js";
import Blogs from "../components/blogs";
import heroBG from "../assets/images/privacy&blog-bg.svg";

const Index = () => (
  <Layout pageName="blogs" heroBG={heroBG}>
    <Blogs />
  </Layout>
);
export default Index;
