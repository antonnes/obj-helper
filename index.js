var ObjectHelper = (function() {       
        
        
    var _size = function(obj) {

        if(typeof obj !== 'object') {
            throw 'No object provied!';
        }

        return Object.keys(obj).length;
    }

    var objtoStr = function(obj) {

        var result = '';

        for(var item in obj) {
            if(typeof obj[item] === 'object') {
                result += objtoStr(obj[item]);
            } else {
                result += obj[item];
            }

        }

        return result;
    }

    var compareObjects = function(obj1,obj2) {

        if(typeof obj1 !== 'object' || typeof obj2 !== 'object') {
            throw 'Need to provide 2 object for comparison!';
        }

        if( (_size(obj1) !== _size(obj2)) || objtoStr(obj1) !== objtoStr(obj2)  ) {
            return false;
        } else {
            return true;
        }

    }

    var indexOfObj = function(arr, obj) {

        if(typeof obj !== 'object') {
            throw 'No object provied!';
        }

        var result = arr.map(function(obj) {
            return objtoStr(obj);
        });           

        return result.indexOf(objtoStr(obj));
    }

    return {
        size: _size,
        objtoStr: objtoStr,
        compare: compareObjects,
        indexOfObj: indexOfObj
    }

})();


module.exports = ObjectHelper;