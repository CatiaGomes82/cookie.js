    window.cookie = new function Client() {
        var cookieVal = [];

        function get(name) {
            var cookies = document.cookie.replace(/;/g, ''),
                cookieArray = cookies.split(' ');

            if (cookies === '') {
                return '';
            }

            for (var index = 0; index < cookieArray.length; index += 1) {
                var cookieStringArray = cookieArray[index].split('=');

                if (typeof name !== 'undefined' && cookieStringArray[0] === name) {
                    cookieArray = cookieStringArray[1];
                    break;
                }

                cookieArray[index] = { name: cookieStringArray[0], value: cookieStringArray[1] };
            }

            if (typeof name !== 'undefined') {
                return '';
            }

            return cookieArray;
        }

        function set(name, value) {
            cookieVal = [];

            if (typeof name === 'undefined' || typeof value === 'undefined') {
                return;
            }

            cookieVal.push(name + '=' + value + ';');
            //date.toGMTString()
            //var date = new Date();
            //date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
            cookieVal.push(' expires= Fri, 31 Dec 9999 23:59:59 GMT;');

            cookieVal.push(' path=/;');

          //  cookieVal.push(' domain=example.com;')

           // cookieVal.push('secure');
            console.log(cookieVal.join(''))
            document.cookie = cookieVal.join('');
        }

        function remove() {
            //document.cookie = name+'=; Max-Age=-99999999;'; 
        }

        return {
            get: get,
            set: set,
            delete: remove
        }
    }
