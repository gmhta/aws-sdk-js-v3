
import { SESv2 } from "../SESv2.ts";
import { SESv2Client } from "../SESv2Client.ts";
import {
  ListCustomVerificationEmailTemplatesCommand,
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput,
} from "../commands/ListCustomVerificationEmailTemplatesCommand.ts";
import { SESv2PaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SESv2Client,
  input: ListCustomVerificationEmailTemplatesCommandInput,
  ...args: any
): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCustomVerificationEmailTemplatesCommand(input, ...args));
};
const makePagedRequest = async (
  client: SESv2,
  input: ListCustomVerificationEmailTemplatesCommandInput,
  ...args: any
): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listCustomVerificationEmailTemplates(input, ...args);
};
export async function* listCustomVerificationEmailTemplatesPaginate(
  config: SESv2PaginationConfiguration,
  input: ListCustomVerificationEmailTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListCustomVerificationEmailTemplatesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListCustomVerificationEmailTemplatesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof SESv2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SESv2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SESv2 | SESv2Client");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
