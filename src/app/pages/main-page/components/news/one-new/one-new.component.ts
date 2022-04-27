import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-one-new',
  templateUrl: './one-new.component.html',
  styleUrls: ['./one-new.component.scss']
})
export class OneNewComponent implements OnInit {

  constructor(private _route: ActivatedRoute) {
  }

  id: string = ""
  text: string = "\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id purus posuere, sodales metus ac, aliquam libero. Cras nunc nulla, laoreet vitae justo a, fermentum facilisis velit. Pellentesque sit amet dictum felis. Praesent scelerisque cursus neque. In laoreet urna eu hendrerit consequat. Curabitur dictum ligula ut augue molestie, id accumsan odio ullamcorper. Sed varius felis sit amet magna pharetra elementum. Morbi feugiat dolor lectus. Sed ullamcorper sapien elementum felis vestibulum pellentesque. Aenean vel ligula urna. Etiam sed scelerisque orci. Integer ac volutpat lacus. Phasellus condimentum eu mi sed fringilla. Duis accumsan purus semper arcu placerat, ut tincidunt ex semper. Suspendisse blandit convallis dignissim.\n" +
    "\n" +
    "Phasellus at sapien molestie, sodales felis ut, ultrices elit. Quisque pretium non sem at porttitor. Sed maximus, ex at suscipit aliquam, erat turpis dictum eros, suscipit eleifend tellus mauris et elit. Quisque mi neque, posuere ac augue at, commodo commodo lacus. Morbi ut ante porta, placerat nisl quis, luctus ante. Proin sed aliquam turpis, in congue massa. Morbi vel dignissim metus, nec finibus dui. Cras at pellentesque dolor. Etiam non consequat nisi, a fringilla magna. Fusce tincidunt elit nibh, vitae pellentesque enim porta at. Integer enim eros, hendrerit sit amet dictum tincidunt, tincidunt ut mauris. Sed ligula nisl, volutpat elementum suscipit molestie, congue at quam. Sed fringilla urna ipsum, eu dapibus quam tristique a.\n" +
    "\n" +
    "Nullam venenatis ipsum nec dolor tristique egestas. Etiam rhoncus vestibulum nunc, sit amet aliquet nisl commodo et. Maecenas risus diam, egestas quis egestas sit amet, lacinia sit amet eros. Aliquam id mattis felis. Quisque in dolor ac urna rhoncus porttitor. Cras pulvinar libero a interdum mollis. Pellentesque tempor sem in lectus suscipit ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. In eget ipsum iaculis neque aliquet consequat.\n" +
    "\n" +
    "Quisque venenatis mi felis, congue imperdiet leo finibus eget. Cras eu dui ac ante ultrices pretium. Suspendisse sagittis gravida lacus eu sagittis. Aenean ultrices, erat id tincidunt pretium, felis velit pellentesque erat, eu posuere leo mi sed enim. Pellentesque rhoncus rutrum massa, vel ornare lectus cursus vel. Proin sagittis lectus at sapien porttitor luctus sit amet et ipsum. Sed sed congue neque.\n" +
    "\n" +
    "Curabitur placerat diam molestie imperdiet pellentesque. In maximus congue quam eget lobortis. Nam suscipit nibh in placerat volutpat. Curabitur nec metus non justo gravida commodo. Pellentesque nec eros eros. Sed laoreet sit amet libero a aliquet. Pellentesque laoreet felis vitae eleifend ultricies.\n" +
    "\n" +
    "Curabitur dapibus iaculis eleifend. Nunc vel velit sem. Quisque semper odio porta sollicitudin vehicula. Nunc ullamcorper sem eu tortor egestas, a posuere lectus euismod. Praesent nulla lacus, consequat nec porta quis, varius ut velit. Duis efficitur elit a nibh pellentesque lacinia. Vivamus consequat gravida justo ac mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum ipsum non arcu fermentum, id blandit tortor aliquet. Nam iaculis non lorem semper dignissim. Vivamus nec commodo sapien. Fusce magna ligula, consequat a mi venenatis, fermentum aliquet dolor. Etiam ac auctor quam. Duis hendrerit, metus ut semper gravida, nulla purus imperdiet urna, vel gravida justo nibh lobortis lacus. In faucibus dui sed tempor cursus. Vivamus convallis nibh id pretium mattis.\n" +
    "\n" +
    "Fusce ante diam, egestas at dolor eget, cursus interdum orci. Suspendisse vestibulum posuere ipsum. Maecenas in dapibus mauris. Nam eget tortor odio. Nullam feugiat justo mauris, vitae feugiat justo pulvinar sit amet. In molestie risus magna, tincidunt ullamcorper nisl consectetur non. Nunc viverra elementum sem, ac pulvinar nunc elementum ut.\n" +
    "\n" +
    "Fusce lacus quam, sollicitudin a sollicitudin vitae, tincidunt eu turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin blandit eros libero, quis semper est fringilla commodo. Aenean mauris neque, rhoncus vitae pellentesque ac, tempor vel nulla. Duis feugiat vestibulum metus ut rhoncus. Mauris facilisis lectus et lacinia dictum. Morbi sed urna ligula. Praesent vitae nulla porta libero iaculis faucibus. In feugiat sed massa at accumsan. Morbi et lobortis eros. Quisque vehicula mi odio, et volutpat eros accumsan eu. Maecenas posuere lorem venenatis mauris interdum euismod. Sed sodales dapibus enim, in eleifend nunc sodales sit amet. Nulla viverra consectetur enim in mollis.\n" +
    "\n" +
    "Cras leo tortor, vulputate et facilisis eget, commodo quis ex. Nunc commodo enim vel dignissim tincidunt. Aliquam a nulla vitae neque sagittis imperdiet. In neque nibh, maximus at aliquam quis, placerat quis dui. Cras neque augue, molestie et viverra eu, iaculis ac nisl. Suspendisse potenti. Morbi sodales mollis lectus, id semper ipsum fringilla ut. Duis ut diam faucibus, efficitur lectus vel, dignissim diam.\n" +
    "\n" +
    "Nullam nec venenatis quam. Pellentesque id elit pharetra, eleifend ligula nec, consequat nulla. Integer varius tincidunt libero volutpat placerat. Sed elit mi, vulputate et ipsum et, sagittis faucibus elit. Proin auctor, ipsum in congue vulputate, purus elit iaculis ligula, eget sodales lacus arcu nec urna. Proin euismod nibh ligula. Nunc lacinia ipsum lacinia urna pharetra cursus. Donec id finibus nunc, sit amet porttitor mi. Morbi odio diam, auctor vitae mi eu, tincidunt tincidunt ligula. Suspendisse potenti. Morbi faucibus justo nec arcu rhoncus, ut convallis libero tristique. Integer eget tellus a sem mollis sodales placerat ac ligula.\n" +
    "\n" +
    "In ante odio, placerat accumsan libero suscipit, tempus malesuada neque. Sed ut eleifend enim. Duis efficitur, leo eget fringilla congue, nulla ligula lacinia mi, ut malesuada erat nibh id orci. In sit amet porttitor velit. Pellentesque convallis bibendum turpis. Suspendisse imperdiet justo at consectetur accumsan. Vestibulum sed blandit justo, condimentum tincidunt sem. Ut consequat ultrices dapibus. Nam nulla sapien, porta vel auctor ac, condimentum at ante. Integer in justo ultricies, pharetra turpis consectetur, interdum nulla. Aliquam et sapien pulvinar, mattis massa nec, fringilla lacus. Integer viverra sodales ultricies. Praesent a ornare dolor. Nulla in dapibus leo, nec sollicitudin ipsum. Donec bibendum faucibus enim, sit amet varius leo aliquam facilisis.\n" +
    "\n" +
    "Ut condimentum a sem vel pellentesque. Quisque risus leo, egestas malesuada ipsum vitae, laoreet imperdiet felis. Pellentesque nec efficitur risus, a interdum neque. Duis sit amet suscipit nibh, in lobortis ex. Mauris tincidunt, dui non varius dapibus, sapien lorem pellentesque ligula, vitae dignissim sapien nibh quis quam. Quisque a justo vel massa facilisis feugiat eu non neque. Ut quis quam sit amet nisi pellentesque egestas.\n" +
    "\n" +
    "Ut interdum tortor id iaculis fringilla. Mauris auctor euismod tellus, ut mattis ipsum tempus a. Fusce tincidunt elementum tortor, at elementum tortor suscipit sed. Vestibulum quis lobortis dui. Nullam dignissim convallis tincidunt. Donec ipsum odio, molestie eu suscipit sit amet, blandit nec leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce eu neque nisi. Ut ornare non ipsum a vestibulum.\n" +
    "\n" +
    "Nulla velit mi, condimentum sit amet neque porta, facilisis facilisis odio. Morbi eu tincidunt leo, vitae vehicula lacus. Sed sapien arcu, rhoncus eget augue sit amet, venenatis lacinia orci. Maecenas posuere velit sapien, in viverra erat tristique porta. Donec ligula libero, varius sit amet aliquet vitae, varius in ipsum. Quisque ac posuere nisi, non maximus odio. Quisque tincidunt, metus vitae imperdiet rutrum, metus massa fermentum eros, quis venenatis ex eros auctor ex. Nam ultricies luctus enim non consectetur. Duis accumsan molestie est non facilisis. Donec sodales quam ipsum, a venenatis lacus interdum in. Curabitur sit amet aliquet neque, in viverra mi. Ut eget aliquet elit.\n" +
    "\n" +
    "Donec sodales nisl vitae egestas porttitor. Etiam faucibus suscipit magna non semper. Morbi neque enim, vulputate quis ipsum eget, sagittis lacinia diam. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vestibulum neque interdum orci finibus dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In eu erat vel neque lacinia pellentesque. Sed viverra dui sodales lacus maximus, pharetra aliquam dui venenatis. Quisque vulputate semper mauris, id pulvinar quam convallis ut. Aliquam felis purus, pellentesque vestibulum bibendum sed, facilisis sed erat. Sed massa massa, aliquam nec fringilla vitae, lobortis ut dolor. Maecenas ultricies mattis ullamcorper.\n" +
    "\n" +
    "Cras eleifend pellentesque arcu vitae blandit. Aliquam erat volutpat. Ut sit amet nibh ex. Maecenas dolor urna, tincidunt at tempus sit amet, facilisis non elit. Vivamus nisl purus, pulvinar sit amet orci et, placerat auctor dui. Aenean semper velit eget imperdiet facilisis. Vivamus a aliquam dui. Phasellus at lacus urna. Nam quis lectus maximus, finibus nisl vel, imperdiet sapien. Integer nibh lacus, finibus et lacus dictum, venenatis lacinia quam. Donec lobortis tellus felis, sit amet feugiat quam mattis nec. Suspendisse et augue eu diam pretium facilisis. Nullam molestie eros ipsum, a egestas tellus iaculis id. Sed tincidunt tempor facilisis.\n" +
    "\n" +
    "Ut metus dolor, rhoncus sed leo nec, finibus dignissim ipsum. Nullam sodales dolor sit amet ante elementum sodales. Cras bibendum, tortor non malesuada condimentum, tellus sem pellentesque diam, sed ullamcorper ex nisi sed nisl. Praesent dui tortor, consectetur et congue vel, tincidunt id ipsum. Etiam hendrerit iaculis lectus ut ultrices. Sed vestibulum, arcu vitae porttitor scelerisque, metus dui porta orci, in ultricies arcu nunc in massa. Nam sagittis lobortis massa id consequat.\n" +
    "\n" +
    "Cras vitae nisi velit. Proin commodo vehicula ligula, ac mollis eros congue non. Nullam eu dui est. Phasellus sed dignissim eros. In aliquam justo ac fringilla condimentum. Nam ultrices mi ante, sed porta purus lacinia nec. Sed congue eros non massa consequat, sit amet laoreet est tristique. In eleifend scelerisque nisl, at blandit tellus ultricies in. Donec condimentum nisi dui, nec tristique magna ullamcorper et. Vivamus at urna enim. In ullamcorper tellus at metus mattis, eu condimentum erat fringilla. Pellentesque eget est fringilla, feugiat odio molestie, viverra sapien. In lobortis dolor vitae ligula sollicitudin pharetra. Sed lobortis ipsum orci, et malesuada mauris aliquet id. Ut iaculis viverra pulvinar.\n" +
    "\n" +
    "Integer dapibus magna a velit finibus malesuada. Cras nec dui et enim viverra ultricies a congue risus. Nam pharetra dictum mi id volutpat. Mauris in mauris ac ipsum aliquam vehicula non vitae orci. Duis ut augue tellus. Sed placerat eros id blandit consequat. Donec sed efficitur mi, ut laoreet augue. Nunc rhoncus, augue ac blandit pulvinar, lacus metus cursus diam, ac malesuada elit nisi ac eros. Nunc consequat turpis faucibus arcu suscipit, vel aliquet ligula fermentum. Nam dignissim ipsum sed nisi porta, sit amet hendrerit nibh volutpat.\n" +
    "\n" +
    "Sed commodo blandit sem, ut efficitur dui vehicula ut. Praesent dignissim vel quam id malesuada. Mauris orci lorem, convallis quis varius a, ornare pulvinar enim. Duis malesuada tristique leo, nec vehicula risus pretium eu. Fusce placerat sed ante quis feugiat. Integer eget ullamcorper sem. Aenean bibendum magna dui, quis aliquet odio viverra at. Duis lorem ipsum, vestibulum vel nunc id, bibendum venenatis ipsum. Nam sodales sed nunc eget faucibus. Nulla lacinia magna at odio cursus dictum. Phasellus venenatis enim ante, in mattis justo ullamcorper id. Curabitur ligula risus, convallis non hendrerit a, euismod sed lectus. Etiam commodo libero in elementum luctus. Maecenas sit amet auctor urna. Nullam dignissim diam vel magna sagittis pharetra.\n" +
    "\n" +
    "In velit diam, euismod et quam a, tincidunt finibus lorem. Donec luctus posuere fermentum. Sed ullamcorper gravida iaculis. Nam egestas tortor id placerat ultricies. Nullam dignissim augue non faucibus ultricies. Suspendisse potenti. Mauris pharetra augue lectus. Sed a condimentum sapien, ac lacinia nisl. Sed fermentum eleifend ipsum vel porta.\n" +
    "\n" +
    "Proin dapibus mauris sed dolor mollis scelerisque. Maecenas tristique lacus ac lectus semper, non blandit nisi lacinia. Sed a velit ut purus ullamcorper faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse tristique molestie nibh vel ultricies. Praesent semper vehicula pharetra. Donec in odio lectus. Quisque convallis urna erat, fringilla ullamcorper sem commodo nec. Nulla tempus, ligula id lobortis ornare, nunc velit mollis arcu, non molestie purus nunc in felis. Quisque sed mauris a elit pellentesque egestas id sed purus. Phasellus vitae lorem sem. Donec pretium volutpat dignissim. Etiam quis bibendum neque. Aenean sed nisl tristique, pulvinar lacus nec, vulputate massa. Proin quis nibh quis augue tempus dictum at eget dolor.\n" +
    "\n" +
    "Praesent porttitor ultricies eros, ut ultricies magna tincidunt in. Quisque faucibus erat in rhoncus lobortis. In vestibulum vestibulum dui, vel bibendum metus pretium ac. Aenean dictum cursus sem vitae pulvinar. Fusce metus mauris, lacinia vel ultrices id, placerat at orci. Mauris metus nisi, malesuada id libero non, accumsan venenatis nibh. Proin at hendrerit tortor, et iaculis urna. Duis rhoncus mi felis, vitae dictum lectus feugiat ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi id nulla at urna finibus sagittis et vitae tellus. Proin tempus ex mi, eget convallis est convallis quis. Morbi interdum justo et blandit lobortis. Nunc ut tempor tellus, sit amet imperdiet orci. Sed fermentum, est nec dapibus euismod, odio nisi lobortis nibh, sit amet egestas tortor metus sit amet augue. Nunc tempus vel metus eget laoreet. Sed tincidunt, mauris vel mollis posuere, enim turpis luctus mi, id semper nunc risus finibus mi.\n" +
    "\n" +
    "Praesent et nisi a orci porttitor sollicitudin. Sed sed risus lacinia ante iaculis venenatis sit amet eget lorem. Quisque quis cursus arcu. In pretium iaculis leo, vitae vulputate elit congue sit amet. Donec faucibus a nunc eget feugiat. Vestibulum dui mauris, ornare id urna a, efficitur euismod tellus. Donec molestie nulla eget elementum semper.\n" +
    "\n" +
    "Curabitur placerat malesuada velit eu malesuada. Quisque feugiat et dui et dapibus. Mauris eu vehicula nibh. Pellentesque et gravida dolor, at efficitur purus. Praesent et ipsum vitae erat hendrerit ultrices quis eget orci. Nunc sed justo purus. Nullam consectetur augue dolor, tempus placerat tellus auctor at.\n" +
    "\n" +
    "Fusce vel dolor et dolor vulputate faucibus quis in quam. Aenean et neque purus. Curabitur elementum purus vel diam eleifend, ac aliquet ante venenatis. Phasellus sollicitudin libero vel dapibus suscipit. Sed laoreet tempus malesuada. Ut augue eros, viverra non mauris sed, dapibus varius ipsum. Integer tempus nibh id arcu condimentum mattis. Pellentesque lorem mi, pulvinar eget molestie quis, eleifend pellentesque ligula. Curabitur non dignissim ex. Fusce ultricies mauris ante, vitae scelerisque erat mattis nec. In commodo pretium erat sit amet suscipit. Ut fringilla vel leo ut imperdiet. Suspendisse convallis, leo at consectetur iaculis, est massa vestibulum ex, nec lobortis elit augue id mauris. In eleifend risus ut volutpat sagittis.\n" +
    "\n" +
    "Vivamus urna libero, porta a rhoncus ut, fringilla cursus nisi. Donec at tristique lorem. Nulla facilisi. Proin nulla est, iaculis vel pharetra quis, tristique eu ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse quis metus quis odio iaculis facilisis vel sit amet eros. Nunc lectus sem, convallis eu aliquam nec, gravida in nisl. Pellentesque ultricies maximus odio sed sagittis.\n" +
    "\n" +
    "In faucibus metus id risus finibus mollis. Donec rhoncus ipsum purus, vitae laoreet est fringilla nec. Integer ac ultrices arcu, id sodales sapien. Mauris in fringilla risus. Vestibulum lorem erat, molestie ac posuere eget, condimentum aliquet felis. Cras sit amet quam semper, tempor arcu vitae, imperdiet velit. Integer vel leo elementum purus mollis aliquet. Maecenas feugiat tortor in metus tempus, ac varius velit sollicitudin. Praesent et erat mauris. Aliquam in odio porta, iaculis ipsum nec, tempor orci. Sed id auctor sapien, non fringilla nisi. Ut vel hendrerit ligula. Phasellus gravida dolor non interdum iaculis. Suspendisse nec elementum tellus. Integer magna nibh, tempor sed lorem a, blandit vestibulum quam. Donec luctus laoreet mi, eget cursus neque porta ut.\n" +
    "\n" +
    "In nibh mi, viverra at ante eu, efficitur mattis sapien. Phasellus commodo malesuada leo, quis viverra odio posuere id. Praesent consequat semper convallis. Nullam arcu est, luctus sit amet velit et, tristique molestie nulla. Pellentesque ullamcorper elit ex. Nulla facilisi. In quis scelerisque metus, at elementum dui. Fusce vitae gravida mi. Suspendisse mattis suscipit dolor, ut mollis eros placerat non. Ut nec tincidunt neque. Suspendisse sodales blandit odio, in fermentum quam condimentum eu. Quisque sed magna nec lacus dictum ullamcorper. Mauris vel condimentum magna, non fringilla ante.\n" +
    "\n" +
    "Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc pretium pulvinar vulputate. Cras tempus scelerisque dui, sit amet rhoncus magna tristique ut. Duis tincidunt eget mi vitae lobortis. Vestibulum lacinia purus sagittis lorem suscipit suscipit. Aliquam erat volutpat. Duis neque augue, vehicula id accumsan vel, porta vitae mauris. Maecenas sagittis rutrum augue, a porttitor sem iaculis non. Quisque eleifend interdum odio et suscipit. Sed vitae est non lorem mollis volutpat et ac purus. In vel eleifend est.\n" +
    "\n" +
    "Donec viverra congue lorem a mattis. Fusce non finibus dolor, a egestas tellus. Aliquam metus lacus, sagittis eu tincidunt non, interdum vel erat. Nullam interdum felis eu sagittis condimentum. Nunc elementum pharetra mi a viverra. Sed facilisis odio ligula, nec viverra nisl rutrum quis. Mauris sed pulvinar nulla. Praesent elementum purus libero. Sed venenatis tellus a libero semper scelerisque. Cras quis nunc sollicitudin sem ultricies porttitor non vitae ligula. Aenean mollis urna magna, non vestibulum ipsum pulvinar sit amet. Nulla suscipit justo id viverra ullamcorper. Aliquam commodo nisl at turpis finibus congue. Phasellus vehicula orci non orci imperdiet hendrerit.\n" +
    "\n" +
    "Etiam euismod, risus nec dapibus ultrices, erat neque tincidunt orci, non egestas ligula dui ut augue. Nunc commodo lacus in varius feugiat. In ultricies magna vitae volutpat convallis. Phasellus cursus quam quis mauris scelerisque, id porttitor diam accumsan. Vestibulum ornare in neque nec aliquet. Aenean et nulla vitae purus tincidunt facilisis pretium at sapien. Curabitur laoreet aliquet nibh. Nam mollis nulla vitae porta dignissim.\n" +
    "\n" +
    "Donec sit amet libero eget quam varius tincidunt quis sit amet lorem. Ut lacinia tempor vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed eros nec justo viverra porttitor. Phasellus tincidunt justo tincidunt, interdum diam sed, interdum quam. Ut quis congue dui. Duis fringilla lectus eget metus rhoncus, ac interdum arcu volutpat. Donec vitae bibendum velit. Phasellus eu nisi dapibus, lacinia mauris id, faucibus nulla. Proin quis nulla et dolor luctus sodales.\n" +
    "\n" +
    "In nec venenatis turpis. Duis at blandit est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce non mauris eu tortor tempor tincidunt. Sed aliquam iaculis odio, eu gravida massa dictum at. Nam eu diam orci. Quisque tincidunt nibh nibh, quis ullamcorper ex tempus sit amet.\n" +
    "\n" +
    "Sed blandit egestas pretium. Vestibulum tincidunt ante felis, congue congue est sagittis in. Maecenas eget est non arcu tempor laoreet. Morbi malesuada vitae ipsum sed volutpat. Morbi dapibus pharetra metus non auctor. Integer sed consectetur nisi. Pellentesque fringilla nibh venenatis sapien consectetur tristique. Vivamus id porta nibh, quis mattis neque. Cras tortor sem, gravida sit amet suscipit non, semper eget dui. Aliquam nec dui id nisl porta sollicitudin.\n" +
    "\n" +
    "Mauris congue suscipit iaculis. Vestibulum laoreet nunc quis gravida commodo. Mauris mi ligula, aliquam id tempus sit amet, consequat eu tellus. Quisque eu lacus in urna blandit semper at sit amet nibh. Nulla efficitur nisi eu ex scelerisque ultricies. Suspendisse non nulla lacinia, congue urna vitae, lobortis eros. Donec pretium euismod libero, ac bibendum ex semper vel. Proin aliquam vestibulum dictum. Suspendisse eget vestibulum metus, in molestie eros. Proin eget turpis pretium, varius velit consectetur, ultrices odio.\n" +
    "\n" +
    "Duis nec est ante. Curabitur eget purus tortor. Aenean eget condimentum velit. Suspendisse facilisis tristique est. Mauris tincidunt est a velit iaculis tempor. Morbi iaculis lacinia nunc, ac ultrices eros cursus ac. Nam eu elementum tellus. Nullam vulputate, nisl non congue ornare, dui nunc rutrum nisi, quis tincidunt purus dolor in arcu. Suspendisse non varius dui, in viverra velit.\n" +
    "\n" +
    "Duis blandit, sapien sit amet rhoncus vehicula, leo sem lacinia elit, at feugiat felis lacus in ante. Suspendisse potenti. Mauris tincidunt bibendum ipsum sed viverra. Nullam nec tristique elit, a tincidunt elit. Nullam eleifend metus sed leo efficitur, sit amet ornare ligula rutrum. Donec orci sapien, fringilla ut pellentesque ac, maximus id magna. Proin metus ex, laoreet vitae velit eu, dapibus vestibulum tellus. Nulla non magna in augue rutrum pharetra. Quisque at blandit elit.\n" +
    "\n" +
    "Aliquam cursus ultrices tristique. Curabitur aliquet vehicula tellus, at pharetra lectus gravida id. Proin sit amet pretium lorem. Sed sed augue euismod, pharetra nisi eu, pellentesque justo. Curabitur eget porttitor ante, eu imperdiet libero. Sed eget pharetra quam. Pellentesque suscipit lacinia eros, eu venenatis lacus. Nullam ultrices sapien nisl. Integer pellentesque sodales dui, at tincidunt dui malesuada vitae. Suspendisse dapibus ex at eros finibus fringilla. Proin efficitur odio quis quam dictum, id sagittis lorem pellentesque. Pellentesque sollicitudin, justo faucibus dignissim porta, leo libero efficitur velit, nec condimentum tortor turpis et massa. Vivamus maximus laoreet leo, ac ornare massa venenatis ut.\n" +
    "\n" +
    "Praesent convallis, quam et finibus interdum, lorem ante tristique nulla, at molestie sapien nunc at purus. Nam a libero nisl. Pellentesque pulvinar vel justo sed accumsan. Nulla fringilla eros eu diam scelerisque lobortis. Curabitur at facilisis diam, quis imperdiet urna. Mauris et est nisl. Ut posuere velit magna, id scelerisque est vulputate at. Integer volutpat blandit arcu, ut pulvinar urna facilisis ac. Quisque consequat imperdiet elit laoreet pulvinar. Fusce ultrices purus et justo egestas, congue consequat lacus tristique. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ac lacus a velit faucibus accumsan eu quis nibh. Nunc ac metus ac diam convallis congue semper at purus. Aliquam sit amet risus elementum urna suscipit ultricies id et ligula.\n" +
    "\n" +
    "Nulla urna nisi, scelerisque vitae aliquam gravida, bibendum vel est. Ut cursus sapien quis aliquam consequat. Fusce varius, augue at faucibus dapibus, augue erat convallis elit, at varius odio tortor at diam. Donec malesuada rhoncus neque eget varius. Ut sollicitudin nibh vel ante vestibulum ultrices. Ut condimentum ut enim id lobortis. Donec finibus nunc at accumsan scelerisque. Nulla facilisi. Curabitur viverra nibh ut enim dapibus, a fringilla nisi lobortis. Vivamus eu leo augue. Etiam eu felis dictum diam tempor porttitor ac eget urna. Phasellus auctor bibendum metus dignissim varius. Phasellus euismod posuere dapibus. Donec commodo, nunc dignissim pharetra elementum, tellus arcu commodo tellus, ut malesuada enim dolor nec lectus.\n" +
    "\n" +
    "Praesent sed sem nisi. Curabitur vehicula eget lorem tristique volutpat. Sed ornare placerat erat, at rutrum dui finibus eget. In elementum leo vel odio efficitur, ut sodales tortor auctor. Aliquam vel magna vel leo volutpat luctus. Etiam facilisis erat leo, eu pulvinar dui feugiat a. In hac habitasse platea dictumst. Pellentesque congue bibendum imperdiet. Nam scelerisque lectus quis fringilla accumsan.\n" +
    "\n" +
    "Curabitur pellentesque viverra suscipit. Nullam consequat, justo vitae posuere aliquet, libero elit accumsan risus, ac fermentum augue metus a lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed tristique, tellus ac posuere sodales, tortor elit sagittis arcu, ac fringilla dui lacus id tellus. Nulla id venenatis nunc. Sed auctor neque a urna ullamcorper, eu dictum dui aliquam. Praesent eu congue lorem, sit amet cursus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor tincidunt libero, id pretium purus mollis quis. Nullam ac auctor tellus, ac fringilla erat. Nullam enim massa, laoreet facilisis tincidunt quis, ornare vel velit. Praesent non arcu nulla. Aenean ornare nibh vitae est placerat, eget placerat eros elementum. Cras sollicitudin placerat metus id interdum.\n" +
    "\n" +
    "Etiam aliquam condimentum enim, quis auctor nibh vehicula eu. Pellentesque porta porttitor ex nec vulputate. Suspendisse vitae dictum augue. Duis molestie mauris euismod orci placerat interdum. In aliquet metus nec lorem semper maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras id nisl nec libero ullamcorper finibus.\n" +
    "\n" +
    "Donec imperdiet lacus eu orci molestie, non iaculis sem congue. Nulla facilisis sed eros ac laoreet. Mauris a libero ac sem ornare elementum bibendum semper orci. Etiam efficitur, lorem et sodales bibendum, tellus arcu dapibus justo, ut pulvinar tellus est a ante. In at nunc viverra, volutpat erat quis, dictum dui. Nunc bibendum volutpat augue suscipit mollis. Etiam vitae tincidunt sem, vitae fermentum quam. Duis vulputate ipsum eu felis dictum, eu hendrerit nisl varius. Ut sagittis nisi arcu, at dapibus eros semper id. Donec lacinia sagittis dolor, commodo ullamcorper nisi. Proin nec metus vel diam vehicula ultricies nec eu felis.\n" +
    "\n" +
    "Vivamus ut consectetur felis, quis auctor sapien. Vivamus nec est rhoncus, ullamcorper metus a, ullamcorper nulla. Nulla dignissim iaculis pharetra. Morbi vitae lorem orci. Etiam feugiat quam sed lacus ultrices, vel facilisis lacus venenatis. Aliquam at eros aliquam, semper urna ut, euismod nulla. Duis ultricies tempor mauris, sed maximus massa hendrerit eu. Morbi et sem sit amet diam lobortis sollicitudin at ut lorem.\n" +
    "\n" +
    "Aenean varius ligula eget fringilla commodo. Aliquam eu ultrices felis, sed elementum magna. Duis nec nibh rhoncus, convallis turpis ut, accumsan dolor. Aliquam in quam dictum, iaculis nulla sed, pharetra eros. Suspendisse vel fermentum dui. In ac elit ac libero sodales efficitur. Vivamus lobortis volutpat leo vel dapibus.\n" +
    "\n" +
    "Vestibulum suscipit molestie malesuada. Praesent non nulla ut est pellentesque vehicula. Aenean in mauris et nunc aliquet feugiat. Curabitur fermentum massa vitae arcu ultrices, nec sagittis magna varius. Quisque sollicitudin, diam in luctus dignissim, erat nibh sagittis tortor, a elementum nisl felis ac ex. Morbi lobortis est ac nibh tempus, sed accumsan lorem venenatis. Nullam sit amet finibus magna. Sed quis posuere nisi.\n" +
    "\n" +
    "Curabitur commodo eros a elit laoreet, vel auctor sem tincidunt. Vestibulum eget pulvinar ex, nec euismod eros. In fermentum nisl a magna lacinia, id porta nisi mattis. Donec congue commodo euismod. Nulla pretium nunc risus, id pretium ipsum luctus eget. Pellentesque faucibus nulla at volutpat convallis. Maecenas id lorem sit amet risus commodo egestas eu ac metus. Integer posuere nisl quam, ac condimentum ligula ultrices ac. Vivamus in accumsan turpis. Praesent ut lacus dignissim, tristique nibh iaculis, vulputate velit.\n" +
    "\n" +
    "Donec dignissim tellus sit amet lectus finibus pharetra. Duis quis tincidunt magna, a volutpat est. Etiam sed congue purus. Donec mollis massa nec nisl suscipit, id tristique lectus laoreet. Curabitur pharetra purus ac dolor egestas molestie. Nunc sollicitudin dui dictum ultricies placerat. Ut nunc neque, vulputate ut vulputate sed, suscipit ut diam. Vivamus a lacus a ipsum sollicitudin cursus sit amet nec lorem. Curabitur euismod ligula quis justo convallis, sed fringilla nulla pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Morbi vel ligula odio. Nunc tristique iaculis sem, ac placerat felis sodales quis."

  ngOnInit(): void {
    this._route.params.subscribe(
      (params: Params) => {
        // @ts-ignore
        this.id = params.id;
      }
    )
  }

}
