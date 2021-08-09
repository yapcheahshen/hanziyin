const strokeType={"α":7,"ℓ":7,"①":7,"②":7,"③":7,"④":7,"⑤":7,"⑥":7,"⑦":7,"⑧":7,"⑨":7,"⑩":7,"⑪":7,"⑫":7,"⑬":7,"⑭":7,"⑮":7,"⑯":7,"⑲":7,
"△":6,"⺄":5,"⺆":25,"⺊":31,"⺌":14,"い":65,"よ":51,"り":33,"コ":51,"サ":13,
"ス":54,"ユ":51,"㇀":1,"㇇":5,"㇉":6,"㇋":5,"㇌":5,"㇍":5,"㇎":5,"㇓":2,"㇞":6,
"㇢":5,"㇣":7,"𛂦":7,"一":1,"丈":12,"丏":13,"丐":13,"丑":53,"专":11,"且":35,"世":13,
"丘":23,"东":16,"丣":12,"丨":3,"丩":63,"丬":34,"丱":62,"丶":4,"丷":44,"丹":25,"为":42,
"丿":2,"乀":5,"乁":5,"乄":64,"久":25,"乍":21,"乎":24,"乐":26,"乑":23,"乗":21,"乙":6,
"乚":6,"乛":5,"乜":56,"九":25,"也":53,"乡":66,"书":55,"亅":3,"亊":14,"事":13,"于":11,
"井":11,"亜":13,"人":24,"亻":23,"以":64,"兂":16,"兆":24,"入":24,"八":24,"冂":35,"円":35,
"冉":35,"册":35,"冖":45,"冘":45,"冫":44,"几":25,"凵":61,"凸":53,"凹":35,"刂":35,"勹":25,
"匚":16,"匸":16,"十":13,"卌":12,"卍":53,"卐":61,"卜":34,"卝":31,"卩":53,"厂":12,"厶":64,
"又":54,"及":25,"发":62,"口":35,"史":35,"囗":35,"夂":25,"夊":25,"央":35,"头":44,"女":62,
"子":55,"孑":55,"孒":55,"孓":55,"宀":44,"寸":15,"小":52,"尢":12,"尸":51,"尺":51,"山":36,
"川":23,"州":42,"工":13,"巨":13,"己":51,"已":51,"巳":51,"巴":51,"巾":35,"干":11,"年":21,
"广":41,"廴":55,"廿":13,"弓":51,"彐":51,"彑":65,"彡":22,"彳":22,"心":46,"忄":43,"戉":16,
"戊":12,"我":21,"戼":51,"手":21,"扌":15,"才":15,"承":55,"攵":21,"斗":44,"旡":16,
"日":35,"曰":35,"曱":35,"曲":35,"曳":35,"月":25,"木":13,"朩":13,"未":11,"末":11,
"本":13,"朱":21,"朿":13,"束":13,"来":14,"東":13,"柬":13,"欠":25,"止":31,"毋":65,
"毌":65,"母":65,"比":16,"氏":26,"民":15,"氵":44,"永":45,"灬":44,"為":42,"熏":21,
"爪":22,"爲":24,"爿":63,"片":23,"牙":16,"牛":21,"牜":21,"犬":12,"犭":25,"瓜":22,
"瓦":16,"甘":13,"生":21,"田":15,"由":15,"甲":15,"申":15,"疋":53,"疌":15,"疒":41,
"白":23,"皮":25,"皿":35,"目":35,"示":11,"礻":45,"禹":23,"禺":35,"米":44,"粛":51,
"纟":66,"缶":21,"罒":35,"耂":13,"耳":13,"肃":51,"肅":51,"肉":35,"臣":13,"自":23,
"臼":23,"舟":22,"艮":51,"虫":35,"衤":45,"襾":13,"见":35,"角":25,"言":41,"訁":41,
"讠":46,"谷":24,"豆":13,"豸":24,"贝":35,"身":23,"車":13,"车":16,"辶":45,"酉":13,
"重":21,"釒":24,"钅":21,"长":61,"门":43,"阝":55,"隶":51,"隹":23,"非":21,"革":13,
"韦":11,"頁":12,"页":12,"飛":64,"飞":64,"饣":25,"黽":35,"齿":31,"龜":25,"龰":31,
"龴":54,"龵":21,"龶":11,"㐁":13,"㐄":16,"㐅":24,"㐆":22,"㐧":45,"㔾":56,"㠯":35,
"㱐":11,"㸦":16,"䍏":15,"車":13,"龜":25,"龜":25,"丹":25,"女":62,"年":21,"卑":23,
"既":51,"者":13,"艹":31,"辶":45,"華":13,"龜":25,"𠀀":13,"𠀈":23,"𠀉":23,"𠀌":56,
"𠀍":13,"𠀑":13,"𠀟":13,"𠁁":65,"𠁣":35,"𠁦":35,"𠁧":35,"𠁩":35,"𠁰":11,"𠁱":13,
"𠁾":35,"𠂀":13,"𠂂":43,"𠂆":22,"𠂇":12,"𠂉":21,"𠂊":25,"𠂍":22,"𠂎":26,"𠂒":21,
"𠂣":22,"𠂼":21,"𠃉":26,"𠃊":6,"𠃋":6,"𠃌":5,"𠃍":5,"𠃎":5,"𠃑":5,"𠃓":52,"𠃛":35,
"𠃜":25,"𠃢":12,"𠄌":6,"𠄎":5,"𠄏":7,"𠄓":26,"𠄔":7,"𠄙":13,"𠆢":24,"𠑹":21,"𠕄":15,
"𠘧":26,"𠘨":26,"𠙴":60,"𠚒":33,"𠤬":63,"𠥓":15,"𠥻":16,"𠦁":53,"𠦑":12,"𠾃":41,
"𡆵":35,"𡗒":51,"𡦹":42,"𡭔":32,"𡯁":12,"𡰣":51,"𡰴":52,"𡳿":36,"𡸁":21,"𡿨":6,
"𢀓":13,"𢁺":22,"𢎗":55,"𢎜":55,"𢎧":55,"𢎱":55,"𢑚":16,"𣅲":21,"𣎳":13,"𣎵":53,
"𣒚":13,"𣥂":32,"𣦶":16,"𣫬":65,"𤓰":22,"𤕪":53,"𤣩":11,"𤦡":11,"𤰃":21,"𤴔":53,
"𥆞":35,"𥘅":13,"𥝌":21,"𥫗":21,"𦉭":35,"𦣝":16,"𦣞":13,"𦥒":63,"𦥺":23,"𦫵":51,
"𧘇":26,"𧰨":22,"𨈏":23,"𨈐":23,"𨈑":23,"𨙨":35,"𨳇":13,"𩇦":21,"𩇧":31,"𩇨":24,
"𩙱":64,"𩙿":24,"𩰊":11,"𩰋":31,"𪓕":35,"𪓝":23,"𪚦":16,"𪚴":35,"𪛉":25,"𪜀":13,
"𫝀":35,"𫠣":16,"𬂛":13,"𬺷":12,"𬺻":12,"𬻂":12,"𬻆":51,"𬻞":35,"𬻟":13,"𬻿":44,"𬼁":45,
"𬼂":7,"𬼄":45,"𬼘":33,"𬼙":16,"𭀡":21,"𭐳":25,"𭕄":44,"𭣔":15,"𭨘":35,"𭺪":16,"𮍌":35,"𮠕":13,
"乁":6,"凵":53,"北":31,"卑":23,"及":55,"多":25,"尢":12,"㠯":35,"衣":41,"豕":12,"𠣞":25,
//以下的部件拆太細，至到 無筆劃，補上以免再拆分
"幺":66, "丝":66,"其":13,"黑":35,"𦥑":23,"劉":26,"印":26,"北":31,"骨":35,
"馬":13,"镸":13,"長":13,"鳥":23,"烏":23,"鸟":23,"乌":23,"马":55,"婁":35,"癶":54,
"甚":13,"留":26,"业":33,"叚":35,"專":13,"典":35,"畢":35,"帶":12,"鼎":63,
"既":51,"即":51,"段":23,"与":51,"惠":13,"㥑":12,"存":12,"卬":26,"在":12,
"𡬠":51,"梟":23,"島":23,"裊":23,"𠁅":15,"兜":26,"𫨻":53,"𡝤":35,"枭":23,
"䑓":13,"𮩴":13,"𮫙":13,"𭾐":15,"戞":12,"貿":26,"臦":13,"即":51,"夀":13,"𣇓":63,
"𮕹":13,"鳬":25,"斵":26,"𭜳":13,"𮩸":13,"𠃤":23,"𫹆":65,"𡚇":15,"㥑":12,"岛":25,
"𮙟":15,"𠑿":23,"𣦞":12,"𦥓":13,"𥁚":26,"𭄩":25,"𡶓":35,"𠭊":23,"袅":25,"贸":26,
"𢜧":35,"𭐢":13,"𪚾":25,"𮓡":15,"㸃":35,"𠙚":15,"𫎇":33,"䝉":33
//修正 ,儿丨 應是23
,"𫶧":26, 
}

export const pack_stroke_type=(chars,firstFactors,secondFactors)=>{
    let out='';
    for (let i=0;i<chars.length;i++) {
        const ch=chars[i];
        let st='';
        if (typeof strokeType[ch]!=='undefined') { //is a prime
            st=((strokeType[ch]||0)+'0').substr(0,2)
        } else {
            let first=firstFactors[ch.codePointAt(0)];
            let second=secondFactors[ch.codePointAt(0)];
            while (first!==' '&&first&&!strokeType[first]) {
                second=secondFactors[first.codePointAt(0)];
                first=firstFactors[first.codePointAt(0)];
            }
            if (!strokeType[first]) throw "missing stroketype "+ch
            let st2='0'
            if (strokeType[first]<10) { //第一部份只一划，如系 =丿 糸
                while (second!==' '&&second&&!strokeType[second]) { //取第二部件的末級
                    second=firstFactors[second.codePointAt(0)]; //糸=幺小
                }
                st2=strokeType[second];
            } 
            st=( ''+strokeType[first]+st2).substr(0,2);
        }
        //3 bits to encode 0~6
        out+=String.fromCharCode(0x3a+parseInt(st[0])*8 + parseInt(st[1]));        
    }
    return out; //可再壓
}
export const unpack_stroke_type=st=>{
    const stroke1=[],stroke2=[];
    for (let i=0;i<st.length;i++) {
        const cod=st.codePointAt(i)-0x3a;
        // console.log(cod>>3,cod%8,cod,st[i])
        const st1=String.fromCharCode( 0x30+ (cod >> 3))  
        const st2=String.fromCharCode( 0x30+ (cod%8))
        stroke1.push(st1)
        stroke2.push(st2)
    }
    return [stroke1,stroke2];
}