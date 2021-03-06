
import { SageMaker } from "../SageMaker.ts";
import { SageMakerClient } from "../SageMakerClient.ts";
import {
  ListTrialComponentsCommand,
  ListTrialComponentsCommandInput,
  ListTrialComponentsCommandOutput,
} from "../commands/ListTrialComponentsCommand.ts";
import { SageMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListTrialComponentsCommandInput,
  ...args: any
): Promise<ListTrialComponentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTrialComponentsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListTrialComponentsCommandInput,
  ...args: any
): Promise<ListTrialComponentsCommandOutput> => {
  // @ts-ignore
  return await client.listTrialComponents(input, ...args);
};
export async function* listTrialComponentsPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListTrialComponentsCommandInput,
  ...additionalArguments: any
): Paginator<ListTrialComponentsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTrialComponentsCommandOutput;
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
