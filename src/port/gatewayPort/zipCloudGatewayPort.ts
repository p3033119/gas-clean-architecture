import { Address } from "../../domain/address";
import { PostalCode } from "../../domain/postalCode";

export interface ZipCloudGatewayPort {
  searchPostalCode: (postalCode: PostalCode) => Address;
}
