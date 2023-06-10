// Table name: currencies
//
//  id                 :string(10)       not null, primary key
//  name               :string(255)
//  description        :text(65535)
//  homepage           :string(255)
//  type               :string(30)       default("coin"), not null
//  default_network_id :bigint
//  status             :string(32)       default("enabled"), not null
//  position           :integer          not null
//  precision          :integer          default(8), not null
//  icon_url           :string(255)
//  price              :decimal(32, 16)  default(1.0), not null
//  created_at         :datetime         not null
//  updated_at         :datetime         not null

import { Network } from "../../networks/model/type";

export type Currency = {
    id: string; // currency code
    name: string; // currency name
    description: string; // currency description
    homepage: string; // currency homepage
    price: string; // currency current price
    type: string; // currency type coin | fiat
    precision: number; // currency precision
    position: number; // currency position in the list
    status: string; // currency status
    icon_url: string;
    networks: Network[] | null; // list of available blockchains for currency;
};
