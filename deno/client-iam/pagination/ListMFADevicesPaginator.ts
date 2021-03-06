
import { IAM } from "../IAM.ts";
import { IAMClient } from "../IAMClient.ts";
import {
  ListMFADevicesCommand,
  ListMFADevicesCommandInput,
  ListMFADevicesCommandOutput,
} from "../commands/ListMFADevicesCommand.ts";
import { IAMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IAMClient,
  input: ListMFADevicesCommandInput,
  ...args: any
): Promise<ListMFADevicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMFADevicesCommand(input, ...args));
};
const makePagedRequest = async (
  client: IAM,
  input: ListMFADevicesCommandInput,
  ...args: any
): Promise<ListMFADevicesCommandOutput> => {
  // @ts-ignore
  return await client.listMFADevices(input, ...args);
};
export async function* listMFADevicesPaginate(
  config: IAMPaginationConfiguration,
  input: ListMFADevicesCommandInput,
  ...additionalArguments: any
): Paginator<ListMFADevicesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListMFADevicesCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
