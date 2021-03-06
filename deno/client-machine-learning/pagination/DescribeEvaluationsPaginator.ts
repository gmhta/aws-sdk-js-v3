
import { MachineLearning } from "../MachineLearning.ts";
import { MachineLearningClient } from "../MachineLearningClient.ts";
import {
  DescribeEvaluationsCommand,
  DescribeEvaluationsCommandInput,
  DescribeEvaluationsCommandOutput,
} from "../commands/DescribeEvaluationsCommand.ts";
import { MachineLearningPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: MachineLearningClient,
  input: DescribeEvaluationsCommandInput,
  ...args: any
): Promise<DescribeEvaluationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEvaluationsCommand(input, ...args));
};
const makePagedRequest = async (
  client: MachineLearning,
  input: DescribeEvaluationsCommandInput,
  ...args: any
): Promise<DescribeEvaluationsCommandOutput> => {
  // @ts-ignore
  return await client.describeEvaluations(input, ...args);
};
export async function* describeEvaluationsPaginate(
  config: MachineLearningPaginationConfiguration,
  input: DescribeEvaluationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEvaluationsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeEvaluationsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof MachineLearning) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MachineLearningClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MachineLearning | MachineLearningClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
