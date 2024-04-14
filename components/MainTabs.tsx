import Narod from "./Narod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Zemlja from "./Zemlja";
import Uvod from "./Tekst/Uvod";
import Orijent from "./Tekst/Orijent";
import SpomeniciKulture from "./Tekst/SpomeniciKulture";

function MainTabs() {
  const mainTabs = [
    { name: "Увод", value: "uvod" },
    { name: "Израњање из Оријента", value: "orijent" },
    { name: "Земљa", value: "zemlja" },
    { name: "Народ", value: "narod" },
    { name: "Споменици културе", value: "spomenici" },
  ];

  return (
    <div className="flex place-content-center flex-column font-redHatDisplay text-brownlight1 mt-8">
      <Tabs defaultValue="uvod">
        <TabsList className="flex w-[80rem] justify-between">
          {mainTabs.map((tab, index) => (
            <TabsTrigger key={index} value={tab.value} className="uppercase">
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="uvod">
          <Uvod />
        </TabsContent>
        <TabsContent value="orijent">
          <Orijent />
        </TabsContent>
        <TabsContent value="zemlja">
          <Zemlja />
        </TabsContent>
        <TabsContent value="narod">
          <Narod />
        </TabsContent>
        <TabsContent value="spomenici">
          <SpomeniciKulture />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MainTabs;
