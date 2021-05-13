import React, { Component } from 'react';
import styles from './index.css';
import container from 'ddi-assets'

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <img src={container.assets['500']} alt=""/>
          <img src={container.assets['Jing']} alt=""/>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
    </div>
  );
}
