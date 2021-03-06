
import { S3Control } from "../S3Control.ts";
import { S3ControlClient } from "../S3ControlClient.ts";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand.ts";
import { S3ControlPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: S3ControlClient,
  input: ListJobsCommandInput,
  ...args: any
): Promise<ListJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJobsCommand(input, ...args));
};
const makePagedRequest = async (
  client: S3Control,
  input: ListJobsCommandInput,
  ...args: any
): Promise<ListJobsCommandOutput> => {
  // @ts-ignore
  return await client.listJobs(input, ...args);
};
export async function* listJobsPaginate(
  config: S3ControlPaginationConfiguration,
  input: ListJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListJobsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListJobsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof S3Control) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof S3ControlClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected S3Control | S3ControlClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
