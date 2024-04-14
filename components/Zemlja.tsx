import ArhitekturaPrestolnice from "./Tekst/zemlja/ArhitekuraPrestolnice";
import DrzavnoUredenje from "./Tekst/zemlja/DrzavnoUredenje";
import PrivredniRazvoj from "./Tekst/zemlja/PrivredniRazvoj";
import Uvod from "./Tekst/zemlja/Uvod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const zemlja = [
  { name: "Увод", value: "uvod" },
  { name: "Државно уређење", value: "drzavno" },
  { name: "Привредни развој", value: "privredni" },
  { name: "Архитектура престонице", value: "arhitektura" },
];

function Zemlja() {
  return (
    <div>
      <Tabs defaultValue="uvod" className="relative">
        <TabsList className="absolute top-[-4rem]">
          {zemlja.map((tab, index) => (
            <TabsTrigger
              key={index}
              value={tab.value}
              className="font-thin text-brownlight2 text-[1.5rem] tracking-wide
              border-b-[1px] py-[0.3rem]"
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="uvod">
          <Uvod />
        </TabsContent>
        <TabsContent value="drzavno">
          <DrzavnoUredenje />
        </TabsContent>
        <TabsContent value="privredni">
          <PrivredniRazvoj />
        </TabsContent>
        <TabsContent value="arhitektura">
          <ArhitekturaPrestolnice />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Zemlja;
