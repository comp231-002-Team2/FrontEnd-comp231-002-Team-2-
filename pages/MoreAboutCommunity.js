import styles from '@/styles/MoreAboutCommunity.module.css';
import Navbar from '@/components/Navbar'
import Link from 'next/link';

export default function PostCommunity() {
  return (
    <>
      <div>
        
        
          <a className={styles.GlobalCommunity}>Global Community</a>
          <a className={styles.location}>City, Ontario, Canada</a>
          <a className={styles.postalCode}>PostalCode</a>
          <a className={styles.email}>your_email@gmail.com</a>
          <a className={styles.phone}>Phone Number</a>
          <img className={styles.image} src='/Healthy Food resturant.png' ></img>
          <img className={styles.image1} src='/instagram.png' ></img>
          <img className={styles.image2} src='/youtube.png' ></img>
          <img className={styles.image3} src='/globe.png' ></img>
          <div className={styles.box1}></div>
          <a className={styles.content}>Content</a>
          <div className={styles.box2}></div>
          <Link href="/display"  className={styles.returnBack}>Return Back</Link>

      </div>
      <Navbar />
    </>
  );
}



