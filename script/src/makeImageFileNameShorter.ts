import fs from 'fs'
import path from 'path'

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

// このスクリプトは、イラスト画像ファイルから日本語を取り除く(URLに適切な形にする)ためのスクリプトである。

const srcDir = path.join(process.cwd(), '/src/illusts')
const targetDir = path.join(process.cwd(), '../public/images/illusts')


function makeImageFileNameShorter() {
    // ディレクトリ内をクリア
    fs.rmdirSync(targetDir, { recursive: true } as any);
    fs.mkdirSync(targetDir)

    const files = fs.readdirSync(srcDir)

    
    
    for (let i = 0; i < files.length; i++) {
        const filename = files[i]

        // .DS_Storeを除外
        if (Array.from(filename)[0] === '.') continue

        const filebase = filename.split('.')[0]
        const suffix = filename.split('.')[1]
        const filebaseShort = filebase.split('_')[0]
        const filenameShort = filebaseShort + '.' + suffix
       
        fs.copyFileSync(path.join(srcDir, filename), path.join(targetDir, filenameShort))
    }
    
}

makeImageFileNameShorter()