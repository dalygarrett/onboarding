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
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

const Onboarding = () => {
  const [businessName, setBusinessName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [service1, setService1] = useState('');
  const [service2, setService2] = useState('');
  const [service3, setService3] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name: businessName,
      address: {
        city: city,
        countryCode: 'US',
        line1: addressLine1,
        postalCode: zipCode,
        region: state,
      },
      categoryIds: ['796'],
      mainPhone: phoneNumber,
      c_color: primaryColor,
      c_service1: service1,
      c_service2: service2,
      c_service3: service3,
    };
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yextapis.com/v2/accounts/me/entities?api_key=94b68d320cb13995c19302519476d81e&v=20230509&entityType=location&url=${encodeURIComponent(
          'https://api.yextapis.com/v2/accounts/me/entities?api_key=94b68d320cb13995c19302519476d81e&v=20230509&entityType=location'
        )}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

    setStatus(response.ok ? 'Request successful' : 'Request failed');

    if (response.ok) {
      toast.success('Submitted!', { position: toast.POSITION.TOP_CENTER });
    } else {
      toast.error('Failed!', { position: toast.POSITION.TOP_CENTER });
    }
  } catch (error) {
    console.error(error);
    setStatus('Error');
    toast.error('Error!', { position: toast.POSITION.TOP_CENTER });
  }
    
  };

  const handlePreview = () => {
    const data = {
      name: businessName,
      address: {
        city: city,
        countryCode: 'US',
        line1: addressLine1,
        postalCode: zipCode,
        region: state
      },
      mainPhone: phoneNumber,
      c_color: primaryColor,
      c_service1: service1,
      c_service2: service2,
      c_service3: service3,
    };
  
    const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl =
      'https://api.yextapis.com/v2/accounts/me/entities/1?api_key=94b68d320cb13995c19302519476d81e&v=20230510';
  
    fetch(corsProxyUrl + apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      console.log('Preview request successful:', result);
      // Add any further logic or state updates for preview response
      toast.success('Preview request successful!', { position: toast.POSITION.TOP_CENTER });
    })
    .catch(error => {
      console.error('Preview request failed:', error);
      // Handle errors for the preview request
      toast.error('Preview request failed!', { position: toast.POSITION.TOP_CENTER });
    });
  };
  

  return (
    <div className="container mx-auto max-w-full px-16">
      <h1 className="text-4xl font-bold text-center my-8">Website Onboarding</h1>
      <div className="flex flex-col md:flex-row">
        <iframe
          src="https://xknzbzaelf-54758-d.preview.pagescdn.com/templateone"
          className="w-full md:w-2/3 h-128 border p-4"
          title="Contractor Website"
        ></iframe>
        <form onSubmit={handleSubmit} className="w-1/3 p-4">
        <div className="flex flex-wrap mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Business Name:  
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter business name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            
          />
        </div>
        <div className="flex flex-wrap mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Address Line 1:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter address line 1"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            
          />
        </div>
        <div className="flex flex-wrap mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            City:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            
          />
        </div>
        <div className="flex flex-wrap mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Zip Code:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter zip code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            
            />
            </div>
            <div className="flex flex-wrap mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            State:
            </label>
            <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            
            />
            </div>
            <div className="flex flex-wrap mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number:
            </label>
            <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            
            />
            </div>
          <div className="flex flex-wrap mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Primary Color:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            
          >
            <option value="">Select a color</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>

        <div className="flex flex-wrap mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Service 1:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter service 1"
            value={service1}
            onChange={(e) => setService1(e.target.value)}
            
          />
        </div>

        <div className="flex flex-wrap mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Service 2:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter service 2"
            value={service2}
            onChange={(e) => setService2(e.target.value)}
            
          />
        </div>

        <div className="flex flex-wrap mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Service 3:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter service 3"
            value={service3}
            onChange={(e) => setService3(e.target.value)}
            
          />
        </div>

        <div className="flex justify-center space-x-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
        <button
          type="button"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handlePreview}
        >
          Preview
        </button>
        </div>

      </form>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} />

      </div>

    </div>
  );
};

export default Onboarding;
            