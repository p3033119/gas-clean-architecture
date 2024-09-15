class SpreadSheetRepository {
    constructor() {
        this.getSheet = (sheetName) => {
            const spreadsheetId = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
            // スプレッドシートを開く
            const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
            // シート名を指定してシートを取得
            const sheet = spreadsheet.getSheetByName(sheetName);
            if (sheet) {
                Logger.log(`シートが見つかりました: ${sheet.getName()}`);
                return sheet;
            }
            else {
                throw new Error("指定されたシートが見つかりません");
            }
        };
        this.SHEET_NAME = "住所取得シート";
        // 郵便番号の入ってるセルの値を取得
        this.getPostalCodeCellValue = () => {
            try {
                const sheet = this.getSheet(this.SHEET_NAME);
                // 今回はB3セルに郵便番号が入っているのでそれを取得
                const data = sheet.getRange("B3").getValue();
                return data;
            }
            catch (e) {
                throw new Error(`getSheetValues error: シートのデータ取得に失敗しました: ${e.stack}`);
            }
        };
        // 住所をセルにセット
        this.setAddressCellValue = (address) => {
            try {
                const sheet = this.getSheet(this.SHEET_NAME);
                // 今回はB4セルに住所をセット
                sheet.getRange("C3").setValue(address);
            }
            catch (e) {
                throw new Error(`setAddressCellValue error: シートのデータセットに失敗しました: ${e.stack}`);
            }
        };
    }
}
