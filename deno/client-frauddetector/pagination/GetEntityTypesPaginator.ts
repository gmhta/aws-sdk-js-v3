
import { FraudDetector } from "../FraudDetector.ts";
import { FraudDetectorClient } from "../FraudDetectorClient.ts";
import {
  GetEntityTypesCommand,
  GetEntityTypesCommandInput,
  GetEntityTypesCommandOutput,
} from "../commands/GetEntityTypesCommand.ts";
import { FraudDetectorPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: GetEntityTypesCommandInput,
  ...args: any
): Promise<GetEntityTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetEntityTypesCommand(input, ...args));
};
const makePagedRequest = async (
  client: FraudDetector,
  input: GetEntityTypesCommandInput,
  ...args: any
): Promise<GetEntityTypesCommandOutput> => {
  // @ts-ignore
  return await client.getEntityTypes(input, ...args);
};
export async function* getEntityTypesPaginate(
  config: FraudDetectorPaginationConfiguration,
  input: GetEntityTypesCommandInput,
  ...additionalArguments: any
): Paginator<GetEntityTypesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetEntityTypesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FraudDetector) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FraudDetectorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FraudDetector | FraudDetectorClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
