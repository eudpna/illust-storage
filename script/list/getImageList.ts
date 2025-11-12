import fs from 'fs'
import path, { resolve } from 'path'

const imgDir = path.join(process.cwd(), '../../public/images/illusts')

const targetDir = path.join(process.cwd(), '/imgList.json')

// let imgfiles: string[] = []

const illusts = [] as {
    filename: string
    date: string
    name: string
}[];

async function main() {
    
    const tmp = fs.readdirSync(imgDir)
    Promise.all(tmp.map(async (file) => {
        if (file.slice(0, 1) === '.') return
        const tmp0 = file.split('.')[0]
        const illust_date = tmp0.split('_')[0].slice(0, 10)
        const illust_name = tmp0.split('_').pop() as string
        
        
        illusts.push({
            filename: file,
            date: illust_date,
            name: illust_name
        })

        
        illusts.sort((a, b) => {
            // 日付を数値に変換する関数
            // const dateToNum = (date: string) => {
            //     return Number((date.replace(/-/g, '').replace(/_/g, '') + '00000000').slice(0, 12))
            // }
            // return dateToNum(a.date) - dateToNum(b.date)

            // ファイル名の名前順に並べ替える
            return a.filename.localeCompare(b.filename)
        })

    })).then(() => {
        fs.writeFileSync(targetDir, JSON.stringify(illusts, null, 4))
    })

}

main()



