import React from 'react';
import { Home as ThirdGrade1stSemester } from './pages/ThirdGrade1stSemester/Home/Index';
import { Home as ThirdGrade2ndSemester } from './pages/ThirdGrade2ndSemester/Home/Index';
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import styles from './App.module.scss'
import { ForthGrade1stSemester } from './pages/ForthGrade1stSemester/Index';
import classNames from 'classNames';
export const App = () => {
    const location = useLocation();
    
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <Link className={classNames(styles.link,(location.pathname ==="/"||location.pathname ==="/4g1s")&& styles.active)} to={'/4g1s'}>四 上</Link>
                    <Link className={classNames(styles.link,(location.pathname ==="/3g2s")&& styles.active)} to={'/3g2s'}>三 下</Link>
                    <Link className={classNames(styles.link, location.pathname ==="/3g1s"&&styles.active)}  to={'/3g1s'}>三 上</Link>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" Component={ForthGrade1stSemester}></Route>
                        <Route path="/4g1s" Component={ForthGrade1stSemester}></Route>
                        <Route path="/3g2s" Component={ThirdGrade2ndSemester}></Route>
                        <Route path="/3g1s" Component={ThirdGrade1stSemester}></Route>
                    </Routes>
                </div>
            </div>
            <div className={styles.foot} >
                For my dearest girl.
                <a  href='https://beian.miit.gov.cn/' target='_blank'>浙ICP备2023027532号-1</a>
            </div>
        </div>
    );
}
