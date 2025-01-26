import React from 'react'
import styles from './Index.module.scss'
import classNames from 'classNames'
import { Schedule } from '../Schedule/Index'
import { English } from '../English/Index'
import { Language } from '../Language/Index'
import { Math } from '../Math/Index'

type Props = {}

export const Home = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={classNames(styles.card, styles.schedule)}>
                <div className={styles.cardTitle}>课程表</div>
                <div className={styles.cardContent}>
                    <Schedule></Schedule>
                </div>
            </div>
           
            <div className={classNames(styles.card)}>
                <div className={styles.cardTitle}>三上资源</div>
                <div className={styles.cardContent}>
                    <English></English>
                    <Language></Language>
                    <Math></Math>
                </div>
            </div>
        </div>
    )
}