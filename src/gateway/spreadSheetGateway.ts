import { Address } from "../domain/address";
import { PostalCode } from "../domain/postalCode";
import { SpreadSheetGatewayPort } from "../port/gatewayPort/spreadSheetGatewayPort";
import { SpreadSheetRepositoryPort } from "../port/repositoryPort/spreadSheetRepositoryPort";

export class SpreadSheetGateway implements SpreadSheetGatewayPort {
  constructor(
    private readonly spreadSheetRepositoryPort: SpreadSheetRepositoryPort
  ) {}

  getPostalCode = (): PostalCode => {
    const postalValue = this.spreadSheetRepositoryPort.getPostalCodeCellValue();
    return new PostalCode(postalValue);
  };

  setAddress = (address: Address): void => {
    this.spreadSheetRepositoryPort.setAddressCellValue(address.value);
  };
}
