import { ZipCloudSearchResponse } from "../../client/zipCloudClient";

export interface ZipCloudClientPort {
  getAddress: (postalCode: string) => ZipCloudSearchResponse;
}
