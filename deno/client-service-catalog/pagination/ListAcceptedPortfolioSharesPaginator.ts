
import { ServiceCatalog } from "../ServiceCatalog.ts";
import { ServiceCatalogClient } from "../ServiceCatalogClient.ts";
import {
  ListAcceptedPortfolioSharesCommand,
  ListAcceptedPortfolioSharesCommandInput,
  ListAcceptedPortfolioSharesCommandOutput,
} from "../commands/ListAcceptedPortfolioSharesCommand.ts";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListAcceptedPortfolioSharesCommandInput,
  ...args: any
): Promise<ListAcceptedPortfolioSharesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAcceptedPortfolioSharesCommand(input, ...args));
};
const makePagedRequest = async (
  client: ServiceCatalog,
  input: ListAcceptedPortfolioSharesCommandInput,
  ...args: any
): Promise<ListAcceptedPortfolioSharesCommandOutput> => {
  // @ts-ignore
  return await client.listAcceptedPortfolioShares(input, ...args);
};
export async function* listAcceptedPortfolioSharesPaginate(
  config: ServiceCatalogPaginationConfiguration,
  input: ListAcceptedPortfolioSharesCommandInput,
  ...additionalArguments: any
): Paginator<ListAcceptedPortfolioSharesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAcceptedPortfolioSharesCommandOutput;
  while (hasNext) {
    input["PageToken"] = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof ServiceCatalog) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ServiceCatalogClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ServiceCatalog | ServiceCatalogClient");
    }
    yield page;
    token = page["NextPageToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
