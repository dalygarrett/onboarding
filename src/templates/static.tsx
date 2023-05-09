/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import { fetch } from "@yext/pages/util";
import "../index.css";
import {
  Template,
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TransformProps,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Favicon from "../public/yext-favicon.ico";
import React, { useState } from 'react';


/**
 * Not required for static templates, but will contain the stream configuration for
 * entity-powered templates.
 */
export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "static-example",
};

/**
 * Used to either alter or augment the props passed into the template at render time.
 * This function will be run during generation and pass in directly as props to the default
 * exported function.
 *
 * This can be used when data needs to be retrieved from an external (non-Knowledge Graph)
 * source. 
 *
 * If the page is truly static this function is not necessary.
 */
export const transformProps: TransformProps<TemplateRenderProps> = async (
  data
) => {
  return data
};

/**
 * Defines the path that the generated file will live at for production.
 */
export const getPath: GetPath<TemplateRenderProps> = () => {
  return `index.html`;
};


/**
 * This allows the user to define a function which will take in their template
 * data and produce a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: "Static Page Example",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Static page example meta description.",
        },
      }
    ],
  };
};



/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct result from `transformProps`.
 */
const OnboardingPage: React.FC = () => {
  const [formValues, setFormValues] = useState({
    businessName: "",
    addressLine1: "",
    city: "",
    zipCode: "",
    state: "",
    phoneNumber: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formValues.businessName,
        address: {
          city: formValues.city,
          countryCode: "US",
          line1: formValues.addressLine1,
          postalCode: formValues.zipCode,
          region: formValues.state,
        },
        categoryIds: ["796"],
        mainPhone: formValues.phoneNumber,
      }),
    };

    fetch(
      "https://api.yextapis.com/v2/accounts/me/entities?api_key=94b68d320cb13995c19302519476d81e&v=20230509&entityType=location",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // handle successful response
      })
      .catch((error) => {
        console.error(error); // handle error
      });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8">Onboarding</h1>
        <div className="space-y-4">
          <div>
            <label htmlFor="businessName" className="font-semibold">
              Business Name:
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formValues.businessName}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="addressLine1" className="font-semibold">
              Address Line 1:
            </label>
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              value={formValues.addressLine1}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="city" className="font-semibold">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formValues.city}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="zipCode" className="font-semibold">
              Zip Code:
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formValues.zipCode}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="state" className="font-semibold">
              State:
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formValues.state}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="font-semibold">
              Phone Number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white hover:bg-blue-600 rounded-md py-2 px-4 mt-6 w-full font-semibold">
          Submit
        </button>
      </form>
    </div>
    );
    };


    export default OnboardingPage;


          



