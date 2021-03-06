
import { IoTThingsGraph } from "../IoTThingsGraph.ts";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient.ts";
import {
  SearchThingsCommand,
  SearchThingsCommandInput,
  SearchThingsCommandOutput,
} from "../commands/SearchThingsCommand.ts";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTThingsGraphClient,
  input: SearchThingsCommandInput,
  ...args: any
): Promise<SearchThingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchThingsCommand(input, ...args));
};
const makePagedRequest = async (
  client: IoTThingsGraph,
  input: SearchThingsCommandInput,
  ...args: any
): Promise<SearchThingsCommandOutput> => {
  // @ts-ignore
  return await client.searchThings(input, ...args);
};
export async function* searchThingsPaginate(
  config: IoTThingsGraphPaginationConfiguration,
  input: SearchThingsCommandInput,
  ...additionalArguments: any
): Paginator<SearchThingsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: SearchThingsCommandOutput;
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
