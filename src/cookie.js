(function (window) {
    window.cookie = new function Client() {
        var cookieVal = [];
        
        function get(name) {
            if(typeof name === 'undefined') {
                return document.cookie
            }
           
        }

        function set(name, value) {
       
            if (typeof name === 'undefined' || typeof value === 'undefined') {
                return;
            }

            cookieVal.push(name + '=' + value + ';');
            //date.toGMTString()
            //var date = new Date();
            //date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
           // cookieVal.push(' expires= Thu, 21 Aug 2014 20:00:00 UTC;');

           // cookieVal.push(' path=/; ');

           // cookieVal.push(' domain=example.com;')

           // cookieVal.push('secure');
            console.log(cookieVal.join(''))
            document.cookie = cookieVal.join('');
        }

        function remove() {

        }

        return {
            get: get,
            set: set,
            delete: remove
        }
    }
}(window));