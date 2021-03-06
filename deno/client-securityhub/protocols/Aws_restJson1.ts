
import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "../commands/AcceptInvitationCommand.ts";
import {
  BatchDisableStandardsCommandInput,
  BatchDisableStandardsCommandOutput,
} from "../commands/BatchDisableStandardsCommand.ts";
import {
  BatchEnableStandardsCommandInput,
  BatchEnableStandardsCommandOutput,
} from "../commands/BatchEnableStandardsCommand.ts";
import {
  BatchImportFindingsCommandInput,
  BatchImportFindingsCommandOutput,
} from "../commands/BatchImportFindingsCommand.ts";
import {
  BatchUpdateFindingsCommandInput,
  BatchUpdateFindingsCommandOutput,
} from "../commands/BatchUpdateFindingsCommand.ts";
import { CreateActionTargetCommandInput, CreateActionTargetCommandOutput } from "../commands/CreateActionTargetCommand.ts";
import { CreateInsightCommandInput, CreateInsightCommandOutput } from "../commands/CreateInsightCommand.ts";
import { CreateMembersCommandInput, CreateMembersCommandOutput } from "../commands/CreateMembersCommand.ts";
import { DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput } from "../commands/DeclineInvitationsCommand.ts";
import { DeleteActionTargetCommandInput, DeleteActionTargetCommandOutput } from "../commands/DeleteActionTargetCommand.ts";
import { DeleteInsightCommandInput, DeleteInsightCommandOutput } from "../commands/DeleteInsightCommand.ts";
import { DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput } from "../commands/DeleteInvitationsCommand.ts";
import { DeleteMembersCommandInput, DeleteMembersCommandOutput } from "../commands/DeleteMembersCommand.ts";
import {
  DescribeActionTargetsCommandInput,
  DescribeActionTargetsCommandOutput,
} from "../commands/DescribeActionTargetsCommand.ts";
import { DescribeHubCommandInput, DescribeHubCommandOutput } from "../commands/DescribeHubCommand.ts";
import { DescribeProductsCommandInput, DescribeProductsCommandOutput } from "../commands/DescribeProductsCommand.ts";
import { DescribeStandardsCommandInput, DescribeStandardsCommandOutput } from "../commands/DescribeStandardsCommand.ts";
import {
  DescribeStandardsControlsCommandInput,
  DescribeStandardsControlsCommandOutput,
} from "../commands/DescribeStandardsControlsCommand.ts";
import {
  DisableImportFindingsForProductCommandInput,
  DisableImportFindingsForProductCommandOutput,
} from "../commands/DisableImportFindingsForProductCommand.ts";
import { DisableSecurityHubCommandInput, DisableSecurityHubCommandOutput } from "../commands/DisableSecurityHubCommand.ts";
import {
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput,
} from "../commands/DisassociateFromMasterAccountCommand.ts";
import {
  DisassociateMembersCommandInput,
  DisassociateMembersCommandOutput,
} from "../commands/DisassociateMembersCommand.ts";
import {
  EnableImportFindingsForProductCommandInput,
  EnableImportFindingsForProductCommandOutput,
} from "../commands/EnableImportFindingsForProductCommand.ts";
import { EnableSecurityHubCommandInput, EnableSecurityHubCommandOutput } from "../commands/EnableSecurityHubCommand.ts";
import {
  GetEnabledStandardsCommandInput,
  GetEnabledStandardsCommandOutput,
} from "../commands/GetEnabledStandardsCommand.ts";
import { GetFindingsCommandInput, GetFindingsCommandOutput } from "../commands/GetFindingsCommand.ts";
import { GetInsightResultsCommandInput, GetInsightResultsCommandOutput } from "../commands/GetInsightResultsCommand.ts";
import { GetInsightsCommandInput, GetInsightsCommandOutput } from "../commands/GetInsightsCommand.ts";
import {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "../commands/GetInvitationsCountCommand.ts";
import { GetMasterAccountCommandInput, GetMasterAccountCommandOutput } from "../commands/GetMasterAccountCommand.ts";
import { GetMembersCommandInput, GetMembersCommandOutput } from "../commands/GetMembersCommand.ts";
import { InviteMembersCommandInput, InviteMembersCommandOutput } from "../commands/InviteMembersCommand.ts";
import {
  ListEnabledProductsForImportCommandInput,
  ListEnabledProductsForImportCommandOutput,
} from "../commands/ListEnabledProductsForImportCommand.ts";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "../commands/ListInvitationsCommand.ts";
import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand.ts";
import { UpdateActionTargetCommandInput, UpdateActionTargetCommandOutput } from "../commands/UpdateActionTargetCommand.ts";
import { UpdateFindingsCommandInput, UpdateFindingsCommandOutput } from "../commands/UpdateFindingsCommand.ts";
import { UpdateInsightCommandInput, UpdateInsightCommandOutput } from "../commands/UpdateInsightCommand.ts";
import {
  UpdateSecurityHubConfigurationCommandInput,
  UpdateSecurityHubConfigurationCommandOutput,
} from "../commands/UpdateSecurityHubConfigurationCommand.ts";
import {
  UpdateStandardsControlCommandInput,
  UpdateStandardsControlCommandOutput,
} from "../commands/UpdateStandardsControlCommand.ts";
import {
  AccessDeniedException,
  AccountDetails,
  ActionTarget,
  AvailabilityZone,
  AwsAutoScalingAutoScalingGroupDetails,
  AwsCloudFrontDistributionDetails,
  AwsCloudFrontDistributionLogging,
  AwsCloudFrontDistributionOriginItem,
  AwsCloudFrontDistributionOrigins,
  AwsCodeBuildProjectDetails,
  AwsCodeBuildProjectEnvironment,
  AwsCodeBuildProjectEnvironmentRegistryCredential,
  AwsCodeBuildProjectSource,
  AwsCodeBuildProjectVpcConfig,
  AwsEc2InstanceDetails,
  AwsEc2NetworkInterfaceAttachment,
  AwsEc2NetworkInterfaceDetails,
  AwsEc2NetworkInterfaceSecurityGroup,
  AwsEc2SecurityGroupDetails,
  AwsEc2SecurityGroupIpPermission,
  AwsEc2SecurityGroupIpRange,
  AwsEc2SecurityGroupIpv6Range,
  AwsEc2SecurityGroupPrefixListId,
  AwsEc2SecurityGroupUserIdGroupPair,
  AwsEc2VolumeAttachment,
  AwsEc2VolumeDetails,
  AwsEc2VpcDetails,
  AwsElasticsearchDomainDetails,
  AwsElasticsearchDomainDomainEndpointOptions,
  AwsElasticsearchDomainEncryptionAtRestOptions,
  AwsElasticsearchDomainNodeToNodeEncryptionOptions,
  AwsElasticsearchDomainVPCOptions,
  AwsElbv2LoadBalancerDetails,
  AwsIamAccessKeyDetails,
  AwsIamRoleDetails,
  AwsKmsKeyDetails,
  AwsLambdaFunctionCode,
  AwsLambdaFunctionDeadLetterConfig,
  AwsLambdaFunctionDetails,
  AwsLambdaFunctionEnvironment,
  AwsLambdaFunctionEnvironmentError,
  AwsLambdaFunctionLayer,
  AwsLambdaFunctionTracingConfig,
  AwsLambdaFunctionVpcConfig,
  AwsLambdaLayerVersionDetails,
  AwsRdsDbInstanceAssociatedRole,
  AwsRdsDbInstanceDetails,
  AwsRdsDbInstanceEndpoint,
  AwsRdsDbInstanceVpcSecurityGroup,
  AwsS3BucketDetails,
  AwsS3BucketServerSideEncryptionByDefault,
  AwsS3BucketServerSideEncryptionConfiguration,
  AwsS3BucketServerSideEncryptionRule,
  AwsS3ObjectDetails,
  AwsSecurityFinding,
  AwsSecurityFindingFilters,
  AwsSecurityFindingIdentifier,
  AwsSnsTopicDetails,
  AwsSnsTopicSubscription,
  AwsSqsQueueDetails,
  AwsWafWebAclDetails,
  AwsWafWebAclRule,
  BatchUpdateFindingsUnprocessedFinding,
  CidrBlockAssociation,
  Compliance,
  ContainerDetails,
  Cvss,
  DateFilter,
  DateRange,
  ImportFindingsError,
  Insight,
  InsightResultValue,
  InsightResults,
  IntegrationType,
  InternalException,
  InvalidAccessException,
  InvalidInputException,
  Invitation,
  IpFilter,
  Ipv6CidrBlockAssociation,
  KeywordFilter,
  LimitExceededException,
  LoadBalancerState,
  Malware,
  MapFilter,
  Member,
  Network,
  NetworkHeader,
  NetworkPathComponent,
  NetworkPathComponentDetails,
  Note,
  NoteUpdate,
  NumberFilter,
  PortRange,
  ProcessDetails,
  Product,
  Recommendation,
  RelatedFinding,
  Remediation,
  Resource,
  ResourceConflictException,
  ResourceDetails,
  ResourceNotFoundException,
  Result,
  Severity,
  SeverityUpdate,
  SoftwarePackage,
  SortCriterion,
  Standard,
  StandardsControl,
  StandardsSubscription,
  StandardsSubscriptionRequest,
  StatusReason,
  StringFilter,
  ThreatIntelIndicator,
  Vulnerability,
  VulnerabilityVendor,
  WafAction,
  WafExcludedRule,
  WafOverrideAction,
  Workflow,
  WorkflowUpdate,
} from "../models/index.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "../../smithy-client/mod.ts";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export const serializeAws_restJson1AcceptInvitationCommand = async (
  input: AcceptInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/master";
  let body: any;
  body = JSON.stringify({
    ...(input.InvitationId !== undefined && { InvitationId: input.InvitationId }),
    ...(input.MasterId !== undefined && { MasterId: input.MasterId }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1BatchDisableStandardsCommand = async (
  input: BatchDisableStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/standards/deregister";
  let body: any;
  body = JSON.stringify({
    ...(input.StandardsSubscriptionArns !== undefined && {
      StandardsSubscriptionArns: serializeAws_restJson1StandardsSubscriptionArns(
        input.StandardsSubscriptionArns,
        context
      ),
    }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1BatchEnableStandardsCommand = async (
  input: BatchEnableStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/standards/register";
  let body: any;
  body = JSON.stringify({
    ...(input.StandardsSubscriptionRequests !== undefined && {
      StandardsSubscriptionRequests: serializeAws_restJson1StandardsSubscriptionRequests(
        input.StandardsSubscriptionRequests,
        context
      ),
    }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1BatchImportFindingsCommand = async (
  input: BatchImportFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/findings/import";
  let body: any;
  body = JSON.stringify({
    ...(input.Findings !== undefined && {
      Findings: serializeAws_restJson1AwsSecurityFindingList(input.Findings, context),
    }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1BatchUpdateFindingsCommand = async (
  input: BatchUpdateFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/findings/batchupdate";
  let body: any;
  body = JSON.stringify({
    ...(input.Confidence !== undefined && { Confidence: input.Confidence }),
    ...(input.Criticality !== undefined && { Criticality: input.Criticality }),
    ...(input.FindingIdentifiers !== undefined && {
      FindingIdentifiers: serializeAws_restJson1AwsSecurityFindingIdentifierList(input.FindingIdentifiers, context),
    }),
    ...(input.Note !== undefined && { Note: serializeAws_restJson1NoteUpdate(input.Note, context) }),
    ...(input.RelatedFindings !== undefined && {
      RelatedFindings: serializeAws_restJson1RelatedFindingList(input.RelatedFindings, context),
    }),
    ...(input.Severity !== undefined && { Severity: serializeAws_restJson1SeverityUpdate(input.Severity, context) }),
    ...(input.Types !== undefined && { Types: serializeAws_restJson1TypeList(input.Types, context) }),
    ...(input.UserDefinedFields !== undefined && {
      UserDefinedFields: serializeAws_restJson1FieldMap(input.UserDefinedFields, context),
    }),
    ...(input.VerificationState !== undefined && { VerificationState: input.VerificationState }),
    ...(input.Workflow !== undefined && { Workflow: serializeAws_restJson1WorkflowUpdate(input.Workflow, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateActionTargetCommand = async (
  input: CreateActionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/actionTargets";
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.Name !== undefined && { Name: input.Name }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateInsightCommand = async (
  input: CreateInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/insights";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined && {
      Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context),
    }),
    ...(input.GroupByAttribute !== undefined && { GroupByAttribute: input.GroupByAttribute }),
    ...(input.Name !== undefined && { Name: input.Name }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateMembersCommand = async (
  input: CreateMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/members";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountDetails !== undefined && {
      AccountDetails: serializeAws_restJson1AccountDetailsList(input.AccountDetails, context),
    }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeclineInvitationsCommand = async (
  input: DeclineInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/invitations/decline";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined && {
      AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context),
    }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteActionTargetCommand = async (
  input: DeleteActionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/actionTargets/{ActionTargetArn+}";
  if (input.ActionTargetArn !== undefined) {
    const labelValue: string = input.ActionTargetArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ActionTargetArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{ActionTargetArn+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: ActionTargetArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteInsightCommand = async (
  input: DeleteInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/insights/{InsightArn+}";
  if (input.InsightArn !== undefined) {
    const labelValue: string = input.InsightArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InsightArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{InsightArn+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: InsightArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteInvitationsCommand = async (
  input: DeleteInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/invitations/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined && {
      AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context),
    }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteMembersCommand = async (
  input: DeleteMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/members/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined && {
      AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context),
    }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeActionTargetsCommand = async (
  input: DescribeActionTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/actionTargets/get";
  let body: any;
  body = JSON.stringify({
    ...(input.ActionTargetArns !== undefined && {
      ActionTargetArns: serializeAws_restJson1ArnList(input.ActionTargetArns, context),
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeHubCommand = async (
  input: DescribeHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/accounts";
  const query: any = {
    ...(input.HubArn !== undefined && { HubArn: input.HubArn }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeProductsCommand = async (
  input: DescribeProductsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/products";
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeStandardsCommand = async (
  input: DescribeStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/standards";
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeStandardsControlsCommand = async (
  input: DescribeStandardsControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/standards/controls/{StandardsSubscriptionArn+}";
  if (input.StandardsSubscriptionArn !== undefined) {
    const labelValue: string = input.StandardsSubscriptionArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StandardsSubscriptionArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{StandardsSubscriptionArn+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: StandardsSubscriptionArn.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DisableImportFindingsForProductCommand = async (
  input: DisableImportFindingsForProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/productSubscriptions/{ProductSubscriptionArn+}";
  if (input.ProductSubscriptionArn !== undefined) {
    const labelValue: string = input.ProductSubscriptionArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ProductSubscriptionArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{ProductSubscriptionArn+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: ProductSubscriptionArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisableSecurityHubCommand = async (
  input: DisableSecurityHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/accounts";
  let body: any;
  body = "{}";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisassociateFromMasterAccountCommand = async (
  input: DisassociateFromMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/master/disassociate";
  let body: any;
  body = "{}";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisassociateMembersCommand = async (
  input: DisassociateMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/members/disassociate";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined && {
      AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context),
    }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1EnableImportFindingsForProductCommand = async (
  input: EnableImportFindingsForProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/productSubscriptions";
  let body: any;
  body = JSON.stringify({
    ...(input.ProductArn !== undefined && { ProductArn: input.ProductArn }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1EnableSecurityHubCommand = async (
  input: EnableSecurityHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/accounts";
  let body: any;
  body = JSON.stringify({
    ...(input.EnableDefaultStandards !== undefined && { EnableDefaultStandards: input.EnableDefaultStandards }),
    ...(input.Tags !== undefined && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetEnabledStandardsCommand = async (
  input: GetEnabledStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/standards/get";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.StandardsSubscriptionArns !== undefined && {
      StandardsSubscriptionArns: serializeAws_restJson1StandardsSubscriptionArns(
        input.StandardsSubscriptionArns,
        context
      ),
    }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetFindingsCommand = async (
  input: GetFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/findings";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined && {
      Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context),
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined && {
      SortCriteria: serializeAws_restJson1SortCriteria(input.SortCriteria, context),
    }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetInsightResultsCommand = async (
  input: GetInsightResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/insights/results/{InsightArn+}";
  if (input.InsightArn !== undefined) {
    const labelValue: string = input.InsightArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InsightArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{InsightArn+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: InsightArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetInsightsCommand = async (
  input: GetInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/insights/get";
  let body: any;
  body = JSON.stringify({
    ...(input.InsightArns !== undefined && { InsightArns: serializeAws_restJson1ArnList(input.InsightArns, context) }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetInvitationsCountCommand = async (
  input: GetInvitationsCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/invitations/count";
  let body: any;
  body = "{}";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetMasterAccountCommand = async (
  input: GetMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/master";
  let body: any;
  body = "{}";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetMembersCommand = async (
  input: GetMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/members/get";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined && {
      AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context),
    }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1InviteMembersCommand = async (
  input: InviteMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/members/invite";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined && {
      AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context),
    }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListEnabledProductsForImportCommand = async (
  input: ListEnabledProductsForImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/productSubscriptions";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListInvitationsCommand = async (
  input: ListInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/invitations";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListMembersCommand = async (
  input: ListMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/members";
  const query: any = {
    ...(input.OnlyAssociated !== undefined && { OnlyAssociated: input.OnlyAssociated.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry) }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateActionTargetCommand = async (
  input: UpdateActionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/actionTargets/{ActionTargetArn+}";
  if (input.ActionTargetArn !== undefined) {
    const labelValue: string = input.ActionTargetArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ActionTargetArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{ActionTargetArn+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: ActionTargetArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Name !== undefined && { Name: input.Name }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateFindingsCommand = async (
  input: UpdateFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/findings";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined && {
      Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context),
    }),
    ...(input.Note !== undefined && { Note: serializeAws_restJson1NoteUpdate(input.Note, context) }),
    ...(input.RecordState !== undefined && { RecordState: input.RecordState }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateInsightCommand = async (
  input: UpdateInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/insights/{InsightArn+}";
  if (input.InsightArn !== undefined) {
    const labelValue: string = input.InsightArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InsightArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{InsightArn+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: InsightArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined && {
      Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context),
    }),
    ...(input.GroupByAttribute !== undefined && { GroupByAttribute: input.GroupByAttribute }),
    ...(input.Name !== undefined && { Name: input.Name }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateSecurityHubConfigurationCommand = async (
  input: UpdateSecurityHubConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/accounts";
  let body: any;
  body = JSON.stringify({
    ...(input.AutoEnableControls !== undefined && { AutoEnableControls: input.AutoEnableControls }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateStandardsControlCommand = async (
  input: UpdateStandardsControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/standards/control/{StandardsControlArn+}";
  if (input.StandardsControlArn !== undefined) {
    const labelValue: string = input.StandardsControlArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StandardsControlArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{StandardsControlArn+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: StandardsControlArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ControlStatus !== undefined && { ControlStatus: input.ControlStatus }),
    ...(input.DisabledReason !== undefined && { DisabledReason: input.DisabledReason }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1AcceptInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1AcceptInvitationCommandError(output, context);
  }
  const contents: AcceptInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AcceptInvitationResponse",
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AcceptInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchDisableStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisableStandardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1BatchDisableStandardsCommandError(output, context);
  }
  const contents: BatchDisableStandardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchDisableStandardsResponse",
    StandardsSubscriptions: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.StandardsSubscriptions !== undefined && data.StandardsSubscriptions !== null) {
    contents.StandardsSubscriptions = deserializeAws_restJson1StandardsSubscriptions(
      data.StandardsSubscriptions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchDisableStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisableStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchEnableStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEnableStandardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1BatchEnableStandardsCommandError(output, context);
  }
  const contents: BatchEnableStandardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchEnableStandardsResponse",
    StandardsSubscriptions: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.StandardsSubscriptions !== undefined && data.StandardsSubscriptions !== null) {
    contents.StandardsSubscriptions = deserializeAws_restJson1StandardsSubscriptions(
      data.StandardsSubscriptions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchEnableStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEnableStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchImportFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1BatchImportFindingsCommandError(output, context);
  }
  const contents: BatchImportFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchImportFindingsResponse",
    FailedCount: undefined,
    FailedFindings: undefined,
    SuccessCount: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.FailedCount !== undefined && data.FailedCount !== null) {
    contents.FailedCount = data.FailedCount;
  }
  if (data.FailedFindings !== undefined && data.FailedFindings !== null) {
    contents.FailedFindings = deserializeAws_restJson1ImportFindingsErrorList(data.FailedFindings, context);
  }
  if (data.SuccessCount !== undefined && data.SuccessCount !== null) {
    contents.SuccessCount = data.SuccessCount;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchImportFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchUpdateFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1BatchUpdateFindingsCommandError(output, context);
  }
  const contents: BatchUpdateFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchUpdateFindingsResponse",
    ProcessedFindings: undefined,
    UnprocessedFindings: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ProcessedFindings !== undefined && data.ProcessedFindings !== null) {
    contents.ProcessedFindings = deserializeAws_restJson1AwsSecurityFindingIdentifierList(
      data.ProcessedFindings,
      context
    );
  }
  if (data.UnprocessedFindings !== undefined && data.UnprocessedFindings !== null) {
    contents.UnprocessedFindings = deserializeAws_restJson1BatchUpdateFindingsUnprocessedFindingsList(
      data.UnprocessedFindings,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchUpdateFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateActionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActionTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateActionTargetCommandError(output, context);
  }
  const contents: CreateActionTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateActionTargetResponse",
    ActionTargetArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ActionTargetArn !== undefined && data.ActionTargetArn !== null) {
    contents.ActionTargetArn = data.ActionTargetArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateActionTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActionTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateInsightCommandError(output, context);
  }
  const contents: CreateInsightCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateInsightResponse",
    InsightArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.InsightArn !== undefined && data.InsightArn !== null) {
    contents.InsightArn = data.InsightArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateMembersCommandError(output, context);
  }
  const contents: CreateMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateMembersResponse",
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.UnprocessedAccounts !== undefined && data.UnprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeclineInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeclineInvitationsCommandError(output, context);
  }
  const contents: DeclineInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeclineInvitationsResponse",
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.UnprocessedAccounts !== undefined && data.UnprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeclineInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteActionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActionTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteActionTargetCommandError(output, context);
  }
  const contents: DeleteActionTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteActionTargetResponse",
    ActionTargetArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ActionTargetArn !== undefined && data.ActionTargetArn !== null) {
    contents.ActionTargetArn = data.ActionTargetArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteActionTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActionTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteInsightCommandError(output, context);
  }
  const contents: DeleteInsightCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInsightResponse",
    InsightArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.InsightArn !== undefined && data.InsightArn !== null) {
    contents.InsightArn = data.InsightArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteInvitationsCommandError(output, context);
  }
  const contents: DeleteInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInvitationsResponse",
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.UnprocessedAccounts !== undefined && data.UnprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteMembersCommandError(output, context);
  }
  const contents: DeleteMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteMembersResponse",
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.UnprocessedAccounts !== undefined && data.UnprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeActionTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActionTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeActionTargetsCommandError(output, context);
  }
  const contents: DescribeActionTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeActionTargetsResponse",
    ActionTargets: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ActionTargets !== undefined && data.ActionTargets !== null) {
    contents.ActionTargets = deserializeAws_restJson1ActionTargetList(data.ActionTargets, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeActionTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActionTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeHubCommandError(output, context);
  }
  const contents: DescribeHubCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeHubResponse",
    AutoEnableControls: undefined,
    HubArn: undefined,
    SubscribedAt: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AutoEnableControls !== undefined && data.AutoEnableControls !== null) {
    contents.AutoEnableControls = data.AutoEnableControls;
  }
  if (data.HubArn !== undefined && data.HubArn !== null) {
    contents.HubArn = data.HubArn;
  }
  if (data.SubscribedAt !== undefined && data.SubscribedAt !== null) {
    contents.SubscribedAt = data.SubscribedAt;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeProductsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeProductsCommandError(output, context);
  }
  const contents: DescribeProductsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeProductsResponse",
    NextToken: undefined,
    Products: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Products !== undefined && data.Products !== null) {
    contents.Products = deserializeAws_restJson1ProductsList(data.Products, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeProductsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeStandardsCommandError(output, context);
  }
  const contents: DescribeStandardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStandardsResponse",
    NextToken: undefined,
    Standards: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Standards !== undefined && data.Standards !== null) {
    contents.Standards = deserializeAws_restJson1Standards(data.Standards, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeStandardsControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeStandardsControlsCommandError(output, context);
  }
  const contents: DescribeStandardsControlsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStandardsControlsResponse",
    Controls: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Controls !== undefined && data.Controls !== null) {
    contents.Controls = deserializeAws_restJson1StandardsControls(data.Controls, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeStandardsControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisableImportFindingsForProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableImportFindingsForProductCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DisableImportFindingsForProductCommandError(output, context);
  }
  const contents: DisableImportFindingsForProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisableImportFindingsForProductResponse",
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisableImportFindingsForProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableImportFindingsForProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisableSecurityHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSecurityHubCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DisableSecurityHubCommandError(output, context);
  }
  const contents: DisableSecurityHubCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisableSecurityHubResponse",
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisableSecurityHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSecurityHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisassociateFromMasterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromMasterAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DisassociateFromMasterAccountCommandError(output, context);
  }
  const contents: DisassociateFromMasterAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateFromMasterAccountResponse",
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateFromMasterAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromMasterAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisassociateMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DisassociateMembersCommandError(output, context);
  }
  const contents: DisassociateMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateMembersResponse",
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1EnableImportFindingsForProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableImportFindingsForProductCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1EnableImportFindingsForProductCommandError(output, context);
  }
  const contents: EnableImportFindingsForProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnableImportFindingsForProductResponse",
    ProductSubscriptionArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ProductSubscriptionArn !== undefined && data.ProductSubscriptionArn !== null) {
    contents.ProductSubscriptionArn = data.ProductSubscriptionArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1EnableImportFindingsForProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableImportFindingsForProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1EnableSecurityHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSecurityHubCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1EnableSecurityHubCommandError(output, context);
  }
  const contents: EnableSecurityHubCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnableSecurityHubResponse",
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1EnableSecurityHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSecurityHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetEnabledStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnabledStandardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetEnabledStandardsCommandError(output, context);
  }
  const contents: GetEnabledStandardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEnabledStandardsResponse",
    NextToken: undefined,
    StandardsSubscriptions: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.StandardsSubscriptions !== undefined && data.StandardsSubscriptions !== null) {
    contents.StandardsSubscriptions = deserializeAws_restJson1StandardsSubscriptions(
      data.StandardsSubscriptions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEnabledStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnabledStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetFindingsCommandError(output, context);
  }
  const contents: GetFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFindingsResponse",
    Findings: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Findings !== undefined && data.Findings !== null) {
    contents.Findings = deserializeAws_restJson1AwsSecurityFindingList(data.Findings, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetInsightResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightResultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetInsightResultsCommandError(output, context);
  }
  const contents: GetInsightResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInsightResultsResponse",
    InsightResults: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.InsightResults !== undefined && data.InsightResults !== null) {
    contents.InsightResults = deserializeAws_restJson1InsightResults(data.InsightResults, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetInsightResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetInsightsCommandError(output, context);
  }
  const contents: GetInsightsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInsightsResponse",
    Insights: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Insights !== undefined && data.Insights !== null) {
    contents.Insights = deserializeAws_restJson1InsightList(data.Insights, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetInvitationsCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationsCountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetInvitationsCountCommandError(output, context);
  }
  const contents: GetInvitationsCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInvitationsCountResponse",
    InvitationsCount: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.InvitationsCount !== undefined && data.InvitationsCount !== null) {
    contents.InvitationsCount = data.InvitationsCount;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetInvitationsCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationsCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetMasterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMasterAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetMasterAccountCommandError(output, context);
  }
  const contents: GetMasterAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMasterAccountResponse",
    Master: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Master !== undefined && data.Master !== null) {
    contents.Master = deserializeAws_restJson1Invitation(data.Master, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMasterAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMasterAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetMembersCommandError(output, context);
  }
  const contents: GetMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMembersResponse",
    Members: undefined,
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Members !== undefined && data.Members !== null) {
    contents.Members = deserializeAws_restJson1MemberList(data.Members, context);
  }
  if (data.UnprocessedAccounts !== undefined && data.UnprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1InviteMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1InviteMembersCommandError(output, context);
  }
  const contents: InviteMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InviteMembersResponse",
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.UnprocessedAccounts !== undefined && data.UnprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1InviteMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListEnabledProductsForImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnabledProductsForImportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListEnabledProductsForImportCommandError(output, context);
  }
  const contents: ListEnabledProductsForImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEnabledProductsForImportResponse",
    NextToken: undefined,
    ProductSubscriptions: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.ProductSubscriptions !== undefined && data.ProductSubscriptions !== null) {
    contents.ProductSubscriptions = deserializeAws_restJson1ProductSubscriptionArnList(
      data.ProductSubscriptions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListEnabledProductsForImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnabledProductsForImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListInvitationsCommandError(output, context);
  }
  const contents: ListInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInvitationsResponse",
    Invitations: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Invitations !== undefined && data.Invitations !== null) {
    contents.Invitations = deserializeAws_restJson1InvitationList(data.Invitations, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListMembersCommandError(output, context);
  }
  const contents: ListMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMembersResponse",
    Members: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Members !== undefined && data.Members !== null) {
    contents.Members = deserializeAws_restJson1MemberList(data.Members, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateActionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateActionTargetCommandError(output, context);
  }
  const contents: UpdateActionTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateActionTargetResponse",
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateActionTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateFindingsCommandError(output, context);
  }
  const contents: UpdateFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateFindingsResponse",
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateInsightCommandError(output, context);
  }
  const contents: UpdateInsightCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateInsightResponse",
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateSecurityHubConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityHubConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateSecurityHubConfigurationCommandError(output, context);
  }
  const contents: UpdateSecurityHubConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSecurityHubConfigurationResponse",
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSecurityHubConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityHubConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateStandardsControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStandardsControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateStandardsControlCommandError(output, context);
  }
  const contents: UpdateStandardsControlCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateStandardsControlResponse",
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateStandardsControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStandardsControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const contents: InternalException = {
    name: "InternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidAccessExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAccessException> => {
  const contents: InvalidAccessException = {
    name: "InvalidAccessException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const contents: ResourceConflictException = {
    name: "ResourceConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1AccountDetails = (input: AccountDetails, context: __SerdeContext): any => {
  return {
    ...(input.AccountId !== undefined && { AccountId: input.AccountId }),
    ...(input.Email !== undefined && { Email: input.Email }),
  };
};

const serializeAws_restJson1AccountDetailsList = (input: AccountDetails[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1AccountDetails(entry, context));
};

const serializeAws_restJson1AccountIdList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_restJson1ArnList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_restJson1AvailabilityZone = (input: AvailabilityZone, context: __SerdeContext): any => {
  return {
    ...(input.SubnetId !== undefined && { SubnetId: input.SubnetId }),
    ...(input.ZoneName !== undefined && { ZoneName: input.ZoneName }),
  };
};

const serializeAws_restJson1AvailabilityZones = (input: AvailabilityZone[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1AvailabilityZone(entry, context));
};

const serializeAws_restJson1AwsAutoScalingAutoScalingGroupDetails = (
  input: AwsAutoScalingAutoScalingGroupDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CreatedTime !== undefined && { CreatedTime: input.CreatedTime }),
    ...(input.HealthCheckGracePeriod !== undefined && { HealthCheckGracePeriod: input.HealthCheckGracePeriod }),
    ...(input.HealthCheckType !== undefined && { HealthCheckType: input.HealthCheckType }),
    ...(input.LaunchConfigurationName !== undefined && { LaunchConfigurationName: input.LaunchConfigurationName }),
    ...(input.LoadBalancerNames !== undefined && {
      LoadBalancerNames: serializeAws_restJson1StringList(input.LoadBalancerNames, context),
    }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionDetails = (
  input: AwsCloudFrontDistributionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.ETag !== undefined && { ETag: input.ETag }),
    ...(input.LastModifiedTime !== undefined && { LastModifiedTime: input.LastModifiedTime }),
    ...(input.Logging !== undefined && {
      Logging: serializeAws_restJson1AwsCloudFrontDistributionLogging(input.Logging, context),
    }),
    ...(input.Origins !== undefined && {
      Origins: serializeAws_restJson1AwsCloudFrontDistributionOrigins(input.Origins, context),
    }),
    ...(input.Status !== undefined && { Status: input.Status }),
    ...(input.WebAclId !== undefined && { WebAclId: input.WebAclId }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionLogging = (
  input: AwsCloudFrontDistributionLogging,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bucket !== undefined && { Bucket: input.Bucket }),
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.IncludeCookies !== undefined && { IncludeCookies: input.IncludeCookies }),
    ...(input.Prefix !== undefined && { Prefix: input.Prefix }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginItem = (
  input: AwsCloudFrontDistributionOriginItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.OriginPath !== undefined && { OriginPath: input.OriginPath }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginItemList = (
  input: AwsCloudFrontDistributionOriginItem[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1AwsCloudFrontDistributionOriginItem(entry, context));
};

const serializeAws_restJson1AwsCloudFrontDistributionOrigins = (
  input: AwsCloudFrontDistributionOrigins,
  context: __SerdeContext
): any => {
  return {
    ...(input.Items !== undefined && {
      Items: serializeAws_restJson1AwsCloudFrontDistributionOriginItemList(input.Items, context),
    }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectDetails = (
  input: AwsCodeBuildProjectDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionKey !== undefined && { EncryptionKey: input.EncryptionKey }),
    ...(input.Environment !== undefined && {
      Environment: serializeAws_restJson1AwsCodeBuildProjectEnvironment(input.Environment, context),
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ServiceRole !== undefined && { ServiceRole: input.ServiceRole }),
    ...(input.Source !== undefined && {
      Source: serializeAws_restJson1AwsCodeBuildProjectSource(input.Source, context),
    }),
    ...(input.VpcConfig !== undefined && {
      VpcConfig: serializeAws_restJson1AwsCodeBuildProjectVpcConfig(input.VpcConfig, context),
    }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectEnvironment = (
  input: AwsCodeBuildProjectEnvironment,
  context: __SerdeContext
): any => {
  return {
    ...(input.Certificate !== undefined && { Certificate: input.Certificate }),
    ...(input.ImagePullCredentialsType !== undefined && { ImagePullCredentialsType: input.ImagePullCredentialsType }),
    ...(input.RegistryCredential !== undefined && {
      RegistryCredential: serializeAws_restJson1AwsCodeBuildProjectEnvironmentRegistryCredential(
        input.RegistryCredential,
        context
      ),
    }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectEnvironmentRegistryCredential = (
  input: AwsCodeBuildProjectEnvironmentRegistryCredential,
  context: __SerdeContext
): any => {
  return {
    ...(input.Credential !== undefined && { Credential: input.Credential }),
    ...(input.CredentialProvider !== undefined && { CredentialProvider: input.CredentialProvider }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectSource = (
  input: AwsCodeBuildProjectSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.GitCloneDepth !== undefined && { GitCloneDepth: input.GitCloneDepth }),
    ...(input.InsecureSsl !== undefined && { InsecureSsl: input.InsecureSsl }),
    ...(input.Location !== undefined && { Location: input.Location }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectVpcConfig = (
  input: AwsCodeBuildProjectVpcConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupIds !== undefined && {
      SecurityGroupIds: serializeAws_restJson1NonEmptyStringList(input.SecurityGroupIds, context),
    }),
    ...(input.Subnets !== undefined && { Subnets: serializeAws_restJson1NonEmptyStringList(input.Subnets, context) }),
    ...(input.VpcId !== undefined && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsEc2InstanceDetails = (input: AwsEc2InstanceDetails, context: __SerdeContext): any => {
  return {
    ...(input.IamInstanceProfileArn !== undefined && { IamInstanceProfileArn: input.IamInstanceProfileArn }),
    ...(input.ImageId !== undefined && { ImageId: input.ImageId }),
    ...(input.IpV4Addresses !== undefined && {
      IpV4Addresses: serializeAws_restJson1StringList(input.IpV4Addresses, context),
    }),
    ...(input.IpV6Addresses !== undefined && {
      IpV6Addresses: serializeAws_restJson1StringList(input.IpV6Addresses, context),
    }),
    ...(input.KeyName !== undefined && { KeyName: input.KeyName }),
    ...(input.LaunchedAt !== undefined && { LaunchedAt: input.LaunchedAt }),
    ...(input.SubnetId !== undefined && { SubnetId: input.SubnetId }),
    ...(input.Type !== undefined && { Type: input.Type }),
    ...(input.VpcId !== undefined && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsEc2NetworkInterfaceAttachment = (
  input: AwsEc2NetworkInterfaceAttachment,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttachTime !== undefined && { AttachTime: input.AttachTime }),
    ...(input.AttachmentId !== undefined && { AttachmentId: input.AttachmentId }),
    ...(input.DeleteOnTermination !== undefined && { DeleteOnTermination: input.DeleteOnTermination }),
    ...(input.DeviceIndex !== undefined && { DeviceIndex: input.DeviceIndex }),
    ...(input.InstanceId !== undefined && { InstanceId: input.InstanceId }),
    ...(input.InstanceOwnerId !== undefined && { InstanceOwnerId: input.InstanceOwnerId }),
    ...(input.Status !== undefined && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsEc2NetworkInterfaceDetails = (
  input: AwsEc2NetworkInterfaceDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attachment !== undefined && {
      Attachment: serializeAws_restJson1AwsEc2NetworkInterfaceAttachment(input.Attachment, context),
    }),
    ...(input.NetworkInterfaceId !== undefined && { NetworkInterfaceId: input.NetworkInterfaceId }),
    ...(input.SecurityGroups !== undefined && {
      SecurityGroups: serializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroupList(input.SecurityGroups, context),
    }),
    ...(input.SourceDestCheck !== undefined && { SourceDestCheck: input.SourceDestCheck }),
  };
};

const serializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroup = (
  input: AwsEc2NetworkInterfaceSecurityGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId !== undefined && { GroupId: input.GroupId }),
    ...(input.GroupName !== undefined && { GroupName: input.GroupName }),
  };
};

const serializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroupList = (
  input: AwsEc2NetworkInterfaceSecurityGroup[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroup(entry, context));
};

const serializeAws_restJson1AwsEc2SecurityGroupDetails = (
  input: AwsEc2SecurityGroupDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId !== undefined && { GroupId: input.GroupId }),
    ...(input.GroupName !== undefined && { GroupName: input.GroupName }),
    ...(input.IpPermissions !== undefined && {
      IpPermissions: serializeAws_restJson1AwsEc2SecurityGroupIpPermissionList(input.IpPermissions, context),
    }),
    ...(input.IpPermissionsEgress !== undefined && {
      IpPermissionsEgress: serializeAws_restJson1AwsEc2SecurityGroupIpPermissionList(
        input.IpPermissionsEgress,
        context
      ),
    }),
    ...(input.OwnerId !== undefined && { OwnerId: input.OwnerId }),
    ...(input.VpcId !== undefined && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsEc2SecurityGroupIpPermission = (
  input: AwsEc2SecurityGroupIpPermission,
  context: __SerdeContext
): any => {
  return {
    ...(input.FromPort !== undefined && { FromPort: input.FromPort }),
    ...(input.IpProtocol !== undefined && { IpProtocol: input.IpProtocol }),
    ...(input.IpRanges !== undefined && {
      IpRanges: serializeAws_restJson1AwsEc2SecurityGroupIpRangeList(input.IpRanges, context),
    }),
    ...(input.Ipv6Ranges !== undefined && {
      Ipv6Ranges: serializeAws_restJson1AwsEc2SecurityGroupIpv6RangeList(input.Ipv6Ranges, context),
    }),
    ...(input.PrefixListIds !== undefined && {
      PrefixListIds: serializeAws_restJson1AwsEc2SecurityGroupPrefixListIdList(input.PrefixListIds, context),
    }),
    ...(input.ToPort !== undefined && { ToPort: input.ToPort }),
    ...(input.UserIdGroupPairs !== undefined && {
      UserIdGroupPairs: serializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPairList(input.UserIdGroupPairs, context),
    }),
  };
};

const serializeAws_restJson1AwsEc2SecurityGroupIpPermissionList = (
  input: AwsEc2SecurityGroupIpPermission[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1AwsEc2SecurityGroupIpPermission(entry, context));
};

const serializeAws_restJson1AwsEc2SecurityGroupIpRange = (
  input: AwsEc2SecurityGroupIpRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.CidrIp !== undefined && { CidrIp: input.CidrIp }),
  };
};

const serializeAws_restJson1AwsEc2SecurityGroupIpRangeList = (
  input: AwsEc2SecurityGroupIpRange[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1AwsEc2SecurityGroupIpRange(entry, context));
};

const serializeAws_restJson1AwsEc2SecurityGroupIpv6Range = (
  input: AwsEc2SecurityGroupIpv6Range,
  context: __SerdeContext
): any => {
  return {
    ...(input.CidrIpv6 !== undefined && { CidrIpv6: input.CidrIpv6 }),
  };
};

const serializeAws_restJson1AwsEc2SecurityGroupIpv6RangeList = (
  input: AwsEc2SecurityGroupIpv6Range[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1AwsEc2SecurityGroupIpv6Range(entry, context));
};

const serializeAws_restJson1AwsEc2SecurityGroupPrefixListId = (
  input: AwsEc2SecurityGroupPrefixListId,
  context: __SerdeContext
): any => {
  return {
    ...(input.PrefixListId !== undefined && { PrefixListId: input.PrefixListId }),
  };
};

const serializeAws_restJson1AwsEc2SecurityGroupPrefixListIdList = (
  input: AwsEc2SecurityGroupPrefixListId[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1AwsEc2SecurityGroupPrefixListId(entry, context));
};

const serializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPair = (
  input: AwsEc2SecurityGroupUserIdGroupPair,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId !== undefined && { GroupId: input.GroupId }),
    ...(input.GroupName !== undefined && { GroupName: input.GroupName }),
    ...(input.PeeringStatus !== undefined && { PeeringStatus: input.PeeringStatus }),
    ...(input.UserId !== undefined && { UserId: input.UserId }),
    ...(input.VpcId !== undefined && { VpcId: input.VpcId }),
    ...(input.VpcPeeringConnectionId !== undefined && { VpcPeeringConnectionId: input.VpcPeeringConnectionId }),
  };
};

const serializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPairList = (
  input: AwsEc2SecurityGroupUserIdGroupPair[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPair(entry, context));
};

const serializeAws_restJson1AwsEc2VolumeAttachment = (input: AwsEc2VolumeAttachment, context: __SerdeContext): any => {
  return {
    ...(input.AttachTime !== undefined && { AttachTime: input.AttachTime }),
    ...(input.DeleteOnTermination !== undefined && { DeleteOnTermination: input.DeleteOnTermination }),
    ...(input.InstanceId !== undefined && { InstanceId: input.InstanceId }),
    ...(input.Status !== undefined && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsEc2VolumeAttachmentList = (
  input: AwsEc2VolumeAttachment[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1AwsEc2VolumeAttachment(entry, context));
};

const serializeAws_restJson1AwsEc2VolumeDetails = (input: AwsEc2VolumeDetails, context: __SerdeContext): any => {
  return {
    ...(input.Attachments !== undefined && {
      Attachments: serializeAws_restJson1AwsEc2VolumeAttachmentList(input.Attachments, context),
    }),
    ...(input.CreateTime !== undefined && { CreateTime: input.CreateTime }),
    ...(input.Encrypted !== undefined && { Encrypted: input.Encrypted }),
    ...(input.KmsKeyId !== undefined && { KmsKeyId: input.KmsKeyId }),
    ...(input.Size !== undefined && { Size: input.Size }),
    ...(input.SnapshotId !== undefined && { SnapshotId: input.SnapshotId }),
    ...(input.Status !== undefined && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsEc2VpcDetails = (input: AwsEc2VpcDetails, context: __SerdeContext): any => {
  return {
    ...(input.CidrBlockAssociationSet !== undefined && {
      CidrBlockAssociationSet: serializeAws_restJson1CidrBlockAssociationList(input.CidrBlockAssociationSet, context),
    }),
    ...(input.DhcpOptionsId !== undefined && { DhcpOptionsId: input.DhcpOptionsId }),
    ...(input.Ipv6CidrBlockAssociationSet !== undefined && {
      Ipv6CidrBlockAssociationSet: serializeAws_restJson1Ipv6CidrBlockAssociationList(
        input.Ipv6CidrBlockAssociationSet,
        context
      ),
    }),
    ...(input.State !== undefined && { State: input.State }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainDetails = (
  input: AwsElasticsearchDomainDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessPolicies !== undefined && { AccessPolicies: input.AccessPolicies }),
    ...(input.DomainEndpointOptions !== undefined && {
      DomainEndpointOptions: serializeAws_restJson1AwsElasticsearchDomainDomainEndpointOptions(
        input.DomainEndpointOptions,
        context
      ),
    }),
    ...(input.DomainId !== undefined && { DomainId: input.DomainId }),
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.ElasticsearchVersion !== undefined && { ElasticsearchVersion: input.ElasticsearchVersion }),
    ...(input.EncryptionAtRestOptions !== undefined && {
      EncryptionAtRestOptions: serializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions(
        input.EncryptionAtRestOptions,
        context
      ),
    }),
    ...(input.Endpoint !== undefined && { Endpoint: input.Endpoint }),
    ...(input.Endpoints !== undefined && { Endpoints: serializeAws_restJson1FieldMap(input.Endpoints, context) }),
    ...(input.NodeToNodeEncryptionOptions !== undefined && {
      NodeToNodeEncryptionOptions: serializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions(
        input.NodeToNodeEncryptionOptions,
        context
      ),
    }),
    ...(input.VPCOptions !== undefined && {
      VPCOptions: serializeAws_restJson1AwsElasticsearchDomainVPCOptions(input.VPCOptions, context),
    }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainDomainEndpointOptions = (
  input: AwsElasticsearchDomainDomainEndpointOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnforceHTTPS !== undefined && { EnforceHTTPS: input.EnforceHTTPS }),
    ...(input.TLSSecurityPolicy !== undefined && { TLSSecurityPolicy: input.TLSSecurityPolicy }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions = (
  input: AwsElasticsearchDomainEncryptionAtRestOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.KmsKeyId !== undefined && { KmsKeyId: input.KmsKeyId }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions = (
  input: AwsElasticsearchDomainNodeToNodeEncryptionOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainVPCOptions = (
  input: AwsElasticsearchDomainVPCOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZones !== undefined && {
      AvailabilityZones: serializeAws_restJson1NonEmptyStringList(input.AvailabilityZones, context),
    }),
    ...(input.SecurityGroupIds !== undefined && {
      SecurityGroupIds: serializeAws_restJson1NonEmptyStringList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds !== undefined && {
      SubnetIds: serializeAws_restJson1NonEmptyStringList(input.SubnetIds, context),
    }),
    ...(input.VPCId !== undefined && { VPCId: input.VPCId }),
  };
};

const serializeAws_restJson1AwsElbv2LoadBalancerDetails = (
  input: AwsElbv2LoadBalancerDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZones !== undefined && {
      AvailabilityZones: serializeAws_restJson1AvailabilityZones(input.AvailabilityZones, context),
    }),
    ...(input.CanonicalHostedZoneId !== undefined && { CanonicalHostedZoneId: input.CanonicalHostedZoneId }),
    ...(input.CreatedTime !== undefined && { CreatedTime: input.CreatedTime }),
    ...(input.DNSName !== undefined && { DNSName: input.DNSName }),
    ...(input.IpAddressType !== undefined && { IpAddressType: input.IpAddressType }),
    ...(input.Scheme !== undefined && { Scheme: input.Scheme }),
    ...(input.SecurityGroups !== undefined && {
      SecurityGroups: serializeAws_restJson1SecurityGroups(input.SecurityGroups, context),
    }),
    ...(input.State !== undefined && { State: serializeAws_restJson1LoadBalancerState(input.State, context) }),
    ...(input.Type !== undefined && { Type: input.Type }),
    ...(input.VpcId !== undefined && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsIamAccessKeyDetails = (input: AwsIamAccessKeyDetails, context: __SerdeContext): any => {
  return {
    ...(input.CreatedAt !== undefined && { CreatedAt: input.CreatedAt }),
    ...(input.PrincipalId !== undefined && { PrincipalId: input.PrincipalId }),
    ...(input.PrincipalName !== undefined && { PrincipalName: input.PrincipalName }),
    ...(input.PrincipalType !== undefined && { PrincipalType: input.PrincipalType }),
    ...(input.Status !== undefined && { Status: input.Status }),
    ...(input.UserName !== undefined && { UserName: input.UserName }),
  };
};

const serializeAws_restJson1AwsIamRoleDetails = (input: AwsIamRoleDetails, context: __SerdeContext): any => {
  return {
    ...(input.AssumeRolePolicyDocument !== undefined && { AssumeRolePolicyDocument: input.AssumeRolePolicyDocument }),
    ...(input.CreateDate !== undefined && { CreateDate: input.CreateDate }),
    ...(input.MaxSessionDuration !== undefined && { MaxSessionDuration: input.MaxSessionDuration }),
    ...(input.Path !== undefined && { Path: input.Path }),
    ...(input.RoleId !== undefined && { RoleId: input.RoleId }),
    ...(input.RoleName !== undefined && { RoleName: input.RoleName }),
  };
};

const serializeAws_restJson1AwsKmsKeyDetails = (input: AwsKmsKeyDetails, context: __SerdeContext): any => {
  return {
    ...(input.AWSAccountId !== undefined && { AWSAccountId: input.AWSAccountId }),
    ...(input.CreationDate !== undefined && { CreationDate: input.CreationDate }),
    ...(input.KeyId !== undefined && { KeyId: input.KeyId }),
    ...(input.KeyManager !== undefined && { KeyManager: input.KeyManager }),
    ...(input.KeyState !== undefined && { KeyState: input.KeyState }),
    ...(input.Origin !== undefined && { Origin: input.Origin }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionCode = (input: AwsLambdaFunctionCode, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket !== undefined && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key !== undefined && { S3Key: input.S3Key }),
    ...(input.S3ObjectVersion !== undefined && { S3ObjectVersion: input.S3ObjectVersion }),
    ...(input.ZipFile !== undefined && { ZipFile: input.ZipFile }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionDeadLetterConfig = (
  input: AwsLambdaFunctionDeadLetterConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.TargetArn !== undefined && { TargetArn: input.TargetArn }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionDetails = (
  input: AwsLambdaFunctionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Code !== undefined && { Code: serializeAws_restJson1AwsLambdaFunctionCode(input.Code, context) }),
    ...(input.CodeSha256 !== undefined && { CodeSha256: input.CodeSha256 }),
    ...(input.DeadLetterConfig !== undefined && {
      DeadLetterConfig: serializeAws_restJson1AwsLambdaFunctionDeadLetterConfig(input.DeadLetterConfig, context),
    }),
    ...(input.Environment !== undefined && {
      Environment: serializeAws_restJson1AwsLambdaFunctionEnvironment(input.Environment, context),
    }),
    ...(input.FunctionName !== undefined && { FunctionName: input.FunctionName }),
    ...(input.Handler !== undefined && { Handler: input.Handler }),
    ...(input.KmsKeyArn !== undefined && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.LastModified !== undefined && { LastModified: input.LastModified }),
    ...(input.Layers !== undefined && {
      Layers: serializeAws_restJson1AwsLambdaFunctionLayerList(input.Layers, context),
    }),
    ...(input.MasterArn !== undefined && { MasterArn: input.MasterArn }),
    ...(input.MemorySize !== undefined && { MemorySize: input.MemorySize }),
    ...(input.RevisionId !== undefined && { RevisionId: input.RevisionId }),
    ...(input.Role !== undefined && { Role: input.Role }),
    ...(input.Runtime !== undefined && { Runtime: input.Runtime }),
    ...(input.Timeout !== undefined && { Timeout: input.Timeout }),
    ...(input.TracingConfig !== undefined && {
      TracingConfig: serializeAws_restJson1AwsLambdaFunctionTracingConfig(input.TracingConfig, context),
    }),
    ...(input.Version !== undefined && { Version: input.Version }),
    ...(input.VpcConfig !== undefined && {
      VpcConfig: serializeAws_restJson1AwsLambdaFunctionVpcConfig(input.VpcConfig, context),
    }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionEnvironment = (
  input: AwsLambdaFunctionEnvironment,
  context: __SerdeContext
): any => {
  return {
    ...(input.Error !== undefined && {
      Error: serializeAws_restJson1AwsLambdaFunctionEnvironmentError(input.Error, context),
    }),
    ...(input.Variables !== undefined && { Variables: serializeAws_restJson1FieldMap(input.Variables, context) }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionEnvironmentError = (
  input: AwsLambdaFunctionEnvironmentError,
  context: __SerdeContext
): any => {
  return {
    ...(input.ErrorCode !== undefined && { ErrorCode: input.ErrorCode }),
    ...(input.Message !== undefined && { Message: input.Message }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionLayer = (input: AwsLambdaFunctionLayer, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && { Arn: input.Arn }),
    ...(input.CodeSize !== undefined && { CodeSize: input.CodeSize }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionLayerList = (
  input: AwsLambdaFunctionLayer[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1AwsLambdaFunctionLayer(entry, context));
};

const serializeAws_restJson1AwsLambdaFunctionTracingConfig = (
  input: AwsLambdaFunctionTracingConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Mode !== undefined && { Mode: input.Mode }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionVpcConfig = (
  input: AwsLambdaFunctionVpcConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupIds !== undefined && {
      SecurityGroupIds: serializeAws_restJson1NonEmptyStringList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds !== undefined && {
      SubnetIds: serializeAws_restJson1NonEmptyStringList(input.SubnetIds, context),
    }),
    ...(input.VpcId !== undefined && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsLambdaLayerVersionDetails = (
  input: AwsLambdaLayerVersionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CompatibleRuntimes !== undefined && {
      CompatibleRuntimes: serializeAws_restJson1NonEmptyStringList(input.CompatibleRuntimes, context),
    }),
    ...(input.CreatedDate !== undefined && { CreatedDate: input.CreatedDate }),
    ...(input.Version !== undefined && { Version: input.Version }),
  };
};

const serializeAws_restJson1AwsRdsDbInstanceAssociatedRole = (
  input: AwsRdsDbInstanceAssociatedRole,
  context: __SerdeContext
): any => {
  return {
    ...(input.FeatureName !== undefined && { FeatureName: input.FeatureName }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
    ...(input.Status !== undefined && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRdsDbInstanceAssociatedRoles = (
  input: AwsRdsDbInstanceAssociatedRole[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1AwsRdsDbInstanceAssociatedRole(entry, context));
};

const serializeAws_restJson1AwsRdsDbInstanceDetails = (
  input: AwsRdsDbInstanceDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociatedRoles !== undefined && {
      AssociatedRoles: serializeAws_restJson1AwsRdsDbInstanceAssociatedRoles(input.AssociatedRoles, context),
    }),
    ...(input.CACertificateIdentifier !== undefined && { CACertificateIdentifier: input.CACertificateIdentifier }),
    ...(input.DBClusterIdentifier !== undefined && { DBClusterIdentifier: input.DBClusterIdentifier }),
    ...(input.DBInstanceClass !== undefined && { DBInstanceClass: input.DBInstanceClass }),
    ...(input.DBInstanceIdentifier !== undefined && { DBInstanceIdentifier: input.DBInstanceIdentifier }),
    ...(input.DBName !== undefined && { DBName: input.DBName }),
    ...(input.DbInstancePort !== undefined && { DbInstancePort: input.DbInstancePort }),
    ...(input.DbiResourceId !== undefined && { DbiResourceId: input.DbiResourceId }),
    ...(input.DeletionProtection !== undefined && { DeletionProtection: input.DeletionProtection }),
    ...(input.Endpoint !== undefined && {
      Endpoint: serializeAws_restJson1AwsRdsDbInstanceEndpoint(input.Endpoint, context),
    }),
    ...(input.Engine !== undefined && { Engine: input.Engine }),
    ...(input.EngineVersion !== undefined && { EngineVersion: input.EngineVersion }),
    ...(input.IAMDatabaseAuthenticationEnabled !== undefined && {
      IAMDatabaseAuthenticationEnabled: input.IAMDatabaseAuthenticationEnabled,
    }),
    ...(input.InstanceCreateTime !== undefined && { InstanceCreateTime: input.InstanceCreateTime }),
    ...(input.KmsKeyId !== undefined && { KmsKeyId: input.KmsKeyId }),
    ...(input.PubliclyAccessible !== undefined && { PubliclyAccessible: input.PubliclyAccessible }),
    ...(input.StorageEncrypted !== undefined && { StorageEncrypted: input.StorageEncrypted }),
    ...(input.TdeCredentialArn !== undefined && { TdeCredentialArn: input.TdeCredentialArn }),
    ...(input.VpcSecurityGroups !== undefined && {
      VpcSecurityGroups: serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups(input.VpcSecurityGroups, context),
    }),
  };
};

const serializeAws_restJson1AwsRdsDbInstanceEndpoint = (
  input: AwsRdsDbInstanceEndpoint,
  context: __SerdeContext
): any => {
  return {
    ...(input.Address !== undefined && { Address: input.Address }),
    ...(input.HostedZoneId !== undefined && { HostedZoneId: input.HostedZoneId }),
    ...(input.Port !== undefined && { Port: input.Port }),
  };
};

const serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroup = (
  input: AwsRdsDbInstanceVpcSecurityGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.Status !== undefined && { Status: input.Status }),
    ...(input.VpcSecurityGroupId !== undefined && { VpcSecurityGroupId: input.VpcSecurityGroupId }),
  };
};

const serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups = (
  input: AwsRdsDbInstanceVpcSecurityGroup[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroup(entry, context));
};

const serializeAws_restJson1AwsS3BucketDetails = (input: AwsS3BucketDetails, context: __SerdeContext): any => {
  return {
    ...(input.CreatedAt !== undefined && { CreatedAt: input.CreatedAt }),
    ...(input.OwnerId !== undefined && { OwnerId: input.OwnerId }),
    ...(input.OwnerName !== undefined && { OwnerName: input.OwnerName }),
    ...(input.ServerSideEncryptionConfiguration !== undefined && {
      ServerSideEncryptionConfiguration: serializeAws_restJson1AwsS3BucketServerSideEncryptionConfiguration(
        input.ServerSideEncryptionConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsS3BucketServerSideEncryptionByDefault = (
  input: AwsS3BucketServerSideEncryptionByDefault,
  context: __SerdeContext
): any => {
  return {
    ...(input.KMSMasterKeyID !== undefined && { KMSMasterKeyID: input.KMSMasterKeyID }),
    ...(input.SSEAlgorithm !== undefined && { SSEAlgorithm: input.SSEAlgorithm }),
  };
};

const serializeAws_restJson1AwsS3BucketServerSideEncryptionConfiguration = (
  input: AwsS3BucketServerSideEncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Rules !== undefined && {
      Rules: serializeAws_restJson1AwsS3BucketServerSideEncryptionRules(input.Rules, context),
    }),
  };
};

const serializeAws_restJson1AwsS3BucketServerSideEncryptionRule = (
  input: AwsS3BucketServerSideEncryptionRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplyServerSideEncryptionByDefault !== undefined && {
      ApplyServerSideEncryptionByDefault: serializeAws_restJson1AwsS3BucketServerSideEncryptionByDefault(
        input.ApplyServerSideEncryptionByDefault,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsS3BucketServerSideEncryptionRules = (
  input: AwsS3BucketServerSideEncryptionRule[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1AwsS3BucketServerSideEncryptionRule(entry, context));
};

const serializeAws_restJson1AwsS3ObjectDetails = (input: AwsS3ObjectDetails, context: __SerdeContext): any => {
  return {
    ...(input.ContentType !== undefined && { ContentType: input.ContentType }),
    ...(input.ETag !== undefined && { ETag: input.ETag }),
    ...(input.LastModified !== undefined && { LastModified: input.LastModified }),
    ...(input.SSEKMSKeyId !== undefined && { SSEKMSKeyId: input.SSEKMSKeyId }),
    ...(input.ServerSideEncryption !== undefined && { ServerSideEncryption: input.ServerSideEncryption }),
    ...(input.VersionId !== undefined && { VersionId: input.VersionId }),
  };
};

const serializeAws_restJson1AwsSecurityFinding = (input: AwsSecurityFinding, context: __SerdeContext): any => {
  return {
    ...(input.AwsAccountId !== undefined && { AwsAccountId: input.AwsAccountId }),
    ...(input.Compliance !== undefined && { Compliance: serializeAws_restJson1Compliance(input.Compliance, context) }),
    ...(input.Confidence !== undefined && { Confidence: input.Confidence }),
    ...(input.CreatedAt !== undefined && { CreatedAt: input.CreatedAt }),
    ...(input.Criticality !== undefined && { Criticality: input.Criticality }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.FirstObservedAt !== undefined && { FirstObservedAt: input.FirstObservedAt }),
    ...(input.GeneratorId !== undefined && { GeneratorId: input.GeneratorId }),
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.LastObservedAt !== undefined && { LastObservedAt: input.LastObservedAt }),
    ...(input.Malware !== undefined && { Malware: serializeAws_restJson1MalwareList(input.Malware, context) }),
    ...(input.Network !== undefined && { Network: serializeAws_restJson1Network(input.Network, context) }),
    ...(input.NetworkPath !== undefined && {
      NetworkPath: serializeAws_restJson1NetworkPathList(input.NetworkPath, context),
    }),
    ...(input.Note !== undefined && { Note: serializeAws_restJson1Note(input.Note, context) }),
    ...(input.Process !== undefined && { Process: serializeAws_restJson1ProcessDetails(input.Process, context) }),
    ...(input.ProductArn !== undefined && { ProductArn: input.ProductArn }),
    ...(input.ProductFields !== undefined && {
      ProductFields: serializeAws_restJson1FieldMap(input.ProductFields, context),
    }),
    ...(input.RecordState !== undefined && { RecordState: input.RecordState }),
    ...(input.RelatedFindings !== undefined && {
      RelatedFindings: serializeAws_restJson1RelatedFindingList(input.RelatedFindings, context),
    }),
    ...(input.Remediation !== undefined && {
      Remediation: serializeAws_restJson1Remediation(input.Remediation, context),
    }),
    ...(input.Resources !== undefined && { Resources: serializeAws_restJson1ResourceList(input.Resources, context) }),
    ...(input.SchemaVersion !== undefined && { SchemaVersion: input.SchemaVersion }),
    ...(input.Severity !== undefined && { Severity: serializeAws_restJson1Severity(input.Severity, context) }),
    ...(input.SourceUrl !== undefined && { SourceUrl: input.SourceUrl }),
    ...(input.ThreatIntelIndicators !== undefined && {
      ThreatIntelIndicators: serializeAws_restJson1ThreatIntelIndicatorList(input.ThreatIntelIndicators, context),
    }),
    ...(input.Title !== undefined && { Title: input.Title }),
    ...(input.Types !== undefined && { Types: serializeAws_restJson1TypeList(input.Types, context) }),
    ...(input.UpdatedAt !== undefined && { UpdatedAt: input.UpdatedAt }),
    ...(input.UserDefinedFields !== undefined && {
      UserDefinedFields: serializeAws_restJson1FieldMap(input.UserDefinedFields, context),
    }),
    ...(input.VerificationState !== undefined && { VerificationState: input.VerificationState }),
    ...(input.Vulnerabilities !== undefined && {
      Vulnerabilities: serializeAws_restJson1VulnerabilityList(input.Vulnerabilities, context),
    }),
    ...(input.Workflow !== undefined && { Workflow: serializeAws_restJson1Workflow(input.Workflow, context) }),
    ...(input.WorkflowState !== undefined && { WorkflowState: input.WorkflowState }),
  };
};

const serializeAws_restJson1AwsSecurityFindingFilters = (
  input: AwsSecurityFindingFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwsAccountId !== undefined && {
      AwsAccountId: serializeAws_restJson1StringFilterList(input.AwsAccountId, context),
    }),
    ...(input.CompanyName !== undefined && {
      CompanyName: serializeAws_restJson1StringFilterList(input.CompanyName, context),
    }),
    ...(input.ComplianceStatus !== undefined && {
      ComplianceStatus: serializeAws_restJson1StringFilterList(input.ComplianceStatus, context),
    }),
    ...(input.Confidence !== undefined && {
      Confidence: serializeAws_restJson1NumberFilterList(input.Confidence, context),
    }),
    ...(input.CreatedAt !== undefined && { CreatedAt: serializeAws_restJson1DateFilterList(input.CreatedAt, context) }),
    ...(input.Criticality !== undefined && {
      Criticality: serializeAws_restJson1NumberFilterList(input.Criticality, context),
    }),
    ...(input.Description !== undefined && {
      Description: serializeAws_restJson1StringFilterList(input.Description, context),
    }),
    ...(input.FirstObservedAt !== undefined && {
      FirstObservedAt: serializeAws_restJson1DateFilterList(input.FirstObservedAt, context),
    }),
    ...(input.GeneratorId !== undefined && {
      GeneratorId: serializeAws_restJson1StringFilterList(input.GeneratorId, context),
    }),
    ...(input.Id !== undefined && { Id: serializeAws_restJson1StringFilterList(input.Id, context) }),
    ...(input.Keyword !== undefined && { Keyword: serializeAws_restJson1KeywordFilterList(input.Keyword, context) }),
    ...(input.LastObservedAt !== undefined && {
      LastObservedAt: serializeAws_restJson1DateFilterList(input.LastObservedAt, context),
    }),
    ...(input.MalwareName !== undefined && {
      MalwareName: serializeAws_restJson1StringFilterList(input.MalwareName, context),
    }),
    ...(input.MalwarePath !== undefined && {
      MalwarePath: serializeAws_restJson1StringFilterList(input.MalwarePath, context),
    }),
    ...(input.MalwareState !== undefined && {
      MalwareState: serializeAws_restJson1StringFilterList(input.MalwareState, context),
    }),
    ...(input.MalwareType !== undefined && {
      MalwareType: serializeAws_restJson1StringFilterList(input.MalwareType, context),
    }),
    ...(input.NetworkDestinationDomain !== undefined && {
      NetworkDestinationDomain: serializeAws_restJson1StringFilterList(input.NetworkDestinationDomain, context),
    }),
    ...(input.NetworkDestinationIpV4 !== undefined && {
      NetworkDestinationIpV4: serializeAws_restJson1IpFilterList(input.NetworkDestinationIpV4, context),
    }),
    ...(input.NetworkDestinationIpV6 !== undefined && {
      NetworkDestinationIpV6: serializeAws_restJson1IpFilterList(input.NetworkDestinationIpV6, context),
    }),
    ...(input.NetworkDestinationPort !== undefined && {
      NetworkDestinationPort: serializeAws_restJson1NumberFilterList(input.NetworkDestinationPort, context),
    }),
    ...(input.NetworkDirection !== undefined && {
      NetworkDirection: serializeAws_restJson1StringFilterList(input.NetworkDirection, context),
    }),
    ...(input.NetworkProtocol !== undefined && {
      NetworkProtocol: serializeAws_restJson1StringFilterList(input.NetworkProtocol, context),
    }),
    ...(input.NetworkSourceDomain !== undefined && {
      NetworkSourceDomain: serializeAws_restJson1StringFilterList(input.NetworkSourceDomain, context),
    }),
    ...(input.NetworkSourceIpV4 !== undefined && {
      NetworkSourceIpV4: serializeAws_restJson1IpFilterList(input.NetworkSourceIpV4, context),
    }),
    ...(input.NetworkSourceIpV6 !== undefined && {
      NetworkSourceIpV6: serializeAws_restJson1IpFilterList(input.NetworkSourceIpV6, context),
    }),
    ...(input.NetworkSourceMac !== undefined && {
      NetworkSourceMac: serializeAws_restJson1StringFilterList(input.NetworkSourceMac, context),
    }),
    ...(input.NetworkSourcePort !== undefined && {
      NetworkSourcePort: serializeAws_restJson1NumberFilterList(input.NetworkSourcePort, context),
    }),
    ...(input.NoteText !== undefined && { NoteText: serializeAws_restJson1StringFilterList(input.NoteText, context) }),
    ...(input.NoteUpdatedAt !== undefined && {
      NoteUpdatedAt: serializeAws_restJson1DateFilterList(input.NoteUpdatedAt, context),
    }),
    ...(input.NoteUpdatedBy !== undefined && {
      NoteUpdatedBy: serializeAws_restJson1StringFilterList(input.NoteUpdatedBy, context),
    }),
    ...(input.ProcessLaunchedAt !== undefined && {
      ProcessLaunchedAt: serializeAws_restJson1DateFilterList(input.ProcessLaunchedAt, context),
    }),
    ...(input.ProcessName !== undefined && {
      ProcessName: serializeAws_restJson1StringFilterList(input.ProcessName, context),
    }),
    ...(input.ProcessParentPid !== undefined && {
      ProcessParentPid: serializeAws_restJson1NumberFilterList(input.ProcessParentPid, context),
    }),
    ...(input.ProcessPath !== undefined && {
      ProcessPath: serializeAws_restJson1StringFilterList(input.ProcessPath, context),
    }),
    ...(input.ProcessPid !== undefined && {
      ProcessPid: serializeAws_restJson1NumberFilterList(input.ProcessPid, context),
    }),
    ...(input.ProcessTerminatedAt !== undefined && {
      ProcessTerminatedAt: serializeAws_restJson1DateFilterList(input.ProcessTerminatedAt, context),
    }),
    ...(input.ProductArn !== undefined && {
      ProductArn: serializeAws_restJson1StringFilterList(input.ProductArn, context),
    }),
    ...(input.ProductFields !== undefined && {
      ProductFields: serializeAws_restJson1MapFilterList(input.ProductFields, context),
    }),
    ...(input.ProductName !== undefined && {
      ProductName: serializeAws_restJson1StringFilterList(input.ProductName, context),
    }),
    ...(input.RecommendationText !== undefined && {
      RecommendationText: serializeAws_restJson1StringFilterList(input.RecommendationText, context),
    }),
    ...(input.RecordState !== undefined && {
      RecordState: serializeAws_restJson1StringFilterList(input.RecordState, context),
    }),
    ...(input.RelatedFindingsId !== undefined && {
      RelatedFindingsId: serializeAws_restJson1StringFilterList(input.RelatedFindingsId, context),
    }),
    ...(input.RelatedFindingsProductArn !== undefined && {
      RelatedFindingsProductArn: serializeAws_restJson1StringFilterList(input.RelatedFindingsProductArn, context),
    }),
    ...(input.ResourceAwsEc2InstanceIamInstanceProfileArn !== undefined && {
      ResourceAwsEc2InstanceIamInstanceProfileArn: serializeAws_restJson1StringFilterList(
        input.ResourceAwsEc2InstanceIamInstanceProfileArn,
        context
      ),
    }),
    ...(input.ResourceAwsEc2InstanceImageId !== undefined && {
      ResourceAwsEc2InstanceImageId: serializeAws_restJson1StringFilterList(
        input.ResourceAwsEc2InstanceImageId,
        context
      ),
    }),
    ...(input.ResourceAwsEc2InstanceIpV4Addresses !== undefined && {
      ResourceAwsEc2InstanceIpV4Addresses: serializeAws_restJson1IpFilterList(
        input.ResourceAwsEc2InstanceIpV4Addresses,
        context
      ),
    }),
    ...(input.ResourceAwsEc2InstanceIpV6Addresses !== undefined && {
      ResourceAwsEc2InstanceIpV6Addresses: serializeAws_restJson1IpFilterList(
        input.ResourceAwsEc2InstanceIpV6Addresses,
        context
      ),
    }),
    ...(input.ResourceAwsEc2InstanceKeyName !== undefined && {
      ResourceAwsEc2InstanceKeyName: serializeAws_restJson1StringFilterList(
        input.ResourceAwsEc2InstanceKeyName,
        context
      ),
    }),
    ...(input.ResourceAwsEc2InstanceLaunchedAt !== undefined && {
      ResourceAwsEc2InstanceLaunchedAt: serializeAws_restJson1DateFilterList(
        input.ResourceAwsEc2InstanceLaunchedAt,
        context
      ),
    }),
    ...(input.ResourceAwsEc2InstanceSubnetId !== undefined && {
      ResourceAwsEc2InstanceSubnetId: serializeAws_restJson1StringFilterList(
        input.ResourceAwsEc2InstanceSubnetId,
        context
      ),
    }),
    ...(input.ResourceAwsEc2InstanceType !== undefined && {
      ResourceAwsEc2InstanceType: serializeAws_restJson1StringFilterList(input.ResourceAwsEc2InstanceType, context),
    }),
    ...(input.ResourceAwsEc2InstanceVpcId !== undefined && {
      ResourceAwsEc2InstanceVpcId: serializeAws_restJson1StringFilterList(input.ResourceAwsEc2InstanceVpcId, context),
    }),
    ...(input.ResourceAwsIamAccessKeyCreatedAt !== undefined && {
      ResourceAwsIamAccessKeyCreatedAt: serializeAws_restJson1DateFilterList(
        input.ResourceAwsIamAccessKeyCreatedAt,
        context
      ),
    }),
    ...(input.ResourceAwsIamAccessKeyStatus !== undefined && {
      ResourceAwsIamAccessKeyStatus: serializeAws_restJson1StringFilterList(
        input.ResourceAwsIamAccessKeyStatus,
        context
      ),
    }),
    ...(input.ResourceAwsIamAccessKeyUserName !== undefined && {
      ResourceAwsIamAccessKeyUserName: serializeAws_restJson1StringFilterList(
        input.ResourceAwsIamAccessKeyUserName,
        context
      ),
    }),
    ...(input.ResourceAwsS3BucketOwnerId !== undefined && {
      ResourceAwsS3BucketOwnerId: serializeAws_restJson1StringFilterList(input.ResourceAwsS3BucketOwnerId, context),
    }),
    ...(input.ResourceAwsS3BucketOwnerName !== undefined && {
      ResourceAwsS3BucketOwnerName: serializeAws_restJson1StringFilterList(input.ResourceAwsS3BucketOwnerName, context),
    }),
    ...(input.ResourceContainerImageId !== undefined && {
      ResourceContainerImageId: serializeAws_restJson1StringFilterList(input.ResourceContainerImageId, context),
    }),
    ...(input.ResourceContainerImageName !== undefined && {
      ResourceContainerImageName: serializeAws_restJson1StringFilterList(input.ResourceContainerImageName, context),
    }),
    ...(input.ResourceContainerLaunchedAt !== undefined && {
      ResourceContainerLaunchedAt: serializeAws_restJson1DateFilterList(input.ResourceContainerLaunchedAt, context),
    }),
    ...(input.ResourceContainerName !== undefined && {
      ResourceContainerName: serializeAws_restJson1StringFilterList(input.ResourceContainerName, context),
    }),
    ...(input.ResourceDetailsOther !== undefined && {
      ResourceDetailsOther: serializeAws_restJson1MapFilterList(input.ResourceDetailsOther, context),
    }),
    ...(input.ResourceId !== undefined && {
      ResourceId: serializeAws_restJson1StringFilterList(input.ResourceId, context),
    }),
    ...(input.ResourcePartition !== undefined && {
      ResourcePartition: serializeAws_restJson1StringFilterList(input.ResourcePartition, context),
    }),
    ...(input.ResourceRegion !== undefined && {
      ResourceRegion: serializeAws_restJson1StringFilterList(input.ResourceRegion, context),
    }),
    ...(input.ResourceTags !== undefined && {
      ResourceTags: serializeAws_restJson1MapFilterList(input.ResourceTags, context),
    }),
    ...(input.ResourceType !== undefined && {
      ResourceType: serializeAws_restJson1StringFilterList(input.ResourceType, context),
    }),
    ...(input.SeverityLabel !== undefined && {
      SeverityLabel: serializeAws_restJson1StringFilterList(input.SeverityLabel, context),
    }),
    ...(input.SeverityNormalized !== undefined && {
      SeverityNormalized: serializeAws_restJson1NumberFilterList(input.SeverityNormalized, context),
    }),
    ...(input.SeverityProduct !== undefined && {
      SeverityProduct: serializeAws_restJson1NumberFilterList(input.SeverityProduct, context),
    }),
    ...(input.SourceUrl !== undefined && {
      SourceUrl: serializeAws_restJson1StringFilterList(input.SourceUrl, context),
    }),
    ...(input.ThreatIntelIndicatorCategory !== undefined && {
      ThreatIntelIndicatorCategory: serializeAws_restJson1StringFilterList(input.ThreatIntelIndicatorCategory, context),
    }),
    ...(input.ThreatIntelIndicatorLastObservedAt !== undefined && {
      ThreatIntelIndicatorLastObservedAt: serializeAws_restJson1DateFilterList(
        input.ThreatIntelIndicatorLastObservedAt,
        context
      ),
    }),
    ...(input.ThreatIntelIndicatorSource !== undefined && {
      ThreatIntelIndicatorSource: serializeAws_restJson1StringFilterList(input.ThreatIntelIndicatorSource, context),
    }),
    ...(input.ThreatIntelIndicatorSourceUrl !== undefined && {
      ThreatIntelIndicatorSourceUrl: serializeAws_restJson1StringFilterList(
        input.ThreatIntelIndicatorSourceUrl,
        context
      ),
    }),
    ...(input.ThreatIntelIndicatorType !== undefined && {
      ThreatIntelIndicatorType: serializeAws_restJson1StringFilterList(input.ThreatIntelIndicatorType, context),
    }),
    ...(input.ThreatIntelIndicatorValue !== undefined && {
      ThreatIntelIndicatorValue: serializeAws_restJson1StringFilterList(input.ThreatIntelIndicatorValue, context),
    }),
    ...(input.Title !== undefined && { Title: serializeAws_restJson1StringFilterList(input.Title, context) }),
    ...(input.Type !== undefined && { Type: serializeAws_restJson1StringFilterList(input.Type, context) }),
    ...(input.UpdatedAt !== undefined && { UpdatedAt: serializeAws_restJson1DateFilterList(input.UpdatedAt, context) }),
    ...(input.UserDefinedFields !== undefined && {
      UserDefinedFields: serializeAws_restJson1MapFilterList(input.UserDefinedFields, context),
    }),
    ...(input.VerificationState !== undefined && {
      VerificationState: serializeAws_restJson1StringFilterList(input.VerificationState, context),
    }),
    ...(input.WorkflowState !== undefined && {
      WorkflowState: serializeAws_restJson1StringFilterList(input.WorkflowState, context),
    }),
    ...(input.WorkflowStatus !== undefined && {
      WorkflowStatus: serializeAws_restJson1StringFilterList(input.WorkflowStatus, context),
    }),
  };
};

const serializeAws_restJson1AwsSecurityFindingIdentifier = (
  input: AwsSecurityFindingIdentifier,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.ProductArn !== undefined && { ProductArn: input.ProductArn }),
  };
};

const serializeAws_restJson1AwsSecurityFindingIdentifierList = (
  input: AwsSecurityFindingIdentifier[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1AwsSecurityFindingIdentifier(entry, context));
};

const serializeAws_restJson1AwsSecurityFindingList = (input: AwsSecurityFinding[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1AwsSecurityFinding(entry, context));
};

const serializeAws_restJson1AwsSnsTopicDetails = (input: AwsSnsTopicDetails, context: __SerdeContext): any => {
  return {
    ...(input.KmsMasterKeyId !== undefined && { KmsMasterKeyId: input.KmsMasterKeyId }),
    ...(input.Owner !== undefined && { Owner: input.Owner }),
    ...(input.Subscription !== undefined && {
      Subscription: serializeAws_restJson1AwsSnsTopicSubscriptionList(input.Subscription, context),
    }),
    ...(input.TopicName !== undefined && { TopicName: input.TopicName }),
  };
};

const serializeAws_restJson1AwsSnsTopicSubscription = (
  input: AwsSnsTopicSubscription,
  context: __SerdeContext
): any => {
  return {
    ...(input.Endpoint !== undefined && { Endpoint: input.Endpoint }),
    ...(input.Protocol !== undefined && { Protocol: input.Protocol }),
  };
};

const serializeAws_restJson1AwsSnsTopicSubscriptionList = (
  input: AwsSnsTopicSubscription[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1AwsSnsTopicSubscription(entry, context));
};

const serializeAws_restJson1AwsSqsQueueDetails = (input: AwsSqsQueueDetails, context: __SerdeContext): any => {
  return {
    ...(input.DeadLetterTargetArn !== undefined && { DeadLetterTargetArn: input.DeadLetterTargetArn }),
    ...(input.KmsDataKeyReusePeriodSeconds !== undefined && {
      KmsDataKeyReusePeriodSeconds: input.KmsDataKeyReusePeriodSeconds,
    }),
    ...(input.KmsMasterKeyId !== undefined && { KmsMasterKeyId: input.KmsMasterKeyId }),
    ...(input.QueueName !== undefined && { QueueName: input.QueueName }),
  };
};

const serializeAws_restJson1AwsWafWebAclDetails = (input: AwsWafWebAclDetails, context: __SerdeContext): any => {
  return {
    ...(input.DefaultAction !== undefined && { DefaultAction: input.DefaultAction }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Rules !== undefined && { Rules: serializeAws_restJson1AwsWafWebAclRuleList(input.Rules, context) }),
    ...(input.WebAclId !== undefined && { WebAclId: input.WebAclId }),
  };
};

const serializeAws_restJson1AwsWafWebAclRule = (input: AwsWafWebAclRule, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && { Action: serializeAws_restJson1WafAction(input.Action, context) }),
    ...(input.ExcludedRules !== undefined && {
      ExcludedRules: serializeAws_restJson1WafExcludedRuleList(input.ExcludedRules, context),
    }),
    ...(input.OverrideAction !== undefined && {
      OverrideAction: serializeAws_restJson1WafOverrideAction(input.OverrideAction, context),
    }),
    ...(input.Priority !== undefined && { Priority: input.Priority }),
    ...(input.RuleId !== undefined && { RuleId: input.RuleId }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsWafWebAclRuleList = (input: AwsWafWebAclRule[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1AwsWafWebAclRule(entry, context));
};

const serializeAws_restJson1CidrBlockAssociation = (input: CidrBlockAssociation, context: __SerdeContext): any => {
  return {
    ...(input.AssociationId !== undefined && { AssociationId: input.AssociationId }),
    ...(input.CidrBlock !== undefined && { CidrBlock: input.CidrBlock }),
    ...(input.CidrBlockState !== undefined && { CidrBlockState: input.CidrBlockState }),
  };
};

const serializeAws_restJson1CidrBlockAssociationList = (
  input: CidrBlockAssociation[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1CidrBlockAssociation(entry, context));
};

const serializeAws_restJson1Compliance = (input: Compliance, context: __SerdeContext): any => {
  return {
    ...(input.RelatedRequirements !== undefined && {
      RelatedRequirements: serializeAws_restJson1RelatedRequirementsList(input.RelatedRequirements, context),
    }),
    ...(input.Status !== undefined && { Status: input.Status }),
    ...(input.StatusReasons !== undefined && {
      StatusReasons: serializeAws_restJson1StatusReasonsList(input.StatusReasons, context),
    }),
  };
};

const serializeAws_restJson1ContainerDetails = (input: ContainerDetails, context: __SerdeContext): any => {
  return {
    ...(input.ImageId !== undefined && { ImageId: input.ImageId }),
    ...(input.ImageName !== undefined && { ImageName: input.ImageName }),
    ...(input.LaunchedAt !== undefined && { LaunchedAt: input.LaunchedAt }),
    ...(input.Name !== undefined && { Name: input.Name }),
  };
};

const serializeAws_restJson1Cvss = (input: Cvss, context: __SerdeContext): any => {
  return {
    ...(input.BaseScore !== undefined && { BaseScore: input.BaseScore }),
    ...(input.BaseVector !== undefined && { BaseVector: input.BaseVector }),
    ...(input.Version !== undefined && { Version: input.Version }),
  };
};

const serializeAws_restJson1CvssList = (input: Cvss[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1Cvss(entry, context));
};

const serializeAws_restJson1DateFilter = (input: DateFilter, context: __SerdeContext): any => {
  return {
    ...(input.DateRange !== undefined && { DateRange: serializeAws_restJson1DateRange(input.DateRange, context) }),
    ...(input.End !== undefined && { End: input.End }),
    ...(input.Start !== undefined && { Start: input.Start }),
  };
};

const serializeAws_restJson1DateFilterList = (input: DateFilter[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1DateFilter(entry, context));
};

const serializeAws_restJson1DateRange = (input: DateRange, context: __SerdeContext): any => {
  return {
    ...(input.Unit !== undefined && { Unit: input.Unit }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_restJson1FieldMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const serializeAws_restJson1IpFilter = (input: IpFilter, context: __SerdeContext): any => {
  return {
    ...(input.Cidr !== undefined && { Cidr: input.Cidr }),
  };
};

const serializeAws_restJson1IpFilterList = (input: IpFilter[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1IpFilter(entry, context));
};

const serializeAws_restJson1Ipv6CidrBlockAssociation = (
  input: Ipv6CidrBlockAssociation,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationId !== undefined && { AssociationId: input.AssociationId }),
    ...(input.CidrBlockState !== undefined && { CidrBlockState: input.CidrBlockState }),
    ...(input.Ipv6CidrBlock !== undefined && { Ipv6CidrBlock: input.Ipv6CidrBlock }),
  };
};

const serializeAws_restJson1Ipv6CidrBlockAssociationList = (
  input: Ipv6CidrBlockAssociation[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1Ipv6CidrBlockAssociation(entry, context));
};

const serializeAws_restJson1KeywordFilter = (input: KeywordFilter, context: __SerdeContext): any => {
  return {
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_restJson1KeywordFilterList = (input: KeywordFilter[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1KeywordFilter(entry, context));
};

const serializeAws_restJson1LoadBalancerState = (input: LoadBalancerState, context: __SerdeContext): any => {
  return {
    ...(input.Code !== undefined && { Code: input.Code }),
    ...(input.Reason !== undefined && { Reason: input.Reason }),
  };
};

const serializeAws_restJson1Malware = (input: Malware, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Path !== undefined && { Path: input.Path }),
    ...(input.State !== undefined && { State: input.State }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_restJson1MalwareList = (input: Malware[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1Malware(entry, context));
};

const serializeAws_restJson1MapFilter = (input: MapFilter, context: __SerdeContext): any => {
  return {
    ...(input.Comparison !== undefined && { Comparison: input.Comparison }),
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_restJson1MapFilterList = (input: MapFilter[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1MapFilter(entry, context));
};

const serializeAws_restJson1Network = (input: Network, context: __SerdeContext): any => {
  return {
    ...(input.DestinationDomain !== undefined && { DestinationDomain: input.DestinationDomain }),
    ...(input.DestinationIpV4 !== undefined && { DestinationIpV4: input.DestinationIpV4 }),
    ...(input.DestinationIpV6 !== undefined && { DestinationIpV6: input.DestinationIpV6 }),
    ...(input.DestinationPort !== undefined && { DestinationPort: input.DestinationPort }),
    ...(input.Direction !== undefined && { Direction: input.Direction }),
    ...(input.OpenPortRange !== undefined && {
      OpenPortRange: serializeAws_restJson1PortRange(input.OpenPortRange, context),
    }),
    ...(input.Protocol !== undefined && { Protocol: input.Protocol }),
    ...(input.SourceDomain !== undefined && { SourceDomain: input.SourceDomain }),
    ...(input.SourceIpV4 !== undefined && { SourceIpV4: input.SourceIpV4 }),
    ...(input.SourceIpV6 !== undefined && { SourceIpV6: input.SourceIpV6 }),
    ...(input.SourceMac !== undefined && { SourceMac: input.SourceMac }),
    ...(input.SourcePort !== undefined && { SourcePort: input.SourcePort }),
  };
};

const serializeAws_restJson1NetworkHeader = (input: NetworkHeader, context: __SerdeContext): any => {
  return {
    ...(input.Destination !== undefined && {
      Destination: serializeAws_restJson1NetworkPathComponentDetails(input.Destination, context),
    }),
    ...(input.Protocol !== undefined && { Protocol: input.Protocol }),
    ...(input.Source !== undefined && {
      Source: serializeAws_restJson1NetworkPathComponentDetails(input.Source, context),
    }),
  };
};

const serializeAws_restJson1NetworkPathComponent = (input: NetworkPathComponent, context: __SerdeContext): any => {
  return {
    ...(input.ComponentId !== undefined && { ComponentId: input.ComponentId }),
    ...(input.ComponentType !== undefined && { ComponentType: input.ComponentType }),
    ...(input.Egress !== undefined && { Egress: serializeAws_restJson1NetworkHeader(input.Egress, context) }),
    ...(input.Ingress !== undefined && { Ingress: serializeAws_restJson1NetworkHeader(input.Ingress, context) }),
  };
};

const serializeAws_restJson1NetworkPathComponentDetails = (
  input: NetworkPathComponentDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Address !== undefined && { Address: serializeAws_restJson1StringList(input.Address, context) }),
    ...(input.PortRanges !== undefined && {
      PortRanges: serializeAws_restJson1PortRangeList(input.PortRanges, context),
    }),
  };
};

const serializeAws_restJson1NetworkPathList = (input: NetworkPathComponent[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1NetworkPathComponent(entry, context));
};

const serializeAws_restJson1NonEmptyStringList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_restJson1Note = (input: Note, context: __SerdeContext): any => {
  return {
    ...(input.Text !== undefined && { Text: input.Text }),
    ...(input.UpdatedAt !== undefined && { UpdatedAt: input.UpdatedAt }),
    ...(input.UpdatedBy !== undefined && { UpdatedBy: input.UpdatedBy }),
  };
};

const serializeAws_restJson1NoteUpdate = (input: NoteUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Text !== undefined && { Text: input.Text }),
    ...(input.UpdatedBy !== undefined && { UpdatedBy: input.UpdatedBy }),
  };
};

const serializeAws_restJson1NumberFilter = (input: NumberFilter, context: __SerdeContext): any => {
  return {
    ...(input.Eq !== undefined && { Eq: input.Eq }),
    ...(input.Gte !== undefined && { Gte: input.Gte }),
    ...(input.Lte !== undefined && { Lte: input.Lte }),
  };
};

const serializeAws_restJson1NumberFilterList = (input: NumberFilter[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1NumberFilter(entry, context));
};

const serializeAws_restJson1PortRange = (input: PortRange, context: __SerdeContext): any => {
  return {
    ...(input.Begin !== undefined && { Begin: input.Begin }),
    ...(input.End !== undefined && { End: input.End }),
  };
};

const serializeAws_restJson1PortRangeList = (input: PortRange[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1PortRange(entry, context));
};

const serializeAws_restJson1ProcessDetails = (input: ProcessDetails, context: __SerdeContext): any => {
  return {
    ...(input.LaunchedAt !== undefined && { LaunchedAt: input.LaunchedAt }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ParentPid !== undefined && { ParentPid: input.ParentPid }),
    ...(input.Path !== undefined && { Path: input.Path }),
    ...(input.Pid !== undefined && { Pid: input.Pid }),
    ...(input.TerminatedAt !== undefined && { TerminatedAt: input.TerminatedAt }),
  };
};

const serializeAws_restJson1Recommendation = (input: Recommendation, context: __SerdeContext): any => {
  return {
    ...(input.Text !== undefined && { Text: input.Text }),
    ...(input.Url !== undefined && { Url: input.Url }),
  };
};

const serializeAws_restJson1RelatedFinding = (input: RelatedFinding, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.ProductArn !== undefined && { ProductArn: input.ProductArn }),
  };
};

const serializeAws_restJson1RelatedFindingList = (input: RelatedFinding[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1RelatedFinding(entry, context));
};

const serializeAws_restJson1RelatedRequirementsList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_restJson1Remediation = (input: Remediation, context: __SerdeContext): any => {
  return {
    ...(input.Recommendation !== undefined && {
      Recommendation: serializeAws_restJson1Recommendation(input.Recommendation, context),
    }),
  };
};

const serializeAws_restJson1Resource = (input: Resource, context: __SerdeContext): any => {
  return {
    ...(input.Details !== undefined && { Details: serializeAws_restJson1ResourceDetails(input.Details, context) }),
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.Partition !== undefined && { Partition: input.Partition }),
    ...(input.Region !== undefined && { Region: input.Region }),
    ...(input.Tags !== undefined && { Tags: serializeAws_restJson1FieldMap(input.Tags, context) }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_restJson1ResourceDetails = (input: ResourceDetails, context: __SerdeContext): any => {
  return {
    ...(input.AwsAutoScalingAutoScalingGroup !== undefined && {
      AwsAutoScalingAutoScalingGroup: serializeAws_restJson1AwsAutoScalingAutoScalingGroupDetails(
        input.AwsAutoScalingAutoScalingGroup,
        context
      ),
    }),
    ...(input.AwsCloudFrontDistribution !== undefined && {
      AwsCloudFrontDistribution: serializeAws_restJson1AwsCloudFrontDistributionDetails(
        input.AwsCloudFrontDistribution,
        context
      ),
    }),
    ...(input.AwsCodeBuildProject !== undefined && {
      AwsCodeBuildProject: serializeAws_restJson1AwsCodeBuildProjectDetails(input.AwsCodeBuildProject, context),
    }),
    ...(input.AwsEc2Instance !== undefined && {
      AwsEc2Instance: serializeAws_restJson1AwsEc2InstanceDetails(input.AwsEc2Instance, context),
    }),
    ...(input.AwsEc2NetworkInterface !== undefined && {
      AwsEc2NetworkInterface: serializeAws_restJson1AwsEc2NetworkInterfaceDetails(
        input.AwsEc2NetworkInterface,
        context
      ),
    }),
    ...(input.AwsEc2SecurityGroup !== undefined && {
      AwsEc2SecurityGroup: serializeAws_restJson1AwsEc2SecurityGroupDetails(input.AwsEc2SecurityGroup, context),
    }),
    ...(input.AwsEc2Volume !== undefined && {
      AwsEc2Volume: serializeAws_restJson1AwsEc2VolumeDetails(input.AwsEc2Volume, context),
    }),
    ...(input.AwsEc2Vpc !== undefined && {
      AwsEc2Vpc: serializeAws_restJson1AwsEc2VpcDetails(input.AwsEc2Vpc, context),
    }),
    ...(input.AwsElasticsearchDomain !== undefined && {
      AwsElasticsearchDomain: serializeAws_restJson1AwsElasticsearchDomainDetails(
        input.AwsElasticsearchDomain,
        context
      ),
    }),
    ...(input.AwsElbv2LoadBalancer !== undefined && {
      AwsElbv2LoadBalancer: serializeAws_restJson1AwsElbv2LoadBalancerDetails(input.AwsElbv2LoadBalancer, context),
    }),
    ...(input.AwsIamAccessKey !== undefined && {
      AwsIamAccessKey: serializeAws_restJson1AwsIamAccessKeyDetails(input.AwsIamAccessKey, context),
    }),
    ...(input.AwsIamRole !== undefined && {
      AwsIamRole: serializeAws_restJson1AwsIamRoleDetails(input.AwsIamRole, context),
    }),
    ...(input.AwsKmsKey !== undefined && {
      AwsKmsKey: serializeAws_restJson1AwsKmsKeyDetails(input.AwsKmsKey, context),
    }),
    ...(input.AwsLambdaFunction !== undefined && {
      AwsLambdaFunction: serializeAws_restJson1AwsLambdaFunctionDetails(input.AwsLambdaFunction, context),
    }),
    ...(input.AwsLambdaLayerVersion !== undefined && {
      AwsLambdaLayerVersion: serializeAws_restJson1AwsLambdaLayerVersionDetails(input.AwsLambdaLayerVersion, context),
    }),
    ...(input.AwsRdsDbInstance !== undefined && {
      AwsRdsDbInstance: serializeAws_restJson1AwsRdsDbInstanceDetails(input.AwsRdsDbInstance, context),
    }),
    ...(input.AwsS3Bucket !== undefined && {
      AwsS3Bucket: serializeAws_restJson1AwsS3BucketDetails(input.AwsS3Bucket, context),
    }),
    ...(input.AwsS3Object !== undefined && {
      AwsS3Object: serializeAws_restJson1AwsS3ObjectDetails(input.AwsS3Object, context),
    }),
    ...(input.AwsSnsTopic !== undefined && {
      AwsSnsTopic: serializeAws_restJson1AwsSnsTopicDetails(input.AwsSnsTopic, context),
    }),
    ...(input.AwsSqsQueue !== undefined && {
      AwsSqsQueue: serializeAws_restJson1AwsSqsQueueDetails(input.AwsSqsQueue, context),
    }),
    ...(input.AwsWafWebAcl !== undefined && {
      AwsWafWebAcl: serializeAws_restJson1AwsWafWebAclDetails(input.AwsWafWebAcl, context),
    }),
    ...(input.Container !== undefined && {
      Container: serializeAws_restJson1ContainerDetails(input.Container, context),
    }),
    ...(input.Other !== undefined && { Other: serializeAws_restJson1FieldMap(input.Other, context) }),
  };
};

const serializeAws_restJson1ResourceList = (input: Resource[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1Resource(entry, context));
};

const serializeAws_restJson1SecurityGroups = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_restJson1Severity = (input: Severity, context: __SerdeContext): any => {
  return {
    ...(input.Label !== undefined && { Label: input.Label }),
    ...(input.Normalized !== undefined && { Normalized: input.Normalized }),
    ...(input.Original !== undefined && { Original: input.Original }),
    ...(input.Product !== undefined && { Product: input.Product }),
  };
};

const serializeAws_restJson1SeverityUpdate = (input: SeverityUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Label !== undefined && { Label: input.Label }),
    ...(input.Normalized !== undefined && { Normalized: input.Normalized }),
    ...(input.Product !== undefined && { Product: input.Product }),
  };
};

const serializeAws_restJson1SoftwarePackage = (input: SoftwarePackage, context: __SerdeContext): any => {
  return {
    ...(input.Architecture !== undefined && { Architecture: input.Architecture }),
    ...(input.Epoch !== undefined && { Epoch: input.Epoch }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Release !== undefined && { Release: input.Release }),
    ...(input.Version !== undefined && { Version: input.Version }),
  };
};

const serializeAws_restJson1SoftwarePackageList = (input: SoftwarePackage[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1SoftwarePackage(entry, context));
};

const serializeAws_restJson1SortCriteria = (input: SortCriterion[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1SortCriterion(entry, context));
};

const serializeAws_restJson1SortCriterion = (input: SortCriterion, context: __SerdeContext): any => {
  return {
    ...(input.Field !== undefined && { Field: input.Field }),
    ...(input.SortOrder !== undefined && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_restJson1StandardsInputParameterMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const serializeAws_restJson1StandardsSubscriptionArns = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_restJson1StandardsSubscriptionRequest = (
  input: StandardsSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.StandardsArn !== undefined && { StandardsArn: input.StandardsArn }),
    ...(input.StandardsInput !== undefined && {
      StandardsInput: serializeAws_restJson1StandardsInputParameterMap(input.StandardsInput, context),
    }),
  };
};

const serializeAws_restJson1StandardsSubscriptionRequests = (
  input: StandardsSubscriptionRequest[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1StandardsSubscriptionRequest(entry, context));
};

const serializeAws_restJson1StatusReason = (input: StatusReason, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.ReasonCode !== undefined && { ReasonCode: input.ReasonCode }),
  };
};

const serializeAws_restJson1StatusReasonsList = (input: StatusReason[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1StatusReason(entry, context));
};

const serializeAws_restJson1StringFilter = (input: StringFilter, context: __SerdeContext): any => {
  return {
    ...(input.Comparison !== undefined && { Comparison: input.Comparison }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_restJson1StringFilterList = (input: StringFilter[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1StringFilter(entry, context));
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const serializeAws_restJson1ThreatIntelIndicator = (input: ThreatIntelIndicator, context: __SerdeContext): any => {
  return {
    ...(input.Category !== undefined && { Category: input.Category }),
    ...(input.LastObservedAt !== undefined && { LastObservedAt: input.LastObservedAt }),
    ...(input.Source !== undefined && { Source: input.Source }),
    ...(input.SourceUrl !== undefined && { SourceUrl: input.SourceUrl }),
    ...(input.Type !== undefined && { Type: input.Type }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_restJson1ThreatIntelIndicatorList = (
  input: ThreatIntelIndicator[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1ThreatIntelIndicator(entry, context));
};

const serializeAws_restJson1TypeList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_restJson1Vulnerability = (input: Vulnerability, context: __SerdeContext): any => {
  return {
    ...(input.Cvss !== undefined && { Cvss: serializeAws_restJson1CvssList(input.Cvss, context) }),
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.ReferenceUrls !== undefined && {
      ReferenceUrls: serializeAws_restJson1StringList(input.ReferenceUrls, context),
    }),
    ...(input.RelatedVulnerabilities !== undefined && {
      RelatedVulnerabilities: serializeAws_restJson1StringList(input.RelatedVulnerabilities, context),
    }),
    ...(input.Vendor !== undefined && { Vendor: serializeAws_restJson1VulnerabilityVendor(input.Vendor, context) }),
    ...(input.VulnerablePackages !== undefined && {
      VulnerablePackages: serializeAws_restJson1SoftwarePackageList(input.VulnerablePackages, context),
    }),
  };
};

const serializeAws_restJson1VulnerabilityList = (input: Vulnerability[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1Vulnerability(entry, context));
};

const serializeAws_restJson1VulnerabilityVendor = (input: VulnerabilityVendor, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Url !== undefined && { Url: input.Url }),
    ...(input.VendorCreatedAt !== undefined && { VendorCreatedAt: input.VendorCreatedAt }),
    ...(input.VendorSeverity !== undefined && { VendorSeverity: input.VendorSeverity }),
    ...(input.VendorUpdatedAt !== undefined && { VendorUpdatedAt: input.VendorUpdatedAt }),
  };
};

const serializeAws_restJson1WafAction = (input: WafAction, context: __SerdeContext): any => {
  return {
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_restJson1WafExcludedRule = (input: WafExcludedRule, context: __SerdeContext): any => {
  return {
    ...(input.RuleId !== undefined && { RuleId: input.RuleId }),
  };
};

const serializeAws_restJson1WafExcludedRuleList = (input: WafExcludedRule[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1WafExcludedRule(entry, context));
};

const serializeAws_restJson1WafOverrideAction = (input: WafOverrideAction, context: __SerdeContext): any => {
  return {
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_restJson1Workflow = (input: Workflow, context: __SerdeContext): any => {
  return {
    ...(input.Status !== undefined && { Status: input.Status }),
  };
};

const serializeAws_restJson1WorkflowUpdate = (input: WorkflowUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Status !== undefined && { Status: input.Status }),
  };
};

const deserializeAws_restJson1ActionTarget = (output: any, context: __SerdeContext): ActionTarget => {
  return {
    __type: "ActionTarget",
    ActionTargetArn:
      output.ActionTargetArn !== undefined && output.ActionTargetArn !== null ? output.ActionTargetArn : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_restJson1ActionTargetList = (output: any, context: __SerdeContext): ActionTarget[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1ActionTarget(entry, context));
};

const deserializeAws_restJson1AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  return {
    __type: "AvailabilityZone",
    SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
    ZoneName: output.ZoneName !== undefined && output.ZoneName !== null ? output.ZoneName : undefined,
  } as any;
};

const deserializeAws_restJson1AvailabilityZones = (output: any, context: __SerdeContext): AvailabilityZone[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1AvailabilityZone(entry, context));
};

const deserializeAws_restJson1AwsAutoScalingAutoScalingGroupDetails = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingAutoScalingGroupDetails => {
  return {
    __type: "AwsAutoScalingAutoScalingGroupDetails",
    CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null ? output.CreatedTime : undefined,
    HealthCheckGracePeriod:
      output.HealthCheckGracePeriod !== undefined && output.HealthCheckGracePeriod !== null
        ? output.HealthCheckGracePeriod
        : undefined,
    HealthCheckType:
      output.HealthCheckType !== undefined && output.HealthCheckType !== null ? output.HealthCheckType : undefined,
    LaunchConfigurationName:
      output.LaunchConfigurationName !== undefined && output.LaunchConfigurationName !== null
        ? output.LaunchConfigurationName
        : undefined,
    LoadBalancerNames:
      output.LoadBalancerNames !== undefined && output.LoadBalancerNames !== null
        ? deserializeAws_restJson1StringList(output.LoadBalancerNames, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionDetails = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionDetails => {
  return {
    __type: "AwsCloudFrontDistributionDetails",
    DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
    ETag: output.ETag !== undefined && output.ETag !== null ? output.ETag : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null ? output.LastModifiedTime : undefined,
    Logging:
      output.Logging !== undefined && output.Logging !== null
        ? deserializeAws_restJson1AwsCloudFrontDistributionLogging(output.Logging, context)
        : undefined,
    Origins:
      output.Origins !== undefined && output.Origins !== null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOrigins(output.Origins, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    WebAclId: output.WebAclId !== undefined && output.WebAclId !== null ? output.WebAclId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionLogging = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionLogging => {
  return {
    __type: "AwsCloudFrontDistributionLogging",
    Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    IncludeCookies:
      output.IncludeCookies !== undefined && output.IncludeCookies !== null ? output.IncludeCookies : undefined,
    Prefix: output.Prefix !== undefined && output.Prefix !== null ? output.Prefix : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginItem = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginItem => {
  return {
    __type: "AwsCloudFrontDistributionOriginItem",
    DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    OriginPath: output.OriginPath !== undefined && output.OriginPath !== null ? output.OriginPath : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginItemList = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1AwsCloudFrontDistributionOriginItem(entry, context)
  );
};

const deserializeAws_restJson1AwsCloudFrontDistributionOrigins = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOrigins => {
  return {
    __type: "AwsCloudFrontDistributionOrigins",
    Items:
      output.Items !== undefined && output.Items !== null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOriginItemList(output.Items, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectDetails = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectDetails => {
  return {
    __type: "AwsCodeBuildProjectDetails",
    EncryptionKey:
      output.EncryptionKey !== undefined && output.EncryptionKey !== null ? output.EncryptionKey : undefined,
    Environment:
      output.Environment !== undefined && output.Environment !== null
        ? deserializeAws_restJson1AwsCodeBuildProjectEnvironment(output.Environment, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ServiceRole: output.ServiceRole !== undefined && output.ServiceRole !== null ? output.ServiceRole : undefined,
    Source:
      output.Source !== undefined && output.Source !== null
        ? deserializeAws_restJson1AwsCodeBuildProjectSource(output.Source, context)
        : undefined,
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_restJson1AwsCodeBuildProjectVpcConfig(output.VpcConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectEnvironment = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectEnvironment => {
  return {
    __type: "AwsCodeBuildProjectEnvironment",
    Certificate: output.Certificate !== undefined && output.Certificate !== null ? output.Certificate : undefined,
    ImagePullCredentialsType:
      output.ImagePullCredentialsType !== undefined && output.ImagePullCredentialsType !== null
        ? output.ImagePullCredentialsType
        : undefined,
    RegistryCredential:
      output.RegistryCredential !== undefined && output.RegistryCredential !== null
        ? deserializeAws_restJson1AwsCodeBuildProjectEnvironmentRegistryCredential(output.RegistryCredential, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectEnvironmentRegistryCredential = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectEnvironmentRegistryCredential => {
  return {
    __type: "AwsCodeBuildProjectEnvironmentRegistryCredential",
    Credential: output.Credential !== undefined && output.Credential !== null ? output.Credential : undefined,
    CredentialProvider:
      output.CredentialProvider !== undefined && output.CredentialProvider !== null
        ? output.CredentialProvider
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectSource = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectSource => {
  return {
    __type: "AwsCodeBuildProjectSource",
    GitCloneDepth:
      output.GitCloneDepth !== undefined && output.GitCloneDepth !== null ? output.GitCloneDepth : undefined,
    InsecureSsl: output.InsecureSsl !== undefined && output.InsecureSsl !== null ? output.InsecureSsl : undefined,
    Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectVpcConfig = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectVpcConfig => {
  return {
    __type: "AwsCodeBuildProjectVpcConfig",
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.SecurityGroupIds, context)
        : undefined,
    Subnets:
      output.Subnets !== undefined && output.Subnets !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.Subnets, context)
        : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2InstanceDetails = (output: any, context: __SerdeContext): AwsEc2InstanceDetails => {
  return {
    __type: "AwsEc2InstanceDetails",
    IamInstanceProfileArn:
      output.IamInstanceProfileArn !== undefined && output.IamInstanceProfileArn !== null
        ? output.IamInstanceProfileArn
        : undefined,
    ImageId: output.ImageId !== undefined && output.ImageId !== null ? output.ImageId : undefined,
    IpV4Addresses:
      output.IpV4Addresses !== undefined && output.IpV4Addresses !== null
        ? deserializeAws_restJson1StringList(output.IpV4Addresses, context)
        : undefined,
    IpV6Addresses:
      output.IpV6Addresses !== undefined && output.IpV6Addresses !== null
        ? deserializeAws_restJson1StringList(output.IpV6Addresses, context)
        : undefined,
    KeyName: output.KeyName !== undefined && output.KeyName !== null ? output.KeyName : undefined,
    LaunchedAt: output.LaunchedAt !== undefined && output.LaunchedAt !== null ? output.LaunchedAt : undefined,
    SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkInterfaceAttachment = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceAttachment => {
  return {
    __type: "AwsEc2NetworkInterfaceAttachment",
    AttachTime: output.AttachTime !== undefined && output.AttachTime !== null ? output.AttachTime : undefined,
    AttachmentId: output.AttachmentId !== undefined && output.AttachmentId !== null ? output.AttachmentId : undefined,
    DeleteOnTermination:
      output.DeleteOnTermination !== undefined && output.DeleteOnTermination !== null
        ? output.DeleteOnTermination
        : undefined,
    DeviceIndex: output.DeviceIndex !== undefined && output.DeviceIndex !== null ? output.DeviceIndex : undefined,
    InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
    InstanceOwnerId:
      output.InstanceOwnerId !== undefined && output.InstanceOwnerId !== null ? output.InstanceOwnerId : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkInterfaceDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceDetails => {
  return {
    __type: "AwsEc2NetworkInterfaceDetails",
    Attachment:
      output.Attachment !== undefined && output.Attachment !== null
        ? deserializeAws_restJson1AwsEc2NetworkInterfaceAttachment(output.Attachment, context)
        : undefined,
    NetworkInterfaceId:
      output.NetworkInterfaceId !== undefined && output.NetworkInterfaceId !== null
        ? output.NetworkInterfaceId
        : undefined,
    SecurityGroups:
      output.SecurityGroups !== undefined && output.SecurityGroups !== null
        ? deserializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroupList(output.SecurityGroups, context)
        : undefined,
    SourceDestCheck:
      output.SourceDestCheck !== undefined && output.SourceDestCheck !== null ? output.SourceDestCheck : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroup = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceSecurityGroup => {
  return {
    __type: "AwsEc2NetworkInterfaceSecurityGroup",
    GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
    GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroupList = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceSecurityGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroup(entry, context)
  );
};

const deserializeAws_restJson1AwsEc2SecurityGroupDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupDetails => {
  return {
    __type: "AwsEc2SecurityGroupDetails",
    GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
    GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
    IpPermissions:
      output.IpPermissions !== undefined && output.IpPermissions !== null
        ? deserializeAws_restJson1AwsEc2SecurityGroupIpPermissionList(output.IpPermissions, context)
        : undefined,
    IpPermissionsEgress:
      output.IpPermissionsEgress !== undefined && output.IpPermissionsEgress !== null
        ? deserializeAws_restJson1AwsEc2SecurityGroupIpPermissionList(output.IpPermissionsEgress, context)
        : undefined,
    OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpPermission = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpPermission => {
  return {
    __type: "AwsEc2SecurityGroupIpPermission",
    FromPort: output.FromPort !== undefined && output.FromPort !== null ? output.FromPort : undefined,
    IpProtocol: output.IpProtocol !== undefined && output.IpProtocol !== null ? output.IpProtocol : undefined,
    IpRanges:
      output.IpRanges !== undefined && output.IpRanges !== null
        ? deserializeAws_restJson1AwsEc2SecurityGroupIpRangeList(output.IpRanges, context)
        : undefined,
    Ipv6Ranges:
      output.Ipv6Ranges !== undefined && output.Ipv6Ranges !== null
        ? deserializeAws_restJson1AwsEc2SecurityGroupIpv6RangeList(output.Ipv6Ranges, context)
        : undefined,
    PrefixListIds:
      output.PrefixListIds !== undefined && output.PrefixListIds !== null
        ? deserializeAws_restJson1AwsEc2SecurityGroupPrefixListIdList(output.PrefixListIds, context)
        : undefined,
    ToPort: output.ToPort !== undefined && output.ToPort !== null ? output.ToPort : undefined,
    UserIdGroupPairs:
      output.UserIdGroupPairs !== undefined && output.UserIdGroupPairs !== null
        ? deserializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPairList(output.UserIdGroupPairs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpPermissionList = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpPermission[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1AwsEc2SecurityGroupIpPermission(entry, context));
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpRange = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpRange => {
  return {
    __type: "AwsEc2SecurityGroupIpRange",
    CidrIp: output.CidrIp !== undefined && output.CidrIp !== null ? output.CidrIp : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpRangeList = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpRange[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1AwsEc2SecurityGroupIpRange(entry, context));
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpv6Range = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpv6Range => {
  return {
    __type: "AwsEc2SecurityGroupIpv6Range",
    CidrIpv6: output.CidrIpv6 !== undefined && output.CidrIpv6 !== null ? output.CidrIpv6 : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpv6RangeList = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpv6Range[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1AwsEc2SecurityGroupIpv6Range(entry, context));
};

const deserializeAws_restJson1AwsEc2SecurityGroupPrefixListId = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupPrefixListId => {
  return {
    __type: "AwsEc2SecurityGroupPrefixListId",
    PrefixListId: output.PrefixListId !== undefined && output.PrefixListId !== null ? output.PrefixListId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupPrefixListIdList = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupPrefixListId[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1AwsEc2SecurityGroupPrefixListId(entry, context));
};

const deserializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPair = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupUserIdGroupPair => {
  return {
    __type: "AwsEc2SecurityGroupUserIdGroupPair",
    GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
    GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
    PeeringStatus:
      output.PeeringStatus !== undefined && output.PeeringStatus !== null ? output.PeeringStatus : undefined,
    UserId: output.UserId !== undefined && output.UserId !== null ? output.UserId : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    VpcPeeringConnectionId:
      output.VpcPeeringConnectionId !== undefined && output.VpcPeeringConnectionId !== null
        ? output.VpcPeeringConnectionId
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPairList = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupUserIdGroupPair[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPair(entry, context));
};

const deserializeAws_restJson1AwsEc2VolumeAttachment = (
  output: any,
  context: __SerdeContext
): AwsEc2VolumeAttachment => {
  return {
    __type: "AwsEc2VolumeAttachment",
    AttachTime: output.AttachTime !== undefined && output.AttachTime !== null ? output.AttachTime : undefined,
    DeleteOnTermination:
      output.DeleteOnTermination !== undefined && output.DeleteOnTermination !== null
        ? output.DeleteOnTermination
        : undefined,
    InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2VolumeAttachmentList = (
  output: any,
  context: __SerdeContext
): AwsEc2VolumeAttachment[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1AwsEc2VolumeAttachment(entry, context));
};

const deserializeAws_restJson1AwsEc2VolumeDetails = (output: any, context: __SerdeContext): AwsEc2VolumeDetails => {
  return {
    __type: "AwsEc2VolumeDetails",
    Attachments:
      output.Attachments !== undefined && output.Attachments !== null
        ? deserializeAws_restJson1AwsEc2VolumeAttachmentList(output.Attachments, context)
        : undefined,
    CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? output.CreateTime : undefined,
    Encrypted: output.Encrypted !== undefined && output.Encrypted !== null ? output.Encrypted : undefined,
    KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
    Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
    SnapshotId: output.SnapshotId !== undefined && output.SnapshotId !== null ? output.SnapshotId : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2VpcDetails = (output: any, context: __SerdeContext): AwsEc2VpcDetails => {
  return {
    __type: "AwsEc2VpcDetails",
    CidrBlockAssociationSet:
      output.CidrBlockAssociationSet !== undefined && output.CidrBlockAssociationSet !== null
        ? deserializeAws_restJson1CidrBlockAssociationList(output.CidrBlockAssociationSet, context)
        : undefined,
    DhcpOptionsId:
      output.DhcpOptionsId !== undefined && output.DhcpOptionsId !== null ? output.DhcpOptionsId : undefined,
    Ipv6CidrBlockAssociationSet:
      output.Ipv6CidrBlockAssociationSet !== undefined && output.Ipv6CidrBlockAssociationSet !== null
        ? deserializeAws_restJson1Ipv6CidrBlockAssociationList(output.Ipv6CidrBlockAssociationSet, context)
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainDetails = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainDetails => {
  return {
    __type: "AwsElasticsearchDomainDetails",
    AccessPolicies:
      output.AccessPolicies !== undefined && output.AccessPolicies !== null ? output.AccessPolicies : undefined,
    DomainEndpointOptions:
      output.DomainEndpointOptions !== undefined && output.DomainEndpointOptions !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainDomainEndpointOptions(output.DomainEndpointOptions, context)
        : undefined,
    DomainId: output.DomainId !== undefined && output.DomainId !== null ? output.DomainId : undefined,
    DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
    ElasticsearchVersion:
      output.ElasticsearchVersion !== undefined && output.ElasticsearchVersion !== null
        ? output.ElasticsearchVersion
        : undefined,
    EncryptionAtRestOptions:
      output.EncryptionAtRestOptions !== undefined && output.EncryptionAtRestOptions !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions(output.EncryptionAtRestOptions, context)
        : undefined,
    Endpoint: output.Endpoint !== undefined && output.Endpoint !== null ? output.Endpoint : undefined,
    Endpoints:
      output.Endpoints !== undefined && output.Endpoints !== null
        ? deserializeAws_restJson1FieldMap(output.Endpoints, context)
        : undefined,
    NodeToNodeEncryptionOptions:
      output.NodeToNodeEncryptionOptions !== undefined && output.NodeToNodeEncryptionOptions !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions(
            output.NodeToNodeEncryptionOptions,
            context
          )
        : undefined,
    VPCOptions:
      output.VPCOptions !== undefined && output.VPCOptions !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainVPCOptions(output.VPCOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainDomainEndpointOptions = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainDomainEndpointOptions => {
  return {
    __type: "AwsElasticsearchDomainDomainEndpointOptions",
    EnforceHTTPS: output.EnforceHTTPS !== undefined && output.EnforceHTTPS !== null ? output.EnforceHTTPS : undefined,
    TLSSecurityPolicy:
      output.TLSSecurityPolicy !== undefined && output.TLSSecurityPolicy !== null
        ? output.TLSSecurityPolicy
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainEncryptionAtRestOptions => {
  return {
    __type: "AwsElasticsearchDomainEncryptionAtRestOptions",
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainNodeToNodeEncryptionOptions => {
  return {
    __type: "AwsElasticsearchDomainNodeToNodeEncryptionOptions",
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainVPCOptions = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainVPCOptions => {
  return {
    __type: "AwsElasticsearchDomainVPCOptions",
    AvailabilityZones:
      output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.AvailabilityZones, context)
        : undefined,
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.SubnetIds, context)
        : undefined,
    VPCId: output.VPCId !== undefined && output.VPCId !== null ? output.VPCId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElbv2LoadBalancerDetails = (
  output: any,
  context: __SerdeContext
): AwsElbv2LoadBalancerDetails => {
  return {
    __type: "AwsElbv2LoadBalancerDetails",
    AvailabilityZones:
      output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
        ? deserializeAws_restJson1AvailabilityZones(output.AvailabilityZones, context)
        : undefined,
    CanonicalHostedZoneId:
      output.CanonicalHostedZoneId !== undefined && output.CanonicalHostedZoneId !== null
        ? output.CanonicalHostedZoneId
        : undefined,
    CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null ? output.CreatedTime : undefined,
    DNSName: output.DNSName !== undefined && output.DNSName !== null ? output.DNSName : undefined,
    IpAddressType:
      output.IpAddressType !== undefined && output.IpAddressType !== null ? output.IpAddressType : undefined,
    Scheme: output.Scheme !== undefined && output.Scheme !== null ? output.Scheme : undefined,
    SecurityGroups:
      output.SecurityGroups !== undefined && output.SecurityGroups !== null
        ? deserializeAws_restJson1SecurityGroups(output.SecurityGroups, context)
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? deserializeAws_restJson1LoadBalancerState(output.State, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamAccessKeyDetails = (
  output: any,
  context: __SerdeContext
): AwsIamAccessKeyDetails => {
  return {
    __type: "AwsIamAccessKeyDetails",
    CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
    PrincipalId: output.PrincipalId !== undefined && output.PrincipalId !== null ? output.PrincipalId : undefined,
    PrincipalName:
      output.PrincipalName !== undefined && output.PrincipalName !== null ? output.PrincipalName : undefined,
    PrincipalType:
      output.PrincipalType !== undefined && output.PrincipalType !== null ? output.PrincipalType : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamRoleDetails = (output: any, context: __SerdeContext): AwsIamRoleDetails => {
  return {
    __type: "AwsIamRoleDetails",
    AssumeRolePolicyDocument:
      output.AssumeRolePolicyDocument !== undefined && output.AssumeRolePolicyDocument !== null
        ? output.AssumeRolePolicyDocument
        : undefined,
    CreateDate: output.CreateDate !== undefined && output.CreateDate !== null ? output.CreateDate : undefined,
    MaxSessionDuration:
      output.MaxSessionDuration !== undefined && output.MaxSessionDuration !== null
        ? output.MaxSessionDuration
        : undefined,
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    RoleId: output.RoleId !== undefined && output.RoleId !== null ? output.RoleId : undefined,
    RoleName: output.RoleName !== undefined && output.RoleName !== null ? output.RoleName : undefined,
  } as any;
};

const deserializeAws_restJson1AwsKmsKeyDetails = (output: any, context: __SerdeContext): AwsKmsKeyDetails => {
  return {
    __type: "AwsKmsKeyDetails",
    AWSAccountId: output.AWSAccountId !== undefined && output.AWSAccountId !== null ? output.AWSAccountId : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    KeyManager: output.KeyManager !== undefined && output.KeyManager !== null ? output.KeyManager : undefined,
    KeyState: output.KeyState !== undefined && output.KeyState !== null ? output.KeyState : undefined,
    Origin: output.Origin !== undefined && output.Origin !== null ? output.Origin : undefined,
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionCode = (output: any, context: __SerdeContext): AwsLambdaFunctionCode => {
  return {
    __type: "AwsLambdaFunctionCode",
    S3Bucket: output.S3Bucket !== undefined && output.S3Bucket !== null ? output.S3Bucket : undefined,
    S3Key: output.S3Key !== undefined && output.S3Key !== null ? output.S3Key : undefined,
    S3ObjectVersion:
      output.S3ObjectVersion !== undefined && output.S3ObjectVersion !== null ? output.S3ObjectVersion : undefined,
    ZipFile: output.ZipFile !== undefined && output.ZipFile !== null ? output.ZipFile : undefined,
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionDeadLetterConfig = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionDeadLetterConfig => {
  return {
    __type: "AwsLambdaFunctionDeadLetterConfig",
    TargetArn: output.TargetArn !== undefined && output.TargetArn !== null ? output.TargetArn : undefined,
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionDetails = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionDetails => {
  return {
    __type: "AwsLambdaFunctionDetails",
    Code:
      output.Code !== undefined && output.Code !== null
        ? deserializeAws_restJson1AwsLambdaFunctionCode(output.Code, context)
        : undefined,
    CodeSha256: output.CodeSha256 !== undefined && output.CodeSha256 !== null ? output.CodeSha256 : undefined,
    DeadLetterConfig:
      output.DeadLetterConfig !== undefined && output.DeadLetterConfig !== null
        ? deserializeAws_restJson1AwsLambdaFunctionDeadLetterConfig(output.DeadLetterConfig, context)
        : undefined,
    Environment:
      output.Environment !== undefined && output.Environment !== null
        ? deserializeAws_restJson1AwsLambdaFunctionEnvironment(output.Environment, context)
        : undefined,
    FunctionName: output.FunctionName !== undefined && output.FunctionName !== null ? output.FunctionName : undefined,
    Handler: output.Handler !== undefined && output.Handler !== null ? output.Handler : undefined,
    KmsKeyArn: output.KmsKeyArn !== undefined && output.KmsKeyArn !== null ? output.KmsKeyArn : undefined,
    LastModified: output.LastModified !== undefined && output.LastModified !== null ? output.LastModified : undefined,
    Layers:
      output.Layers !== undefined && output.Layers !== null
        ? deserializeAws_restJson1AwsLambdaFunctionLayerList(output.Layers, context)
        : undefined,
    MasterArn: output.MasterArn !== undefined && output.MasterArn !== null ? output.MasterArn : undefined,
    MemorySize: output.MemorySize !== undefined && output.MemorySize !== null ? output.MemorySize : undefined,
    RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
    Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
    Runtime: output.Runtime !== undefined && output.Runtime !== null ? output.Runtime : undefined,
    Timeout: output.Timeout !== undefined && output.Timeout !== null ? output.Timeout : undefined,
    TracingConfig:
      output.TracingConfig !== undefined && output.TracingConfig !== null
        ? deserializeAws_restJson1AwsLambdaFunctionTracingConfig(output.TracingConfig, context)
        : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_restJson1AwsLambdaFunctionVpcConfig(output.VpcConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionEnvironment = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionEnvironment => {
  return {
    __type: "AwsLambdaFunctionEnvironment",
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_restJson1AwsLambdaFunctionEnvironmentError(output.Error, context)
        : undefined,
    Variables:
      output.Variables !== undefined && output.Variables !== null
        ? deserializeAws_restJson1FieldMap(output.Variables, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionEnvironmentError = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionEnvironmentError => {
  return {
    __type: "AwsLambdaFunctionEnvironmentError",
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionLayer = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionLayer => {
  return {
    __type: "AwsLambdaFunctionLayer",
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CodeSize: output.CodeSize !== undefined && output.CodeSize !== null ? output.CodeSize : undefined,
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionLayerList = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionLayer[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1AwsLambdaFunctionLayer(entry, context));
};

const deserializeAws_restJson1AwsLambdaFunctionTracingConfig = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionTracingConfig => {
  return {
    __type: "AwsLambdaFunctionTracingConfig",
    Mode: output.Mode !== undefined && output.Mode !== null ? output.Mode : undefined,
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionVpcConfig = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionVpcConfig => {
  return {
    __type: "AwsLambdaFunctionVpcConfig",
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.SubnetIds, context)
        : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsLambdaLayerVersionDetails = (
  output: any,
  context: __SerdeContext
): AwsLambdaLayerVersionDetails => {
  return {
    __type: "AwsLambdaLayerVersionDetails",
    CompatibleRuntimes:
      output.CompatibleRuntimes !== undefined && output.CompatibleRuntimes !== null
        ? deserializeAws_restJson1NonEmptyStringList(output.CompatibleRuntimes, context)
        : undefined,
    CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null ? output.CreatedDate : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRdsDbInstanceAssociatedRole = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceAssociatedRole => {
  return {
    __type: "AwsRdsDbInstanceAssociatedRole",
    FeatureName: output.FeatureName !== undefined && output.FeatureName !== null ? output.FeatureName : undefined,
    RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRdsDbInstanceAssociatedRoles = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceAssociatedRole[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1AwsRdsDbInstanceAssociatedRole(entry, context));
};

const deserializeAws_restJson1AwsRdsDbInstanceDetails = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceDetails => {
  return {
    __type: "AwsRdsDbInstanceDetails",
    AssociatedRoles:
      output.AssociatedRoles !== undefined && output.AssociatedRoles !== null
        ? deserializeAws_restJson1AwsRdsDbInstanceAssociatedRoles(output.AssociatedRoles, context)
        : undefined,
    CACertificateIdentifier:
      output.CACertificateIdentifier !== undefined && output.CACertificateIdentifier !== null
        ? output.CACertificateIdentifier
        : undefined,
    DBClusterIdentifier:
      output.DBClusterIdentifier !== undefined && output.DBClusterIdentifier !== null
        ? output.DBClusterIdentifier
        : undefined,
    DBInstanceClass:
      output.DBInstanceClass !== undefined && output.DBInstanceClass !== null ? output.DBInstanceClass : undefined,
    DBInstanceIdentifier:
      output.DBInstanceIdentifier !== undefined && output.DBInstanceIdentifier !== null
        ? output.DBInstanceIdentifier
        : undefined,
    DBName: output.DBName !== undefined && output.DBName !== null ? output.DBName : undefined,
    DbInstancePort:
      output.DbInstancePort !== undefined && output.DbInstancePort !== null ? output.DbInstancePort : undefined,
    DbiResourceId:
      output.DbiResourceId !== undefined && output.DbiResourceId !== null ? output.DbiResourceId : undefined,
    DeletionProtection:
      output.DeletionProtection !== undefined && output.DeletionProtection !== null
        ? output.DeletionProtection
        : undefined,
    Endpoint:
      output.Endpoint !== undefined && output.Endpoint !== null
        ? deserializeAws_restJson1AwsRdsDbInstanceEndpoint(output.Endpoint, context)
        : undefined,
    Engine: output.Engine !== undefined && output.Engine !== null ? output.Engine : undefined,
    EngineVersion:
      output.EngineVersion !== undefined && output.EngineVersion !== null ? output.EngineVersion : undefined,
    IAMDatabaseAuthenticationEnabled:
      output.IAMDatabaseAuthenticationEnabled !== undefined && output.IAMDatabaseAuthenticationEnabled !== null
        ? output.IAMDatabaseAuthenticationEnabled
        : undefined,
    InstanceCreateTime:
      output.InstanceCreateTime !== undefined && output.InstanceCreateTime !== null
        ? output.InstanceCreateTime
        : undefined,
    KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
    PubliclyAccessible:
      output.PubliclyAccessible !== undefined && output.PubliclyAccessible !== null
        ? output.PubliclyAccessible
        : undefined,
    StorageEncrypted:
      output.StorageEncrypted !== undefined && output.StorageEncrypted !== null ? output.StorageEncrypted : undefined,
    TdeCredentialArn:
      output.TdeCredentialArn !== undefined && output.TdeCredentialArn !== null ? output.TdeCredentialArn : undefined,
    VpcSecurityGroups:
      output.VpcSecurityGroups !== undefined && output.VpcSecurityGroups !== null
        ? deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups(output.VpcSecurityGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRdsDbInstanceEndpoint = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceEndpoint => {
  return {
    __type: "AwsRdsDbInstanceEndpoint",
    Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
    HostedZoneId: output.HostedZoneId !== undefined && output.HostedZoneId !== null ? output.HostedZoneId : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroup = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceVpcSecurityGroup => {
  return {
    __type: "AwsRdsDbInstanceVpcSecurityGroup",
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    VpcSecurityGroupId:
      output.VpcSecurityGroupId !== undefined && output.VpcSecurityGroupId !== null
        ? output.VpcSecurityGroupId
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceVpcSecurityGroup[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroup(entry, context));
};

const deserializeAws_restJson1AwsS3BucketDetails = (output: any, context: __SerdeContext): AwsS3BucketDetails => {
  return {
    __type: "AwsS3BucketDetails",
    CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
    OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
    OwnerName: output.OwnerName !== undefined && output.OwnerName !== null ? output.OwnerName : undefined,
    ServerSideEncryptionConfiguration:
      output.ServerSideEncryptionConfiguration !== undefined && output.ServerSideEncryptionConfiguration !== null
        ? deserializeAws_restJson1AwsS3BucketServerSideEncryptionConfiguration(
            output.ServerSideEncryptionConfiguration,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketServerSideEncryptionByDefault = (
  output: any,
  context: __SerdeContext
): AwsS3BucketServerSideEncryptionByDefault => {
  return {
    __type: "AwsS3BucketServerSideEncryptionByDefault",
    KMSMasterKeyID:
      output.KMSMasterKeyID !== undefined && output.KMSMasterKeyID !== null ? output.KMSMasterKeyID : undefined,
    SSEAlgorithm: output.SSEAlgorithm !== undefined && output.SSEAlgorithm !== null ? output.SSEAlgorithm : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketServerSideEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): AwsS3BucketServerSideEncryptionConfiguration => {
  return {
    __type: "AwsS3BucketServerSideEncryptionConfiguration",
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_restJson1AwsS3BucketServerSideEncryptionRules(output.Rules, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketServerSideEncryptionRule = (
  output: any,
  context: __SerdeContext
): AwsS3BucketServerSideEncryptionRule => {
  return {
    __type: "AwsS3BucketServerSideEncryptionRule",
    ApplyServerSideEncryptionByDefault:
      output.ApplyServerSideEncryptionByDefault !== undefined && output.ApplyServerSideEncryptionByDefault !== null
        ? deserializeAws_restJson1AwsS3BucketServerSideEncryptionByDefault(
            output.ApplyServerSideEncryptionByDefault,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketServerSideEncryptionRules = (
  output: any,
  context: __SerdeContext
): AwsS3BucketServerSideEncryptionRule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1AwsS3BucketServerSideEncryptionRule(entry, context)
  );
};

const deserializeAws_restJson1AwsS3ObjectDetails = (output: any, context: __SerdeContext): AwsS3ObjectDetails => {
  return {
    __type: "AwsS3ObjectDetails",
    ContentType: output.ContentType !== undefined && output.ContentType !== null ? output.ContentType : undefined,
    ETag: output.ETag !== undefined && output.ETag !== null ? output.ETag : undefined,
    LastModified: output.LastModified !== undefined && output.LastModified !== null ? output.LastModified : undefined,
    SSEKMSKeyId: output.SSEKMSKeyId !== undefined && output.SSEKMSKeyId !== null ? output.SSEKMSKeyId : undefined,
    ServerSideEncryption:
      output.ServerSideEncryption !== undefined && output.ServerSideEncryption !== null
        ? output.ServerSideEncryption
        : undefined,
    VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsSecurityFinding = (output: any, context: __SerdeContext): AwsSecurityFinding => {
  return {
    __type: "AwsSecurityFinding",
    AwsAccountId: output.AwsAccountId !== undefined && output.AwsAccountId !== null ? output.AwsAccountId : undefined,
    Compliance:
      output.Compliance !== undefined && output.Compliance !== null
        ? deserializeAws_restJson1Compliance(output.Compliance, context)
        : undefined,
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
    Criticality: output.Criticality !== undefined && output.Criticality !== null ? output.Criticality : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    FirstObservedAt:
      output.FirstObservedAt !== undefined && output.FirstObservedAt !== null ? output.FirstObservedAt : undefined,
    GeneratorId: output.GeneratorId !== undefined && output.GeneratorId !== null ? output.GeneratorId : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    LastObservedAt:
      output.LastObservedAt !== undefined && output.LastObservedAt !== null ? output.LastObservedAt : undefined,
    Malware:
      output.Malware !== undefined && output.Malware !== null
        ? deserializeAws_restJson1MalwareList(output.Malware, context)
        : undefined,
    Network:
      output.Network !== undefined && output.Network !== null
        ? deserializeAws_restJson1Network(output.Network, context)
        : undefined,
    NetworkPath:
      output.NetworkPath !== undefined && output.NetworkPath !== null
        ? deserializeAws_restJson1NetworkPathList(output.NetworkPath, context)
        : undefined,
    Note:
      output.Note !== undefined && output.Note !== null
        ? deserializeAws_restJson1Note(output.Note, context)
        : undefined,
    Process:
      output.Process !== undefined && output.Process !== null
        ? deserializeAws_restJson1ProcessDetails(output.Process, context)
        : undefined,
    ProductArn: output.ProductArn !== undefined && output.ProductArn !== null ? output.ProductArn : undefined,
    ProductFields:
      output.ProductFields !== undefined && output.ProductFields !== null
        ? deserializeAws_restJson1FieldMap(output.ProductFields, context)
        : undefined,
    RecordState: output.RecordState !== undefined && output.RecordState !== null ? output.RecordState : undefined,
    RelatedFindings:
      output.RelatedFindings !== undefined && output.RelatedFindings !== null
        ? deserializeAws_restJson1RelatedFindingList(output.RelatedFindings, context)
        : undefined,
    Remediation:
      output.Remediation !== undefined && output.Remediation !== null
        ? deserializeAws_restJson1Remediation(output.Remediation, context)
        : undefined,
    Resources:
      output.Resources !== undefined && output.Resources !== null
        ? deserializeAws_restJson1ResourceList(output.Resources, context)
        : undefined,
    SchemaVersion:
      output.SchemaVersion !== undefined && output.SchemaVersion !== null ? output.SchemaVersion : undefined,
    Severity:
      output.Severity !== undefined && output.Severity !== null
        ? deserializeAws_restJson1Severity(output.Severity, context)
        : undefined,
    SourceUrl: output.SourceUrl !== undefined && output.SourceUrl !== null ? output.SourceUrl : undefined,
    ThreatIntelIndicators:
      output.ThreatIntelIndicators !== undefined && output.ThreatIntelIndicators !== null
        ? deserializeAws_restJson1ThreatIntelIndicatorList(output.ThreatIntelIndicators, context)
        : undefined,
    Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
    Types:
      output.Types !== undefined && output.Types !== null
        ? deserializeAws_restJson1TypeList(output.Types, context)
        : undefined,
    UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? output.UpdatedAt : undefined,
    UserDefinedFields:
      output.UserDefinedFields !== undefined && output.UserDefinedFields !== null
        ? deserializeAws_restJson1FieldMap(output.UserDefinedFields, context)
        : undefined,
    VerificationState:
      output.VerificationState !== undefined && output.VerificationState !== null
        ? output.VerificationState
        : undefined,
    Vulnerabilities:
      output.Vulnerabilities !== undefined && output.Vulnerabilities !== null
        ? deserializeAws_restJson1VulnerabilityList(output.Vulnerabilities, context)
        : undefined,
    Workflow:
      output.Workflow !== undefined && output.Workflow !== null
        ? deserializeAws_restJson1Workflow(output.Workflow, context)
        : undefined,
    WorkflowState:
      output.WorkflowState !== undefined && output.WorkflowState !== null ? output.WorkflowState : undefined,
  } as any;
};

const deserializeAws_restJson1AwsSecurityFindingFilters = (
  output: any,
  context: __SerdeContext
): AwsSecurityFindingFilters => {
  return {
    __type: "AwsSecurityFindingFilters",
    AwsAccountId:
      output.AwsAccountId !== undefined && output.AwsAccountId !== null
        ? deserializeAws_restJson1StringFilterList(output.AwsAccountId, context)
        : undefined,
    CompanyName:
      output.CompanyName !== undefined && output.CompanyName !== null
        ? deserializeAws_restJson1StringFilterList(output.CompanyName, context)
        : undefined,
    ComplianceStatus:
      output.ComplianceStatus !== undefined && output.ComplianceStatus !== null
        ? deserializeAws_restJson1StringFilterList(output.ComplianceStatus, context)
        : undefined,
    Confidence:
      output.Confidence !== undefined && output.Confidence !== null
        ? deserializeAws_restJson1NumberFilterList(output.Confidence, context)
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.CreatedAt, context)
        : undefined,
    Criticality:
      output.Criticality !== undefined && output.Criticality !== null
        ? deserializeAws_restJson1NumberFilterList(output.Criticality, context)
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? deserializeAws_restJson1StringFilterList(output.Description, context)
        : undefined,
    FirstObservedAt:
      output.FirstObservedAt !== undefined && output.FirstObservedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.FirstObservedAt, context)
        : undefined,
    GeneratorId:
      output.GeneratorId !== undefined && output.GeneratorId !== null
        ? deserializeAws_restJson1StringFilterList(output.GeneratorId, context)
        : undefined,
    Id:
      output.Id !== undefined && output.Id !== null
        ? deserializeAws_restJson1StringFilterList(output.Id, context)
        : undefined,
    Keyword:
      output.Keyword !== undefined && output.Keyword !== null
        ? deserializeAws_restJson1KeywordFilterList(output.Keyword, context)
        : undefined,
    LastObservedAt:
      output.LastObservedAt !== undefined && output.LastObservedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.LastObservedAt, context)
        : undefined,
    MalwareName:
      output.MalwareName !== undefined && output.MalwareName !== null
        ? deserializeAws_restJson1StringFilterList(output.MalwareName, context)
        : undefined,
    MalwarePath:
      output.MalwarePath !== undefined && output.MalwarePath !== null
        ? deserializeAws_restJson1StringFilterList(output.MalwarePath, context)
        : undefined,
    MalwareState:
      output.MalwareState !== undefined && output.MalwareState !== null
        ? deserializeAws_restJson1StringFilterList(output.MalwareState, context)
        : undefined,
    MalwareType:
      output.MalwareType !== undefined && output.MalwareType !== null
        ? deserializeAws_restJson1StringFilterList(output.MalwareType, context)
        : undefined,
    NetworkDestinationDomain:
      output.NetworkDestinationDomain !== undefined && output.NetworkDestinationDomain !== null
        ? deserializeAws_restJson1StringFilterList(output.NetworkDestinationDomain, context)
        : undefined,
    NetworkDestinationIpV4:
      output.NetworkDestinationIpV4 !== undefined && output.NetworkDestinationIpV4 !== null
        ? deserializeAws_restJson1IpFilterList(output.NetworkDestinationIpV4, context)
        : undefined,
    NetworkDestinationIpV6:
      output.NetworkDestinationIpV6 !== undefined && output.NetworkDestinationIpV6 !== null
        ? deserializeAws_restJson1IpFilterList(output.NetworkDestinationIpV6, context)
        : undefined,
    NetworkDestinationPort:
      output.NetworkDestinationPort !== undefined && output.NetworkDestinationPort !== null
        ? deserializeAws_restJson1NumberFilterList(output.NetworkDestinationPort, context)
        : undefined,
    NetworkDirection:
      output.NetworkDirection !== undefined && output.NetworkDirection !== null
        ? deserializeAws_restJson1StringFilterList(output.NetworkDirection, context)
        : undefined,
    NetworkProtocol:
      output.NetworkProtocol !== undefined && output.NetworkProtocol !== null
        ? deserializeAws_restJson1StringFilterList(output.NetworkProtocol, context)
        : undefined,
    NetworkSourceDomain:
      output.NetworkSourceDomain !== undefined && output.NetworkSourceDomain !== null
        ? deserializeAws_restJson1StringFilterList(output.NetworkSourceDomain, context)
        : undefined,
    NetworkSourceIpV4:
      output.NetworkSourceIpV4 !== undefined && output.NetworkSourceIpV4 !== null
        ? deserializeAws_restJson1IpFilterList(output.NetworkSourceIpV4, context)
        : undefined,
    NetworkSourceIpV6:
      output.NetworkSourceIpV6 !== undefined && output.NetworkSourceIpV6 !== null
        ? deserializeAws_restJson1IpFilterList(output.NetworkSourceIpV6, context)
        : undefined,
    NetworkSourceMac:
      output.NetworkSourceMac !== undefined && output.NetworkSourceMac !== null
        ? deserializeAws_restJson1StringFilterList(output.NetworkSourceMac, context)
        : undefined,
    NetworkSourcePort:
      output.NetworkSourcePort !== undefined && output.NetworkSourcePort !== null
        ? deserializeAws_restJson1NumberFilterList(output.NetworkSourcePort, context)
        : undefined,
    NoteText:
      output.NoteText !== undefined && output.NoteText !== null
        ? deserializeAws_restJson1StringFilterList(output.NoteText, context)
        : undefined,
    NoteUpdatedAt:
      output.NoteUpdatedAt !== undefined && output.NoteUpdatedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.NoteUpdatedAt, context)
        : undefined,
    NoteUpdatedBy:
      output.NoteUpdatedBy !== undefined && output.NoteUpdatedBy !== null
        ? deserializeAws_restJson1StringFilterList(output.NoteUpdatedBy, context)
        : undefined,
    ProcessLaunchedAt:
      output.ProcessLaunchedAt !== undefined && output.ProcessLaunchedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.ProcessLaunchedAt, context)
        : undefined,
    ProcessName:
      output.ProcessName !== undefined && output.ProcessName !== null
        ? deserializeAws_restJson1StringFilterList(output.ProcessName, context)
        : undefined,
    ProcessParentPid:
      output.ProcessParentPid !== undefined && output.ProcessParentPid !== null
        ? deserializeAws_restJson1NumberFilterList(output.ProcessParentPid, context)
        : undefined,
    ProcessPath:
      output.ProcessPath !== undefined && output.ProcessPath !== null
        ? deserializeAws_restJson1StringFilterList(output.ProcessPath, context)
        : undefined,
    ProcessPid:
      output.ProcessPid !== undefined && output.ProcessPid !== null
        ? deserializeAws_restJson1NumberFilterList(output.ProcessPid, context)
        : undefined,
    ProcessTerminatedAt:
      output.ProcessTerminatedAt !== undefined && output.ProcessTerminatedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.ProcessTerminatedAt, context)
        : undefined,
    ProductArn:
      output.ProductArn !== undefined && output.ProductArn !== null
        ? deserializeAws_restJson1StringFilterList(output.ProductArn, context)
        : undefined,
    ProductFields:
      output.ProductFields !== undefined && output.ProductFields !== null
        ? deserializeAws_restJson1MapFilterList(output.ProductFields, context)
        : undefined,
    ProductName:
      output.ProductName !== undefined && output.ProductName !== null
        ? deserializeAws_restJson1StringFilterList(output.ProductName, context)
        : undefined,
    RecommendationText:
      output.RecommendationText !== undefined && output.RecommendationText !== null
        ? deserializeAws_restJson1StringFilterList(output.RecommendationText, context)
        : undefined,
    RecordState:
      output.RecordState !== undefined && output.RecordState !== null
        ? deserializeAws_restJson1StringFilterList(output.RecordState, context)
        : undefined,
    RelatedFindingsId:
      output.RelatedFindingsId !== undefined && output.RelatedFindingsId !== null
        ? deserializeAws_restJson1StringFilterList(output.RelatedFindingsId, context)
        : undefined,
    RelatedFindingsProductArn:
      output.RelatedFindingsProductArn !== undefined && output.RelatedFindingsProductArn !== null
        ? deserializeAws_restJson1StringFilterList(output.RelatedFindingsProductArn, context)
        : undefined,
    ResourceAwsEc2InstanceIamInstanceProfileArn:
      output.ResourceAwsEc2InstanceIamInstanceProfileArn !== undefined &&
      output.ResourceAwsEc2InstanceIamInstanceProfileArn !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceIamInstanceProfileArn, context)
        : undefined,
    ResourceAwsEc2InstanceImageId:
      output.ResourceAwsEc2InstanceImageId !== undefined && output.ResourceAwsEc2InstanceImageId !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceImageId, context)
        : undefined,
    ResourceAwsEc2InstanceIpV4Addresses:
      output.ResourceAwsEc2InstanceIpV4Addresses !== undefined && output.ResourceAwsEc2InstanceIpV4Addresses !== null
        ? deserializeAws_restJson1IpFilterList(output.ResourceAwsEc2InstanceIpV4Addresses, context)
        : undefined,
    ResourceAwsEc2InstanceIpV6Addresses:
      output.ResourceAwsEc2InstanceIpV6Addresses !== undefined && output.ResourceAwsEc2InstanceIpV6Addresses !== null
        ? deserializeAws_restJson1IpFilterList(output.ResourceAwsEc2InstanceIpV6Addresses, context)
        : undefined,
    ResourceAwsEc2InstanceKeyName:
      output.ResourceAwsEc2InstanceKeyName !== undefined && output.ResourceAwsEc2InstanceKeyName !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceKeyName, context)
        : undefined,
    ResourceAwsEc2InstanceLaunchedAt:
      output.ResourceAwsEc2InstanceLaunchedAt !== undefined && output.ResourceAwsEc2InstanceLaunchedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.ResourceAwsEc2InstanceLaunchedAt, context)
        : undefined,
    ResourceAwsEc2InstanceSubnetId:
      output.ResourceAwsEc2InstanceSubnetId !== undefined && output.ResourceAwsEc2InstanceSubnetId !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceSubnetId, context)
        : undefined,
    ResourceAwsEc2InstanceType:
      output.ResourceAwsEc2InstanceType !== undefined && output.ResourceAwsEc2InstanceType !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceType, context)
        : undefined,
    ResourceAwsEc2InstanceVpcId:
      output.ResourceAwsEc2InstanceVpcId !== undefined && output.ResourceAwsEc2InstanceVpcId !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceVpcId, context)
        : undefined,
    ResourceAwsIamAccessKeyCreatedAt:
      output.ResourceAwsIamAccessKeyCreatedAt !== undefined && output.ResourceAwsIamAccessKeyCreatedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.ResourceAwsIamAccessKeyCreatedAt, context)
        : undefined,
    ResourceAwsIamAccessKeyStatus:
      output.ResourceAwsIamAccessKeyStatus !== undefined && output.ResourceAwsIamAccessKeyStatus !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsIamAccessKeyStatus, context)
        : undefined,
    ResourceAwsIamAccessKeyUserName:
      output.ResourceAwsIamAccessKeyUserName !== undefined && output.ResourceAwsIamAccessKeyUserName !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsIamAccessKeyUserName, context)
        : undefined,
    ResourceAwsS3BucketOwnerId:
      output.ResourceAwsS3BucketOwnerId !== undefined && output.ResourceAwsS3BucketOwnerId !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsS3BucketOwnerId, context)
        : undefined,
    ResourceAwsS3BucketOwnerName:
      output.ResourceAwsS3BucketOwnerName !== undefined && output.ResourceAwsS3BucketOwnerName !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsS3BucketOwnerName, context)
        : undefined,
    ResourceContainerImageId:
      output.ResourceContainerImageId !== undefined && output.ResourceContainerImageId !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceContainerImageId, context)
        : undefined,
    ResourceContainerImageName:
      output.ResourceContainerImageName !== undefined && output.ResourceContainerImageName !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceContainerImageName, context)
        : undefined,
    ResourceContainerLaunchedAt:
      output.ResourceContainerLaunchedAt !== undefined && output.ResourceContainerLaunchedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.ResourceContainerLaunchedAt, context)
        : undefined,
    ResourceContainerName:
      output.ResourceContainerName !== undefined && output.ResourceContainerName !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceContainerName, context)
        : undefined,
    ResourceDetailsOther:
      output.ResourceDetailsOther !== undefined && output.ResourceDetailsOther !== null
        ? deserializeAws_restJson1MapFilterList(output.ResourceDetailsOther, context)
        : undefined,
    ResourceId:
      output.ResourceId !== undefined && output.ResourceId !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceId, context)
        : undefined,
    ResourcePartition:
      output.ResourcePartition !== undefined && output.ResourcePartition !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourcePartition, context)
        : undefined,
    ResourceRegion:
      output.ResourceRegion !== undefined && output.ResourceRegion !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceRegion, context)
        : undefined,
    ResourceTags:
      output.ResourceTags !== undefined && output.ResourceTags !== null
        ? deserializeAws_restJson1MapFilterList(output.ResourceTags, context)
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? deserializeAws_restJson1StringFilterList(output.ResourceType, context)
        : undefined,
    SeverityLabel:
      output.SeverityLabel !== undefined && output.SeverityLabel !== null
        ? deserializeAws_restJson1StringFilterList(output.SeverityLabel, context)
        : undefined,
    SeverityNormalized:
      output.SeverityNormalized !== undefined && output.SeverityNormalized !== null
        ? deserializeAws_restJson1NumberFilterList(output.SeverityNormalized, context)
        : undefined,
    SeverityProduct:
      output.SeverityProduct !== undefined && output.SeverityProduct !== null
        ? deserializeAws_restJson1NumberFilterList(output.SeverityProduct, context)
        : undefined,
    SourceUrl:
      output.SourceUrl !== undefined && output.SourceUrl !== null
        ? deserializeAws_restJson1StringFilterList(output.SourceUrl, context)
        : undefined,
    ThreatIntelIndicatorCategory:
      output.ThreatIntelIndicatorCategory !== undefined && output.ThreatIntelIndicatorCategory !== null
        ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorCategory, context)
        : undefined,
    ThreatIntelIndicatorLastObservedAt:
      output.ThreatIntelIndicatorLastObservedAt !== undefined && output.ThreatIntelIndicatorLastObservedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.ThreatIntelIndicatorLastObservedAt, context)
        : undefined,
    ThreatIntelIndicatorSource:
      output.ThreatIntelIndicatorSource !== undefined && output.ThreatIntelIndicatorSource !== null
        ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorSource, context)
        : undefined,
    ThreatIntelIndicatorSourceUrl:
      output.ThreatIntelIndicatorSourceUrl !== undefined && output.ThreatIntelIndicatorSourceUrl !== null
        ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorSourceUrl, context)
        : undefined,
    ThreatIntelIndicatorType:
      output.ThreatIntelIndicatorType !== undefined && output.ThreatIntelIndicatorType !== null
        ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorType, context)
        : undefined,
    ThreatIntelIndicatorValue:
      output.ThreatIntelIndicatorValue !== undefined && output.ThreatIntelIndicatorValue !== null
        ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorValue, context)
        : undefined,
    Title:
      output.Title !== undefined && output.Title !== null
        ? deserializeAws_restJson1StringFilterList(output.Title, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? deserializeAws_restJson1StringFilterList(output.Type, context)
        : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? deserializeAws_restJson1DateFilterList(output.UpdatedAt, context)
        : undefined,
    UserDefinedFields:
      output.UserDefinedFields !== undefined && output.UserDefinedFields !== null
        ? deserializeAws_restJson1MapFilterList(output.UserDefinedFields, context)
        : undefined,
    VerificationState:
      output.VerificationState !== undefined && output.VerificationState !== null
        ? deserializeAws_restJson1StringFilterList(output.VerificationState, context)
        : undefined,
    WorkflowState:
      output.WorkflowState !== undefined && output.WorkflowState !== null
        ? deserializeAws_restJson1StringFilterList(output.WorkflowState, context)
        : undefined,
    WorkflowStatus:
      output.WorkflowStatus !== undefined && output.WorkflowStatus !== null
        ? deserializeAws_restJson1StringFilterList(output.WorkflowStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsSecurityFindingIdentifier = (
  output: any,
  context: __SerdeContext
): AwsSecurityFindingIdentifier => {
  return {
    __type: "AwsSecurityFindingIdentifier",
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    ProductArn: output.ProductArn !== undefined && output.ProductArn !== null ? output.ProductArn : undefined,
  } as any;
};

const deserializeAws_restJson1AwsSecurityFindingIdentifierList = (
  output: any,
  context: __SerdeContext
): AwsSecurityFindingIdentifier[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1AwsSecurityFindingIdentifier(entry, context));
};

const deserializeAws_restJson1AwsSecurityFindingList = (output: any, context: __SerdeContext): AwsSecurityFinding[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1AwsSecurityFinding(entry, context));
};

const deserializeAws_restJson1AwsSnsTopicDetails = (output: any, context: __SerdeContext): AwsSnsTopicDetails => {
  return {
    __type: "AwsSnsTopicDetails",
    KmsMasterKeyId:
      output.KmsMasterKeyId !== undefined && output.KmsMasterKeyId !== null ? output.KmsMasterKeyId : undefined,
    Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
    Subscription:
      output.Subscription !== undefined && output.Subscription !== null
        ? deserializeAws_restJson1AwsSnsTopicSubscriptionList(output.Subscription, context)
        : undefined,
    TopicName: output.TopicName !== undefined && output.TopicName !== null ? output.TopicName : undefined,
  } as any;
};

const deserializeAws_restJson1AwsSnsTopicSubscription = (
  output: any,
  context: __SerdeContext
): AwsSnsTopicSubscription => {
  return {
    __type: "AwsSnsTopicSubscription",
    Endpoint: output.Endpoint !== undefined && output.Endpoint !== null ? output.Endpoint : undefined,
    Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
  } as any;
};

const deserializeAws_restJson1AwsSnsTopicSubscriptionList = (
  output: any,
  context: __SerdeContext
): AwsSnsTopicSubscription[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1AwsSnsTopicSubscription(entry, context));
};

const deserializeAws_restJson1AwsSqsQueueDetails = (output: any, context: __SerdeContext): AwsSqsQueueDetails => {
  return {
    __type: "AwsSqsQueueDetails",
    DeadLetterTargetArn:
      output.DeadLetterTargetArn !== undefined && output.DeadLetterTargetArn !== null
        ? output.DeadLetterTargetArn
        : undefined,
    KmsDataKeyReusePeriodSeconds:
      output.KmsDataKeyReusePeriodSeconds !== undefined && output.KmsDataKeyReusePeriodSeconds !== null
        ? output.KmsDataKeyReusePeriodSeconds
        : undefined,
    KmsMasterKeyId:
      output.KmsMasterKeyId !== undefined && output.KmsMasterKeyId !== null ? output.KmsMasterKeyId : undefined,
    QueueName: output.QueueName !== undefined && output.QueueName !== null ? output.QueueName : undefined,
  } as any;
};

const deserializeAws_restJson1AwsWafWebAclDetails = (output: any, context: __SerdeContext): AwsWafWebAclDetails => {
  return {
    __type: "AwsWafWebAclDetails",
    DefaultAction:
      output.DefaultAction !== undefined && output.DefaultAction !== null ? output.DefaultAction : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_restJson1AwsWafWebAclRuleList(output.Rules, context)
        : undefined,
    WebAclId: output.WebAclId !== undefined && output.WebAclId !== null ? output.WebAclId : undefined,
  } as any;
};

const deserializeAws_restJson1AwsWafWebAclRule = (output: any, context: __SerdeContext): AwsWafWebAclRule => {
  return {
    __type: "AwsWafWebAclRule",
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_restJson1WafAction(output.Action, context)
        : undefined,
    ExcludedRules:
      output.ExcludedRules !== undefined && output.ExcludedRules !== null
        ? deserializeAws_restJson1WafExcludedRuleList(output.ExcludedRules, context)
        : undefined,
    OverrideAction:
      output.OverrideAction !== undefined && output.OverrideAction !== null
        ? deserializeAws_restJson1WafOverrideAction(output.OverrideAction, context)
        : undefined,
    Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
    RuleId: output.RuleId !== undefined && output.RuleId !== null ? output.RuleId : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1AwsWafWebAclRuleList = (output: any, context: __SerdeContext): AwsWafWebAclRule[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1AwsWafWebAclRule(entry, context));
};

const deserializeAws_restJson1BatchUpdateFindingsUnprocessedFinding = (
  output: any,
  context: __SerdeContext
): BatchUpdateFindingsUnprocessedFinding => {
  return {
    __type: "BatchUpdateFindingsUnprocessedFinding",
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    FindingIdentifier:
      output.FindingIdentifier !== undefined && output.FindingIdentifier !== null
        ? deserializeAws_restJson1AwsSecurityFindingIdentifier(output.FindingIdentifier, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchUpdateFindingsUnprocessedFindingsList = (
  output: any,
  context: __SerdeContext
): BatchUpdateFindingsUnprocessedFinding[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1BatchUpdateFindingsUnprocessedFinding(entry, context)
  );
};

const deserializeAws_restJson1CategoryList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1CidrBlockAssociation = (output: any, context: __SerdeContext): CidrBlockAssociation => {
  return {
    __type: "CidrBlockAssociation",
    AssociationId:
      output.AssociationId !== undefined && output.AssociationId !== null ? output.AssociationId : undefined,
    CidrBlock: output.CidrBlock !== undefined && output.CidrBlock !== null ? output.CidrBlock : undefined,
    CidrBlockState:
      output.CidrBlockState !== undefined && output.CidrBlockState !== null ? output.CidrBlockState : undefined,
  } as any;
};

const deserializeAws_restJson1CidrBlockAssociationList = (
  output: any,
  context: __SerdeContext
): CidrBlockAssociation[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1CidrBlockAssociation(entry, context));
};

const deserializeAws_restJson1Compliance = (output: any, context: __SerdeContext): Compliance => {
  return {
    __type: "Compliance",
    RelatedRequirements:
      output.RelatedRequirements !== undefined && output.RelatedRequirements !== null
        ? deserializeAws_restJson1RelatedRequirementsList(output.RelatedRequirements, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    StatusReasons:
      output.StatusReasons !== undefined && output.StatusReasons !== null
        ? deserializeAws_restJson1StatusReasonsList(output.StatusReasons, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ContainerDetails = (output: any, context: __SerdeContext): ContainerDetails => {
  return {
    __type: "ContainerDetails",
    ImageId: output.ImageId !== undefined && output.ImageId !== null ? output.ImageId : undefined,
    ImageName: output.ImageName !== undefined && output.ImageName !== null ? output.ImageName : undefined,
    LaunchedAt: output.LaunchedAt !== undefined && output.LaunchedAt !== null ? output.LaunchedAt : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_restJson1Cvss = (output: any, context: __SerdeContext): Cvss => {
  return {
    __type: "Cvss",
    BaseScore: output.BaseScore !== undefined && output.BaseScore !== null ? output.BaseScore : undefined,
    BaseVector: output.BaseVector !== undefined && output.BaseVector !== null ? output.BaseVector : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1CvssList = (output: any, context: __SerdeContext): Cvss[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1Cvss(entry, context));
};

const deserializeAws_restJson1DateFilter = (output: any, context: __SerdeContext): DateFilter => {
  return {
    __type: "DateFilter",
    DateRange:
      output.DateRange !== undefined && output.DateRange !== null
        ? deserializeAws_restJson1DateRange(output.DateRange, context)
        : undefined,
    End: output.End !== undefined && output.End !== null ? output.End : undefined,
    Start: output.Start !== undefined && output.Start !== null ? output.Start : undefined,
  } as any;
};

const deserializeAws_restJson1DateFilterList = (output: any, context: __SerdeContext): DateFilter[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1DateFilter(entry, context));
};

const deserializeAws_restJson1DateRange = (output: any, context: __SerdeContext): DateRange => {
  return {
    __type: "DateRange",
    Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_restJson1FieldMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const deserializeAws_restJson1ImportFindingsError = (output: any, context: __SerdeContext): ImportFindingsError => {
  return {
    __type: "ImportFindingsError",
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
  } as any;
};

const deserializeAws_restJson1ImportFindingsErrorList = (
  output: any,
  context: __SerdeContext
): ImportFindingsError[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1ImportFindingsError(entry, context));
};

const deserializeAws_restJson1Insight = (output: any, context: __SerdeContext): Insight => {
  return {
    __type: "Insight",
    Filters:
      output.Filters !== undefined && output.Filters !== null
        ? deserializeAws_restJson1AwsSecurityFindingFilters(output.Filters, context)
        : undefined,
    GroupByAttribute:
      output.GroupByAttribute !== undefined && output.GroupByAttribute !== null ? output.GroupByAttribute : undefined,
    InsightArn: output.InsightArn !== undefined && output.InsightArn !== null ? output.InsightArn : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_restJson1InsightList = (output: any, context: __SerdeContext): Insight[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1Insight(entry, context));
};

const deserializeAws_restJson1InsightResults = (output: any, context: __SerdeContext): InsightResults => {
  return {
    __type: "InsightResults",
    GroupByAttribute:
      output.GroupByAttribute !== undefined && output.GroupByAttribute !== null ? output.GroupByAttribute : undefined,
    InsightArn: output.InsightArn !== undefined && output.InsightArn !== null ? output.InsightArn : undefined,
    ResultValues:
      output.ResultValues !== undefined && output.ResultValues !== null
        ? deserializeAws_restJson1InsightResultValueList(output.ResultValues, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InsightResultValue = (output: any, context: __SerdeContext): InsightResultValue => {
  return {
    __type: "InsightResultValue",
    Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
    GroupByAttributeValue:
      output.GroupByAttributeValue !== undefined && output.GroupByAttributeValue !== null
        ? output.GroupByAttributeValue
        : undefined,
  } as any;
};

const deserializeAws_restJson1InsightResultValueList = (output: any, context: __SerdeContext): InsightResultValue[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1InsightResultValue(entry, context));
};

const deserializeAws_restJson1IntegrationTypeList = (
  output: any,
  context: __SerdeContext
): (IntegrationType | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1Invitation = (output: any, context: __SerdeContext): Invitation => {
  return {
    __type: "Invitation",
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    InvitationId: output.InvitationId !== undefined && output.InvitationId !== null ? output.InvitationId : undefined,
    InvitedAt: output.InvitedAt !== undefined && output.InvitedAt !== null ? new Date(output.InvitedAt) : undefined,
    MemberStatus: output.MemberStatus !== undefined && output.MemberStatus !== null ? output.MemberStatus : undefined,
  } as any;
};

const deserializeAws_restJson1InvitationList = (output: any, context: __SerdeContext): Invitation[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1Invitation(entry, context));
};

const deserializeAws_restJson1IpFilter = (output: any, context: __SerdeContext): IpFilter => {
  return {
    __type: "IpFilter",
    Cidr: output.Cidr !== undefined && output.Cidr !== null ? output.Cidr : undefined,
  } as any;
};

const deserializeAws_restJson1IpFilterList = (output: any, context: __SerdeContext): IpFilter[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1IpFilter(entry, context));
};

const deserializeAws_restJson1Ipv6CidrBlockAssociation = (
  output: any,
  context: __SerdeContext
): Ipv6CidrBlockAssociation => {
  return {
    __type: "Ipv6CidrBlockAssociation",
    AssociationId:
      output.AssociationId !== undefined && output.AssociationId !== null ? output.AssociationId : undefined,
    CidrBlockState:
      output.CidrBlockState !== undefined && output.CidrBlockState !== null ? output.CidrBlockState : undefined,
    Ipv6CidrBlock:
      output.Ipv6CidrBlock !== undefined && output.Ipv6CidrBlock !== null ? output.Ipv6CidrBlock : undefined,
  } as any;
};

const deserializeAws_restJson1Ipv6CidrBlockAssociationList = (
  output: any,
  context: __SerdeContext
): Ipv6CidrBlockAssociation[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1Ipv6CidrBlockAssociation(entry, context));
};

const deserializeAws_restJson1KeywordFilter = (output: any, context: __SerdeContext): KeywordFilter => {
  return {
    __type: "KeywordFilter",
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_restJson1KeywordFilterList = (output: any, context: __SerdeContext): KeywordFilter[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1KeywordFilter(entry, context));
};

const deserializeAws_restJson1LoadBalancerState = (output: any, context: __SerdeContext): LoadBalancerState => {
  return {
    __type: "LoadBalancerState",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
  } as any;
};

const deserializeAws_restJson1Malware = (output: any, context: __SerdeContext): Malware => {
  return {
    __type: "Malware",
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1MalwareList = (output: any, context: __SerdeContext): Malware[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1Malware(entry, context));
};

const deserializeAws_restJson1MapFilter = (output: any, context: __SerdeContext): MapFilter => {
  return {
    __type: "MapFilter",
    Comparison: output.Comparison !== undefined && output.Comparison !== null ? output.Comparison : undefined,
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_restJson1MapFilterList = (output: any, context: __SerdeContext): MapFilter[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1MapFilter(entry, context));
};

const deserializeAws_restJson1Member = (output: any, context: __SerdeContext): Member => {
  return {
    __type: "Member",
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
    InvitedAt: output.InvitedAt !== undefined && output.InvitedAt !== null ? new Date(output.InvitedAt) : undefined,
    MasterId: output.MasterId !== undefined && output.MasterId !== null ? output.MasterId : undefined,
    MemberStatus: output.MemberStatus !== undefined && output.MemberStatus !== null ? output.MemberStatus : undefined,
    UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
  } as any;
};

const deserializeAws_restJson1MemberList = (output: any, context: __SerdeContext): Member[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1Member(entry, context));
};

const deserializeAws_restJson1Network = (output: any, context: __SerdeContext): Network => {
  return {
    __type: "Network",
    DestinationDomain:
      output.DestinationDomain !== undefined && output.DestinationDomain !== null
        ? output.DestinationDomain
        : undefined,
    DestinationIpV4:
      output.DestinationIpV4 !== undefined && output.DestinationIpV4 !== null ? output.DestinationIpV4 : undefined,
    DestinationIpV6:
      output.DestinationIpV6 !== undefined && output.DestinationIpV6 !== null ? output.DestinationIpV6 : undefined,
    DestinationPort:
      output.DestinationPort !== undefined && output.DestinationPort !== null ? output.DestinationPort : undefined,
    Direction: output.Direction !== undefined && output.Direction !== null ? output.Direction : undefined,
    OpenPortRange:
      output.OpenPortRange !== undefined && output.OpenPortRange !== null
        ? deserializeAws_restJson1PortRange(output.OpenPortRange, context)
        : undefined,
    Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
    SourceDomain: output.SourceDomain !== undefined && output.SourceDomain !== null ? output.SourceDomain : undefined,
    SourceIpV4: output.SourceIpV4 !== undefined && output.SourceIpV4 !== null ? output.SourceIpV4 : undefined,
    SourceIpV6: output.SourceIpV6 !== undefined && output.SourceIpV6 !== null ? output.SourceIpV6 : undefined,
    SourceMac: output.SourceMac !== undefined && output.SourceMac !== null ? output.SourceMac : undefined,
    SourcePort: output.SourcePort !== undefined && output.SourcePort !== null ? output.SourcePort : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkHeader = (output: any, context: __SerdeContext): NetworkHeader => {
  return {
    __type: "NetworkHeader",
    Destination:
      output.Destination !== undefined && output.Destination !== null
        ? deserializeAws_restJson1NetworkPathComponentDetails(output.Destination, context)
        : undefined,
    Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
    Source:
      output.Source !== undefined && output.Source !== null
        ? deserializeAws_restJson1NetworkPathComponentDetails(output.Source, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkPathComponent = (output: any, context: __SerdeContext): NetworkPathComponent => {
  return {
    __type: "NetworkPathComponent",
    ComponentId: output.ComponentId !== undefined && output.ComponentId !== null ? output.ComponentId : undefined,
    ComponentType:
      output.ComponentType !== undefined && output.ComponentType !== null ? output.ComponentType : undefined,
    Egress:
      output.Egress !== undefined && output.Egress !== null
        ? deserializeAws_restJson1NetworkHeader(output.Egress, context)
        : undefined,
    Ingress:
      output.Ingress !== undefined && output.Ingress !== null
        ? deserializeAws_restJson1NetworkHeader(output.Ingress, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkPathComponentDetails = (
  output: any,
  context: __SerdeContext
): NetworkPathComponentDetails => {
  return {
    __type: "NetworkPathComponentDetails",
    Address:
      output.Address !== undefined && output.Address !== null
        ? deserializeAws_restJson1StringList(output.Address, context)
        : undefined,
    PortRanges:
      output.PortRanges !== undefined && output.PortRanges !== null
        ? deserializeAws_restJson1PortRangeList(output.PortRanges, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkPathList = (output: any, context: __SerdeContext): NetworkPathComponent[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1NetworkPathComponent(entry, context));
};

const deserializeAws_restJson1NonEmptyStringList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1Note = (output: any, context: __SerdeContext): Note => {
  return {
    __type: "Note",
    Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
    UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? output.UpdatedAt : undefined,
    UpdatedBy: output.UpdatedBy !== undefined && output.UpdatedBy !== null ? output.UpdatedBy : undefined,
  } as any;
};

const deserializeAws_restJson1NumberFilter = (output: any, context: __SerdeContext): NumberFilter => {
  return {
    __type: "NumberFilter",
    Eq: output.Eq !== undefined && output.Eq !== null ? output.Eq : undefined,
    Gte: output.Gte !== undefined && output.Gte !== null ? output.Gte : undefined,
    Lte: output.Lte !== undefined && output.Lte !== null ? output.Lte : undefined,
  } as any;
};

const deserializeAws_restJson1NumberFilterList = (output: any, context: __SerdeContext): NumberFilter[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1NumberFilter(entry, context));
};

const deserializeAws_restJson1PortRange = (output: any, context: __SerdeContext): PortRange => {
  return {
    __type: "PortRange",
    Begin: output.Begin !== undefined && output.Begin !== null ? output.Begin : undefined,
    End: output.End !== undefined && output.End !== null ? output.End : undefined,
  } as any;
};

const deserializeAws_restJson1PortRangeList = (output: any, context: __SerdeContext): PortRange[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1PortRange(entry, context));
};

const deserializeAws_restJson1ProcessDetails = (output: any, context: __SerdeContext): ProcessDetails => {
  return {
    __type: "ProcessDetails",
    LaunchedAt: output.LaunchedAt !== undefined && output.LaunchedAt !== null ? output.LaunchedAt : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ParentPid: output.ParentPid !== undefined && output.ParentPid !== null ? output.ParentPid : undefined,
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    Pid: output.Pid !== undefined && output.Pid !== null ? output.Pid : undefined,
    TerminatedAt: output.TerminatedAt !== undefined && output.TerminatedAt !== null ? output.TerminatedAt : undefined,
  } as any;
};

const deserializeAws_restJson1Product = (output: any, context: __SerdeContext): Product => {
  return {
    __type: "Product",
    ActivationUrl:
      output.ActivationUrl !== undefined && output.ActivationUrl !== null ? output.ActivationUrl : undefined,
    Categories:
      output.Categories !== undefined && output.Categories !== null
        ? deserializeAws_restJson1CategoryList(output.Categories, context)
        : undefined,
    CompanyName: output.CompanyName !== undefined && output.CompanyName !== null ? output.CompanyName : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    IntegrationTypes:
      output.IntegrationTypes !== undefined && output.IntegrationTypes !== null
        ? deserializeAws_restJson1IntegrationTypeList(output.IntegrationTypes, context)
        : undefined,
    MarketplaceUrl:
      output.MarketplaceUrl !== undefined && output.MarketplaceUrl !== null ? output.MarketplaceUrl : undefined,
    ProductArn: output.ProductArn !== undefined && output.ProductArn !== null ? output.ProductArn : undefined,
    ProductName: output.ProductName !== undefined && output.ProductName !== null ? output.ProductName : undefined,
    ProductSubscriptionResourcePolicy:
      output.ProductSubscriptionResourcePolicy !== undefined && output.ProductSubscriptionResourcePolicy !== null
        ? output.ProductSubscriptionResourcePolicy
        : undefined,
  } as any;
};

const deserializeAws_restJson1ProductsList = (output: any, context: __SerdeContext): Product[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1Product(entry, context));
};

const deserializeAws_restJson1ProductSubscriptionArnList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return {
    __type: "Recommendation",
    Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
    Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
  } as any;
};

const deserializeAws_restJson1RelatedFinding = (output: any, context: __SerdeContext): RelatedFinding => {
  return {
    __type: "RelatedFinding",
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    ProductArn: output.ProductArn !== undefined && output.ProductArn !== null ? output.ProductArn : undefined,
  } as any;
};

const deserializeAws_restJson1RelatedFindingList = (output: any, context: __SerdeContext): RelatedFinding[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1RelatedFinding(entry, context));
};

const deserializeAws_restJson1RelatedRequirementsList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1Remediation = (output: any, context: __SerdeContext): Remediation => {
  return {
    __type: "Remediation",
    Recommendation:
      output.Recommendation !== undefined && output.Recommendation !== null
        ? deserializeAws_restJson1Recommendation(output.Recommendation, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    __type: "Resource",
    Details:
      output.Details !== undefined && output.Details !== null
        ? deserializeAws_restJson1ResourceDetails(output.Details, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Partition: output.Partition !== undefined && output.Partition !== null ? output.Partition : undefined,
    Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1FieldMap(output.Tags, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return {
    __type: "ResourceDetails",
    AwsAutoScalingAutoScalingGroup:
      output.AwsAutoScalingAutoScalingGroup !== undefined && output.AwsAutoScalingAutoScalingGroup !== null
        ? deserializeAws_restJson1AwsAutoScalingAutoScalingGroupDetails(output.AwsAutoScalingAutoScalingGroup, context)
        : undefined,
    AwsCloudFrontDistribution:
      output.AwsCloudFrontDistribution !== undefined && output.AwsCloudFrontDistribution !== null
        ? deserializeAws_restJson1AwsCloudFrontDistributionDetails(output.AwsCloudFrontDistribution, context)
        : undefined,
    AwsCodeBuildProject:
      output.AwsCodeBuildProject !== undefined && output.AwsCodeBuildProject !== null
        ? deserializeAws_restJson1AwsCodeBuildProjectDetails(output.AwsCodeBuildProject, context)
        : undefined,
    AwsEc2Instance:
      output.AwsEc2Instance !== undefined && output.AwsEc2Instance !== null
        ? deserializeAws_restJson1AwsEc2InstanceDetails(output.AwsEc2Instance, context)
        : undefined,
    AwsEc2NetworkInterface:
      output.AwsEc2NetworkInterface !== undefined && output.AwsEc2NetworkInterface !== null
        ? deserializeAws_restJson1AwsEc2NetworkInterfaceDetails(output.AwsEc2NetworkInterface, context)
        : undefined,
    AwsEc2SecurityGroup:
      output.AwsEc2SecurityGroup !== undefined && output.AwsEc2SecurityGroup !== null
        ? deserializeAws_restJson1AwsEc2SecurityGroupDetails(output.AwsEc2SecurityGroup, context)
        : undefined,
    AwsEc2Volume:
      output.AwsEc2Volume !== undefined && output.AwsEc2Volume !== null
        ? deserializeAws_restJson1AwsEc2VolumeDetails(output.AwsEc2Volume, context)
        : undefined,
    AwsEc2Vpc:
      output.AwsEc2Vpc !== undefined && output.AwsEc2Vpc !== null
        ? deserializeAws_restJson1AwsEc2VpcDetails(output.AwsEc2Vpc, context)
        : undefined,
    AwsElasticsearchDomain:
      output.AwsElasticsearchDomain !== undefined && output.AwsElasticsearchDomain !== null
        ? deserializeAws_restJson1AwsElasticsearchDomainDetails(output.AwsElasticsearchDomain, context)
        : undefined,
    AwsElbv2LoadBalancer:
      output.AwsElbv2LoadBalancer !== undefined && output.AwsElbv2LoadBalancer !== null
        ? deserializeAws_restJson1AwsElbv2LoadBalancerDetails(output.AwsElbv2LoadBalancer, context)
        : undefined,
    AwsIamAccessKey:
      output.AwsIamAccessKey !== undefined && output.AwsIamAccessKey !== null
        ? deserializeAws_restJson1AwsIamAccessKeyDetails(output.AwsIamAccessKey, context)
        : undefined,
    AwsIamRole:
      output.AwsIamRole !== undefined && output.AwsIamRole !== null
        ? deserializeAws_restJson1AwsIamRoleDetails(output.AwsIamRole, context)
        : undefined,
    AwsKmsKey:
      output.AwsKmsKey !== undefined && output.AwsKmsKey !== null
        ? deserializeAws_restJson1AwsKmsKeyDetails(output.AwsKmsKey, context)
        : undefined,
    AwsLambdaFunction:
      output.AwsLambdaFunction !== undefined && output.AwsLambdaFunction !== null
        ? deserializeAws_restJson1AwsLambdaFunctionDetails(output.AwsLambdaFunction, context)
        : undefined,
    AwsLambdaLayerVersion:
      output.AwsLambdaLayerVersion !== undefined && output.AwsLambdaLayerVersion !== null
        ? deserializeAws_restJson1AwsLambdaLayerVersionDetails(output.AwsLambdaLayerVersion, context)
        : undefined,
    AwsRdsDbInstance:
      output.AwsRdsDbInstance !== undefined && output.AwsRdsDbInstance !== null
        ? deserializeAws_restJson1AwsRdsDbInstanceDetails(output.AwsRdsDbInstance, context)
        : undefined,
    AwsS3Bucket:
      output.AwsS3Bucket !== undefined && output.AwsS3Bucket !== null
        ? deserializeAws_restJson1AwsS3BucketDetails(output.AwsS3Bucket, context)
        : undefined,
    AwsS3Object:
      output.AwsS3Object !== undefined && output.AwsS3Object !== null
        ? deserializeAws_restJson1AwsS3ObjectDetails(output.AwsS3Object, context)
        : undefined,
    AwsSnsTopic:
      output.AwsSnsTopic !== undefined && output.AwsSnsTopic !== null
        ? deserializeAws_restJson1AwsSnsTopicDetails(output.AwsSnsTopic, context)
        : undefined,
    AwsSqsQueue:
      output.AwsSqsQueue !== undefined && output.AwsSqsQueue !== null
        ? deserializeAws_restJson1AwsSqsQueueDetails(output.AwsSqsQueue, context)
        : undefined,
    AwsWafWebAcl:
      output.AwsWafWebAcl !== undefined && output.AwsWafWebAcl !== null
        ? deserializeAws_restJson1AwsWafWebAclDetails(output.AwsWafWebAcl, context)
        : undefined,
    Container:
      output.Container !== undefined && output.Container !== null
        ? deserializeAws_restJson1ContainerDetails(output.Container, context)
        : undefined,
    Other:
      output.Other !== undefined && output.Other !== null
        ? deserializeAws_restJson1FieldMap(output.Other, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceList = (output: any, context: __SerdeContext): Resource[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1Resource(entry, context));
};

const deserializeAws_restJson1Result = (output: any, context: __SerdeContext): Result => {
  return {
    __type: "Result",
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    ProcessingResult:
      output.ProcessingResult !== undefined && output.ProcessingResult !== null ? output.ProcessingResult : undefined,
  } as any;
};

const deserializeAws_restJson1ResultList = (output: any, context: __SerdeContext): Result[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1Result(entry, context));
};

const deserializeAws_restJson1SecurityGroups = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1Severity = (output: any, context: __SerdeContext): Severity => {
  return {
    __type: "Severity",
    Label: output.Label !== undefined && output.Label !== null ? output.Label : undefined,
    Normalized: output.Normalized !== undefined && output.Normalized !== null ? output.Normalized : undefined,
    Original: output.Original !== undefined && output.Original !== null ? output.Original : undefined,
    Product: output.Product !== undefined && output.Product !== null ? output.Product : undefined,
  } as any;
};

const deserializeAws_restJson1SoftwarePackage = (output: any, context: __SerdeContext): SoftwarePackage => {
  return {
    __type: "SoftwarePackage",
    Architecture: output.Architecture !== undefined && output.Architecture !== null ? output.Architecture : undefined,
    Epoch: output.Epoch !== undefined && output.Epoch !== null ? output.Epoch : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Release: output.Release !== undefined && output.Release !== null ? output.Release : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1SoftwarePackageList = (output: any, context: __SerdeContext): SoftwarePackage[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1SoftwarePackage(entry, context));
};

const deserializeAws_restJson1Standard = (output: any, context: __SerdeContext): Standard => {
  return {
    __type: "Standard",
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    EnabledByDefault:
      output.EnabledByDefault !== undefined && output.EnabledByDefault !== null ? output.EnabledByDefault : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    StandardsArn: output.StandardsArn !== undefined && output.StandardsArn !== null ? output.StandardsArn : undefined,
  } as any;
};

const deserializeAws_restJson1Standards = (output: any, context: __SerdeContext): Standard[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1Standard(entry, context));
};

const deserializeAws_restJson1StandardsControl = (output: any, context: __SerdeContext): StandardsControl => {
  return {
    __type: "StandardsControl",
    ControlId: output.ControlId !== undefined && output.ControlId !== null ? output.ControlId : undefined,
    ControlStatus:
      output.ControlStatus !== undefined && output.ControlStatus !== null ? output.ControlStatus : undefined,
    ControlStatusUpdatedAt:
      output.ControlStatusUpdatedAt !== undefined && output.ControlStatusUpdatedAt !== null
        ? new Date(output.ControlStatusUpdatedAt)
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    DisabledReason:
      output.DisabledReason !== undefined && output.DisabledReason !== null ? output.DisabledReason : undefined,
    RelatedRequirements:
      output.RelatedRequirements !== undefined && output.RelatedRequirements !== null
        ? deserializeAws_restJson1RelatedRequirementsList(output.RelatedRequirements, context)
        : undefined,
    RemediationUrl:
      output.RemediationUrl !== undefined && output.RemediationUrl !== null ? output.RemediationUrl : undefined,
    SeverityRating:
      output.SeverityRating !== undefined && output.SeverityRating !== null ? output.SeverityRating : undefined,
    StandardsControlArn:
      output.StandardsControlArn !== undefined && output.StandardsControlArn !== null
        ? output.StandardsControlArn
        : undefined,
    Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
  } as any;
};

const deserializeAws_restJson1StandardsControls = (output: any, context: __SerdeContext): StandardsControl[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1StandardsControl(entry, context));
};

const deserializeAws_restJson1StandardsInputParameterMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const deserializeAws_restJson1StandardsSubscription = (output: any, context: __SerdeContext): StandardsSubscription => {
  return {
    __type: "StandardsSubscription",
    StandardsArn: output.StandardsArn !== undefined && output.StandardsArn !== null ? output.StandardsArn : undefined,
    StandardsInput:
      output.StandardsInput !== undefined && output.StandardsInput !== null
        ? deserializeAws_restJson1StandardsInputParameterMap(output.StandardsInput, context)
        : undefined,
    StandardsStatus:
      output.StandardsStatus !== undefined && output.StandardsStatus !== null ? output.StandardsStatus : undefined,
    StandardsSubscriptionArn:
      output.StandardsSubscriptionArn !== undefined && output.StandardsSubscriptionArn !== null
        ? output.StandardsSubscriptionArn
        : undefined,
  } as any;
};

const deserializeAws_restJson1StandardsSubscriptions = (
  output: any,
  context: __SerdeContext
): StandardsSubscription[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1StandardsSubscription(entry, context));
};

const deserializeAws_restJson1StatusReason = (output: any, context: __SerdeContext): StatusReason => {
  return {
    __type: "StatusReason",
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    ReasonCode: output.ReasonCode !== undefined && output.ReasonCode !== null ? output.ReasonCode : undefined,
  } as any;
};

const deserializeAws_restJson1StatusReasonsList = (output: any, context: __SerdeContext): StatusReason[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1StatusReason(entry, context));
};

const deserializeAws_restJson1StringFilter = (output: any, context: __SerdeContext): StringFilter => {
  return {
    __type: "StringFilter",
    Comparison: output.Comparison !== undefined && output.Comparison !== null ? output.Comparison : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_restJson1StringFilterList = (output: any, context: __SerdeContext): StringFilter[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1StringFilter(entry, context));
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const deserializeAws_restJson1ThreatIntelIndicator = (output: any, context: __SerdeContext): ThreatIntelIndicator => {
  return {
    __type: "ThreatIntelIndicator",
    Category: output.Category !== undefined && output.Category !== null ? output.Category : undefined,
    LastObservedAt:
      output.LastObservedAt !== undefined && output.LastObservedAt !== null ? output.LastObservedAt : undefined,
    Source: output.Source !== undefined && output.Source !== null ? output.Source : undefined,
    SourceUrl: output.SourceUrl !== undefined && output.SourceUrl !== null ? output.SourceUrl : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_restJson1ThreatIntelIndicatorList = (
  output: any,
  context: __SerdeContext
): ThreatIntelIndicator[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1ThreatIntelIndicator(entry, context));
};

const deserializeAws_restJson1TypeList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1Vulnerability = (output: any, context: __SerdeContext): Vulnerability => {
  return {
    __type: "Vulnerability",
    Cvss:
      output.Cvss !== undefined && output.Cvss !== null
        ? deserializeAws_restJson1CvssList(output.Cvss, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    ReferenceUrls:
      output.ReferenceUrls !== undefined && output.ReferenceUrls !== null
        ? deserializeAws_restJson1StringList(output.ReferenceUrls, context)
        : undefined,
    RelatedVulnerabilities:
      output.RelatedVulnerabilities !== undefined && output.RelatedVulnerabilities !== null
        ? deserializeAws_restJson1StringList(output.RelatedVulnerabilities, context)
        : undefined,
    Vendor:
      output.Vendor !== undefined && output.Vendor !== null
        ? deserializeAws_restJson1VulnerabilityVendor(output.Vendor, context)
        : undefined,
    VulnerablePackages:
      output.VulnerablePackages !== undefined && output.VulnerablePackages !== null
        ? deserializeAws_restJson1SoftwarePackageList(output.VulnerablePackages, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VulnerabilityList = (output: any, context: __SerdeContext): Vulnerability[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1Vulnerability(entry, context));
};

const deserializeAws_restJson1VulnerabilityVendor = (output: any, context: __SerdeContext): VulnerabilityVendor => {
  return {
    __type: "VulnerabilityVendor",
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
    VendorCreatedAt:
      output.VendorCreatedAt !== undefined && output.VendorCreatedAt !== null ? output.VendorCreatedAt : undefined,
    VendorSeverity:
      output.VendorSeverity !== undefined && output.VendorSeverity !== null ? output.VendorSeverity : undefined,
    VendorUpdatedAt:
      output.VendorUpdatedAt !== undefined && output.VendorUpdatedAt !== null ? output.VendorUpdatedAt : undefined,
  } as any;
};

const deserializeAws_restJson1WafAction = (output: any, context: __SerdeContext): WafAction => {
  return {
    __type: "WafAction",
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1WafExcludedRule = (output: any, context: __SerdeContext): WafExcludedRule => {
  return {
    __type: "WafExcludedRule",
    RuleId: output.RuleId !== undefined && output.RuleId !== null ? output.RuleId : undefined,
  } as any;
};

const deserializeAws_restJson1WafExcludedRuleList = (output: any, context: __SerdeContext): WafExcludedRule[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1WafExcludedRule(entry, context));
};

const deserializeAws_restJson1WafOverrideAction = (output: any, context: __SerdeContext): WafOverrideAction => {
  return {
    __type: "WafOverrideAction",
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1Workflow = (output: any, context: __SerdeContext): Workflow => {
  return {
    __type: "Workflow",
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
