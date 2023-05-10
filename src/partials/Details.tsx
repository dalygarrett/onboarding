import * as React from "react";
import { Address } from "@yext/pages/components";
import { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';
import List from "../partials/List";

type Props = {
  address: any;
  phone?: string;
  services?: string[];
};

const Details = ({ address, phone, services} : Props) => {

  return (
    <>
      <div className=" rounded-lg p-2 px-4 py-5 sm:p-6">
        <div className="grid gap-y-3">
          <div className="h4 mb-2 text-center">Details</div>
          <Address className="text-md text-gray-400 text-left" address={address} lines={[['line1', 'line2'],[ 'city', ",", 'region']]} />
          {phone && <span><a href={`tel:${phone}`} className="text-md text-gray-400 text-left">{formatPhoneNumber(phone)}</a></span>}
          {/* {services && <List list={services} />} */}
        </div>
      </div>

    </>
  );
};

export default Details;