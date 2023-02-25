import Link from "next/link";
import { Montserrat } from "next/font/google";
import styles from "./page.module.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={styles.main}>
            <aside className={styles.sideNav}>
                <Link href="/forYou">For You</Link>
                <Link href="/following">Following</Link>
            </aside>
            <div className={styles.mainContent}></div>
        </main>
    );
}
