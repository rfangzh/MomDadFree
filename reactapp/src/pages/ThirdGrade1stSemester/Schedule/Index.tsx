import React from 'react'
import styles from './Index.module.scss'
type Props = {}

export const Schedule = (props: Props) => {
  const schedualImage = "https://momdadfree-1320717226.cos.ap-shanghai.myqcloud.com/%E8%AF%BE%E7%A8%8B%E8%A1%A8.jpg?q-sign-algorithm=sha1&q-ak=AKIDQk5TwXULEcTihPrxGwVKJJHeAj6UMJwlkyX-XDJcvHSA7puF17MLDHCFCXIS-3Fa&q-sign-time=1693994386;1693997986&q-key-time=1693994386;1693997986&q-header-list=host&q-url-param-list=ci-process&q-signature=5ce7e224560501e1b61858e63deef89fbd4ced61&x-cos-security-token=PCdcnNDKwESOsQ7UenNTZOohXv5Y2uDacd22b94f0801d8e97ccdf7694f3f1ca2vbVBqJa7TflKJow1cJcHiZaPKmxeOzLIJ83mxZuyf6UkrTR8o58NUeZ0L7iUyqd0IyJC5A3pd4BFn9-vQkOYn6-ZWjieRdIs8_9IUxiOSO9-BMOaDauv5k4-1-Mrtfyv_zt4-uSOxrENQTnI3hUgBJgOuhcaQFXMP0IHVGXQbQTLDtIaRkwCphjdWrYOWi0w&ci-process=originImage";
  return (
    <table>
      <thead>
      <tr>
          <th >上学</th>
          <td >夏令时</td>
          <th colSpan={2}>8:10</th>
          <td >冬令时</td>
          <th colSpan={2}>8:10</th>
        </tr>
        
        <tr>
          <td scope='splitor' colSpan={7}></td>
        </tr>
        <tr>
          <th colSpan={2} ></th>
          <th scope='col'>周一</th>
          <th scope='col'>周二</th>
          <th scope='col'>周三</th>
          <th scope='col'>周四</th>
          <th scope='col'>周五</th>
        </tr>
      </thead>
      <tbody>
       
        <tr>
          <th colSpan={2}></th>
          <td>升旗仪式</td>
          <td colSpan={4}>阳光大课间</td>
        </tr>
        <tr>
          <th scope='row' rowSpan={3}>上午</th>
          <td>第一节</td>
          <td>语文</td>
          <td>数学</td>
          <td>语文</td>
          <td>数学</td>
          <td>语文</td>
        </tr>
        <tr>
          <td>第二节</td>
          <td>数学</td>
          <td>英语</td>
          <td>信息科技</td>
          <td>语文</td>
          <td>数学</td>
        </tr>
        <tr>
          <td>第三节</td>
          <td>语文</td>
          <td>语文</td>
          <td>益智乐园</td>
          <td>美术</td>
          <td>科学</td>
        </tr>
        <tr>
          <th scope='row'></th>
          <td colSpan={6}>午餐 午间活动 午休</td>
        </tr>

        <tr>
          <th scope='row' rowSpan={3}>下午</th>
          <td>第四节</td>
          <td>体育与健康</td>
          <td>音乐</td>
          <td>英语</td>
          <td>英语</td>
          <td>音乐</td>
        </tr>
        <tr>
          <td>第五节</td>
          <td>科学</td>
          <td>体育与健康</td>
          <td>道德与法治</td>
          <td>劳动</td>
          <td>道德与法治</td>
        </tr>
        <tr>
          <td>第六节</td>
          <td>缤纷课堂/心理健康</td>
          <td>书法</td>
          <td>美术</td>
          <td>体育与健康</td>
          <td>少先队活动</td>
        </tr>
        <tr>
          <td  scope='splitor' colSpan={7}></td>
        </tr>
        {/* <tr>
          <th rowSpan={2}>放学夏令时</th>
          <th>不晚托</th>
          <td>16:10</td>
          <td>16:10</td>
          <td>16:10</td>
          <td>16:10</td>
          <td>16:20</td>
        </tr>
        <tr>
          <th>晚托</th>
          <td colSpan={5}>17:20</td>
        </tr> */}
        <tr>
          <th rowSpan={2}>放学冬令时</th>
          <th>不晚托</th>
          <td colSpan={4}>15:40</td>
          <td>15:50</td>
        </tr>
        <tr>
          <th>晚托</th>
          <td colSpan={5}>16:50</td>
        </tr>
      </tbody>
    </table>
  )
}