import HeroCampaign from "./campaign/HeroCampaign";
import WhyIRun from "./campaign/WhyIRun";
import Manifesto from "./campaign/Manifesto";
import MeetThePeople from "./campaign/MeetThePeople";
import CampaignInAction from "./campaign/CampaignInAction";
import FAQ from "./campaign/FAQ";


export default function Campaign() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <HeroCampaign />
      <WhyIRun /> 
      <Manifesto />  
      <MeetThePeople />
      <CampaignInAction />
      <FAQ />
    </main>
  );
}