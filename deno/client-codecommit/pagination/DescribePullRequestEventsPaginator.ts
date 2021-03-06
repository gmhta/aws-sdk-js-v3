
import { CodeCommit } from "../CodeCommit.ts";
import { CodeCommitClient } from "../CodeCommitClient.ts";
import {
  DescribePullRequestEventsCommand,
  DescribePullRequestEventsCommandInput,
  DescribePullRequestEventsCommandOutput,
} from "../commands/DescribePullRequestEventsCommand.ts";
import { CodeCommitPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: DescribePullRequestEventsCommandInput,
  ...args: any
): Promise<DescribePullRequestEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePullRequestEventsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeCommit,
  input: DescribePullRequestEventsCommandInput,
  ...args: any
): Promise<DescribePullRequestEventsCommandOutput> => {
  // @ts-ignore
  return await client.describePullRequestEvents(input, ...args);
};
export async function* describePullRequestEventsPaginate(
  config: CodeCommitPaginationConfiguration,
  input: DescribePullRequestEventsCommandInput,
  ...additionalArguments: any
): Paginator<DescribePullRequestEventsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribePullRequestEventsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeCommit) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeCommitClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCommit | CodeCommitClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
