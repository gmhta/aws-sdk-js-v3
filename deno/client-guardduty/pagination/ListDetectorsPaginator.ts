
import { GuardDuty } from "../GuardDuty.ts";
import { GuardDutyClient } from "../GuardDutyClient.ts";
import {
  ListDetectorsCommand,
  ListDetectorsCommandInput,
  ListDetectorsCommandOutput,
} from "../commands/ListDetectorsCommand.ts";
import { GuardDutyPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: GuardDutyClient,
  input: ListDetectorsCommandInput,
  ...args: any
): Promise<ListDetectorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDetectorsCommand(input, ...args));
};
const makePagedRequest = async (
  client: GuardDuty,
  input: ListDetectorsCommandInput,
  ...args: any
): Promise<ListDetectorsCommandOutput> => {
  // @ts-ignore
  return await client.listDetectors(input, ...args);
};
export async function* listDetectorsPaginate(
  config: GuardDutyPaginationConfiguration,
  input: ListDetectorsCommandInput,
  ...additionalArguments: any
): Paginator<ListDetectorsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDetectorsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GuardDuty) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GuardDutyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GuardDuty | GuardDutyClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
