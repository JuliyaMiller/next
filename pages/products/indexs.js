import GoodsCart from "@/components/GoodsCart";
import { API_URL } from "../../config/";
import { useFormik } from 'formik';


export default function ProductsList( {products} ){
  const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: val => {
            val.name === 'ban' ? alert('Ban Word'): console.log(val)
        },
    })
      
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>Enter Your Name</label> 
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />

                <button type="submit">Go {`-->`}</button>
            </form>

            {products && products.map( pr => (<GoodsCart key={pr.id} good={pr} /> ))}
        </div>
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
  
    
