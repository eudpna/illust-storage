import fs from 'fs'
import path, { resolve } from 'path'

// illuts-storageの使い方
// まずイラストを /script/src/illutsts に入れる。
// cd script する。
// その後、makeImageFileNameShorter.tsを実行する。
// npx ts-node src/makeImageFileNameShorter.ts
// その後、getImageList.tsを実行する。
// npx ts-node src/getImageList.ts
// 最後に、ページを開く。
// yarn dev
// 2025/11/20

const imgDir = path.join(process.cwd(), 'src/illusts')

const targetDir = path.join(process.cwd(), '/src/imgList.json')


const illusts = [] as {
    filename: string
    filenameShort: string
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
        
        // makeImageFileNameShorterからコピペ
        const filename = file
        const filebase = filename.split('.')[0]
        const suffix = filename.split('.')[1]
        const filebaseShort = filebase.split('_')[0]
        const filenameShort = filebaseShort + '.' + suffix
        
        illusts.push({
            filename: file,
            filenameShort: filenameShort,
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



