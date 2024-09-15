class SpreadSheetGateway {
    constructor(spreadSheetRepositoryPort) {
        this.spreadSheetRepositoryPort = spreadSheetRepositoryPort;
        this.getPostalCode = () => {
            const postalValue = this.spreadSheetRepositoryPort.getPostalCodeCellValue();
            return new PostalCode(postalValue);
        };
        this.setAddress = (address) => {
            this.spreadSheetRepositoryPort.setAddressCellValue(address.value);
        };
    }
}
