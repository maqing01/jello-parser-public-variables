# jello-parser-public-variables
***
* 基于fis + jello所编写的插件
* 在编译过程中将指定类型文件中的指定字符串整体替换


# fis-config.js 配置
***
* fis.config.set('modules.parser.vm', 'public-variables');
* fis.config.set('modules.parser.js', 'public-variables');
* fis.config.set('modules.parser.css', 'public-variables');
* fis.config.set('settings.parser.public-variables', {
* 　　replaceList: [
* 　　　　{"%PUBLIC%": "http://github.com"}
* 　　]
* })

***

* [具体使用参考](http://fex-team.github.io/fis-site/docs/dev/plugin.html)