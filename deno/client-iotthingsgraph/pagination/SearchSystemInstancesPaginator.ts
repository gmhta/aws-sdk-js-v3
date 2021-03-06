
import { IoTThingsGraph } from "../IoTThingsGraph.ts";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient.ts";
import {
  SearchSystemInstancesCommand,
  SearchSystemInstancesCommandInput,
  SearchSystemInstancesCommandOutput,
} from "../commands/SearchSystemInstancesCommand.ts";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTThingsGraphClient,
  input: SearchSystemInstancesCommandInput,
  ...args: any
): Promise<SearchSystemInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchSystemInstancesCommand(input, ...args));
};
const makePagedRequest = async (
  client: IoTThingsGraph,
  input: SearchSystemInstancesCommandInput,
  ...args: any
): Promise<SearchSystemInstancesCommandOutput> => {
  // @ts-ignore
  return await client.searchSystemInstances(input, ...args);
};
export async function* searchSystemInstancesPaginate(
  config: IoTThingsGraphPaginationConfiguration,
  input: SearchSystemInstancesCommandInput,
  ...additionalArguments: any
): Paginator<SearchSystemInstancesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: SearchSystemInstancesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTThingsGraph) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTThingsGraphClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTThingsGraph | IoTThingsGraphClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
