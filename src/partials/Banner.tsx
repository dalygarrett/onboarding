import { useState } from "react";

type BannerProps = {
  name: string;
  description: any;
  cta1: any;
  cta2: any;
  image: any;
  url: string;
};

const Banner = ({ url }: BannerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openChatWindow = () => {
    setIsOpen(true);
  };

  const closeChatWindow = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60">
        <div className="bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
          <div className="text-slate-500 inline-flex">
            <button
              className="font-medium hover:underline text-slate-50"
              onClick={openChatWindow}
            >
              Chat<span className="hidden sm:inline"> With Us</span>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-12 w-96 h-4/6 z-50">
          <div className="bg-white h-full w-full rounded-lg shadow-xl flex flex-col">
          <button
              className="text-gray-600 self-end mr-2 mb-2"
              onClick={closeChatWindow}
            >
              Close
            </button>
            <iframe
              className="flex-grow w-full"
              src={url}
              title="Chat Iframe"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
