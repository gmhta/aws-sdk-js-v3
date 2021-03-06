
import { RoboMaker } from "../RoboMaker.ts";
import { RoboMakerClient } from "../RoboMakerClient.ts";
import { ListRobotsCommand, ListRobotsCommandInput, ListRobotsCommandOutput } from "../commands/ListRobotsCommand.ts";
import { RoboMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListRobotsCommandInput,
  ...args: any
): Promise<ListRobotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRobotsCommand(input, ...args));
};
const makePagedRequest = async (
  client: RoboMaker,
  input: ListRobotsCommandInput,
  ...args: any
): Promise<ListRobotsCommandOutput> => {
  // @ts-ignore
  return await client.listRobots(input, ...args);
};
export async function* listRobotsPaginate(
  config: RoboMakerPaginationConfiguration,
  input: ListRobotsCommandInput,
  ...additionalArguments: any
): Paginator<ListRobotsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListRobotsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RoboMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RoboMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RoboMaker | RoboMakerClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
