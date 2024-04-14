import GradanskaKutura from "./Tekst/narod/GradanskaKultura";
import TradicionalnaKultura from "./Tekst/narod/TradicionalnaKultura";
import Uvod from "./Tekst/narod/Uvod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const narod = [
  { name: "Увод", value: "uvod" },
  { name: "Традиционална култура", value: "tradicionalna" },
  { name: "Рађање грађанске културе", value: "gradanska" },
];

function Narod() {
  return (
    <div>
      <Tabs defaultValue="uvod" className="relative">
        <TabsList className="absolute top-[-4rem]">
          {narod.map((tab, index) => (
            <TabsTrigger
              key={index}
              value={tab.value}
              className="font-thin text-brownlight2 text-[0.9rem]
            border-b-[1px] py-[0.3rem]"
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="uvod">
          <Uvod />
        </TabsContent>
        <TabsContent value="tradicionalna">
          <TradicionalnaKultura />
        </TabsContent>
        <TabsContent value="gradanska">
          <GradanskaKutura />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Narod;
