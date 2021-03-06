
import { ElasticTranscoder } from "../ElasticTranscoder.ts";
import { ElasticTranscoderClient } from "../ElasticTranscoderClient.ts";
import { ListPresetsCommand, ListPresetsCommandInput, ListPresetsCommandOutput } from "../commands/ListPresetsCommand.ts";
import { ElasticTranscoderPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ElasticTranscoderClient,
  input: ListPresetsCommandInput,
  ...args: any
): Promise<ListPresetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPresetsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElasticTranscoder,
  input: ListPresetsCommandInput,
  ...args: any
): Promise<ListPresetsCommandOutput> => {
  // @ts-ignore
  return await client.listPresets(input, ...args);
};
export async function* listPresetsPaginate(
  config: ElasticTranscoderPaginationConfiguration,
  input: ListPresetsCommandInput,
  ...additionalArguments: any
): Paginator<ListPresetsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListPresetsCommandOutput;
  while (hasNext) {
    input["PageToken"] = token;
    if (config.client instanceof ElasticTranscoder) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticTranscoderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticTranscoder | ElasticTranscoderClient");
    }
    yield page;
    token = page["NextPageToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
