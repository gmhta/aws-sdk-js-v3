
import { CostExplorer } from "../CostExplorer.ts";
import { CostExplorerClient } from "../CostExplorerClient.ts";
import {
  GetSavingsPlansUtilizationDetailsCommand,
  GetSavingsPlansUtilizationDetailsCommandInput,
  GetSavingsPlansUtilizationDetailsCommandOutput,
} from "../commands/GetSavingsPlansUtilizationDetailsCommand.ts";
import { CostExplorerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CostExplorerClient,
  input: GetSavingsPlansUtilizationDetailsCommandInput,
  ...args: any
): Promise<GetSavingsPlansUtilizationDetailsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetSavingsPlansUtilizationDetailsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CostExplorer,
  input: GetSavingsPlansUtilizationDetailsCommandInput,
  ...args: any
): Promise<GetSavingsPlansUtilizationDetailsCommandOutput> => {
  // @ts-ignore
  return await client.getSavingsPlansUtilizationDetails(input, ...args);
};
export async function* getSavingsPlansUtilizationDetailsPaginate(
  config: CostExplorerPaginationConfiguration,
  input: GetSavingsPlansUtilizationDetailsCommandInput,
  ...additionalArguments: any
): Paginator<GetSavingsPlansUtilizationDetailsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetSavingsPlansUtilizationDetailsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CostExplorer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CostExplorerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CostExplorer | CostExplorerClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
