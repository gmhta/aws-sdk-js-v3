
import { IAM } from "../IAM.ts";
import { IAMClient } from "../IAMClient.ts";
import {
  ListUserPoliciesCommand,
  ListUserPoliciesCommandInput,
  ListUserPoliciesCommandOutput,
} from "../commands/ListUserPoliciesCommand.ts";
import { IAMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IAMClient,
  input: ListUserPoliciesCommandInput,
  ...args: any
): Promise<ListUserPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUserPoliciesCommand(input, ...args));
};
const makePagedRequest = async (
  client: IAM,
  input: ListUserPoliciesCommandInput,
  ...args: any
): Promise<ListUserPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listUserPolicies(input, ...args);
};
export async function* listUserPoliciesPaginate(
  config: IAMPaginationConfiguration,
  input: ListUserPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListUserPoliciesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListUserPoliciesCommandOutput;
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
