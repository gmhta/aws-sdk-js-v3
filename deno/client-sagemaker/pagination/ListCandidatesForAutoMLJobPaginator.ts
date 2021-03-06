
import { SageMaker } from "../SageMaker.ts";
import { SageMakerClient } from "../SageMakerClient.ts";
import {
  ListCandidatesForAutoMLJobCommand,
  ListCandidatesForAutoMLJobCommandInput,
  ListCandidatesForAutoMLJobCommandOutput,
} from "../commands/ListCandidatesForAutoMLJobCommand.ts";
import { SageMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListCandidatesForAutoMLJobCommandInput,
  ...args: any
): Promise<ListCandidatesForAutoMLJobCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCandidatesForAutoMLJobCommand(input, ...args));
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListCandidatesForAutoMLJobCommandInput,
  ...args: any
): Promise<ListCandidatesForAutoMLJobCommandOutput> => {
  // @ts-ignore
  return await client.listCandidatesForAutoMLJob(input, ...args);
};
export async function* listCandidatesForAutoMLJobPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListCandidatesForAutoMLJobCommandInput,
  ...additionalArguments: any
): Paginator<ListCandidatesForAutoMLJobCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListCandidatesForAutoMLJobCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
