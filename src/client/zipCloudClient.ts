import { ZipCloudClientPort } from "../port/clientPort/zipCloudClientPort";

export class ZipCloudClient implements ZipCloudClientPort {
  getAddress = (postalCode: string): ZipCloudSearchResponse => {
    const url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCode}`;

    try {
      const response = UrlFetchApp.fetch(url);
      const jsonResponse: ZipCloudSearchResponse = JSON.parse(
        response.getContentText()
      );

      if (jsonResponse.status !== 200) {
        throw new Error("取得中にエラーが発生しました。");
      }

      if (!jsonResponse.results) {
        throw new Error("正しい郵便番号を入力してください。");
      }

      return jsonResponse;
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`getAddress: 取得中にエラーが発生しました。${e.stack}`);
      }
      throw new Error(`getAddress: 取得中にエラーが発生しました。${e}`);
    }
  };
}

export type ZipCloudSearchResponse = {
  message: string | null;
  results: [
    {
      address1: string;
      address2: string;
      address3: string;
      kana1: string;
      kana2: string;
      kana3: string;
      prefcode: string;
      zipcode: string;
    }
  ];
  status: number;
};
