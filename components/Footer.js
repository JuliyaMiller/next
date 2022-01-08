import styles from '@/styles/Footer.module.css';
import Image from 'next/image';
import img_1 from '../public/visa.png';
import img_2 from '../public/master.jpg';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <h2>About Store</h2> 
                <h3>Privacy policy</h3> 
                <h3>Terms of use</h3>
                <h3>Exchange and return</h3>

            </div>
            <div>
                <h2>Buyers</h2>  
                <h3>Catalog</h3> 
                <h3>Discounts</h3>
                <h3>Shipping and payment</h3>
            </div>
            <div>
                <h2>Our contacts</h2>  
                <h3>
                    <a href ="mailto: store@gmail.com">our email: store@gmail.com</a>
                </h3> 
                <h3>
                    <a href="+380978889900">+380978889900</a>
                </h3>
                <h3>Our address: Kiev, st. Shevchenko, 5</h3>
            </div>
            <div>
                <h2>Payment</h2>
                <Image className="img" src={img_1} alt="text"></Image>
                <Image className="img" src={img_2} alt="text"></Image>
            </div>

        </footer>
    )

}
