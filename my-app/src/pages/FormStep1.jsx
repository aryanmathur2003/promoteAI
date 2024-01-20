import React from "react";

const FormStep1 = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-500 to-purple-500 h-full w-full py-32">
      <div className="bg-white w-5/12 m-auto h-auto rounded-3xl shadow-md p-12">
        <div className="text-color text-2xl mb-4 font-semibold">
          Marketing Info Form
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <input
            className="w-full  border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            type="text"
            id="companyName"
            placeholder="Enter your company name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="companyDescription"
          >
            Company Description
          </label>
          <textarea
            className="w-full  border border-gray-400 rounded-md py-2 px-4 resize-none focus:outline-none focus:border-blue-500"
            id="companyDescription"
            placeholder="Enter your company description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="idealMarketing"
          >
            Ideal Marketing
          </label>
          <input
            className="w-full  border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            type="text"
            id="idealMarketing"
            placeholder="Enter ideal marketing strategy"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="productToMarket"
          >
            Product to Market
          </label>
          <input
            className="w-full  border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            type="text"
            id="productToMarket"
            placeholder="Enter the product you want to market"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="websiteLinks"
          >
            Links to Website
          </label>
          <input
            className="w-full  border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            type="url"
            id="websiteLinks"
            placeholder="Enter links to your website"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="discountOffers"
          >
            Discount Offers
          </label>
          <input
            className="w-full  border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            type="text"
            id="discountOffers"
            placeholder="Enter discount offers"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="productImage"
          >
            Picture of the Product
          </label>
          <input
            className="w-full  border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            type="file"
            id="productImage"
            accept="image/*"
          />
        </div>
        <div>
          <div className="flex flex-row-reverse">
            <a
              class="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
              href="/download"
            >
              <span class="font-medium transition-colors group-hover:text-white">
                {" "}
                Next{" "}
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

export default FormStep1;
