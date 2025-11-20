import { Illust } from "./Illust"
import imgList from '../script/src/imgList.json'
import { A } from "./A"


export const Main: React.FC<{
}> = (props) => {
    return <div>
        <div className="max-w-xl mx-auto">

            <div className="px-4 pb-2 pt-2">
                <h1 className='font-bold text-gray-700' style={{
                }}>
                    <A href="https://nyaw.net" inSite
                        className="visited:text-blue-600">
                        nyaw.net
                    </A>
                    </h1>
            </div>

            <div className="px-4 mt-16 pb-24">

                <div className='pb-12'>
                    <div className="text-2xl mb-6" style={{
                        borderBottom: 'solid 1px #999'
                    }}>
                        イラスト保管庫
                    </div>
                    <div className="">
                        <div className="mb-2">
                            {imgList.length}件
                        </div>
                        {imgList.map((d, index) => {
                            // if (!d.title) return null
                            return <Illust key={index} {...d} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
}