const BookmarkModel = require('../models/bookmark');
const Repository = require('../models/repository');
module.exports =
    class BookmarksController extends require('./Controller') {
        constructor(HttpContext) {
            super(HttpContext, new Repository(new BookmarkModel()));
        }



        
        valueMatch(value, searchValue) {
            try {
                return new RegExp('^' + searchValue.toLowerCase().replace(/\*/g, '.*') + '$').test(value.toString().toLowerCase());
            } catch (error) {
                console.log(error);
                return false;
            }
        }
        compareNum(x, y) {
            if (x === y) return 0;
            else if (x < y) return -1;
            return 1;
            }


            innerCompare(x, y) {
                if ((typeof x) === 'string')
                return x.localeCompare(y);
                else
                ret
            }

           
            
    
    }