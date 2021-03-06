
import { StorageGateway } from "../StorageGateway.ts";
import { StorageGatewayClient } from "../StorageGatewayClient.ts";
import {
  DescribeTapeArchivesCommand,
  DescribeTapeArchivesCommandInput,
  DescribeTapeArchivesCommandOutput,
} from "../commands/DescribeTapeArchivesCommand.ts";
import { StorageGatewayPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: StorageGatewayClient,
  input: DescribeTapeArchivesCommandInput,
  ...args: any
): Promise<DescribeTapeArchivesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTapeArchivesCommand(input, ...args));
};
const makePagedRequest = async (
  client: StorageGateway,
  input: DescribeTapeArchivesCommandInput,
  ...args: any
): Promise<DescribeTapeArchivesCommandOutput> => {
  // @ts-ignore
  return await client.describeTapeArchives(input, ...args);
};
export async function* describeTapeArchivesPaginate(
  config: StorageGatewayPaginationConfiguration,
  input: DescribeTapeArchivesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTapeArchivesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeTapeArchivesCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof StorageGateway) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof StorageGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected StorageGateway | StorageGatewayClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
