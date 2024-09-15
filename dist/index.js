function onOpen() {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu("住所検索")
        .addItem("郵便番号から住所を取得", "getAddressByPostalCode")
        .addToUi();
}
function getAddressByPostalCode() {
    try {
        // ---- DI(inversify.jsでもワンチャンいけるかも) ----
        const spreadSheetRepositoryPort = new SpreadSheetRepository();
        const zipCloudClientPort = new ZipCloudClient();
        const spreadSheetGatewayPort = new SpreadSheetGateway(spreadSheetRepositoryPort);
        const zipCloudGatewayPort = new ZipCloudGateway(zipCloudClientPort);
        const postalUsecase = new PostalUsecase(spreadSheetGatewayPort, zipCloudGatewayPort);
        // ----------------------------------------------
        postalUsecase.searchAddressByPostalCode();
    }
    catch (e) {
        if (e instanceof Error) {
            SpreadsheetApp.getUi().alert(e.message);
        }
        else {
            SpreadsheetApp.getUi().alert("予期せぬエラーが発生しました。");
        }
    }
}
