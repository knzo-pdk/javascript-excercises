const repeatString = function(string, num) {
    let str = '';
    if(num>=0){
        for(var i=0; i<num; i++){
            str+=string;
        }
        return str;
    }else {
        let str = 'ERROR';
        return str;
    }
};

// Do not edit below this line
module.exports = repeatString;
