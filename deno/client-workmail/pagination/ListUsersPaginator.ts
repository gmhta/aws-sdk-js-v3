
import { WorkMail } from "../WorkMail.ts";
import { WorkMailClient } from "../WorkMailClient.ts";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand.ts";
import { WorkMailPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: WorkMailClient,
  input: ListUsersCommandInput,
  ...args: any
): Promise<ListUsersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUsersCommand(input, ...args));
};
const makePagedRequest = async (
  client: WorkMail,
  input: ListUsersCommandInput,
  ...args: any
): Promise<ListUsersCommandOutput> => {
  // @ts-ignore
  return await client.listUsers(input, ...args);
};
export async function* listUsersPaginate(
  config: WorkMailPaginationConfiguration,
  input: ListUsersCommandInput,
  ...additionalArguments: any
): Paginator<ListUsersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListUsersCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WorkMail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkMailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkMail | WorkMailClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
