
import {
  AssociateDRTLogBucketCommandInput,
  AssociateDRTLogBucketCommandOutput,
} from "./commands/AssociateDRTLogBucketCommand.ts";
import { AssociateDRTRoleCommandInput, AssociateDRTRoleCommandOutput } from "./commands/AssociateDRTRoleCommand.ts";
import {
  AssociateHealthCheckCommandInput,
  AssociateHealthCheckCommandOutput,
} from "./commands/AssociateHealthCheckCommand.ts";
import {
  AssociateProactiveEngagementDetailsCommandInput,
  AssociateProactiveEngagementDetailsCommandOutput,
} from "./commands/AssociateProactiveEngagementDetailsCommand.ts";
import { CreateProtectionCommandInput, CreateProtectionCommandOutput } from "./commands/CreateProtectionCommand.ts";
import { CreateSubscriptionCommandInput, CreateSubscriptionCommandOutput } from "./commands/CreateSubscriptionCommand.ts";
import { DeleteProtectionCommandInput, DeleteProtectionCommandOutput } from "./commands/DeleteProtectionCommand.ts";
import { DeleteSubscriptionCommandInput, DeleteSubscriptionCommandOutput } from "./commands/DeleteSubscriptionCommand.ts";
import { DescribeAttackCommandInput, DescribeAttackCommandOutput } from "./commands/DescribeAttackCommand.ts";
import { DescribeDRTAccessCommandInput, DescribeDRTAccessCommandOutput } from "./commands/DescribeDRTAccessCommand.ts";
import {
  DescribeEmergencyContactSettingsCommandInput,
  DescribeEmergencyContactSettingsCommandOutput,
} from "./commands/DescribeEmergencyContactSettingsCommand.ts";
import { DescribeProtectionCommandInput, DescribeProtectionCommandOutput } from "./commands/DescribeProtectionCommand.ts";
import {
  DescribeSubscriptionCommandInput,
  DescribeSubscriptionCommandOutput,
} from "./commands/DescribeSubscriptionCommand.ts";
import {
  DisableProactiveEngagementCommandInput,
  DisableProactiveEngagementCommandOutput,
} from "./commands/DisableProactiveEngagementCommand.ts";
import {
  DisassociateDRTLogBucketCommandInput,
  DisassociateDRTLogBucketCommandOutput,
} from "./commands/DisassociateDRTLogBucketCommand.ts";
import {
  DisassociateDRTRoleCommandInput,
  DisassociateDRTRoleCommandOutput,
} from "./commands/DisassociateDRTRoleCommand.ts";
import {
  DisassociateHealthCheckCommandInput,
  DisassociateHealthCheckCommandOutput,
} from "./commands/DisassociateHealthCheckCommand.ts";
import {
  EnableProactiveEngagementCommandInput,
  EnableProactiveEngagementCommandOutput,
} from "./commands/EnableProactiveEngagementCommand.ts";
import {
  GetSubscriptionStateCommandInput,
  GetSubscriptionStateCommandOutput,
} from "./commands/GetSubscriptionStateCommand.ts";
import { ListAttacksCommandInput, ListAttacksCommandOutput } from "./commands/ListAttacksCommand.ts";
import { ListProtectionsCommandInput, ListProtectionsCommandOutput } from "./commands/ListProtectionsCommand.ts";
import {
  UpdateEmergencyContactSettingsCommandInput,
  UpdateEmergencyContactSettingsCommandOutput,
} from "./commands/UpdateEmergencyContactSettingsCommand.ts";
import { UpdateSubscriptionCommandInput, UpdateSubscriptionCommandOutput } from "./commands/UpdateSubscriptionCommand.ts";
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
  | AssociateDRTLogBucketCommandInput
  | AssociateDRTRoleCommandInput
  | AssociateHealthCheckCommandInput
  | AssociateProactiveEngagementDetailsCommandInput
  | CreateProtectionCommandInput
  | CreateSubscriptionCommandInput
  | DeleteProtectionCommandInput
  | DeleteSubscriptionCommandInput
  | DescribeAttackCommandInput
  | DescribeDRTAccessCommandInput
  | DescribeEmergencyContactSettingsCommandInput
  | DescribeProtectionCommandInput
  | DescribeSubscriptionCommandInput
  | DisableProactiveEngagementCommandInput
  | DisassociateDRTLogBucketCommandInput
  | DisassociateDRTRoleCommandInput
  | DisassociateHealthCheckCommandInput
  | EnableProactiveEngagementCommandInput
  | GetSubscriptionStateCommandInput
  | ListAttacksCommandInput
  | ListProtectionsCommandInput
  | UpdateEmergencyContactSettingsCommandInput
  | UpdateSubscriptionCommandInput;

export type ServiceOutputTypes =
  | AssociateDRTLogBucketCommandOutput
  | AssociateDRTRoleCommandOutput
  | AssociateHealthCheckCommandOutput
  | AssociateProactiveEngagementDetailsCommandOutput
  | CreateProtectionCommandOutput
  | CreateSubscriptionCommandOutput
  | DeleteProtectionCommandOutput
  | DeleteSubscriptionCommandOutput
  | DescribeAttackCommandOutput
  | DescribeDRTAccessCommandOutput
  | DescribeEmergencyContactSettingsCommandOutput
  | DescribeProtectionCommandOutput
  | DescribeSubscriptionCommandOutput
  | DisableProactiveEngagementCommandOutput
  | DisassociateDRTLogBucketCommandOutput
  | DisassociateDRTRoleCommandOutput
  | DisassociateHealthCheckCommandOutput
  | EnableProactiveEngagementCommandOutput
  | GetSubscriptionStateCommandOutput
  | ListAttacksCommandOutput
  | ListProtectionsCommandOutput
  | UpdateEmergencyContactSettingsCommandOutput
  | UpdateSubscriptionCommandOutput;

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

export type ShieldClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ShieldClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AWS Shield Advanced</fullname>
 *          <p>This is the <i>AWS Shield Advanced API Reference</i>. This guide is for developers who need detailed information about the AWS Shield Advanced API actions,
 *          data types, and errors. For detailed information about AWS WAF and AWS Shield Advanced features and an overview of how to use the AWS WAF and AWS Shield Advanced APIs, see the
 *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>.</p>
 */
export class ShieldClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ShieldClientResolvedConfig
> {
  readonly config: ShieldClientResolvedConfig;

  constructor(configuration: ShieldClientConfig) {
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
