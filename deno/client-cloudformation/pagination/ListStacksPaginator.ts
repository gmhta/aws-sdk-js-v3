
import { CloudFormation } from "../CloudFormation.ts";
import { CloudFormationClient } from "../CloudFormationClient.ts";
import { ListStacksCommand, ListStacksCommandInput, ListStacksCommandOutput } from "../commands/ListStacksCommand.ts";
import { CloudFormationPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListStacksCommandInput,
  ...args: any
): Promise<ListStacksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStacksCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudFormation,
  input: ListStacksCommandInput,
  ...args: any
): Promise<ListStacksCommandOutput> => {
  // @ts-ignore
  return await client.listStacks(input, ...args);
};
export async function* listStacksPaginate(
  config: CloudFormationPaginationConfiguration,
  input: ListStacksCommandInput,
  ...additionalArguments: any
): Paginator<ListStacksCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListStacksCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    if (config.client instanceof CloudFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFormation | CloudFormationClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
