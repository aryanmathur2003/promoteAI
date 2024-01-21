import SelectListFB from "../components/SelectListFB";
import SelectListInsta from "../components/SelectListInsta";
import SelectListLI from "../components/SelectListLinkedIn";
import SelectListX from "../components/SelectListX";

const SeelctPage = ({ passimages }) => {
  const commonProps = {
    profilePicture: "https://picsum.photos/id/244/900/900",
    username: "Company Name",
    imageSrc: passimages,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };
  return (
    <div className="bg-gradient-to-bl from-blue-500 to-purple-500 h-full w-full px-24 py-20">
      <div className="bg-white h-full rounded-lg px-8 pt-4 shadow-md overflow-auto">
        <div className="ml-8 text-3xl my-4 bg-slate-200 w-fit mb-4">
          Select social media post you would like to post:
        </div>
        <a className="ml-8 font-semibold text-3xl mb-4">Instagram</a>
        <div className="p-8 pl-32">
          <SelectListInsta {...commonProps} />
        </div>
        <a className="ml-8 font-semibold text-3xl mb-4">Facebook</a>
        <div className="p-8 pl-32">
          <SelectListFB {...commonProps} />
        </div>
        <a className="ml-8 font-semibold text-3xl mb-4">X/Twitter</a>
        <div className="p-8 pl-32">
          <SelectListX {...commonProps} />
        </div>
        <a className="ml-8 font-semibold text-3xl mb-4">LinkedIn</a>
        <div className="p-8 pl-32">
          <SelectListLI {...commonProps} />
        </div>
        <div>
          <div className="flex flex-row-reverse px-16 mb-8">
            <a
              class="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
              href="/select"
            >
              <span class="text-2xl font-medium transition-colors group-hover:text-white">
                Post Media!
              </span>

              <span class="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500">
                <svg
                  class="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeelctPage;
