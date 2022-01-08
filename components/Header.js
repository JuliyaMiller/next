import styles from '@/styles/Header.module.css' 

export default function Header() {
    return (
        <header className={styles.header}>
            <h3>Store</h3>
            <nav>
                <ul>
                    <li>Cart</li>
                    <li>About Us</li>
                </ul>

            </nav>
        </header>
    )
}
