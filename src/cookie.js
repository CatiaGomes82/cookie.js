window.cookie = new function Client() {
    var cookieVal = [];

    this.get = function (name) {
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

    this.set = function (name, value, opts) {
        cookieVal = [];

        if (typeof name === 'undefined' || typeof value === 'undefined') {
            return;
        }

        cookieVal.push(name + '=' + value + ';');

        if (typeof opts !== 'object') {
            document.cookie = cookieVal.join('');
            return;
        }

        for (var prop in opts) {
            // not valid property
            if (!/^(?:expires|max\-age|path|domain|secure)$/i.test(prop)) {
                return false;
            }

            switch (prop) {
                case 'expires':
                case 'max-age':
                    var number = parseInt(opts[prop]);

                    if (isNaN(number)) {
                        cookieVal.push(prop + '=Tue, 19 Jan 2038 00:00:00 GMT;'); // max expiry date
                    } else {
                        var date = new Date();
                        date.setTime(date.getTime() + (number * 24 * 60 * 60 * 1000));
                        cookieVal.push(prop + '= ' + date.toUTCString() + ';');
                    }

                    break;
                case 'domain':
                    cookieVal.push('domain=' + opts[prop] + ';')
                    break;

                case 'path':
                    cookieVal.push(' path=' + opts[prop] + ';');
                    break;

                case 'secure':
                    if (typeof opts[prop] === 'boolean') {
                        cookieVal.push('secure;');
                    }
                    break;

                default:
                    break;
            }
        }
        console.log(cookieVal.join(''))
        document.cookie = cookieVal.join('');
    }

    this.delete = function (name) {
        document.cookie = name+'=; Max-Age=-99999999;'; 
    }
}
