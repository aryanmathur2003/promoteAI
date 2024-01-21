import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OPENAI_API_KEY from "../config/openai";

const FormStep1 = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [idealMarketing, setIdealMarketing] = useState("");
  const [productToMarket, setProductToMarket] = useState("");
  const [websiteLinks, setWebsiteLinks] = useState("");
  const [discountOffers, setDiscountOffers] = useState("");
  const [productImage, setProductImage] = useState(null);

  // Event handlers to update state variables
  const handleCompanyNameChange = (e) => setCompanyName(e.target.value);
  const handleCompanyDescriptionChange = (e) =>
    setCompanyDescription(e.target.value);
  const handleIdealMarketingChange = (e) => setIdealMarketing(e.target.value);
  const handleProductToMarketChange = (e) => setProductToMarket(e.target.value);
  const handleWebsiteLinksChange = (e) => setWebsiteLinks(e.target.value);
  const handleDiscountOffersChange = (e) => setDiscountOffers(e.target.value);
  const handleProductImageChange = (e) => setProductImage(e.target.files[0]);

  const handleNextClick = () => {
    console.log({
      companyName,
      companyDescription,
      idealMarketing,
      productToMarket,
      websiteLinks,
      discountOffers,
      productImage,
    });

    const getGBT = async () => {
      try {
        console.log("GET GBT!!");

        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-4",
            messages: [
              {
                role: "system",
                content:
                  "Give life advice for a struggling computer science student...",
              },
              { role: "user", content: "Give me help please!!!" },
            ],
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${OPENAI_API_KEY}`, // Replace with your actual OpenAI API key
            },
          }
        );

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getGBT();
  };

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
            onChange={handleCompanyNameChange}
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
            onChange={handleCompanyDescriptionChange}
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
            onChange={handleIdealMarketingChange}
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
            className="w-full border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            type="text"
            id="productToMarket"
            placeholder="Enter the product you want to market"
            onChange={handleProductToMarketChange}
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
            className="w-full border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            type="url"
            id="websiteLinks"
            placeholder="Enter links to your website"
            onChange={handleWebsiteLinksChange}
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
            className="w-full border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            type="text"
            id="discountOffers"
            placeholder="Enter discount offers"
            onChange={handleDiscountOffersChange}
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
            className="w-full border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 mb-4"
            type="file"
            id="productImage"
            accept="image/*"
            onChange={handleProductImageChange}
          />
        </div>
        <div>
          <div className="flex flex-row-reverse">
            <Link to="/step2">
              <a
                onClick={handleNextClick}
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormStep1;
