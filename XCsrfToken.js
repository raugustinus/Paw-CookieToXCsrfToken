// Grabs the Django CSRF token from the cookie csrftoken, returns as dynamic value
var CsrfToken = function() {
    this.evaluate = function(context) {
        var request = context.getCurrentRequest(),
            cookies = (request.getHeaderByName('Cookie') || '').split(';'),
            token = null;
        
        // X-CSRF-TOKEN=ba00d02a-7154-43be-989c-7cf802384f40; JSESSIONID=xsrpzhvcz8rk8x83daki8ci0; JSESSIONID=2t9oapfgjk2519zp97mfb1otf; X-CSRF-TOKEN=6c28ef42-7e31-446c-8ac5-d087ee890c72
        for (var index in cookies) {
            if (cookies[index].indexOf('X-CSRF-TOKEN') == 0) {
                token = cookies[index].split('=')[1]
            }
        }

        return token;
    }
}

CsrfToken.identifier = "nl.opensolutions.CookieToXCsrfToken";
CsrfToken.title = "Cookie To X-CSRF-TOKEN";

registerDynamicValueClass(CookieToXCsrfToken)
