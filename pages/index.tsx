import Head from 'next/head'
import React from 'react'
import { Main } from '../components/Main'


const Index: React.FC<{}> = () => {
    return <>
        <Head>
            <title>イラスト保管庫 | nyaw.net</title>
            {/* <meta name="robots" content="noindex" /> */}
        </Head>
        <div className="" lang="ja">
            <Main/>
        </div>
    </>
}

export default Index