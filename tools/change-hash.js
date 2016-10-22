/**
 * Created by houdong on 16/8/26.
 */
let fs = require('fs');
let uuid = require('node-uuid');

async function changeHash(){
    
    //文件hash替换
    let hash = uuid.v1();
    let htmlFileName = "index.html";
    let html = fs.readFileSync(htmlFileName, "utf8");
    let htmlOutput = html.replace(
        /<script\s+src=(["'])(.+?)common\.min\.js.*<\/script>/,
        '<script src="public/build/js/common.min.js?'+hash+'"></script>');
    htmlOutput = htmlOutput.replace(
        /<link\s+href=(["'])(.+?)common\.min\.css.*\/>/,
        '<link href="src/main/webapp/public/build/css/common.min.css?'+hash+'" rel="stylesheet"/>');
    fs.writeFileSync(
        htmlFileName,
        htmlOutput);
}
export default changeHash;