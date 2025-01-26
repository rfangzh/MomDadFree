import React from 'react';
import { useLocation } from 'react-router-dom'
type Reference = {
    title: string,
    url: string,
}
type EnglishItem = {
    grade: string,
    link: string,
    icon: string,
    ebook?: string,
}
type AssignmentItem = {
    subject: string,
    content: string[],
    icon: string,
    reference?: Reference[],
}

export const App = () => {
    const location = useLocation();
    const englishItems: EnglishItem[] =
        [
            { grade: "四年级下", icon: "🐰", link: "https://momdadfree-1320717226.cos.ap-shanghai.myqcloud.com/%E5%9B%9B%E4%B8%8B/start.html" },
            { grade: "四年级上", icon: "🐭", link: "https://momdadfree-1320717226.cos.ap-shanghai.myqcloud.com/%E5%9B%9B%E4%B8%8A%E8%B5%84%E6%BA%90%E5%8C%852023%E7%A7%8B/start.html" },
            { grade: "三年级下", icon: "🐷", link: "https://momdadfree-1320717226.cos.ap-shanghai.myqcloud.com/%E4%B8%89%E4%B8%8B/start.html" },
            { grade: "三年级上", icon: "😺", link: "https://momdadfree-1320717226.cos.ap-shanghai.myqcloud.com/start.html" },
        ];

    const assignments: AssignmentItem[] = [
        {
            subject: "语文", icon: "📕",
            reference: [
                { title: "课外古诗", url: "./assets/四" }
            ],
            content: [
                `1.	练字`,
                `2.	试背四下古诗`,
                `   课外：《春夜洛城闻笛》《逢入京使》《剑客》《江南逢李龟年》《卜算子·咏梅》`,
                `   课内：《四时田园杂兴（其二十五）》《宿新市徐公店》《清平乐·村居》《芙蓉楼送辛渐》《塞下曲》《墨梅》《卜算子·咏梅》《江畔独步寻花》《蜂》《独坐敬亭山》`,
                `3.	习作：（交电子稿至邮箱asqy314@163.com）`,
                `  （1）我的寒假生活。`,
                `  （2）两篇征文二选一：要求如下`,
                `4.	寒假乐园：期末语文成绩97分及以上免做语文部分。`,
                `5.	每日阅读：开学测试《十万个为什么》《灰尘的旅行》《新月集》阅读情况记录在《阅读记录卡》（见附件1）上。`,
            ]
        },
        {
            subject: "数学", icon: "📗", content: [
                `一：《寒假乐园》，100分免做`,
                `二：练习纸（见附件）`,
                `三：差异作业（根据自身情况二选一）：`,
                `    1、加强基础练习：建议每天练习4道计算＋2道解决问题练习，题目可以在数学书里找或自备练习册。`,
                `    2、每天两道聪明题，题目自备（可以是练习册，开学初检查过会归还）。`
            ]
        },
        {
            subject: "英语", icon: "📘", content: [
                `1. 寒假乐园英语部分（100免做）`,
                `2. 每日口语听读：四上或四下英语书（四下资源包见班级钉钉群）`,
                `3. 我的蛇年团圆饭（二选一）`,
                `    ① 制定蛇年团圆饭英文套餐小报 `,
                `    ② 拍摄团圆饭英文介绍视频（小报A4纸大小并美化，视频发钉钉群，开学评比）`]
        },
        {
            subject: "科学", icon: "📙", content: [
                `1. 小学综合寒假作业本；`,
                `2. 寒假项目化作业—“我的年夜饭我做主”`,
                ` `,
                `提示：项目化作业纸质稿开学上交，作品照片或视频提交在钉钉群“寒假科学项目化作业”文件夹内。`]
        },
    ]

    return (
        <>
            <div className='flex flex-col flex-1 flex-wrap items-center justify-center gap-2 py-5'>
                <div className='flex flex-col w-11/12 bg-violet-300/40 backdrop-blur-lg rounded-2xl p-5 shadow-2xs'>
                    <h1 className='text-2xl text-center'>
                        英语跟读
                    </h1>
                    <div className='bg-white/50 h-[2px] my-2 rounded-full'></div>
                    <div className='flex flex-wrap items-center justify-center'>
                        {
                            englishItems.map((item, i) => {
                                return <a key={i}
                                    className='flex flex-row rounded-full bg-violet-300 m-2 pl-2 pr-3 py-2 items-center shadow-2xs text-small' href={item.link}>
                                    <div className='bg-white rounded-full mr-2 size-6 flex justify-center items-center'>{item.icon}</div>
                                    {item.grade}
                                </a>
                            })
                        }
                    </div>
                </div>
                {
                    assignments.map((item, i) => {
                        return <div className='flex flex-col w-11/12 bg-violet-300/40 backdrop-blur-lg rounded-2xl p-5 shadow-2xs'>
                            <h1 className='text-2xl text-center'>
                                {item.icon} {item.subject}寒假作业
                            </h1>
                            <div className='bg-white/50 h-[2px] my-2 rounded-full'></div>
                            <div>
                                {item.content.map((c, ci) => {
                                    return <p className='whitespace-pre-wrap'>{c}</p>
                                })}</div>
                        </div>
                    })
                }

            </div>
            <div className="flex flex-row items-center justify-center text-xs text-gray-500">
                <span className='m-1 mx-2'>
                    💚FOR MY DEAREST GIRL💚
                </span>
                <a className='m-1 mx-2' href='https://beian.miit.gov.cn/' target='_blank'>🛡️浙ICP备2023027532号-1🛡️</a>
            </div>
        </>
    );
}
