
import { SSM } from "../SSM.ts";
import { SSMClient } from "../SSMClient.ts";
import {
  ListCommandsCommand,
  ListCommandsCommandInput,
  ListCommandsCommandOutput,
} from "../commands/ListCommandsCommand.ts";
import { SSMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SSMClient,
  input: ListCommandsCommandInput,
  ...args: any
): Promise<ListCommandsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCommandsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SSM,
  input: ListCommandsCommandInput,
  ...args: any
): Promise<ListCommandsCommandOutput> => {
  // @ts-ignore
  return await client.listCommands(input, ...args);
};
export async function* listCommandsPaginate(
  config: SSMPaginationConfiguration,
  input: ListCommandsCommandInput,
  ...additionalArguments: any
): Paginator<ListCommandsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListCommandsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
