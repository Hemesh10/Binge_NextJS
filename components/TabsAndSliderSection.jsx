import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import HomePageCard from "./HomePageCard";
import LoadingSkeleton from "./LoadingSkeleton";

const TabsAndSlider = ({ headerMain, triggerHeader1, triggerHeader2 ,dataPrimary, dataSecondary }) => {
  return (
    <Tabs defaultValue="primary">
      <div className="section-header flex gap-4 pl-4 sm:pl-12">
        <h1 className="text-xl sm:text-2xl font-medium">{headerMain}</h1>
        <TabsList>
          <TabsTrigger value="primary">{triggerHeader1}</TabsTrigger>
          <TabsTrigger value="secondary">{triggerHeader2}</TabsTrigger>
        </TabsList>
      </div>
      <div className="content-slider">
        <TabsContent value="primary">
          <div className="slider w-full flex py-4 px-4 sm:px-12 gap-6 overflow-x-auto scroll-smooth">
            {dataPrimary.length > 0 ? (
              dataPrimary.map((elem) => {
                return (
                  <div key={elem.id} className="card-wrapper">
                    <HomePageCard elem={elem} />
                  </div>
                );
              })
            ) : (
              <LoadingSkeleton cards={8} heigth={250} width={180} />
            )}
          </div>
        </TabsContent>
        <TabsContent value="secondary">
          <div className="slider w-full flex py-4 px-4 sm:px-12 gap-6 overflow-x-auto">
            {dataSecondary.length > 0 ? (
              dataSecondary.map((elem) => {
                return (
                  <div key={elem.id} className="card-wrapper">
                    <HomePageCard elem={elem} />
                  </div>
                );
              })
            ) : (
              <LoadingSkeleton cards={8} heigth={250} width={180} />
            )}
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default TabsAndSlider;
