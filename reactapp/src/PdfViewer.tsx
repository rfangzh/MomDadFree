import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

type Props = {
}

export const PdfViewer = (props: Props) => {
    const [search] = useSearchParams();
    const pdfUrl = search.get("url")
    const src = pdfUrl && `/web/viewer?file=${pdfUrl}`;
    console.log(src);

    return (
        <>
            dddd

            {src && <iframe src={src} style={{ width: `100vw`, height: "100vh" }}></iframe>}
        </>
    )
}