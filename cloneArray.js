 var cloneArray = function( arr ) {

    var i, copy;

    if( Array.isArray( arr ) ) {
        copy = arr.slice( 0 );
        for( i = 0; i < copy.length; i++ ) {
            copy[ i ] = cloneArray( copy[ i ] );
        }
        return copy;
    } else if( typeof arr === 'object' && arr !== null ) {
        throw 'Cannot clone array containing an object!';
    } else {
        return arr;
    }

};

module.exports = cloneArray;
