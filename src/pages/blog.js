import React from "react";
import Layout from "../components/layout/layout.js";
import Blogs from "../components/blogs";
import heroBG from "../assets/images/privacy&blog-bg.svg";

const Index = () => (
  <Layout
    pageName="blogs"
    heroBG={heroBG}
    title="Cloud and Data Security Blog - Cyscale Power Cloud Platform"
    description="Cloud & Data Security blog: cloud-native security, Kubernetes Security, Data Security, DevOps Tools, DevSecOps, Continuous integration, Runtime protection and Knowledge Graphs."
  >
    <Blogs />
  </Layout>
);
export default Index;
