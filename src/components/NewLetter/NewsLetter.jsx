import React from 'react'
import styles from './NewsLetter.module.css'

const NewsLetter = () => {

    return (
        <div className={styles.newsLetterSection}>
            <div className={styles.newsLetterContainer}>
                <h2 className={styles.newsLetterTitle}>
                Subscribe Our Newsletter
                </h2>
                <form action=""  className={styles.newsLetterSubscriberDetails}>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='Enter your email' />
                    <button>SEND</button>
                </form>
            </div>
        </div>
    )
}

export default NewsLetter