
import { RoboMaker } from "../RoboMaker.ts";
import { RoboMakerClient } from "../RoboMakerClient.ts";
import {
  ListSimulationJobsCommand,
  ListSimulationJobsCommandInput,
  ListSimulationJobsCommandOutput,
} from "../commands/ListSimulationJobsCommand.ts";
import { RoboMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListSimulationJobsCommandInput,
  ...args: any
): Promise<ListSimulationJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSimulationJobsCommand(input, ...args));
};
const makePagedRequest = async (
  client: RoboMaker,
  input: ListSimulationJobsCommandInput,
  ...args: any
): Promise<ListSimulationJobsCommandOutput> => {
  // @ts-ignore
  return await client.listSimulationJobs(input, ...args);
};
export async function* listSimulationJobsPaginate(
  config: RoboMakerPaginationConfiguration,
  input: ListSimulationJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListSimulationJobsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListSimulationJobsCommandOutput;
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
