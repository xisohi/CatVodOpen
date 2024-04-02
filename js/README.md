# [Node.js]
## 2024/03/20 open_1.1.3_preview3
    * Optimizing Node.js load speed.
    * Remove quickjs runtime.
    * Cumulative bug fixes and changes.
> open_1.1.3_preview3 已移除quickjs

> 旧版quickjs配置及js 已无法使用，全部都要改成Node.js格式

## Node.js 本地配置：
    * assets://js/index.js.md5

> 只要修改 index.config.js 相关设定，index.config.js.md5 一定要填入新md5

* <参考1：Git Bash 计算 MD5 值>
    * cd CatVodOpen/nodejs/dist/
    * md5sum index.config.js | awk '{print $1}' > index.config.js.md5

## Node.js 远端配置：
    * github://ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@github.com/YuanHsing/CatVodOpen/main/js/index.js.md5

    * github://github_pat_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@github.com/YuanHsing/CatVodOpen/main/js/index.js.md5

    * gitee://

    * Support url config with basic auth. Such as
    https://123486%40qq.com:88888888@dav.jianguoyun.com/dav/cat/index.js.md5

### Support using private Gitee or GitHub repositories as remote config.
    * github://<your personal access token>@github.com/<owner>/<repo>/<ref>/<file path>
    * gitee://<your access token>@gitee.com/<owner>/<repo>/<ref>/<file path>
    * github://ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@github.com/catvod/TestCfg/main/index.js.md5
    * gitee://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@gitee.com/catvod/test-cfg/master/index.js.md5

### GitHub personal access token
    * Settings > Developer settings > Personal access tokens > Token (classic) > Generate new token
    * Settings > Developer settings > Personal access tokens > Fine-grained tokens > Generate new token

---

### Node.js 建置1-1
    * 下载&安装NVM > https://github.com/coreybutler/nvm-windows/releases
    * WIN+R运行cmd，安装nodejs18.17.1 > nvm install 18.17.1
    
### Node.js 建置1-2
    * git clone https://github.com/catvod/CatVodOpen.git
    * cd CatVodOpen/nodejs/
    * npm i
    * npm install loadish
    * npm install iconv-lite

### Node.js 打包 > dist.zip
    本地打包
    * cd CatVodOpen/nodejs/
    * npm run build

    在线打包 Github
    * Actions > Build NodeJS > Run workflow > Run workflow

### Node.js 调试相关
    * cd CatVodOpen/nodejs/
    * npm run dev
        * 'http://127.0.0.1:3006/spider/' + meta.key + '/' + meta.type + '/test'
            例1：http://127.0.0.1:3006/spider/kkys/3/test
            例2：http://127.0.0.1:3006/spider/copymanga/20/test
            例3：http://127.0.0.1:3006/spider/alist/40/test

        * http://127.0.0.1:3006/check

        * http://127.0.0.1:3006/config