
import { Glue } from "../Glue.ts";
import { GlueClient } from "../GlueClient.ts";
import {
  GetUserDefinedFunctionsCommand,
  GetUserDefinedFunctionsCommandInput,
  GetUserDefinedFunctionsCommandOutput,
} from "../commands/GetUserDefinedFunctionsCommand.ts";
import { GluePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: GlueClient,
  input: GetUserDefinedFunctionsCommandInput,
  ...args: any
): Promise<GetUserDefinedFunctionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetUserDefinedFunctionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Glue,
  input: GetUserDefinedFunctionsCommandInput,
  ...args: any
): Promise<GetUserDefinedFunctionsCommandOutput> => {
  // @ts-ignore
  return await client.getUserDefinedFunctions(input, ...args);
};
export async function* getUserDefinedFunctionsPaginate(
  config: GluePaginationConfiguration,
  input: GetUserDefinedFunctionsCommandInput,
  ...additionalArguments: any
): Paginator<GetUserDefinedFunctionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetUserDefinedFunctionsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
