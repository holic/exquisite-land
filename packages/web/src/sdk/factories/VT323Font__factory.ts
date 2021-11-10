/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VT323Font, VT323FontInterface } from "../VT323Font";

const _abi = [
  {
    inputs: [],
    name: "getFont",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260405180612380016040528061234d815260200161038d61234d913960009080519060200190610035929190610048565b5034801561004257600080fd5b5061014c565b8280546100549061011a565b90600052602060002090601f01602090048101928261007657600085556100bd565b82601f1061008f57805160ff19168380011785556100bd565b828001600101855582156100bd579182015b828111156100bc5782518255916020019190600101906100a1565b5b5090506100ca91906100ce565b5090565b5b808211156100e75760008160009055506001016100cf565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061013257607f821691505b60208210811415610146576101456100eb565b5b50919050565b6102328061015b6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80633438c9b314610030575b600080fd5b61003861004e565b6040516100459190610179565b60405180910390f35b60606000805461005d906101ca565b80601f0160208091040260200160405190810160405280929190818152602001828054610089906101ca565b80156100d65780601f106100ab576101008083540402835291602001916100d6565b820191906000526020600020905b8154815290600101906020018083116100b957829003601f168201915b5050505050905090565b600081519050919050565b600082825260208201905092915050565b60005b8381101561011a5780820151818401526020810190506100ff565b83811115610129576000848401525b50505050565b6000601f19601f8301169050919050565b600061014b826100e0565b61015581856100eb565b93506101658185602086016100fc565b61016e8161012f565b840191505092915050565b600060208201905081810360008301526101938184610140565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806101e257607f821691505b602082108114156101f6576101f561019b565b5b5091905056fea264697066735822122050610919ae3c6a064f584c93dcb00ebf4cb5b7a65da07b5be5c406a30a8b488b64736f6c63430008090033646174613a6170706c69636174696f6e2f666f6e742d776f6666323b636861727365743d7574662d383b6261736536342c643039474d67414241414141414270554141344141414141774a414141426e364141454141414141414141414141414141414141414141414141414141414141476967624942794557415a674149526b4551674b6774396f6770514543344e55414145324169514468785145494157444d4165464f52766d6c364f696b76532b4b4d726b4b6f7169596858492f6b4d4350574338326b4742776c6a5a44736f753536346f7867544a7656526963567777735a314c6a4268416b424449663664623946744f6c2b385a69752b4d5565364a2f33367632334e2f456d717a56566568716d725632543465375745384f44492b6c756644342b6e2f75556e6141627154303351414f6857544f726839572f596734357345396676705868673047526d464c6a5961395664703679754a4e45745a357a765072312b366d6369333930505653465152736c54466f4e4b4c734569495258657264322b764a5439394b5148756632376c6d2b6c34554642317158556b37613379716234533459686933615677494b6b694b31795959667975616d586c6363713649475179302f48382b713332554a396b6530675236346b56735a6337482f41744f736b6b664633524972354637424162564b654936532b543843557167386e43382b2f633636394d3378396a6d725a66416c494768456250694a315a76384434613739572f393769476d3054705969325249625a3439346479384f746d6c6e49784b4e52525377556b6e764a744553456e456a75662b3354542b70707a375a426d41304673434132383176796d5a467333622f715a6257794c33423974382f74396c4e3350306d5731354b7a4c67546c6f776b4d6749454268456d44624462443475743656632f7557475353503161437145737468434b332b334450504965742f3478327a3665375353534a37745664653348306f7051434253796f2f663963437067475544696349596968686d4f4d4d424a7878454d45415a4e63755350724c495561686a69674e554441704e565243695a5733447872454876674b746856675845427049764b544170686c61716d53466f70315252356d326b6152656e32706e446a56706c5030534f4f4a3478615658647661637953735578594d59347061795a68786f5a4a6d624e56623843434866735452426769544e7a34714b793974514854485854614c73796c692b6c4b7570357564626f62684a516155416b4635536968544847574556766c79363133326577784b536a47664c41495730535973344e78524651466954506151674578377957515a754462356c49536179564f68476a485534794635576469725448477246714d4b7a4a34646a2b634d6472594e4f48463853784438386364696c466b4749625374386d3043676b757970334f734362396a7555665157576b646358596358776b6271374f504678385a6a594a314632564138377236624f4434416541667458432b35685035584654566f6a5473446c6b6162754758736350464f5164794576785942304c436e5267475975415a567a75426e4341346c6944476546696a66522f5a464578782b74695061336e363466556d6270544c2b70483432674746656e323430307661792b372f796377672b4c46575232794b4f554f4239535275726f5765776d5352754161614a7677372f4f663233396d2f7758417a7766776378346436307a6d6c6e366e322b6c4f49344164634f597535416b6963764e59482f376a4f6f7574744e51785631797a796d5a627a48484b5174737473385943713131777a6e6e4c586355785a6361434658734f48446c7835344879354d56486944446865444b436144466978556d7730567962334c665742346b795a636d5270306978456b6f564b6c577056714e4f713359644f6e58723055665562364168317274726730734f572b4b4945343436365a346233727470684a3075322b47576a2b3634614b7070336e6a6f756e6e656d6d4b6b5857615a6162595644456c4947544e67784951354f395a7332484c6a7a495572533934432b504954784e385a67614c49525967554c31535856456d53705575524a6b4f3251766b55437052543079695671355a577651624e47703356704a654f3367434474426b73574974747474706e763730496b706f3577424449482b514b4f5079486b7a47514445674841464459315053633337315565676a2f5230546d5470446c6453506a5a776853583861434843464f4258793246376f4f712b50527a6f3969527551756e464536315145515556734849392f4f63384575696668385075304669586348706143654a30736b743872554a676a7949476c6743725a456f6a71572f43386851384138754e44693035514c4976655051505876756a4d4a7051594a6e54454a5351422f484c3936374c355a2b6f372b6a672b2b4b526e6a2b542f716257786b6446786c35675a6d587731696a2f49492f6c382b2f3033325a542b586b787a34393870446649763752486a49584d4468335350415437752b69576c4f585847422f396246655878584c333479764344684255447658566a675a6f5a52612b3469472f354b755672634934442f5965766233737339334173486e326476486a417a5147764f47344f447452686e472f6d4d556875476b33445964324c36584d6438782f714f67562b7936743131392b344f76394e77653546785a4c706e66377a5471645649515a2b44384e337a362f2b39533774777135537479616d687039674868594c686362617777424650366e332b7031413454786a3858764b644e6677307836717973684b7a715a772f4a724b777747487a564f662f44632f347a737661656f535233684c696b4c386e434748496f2f434533675745504670443756494f6432504b467356783272554e634f38457a41795a566d5a57687549774456386e68577a674f446834536b4d7171434242586e626f756e395a786e65612b4e73396b6a354f4279447361432b462b4b4635345569737155436d66367a2f3537677677767a51646138684a75687a396932654554595a374b58384e55474841706a6f5a4631656852696467706b437043524e4a396279637332627331544b30686a63375a4e52454e41306250564d3251496b3454384c2f56474b6739355271656353744c776d73616b2f4b34716a67764d74674b685143547242356d5673782b514256653234632f3052644b4b446d6956426150514339567270625566306b47426b456873557a70504863384975412f47397659464264484b55755867312b345644562f4335774734367550643135324c3237652b37444b4330557843557652496f667a535a766346396c466a4f53533145557745305432614f654932786e4e44463154374f2f634a6a4b727562633154616337447156684954726c47684d504774766d4b4a2b6d694c7830354b6d3843355a6d702b5075466c373958633166724c377467632f49534130686e32493953396838327369533257765444566d6e644b6d4f766437674a324f7752514f59593463485a327434437a776f62754c4f337469776377747566546a6552674d774e7452433043674a692f6c4a3469644c666466444f4b774d766568776c587532316c52657747696c554638322f624b506e48776b6f2b506f70304657774334374e5964395332676d533733567342314453634f4b786456596d744843516a3536576b63467151526e704965434b6a4b6d576252464f65724457505730584841625355526c3679504566556d42565a6365314e6951706d63435767666d6b4154634b756e45627347584b504d4c365738414c726f44694c463178387770776b63445535495a4278705a695952785530756e55687773564b4279792b795564706a75546869796f707a715a646f5737574b696876514e4f6b32484835537371495339526c3564347155786b364365626f3257674a4945534a74557331724e6954424a4c4642796179633841374848557869612f63532f4b4255554a356a4a663731435339645979304b335268793355756c2b6d7449362f472f62594256597974417331336d7a64416457366972587a48757150384949776534303648474c527953506d6e626c484b654b6541564a52626c4a69425a70512b58474e5436524f3361786b54534a516470754c7074527042345272784b3637324734715542776c634259432b4a63454c4d784670716a6e745462752f33554d645856324761713762476c4853347474656f4c70734f36485749697a4a4177664c7341674b6234643168415666362f74556a4f624a376f705975554f78782f5959615a656d7a426379752f58654f727454304c58686538343568702b45734177504b334f724570747073746b574f393766364b56666e6b48693067624c555334395a553076506d676a76486443317277595852565535747a5378435156664a2f6f6e37593475676b52546b7772616d4e63637541503637394b43794e6d43576d33673347467a5056784e32506943566174727231485249436a4635633376556e58344152586c576c4e6f676a462b70443962527751643679482b6b6f6748473367375048674f4947706f7171354b5666476f5a63354565797454714a5a4158703674786e766d54465a6d356b516f4f4c3434736c63427262584c716671336b6974464c3763556b796b393737524d65315868366f6973595155555954325872716d4a47536d305a4b6c7a30746c326b6b457674303179397043314c366b6b6241464967616f4d772f336f2f706b635978477742384e6d6253574d46597152624c7a6b3758475a4634736b44376f6c4d2b7755362f554832454254684a386a4b776376496c6957635945357a6c4c6a4349664774557137633857536d4f765335564f5a754f3958654655732f4e2b79504c537a4558356f6263506475572f5955786f73734a7477353246485465612b72706741702f4e314b4e57375a4b6435626734765443386a56627a7a4166574e4161312f332b7a5274714433664b766841764f566d6e70377257736c486a32616c56633870565545756b484d5a4733546a4b4778615a584a7674557a2b6f617437525875674441416955767767334a4772545946666e654f6e6c37697a375065615868626e4f746e45456e626f6c76546a797461434b39465772364957697a436c6e44304a6277737a5675482b337a73744d43634850434d485754726542446759693166506e5342587465374b707842555430576768385a5135687651612b3431636b4d6839537835386f5858724a796b363973656f6f6c645035746844374a50484e7444464f5a475a543167336b4d632f2b694b5245327447665a61354734336f564b4e314b74637136386a4c75643254474d716f51306e616c3056426544584f6c7331424a46326e5a456e4e4e537371317161714f337779746c544c45414d32727a45316d45536a2b726d682b627a6644715668624778646857494243737345314c4a49652f333565764d7559734849666d476e7256635155613754557a307970355861485579585269566f774a76597571384b514e766362576d376f2b3044443978676249734e7841577035794e647156622f32576c69767a307855773034616b7342374b44436f394b497869456d55654b6c655966437150552b6536574a376766356d51376d47327461464d70776156746c793141584c2b7239345443566134697931776a757464476b5770532f4e5843595555622f7a77766a485a5075566d615a476f323134753446347339364c5a522f445535586d32535353495869455a4b39485a715254453370306c7443486b52614d4c4339304d2f773248662b5934775838736f54666249325948776d4d474434636b773959752b6941726f6a5448556e6576424837465562387733466c41563954794641354273654a49546f764b494956746b4253757470774d39302b797746474234636667464b637452524849626e5a746b7465317a704a6678796276653472366a364451626134424c496c444b4e4f5a514b2b693337546a5850364742524c41315748396434504161643664387a4253435649366867497130792b78564637546f514563436a326a6539356d4b42623836616f515a47764d476f7738756e5a2b42614155754533714e77536e3954795644354c6732434b38693152623533632b6c494f663965442b733230315456524b3578414576357a42736d794a5557734b72687a714135476962724344756b596d2b3062535772386446796449334a3546344355444750714368633139547a4443622b43654d6277705671387a6d43517a42623636784c7351526137744e43393042594952773476426b72484f30455050595052717348585146732b634478765a616670747369757557712b75314b74343037474e4646347754464471576b4439686e767635594a4563722f6a47454e447541334d666e7931475a6b4b4f7535624d4a6a65646269776430703251534c4a3764625950486f3770534634476a5564467447414d6a43506a4331503050665437655a787636664e4d35474d78357531434776676b442b3637786752627a50586d47507546415658393164376e30657736766a313048313170564f507273484f6e48594b4b7664526138364c527055676d535172635461394a3531623835746a6e5070644261474f674c6e4e6f386c505863676638722b77306a4934444c6c535764734a78366d332f4f67786e6e75593454506d2b7241427862525a596a3671777855344877614377444f62736f686f6c436b63576d7457373070624447736432646241387662446f486c3751354e674465687147524e52476339527a6c44505a7554676f775a746b6745365a517744564a7858525a61334c5a736230315647312b306357434e7974434d5549767a7a4a48557257486245764f4937763277385158494d4c557a444d6a4663566238625a6d497437616a742b72305476554c4b49453744644d7569427831775345683349424b51764e50786a5447663356653463536c354933676a323166757358726f6d486a63764a775a6f795a6a4b56372b4a7a61636576586b584e2b3677546b70496935637042754c302f6b74496f30556674784d307732627235394d677444703737466f776d676f775165767661724a62327a52633369497736745473646342753154713737624e4c586a6978306e3359674f72344b764e343467456a73783552573648396c6569767537524533365338754e73373967333253514b533579574e7a644d52354831337a31507462673374524a794e78596a4f4e4b64575744484c35696b5449744c774c46525570305a61637a614c4b4e306d47454b4e6d7a6d553078565342324e6758452b4732364c4266686b627331314e79464d3569736369634f6d5a7a3763317369552b796672344176756d6c76363875384942444e4336765862777a356c4a6359394e5430754f3565324c496d474853303235376f39534d75727974565a4441746c52636a444838636d766e79425739784b476a734d7a692f5944394152536b6d5979744a61342f3679324a63386b39344e686d65464d746a6b594f517146314f48586675506e73385768306a703852667a6962795a777163552b33434a58785a71792b6c677a6245377730757a4b334b57466a386d65304369334e7a7532725177794465586869454d4765384f676d6c6755775249427a5846304b4f716862685770475943742b64363378354f545046525a36574832504b59695251632b4c7339394b65566c4957334b78304444485053643136585138794c385a636b6a42334c6974617056456e744c3469626958306f54644e4d756748757a56667065446f4e2f6441546a6a6559504e79396f4f354535326e4e354f315a7363523379786848793552334f76317341477935595743675a49497a47455035782f416573326c5770716a424265342b75784736796f47342f59423756745434337275747534456275342b6f47562b34424b5643766655692f444f574d6a7443595a7a4b6b5834706737444e5a3570726e6551707344626f70486d636f6c766853504349357a5978497a764e333830354c484d3433656c6f322b78384c73445439495235565a4239695a614e6d556161774e4677446f4b5071522b33473273747a50744d6c4b303551614c64444f2b6b72374648623851524641733152566a5a7645533033626864576a586c4f706347694b3474444c436b78384d3532544a485069576e78796539546f506341686c5332376d5a417742665a5034344b414a66693065754d787369716f704843595a48672f72543573726148555a563975656e4a36363868615a467a574371464c3832334d63623446624d79624d4749437646576974793436626b416b6b5648517641725757625a776b76446d6339776e3168774f54755a3965346e6e765a6d2b706f396b52505469754b6d4744664b76336e307877357352794e5664734b76776f5643372f3936426c344237723959757132374e4d4737564533596c64504b65647848486974614278516e474f65457777484d552b42643348413775774954743967615058447a34766e57782f3966414846696f756c2f34516b4e504476412b75586f463141456d415a312b4c542b51522f4a58683765466c6549614a62774e457941514a52546b5a78514c4d4947492b70626951324969577567354e6c6276685a4d5a434f586b313646527348707a32315562576c386b327a4a386f2b6f372b4f6a4344635549647a76584f393872692b724a456b564b62356961737a79563269464c55364d7233754e342f3634796e7634692b492b433270395a75576f346c65412f7752584e3168593731724a705034644930396565355845326435706b7a554a456152694d6f5a797763517877614167626b4d64524a643832367963305137347473596953794f593334504c5350514f446a4373526339564a772b6a586832362b44673341734b717a7a545a773048734d4744504b68477345544d3772433851747541735a37626539346f503849516c7a33384d744f6a354b63587365726b624c514b34506d4c66364952617554363942456c74575a312f51676d4c555274693937614a4d597849392f5341532b35576d37564e696c344e65487973666e6f724e482f69444f37584b2b6b595050766e77444f624f364e6342426f747341346b766642506b3458394c594f4d576342732b714154497755516678584255542f4b7051376a4144564b7278516644686539416735397a786d325a476e4f654b424f644b456a7a4559674c4c57554a6d3150302b686a334c6a3459507537385235566f4d56424a4b6b503972577954786c786b6f4a67583673306b6d4e576e677442634e784352575738634c4845347a4761344e634e7a2f694b313461593946555939576f4b356844633356446b746952664d54614241467a32413534536745652f5458686f4e6d696c39384b4f61443575436d3969474c6f6a703458722f4e5150662f582b446753364d75486a396b64776e784a61482b394b387a614a7a6b58596569776c3234353130586f385a644d776a4c486f6a634434596237657a4a355531345934576e5751792f4a4f3776444b3245464a645378693154346833576e5331684a7a4f383838314661516d786c6a667255723335536845654f57385a787078414d4b786a69446749343273426f7762595a5178576b6149482b735a706b57474a542f53564a516d6875414d364154515775414c7748464e2b4c71714770664c7a344141506341555343477a4937686a7957627a6b617948496469666b69434f745257764d6777304a664779456a5830445a6d496f6e746666626a3263593352566f613656384c2f515034564178716c765a6b66777267432f4657677671326e3431614144395841704d687a5430314e553659697344746458506e583070735a617247526b674577734763754f6a44792f764673317645687a54464a4a53716f7753366c6642584f3279717935614e66675a787176745238546a6a7136356958396e6d6c633668474a646d5551503332683053464950664c7930686e446a396f542f344f4e524736564c63737569547a2f726732462b39626e726236456b48536b6868756754354b74587841594e4455664e4575726c6759553539445778354b6e2b4145307a4c4134724a797832684b4f514438425a383266652b5633546d64736f51484a717743693534717a6c61593471334d6c354f39426e5a77626b613331307a677944697a6f4759534e3942744c4c537962314b634d69544e794a566456353670564f4b7257394b38746543557a6b74386e6d722f71436a4f6a4a5a436b3648384945796666536f4673572b4d7a4651385477485366336f7859316c576b63364f394c71704c785534342b33683052505066526d6758626c7a776d7862723838736f374c6e7762646d562b43344a6b47465645504e7730703448397a57452f624a4b63654d4c61487376324b667254546e5748477359477379616d376f7336467372724e7a3975374c5466475a46753245347166584854646645736848506e714250582b706662344a6d46456d4372763644416a527a53644a534a4c394c304458736d713956516253676d5a6263542f51344f78722f58734931354939386c2f476b43616a6f37695538787244596a5261747a6b72414a67364d6552617a7261614f584437586645484d544475764346706270625232516d73764250754567514175425a496f4f6d6a443558504e4636327a79734338464c6f2b574b5651677a556674363542634a3049434d4c4f65387a4c64746c54794d6b64642f696f316e77697659537951572f50366d52706155304e7966363470453478477141483848774e7469455a53366d4666717954744333445535423164696c6b4a6d6b4d47544b6a6732385431346f6d733845316f51376d517733433250562b49487853734478657878576c3536623647494b6e4d596c544b7341316c434a35393473385a6e4b6244366544493642674a4e7476436f75456b5348622f5146667634747477506630316631333379797a7557634a786a43417742484d684f596c496e336d564773686667303368574c74325437755541426a5062413031465a39326b66786f6663536f394f476f6d3867516678746c773253594765754a77564c67576e6c59417755615369764d61306e4931466b306b47715a485a316c55546d6f73673446324935513679325663484c743045475243616a6d4c636433666349434856723754544f674137446f766f2b4979796868746c63723557776a374139527673482f6f39446d363431332b50464e63345042355473456c6875726c494b496f565350676759656b4c71496b4f4d5046576d67642b6d5052594234317177534745437645445043474f6a47635063564d62694c5759635a35654a52504d746b57722b63312f4e5259533964447036512f52713136714e69424c775a475243554770746d6c476c314f5145636c5378586a6f646d6d6d4a71465439524731306576576841756731457a587246615a4e76793564557569303639794d486b5a4c703175675a72705373315975333643584941792f66476b386a58786c437357374e6b4c7661355657643141306c3653756e553450717470414a5737422b434b394f4f4843396446615534366571452b59546e7958734831396861334346636d697741433044774b497858455049546b4d6c6f38724c6d6d3067395a4f732f6e793038546646774761585862564e594743424174783351303333524a365045583730304a773278327437706c6a6c39336b766855685570526f4d6535376f4d314473654c45532f433152426d6d71376f6336566c6f7455785a644c4a394a5966656d4f737a514b34382b525165455130304b466a394368517155717a4559457044444450635547754d7349664b64395130536b3152707478496f3430783669694f6476614e6f32714363396f5a4b36786b7735626473534c7834797a36796f516b6734786c3348472f34466638426a504a7a706e456a5956744f4f7449576647796c6f517864396253776b6974656b6c536d4443317a3136575957794c7255343635594c39446a6a6f6b504e685972775444474c614241755a2b3934504f497a79354747654275735a386d5a6b736f6d6d6d577136636570386c68706d6d633163356d4d5636396a454e6e61786a304d637a664453597a4f6c652b71464a3456436a554a683142375770644e32715a5835624574646930462f547a7650703858576d6f4a4d6e69487730524832522b2b46326f4d323432394c53453956767959794e595043654f374938726b38555a42467073764a5573374839493432756f7779725a75763655753655594f3258327a3977796a51434b6c47596e745830347447524a67514456394a57466f364141413d";

export class VT323Font__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VT323Font> {
    return super.deploy(overrides || {}) as Promise<VT323Font>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VT323Font {
    return super.attach(address) as VT323Font;
  }
  connect(signer: Signer): VT323Font__factory {
    return super.connect(signer) as VT323Font__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VT323FontInterface {
    return new utils.Interface(_abi) as VT323FontInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VT323Font {
    return new Contract(address, _abi, signerOrProvider) as VT323Font;
  }
}