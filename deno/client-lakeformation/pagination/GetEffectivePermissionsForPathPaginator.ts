
import { LakeFormation } from "../LakeFormation.ts";
import { LakeFormationClient } from "../LakeFormationClient.ts";
import {
  GetEffectivePermissionsForPathCommand,
  GetEffectivePermissionsForPathCommandInput,
  GetEffectivePermissionsForPathCommandOutput,
} from "../commands/GetEffectivePermissionsForPathCommand.ts";
import { LakeFormationPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: LakeFormationClient,
  input: GetEffectivePermissionsForPathCommandInput,
  ...args: any
): Promise<GetEffectivePermissionsForPathCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetEffectivePermissionsForPathCommand(input, ...args));
};
const makePagedRequest = async (
  client: LakeFormation,
  input: GetEffectivePermissionsForPathCommandInput,
  ...args: any
): Promise<GetEffectivePermissionsForPathCommandOutput> => {
  // @ts-ignore
  return await client.getEffectivePermissionsForPath(input, ...args);
};
export async function* getEffectivePermissionsForPathPaginate(
  config: LakeFormationPaginationConfiguration,
  input: GetEffectivePermissionsForPathCommandInput,
  ...additionalArguments: any
): Paginator<GetEffectivePermissionsForPathCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetEffectivePermissionsForPathCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LakeFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LakeFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LakeFormation | LakeFormationClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
