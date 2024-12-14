import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>
      <h1 className="font-bold text-red-500">My React page</h1>
      <p>This is a React page</p>

      <button onClick={() => alert("button clicked!")}>Click me!</button>
    </Layout>
  );
}
