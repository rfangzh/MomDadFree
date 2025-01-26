import React from 'react'
import styles from './Index.module.scss'

type Props = {}

export const Math = (props: Props) => {
    const coverUrl = "https://momdadfree-1320717226.cos.ap-shanghai.myqcloud.com/%E6%95%B0%E5%AD%A6%E5%B0%81%E9%9D%A2.jpg";
    const pdfUrl = "https://momdadfree-1320717226.cos.ap-shanghai.myqcloud.com/%E4%B8%89%E5%B9%B4%E7%BA%A7%E4%B8%8A%E5%86%8C%E6%95%B0%E5%AD%A6.pdf";
    const ebookAddress = "https://book.pep.com.cn/1221001301141/mobile/index.html";
    return (
        <table>
            <tr>
                <td colSpan={2}>
                    {/* 外链无法访问，加上no-referrer才可以 */}
                    <a href={ebookAddress} rel='no-referrer' referrerPolicy='no-referrer' target='_blank'>
                        <img className={styles.cover} src={coverUrl}></img>
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

            </tr>
        </table>
    )
}