import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quantum Computing: The Next Frontier</h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="image" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Quantum Computing: The Next Frontier</h1>
          <p className={styles.postDescription}>
            Explore the principles behind quantum computing, how it differs from
            classical computing, and its potential applications in cryptography,
            material science, and solving complex problems that are currently
            intractable.
          </p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
