class PostalUsecase {
    constructor(spreadSheetGatewayPort, zipCloudGatewayPort) {
        this.spreadSheetGatewayPort = spreadSheetGatewayPort;
        this.zipCloudGatewayPort = zipCloudGatewayPort;
        this.searchAddressByPostalCode = () => {
            // 1.郵便番号をセルから取得
            const postalCode = this.spreadSheetGatewayPort.getPostalCode();
            // 2.取得した郵便番号をAPIにリクエストして住所を取得
            const address = this.zipCloudGatewayPort.searchPostalCode(postalCode);
            // 3.取得した住所をセルにセット
            this.spreadSheetGatewayPort.setAddress(address);
        };
    }
}
