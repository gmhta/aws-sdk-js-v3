
import {
  AssociateAdminAccountCommandInput,
  AssociateAdminAccountCommandOutput,
} from "./commands/AssociateAdminAccountCommand.ts";
import { DeleteAppsListCommandInput, DeleteAppsListCommandOutput } from "./commands/DeleteAppsListCommand.ts";
import {
  DeleteNotificationChannelCommandInput,
  DeleteNotificationChannelCommandOutput,
} from "./commands/DeleteNotificationChannelCommand.ts";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand.ts";
import {
  DeleteProtocolsListCommandInput,
  DeleteProtocolsListCommandOutput,
} from "./commands/DeleteProtocolsListCommand.ts";
import {
  DisassociateAdminAccountCommandInput,
  DisassociateAdminAccountCommandOutput,
} from "./commands/DisassociateAdminAccountCommand.ts";
import { GetAdminAccountCommandInput, GetAdminAccountCommandOutput } from "./commands/GetAdminAccountCommand.ts";
import { GetAppsListCommandInput, GetAppsListCommandOutput } from "./commands/GetAppsListCommand.ts";
import {
  GetComplianceDetailCommandInput,
  GetComplianceDetailCommandOutput,
} from "./commands/GetComplianceDetailCommand.ts";
import {
  GetNotificationChannelCommandInput,
  GetNotificationChannelCommandOutput,
} from "./commands/GetNotificationChannelCommand.ts";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand.ts";
import {
  GetProtectionStatusCommandInput,
  GetProtectionStatusCommandOutput,
} from "./commands/GetProtectionStatusCommand.ts";
import { GetProtocolsListCommandInput, GetProtocolsListCommandOutput } from "./commands/GetProtocolsListCommand.ts";
import {
  GetViolationDetailsCommandInput,
  GetViolationDetailsCommandOutput,
} from "./commands/GetViolationDetailsCommand.ts";
import { ListAppsListsCommandInput, ListAppsListsCommandOutput } from "./commands/ListAppsListsCommand.ts";
import {
  ListComplianceStatusCommandInput,
  ListComplianceStatusCommandOutput,
} from "./commands/ListComplianceStatusCommand.ts";
import { ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput } from "./commands/ListMemberAccountsCommand.ts";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand.ts";
import { ListProtocolsListsCommandInput, ListProtocolsListsCommandOutput } from "./commands/ListProtocolsListsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { PutAppsListCommandInput, PutAppsListCommandOutput } from "./commands/PutAppsListCommand.ts";
import {
  PutNotificationChannelCommandInput,
  PutNotificationChannelCommandOutput,
} from "./commands/PutNotificationChannelCommand.ts";
import { PutPolicyCommandInput, PutPolicyCommandOutput } from "./commands/PutPolicyCommand.ts";
import { PutProtocolsListCommandInput, PutProtocolsListCommandOutput } from "./commands/PutProtocolsListCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
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
  | AssociateAdminAccountCommandInput
  | DeleteAppsListCommandInput
  | DeleteNotificationChannelCommandInput
  | DeletePolicyCommandInput
  | DeleteProtocolsListCommandInput
  | DisassociateAdminAccountCommandInput
  | GetAdminAccountCommandInput
  | GetAppsListCommandInput
  | GetComplianceDetailCommandInput
  | GetNotificationChannelCommandInput
  | GetPolicyCommandInput
  | GetProtectionStatusCommandInput
  | GetProtocolsListCommandInput
  | GetViolationDetailsCommandInput
  | ListAppsListsCommandInput
  | ListComplianceStatusCommandInput
  | ListMemberAccountsCommandInput
  | ListPoliciesCommandInput
  | ListProtocolsListsCommandInput
  | ListTagsForResourceCommandInput
  | PutAppsListCommandInput
  | PutNotificationChannelCommandInput
  | PutPolicyCommandInput
  | PutProtocolsListCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput;

export type ServiceOutputTypes =
  | AssociateAdminAccountCommandOutput
  | DeleteAppsListCommandOutput
  | DeleteNotificationChannelCommandOutput
  | DeletePolicyCommandOutput
  | DeleteProtocolsListCommandOutput
  | DisassociateAdminAccountCommandOutput
  | GetAdminAccountCommandOutput
  | GetAppsListCommandOutput
  | GetComplianceDetailCommandOutput
  | GetNotificationChannelCommandOutput
  | GetPolicyCommandOutput
  | GetProtectionStatusCommandOutput
  | GetProtocolsListCommandOutput
  | GetViolationDetailsCommandOutput
  | ListAppsListsCommandOutput
  | ListComplianceStatusCommandOutput
  | ListMemberAccountsCommandOutput
  | ListPoliciesCommandOutput
  | ListProtocolsListsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutAppsListCommandOutput
  | PutNotificationChannelCommandOutput
  | PutPolicyCommandOutput
  | PutProtocolsListCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput;

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

export type FMSClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type FMSClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AWS Firewall Manager</fullname>
 *          <p>This is the <i>AWS Firewall Manager API Reference</i>. This guide is for
 *       developers who need detailed information about the AWS Firewall Manager API actions, data
 *       types, and errors. For detailed information about AWS Firewall Manager features, see the
 *         <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html">AWS Firewall Manager Developer Guide</a>.</p>
 */
export class FMSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  FMSClientResolvedConfig
> {
  readonly config: FMSClientResolvedConfig;

  constructor(configuration: FMSClientConfig) {
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
