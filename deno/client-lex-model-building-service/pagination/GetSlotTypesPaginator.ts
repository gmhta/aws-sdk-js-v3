
import { LexModelBuildingService } from "../LexModelBuildingService.ts";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient.ts";
import {
  GetSlotTypesCommand,
  GetSlotTypesCommandInput,
  GetSlotTypesCommandOutput,
} from "../commands/GetSlotTypesCommand.ts";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: LexModelBuildingServiceClient,
  input: GetSlotTypesCommandInput,
  ...args: any
): Promise<GetSlotTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetSlotTypesCommand(input, ...args));
};
const makePagedRequest = async (
  client: LexModelBuildingService,
  input: GetSlotTypesCommandInput,
  ...args: any
): Promise<GetSlotTypesCommandOutput> => {
  // @ts-ignore
  return await client.getSlotTypes(input, ...args);
};
export async function* getSlotTypesPaginate(
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetSlotTypesCommandInput,
  ...additionalArguments: any
): Paginator<GetSlotTypesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetSlotTypesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof LexModelBuildingService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LexModelBuildingServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LexModelBuildingService | LexModelBuildingServiceClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
