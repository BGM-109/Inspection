import Banner from "../components/banner";
import BottomNav from "../components/bottomNav";
import Fab from "../components/fab";
import SectionHeader from "../components/sectionHeader";

export default function Home() {
  return (
    <div>
      <Banner />
      <div>
        <SectionHeader title="Popular Brands" />
      </div>
      <div>
        <SectionHeader title="Recent Check" />
        <button>VIEW MORE</button>
      </div>
      <Fab />
      <BottomNav />
    </div>
  );
}
