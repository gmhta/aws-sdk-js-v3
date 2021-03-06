
import { Rekognition } from "../Rekognition.ts";
import { RekognitionClient } from "../RekognitionClient.ts";
import {
  GetPersonTrackingCommand,
  GetPersonTrackingCommandInput,
  GetPersonTrackingCommandOutput,
} from "../commands/GetPersonTrackingCommand.ts";
import { RekognitionPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RekognitionClient,
  input: GetPersonTrackingCommandInput,
  ...args: any
): Promise<GetPersonTrackingCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetPersonTrackingCommand(input, ...args));
};
const makePagedRequest = async (
  client: Rekognition,
  input: GetPersonTrackingCommandInput,
  ...args: any
): Promise<GetPersonTrackingCommandOutput> => {
  // @ts-ignore
  return await client.getPersonTracking(input, ...args);
};
export async function* getPersonTrackingPaginate(
  config: RekognitionPaginationConfiguration,
  input: GetPersonTrackingCommandInput,
  ...additionalArguments: any
): Paginator<GetPersonTrackingCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetPersonTrackingCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Rekognition) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RekognitionClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Rekognition | RekognitionClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
