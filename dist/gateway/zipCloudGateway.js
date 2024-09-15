class ZipCloudGateway {
    constructor(zipCloudClientPort) {
        this.zipCloudClientPort = zipCloudClientPort;
        this.searchPostalCode = (postalCode) => {
            const response = this.zipCloudClientPort.getAddress(postalCode.value);
            /*
              ZipCloud公式サイトより
              results[0].address1: 都道府県名
              results[0].address2: 市区町村名
              results[0].address3: 番地以降
              なので文字列を結合していれる
            */
            return new Address(`${response.results[0].address1}${response.results[0].address2}${response.results[0].address3}`);
        };
    }
}
