
import { Signer } from "../Signer.ts";
import { SignerClient } from "../SignerClient.ts";
import {
  ListSigningProfilesCommand,
  ListSigningProfilesCommandInput,
  ListSigningProfilesCommandOutput,
} from "../commands/ListSigningProfilesCommand.ts";
import { SignerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SignerClient,
  input: ListSigningProfilesCommandInput,
  ...args: any
): Promise<ListSigningProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSigningProfilesCommand(input, ...args));
};
const makePagedRequest = async (
  client: Signer,
  input: ListSigningProfilesCommandInput,
  ...args: any
): Promise<ListSigningProfilesCommandOutput> => {
  // @ts-ignore
  return await client.listSigningProfiles(input, ...args);
};
export async function* listSigningProfilesPaginate(
  config: SignerPaginationConfiguration,
  input: ListSigningProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListSigningProfilesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListSigningProfilesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Signer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SignerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Signer | SignerClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
