import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const spomeniciKulture = [
  "Путописна слика Балкана и Србије имала је још једну важну димензију. Балкански предели су у очима намерника из Европе представљали просторе на којима су се, испод наслага векова, налазили споменици древних европских цивилизација. Како је приметио Феликс Каниц: „Ко се не би занимао за историјски богато тло Србије, на коме су се у прошлости борили Римљани, Германи, (...) Византинци, Словени (и други). (...) И данас се још на споменицима дуж доњег дунавског лимеса види име цара Трајана.”",
  "У списима путника XIX века, посебно оних које су у наше крајеве довели романтичарски пориви, провлачила се мисао да је османско освајање прекинуло нормалан историјски ток ових простора. Након што је напредак цивилизације утихнуо на Балкану, пред налетима Оријента, само су споменици антике и хришћанског средњег века остали да сведоче о величанственој прошлости. Они су вековима пропадали и страдали од руке завојевача. Њихову судбину Каниц је описао на следећи начин: „У споменицима прошлости Османлије су виделе опасне подсетнике на ранија времена независности народа које су држали под својом влашћу, па им се уништавање тих споменика чинило целисходним и нужним. Примитивизам и варварство сравњивали су са земљом царске и краљевске дворове, који су будили успомене на славно доба. То што цркве и манастири нису доживели исту судбину може се објаснити само страховањем да се хришћанско становништво не доведе до крајњег огорчења.”",
  "Интересовање европских археолога-аматера који су ходили Балканом било је најчешће усмерено ка материјалним остацима антике. Па ипак, они су високо ценили и споменике византијске и српске средњовековне уметности и архитектуре, искрено се дивећи манастирима и црквама династија Немањић и Лазаревић. Сета за прохујалим временима средњег века посебно је била изражена у описима манастира Раванице и Манасије, које је у свом путопису забележио Ото Дубислав Пирх: „Још одмах чим сам дошао у Србију, чинило ми се у многом погледу као да сам се нашао у средњем веку. Но нигде нисам то тако живо осећао као у тренутку кад дођосмо пред врата Раванице. Манастир лежи између високих, шумом оперважених планина; зупчасте рушевине штрче из средине манастирског дворишта. Над великим улазним вратима наднео се као неки доксат; све има готски изглед.”",
  "Сличан утисак, пруски официр је стекао и приближавајући се задужбини деспота Стефана Лазаревића: „Јахали смо долином Ресаве (...) и после једног сата стигосмо код великих и лепих рушевина града Манасије. Град лежи на окомку брда, (...) има дванаест великих, четвороуглих, већином добро одржаних кула, (по којима) се још познаје какав је био начин одбране у средњем веку.” Неизбежно осећање туге због трагичне повести овог манастира, обузело је Пирха на уласку у манастирску цркву: „(...) њена унутрашњост, која је сва покривена великим, брижљиво израђеним и златом украшеним сликама светаца и јунака, представља слику пустоши. Турци су потпаљивали у унутрашњости цркве сламу и барут, да те споменике старе српске величине униште, а докле су могли допрети, онаказили су им лица.”",
  "Дивљење лепоти и жал за страдањем споменика српског средњег века, посебно су били видљиви у путописним приказима манастира који су и током XIX века остали под влашћу Османског царства. Ово се нарочито односило на манастире Косова и Метохије, који су, по речима Александра Гиљфердинга, представљали једине доказе историјског бивства српског народа на просторима Старе Србије. Британске путнице, Мис Ирби и Џорџина М. Макензи биле су задивљене грациозношћу цркве у Грачаници, која им је пробудила сећање на цркве северне Италије. Међутим, нису пропустиле да нагласе како су ликови светаца на фрескама били веома оштећени, као последица вишевековног турског скрнављења.",
  "Пажњу путника који су трагали за споменицима средњег века посебно су привлачили Високи Дечани. Веома надахнут опис овог манастира оставио је 50-их година Александар Гиљфердинг: „Желео бих да ову богомољу посети уметник који би, уверен сам, потврдио моје мишљење да је овај храм једна од најсавршенијих творевина византијске сакралне архитектуре. Када уђете у ту цркву, обузима вас некакво чувство радосног уживања. Ви сте ту безбрижни, спокојни и весели и та ваша радост је некако узвишена. То је заиста царска задужбина, како српски народ углавном назива Дечане. Заиста је свети краљ при подизању ове цркве могао казати, речима гуслара: „Да ју нигде на свету нема, Нек се знаде царска задужбина, Нек се знаде: јесмо царевали!”. Као и у описима других српских манастира на Косову и Метохији, Гиљфердинг је посветио неколико редака тренутном стању манастира: „Ако игде на свету постоји православни манастир коме прети опасност да опусти, ако игде има светиње за чије се одржање треба да брине сваки православни хришћанин, онда је то свакако манастир Високи Дечани.”",
  "Манастири и цркве за путописце нису представљали само импозантне остатке прошлости. Они су уједно били и наговештај прилика у којима би се, након постепеног повлачења Османлија, давно заустављени историјски развој балканских крајева, коначно могао наставити. Са највећим ентузијазмом, овакав исход је најављивао Феликс Каниц: „Богато комбиноване скулптуре ових споменика пружају изванредан доказ о високо развијеној уметности Србије у средњем веку; и чак и данас, поред вековног, споља наметнутог прекида, нису се угасиле природне способности урођене овом народу. Клице новог стваралачког полета намећу се оку посматрача са свих страна; (...).”",
  "Међутим, у појединим путописима нашло се места и за критику односа Срба према материјалним остацима своје прошлости. Како је забележио Иван Јастребов,руски конзул у Призрену 70-их година XIX века, било је много примера манастира који нису страдали од турских одмазди, већ су запустели и постепено пропадали захваљујући српском немару. До сличног закључка дошао је, неколико деценија раније, и његов сународник Гиљфердинг, који је на свом путу кроз Босну, Херцеговину и Косово и Mетoхију прикупљао старе повеље и друге документе. Како је записао, „неколико товара старих писама са собом (је) у Русију однео”, а „под теретом накупљених књига улегнуле су његове товарне животиње”.",
  "У овим опажањима било je трунке надмености, као и осећања цивилизацијске супериорности. Ово је истраживаче и археологе, који су пристизали из најразвијенијих европских друштава, доводило до наума да би споменике културе било пожељно пребацити у музеје који су ницали у њиховим престоницама, како би их заштитили од пропадања. Иза ове идеје стајала је имплицитна претпоставка да народи којима су ови споменици некада припадали нису били на довољно високом цивилизацијском нивоу да би о њима бринули. О томе је Гиљфердинг записао: „Не може се човек доста начудити овдашњим Србима што су тако равнодушни према споменицима своје рођене повеснице. (...) у Србији није још нико помислио да је нужно сакупити и сачувати рукописе (...) по тамошњим црквама и манастирима.”",
  "Па ипак, не може се спорити да је у овим замеркама било истине. Каниц је у свом делу навео како му је Вук Караџић причао да је давно у Студеници, у рушевинама затекао само једног калуђера, „који је историјски вредне пергаменте употребљавао уместо прозорског стакла на својој јадној кућици”. Међутим, он се затим упитао да ли је уопште могло бити другачије: „Па и ови калуђери су припадали оној у најцрњем ропству држаној раји, чији су тлачитељи стајали на још нижем културном ступњу.” Као и у другим питањима, он је и у овом случају показао оптимизам и наду у светлу будућност. С тим у вези, приметио је како се, након ослобођења Студенице и њеног доласка под власт Србије, „захваљујући српском Министарству просвете и црквених дела (...) последице двестогодишњег пропуста уклањају – колико је то могућно.”",
];

function SpomeniciKulture() {
  return (
    <Carousel className="flex w-[55rem] h-[30rem] mt-[5rem] items-center text-justify px-[4rem] text-[1.2rem] ">
      <CarouselContent>
        {spomeniciKulture.map((item, index) => (
          <CarouselItem className="" key={index}>
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default SpomeniciKulture;
