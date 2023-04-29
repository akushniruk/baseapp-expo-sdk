// Table name: blockchains (networks from endpoint)
//
//  id                   :bigint           not null, primary key
//  key                  :string(255)      not null
//  name                 :string(255)
//  client               :string(255)      not null
//  server_encrypted     :string(1024)
//  height               :bigint           not null
//  collection_gas_speed :string(255)
//  withdrawal_gas_speed :string(255)
//  description          :text(65535)
//  warning              :text(65535)
//  protocol             :string(255)      not null
//  explorer_address     :string(255)
//  explorer_transaction :string(255)
//  min_confirmations    :integer          default(6), not null
//  min_deposit_amount   :decimal(32, 16)  default(0.0), not null
//  withdraw_fee         :decimal(32, 16)  default(0.0), not null
//  min_withdraw_amount  :decimal(32, 16)  default(0.0), not null
//  status               :string(255)      not null
//  created_at           :datetime         not null
//  updated_at           :datetime         not null

export type Networks = {
    id: number; // blockchain id;
    status: string; // blockchain status: enabled | disabled
    blockchain_key: string; // blockchain key
    currency_id: string; // currency code (relation to currency)
    deposit_enabled: boolean;
    withdrawal_enabled: boolean;
    deposit_fee: string; // deposit fee
    min_deposit_amount: string; // min deposit amount
    withdraw_fee: string; // withdrawal fee
    min_withdraw_amount: string; // min withdrawal amount
    base_factor: number; // base factor
    explorer_transaction: string; // explorer transaction link
    explorer_address: string; // explorer address link
    description: string; // description
    warning: string; // warning message
    protocol: string; // protocol
    min_confirmations: number; // minimum confirmations
};
