import { Address } from "../../domain/address";
import { PostalCode } from "../../domain/postalCode";

export interface SpreadSheetGatewayPort {
  getPostalCode: () => PostalCode;
  setAddress: (address: Address) => void;
}
