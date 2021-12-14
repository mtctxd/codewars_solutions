// src = https://www.codewars.com/kata/56dbe7f113c2f63570000b86/train/javascript

function rot(strng) {
    let reversedStrng = strng.split('\n').reverse();
    let result = [];

    reversedStrng.forEach((element) => {
        result.push(element.split('').reverse().join(''));
    });

    return result.join('\n');
}

function selfieAndRot(strng) {
    let arrayFirstPart = strng.split('\n');
    let firstPart = [];
    let wordLength = arrayFirstPart[0].length;
    let dots = '';

    for (let i = 0; i < wordLength; i++) {
        dots += '.';
    }

    arrayFirstPart.forEach((element) => {
        firstPart.push(element + dots);
    });

    let arraySecondPart = rot(strng).split('\n');
    let secondPert = [];
    arraySecondPart.forEach((element) => {
        secondPert.push(dots + element);
    });

    let result = firstPart.concat(secondPert);

    return result.join('\n');
}

function oper(fct, s) {
    if (fct === rot) {
        return rot(s);
    } else if (fct === selfieAndRot) {
        return selfieAndRot(s);
    }
}

console.log(
    rot('fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL'),
    'LyfUVC\\nGUFjWk\\nABpfre\\nJMmPrD\\ntcVYqC\\nooujif'
);
console.log(
    selfieAndRot('xZBV\njsbS\nJcpN\nfVnP'),
    'xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx'
);

console.log(
    oper(rot, 'fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL'),
    'LyfUVC\nGUFjWk\nABpfre\nJMmPrD\ntcVYqC\nooujif'
);
console.log(oper(rot, 'rkKv\ncofM\nzXkh\nflCB'), 'BClf\nhkXz\nMfoc\nvKkr');
console.log(
    oper(selfieAndRot, 'xZBV\njsbS\nJcpN\nfVnP'),
    'xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx'
);
console.log(
    oper(selfieAndRot, 'uLcq\nJkuL\nYirX\nnwMB'),
    'uLcq....\nJkuL....\nYirX....\nnwMB....\n....BMwn\n....XriY\n....LukJ\n....qcLu'
);

// 'DEkztWGpIR..........\nqocDZFrWMb..........\nRyIJIIKowJ..........\nfyPDmtOaEp..........\nakOlymlaWj..........\nXwknivclyW..........\nnxGEiCXHVf..........\nTfOrDxohLS..........\nZSTiSGsJaE..........\nLtJAsQUtFE..........\n..........EFtUQsAJtL\n..........EaJsGSiTSZ\n..........SLhoxDrOfT\n..........fVHXCiEGxn\n..........WylcvinkwX\n..........jWalmylOka\n..........pEaOtmDPyf\n..........JwoKIIJIyR\n..........bMWrFZDcoq\n..........RIpGWtzkED', instead got: 'DEkztWGpIR....\nqocDZFrWMb....\nRyIJIIKowJ....\nfyPDmtOaEp....\nakOlymlaWj....\nXwknivclyW....\nnxGEiCXHVf....\nTfOrDxohLS....\nZSTiSGsJaE....\nLtJAsQUtFE....\n....EFtUQsAJtL\n....EaJsGSiTSZ\n....SLhoxDrOfT\n....fVHXCiEGxn\n....WylcvinkwX\n....jWalmylOka\n....pEaOtmDPyf\n....JwoKIIJIyR\n....bMWrFZDcoq\n....RIpGWtzkED'

// 'vimYAobYNb..........\nGZSwmNgFTJ..........\nfnbIlvIXKQ..........\nKeNRcVZjSa..........\neshObdFlJa..........\nplvgGMWslC..........\nPNaUhJmhfN..........\nAbkXbBVsuA..........\nbvNJwpLdxo..........\nHaVgUpJyYr..........\n..........rYyJpUgVaH\n..........oxdLpwJNvb\n..........AusVBbXkbA\n..........NfhmJhUaNP\n..........ClsWMGgvlp\n..........aJlFdbOhse\n..........aSjZVcRNeK\n..........QKXIvlIbnf\n..........JTFgNmwSZG\n..........bNYboAYmiv', instead got: 'vimYAobYNb....\nGZSwmNgFTJ....\nfnbIlvIXKQ....\nKeNRcVZjSa....\neshObdFlJa....\nplvgGMWslC....\nPNaUhJmhfN....\nAbkXbBVsuA....\nbvNJwpLdxo....\nHaVgUpJyYr....\n....rYyJpUgVaH\n....oxdLpwJNvb\n....AusVBbXkbA\n....NfhmJhUaNP\n....ClsWMGgvlp\n....aJlFdbOhse\n....aSjZVcRNeK\n....QKXIvlIbnf\n....JTFgNmwSZG\n....bNYboAYmiv'
