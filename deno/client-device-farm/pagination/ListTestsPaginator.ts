
import { DeviceFarm } from "../DeviceFarm.ts";
import { DeviceFarmClient } from "../DeviceFarmClient.ts";
import { ListTestsCommand, ListTestsCommandInput, ListTestsCommandOutput } from "../commands/ListTestsCommand.ts";
import { DeviceFarmPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListTestsCommandInput,
  ...args: any
): Promise<ListTestsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTestsCommand(input, ...args));
};
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListTestsCommandInput,
  ...args: any
): Promise<ListTestsCommandOutput> => {
  // @ts-ignore
  return await client.listTests(input, ...args);
};
export async function* listTestsPaginate(
  config: DeviceFarmPaginationConfiguration,
  input: ListTestsCommandInput,
  ...additionalArguments: any
): Paginator<ListTestsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTestsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    if (config.client instanceof DeviceFarm) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DeviceFarmClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DeviceFarm | DeviceFarmClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
