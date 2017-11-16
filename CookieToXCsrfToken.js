var CookieToXCsrfToken = function() {
    this.evaluate = function(context) {
        var request = context.getCurrentRequest(),
            cookies = (request.getHeaderByName('Cookie') || '').split(';'),
            token = null;

        for (var index in cookies) {
            if (cookies[index].indexOf('X-CSRF-TOKEN') == 0) {
                token = cookies[index].split('=')[1]
            }
        }

        return token;
    }
}

CookieToXCsrfToken.identifier = "nl.opensolutions.CookieToXCsrfToken";
CookieToXCsrfToken.title = "Cookie To X-CSRF-TOKEN";

registerDynamicValueClass(CookieToXCsrfToken)
