
import Layout from "@/components/Layout";
import { API_URL } from "../config";
import GoodsCart from "@/components/GoodsCart";

 
export default function Home( {products} ) {

  return (
    <Layout title="Online Store | Home Page">
      <h2>Welcome to out store</h2>

        {products && products.map( pr => (<GoodsCart key={pr.id} good={pr} /> ))}
    </Layout> 
  )
}

export async function getServerSideProps(){
  const res = await fetch(`${API_URL}/api/products`);
  const products = await res.json();

  return {
    props: {
      products
    }
  }
}