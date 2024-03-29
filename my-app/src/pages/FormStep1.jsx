import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OPENAI_API_KEY from "../config/openai";

const FormStep1 = ({ setSearchResult }) => {
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

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const handleNextClick = async () => {
    console.log({
      companyName,
      companyDescription,
      idealMarketing,
      productToMarket,
      websiteLinks,
      discountOffers,
      productImage,
    });
    let parsedDescriptions = [];
    let parsedTweets = [];
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
                content: "You are a automated social media content generator",
              },
              {
                role: "user",
                content: `Make 4 descriptions of a designed image that will generate a designed post through dall-e using the following information:
              Company Name: ${companyName}, Company description: ${companyDescription}, ideal marketing: ${idealMarketing}, product they want to market: ${productToMarket}, important links to include: ${websiteLinks}, discount offers: ${discountOffers}. Put it in a numbered structure like Description:`,
              },
            ],
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${OPENAI_API_KEY}`, // Replace with your actual OpenAI API key
            },
          }
        );

        // console.log(response.data);
        // console.log(response.data.choices[0].message.content)

        const descriptions = response.data.choices[0].message.content;

        parsedDescriptions = descriptions.split("Description");
        console.log(parsedDescriptions);
      } catch (error) {
        console.error(error);
      }
    };

    const getTweets = async () => {
      try {
        console.log("GET TWEETS!!");

        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-4",
            messages: [
              {
                role: "system",
                content: "You are a automated social media content generator",
              },
              {
                role: "user",
                content: `Make 4 tweets for twitter with 1 sentence that can help the company market to its customers
              Company Name: ${companyName}, Company description: ${companyDescription}, ideal marketing: ${idealMarketing}, product they want to market: ${productToMarket}, important links to include: ${websiteLinks}, discount offers: ${discountOffers}. Put it in a numbered structure like Tweet:`,
              },
            ],
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${OPENAI_API_KEY}`, // Replace with your actual OpenAI API key
            },
          }
        );

        // console.log(response.data);
        // console.log(response.data.choices[0].message.content)

        const tweets = response.data.choices[0].message.content;

        let allTweets = tweets.split("Description");
        parsedTweets = allTweets
        console.log("Twitter Posts" + allTweets);
      } catch (error) {
        console.error(error);
      }
    };
    const getImages = async () => {
      try {
        console.log("GET IMAGES!!!");
        await getGBT();
        await getTweets();
        const images = [];
        console.log("In Images Parsed BS: ");
        console.log("all" + parsedDescriptions);
        console.log("first" + parsedDescriptions[1]);
        for (let i = 1; i < 5; i++) {
          console.log("Image Request" + parsedDescriptions[i]);
          const response = await axios.post(
            "https://api.openai.com/v1/images/generations",
            {
              model: "dall-e-3",
              prompt: parsedDescriptions[i],
              n: 1,
              size: "1024x1024",
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${OPENAI_API_KEY}`, // Replace with your actual OpenAI API key
              },
            }
          );

          console.log(response.data);

          const image = response.data.data[0].url;
          console.log(image);
          images.push(image);
        }
        console.log(images);
        setSearchResult(images);
        const url = `http://127.0.0.1:8000/createImage/`;
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            string1: images[0],
            string2: images[1],
            string3: images[2],
            string4: images[3],
            tweet1: parsedTweets[0],
            tweet2: parsedTweets[1],
            tweet3: parsedTweets[2],
            tweet4: parsedTweets[3],
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("GET request response:", data);
            setSearchResult(data);
          })
          .catch((error) => {
            console.error("Error making GET request:", error);
          });

        // Now 'images' array contains the generated images for each description
        // You can use these images as needed in your application
      } catch (error) {
        console.error(error);
      }
    };

    getImages();
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
