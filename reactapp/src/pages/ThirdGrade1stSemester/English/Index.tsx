import React from 'react'
import styles from './Index.module.scss'
type Props = {}




export const English = (props: Props) => {
    const coverUrl = "https://momdadfree-1320717226.cos.ap-shanghai.myqcloud.com/%E8%8B%B1%E8%AF%AD%E5%B0%81%E9%9D%A2.jpg";
    const pdfUrl = "https://momdadfree-1320717226.cos.ap-shanghai.myqcloud.com/%E4%B8%89%E5%B9%B4%E7%BA%A7%E4%B8%8A%E8%8B%B1%E8%AF%AD.pdf";
    const ebookAddress = "https://book.pep.com.cn//1212001301125/mobile/index.html";
    const interactiveBook = "https://momdadfree-1320717226.cos.ap-shanghai.myqcloud.com/start.html"

    return (
        <table>
            <tr>
                <td colSpan={3}>
                    <a target='_blank' href={ebookAddress} rel='no-referrer' referrerPolicy='no-referrer'>
                        <img alt="" className={styles.cover} src={coverUrl}></img>
                    </a>
                </td>
            </tr>
            <tr>
                <td>
                    <a target='_blank' href={ebookAddress} rel='no-referrer' referrerPolicy='no-referrer'>☝ 在线课本</a>
                </td>
                <td>
                    <a target='_blank' href={pdfUrl}>pdf下载</a>
                </td>
                <td>
                    <a target='_blank' href={interactiveBook}>点读</a>
                </td>
            </tr>
            {/* <tr>
                <td colSpan={3} >
                    <div className={styles.review}>
                        <h3>三上期末复习资料</h3>
                        <a target='_blank' href='/web/viewer.html?file=/files/26个字母印刷体和手写体的比较.pdf'
                            rel='no-referrer' referrerPolicy='no-referrer'>1. 26个字母印刷体和手写体的比较
                        </a>
                        <a target='_blank' href='/web/viewer.html?file=/files/三年级上册复习思维导图.pdf'
                            rel='no-referrer' referrerPolicy='no-referrer'>2. 复习思维导图
                        </a>
                        <a target='_blank' href='/web/viewer.html?file=/files/新版人教版PEP小学三年级上册复习资料.pdf'
                            rel='no-referrer' referrerPolicy='no-referrer'>3. 复习资料
                        </a>
                    </div>
                </td>
            </tr> */}
        </table>
    )
}