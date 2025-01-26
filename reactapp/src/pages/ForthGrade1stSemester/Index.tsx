import React from 'react'
import styles from './Index.module.scss'
import classNames from 'classNames'

type Props = {}

export const ForthGrade1stSemester = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={classNames(styles.card)}>
                <div className={styles.cardTitle}>四上资源</div>
                <div className={styles.cardContent} style={{margin:`40px`}}>
                    <a href='https://momdadfree-1320717226.cos.ap-shanghai.myqcloud.com/%E5%9B%9B%E4%B8%8A%E8%B5%84%E6%BA%90%E5%8C%852023%E7%A7%8B/start.html'>英语跟读</a>
                </div>
            </div>

        </div>
    )
}