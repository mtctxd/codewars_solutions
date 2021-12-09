// src = https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url) {

    if (url.includes('//www.')) {
        let link =  url.slice(url.indexOf("//www.") + 6, url.lastIndexOf(".") - url.length)
        if (link.includes('.')) {
            return link.slice(0, link.indexOf(".") - link.length)
        }
        return link
    } else if (url.includes('//')) {
        return url.slice(url.indexOf("//") + 2, url.indexOf(".") - url.length)
    } else if (url.includes('www.')) {
        return url.slice(url.indexOf("www.") + 4, url.lastIndexOf(".") - url.length)        
    } 

    return url.slice(0, url.indexOf(".") - url.length)
}


console.log(domainName('http://google.com'), 'google');
console.log(domainName('http://google.co.jp'), 'google');
console.log(domainName('www.xakep.ru'), 'xakep');
console.log(domainName('https://youtube.com'), 'youtube');
console.log(domainName('http://www.52ubgxbd7dsceewj4f4-1.com/img/'), '52ubgxbd7dsceewj4f4-1');
console.log(domainName('http://www.yfoxj.de/users'), 'yfoxj');
console.log(domainName('http://vxezvwt59ljhu3szkewmus8mk2eu.co.za/warez/'), 'vxezvwt59ljhu3szkewmus8mk2eu');
console.log(domainName('https://www.0a37-xjfsy8o-srjrqz0.co.uk/error'), '0a37-xjfsy8o-srjrqz0');
console.log(domainName('http://d4te4cf1lml6pizqx3mbfbpt5.io/'), 'd4te4cf1lml6pizqx3mbfbpt5');
console.log(domainName('http://www.bj1tdnjt.edu/img/'), 'bj1tdnjt');
console.log(domainName('http://spcxr.it'), 'spcxr');
console.log(domainName('61a7boqawqrpf8h3fcu.edu/warez/'), '61a7boqawqrpf8h3fcu');
console.log(domainName('http://www.2wnrlmoqij0cdz3kwv7rll0dqa62y.biz/'), '2wnrlmoqij0cdz3kwv7rll0dqa62y');
console.log(domainName('https://www.k72u-bo457i0j310bk8eaz014egf.br/archive/'), 'k72u-bo457i0j310bk8eaz014egf');
console.log(domainName('ssmsaehna.co/error'), 'ssmsaehna');
console.log(domainName('https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript'), 'codewars');