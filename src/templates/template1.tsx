/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding stream document stream document (based on the filter).
 */

import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import * as React from "react";
import "../index.css";
// @ts-ignore
import Favicon from "../public/yext-favicon.ico";
// @ts-ignore
import Header from '../partials/Header';
import { BrowserRouter, Link } from 'react-router-dom';
// @ts-ignore
import PageIllustration from '../partials/Pageillustration';
// @ts-ignore
import HeroHome from '../partials/HeroHome';
// @ts-ignore
import FeaturesZigZag from '../partials/FeaturesZigzag';
// @ts-ignore
import FeaturesBlocks from '../partials/FeaturesBlocks';
// @ts-ignore
import Banner from '../partials/Banner';
// @ts-ignore
import Testimonials from '../partials/Testimonials';
// @ts-ignore
import Newsletter from '../partials/Newsletter';
// @ts-ignore
import Footer from '../partials/Footer';
import Hours from "../partials/Hours";
import Details from "../partials/Details";
import StaticMap from "../partials/StaticMap";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

  



/**
 * Required when Knowledge Graph Stream is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "location-stream",
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["location"],
      savedFilterIds: ["1317480177"],
    },
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "hours",
      "slug",
      "geocodedCoordinate",
      "logo",
      "description",
      "c_color",
      // "c_primaryCTA",
      // "c_secondaryCTA",
      // "c_generatedDescription",
      // "c_bannerPhoto",
      "c_service1",
      // "c_service1Photo",
      "c_service2",
      // "c_service2Photo",
      "c_service3",
      // "c_service3Photo",
      "c_offeringsHeader",
      "c_offeringsSubtitle",
      "c_service1Description",
      "c_service2Description",
      "c_service3Description",
      // "c_benefit1",
      // "c_benefit1Description",
      // "c_benefit2",
      // "c_benefit2Description",
      // "c_benefit3",
      // "c_benefit3Description",
      // "c_benefit4",
      // "c_benefit4Description",
      // "c_benefit5",
      // "c_benefit5Description",
      // "c_benefit6",
      // "c_benefit6Description",
      // "c_benefitsHeader",
      // "c_benefitsSubtitle",
      // "c_chatURL",
    ],
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${
        document.address.line1
      }-${document.id.toString()}`;
  return "/search";
};


/**
 * Defines a list of paths which will redirect to the path created by getPath.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.locale}/${document.id.toString()}`];
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
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};



/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 */
const Location: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    _site,
    name,
    address,
    logo,
    openTime,
    hours,
    mainPhone,
    geocodedCoordinate,
    c_primaryCTA,
    c_secondaryCTA,
    c_generatedDescription,
    c_bannerPhoto,
    c_service1,
    c_service1Photo,
    c_service2,
    c_service2Photo,
    c_service3,
    c_service3Photo,
    c_offeringsHeader,
    c_offeringsSubtitle,
    c_service1Description,
    c_service2Description,
    c_service3Description,
    c_benefit1,
    c_benefit1Description,
    c_benefit2,
    c_benefit2Description,
    c_benefit3,
    c_benefit3Description,
    c_benefit4,
    c_benefit4Description,
    c_benefit5,
    c_benefit5Description,
    c_benefit6,
    c_benefit6Description,
    c_benefitsHeader,
    c_benefitsSubtitle,
    c_chatURL,
    description,
    c_color,
  } = document;
  return (
    <>



      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration color={c_color}/>
        </div>



        {/*  Page sections */}
        <HeroHome name={name} color={c_color} description={description} cta1={"Contact Now"} cta2={"Learn More"} image={"https://cdn.fs.brandfolder.com/cache=expiry:604800/71ay5yvBS2L4XuZLLEyP"}/>
       
       
        <FeaturesZigZag headline={c_offeringsHeader} subtitle={c_offeringsSubtitle} color={c_color}
        service1={c_service1} service1desc={c_service1Description} service1photo={"https://mma.prnewswire.com/media/177279/yext_logo.jpg?p=facebook"}
        service2={c_service2} service2desc={c_service2Description} service2photo={"https://mma.prnewswire.com/media/177279/yext_logo.jpg?p=facebook"}
        service3={c_service3} service3desc={c_service3Description} service3photo={"https://mma.prnewswire.com/media/177279/yext_logo.jpg?p=facebook"}/>
        {/* <FeaturesBlocks headline={"c_benefitsHeader"} subtitle={"c_benefitsSubtitle"}
        benefit1={"c_benefit1"} benefit1desc={"c_benefit1Description"}
        benefit2={"c_benefit2"} benefit2desc={"c_benefit2Description"}
        benefit3={"c_benefit3"} benefit3desc={"c_benefit3Description"}
        benefit4={"c_benefit4"} benefit4desc={"c_benefit4Description"}
        benefit5={"c_benefit5"} benefit5desc={"c_benefit5Description"}
        benefit6={"c_benefit6"} benefit6desc={"c_benefit6Description"}/> */}
        
        <Testimonials color={c_color}/>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
        <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks style={{justifyContent: 'center'}}>
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          {hours && <Hours color={c_color} title={"Hours"} hours={hours} />}
          </div>
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
          <Details address={address} phone={mainPhone}/>
          </div>
          <div className="relative flex flex-col justify-center	border-4 border-grey-400 items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]" style={{textAlign: 'center'}}>
          {geocodedCoordinate && <StaticMap latitude={geocodedCoordinate.latitude} longitude={geocodedCoordinate.longitude} />}
          </div>
        </div>
        </div>
        </div>

        
        <Newsletter color={c_color}/>
        
      </main>
      

    <Footer />

    </>
  );
};


export default Location;