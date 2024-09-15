import { SpreadSheetGatewayPort } from "../port/gatewayPort/spreadSheetGatewayPort";
import { ZipCloudGatewayPort } from "../port/gatewayPort/zipCloudGatewayPort";

export class PostalUsecase {
  constructor(
    private readonly spreadSheetGatewayPort: SpreadSheetGatewayPort,
    private readonly zipCloudGatewayPort: ZipCloudGatewayPort
  ) {}

  searchAddressByPostalCode = (): void => {
    // 1.郵便番号をセルから取得
    const postalCode = this.spreadSheetGatewayPort.getPostalCode();
    // 2.取得した郵便番号をAPIにリクエストして住所を取得
    const address = this.zipCloudGatewayPort.searchPostalCode(postalCode);
    // 3.取得した住所をセルにセット
    this.spreadSheetGatewayPort.setAddress(address);
  };
}
