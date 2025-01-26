import React from 'react'
import styles from './Index.module.scss'
import classNames from 'classNames'

type Props = {}

export const Home = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={classNames(styles.card)}>
                <div className={styles.cardTitle}>三下资源</div>
                <div className={styles.cardContent} style={{margin:`40px`}}>
                <a href='https://momdadfree-1320717226.cos.ap-shanghai.myqcloud.com/%E4%B8%89%E4%B8%8B/start.html'>英语跟读</a>


                </div>
            </div>

        </div>
    )
}