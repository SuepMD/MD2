/*Karna Di Sini Banya Function Langka Jadi Gua Enc !!!

Izin Promosi !!! Jual Script Bot Whatsapp Baileys Biasa fitur 500+ hrga 30k nego Bonus Sc md No enc 100% Testi Ada !!!


minat Chat
https://wa.me/0101010101010100166663r00r
*/



const _0x43bb22=_0x4029;(function(_0x525485,_0x18fe5c){const _0x499f72=_0x4029,_0x413728=_0x525485();while(!![]){try{const _0x1ffa7e=parseInt(_0x499f72(0x23a))/0x1*(-parseInt(_0x499f72(0x20a))/0x2)+-parseInt(_0x499f72(0x17a))/0x3*(-parseInt(_0x499f72(0x1e4))/0x4)+parseInt(_0x499f72(0x202))/0x5*(-parseInt(_0x499f72(0x1fc))/0x6)+parseInt(_0x499f72(0x17d))/0x7+parseInt(_0x499f72(0x218))/0x8*(-parseInt(_0x499f72(0x228))/0x9)+parseInt(_0x499f72(0x1b9))/0xa*(-parseInt(_0x499f72(0x233))/0xb)+parseInt(_0x499f72(0x20d))/0xc;if(_0x1ffa7e===_0x18fe5c)break;else _0x413728['push'](_0x413728['shift']());}catch(_0x233483){_0x413728['push'](_0x413728['shift']());}}}(_0x1a3b,0xbd5e6),require(_0x43bb22(0x1f6)));const {default:hisokaConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x43bb22(0x1f3)),{state,saveState}=useSingleFileAuthState('./'+sessionName+'.json'),pino=require(_0x43bb22(0x237)),{Boom}=require(_0x43bb22(0x194)),fs=require('fs'),chalk=require(_0x43bb22(0x211)),FileType=require(_0x43bb22(0x1c8)),path=require(_0x43bb22(0x21c)),PhoneNumber=require('awesome-phonenumber'),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x43bb22(0x235)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require('./lib/myfunc');var low;try{low=require(_0x43bb22(0x203));}catch(_0x1ac767){low=require(_0x43bb22(0x216));}const {Low,JSONFile}=low;global['api']=(_0x114932,_0x291910='/',_0xf34cee={},_0x1ca0cb)=>(_0x114932 in global[_0x43bb22(0x1c7)]?global[_0x43bb22(0x1c7)][_0x114932]:_0x114932)+_0x291910+(_0xf34cee||_0x1ca0cb?'?'+new URLSearchParams(Object[_0x43bb22(0x1d4)]({..._0xf34cee,..._0x1ca0cb?{[_0x1ca0cb]:global[_0x43bb22(0x1bf)][_0x114932 in global[_0x43bb22(0x1c7)]?global[_0x43bb22(0x1c7)][_0x114932]:_0x114932]}:{}})):'');function _0x4029(_0x531a87,_0x27e701){const _0x1a3b4f=_0x1a3b();return _0x4029=function(_0x402995,_0x2a8799){_0x402995=_0x402995-0x17a;let _0x3fe5be=_0x1a3b4f[_0x402995];return _0x3fe5be;},_0x4029(_0x531a87,_0x27e701);}const store=makeInMemoryStore({'logger':pino()[_0x43bb22(0x1b8)]({'level':'silent','stream':_0x43bb22(0x1d6)})});global['db']=new Low(new JSONFile('src/database.json')),global['db'][_0x43bb22(0x1d8)]={'users':{},'chats':{},'sticker':{},'database':{},'game':{},'settings':{},'others':{},...global['db'][_0x43bb22(0x1d8)]||{}};if(global['db'])setInterval(async()=>{const _0x1f4448=_0x43bb22;if(global['db'][_0x1f4448(0x1d8)])await global['db'][_0x1f4448(0x1f9)]();},0x1e*0x3e8);async function startHisoka(){const _0x299d5f=_0x43bb22;let {version:_0x550ac1,isLatest:_0x432432}=await fetchLatestBaileysVersion();const _0x4859c3=hisokaConnect({'logger':pino({'level':_0x299d5f(0x188)}),'printQRInTerminal':!![],'browser':[_0x299d5f(0x232),_0x299d5f(0x21a),_0x299d5f(0x1bc)],'auth':state,'version':_0x550ac1});return store[_0x299d5f(0x1ee)](_0x4859c3['ev']),_0x4859c3['ws']['on'](_0x299d5f(0x1ed),async _0x98012=>{const _0x4b83b2=_0x299d5f,_0x36daa8=_0x98012[_0x4b83b2(0x1fe)][0x0]['attrs'][_0x4b83b2(0x22b)];if(_0x98012[_0x4b83b2(0x1fe)][0x0][_0x4b83b2(0x1dd)]=='offer'){let _0x1771d8=await _0x4859c3[_0x4b83b2(0x1b6)](_0x36daa8,global[_0x4b83b2(0x207)]);_0x4859c3[_0x4b83b2(0x209)](_0x36daa8,{'text':_0x4b83b2(0x20e)},{'quoted':_0x1771d8}),await sleep(0x1f40),await _0x4859c3[_0x4b83b2(0x17e)](_0x36daa8,'block');}}),_0x4859c3['ev']['on']('messages.upsert',async _0x81fd03=>{const _0x2e12f4=_0x299d5f;try{mek=_0x81fd03[_0x2e12f4(0x227)][0x0];if(!mek[_0x2e12f4(0x1d5)])return;mek[_0x2e12f4(0x1d5)]=Object[_0x2e12f4(0x1d1)](mek['message'])[0x0]==='ephemeralMessage'?mek['message']['ephemeralMessage']['message']:mek[_0x2e12f4(0x1d5)];if(mek[_0x2e12f4(0x1b2)]&&mek[_0x2e12f4(0x1b2)]['remoteJid']===_0x2e12f4(0x22d))return;if(!_0x4859c3[_0x2e12f4(0x190)]&&!mek[_0x2e12f4(0x1b2)]['fromMe']&&_0x81fd03['type']===_0x2e12f4(0x21f))return;if(mek[_0x2e12f4(0x1b2)]['id'][_0x2e12f4(0x1e7)](_0x2e12f4(0x201))&&mek['key']['id'][_0x2e12f4(0x1ab)]===0x10)return;m=smsg(_0x4859c3,mek,store),require('./nakata')(_0x4859c3,m,_0x81fd03,store);}catch(_0x4e01c6){console[_0x2e12f4(0x1cc)](_0x4e01c6);}}),_0x4859c3['ev']['on'](_0x299d5f(0x236),async _0x5daa5b=>{const _0x139783=_0x299d5f;console[_0x139783(0x1cc)](_0x5daa5b);try{let _0x51b144=await _0x4859c3[_0x139783(0x1d3)](_0x5daa5b['id']),_0x14f2f6=_0x5daa5b[_0x139783(0x204)];for(let _0x26c07b of _0x14f2f6){try{ppuser=await _0x4859c3[_0x139783(0x1f1)](_0x26c07b,'image');}catch{ppuser=_0x139783(0x195);}try{ppgroup=await _0x4859c3['profilePictureUrl'](_0x5daa5b['id'],_0x139783(0x214));}catch{ppgroup=_0x139783(0x195);}cangton=_0x139783(0x1af)+_0x26c07b[_0x139783(0x1a4)]('@')[0x0]+',\x20ðŸ˜„\x0a\x0a*_JANGAN\x20LUPA\x20INTRO_*\x0aðŸžï¸Nama:\x20\x0aðŸUmur:\x0aðŸ’®Askot:\x0a\x0aðŸ”ŽDescripsi\x20Grup:\x20'+_0x51b144[_0x139783(0x205)]+_0x139783(0x1da),cangtion=_0x26c07b[_0x139783(0x1a4)]('@')[0x0]+_0x139783(0x191);let _0x245e34=await _0x4859c3[_0x139783(0x1fa)](_0x26c07b);memb=_0x51b144[_0x139783(0x204)][_0x139783(0x1ab)];let _0x3fce04=[{'urlButton':{'displayText':_0x139783(0x18f),'url':_0x139783(0x19c)}},{'quickReplyButton':{'displayText':_0x139783(0x1f7),'id':_0x139783(0x22a)}}],_0x2d636f=[{'urlButton':{'displayText':_0x139783(0x18f),'url':_0x139783(0x19c)}},{'quickReplyButton':{'displayText':_0x139783(0x18b),'id':_0x139783(0x1e1)}}];Kon=await getBuffer('https://hardianto.xyz/api/welcome3?profile='+encodeURIComponent(ppuser)+_0x139783(0x1fd)+encodeURIComponent(_0x245e34)+_0x139783(0x1c1)+encodeURIComponent(_0x51b144[_0x139783(0x215)])+_0x139783(0x1f5)+encodeURIComponent(memb)),Tol=await getBuffer(_0x139783(0x1bd)+encodeURIComponent(ppuser)+_0x139783(0x1fd)+encodeURIComponent(_0x245e34)+_0x139783(0x1c1)+encodeURIComponent(_0x51b144[_0x139783(0x215)])+_0x139783(0x1f5)+encodeURIComponent(memb));if(_0x5daa5b[_0x139783(0x19a)]==_0x139783(0x187))_0x4859c3[_0x139783(0x1eb)](_0x5daa5b['id'],cangton,'\x20Name\x20Grup\x20'+_0x51b144['subject']+'\x20',Kon,_0x3fce04);else _0x5daa5b['action']==_0x139783(0x22e)&&_0x4859c3[_0x139783(0x1eb)](_0x5daa5b['id'],cangtion,'Leaving\x20To\x20\x20'+_0x51b144[_0x139783(0x215)]+'\x20',Tol,_0x2d636f);}}catch(_0x5385a1){console['log'](_0x5385a1);}}),_0x4859c3[_0x299d5f(0x1cf)]=_0x3c1e23=>{const _0xc630af=_0x299d5f;if(!_0x3c1e23)return _0x3c1e23;if(/:\d+@/gi['test'](_0x3c1e23)){let _0x188870=jidDecode(_0x3c1e23)||{};return _0x188870['user']&&_0x188870[_0xc630af(0x199)]&&_0x188870[_0xc630af(0x231)]+'@'+_0x188870[_0xc630af(0x199)]||_0x3c1e23;}else return _0x3c1e23;},_0x4859c3['ev']['on']('contacts.update',_0x47a1c7=>{const _0x58045e=_0x299d5f;for(let _0x19e57b of _0x47a1c7){let _0x53cb5c=_0x4859c3[_0x58045e(0x1cf)](_0x19e57b['id']);if(store&&store[_0x58045e(0x217)])store[_0x58045e(0x217)][_0x53cb5c]={'id':_0x53cb5c,'name':_0x19e57b[_0x58045e(0x21f)]};}}),_0x4859c3[_0x299d5f(0x1fa)]=(_0x5402f7,_0x3e8d3e=![])=>{const _0x3e2be8=_0x299d5f;id=_0x4859c3[_0x3e2be8(0x1cf)](_0x5402f7),_0x3e8d3e=_0x4859c3[_0x3e2be8(0x183)]||_0x3e8d3e;let _0x246b97;if(id['endsWith'](_0x3e2be8(0x1e5)))return new Promise(async _0x35534e=>{const _0x13e3f0=_0x3e2be8;_0x246b97=store[_0x13e3f0(0x217)][id]||{};if(!(_0x246b97[_0x13e3f0(0x186)]||_0x246b97[_0x13e3f0(0x215)]))_0x246b97=_0x4859c3[_0x13e3f0(0x1d3)](id)||{};_0x35534e(_0x246b97[_0x13e3f0(0x186)]||_0x246b97[_0x13e3f0(0x215)]||PhoneNumber('+'+id['replace'](_0x13e3f0(0x1c0),''))[_0x13e3f0(0x18d)](_0x13e3f0(0x1e0)));});else _0x246b97=id===_0x3e2be8(0x224)?{'id':id,'name':'WhatsApp'}:id===_0x4859c3[_0x3e2be8(0x1cf)](_0x4859c3[_0x3e2be8(0x231)]['id'])?_0x4859c3['user']:store['contacts'][id]||{};return(_0x3e8d3e?'':_0x246b97[_0x3e2be8(0x186)])||_0x246b97['subject']||_0x246b97[_0x3e2be8(0x19d)]||PhoneNumber('+'+_0x5402f7[_0x3e2be8(0x22c)]('@s.whatsapp.net',''))[_0x3e2be8(0x18d)](_0x3e2be8(0x1e0));},_0x4859c3[_0x299d5f(0x1b6)]=async(_0x5fd2b8,_0x5663fe,_0x437441='',_0x55b88e={})=>{const _0x3c9853=_0x299d5f;let _0x225c46=[];for(let _0x4e10f2 of _0x5663fe){_0x225c46[_0x3c9853(0x1a9)]({'displayName':await _0x4859c3[_0x3c9853(0x1fa)](_0x4e10f2+_0x3c9853(0x1c0)),'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:'+await _0x4859c3[_0x3c9853(0x1fa)](_0x4e10f2+_0x3c9853(0x1c0))+_0x3c9853(0x219)+await _0x4859c3[_0x3c9853(0x1fa)](_0x4e10f2+_0x3c9853(0x1c0))+_0x3c9853(0x238)+_0x4e10f2+':'+_0x4e10f2+_0x3c9853(0x208)});}_0x4859c3[_0x3c9853(0x209)](_0x5fd2b8,{'contacts':{'displayName':_0x225c46[_0x3c9853(0x1ab)]+_0x3c9853(0x1b3),'contacts':_0x225c46},..._0x55b88e},{'quoted':_0x437441});},_0x4859c3[_0x299d5f(0x1ce)]=_0x199fc8=>{const _0x3b3eac=_0x299d5f;return _0x4859c3[_0x3b3eac(0x1f0)]({'tag':'iq','attrs':{'to':_0x3b3eac(0x1c0),'type':_0x3b3eac(0x1e9),'xmlns':_0x3b3eac(0x1e6)},'content':[{'tag':_0x3b3eac(0x1e6),'attrs':{},'content':Buffer['from'](_0x199fc8,'utf-8')}]}),_0x199fc8;},_0x4859c3[_0x299d5f(0x190)]=!![],_0x4859c3[_0x299d5f(0x225)]=_0x4f11af=>smsg(_0x4859c3,_0x4f11af,store),_0x4859c3['ev']['on'](_0x299d5f(0x18a),async _0x1b01b2=>{const _0x508dcd=_0x299d5f,{connection:_0x2de154,lastDisconnect:_0x7452e5}=_0x1b01b2;if(_0x2de154===_0x508dcd(0x1e8)){let _0x47e4a9=new Boom(_0x7452e5?.['error'])?.['output'][_0x508dcd(0x17f)];if(_0x47e4a9===DisconnectReason[_0x508dcd(0x210)])console['log'](_0x508dcd(0x182)),_0x4859c3[_0x508dcd(0x1ad)]();else{if(_0x47e4a9===DisconnectReason['connectionClosed'])console[_0x508dcd(0x1cc)](_0x508dcd(0x200)),startHisoka();else{if(_0x47e4a9===DisconnectReason[_0x508dcd(0x1ca)])console[_0x508dcd(0x1cc)](_0x508dcd(0x1bb)),startHisoka();else{if(_0x47e4a9===DisconnectReason['connectionReplaced'])console[_0x508dcd(0x1cc)](_0x508dcd(0x198)),_0x4859c3[_0x508dcd(0x1ad)]();else{if(_0x47e4a9===DisconnectReason[_0x508dcd(0x1c6)])console[_0x508dcd(0x1cc)](_0x508dcd(0x1cd)),_0x4859c3[_0x508dcd(0x1ad)]();else{if(_0x47e4a9===DisconnectReason[_0x508dcd(0x1aa)])console[_0x508dcd(0x1cc)](_0x508dcd(0x1a6)),startHisoka();else{if(_0x47e4a9===DisconnectReason[_0x508dcd(0x20b)])console['log'](_0x508dcd(0x196)),startHisoka();else _0x4859c3[_0x508dcd(0x1ec)]('Unknown\x20DisconnectReason:\x20'+_0x47e4a9+'|'+_0x2de154);}}}}}}}console[_0x508dcd(0x1cc)](_0x508dcd(0x23b),_0x1b01b2);}),_0x4859c3['ev']['on'](_0x299d5f(0x1db),saveState),_0x4859c3['send5ButImg']=async(_0x33320a,_0x321ee6='',_0x110477='',_0x18c0d5,_0x3d4cbe=[],_0x36903e={})=>{const _0x1d636b=_0x299d5f;let _0x4cca5e=await prepareWAMessageMedia({'image':_0x18c0d5},{'upload':_0x4859c3[_0x1d636b(0x22f)]});var _0x45789a=generateWAMessageFromContent(m[_0x1d636b(0x1d7)],proto[_0x1d636b(0x1ae)][_0x1d636b(0x206)]({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x4cca5e[_0x1d636b(0x226)],'hydratedContentText':_0x321ee6,'hydratedFooterText':_0x110477,'hydratedButtons':_0x3d4cbe}}}),_0x36903e);_0x4859c3[_0x1d636b(0x21b)](_0x33320a,_0x45789a[_0x1d636b(0x1d5)],{'messageId':_0x45789a[_0x1d636b(0x1b2)]['id']});},_0x4859c3[_0x299d5f(0x19b)]=async(_0xa007fd,_0x5407dd='',_0x5c9eab='',_0x4e7d8e,_0x13b1f3=[],_0x44e583={})=>{const _0x338a14=_0x299d5f;let _0x5249d1=await prepareWAMessageMedia({'video':_0x4e7d8e},{'upload':_0x4859c3[_0x338a14(0x22f)]});var _0x1ff9da=generateWAMessageFromContent(m[_0x338a14(0x1d7)],proto[_0x338a14(0x1ae)]['fromObject']({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x5249d1[_0x338a14(0x19f)],'hydratedContentText':_0x5407dd,'hydratedFooterText':_0x5c9eab,'hydratedButtons':_0x13b1f3}}}),_0x44e583);_0x4859c3[_0x338a14(0x21b)](_0xa007fd,_0x1ff9da[_0x338a14(0x1d5)],{'messageId':_0x1ff9da['key']['id']});},_0x4859c3['send5Gif']=async(_0x300999,_0x12b384='',_0x58d3cc='',_0x57ae13,_0x57928e=[],_0x2f6f39={})=>{const _0x2469d2=_0x299d5f;let _0x152b5b=await prepareWAMessageMedia({'video':_0x57ae13,'gifPlayback':!![],'gifAttribution':_0x2469d2(0x1ff)},{'upload':_0x4859c3[_0x2469d2(0x22f)]});var _0x1c34f5=generateWAMessageFromContent(m[_0x2469d2(0x1d7)],proto[_0x2469d2(0x1ae)][_0x2469d2(0x206)]({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x152b5b[_0x2469d2(0x19f)],'hydratedContentText':_0x12b384,'hydratedFooterText':_0x58d3cc,'hydratedButtons':_0x57928e}}}),_0x2f6f39);_0x4859c3[_0x2469d2(0x21b)](_0x300999,_0x1c34f5['message'],{'messageId':_0x1c34f5[_0x2469d2(0x1b2)]['id']});},_0x4859c3[_0x299d5f(0x1eb)]=async(_0x3e19bb,_0x33bae2='',_0x1acb41='',_0x4dc169,_0x3fd054=[],_0x474179={})=>{const _0x54e0c8=_0x299d5f;var _0x5ed06d=generateWAMessageFromContent(m[_0x54e0c8(0x1d7)],proto[_0x54e0c8(0x1ae)]['fromObject']({'templateMessage':{'hydratedTemplate':{'hydratedContentText':_0x33bae2,'locationMessage':{'jpegThumbnail':_0x4dc169},'hydratedFooterText':_0x1acb41,'hydratedButtons':_0x3fd054}}}),_0x474179);_0x4859c3[_0x54e0c8(0x21b)](_0x3e19bb,_0x5ed06d[_0x54e0c8(0x1d5)],{'messageId':_0x5ed06d[_0x54e0c8(0x1b2)]['id']});},_0x4859c3[_0x299d5f(0x189)]=async(_0x2b3a6c,_0xdc3c85='',_0x9106dd='',_0x1bfcf5='',_0x380c37='',_0x57ec8d=[],_0x3d1df0={})=>{const _0x309a89=_0x299d5f;var _0x13ca72=generateWAMessageFromContent(m['chat'],proto['Message'][_0x309a89(0x206)]({'listMessage':{'title':_0xdc3c85,'description':_0x9106dd,'buttonText':_0x380c37,'footerText':_0x1bfcf5,'listType':_0x309a89(0x1a7),'sections':_0x57ec8d,'listType':0x1}}),_0x3d1df0);_0x4859c3['relayMessage'](_0x2b3a6c,_0x13ca72[_0x309a89(0x1d5)],{'messageId':_0x13ca72[_0x309a89(0x1b2)]['id']});},_0x4859c3['sendButtonText']=(_0x25955,_0x2fd859=[],_0x1deeb8,_0x26894d,_0x352913='',_0x44dd86={})=>{const _0x27888b=_0x299d5f;let _0x1e58b6={'text':_0x1deeb8,'footer':_0x26894d,'buttons':_0x2fd859,'headerType':0x2,..._0x44dd86};_0x4859c3[_0x27888b(0x209)](_0x25955,_0x1e58b6,{'quoted':_0x352913,..._0x44dd86});},_0x4859c3[_0x299d5f(0x223)]=(_0x5194af,_0x49d455,_0x16d960='',_0x4b1129)=>_0x4859c3['sendMessage'](_0x5194af,{'text':_0x49d455,..._0x4b1129},{'quoted':_0x16d960}),_0x4859c3[_0x299d5f(0x1d9)]=async(_0x2440db,_0x186e7b,_0x4c697d='',_0x45199b='',_0x59192a)=>{const _0x2ccf1c=_0x299d5f;let _0x2d87ee=Buffer[_0x2ccf1c(0x1a5)](_0x186e7b)?_0x186e7b:/^data:.*?\/.*?;base64,/i['test'](_0x186e7b)?Buffer[_0x2ccf1c(0x20f)](_0x186e7b[_0x2ccf1c(0x1a4)]`,`[0x1],_0x2ccf1c(0x220)):/^https?:\/\//[_0x2ccf1c(0x1e3)](_0x186e7b)?await await getBuffer(_0x186e7b):fs[_0x2ccf1c(0x1dc)](_0x186e7b)?fs['readFileSync'](_0x186e7b):Buffer['alloc'](0x0);return await _0x4859c3[_0x2ccf1c(0x209)](_0x2440db,{'image':_0x2d87ee,'caption':_0x4c697d,..._0x59192a},{'quoted':_0x45199b});},_0x4859c3[_0x299d5f(0x1ba)]=async(_0x5294a3,_0x476f58,_0x4d9f4b='',_0x21e81a='',_0xb27a5=![],_0x2edffd)=>{const _0x5eab98=_0x299d5f;let _0x458820=Buffer['isBuffer'](_0x476f58)?_0x476f58:/^data:.*?\/.*?;base64,/i[_0x5eab98(0x1e3)](_0x476f58)?Buffer[_0x5eab98(0x20f)](_0x476f58[_0x5eab98(0x1a4)]`,`[0x1],_0x5eab98(0x220)):/^https?:\/\//[_0x5eab98(0x1e3)](_0x476f58)?await await getBuffer(_0x476f58):fs[_0x5eab98(0x1dc)](_0x476f58)?fs[_0x5eab98(0x1fb)](_0x476f58):Buffer[_0x5eab98(0x193)](0x0);return await _0x4859c3[_0x5eab98(0x209)](_0x5294a3,{'video':_0x458820,'caption':_0x4d9f4b,'gifPlayback':_0xb27a5,..._0x2edffd},{'quoted':_0x21e81a});},_0x4859c3['sendAudio']=async(_0x29d416,_0x274cf0,_0x598166='',_0x224d0c=![],_0xfe9f17)=>{const _0x361a88=_0x299d5f;let _0x1459de=Buffer['isBuffer'](_0x274cf0)?_0x274cf0:/^data:.*?\/.*?;base64,/i[_0x361a88(0x1e3)](_0x274cf0)?Buffer[_0x361a88(0x20f)](_0x274cf0['split']`,`[0x1],_0x361a88(0x220)):/^https?:\/\//[_0x361a88(0x1e3)](_0x274cf0)?await await getBuffer(_0x274cf0):fs[_0x361a88(0x1dc)](_0x274cf0)?fs[_0x361a88(0x1fb)](_0x274cf0):Buffer[_0x361a88(0x193)](0x0);return await _0x4859c3['sendMessage'](_0x29d416,{'audio':_0x1459de,'ptt':_0x224d0c,..._0xfe9f17},{'quoted':_0x598166});},_0x4859c3['sendTextWithMentions']=async(_0x375497,_0x5c05d7,_0x12b6e2,_0x38006f={})=>_0x4859c3['sendMessage'](_0x375497,{'text':_0x5c05d7,'contextInfo':{'mentionedJid':[..._0x5c05d7[_0x299d5f(0x1b7)](/@(\d{0,16})/g)][_0x299d5f(0x184)](_0x3c658e=>_0x3c658e[0x1]+_0x299d5f(0x1c0))},..._0x38006f},{'quoted':_0x12b6e2}),_0x4859c3[_0x299d5f(0x1b1)]=async(_0x3e5c16,_0x308bfc,_0x206b73,_0x4fa56d={})=>{const _0x51d878=_0x299d5f;let _0x3a3037=Buffer[_0x51d878(0x1a5)](_0x308bfc)?_0x308bfc:/^data:.*?\/.*?;base64,/i[_0x51d878(0x1e3)](_0x308bfc)?Buffer[_0x51d878(0x20f)](_0x308bfc[_0x51d878(0x1a4)]`,`[0x1],_0x51d878(0x220)):/^https?:\/\//[_0x51d878(0x1e3)](_0x308bfc)?await await getBuffer(_0x308bfc):fs[_0x51d878(0x1dc)](_0x308bfc)?fs[_0x51d878(0x1fb)](_0x308bfc):Buffer[_0x51d878(0x193)](0x0),_0x8c1c92;return _0x4fa56d&&(_0x4fa56d['packname']||_0x4fa56d['author'])?_0x8c1c92=await writeExifImg(_0x3a3037,_0x4fa56d):_0x8c1c92=await imageToWebp(_0x3a3037),await _0x4859c3['sendMessage'](_0x3e5c16,{'sticker':{'url':_0x8c1c92},..._0x4fa56d},{'quoted':_0x206b73}),_0x8c1c92;},_0x4859c3[_0x299d5f(0x1b5)]=async(_0x5890f2,_0x4d5960,_0x5b070a,_0xcb97a3={})=>{const _0x123b07=_0x299d5f;let _0x4f9138=Buffer[_0x123b07(0x1a5)](_0x4d5960)?_0x4d5960:/^data:.*?\/.*?;base64,/i[_0x123b07(0x1e3)](_0x4d5960)?Buffer[_0x123b07(0x20f)](_0x4d5960[_0x123b07(0x1a4)]`,`[0x1],_0x123b07(0x220)):/^https?:\/\//['test'](_0x4d5960)?await await getBuffer(_0x4d5960):fs[_0x123b07(0x1dc)](_0x4d5960)?fs['readFileSync'](_0x4d5960):Buffer['alloc'](0x0),_0x2d4680;return _0xcb97a3&&(_0xcb97a3['packname']||_0xcb97a3[_0x123b07(0x1b4)])?_0x2d4680=await writeExifVid(_0x4f9138,_0xcb97a3):_0x2d4680=await videoToWebp(_0x4f9138),await _0x4859c3[_0x123b07(0x209)](_0x5890f2,{'sticker':{'url':_0x2d4680},..._0xcb97a3},{'quoted':_0x5b070a}),_0x2d4680;},_0x4859c3[_0x299d5f(0x21e)]=async(_0x25eb57,_0x1e793b,_0x26dcd5=!![])=>{const _0x261c2d=_0x299d5f;let _0x3644e7=_0x25eb57[_0x261c2d(0x1c3)]?_0x25eb57['msg']:_0x25eb57,_0x2402ac=(_0x25eb57[_0x261c2d(0x1c3)]||_0x25eb57)['mimetype']||'',_0x4a8930=_0x25eb57[_0x261c2d(0x239)]?_0x25eb57[_0x261c2d(0x239)]['replace'](/Message/gi,''):_0x2402ac[_0x261c2d(0x1a4)]('/')[0x0];const _0x354c15=await downloadContentFromMessage(_0x3644e7,_0x4a8930);let _0xb46c48=Buffer[_0x261c2d(0x20f)]([]);for await(const _0x4dc81e of _0x354c15){_0xb46c48=Buffer[_0x261c2d(0x1a1)]([_0xb46c48,_0x4dc81e]);}let _0x569f79=await FileType[_0x261c2d(0x1d2)](_0xb46c48);return trueFileName=_0x26dcd5?_0x1e793b+'.'+_0x569f79['ext']:_0x1e793b,await fs[_0x261c2d(0x1c9)](trueFileName,_0xb46c48),trueFileName;},_0x4859c3[_0x299d5f(0x222)]=async _0x3b34ac=>{const _0x5a6f1f=_0x299d5f;let _0xb00944=(_0x3b34ac[_0x5a6f1f(0x1c3)]||_0x3b34ac)[_0x5a6f1f(0x1cb)]||'',_0x162c1a=_0x3b34ac[_0x5a6f1f(0x239)]?_0x3b34ac[_0x5a6f1f(0x239)]['replace'](/Message/gi,''):_0xb00944['split']('/')[0x0];const _0x3e7b6c=await downloadContentFromMessage(_0x3b34ac,_0x162c1a);let _0x4fff2a=Buffer['from']([]);for await(const _0x30afc1 of _0x3e7b6c){_0x4fff2a=Buffer[_0x5a6f1f(0x1a1)]([_0x4fff2a,_0x30afc1]);}return _0x4fff2a;},_0x4859c3['sendMedia']=async(_0x206cb6,_0x472f3d,_0x5a4464='',_0x356278='',_0x5bb0f0='',_0x198b99={})=>{const _0x58eb15=_0x299d5f;let _0x5f31c2=await _0x4859c3['getFile'](_0x472f3d,!![]),{mime:_0x58b65f,ext:_0x734cdd,res:_0x1fbe96,data:_0x2af69f,filename:_0x3e1675}=_0x5f31c2;if(_0x1fbe96&&_0x1fbe96[_0x58eb15(0x1e6)]!==0xc8||file[_0x58eb15(0x1ab)]<=0x10000)try{throw{'json':JSON[_0x58eb15(0x1f8)](file[_0x58eb15(0x230)]())};}catch(_0x456592){if(_0x456592[_0x58eb15(0x19e)])throw _0x456592[_0x58eb15(0x19e)];}let _0x53dc37='',_0x234778=_0x58b65f,_0x36a9c7=_0x3e1675;if(_0x198b99[_0x58eb15(0x192)])_0x53dc37='document';if(_0x198b99[_0x58eb15(0x197)]||/webp/[_0x58eb15(0x1e3)](_0x58b65f)){let {writeExif:_0x1289e4}=require(_0x58eb15(0x235)),_0x10c89e={'mimetype':_0x58b65f,'data':_0x2af69f};_0x36a9c7=await _0x1289e4(_0x10c89e,{'packname':_0x198b99[_0x58eb15(0x1a3)]?_0x198b99[_0x58eb15(0x1a3)]:global[_0x58eb15(0x1a3)],'author':_0x198b99[_0x58eb15(0x1b4)]?_0x198b99[_0x58eb15(0x1b4)]:global[_0x58eb15(0x1b4)],'categories':_0x198b99[_0x58eb15(0x185)]?_0x198b99[_0x58eb15(0x185)]:[]}),await fs['promises'][_0x58eb15(0x1e2)](_0x3e1675),_0x53dc37=_0x58eb15(0x1c2),_0x234778='image/webp';}else{if(/image/[_0x58eb15(0x1e3)](_0x58b65f))_0x53dc37=_0x58eb15(0x214);else{if(/video/[_0x58eb15(0x1e3)](_0x58b65f))_0x53dc37='video';else{if(/audio/[_0x58eb15(0x1e3)](_0x58b65f))_0x53dc37=_0x58eb15(0x181);else _0x53dc37=_0x58eb15(0x1de);}}}return await _0x4859c3['sendMessage'](_0x206cb6,{[_0x53dc37]:{'url':_0x36a9c7},'caption':_0x356278,'mimetype':_0x234778,'fileName':_0x5a4464,..._0x198b99},{'quoted':_0x5bb0f0,..._0x198b99}),fs[_0x58eb15(0x1be)][_0x58eb15(0x1e2)](_0x36a9c7);},_0x4859c3[_0x299d5f(0x213)]=async(_0x31b314,_0x164504,_0x1893ee=![],_0x444b45={})=>{const _0xee8eb7=_0x299d5f;let _0x39c493;_0x444b45[_0xee8eb7(0x17c)]&&(_0x164504[_0xee8eb7(0x1d5)]=_0x164504[_0xee8eb7(0x1d5)]&&_0x164504[_0xee8eb7(0x1d5)][_0xee8eb7(0x1c4)]&&_0x164504[_0xee8eb7(0x1d5)][_0xee8eb7(0x1c4)][_0xee8eb7(0x1d5)]?_0x164504[_0xee8eb7(0x1d5)][_0xee8eb7(0x1c4)][_0xee8eb7(0x1d5)]:_0x164504['message']||undefined,_0x39c493=Object[_0xee8eb7(0x1d1)](_0x164504['message'][_0xee8eb7(0x1c5)]['message'])[0x0],delete(_0x164504[_0xee8eb7(0x1d5)]&&_0x164504[_0xee8eb7(0x1d5)]['ignore']?_0x164504[_0xee8eb7(0x1d5)][_0xee8eb7(0x1f2)]:_0x164504[_0xee8eb7(0x1d5)]||undefined),delete _0x164504[_0xee8eb7(0x1d5)][_0xee8eb7(0x1c5)][_0xee8eb7(0x1d5)][_0x39c493][_0xee8eb7(0x180)],_0x164504[_0xee8eb7(0x1d5)]={..._0x164504['message'][_0xee8eb7(0x1c5)][_0xee8eb7(0x1d5)]});let _0x18fe31=Object[_0xee8eb7(0x1d1)](_0x164504[_0xee8eb7(0x1d5)])[0x0],_0x24f74f=await generateForwardMessageContent(_0x164504,_0x1893ee),_0xc9c58d=Object[_0xee8eb7(0x1d1)](_0x24f74f)[0x0],_0x35d018={};if(_0x18fe31!=_0xee8eb7(0x1a2))_0x35d018=_0x164504['message'][_0x18fe31][_0xee8eb7(0x1f4)];_0x24f74f[_0xc9c58d][_0xee8eb7(0x1f4)]={..._0x35d018,..._0x24f74f[_0xc9c58d][_0xee8eb7(0x1f4)]};const _0x1fbc3e=await generateWAMessageFromContent(_0x31b314,_0x24f74f,_0x444b45?{..._0x24f74f[_0xc9c58d],..._0x444b45,..._0x444b45[_0xee8eb7(0x1f4)]?{'contextInfo':{..._0x24f74f[_0xc9c58d][_0xee8eb7(0x1f4)],..._0x444b45['contextInfo']}}:{}}:{});return await _0x4859c3['relayMessage'](_0x31b314,_0x1fbc3e[_0xee8eb7(0x1d5)],{'messageId':_0x1fbc3e[_0xee8eb7(0x1b2)]['id']}),_0x1fbc3e;},_0x4859c3[_0x299d5f(0x1d0)]=(_0x58faa4,_0x23608f,_0x2eb2d2='',_0x23246f=_0x4859c3['user']['id'],_0x428ba8={})=>{const _0x2f3d37=_0x299d5f;let _0x3dc0e6=Object['keys'](_0x23608f[_0x2f3d37(0x1d5)])[0x0],_0x3dd489=_0x3dc0e6===_0x2f3d37(0x1c4);_0x3dd489&&(_0x3dc0e6=Object[_0x2f3d37(0x1d1)](_0x23608f[_0x2f3d37(0x1d5)]['ephemeralMessage'][_0x2f3d37(0x1d5)])[0x0]);let _0x5cc040=_0x3dd489?_0x23608f[_0x2f3d37(0x1d5)]['ephemeralMessage'][_0x2f3d37(0x1d5)]:_0x23608f[_0x2f3d37(0x1d5)],_0x2f38e8=_0x5cc040[_0x3dc0e6];if(typeof _0x2f38e8==='string')_0x5cc040[_0x3dc0e6]=_0x2eb2d2||_0x2f38e8;else{if(_0x2f38e8['caption'])_0x2f38e8['caption']=_0x2eb2d2||_0x2f38e8[_0x2f3d37(0x229)];else{if(_0x2f38e8[_0x2f3d37(0x1ef)])_0x2f38e8[_0x2f3d37(0x1ef)]=_0x2eb2d2||_0x2f38e8[_0x2f3d37(0x1ef)];}}if(typeof _0x2f38e8!==_0x2f3d37(0x17b))_0x5cc040[_0x3dc0e6]={..._0x2f38e8,..._0x428ba8};if(_0x23608f[_0x2f3d37(0x1b2)]['participant'])_0x23246f=_0x23608f[_0x2f3d37(0x1b2)][_0x2f3d37(0x1df)]=_0x23246f||_0x23608f[_0x2f3d37(0x1b2)][_0x2f3d37(0x1df)];else{if(_0x23608f[_0x2f3d37(0x1b2)][_0x2f3d37(0x1df)])_0x23246f=_0x23608f[_0x2f3d37(0x1b2)]['participant']=_0x23246f||_0x23608f['key']['participant'];}if(_0x23608f['key']['remoteJid'][_0x2f3d37(0x18c)]('@s.whatsapp.net'))_0x23246f=_0x23246f||_0x23608f['key'][_0x2f3d37(0x18e)];else{if(_0x23608f[_0x2f3d37(0x1b2)]['remoteJid']['includes'](_0x2f3d37(0x1a8)))_0x23246f=_0x23246f||_0x23608f[_0x2f3d37(0x1b2)][_0x2f3d37(0x18e)];}return _0x23608f[_0x2f3d37(0x1b2)][_0x2f3d37(0x18e)]=_0x58faa4,_0x23608f[_0x2f3d37(0x1b2)][_0x2f3d37(0x221)]=_0x23246f===_0x4859c3[_0x2f3d37(0x231)]['id'],proto[_0x2f3d37(0x21d)][_0x2f3d37(0x206)](_0x23608f);},_0x4859c3[_0x299d5f(0x20c)]=async(_0x281273,_0x2d7632)=>{const _0x631b8a=_0x299d5f;let _0x370ed2,_0x427f41=Buffer[_0x631b8a(0x1a5)](_0x281273)?_0x281273:/^data:.*?\/.*?;base64,/i[_0x631b8a(0x1e3)](_0x281273)?Buffer[_0x631b8a(0x20f)](_0x281273[_0x631b8a(0x1a4)]`,`[0x1],'base64'):/^https?:\/\//[_0x631b8a(0x1e3)](_0x281273)?await(_0x370ed2=await getBuffer(_0x281273)):fs[_0x631b8a(0x1dc)](_0x281273)?(filename=_0x281273,fs['readFileSync'](_0x281273)):typeof _0x281273===_0x631b8a(0x17b)?_0x281273:Buffer[_0x631b8a(0x193)](0x0),_0xb1c1dd=await FileType['fromBuffer'](_0x427f41)||{'mime':_0x631b8a(0x1ac),'ext':_0x631b8a(0x234)};filename=path['join'](__filename,'../src/'+new Date()*0x1+'.'+_0xb1c1dd[_0x631b8a(0x1a0)]);if(_0x427f41&&_0x2d7632)fs[_0x631b8a(0x1be)][_0x631b8a(0x1ea)](filename,_0x427f41);return{'res':_0x370ed2,'filename':filename,'size':await getSizeMedia(_0x427f41),..._0xb1c1dd,'data':_0x427f41};},_0x4859c3;}function _0x1a3b(){const _0x312f18=['string','readViewOnce','9666328HLdkgr','updateBlockStatus','statusCode','viewOnce','audio','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','withoutContact','map','categories','name','add','silent','sendList','connection.update','GoodbyeðŸ‘','includes','getNumber','remoteJid','Script','public',',\x20Napa\x20Keluar?\x20ðŸ˜“?','asDocument','alloc','@hapi/boom','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','Connection\x20TimedOut,\x20Reconnecting...','asSticker','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','server','action','send5Vid','https://youtube.com/channel/UC2hMC3YSXSrDDhqOECXZkUg','verifiedName','json','videoMessage','ext','concat','conversation','packname','split','isBuffer','Restart\x20Required,\x20Restarting...','SINGLE_SELECT','@broadcast','push','restartRequired','length','application/octet-stream','logout','Message','Welcome\x20','resolve','sendImageAsSticker','key','\x20Kontak','author','sendVideoAsSticker','sendContact','matchAll','child','240980FmqNEs','sendVideo','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','1.0.0','https://hardianto.xyz/api/goodbye3?profile=','promises','APIKeys','@s.whatsapp.net','&bg=https://www.linkpicture.com/q/20211125_113317.jpg&namegb=','sticker','msg','ephemeralMessage','viewOnceMessage','loggedOut','APIs','file-type','writeFileSync','connectionLost','mimetype','log','Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','setStatus','decodeJid','cMod','keys','fromBuffer','groupMetadata','entries','message','store','chat','data','sendImage','\x0a\x0aSemoga\x20Betah\x20Kak\x20><','creds.update','existsSync','tag','document','participant','international','dadah','unlink','test','20fdIGDH','@g.us','status','startsWith','close','set','writeFile','send5Loc','end','CB:call','bind','text','query','profilePictureUrl','ignore','@adiwajshing/baileys','contextInfo','&member=','./config','Welcome','parse','write','getName','readFileSync','18rQcAYt','&name=','content','TENOR','Connection\x20closed,\x20reconnecting....','BAE5','982945bFRxiD','lowdb','participants','desc','fromObject','owner','\x0aitem1.X-ABLabel:Ponsel\x0aitem2.EMAIL;type=INTERNET: kku36674@gmail.com\x0aitem2.X-ABLabel:Email\x0aitem3.URL:https://instagram.com/Nakataa1.a\x0aitem3.X-ABLabel:Instagram\x0aitem4.ADR:;;Indonesia;;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD','sendMessage','2xGPNez','timedOut','getFile','11647020RWShmo','Sistem\x20otomatis\x20block!\x0aJangan\x20menelpon\x20bot!\x0aSilahkan\x20Hubungi\x20Owner\x20Untuk\x20Dibuka\x20!','from','badSession','chalk','cache','copyNForward','image','subject','./lib/lowdb','contacts','4699160KKbdNS','\x0aFN:','Safari','relayMessage','path','WebMessageInfo','downloadAndSaveMediaMessage','notify','base64','fromMe','downloadMediaMessage','sendText','0@s.whatsapp.net','serializeM','imageMessage','messages','9GIHpXh','caption','welcome','call-creator','replace','status@broadcast','remove','waUploadToServer','toString','user','NahBotz\x20Multi\x20Device','319LXCrYT','.bin','./lib/exif','group-participants.update','pino','\x0aitem1.TEL;waid=','mtype','673466CedWFC','Connected...','584181JKucne'];_0x1a3b=function(){return _0x312f18;};return _0x1a3b();}startHisoka();let file=require[_0x43bb22(0x1b0)](__filename);fs['watchFile'](file,()=>{const _0xf8f652=_0x43bb22;fs['unwatchFile'](file),console[_0xf8f652(0x1cc)](chalk['redBright']('Update\x20'+__filename)),delete require[_0xf8f652(0x212)][file],require(file);});