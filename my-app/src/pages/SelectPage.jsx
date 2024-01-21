import SelectListFB from "../components/SelectListFB";
import SelectListInsta from "../components/SelectListInsta";
import SelectListLI from "../components/SelectListLinkedIn";
import SelectListX from "../components/SelectListX";

const SeelctPage = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-500 to-purple-500 h-full w-full px-24 py-20">
      <div className="bg-white h-full rounded-lg px-8 pt-4 shadow-md overflow-auto">
        <div className="ml-8 text-3xl my-4 bg-slate-200 w-fit mb-4">
          Select social media post you would like to post:
        </div>
        <a className="ml-8 font-semibold text-3xl mb-4">Instagram</a>
        <div className="p-8 pl-32">
          <SelectListInsta />
        </div>
        <a className="ml-8 font-semibold text-3xl mb-4">Facebook</a>
        <div className="p-8 pl-32">
          <SelectListFB />
        </div>
        <a className="ml-8 font-semibold text-3xl mb-4">X/Twitter</a>
        <div className="p-8 pl-32">
          <SelectListX />
        </div>
        <a className="ml-8 font-semibold text-3xl mb-4">LinkedIn</a>
        <div className="p-8 pl-32">
          <SelectListLI />
        </div>
      </div>
    </div>
  );
};

export default SeelctPage;
