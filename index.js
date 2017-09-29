/**
 * [parser replace custom strings]
 * @param  {[object]} conf [String configuration to replace]
 * @author [maqing01]
 */
/**
 * @use in jr8/fis project
 * @fis-conf.js
 *   fis.config.set('modules.parser.vm', 'public-variables');
 *   fis.config.set('modules.parser.js', 'public-variables');
 *   fis.config.set('modules.parser.css', 'public-variables');
 *   fis.config.set('settings.parser.public-variables', {
 *     replaceList: [
 *       {"%PUBLIC%": "http://github.com"}
 *     ]
 *   })
 */

module.exports = function(content, file, config) {
    'use strict';

    if(!config) {
        throw new Error("Necessary parameter deletion!")
    }
    var replaceList = config.replaceList;
    if(!Array.isArray(replaceList)) {
        throw new Error("Parameter setting error!")
    } else {
        var len = replaceList.length;
        for(var i = 0; i < len; i++) {
            if(typeof replaceList[i] !== 'object' || 
                Object.getOwnPropertyNames(replaceList[i]).length !== 1) {

                console.log("Parameter setting error!");
                continue;
            }
            var myKey = Object.keys(replaceList[i])[0];
            console.log('myKey: ' + myKey);
            var reg = new RegExp(myKey, 'g');
            console.log('reg: ' + reg);
            var newStr = replaceList[i][myKey];
            console.log('newStr: ' + newStr);
            content = content.replace(reg, newStr);
            console.log(content);
        }
    }
	return content;
}