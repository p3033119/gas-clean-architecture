class ZipCloudClient {
    constructor() {
        this.getAddress = (postalCode) => {
            const url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCode}`;
            try {
                const response = UrlFetchApp.fetch(url);
                const jsonResponse = JSON.parse(response.getContentText());
                if (jsonResponse.status !== 200) {
                    throw new Error("取得中にエラーが発生しました。");
                }
                if (!jsonResponse.results) {
                    throw new Error("正しい郵便番号を入力してください。");
                }
                return jsonResponse;
            }
            catch (e) {
                if (e instanceof Error) {
                    throw new Error(`getAddress: 取得中にエラーが発生しました。${e.stack}`);
                }
                throw new Error(`getAddress: 取得中にエラーが発生しました。${e}`);
            }
        };
    }
}
