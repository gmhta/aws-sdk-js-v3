
import { Backup } from "../Backup.ts";
import { BackupClient } from "../BackupClient.ts";
import {
  ListBackupPlansCommand,
  ListBackupPlansCommandInput,
  ListBackupPlansCommandOutput,
} from "../commands/ListBackupPlansCommand.ts";
import { BackupPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: BackupClient,
  input: ListBackupPlansCommandInput,
  ...args: any
): Promise<ListBackupPlansCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBackupPlansCommand(input, ...args));
};
const makePagedRequest = async (
  client: Backup,
  input: ListBackupPlansCommandInput,
  ...args: any
): Promise<ListBackupPlansCommandOutput> => {
  // @ts-ignore
  return await client.listBackupPlans(input, ...args);
};
export async function* listBackupPlansPaginate(
  config: BackupPaginationConfiguration,
  input: ListBackupPlansCommandInput,
  ...additionalArguments: any
): Paginator<ListBackupPlansCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListBackupPlansCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Backup) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BackupClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Backup | BackupClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
