
import { CodeGuruProfiler } from "../CodeGuruProfiler.ts";
import { CodeGuruProfilerClient } from "../CodeGuruProfilerClient.ts";
import {
  ListProfileTimesCommand,
  ListProfileTimesCommandInput,
  ListProfileTimesCommandOutput,
} from "../commands/ListProfileTimesCommand.ts";
import { CodeGuruProfilerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CodeGuruProfilerClient,
  input: ListProfileTimesCommandInput,
  ...args: any
): Promise<ListProfileTimesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProfileTimesCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeGuruProfiler,
  input: ListProfileTimesCommandInput,
  ...args: any
): Promise<ListProfileTimesCommandOutput> => {
  // @ts-ignore
  return await client.listProfileTimes(input, ...args);
};
export async function* listProfileTimesPaginate(
  config: CodeGuruProfilerPaginationConfiguration,
  input: ListProfileTimesCommandInput,
  ...additionalArguments: any
): Paginator<ListProfileTimesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListProfileTimesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeGuruProfiler) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeGuruProfilerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeGuruProfiler | CodeGuruProfilerClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
