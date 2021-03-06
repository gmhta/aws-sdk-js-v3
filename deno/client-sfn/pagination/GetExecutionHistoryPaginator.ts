
import { SFN } from "../SFN.ts";
import { SFNClient } from "../SFNClient.ts";
import {
  GetExecutionHistoryCommand,
  GetExecutionHistoryCommandInput,
  GetExecutionHistoryCommandOutput,
} from "../commands/GetExecutionHistoryCommand.ts";
import { SFNPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SFNClient,
  input: GetExecutionHistoryCommandInput,
  ...args: any
): Promise<GetExecutionHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetExecutionHistoryCommand(input, ...args));
};
const makePagedRequest = async (
  client: SFN,
  input: GetExecutionHistoryCommandInput,
  ...args: any
): Promise<GetExecutionHistoryCommandOutput> => {
  // @ts-ignore
  return await client.getExecutionHistory(input, ...args);
};
export async function* getExecutionHistoryPaginate(
  config: SFNPaginationConfiguration,
  input: GetExecutionHistoryCommandInput,
  ...additionalArguments: any
): Paginator<GetExecutionHistoryCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetExecutionHistoryCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SFN) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SFNClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SFN | SFNClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
