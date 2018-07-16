define([
    'require',
    'intern/dojo/node!fs' // for capture to filesystem
], function (require, fs) {
    return {
        url: 'http://localhost:3000/#/',

        /// capture option
        capture: true,
        capturePath: 'screenshot',

        takeCapture: function(filename, buffer) {
            if(this.capture){
                fs.writeFileSync(this.capturePath + '/' + filename+'.png', buffer);
            }
        }
    };
});
