
import { CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand.ts";
import {
  CreateReplicationJobCommandInput,
  CreateReplicationJobCommandOutput,
} from "./commands/CreateReplicationJobCommand.ts";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand.ts";
import {
  DeleteAppLaunchConfigurationCommandInput,
  DeleteAppLaunchConfigurationCommandOutput,
} from "./commands/DeleteAppLaunchConfigurationCommand.ts";
import {
  DeleteAppReplicationConfigurationCommandInput,
  DeleteAppReplicationConfigurationCommandOutput,
} from "./commands/DeleteAppReplicationConfigurationCommand.ts";
import {
  DeleteReplicationJobCommandInput,
  DeleteReplicationJobCommandOutput,
} from "./commands/DeleteReplicationJobCommand.ts";
import {
  DeleteServerCatalogCommandInput,
  DeleteServerCatalogCommandOutput,
} from "./commands/DeleteServerCatalogCommand.ts";
import {
  DisassociateConnectorCommandInput,
  DisassociateConnectorCommandOutput,
} from "./commands/DisassociateConnectorCommand.ts";
import { GenerateChangeSetCommandInput, GenerateChangeSetCommandOutput } from "./commands/GenerateChangeSetCommand.ts";
import { GenerateTemplateCommandInput, GenerateTemplateCommandOutput } from "./commands/GenerateTemplateCommand.ts";
import { GetAppCommandInput, GetAppCommandOutput } from "./commands/GetAppCommand.ts";
import {
  GetAppLaunchConfigurationCommandInput,
  GetAppLaunchConfigurationCommandOutput,
} from "./commands/GetAppLaunchConfigurationCommand.ts";
import {
  GetAppReplicationConfigurationCommandInput,
  GetAppReplicationConfigurationCommandOutput,
} from "./commands/GetAppReplicationConfigurationCommand.ts";
import { GetConnectorsCommandInput, GetConnectorsCommandOutput } from "./commands/GetConnectorsCommand.ts";
import { GetReplicationJobsCommandInput, GetReplicationJobsCommandOutput } from "./commands/GetReplicationJobsCommand.ts";
import { GetReplicationRunsCommandInput, GetReplicationRunsCommandOutput } from "./commands/GetReplicationRunsCommand.ts";
import { GetServersCommandInput, GetServersCommandOutput } from "./commands/GetServersCommand.ts";
import {
  ImportServerCatalogCommandInput,
  ImportServerCatalogCommandOutput,
} from "./commands/ImportServerCatalogCommand.ts";
import { LaunchAppCommandInput, LaunchAppCommandOutput } from "./commands/LaunchAppCommand.ts";
import { ListAppsCommandInput, ListAppsCommandOutput } from "./commands/ListAppsCommand.ts";
import {
  PutAppLaunchConfigurationCommandInput,
  PutAppLaunchConfigurationCommandOutput,
} from "./commands/PutAppLaunchConfigurationCommand.ts";
import {
  PutAppReplicationConfigurationCommandInput,
  PutAppReplicationConfigurationCommandOutput,
} from "./commands/PutAppReplicationConfigurationCommand.ts";
import {
  StartAppReplicationCommandInput,
  StartAppReplicationCommandOutput,
} from "./commands/StartAppReplicationCommand.ts";
import {
  StartOnDemandReplicationRunCommandInput,
  StartOnDemandReplicationRunCommandOutput,
} from "./commands/StartOnDemandReplicationRunCommand.ts";
import { StopAppReplicationCommandInput, StopAppReplicationCommandOutput } from "./commands/StopAppReplicationCommand.ts";
import { TerminateAppCommandInput, TerminateAppCommandOutput } from "./commands/TerminateAppCommand.ts";
import { UpdateAppCommandInput, UpdateAppCommandOutput } from "./commands/UpdateAppCommand.ts";
import {
  UpdateReplicationJobCommandInput,
  UpdateReplicationJobCommandOutput,
} from "./commands/UpdateReplicationJobCommand.ts";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig.ts";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "../config-resolver/mod.ts";
import { getContentLengthPlugin } from "../middleware-content-length/mod.ts";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "../middleware-host-header/mod.ts";
import { getLoggerPlugin } from "../middleware-logger/mod.ts";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "../middleware-retry/mod.ts";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "../middleware-signing/mod.ts";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "../middleware-user-agent/mod.ts";
import { HttpHandler as __HttpHandler } from "../protocol-http/mod.ts";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "../smithy-client/mod.ts";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "../types/mod.ts";

export type ServiceInputTypes =
  | CreateAppCommandInput
  | CreateReplicationJobCommandInput
  | DeleteAppCommandInput
  | DeleteAppLaunchConfigurationCommandInput
  | DeleteAppReplicationConfigurationCommandInput
  | DeleteReplicationJobCommandInput
  | DeleteServerCatalogCommandInput
  | DisassociateConnectorCommandInput
  | GenerateChangeSetCommandInput
  | GenerateTemplateCommandInput
  | GetAppCommandInput
  | GetAppLaunchConfigurationCommandInput
  | GetAppReplicationConfigurationCommandInput
  | GetConnectorsCommandInput
  | GetReplicationJobsCommandInput
  | GetReplicationRunsCommandInput
  | GetServersCommandInput
  | ImportServerCatalogCommandInput
  | LaunchAppCommandInput
  | ListAppsCommandInput
  | PutAppLaunchConfigurationCommandInput
  | PutAppReplicationConfigurationCommandInput
  | StartAppReplicationCommandInput
  | StartOnDemandReplicationRunCommandInput
  | StopAppReplicationCommandInput
  | TerminateAppCommandInput
  | UpdateAppCommandInput
  | UpdateReplicationJobCommandInput;

export type ServiceOutputTypes =
  | CreateAppCommandOutput
  | CreateReplicationJobCommandOutput
  | DeleteAppCommandOutput
  | DeleteAppLaunchConfigurationCommandOutput
  | DeleteAppReplicationConfigurationCommandOutput
  | DeleteReplicationJobCommandOutput
  | DeleteServerCatalogCommandOutput
  | DisassociateConnectorCommandOutput
  | GenerateChangeSetCommandOutput
  | GenerateTemplateCommandOutput
  | GetAppCommandOutput
  | GetAppLaunchConfigurationCommandOutput
  | GetAppReplicationConfigurationCommandOutput
  | GetConnectorsCommandOutput
  | GetReplicationJobsCommandOutput
  | GetReplicationRunsCommandOutput
  | GetServersCommandOutput
  | ImportServerCatalogCommandOutput
  | LaunchAppCommandOutput
  | ListAppsCommandOutput
  | PutAppLaunchConfigurationCommandOutput
  | PutAppReplicationConfigurationCommandOutput
  | StartAppReplicationCommandOutput
  | StartOnDemandReplicationRunCommandOutput
  | StopAppReplicationCommandOutput
  | TerminateAppCommandOutput
  | UpdateAppCommandOutput
  | UpdateReplicationJobCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type SMSClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type SMSClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AAWS Sever Migration Service</fullname>
 *         <p>This is the <i>AWS Sever Migration Service API Reference</i>. It provides descriptions,
 *             syntax, and usage examples for each of the actions and data types for the AWS Sever Migration Service
 *             (AWS SMS). The topic for each action shows the Query API request parameters and the XML
 *             response. You can also view the XML request elements in the WSDL.</p>
 *         <p>Alternatively, you can use one of the AWS SDKs to access an API that's tailored to the
 *             programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p>
 *         <p>To learn more about the Server Migration Service, see the following resources:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://aws.amazon.com/server-migration-service/">AWS Sever Migration Service
 *                         product page</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/server-migration-service/latest/userguide/server-migration.html">AWS Sever Migration Service User Guide</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class SMSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SMSClientResolvedConfig
> {
  readonly config: SMSClientResolvedConfig;

  constructor(configuration: SMSClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
