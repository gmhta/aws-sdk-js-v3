
import { AllocateStaticIpCommandInput, AllocateStaticIpCommandOutput } from "../commands/AllocateStaticIpCommand.ts";
import {
  AttachCertificateToDistributionCommandInput,
  AttachCertificateToDistributionCommandOutput,
} from "../commands/AttachCertificateToDistributionCommand.ts";
import { AttachDiskCommandInput, AttachDiskCommandOutput } from "../commands/AttachDiskCommand.ts";
import {
  AttachInstancesToLoadBalancerCommandInput,
  AttachInstancesToLoadBalancerCommandOutput,
} from "../commands/AttachInstancesToLoadBalancerCommand.ts";
import {
  AttachLoadBalancerTlsCertificateCommandInput,
  AttachLoadBalancerTlsCertificateCommandOutput,
} from "../commands/AttachLoadBalancerTlsCertificateCommand.ts";
import { AttachStaticIpCommandInput, AttachStaticIpCommandOutput } from "../commands/AttachStaticIpCommand.ts";
import {
  CloseInstancePublicPortsCommandInput,
  CloseInstancePublicPortsCommandOutput,
} from "../commands/CloseInstancePublicPortsCommand.ts";
import { CopySnapshotCommandInput, CopySnapshotCommandOutput } from "../commands/CopySnapshotCommand.ts";
import { CreateCertificateCommandInput, CreateCertificateCommandOutput } from "../commands/CreateCertificateCommand.ts";
import {
  CreateCloudFormationStackCommandInput,
  CreateCloudFormationStackCommandOutput,
} from "../commands/CreateCloudFormationStackCommand.ts";
import {
  CreateContactMethodCommandInput,
  CreateContactMethodCommandOutput,
} from "../commands/CreateContactMethodCommand.ts";
import { CreateDiskCommandInput, CreateDiskCommandOutput } from "../commands/CreateDiskCommand.ts";
import {
  CreateDiskFromSnapshotCommandInput,
  CreateDiskFromSnapshotCommandOutput,
} from "../commands/CreateDiskFromSnapshotCommand.ts";
import { CreateDiskSnapshotCommandInput, CreateDiskSnapshotCommandOutput } from "../commands/CreateDiskSnapshotCommand.ts";
import { CreateDistributionCommandInput, CreateDistributionCommandOutput } from "../commands/CreateDistributionCommand.ts";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand.ts";
import { CreateDomainEntryCommandInput, CreateDomainEntryCommandOutput } from "../commands/CreateDomainEntryCommand.ts";
import {
  CreateInstanceSnapshotCommandInput,
  CreateInstanceSnapshotCommandOutput,
} from "../commands/CreateInstanceSnapshotCommand.ts";
import { CreateInstancesCommandInput, CreateInstancesCommandOutput } from "../commands/CreateInstancesCommand.ts";
import {
  CreateInstancesFromSnapshotCommandInput,
  CreateInstancesFromSnapshotCommandOutput,
} from "../commands/CreateInstancesFromSnapshotCommand.ts";
import { CreateKeyPairCommandInput, CreateKeyPairCommandOutput } from "../commands/CreateKeyPairCommand.ts";
import { CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput } from "../commands/CreateLoadBalancerCommand.ts";
import {
  CreateLoadBalancerTlsCertificateCommandInput,
  CreateLoadBalancerTlsCertificateCommandOutput,
} from "../commands/CreateLoadBalancerTlsCertificateCommand.ts";
import {
  CreateRelationalDatabaseCommandInput,
  CreateRelationalDatabaseCommandOutput,
} from "../commands/CreateRelationalDatabaseCommand.ts";
import {
  CreateRelationalDatabaseFromSnapshotCommandInput,
  CreateRelationalDatabaseFromSnapshotCommandOutput,
} from "../commands/CreateRelationalDatabaseFromSnapshotCommand.ts";
import {
  CreateRelationalDatabaseSnapshotCommandInput,
  CreateRelationalDatabaseSnapshotCommandOutput,
} from "../commands/CreateRelationalDatabaseSnapshotCommand.ts";
import { DeleteAlarmCommandInput, DeleteAlarmCommandOutput } from "../commands/DeleteAlarmCommand.ts";
import { DeleteAutoSnapshotCommandInput, DeleteAutoSnapshotCommandOutput } from "../commands/DeleteAutoSnapshotCommand.ts";
import { DeleteCertificateCommandInput, DeleteCertificateCommandOutput } from "../commands/DeleteCertificateCommand.ts";
import {
  DeleteContactMethodCommandInput,
  DeleteContactMethodCommandOutput,
} from "../commands/DeleteContactMethodCommand.ts";
import { DeleteDiskCommandInput, DeleteDiskCommandOutput } from "../commands/DeleteDiskCommand.ts";
import { DeleteDiskSnapshotCommandInput, DeleteDiskSnapshotCommandOutput } from "../commands/DeleteDiskSnapshotCommand.ts";
import { DeleteDistributionCommandInput, DeleteDistributionCommandOutput } from "../commands/DeleteDistributionCommand.ts";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand.ts";
import { DeleteDomainEntryCommandInput, DeleteDomainEntryCommandOutput } from "../commands/DeleteDomainEntryCommand.ts";
import { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "../commands/DeleteInstanceCommand.ts";
import {
  DeleteInstanceSnapshotCommandInput,
  DeleteInstanceSnapshotCommandOutput,
} from "../commands/DeleteInstanceSnapshotCommand.ts";
import { DeleteKeyPairCommandInput, DeleteKeyPairCommandOutput } from "../commands/DeleteKeyPairCommand.ts";
import {
  DeleteKnownHostKeysCommandInput,
  DeleteKnownHostKeysCommandOutput,
} from "../commands/DeleteKnownHostKeysCommand.ts";
import { DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput } from "../commands/DeleteLoadBalancerCommand.ts";
import {
  DeleteLoadBalancerTlsCertificateCommandInput,
  DeleteLoadBalancerTlsCertificateCommandOutput,
} from "../commands/DeleteLoadBalancerTlsCertificateCommand.ts";
import {
  DeleteRelationalDatabaseCommandInput,
  DeleteRelationalDatabaseCommandOutput,
} from "../commands/DeleteRelationalDatabaseCommand.ts";
import {
  DeleteRelationalDatabaseSnapshotCommandInput,
  DeleteRelationalDatabaseSnapshotCommandOutput,
} from "../commands/DeleteRelationalDatabaseSnapshotCommand.ts";
import {
  DetachCertificateFromDistributionCommandInput,
  DetachCertificateFromDistributionCommandOutput,
} from "../commands/DetachCertificateFromDistributionCommand.ts";
import { DetachDiskCommandInput, DetachDiskCommandOutput } from "../commands/DetachDiskCommand.ts";
import {
  DetachInstancesFromLoadBalancerCommandInput,
  DetachInstancesFromLoadBalancerCommandOutput,
} from "../commands/DetachInstancesFromLoadBalancerCommand.ts";
import { DetachStaticIpCommandInput, DetachStaticIpCommandOutput } from "../commands/DetachStaticIpCommand.ts";
import { DisableAddOnCommandInput, DisableAddOnCommandOutput } from "../commands/DisableAddOnCommand.ts";
import {
  DownloadDefaultKeyPairCommandInput,
  DownloadDefaultKeyPairCommandOutput,
} from "../commands/DownloadDefaultKeyPairCommand.ts";
import { EnableAddOnCommandInput, EnableAddOnCommandOutput } from "../commands/EnableAddOnCommand.ts";
import { ExportSnapshotCommandInput, ExportSnapshotCommandOutput } from "../commands/ExportSnapshotCommand.ts";
import { GetActiveNamesCommandInput, GetActiveNamesCommandOutput } from "../commands/GetActiveNamesCommand.ts";
import { GetAlarmsCommandInput, GetAlarmsCommandOutput } from "../commands/GetAlarmsCommand.ts";
import { GetAutoSnapshotsCommandInput, GetAutoSnapshotsCommandOutput } from "../commands/GetAutoSnapshotsCommand.ts";
import { GetBlueprintsCommandInput, GetBlueprintsCommandOutput } from "../commands/GetBlueprintsCommand.ts";
import { GetBundlesCommandInput, GetBundlesCommandOutput } from "../commands/GetBundlesCommand.ts";
import { GetCertificatesCommandInput, GetCertificatesCommandOutput } from "../commands/GetCertificatesCommand.ts";
import {
  GetCloudFormationStackRecordsCommandInput,
  GetCloudFormationStackRecordsCommandOutput,
} from "../commands/GetCloudFormationStackRecordsCommand.ts";
import { GetContactMethodsCommandInput, GetContactMethodsCommandOutput } from "../commands/GetContactMethodsCommand.ts";
import { GetDiskCommandInput, GetDiskCommandOutput } from "../commands/GetDiskCommand.ts";
import { GetDiskSnapshotCommandInput, GetDiskSnapshotCommandOutput } from "../commands/GetDiskSnapshotCommand.ts";
import { GetDiskSnapshotsCommandInput, GetDiskSnapshotsCommandOutput } from "../commands/GetDiskSnapshotsCommand.ts";
import { GetDisksCommandInput, GetDisksCommandOutput } from "../commands/GetDisksCommand.ts";
import {
  GetDistributionBundlesCommandInput,
  GetDistributionBundlesCommandOutput,
} from "../commands/GetDistributionBundlesCommand.ts";
import {
  GetDistributionLatestCacheResetCommandInput,
  GetDistributionLatestCacheResetCommandOutput,
} from "../commands/GetDistributionLatestCacheResetCommand.ts";
import {
  GetDistributionMetricDataCommandInput,
  GetDistributionMetricDataCommandOutput,
} from "../commands/GetDistributionMetricDataCommand.ts";
import { GetDistributionsCommandInput, GetDistributionsCommandOutput } from "../commands/GetDistributionsCommand.ts";
import { GetDomainCommandInput, GetDomainCommandOutput } from "../commands/GetDomainCommand.ts";
import { GetDomainsCommandInput, GetDomainsCommandOutput } from "../commands/GetDomainsCommand.ts";
import {
  GetExportSnapshotRecordsCommandInput,
  GetExportSnapshotRecordsCommandOutput,
} from "../commands/GetExportSnapshotRecordsCommand.ts";
import {
  GetInstanceAccessDetailsCommandInput,
  GetInstanceAccessDetailsCommandOutput,
} from "../commands/GetInstanceAccessDetailsCommand.ts";
import { GetInstanceCommandInput, GetInstanceCommandOutput } from "../commands/GetInstanceCommand.ts";
import {
  GetInstanceMetricDataCommandInput,
  GetInstanceMetricDataCommandOutput,
} from "../commands/GetInstanceMetricDataCommand.ts";
import {
  GetInstancePortStatesCommandInput,
  GetInstancePortStatesCommandOutput,
} from "../commands/GetInstancePortStatesCommand.ts";
import {
  GetInstanceSnapshotCommandInput,
  GetInstanceSnapshotCommandOutput,
} from "../commands/GetInstanceSnapshotCommand.ts";
import {
  GetInstanceSnapshotsCommandInput,
  GetInstanceSnapshotsCommandOutput,
} from "../commands/GetInstanceSnapshotsCommand.ts";
import { GetInstanceStateCommandInput, GetInstanceStateCommandOutput } from "../commands/GetInstanceStateCommand.ts";
import { GetInstancesCommandInput, GetInstancesCommandOutput } from "../commands/GetInstancesCommand.ts";
import { GetKeyPairCommandInput, GetKeyPairCommandOutput } from "../commands/GetKeyPairCommand.ts";
import { GetKeyPairsCommandInput, GetKeyPairsCommandOutput } from "../commands/GetKeyPairsCommand.ts";
import { GetLoadBalancerCommandInput, GetLoadBalancerCommandOutput } from "../commands/GetLoadBalancerCommand.ts";
import {
  GetLoadBalancerMetricDataCommandInput,
  GetLoadBalancerMetricDataCommandOutput,
} from "../commands/GetLoadBalancerMetricDataCommand.ts";
import {
  GetLoadBalancerTlsCertificatesCommandInput,
  GetLoadBalancerTlsCertificatesCommandOutput,
} from "../commands/GetLoadBalancerTlsCertificatesCommand.ts";
import { GetLoadBalancersCommandInput, GetLoadBalancersCommandOutput } from "../commands/GetLoadBalancersCommand.ts";
import { GetOperationCommandInput, GetOperationCommandOutput } from "../commands/GetOperationCommand.ts";
import { GetOperationsCommandInput, GetOperationsCommandOutput } from "../commands/GetOperationsCommand.ts";
import {
  GetOperationsForResourceCommandInput,
  GetOperationsForResourceCommandOutput,
} from "../commands/GetOperationsForResourceCommand.ts";
import { GetRegionsCommandInput, GetRegionsCommandOutput } from "../commands/GetRegionsCommand.ts";
import {
  GetRelationalDatabaseBlueprintsCommandInput,
  GetRelationalDatabaseBlueprintsCommandOutput,
} from "../commands/GetRelationalDatabaseBlueprintsCommand.ts";
import {
  GetRelationalDatabaseBundlesCommandInput,
  GetRelationalDatabaseBundlesCommandOutput,
} from "../commands/GetRelationalDatabaseBundlesCommand.ts";
import {
  GetRelationalDatabaseCommandInput,
  GetRelationalDatabaseCommandOutput,
} from "../commands/GetRelationalDatabaseCommand.ts";
import {
  GetRelationalDatabaseEventsCommandInput,
  GetRelationalDatabaseEventsCommandOutput,
} from "../commands/GetRelationalDatabaseEventsCommand.ts";
import {
  GetRelationalDatabaseLogEventsCommandInput,
  GetRelationalDatabaseLogEventsCommandOutput,
} from "../commands/GetRelationalDatabaseLogEventsCommand.ts";
import {
  GetRelationalDatabaseLogStreamsCommandInput,
  GetRelationalDatabaseLogStreamsCommandOutput,
} from "../commands/GetRelationalDatabaseLogStreamsCommand.ts";
import {
  GetRelationalDatabaseMasterUserPasswordCommandInput,
  GetRelationalDatabaseMasterUserPasswordCommandOutput,
} from "../commands/GetRelationalDatabaseMasterUserPasswordCommand.ts";
import {
  GetRelationalDatabaseMetricDataCommandInput,
  GetRelationalDatabaseMetricDataCommandOutput,
} from "../commands/GetRelationalDatabaseMetricDataCommand.ts";
import {
  GetRelationalDatabaseParametersCommandInput,
  GetRelationalDatabaseParametersCommandOutput,
} from "../commands/GetRelationalDatabaseParametersCommand.ts";
import {
  GetRelationalDatabaseSnapshotCommandInput,
  GetRelationalDatabaseSnapshotCommandOutput,
} from "../commands/GetRelationalDatabaseSnapshotCommand.ts";
import {
  GetRelationalDatabaseSnapshotsCommandInput,
  GetRelationalDatabaseSnapshotsCommandOutput,
} from "../commands/GetRelationalDatabaseSnapshotsCommand.ts";
import {
  GetRelationalDatabasesCommandInput,
  GetRelationalDatabasesCommandOutput,
} from "../commands/GetRelationalDatabasesCommand.ts";
import { GetStaticIpCommandInput, GetStaticIpCommandOutput } from "../commands/GetStaticIpCommand.ts";
import { GetStaticIpsCommandInput, GetStaticIpsCommandOutput } from "../commands/GetStaticIpsCommand.ts";
import { ImportKeyPairCommandInput, ImportKeyPairCommandOutput } from "../commands/ImportKeyPairCommand.ts";
import { IsVpcPeeredCommandInput, IsVpcPeeredCommandOutput } from "../commands/IsVpcPeeredCommand.ts";
import {
  OpenInstancePublicPortsCommandInput,
  OpenInstancePublicPortsCommandOutput,
} from "../commands/OpenInstancePublicPortsCommand.ts";
import { PeerVpcCommandInput, PeerVpcCommandOutput } from "../commands/PeerVpcCommand.ts";
import { PutAlarmCommandInput, PutAlarmCommandOutput } from "../commands/PutAlarmCommand.ts";
import {
  PutInstancePublicPortsCommandInput,
  PutInstancePublicPortsCommandOutput,
} from "../commands/PutInstancePublicPortsCommand.ts";
import { RebootInstanceCommandInput, RebootInstanceCommandOutput } from "../commands/RebootInstanceCommand.ts";
import {
  RebootRelationalDatabaseCommandInput,
  RebootRelationalDatabaseCommandOutput,
} from "../commands/RebootRelationalDatabaseCommand.ts";
import { ReleaseStaticIpCommandInput, ReleaseStaticIpCommandOutput } from "../commands/ReleaseStaticIpCommand.ts";
import {
  ResetDistributionCacheCommandInput,
  ResetDistributionCacheCommandOutput,
} from "../commands/ResetDistributionCacheCommand.ts";
import {
  SendContactMethodVerificationCommandInput,
  SendContactMethodVerificationCommandOutput,
} from "../commands/SendContactMethodVerificationCommand.ts";
import { StartInstanceCommandInput, StartInstanceCommandOutput } from "../commands/StartInstanceCommand.ts";
import {
  StartRelationalDatabaseCommandInput,
  StartRelationalDatabaseCommandOutput,
} from "../commands/StartRelationalDatabaseCommand.ts";
import { StopInstanceCommandInput, StopInstanceCommandOutput } from "../commands/StopInstanceCommand.ts";
import {
  StopRelationalDatabaseCommandInput,
  StopRelationalDatabaseCommandOutput,
} from "../commands/StopRelationalDatabaseCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand.ts";
import { TestAlarmCommandInput, TestAlarmCommandOutput } from "../commands/TestAlarmCommand.ts";
import { UnpeerVpcCommandInput, UnpeerVpcCommandOutput } from "../commands/UnpeerVpcCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand.ts";
import {
  UpdateDistributionBundleCommandInput,
  UpdateDistributionBundleCommandOutput,
} from "../commands/UpdateDistributionBundleCommand.ts";
import { UpdateDistributionCommandInput, UpdateDistributionCommandOutput } from "../commands/UpdateDistributionCommand.ts";
import { UpdateDomainEntryCommandInput, UpdateDomainEntryCommandOutput } from "../commands/UpdateDomainEntryCommand.ts";
import {
  UpdateLoadBalancerAttributeCommandInput,
  UpdateLoadBalancerAttributeCommandOutput,
} from "../commands/UpdateLoadBalancerAttributeCommand.ts";
import {
  UpdateRelationalDatabaseCommandInput,
  UpdateRelationalDatabaseCommandOutput,
} from "../commands/UpdateRelationalDatabaseCommand.ts";
import {
  UpdateRelationalDatabaseParametersCommandInput,
  UpdateRelationalDatabaseParametersCommandOutput,
} from "../commands/UpdateRelationalDatabaseParametersCommand.ts";
import {
  AccessDeniedException,
  AccountSetupInProgressException,
  AddOn,
  AddOnRequest,
  Alarm,
  AlarmState,
  AllocateStaticIpRequest,
  AllocateStaticIpResult,
  AttachCertificateToDistributionRequest,
  AttachCertificateToDistributionResult,
  AttachDiskRequest,
  AttachDiskResult,
  AttachInstancesToLoadBalancerRequest,
  AttachInstancesToLoadBalancerResult,
  AttachLoadBalancerTlsCertificateRequest,
  AttachLoadBalancerTlsCertificateResult,
  AttachStaticIpRequest,
  AttachStaticIpResult,
  AttachedDisk,
  AutoSnapshotAddOnRequest,
  AutoSnapshotDetails,
  AvailabilityZone,
  Blueprint,
  Bundle,
  CacheBehavior,
  CacheBehaviorPerPath,
  CacheSettings,
  Certificate,
  CertificateStatus,
  CertificateSummary,
  CloseInstancePublicPortsRequest,
  CloseInstancePublicPortsResult,
  CloudFormationStackRecord,
  CloudFormationStackRecordSourceInfo,
  ContactMethod,
  ContactProtocol,
  CookieObject,
  CopySnapshotRequest,
  CopySnapshotResult,
  CreateCertificateRequest,
  CreateCertificateResult,
  CreateCloudFormationStackRequest,
  CreateCloudFormationStackResult,
  CreateContactMethodRequest,
  CreateContactMethodResult,
  CreateDiskFromSnapshotRequest,
  CreateDiskFromSnapshotResult,
  CreateDiskRequest,
  CreateDiskResult,
  CreateDiskSnapshotRequest,
  CreateDiskSnapshotResult,
  CreateDistributionRequest,
  CreateDistributionResult,
  CreateDomainEntryRequest,
  CreateDomainEntryResult,
  CreateDomainRequest,
  CreateDomainResult,
  CreateInstanceSnapshotRequest,
  CreateInstanceSnapshotResult,
  CreateInstancesFromSnapshotRequest,
  CreateInstancesFromSnapshotResult,
  CreateInstancesRequest,
  CreateInstancesResult,
  CreateKeyPairRequest,
  CreateKeyPairResult,
  CreateLoadBalancerRequest,
  CreateLoadBalancerResult,
  CreateLoadBalancerTlsCertificateRequest,
  CreateLoadBalancerTlsCertificateResult,
  CreateRelationalDatabaseFromSnapshotRequest,
  CreateRelationalDatabaseFromSnapshotResult,
  CreateRelationalDatabaseRequest,
  CreateRelationalDatabaseResult,
  CreateRelationalDatabaseSnapshotRequest,
  CreateRelationalDatabaseSnapshotResult,
  DeleteAlarmRequest,
  DeleteAlarmResult,
  DeleteAutoSnapshotRequest,
  DeleteAutoSnapshotResult,
  DeleteCertificateRequest,
  DeleteCertificateResult,
  DeleteContactMethodRequest,
  DeleteContactMethodResult,
  DeleteDiskRequest,
  DeleteDiskResult,
  DeleteDiskSnapshotRequest,
  DeleteDiskSnapshotResult,
  DeleteDistributionRequest,
  DeleteDistributionResult,
  DeleteDomainEntryRequest,
  DeleteDomainEntryResult,
  DeleteDomainRequest,
  DeleteDomainResult,
  DeleteInstanceRequest,
  DeleteInstanceResult,
  DeleteInstanceSnapshotRequest,
  DeleteInstanceSnapshotResult,
  DeleteKeyPairRequest,
  DeleteKeyPairResult,
  DeleteKnownHostKeysRequest,
  DeleteKnownHostKeysResult,
  DeleteLoadBalancerRequest,
  DeleteLoadBalancerResult,
  DeleteLoadBalancerTlsCertificateRequest,
  DeleteLoadBalancerTlsCertificateResult,
  DeleteRelationalDatabaseRequest,
  DeleteRelationalDatabaseResult,
  DeleteRelationalDatabaseSnapshotRequest,
  DeleteRelationalDatabaseSnapshotResult,
  DestinationInfo,
  DetachCertificateFromDistributionRequest,
  DetachCertificateFromDistributionResult,
  DetachDiskRequest,
  DetachDiskResult,
  DetachInstancesFromLoadBalancerRequest,
  DetachInstancesFromLoadBalancerResult,
  DetachStaticIpRequest,
  DetachStaticIpResult,
  DisableAddOnRequest,
  DisableAddOnResult,
  Disk,
  DiskInfo,
  DiskMap,
  DiskSnapshot,
  DiskSnapshotInfo,
  DistributionBundle,
  Domain,
  DomainEntry,
  DomainValidationRecord,
  DownloadDefaultKeyPairRequest,
  DownloadDefaultKeyPairResult,
  EnableAddOnRequest,
  EnableAddOnResult,
  ExportSnapshotRecord,
  ExportSnapshotRecordSourceInfo,
  ExportSnapshotRequest,
  ExportSnapshotResult,
  GetActiveNamesRequest,
  GetActiveNamesResult,
  GetAlarmsRequest,
  GetAlarmsResult,
  GetAutoSnapshotsRequest,
  GetAutoSnapshotsResult,
  GetBlueprintsRequest,
  GetBlueprintsResult,
  GetBundlesRequest,
  GetBundlesResult,
  GetCertificatesRequest,
  GetCertificatesResult,
  GetCloudFormationStackRecordsRequest,
  GetCloudFormationStackRecordsResult,
  GetContactMethodsRequest,
  GetContactMethodsResult,
  GetDiskRequest,
  GetDiskResult,
  GetDiskSnapshotRequest,
  GetDiskSnapshotResult,
  GetDiskSnapshotsRequest,
  GetDiskSnapshotsResult,
  GetDisksRequest,
  GetDisksResult,
  GetDistributionBundlesRequest,
  GetDistributionBundlesResult,
  GetDistributionLatestCacheResetRequest,
  GetDistributionLatestCacheResetResult,
  GetDistributionMetricDataRequest,
  GetDistributionMetricDataResult,
  GetDistributionsRequest,
  GetDistributionsResult,
  GetDomainRequest,
  GetDomainResult,
  GetDomainsRequest,
  GetDomainsResult,
  GetExportSnapshotRecordsRequest,
  GetExportSnapshotRecordsResult,
  GetInstanceAccessDetailsRequest,
  GetInstanceAccessDetailsResult,
  GetInstanceMetricDataRequest,
  GetInstanceMetricDataResult,
  GetInstancePortStatesRequest,
  GetInstancePortStatesResult,
  GetInstanceRequest,
  GetInstanceResult,
  GetInstanceSnapshotRequest,
  GetInstanceSnapshotResult,
  GetInstanceSnapshotsRequest,
  GetInstanceSnapshotsResult,
  GetInstanceStateRequest,
  GetInstanceStateResult,
  GetInstancesRequest,
  GetInstancesResult,
  GetKeyPairRequest,
  GetKeyPairResult,
  GetKeyPairsRequest,
  GetKeyPairsResult,
  GetLoadBalancerMetricDataRequest,
  GetLoadBalancerMetricDataResult,
  GetLoadBalancerRequest,
  GetLoadBalancerResult,
  GetLoadBalancerTlsCertificatesRequest,
  GetLoadBalancerTlsCertificatesResult,
  GetLoadBalancersRequest,
  GetLoadBalancersResult,
  GetOperationRequest,
  GetOperationResult,
  GetOperationsForResourceRequest,
  GetOperationsForResourceResult,
  GetOperationsRequest,
  GetOperationsResult,
  GetRegionsRequest,
  GetRegionsResult,
  GetRelationalDatabaseBlueprintsRequest,
  GetRelationalDatabaseBlueprintsResult,
  GetRelationalDatabaseBundlesRequest,
  GetRelationalDatabaseBundlesResult,
  GetRelationalDatabaseEventsRequest,
  GetRelationalDatabaseEventsResult,
  GetRelationalDatabaseLogEventsRequest,
  GetRelationalDatabaseLogEventsResult,
  GetRelationalDatabaseLogStreamsRequest,
  GetRelationalDatabaseLogStreamsResult,
  GetRelationalDatabaseMasterUserPasswordRequest,
  GetRelationalDatabaseMasterUserPasswordResult,
  GetRelationalDatabaseMetricDataRequest,
  GetRelationalDatabaseMetricDataResult,
  GetRelationalDatabaseParametersRequest,
  GetRelationalDatabaseParametersResult,
  GetRelationalDatabaseRequest,
  GetRelationalDatabaseResult,
  GetRelationalDatabaseSnapshotRequest,
  GetRelationalDatabaseSnapshotResult,
  GetRelationalDatabaseSnapshotsRequest,
  GetRelationalDatabaseSnapshotsResult,
  GetRelationalDatabasesRequest,
  GetRelationalDatabasesResult,
  GetStaticIpRequest,
  GetStaticIpResult,
  GetStaticIpsRequest,
  GetStaticIpsResult,
  HeaderEnum,
  HeaderObject,
  HostKeyAttributes,
  ImportKeyPairRequest,
  ImportKeyPairResult,
  InputOrigin,
  Instance,
  InstanceAccessDetails,
  InstanceEntry,
  InstanceHardware,
  InstanceHealthSummary,
  InstanceNetworking,
  InstancePlatform,
  InstancePortInfo,
  InstancePortState,
  InstanceSnapshot,
  InstanceSnapshotInfo,
  InstanceState,
  InvalidInputException,
  IsVpcPeeredRequest,
  IsVpcPeeredResult,
  KeyPair,
  LightsailDistribution,
  LoadBalancer,
  LoadBalancerAttributeName,
  LoadBalancerTlsCertificate,
  LoadBalancerTlsCertificateDomainValidationOption,
  LoadBalancerTlsCertificateDomainValidationRecord,
  LoadBalancerTlsCertificateRenewalSummary,
  LoadBalancerTlsCertificateSummary,
  LogEvent,
  MetricDatapoint,
  MetricStatistic,
  MonitoredResourceInfo,
  MonthlyTransfer,
  NotFoundException,
  OpenInstancePublicPortsRequest,
  OpenInstancePublicPortsResult,
  Operation,
  OperationFailureException,
  Origin,
  PasswordData,
  PeerVpcRequest,
  PeerVpcResult,
  PendingMaintenanceAction,
  PendingModifiedRelationalDatabaseValues,
  PortInfo,
  PutAlarmRequest,
  PutAlarmResult,
  PutInstancePublicPortsRequest,
  PutInstancePublicPortsResult,
  QueryStringObject,
  RebootInstanceRequest,
  RebootInstanceResult,
  RebootRelationalDatabaseRequest,
  RebootRelationalDatabaseResult,
  Region,
  RelationalDatabase,
  RelationalDatabaseBlueprint,
  RelationalDatabaseBundle,
  RelationalDatabaseEndpoint,
  RelationalDatabaseEvent,
  RelationalDatabaseHardware,
  RelationalDatabaseParameter,
  RelationalDatabaseSnapshot,
  ReleaseStaticIpRequest,
  ReleaseStaticIpResult,
  RenewalSummary,
  ResetDistributionCacheRequest,
  ResetDistributionCacheResult,
  ResourceLocation,
  ResourceRecord,
  SendContactMethodVerificationRequest,
  SendContactMethodVerificationResult,
  ServiceException,
  StartInstanceRequest,
  StartInstanceResult,
  StartRelationalDatabaseRequest,
  StartRelationalDatabaseResult,
  StaticIp,
  StopInstanceRequest,
  StopInstanceResult,
  StopRelationalDatabaseRequest,
  StopRelationalDatabaseResult,
  Tag,
  TagResourceRequest,
  TagResourceResult,
  TestAlarmRequest,
  TestAlarmResult,
  UnauthenticatedException,
  UnpeerVpcRequest,
  UnpeerVpcResult,
  UntagResourceRequest,
  UntagResourceResult,
  UpdateDistributionBundleRequest,
  UpdateDistributionBundleResult,
  UpdateDistributionRequest,
  UpdateDistributionResult,
  UpdateDomainEntryRequest,
  UpdateDomainEntryResult,
  UpdateLoadBalancerAttributeRequest,
  UpdateLoadBalancerAttributeResult,
  UpdateRelationalDatabaseParametersRequest,
  UpdateRelationalDatabaseParametersResult,
  UpdateRelationalDatabaseRequest,
  UpdateRelationalDatabaseResult,
} from "../models/index.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { SmithyException as __SmithyException } from "../../smithy-client/mod.ts";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export const serializeAws_json1_1AllocateStaticIpCommand = async (
  input: AllocateStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.AllocateStaticIp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AllocateStaticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AttachCertificateToDistributionCommand = async (
  input: AttachCertificateToDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.AttachCertificateToDistribution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AttachCertificateToDistributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AttachDiskCommand = async (
  input: AttachDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.AttachDisk",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AttachDiskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AttachInstancesToLoadBalancerCommand = async (
  input: AttachInstancesToLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.AttachInstancesToLoadBalancer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AttachInstancesToLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AttachLoadBalancerTlsCertificateCommand = async (
  input: AttachLoadBalancerTlsCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.AttachLoadBalancerTlsCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AttachLoadBalancerTlsCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AttachStaticIpCommand = async (
  input: AttachStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.AttachStaticIp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AttachStaticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CloseInstancePublicPortsCommand = async (
  input: CloseInstancePublicPortsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CloseInstancePublicPorts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CloseInstancePublicPortsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CopySnapshotCommand = async (
  input: CopySnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CopySnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CopySnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCertificateCommand = async (
  input: CreateCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CreateCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCloudFormationStackCommand = async (
  input: CreateCloudFormationStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CreateCloudFormationStack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCloudFormationStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateContactMethodCommand = async (
  input: CreateContactMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CreateContactMethod",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateContactMethodRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDiskCommand = async (
  input: CreateDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CreateDisk",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDiskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDiskFromSnapshotCommand = async (
  input: CreateDiskFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CreateDiskFromSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDiskFromSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDiskSnapshotCommand = async (
  input: CreateDiskSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CreateDiskSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDiskSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDistributionCommand = async (
  input: CreateDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CreateDistribution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDistributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CreateDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDomainEntryCommand = async (
  input: CreateDomainEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CreateDomainEntry",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDomainEntryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateInstancesCommand = async (
  input: CreateInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CreateInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateInstancesFromSnapshotCommand = async (
  input: CreateInstancesFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CreateInstancesFromSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateInstancesFromSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateInstanceSnapshotCommand = async (
  input: CreateInstanceSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CreateInstanceSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateInstanceSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateKeyPairCommand = async (
  input: CreateKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CreateKeyPair",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateKeyPairRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLoadBalancerCommand = async (
  input: CreateLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CreateLoadBalancer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLoadBalancerTlsCertificateCommand = async (
  input: CreateLoadBalancerTlsCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CreateLoadBalancerTlsCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLoadBalancerTlsCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRelationalDatabaseCommand = async (
  input: CreateRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CreateRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand = async (
  input: CreateRelationalDatabaseFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CreateRelationalDatabaseFromSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRelationalDatabaseFromSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRelationalDatabaseSnapshotCommand = async (
  input: CreateRelationalDatabaseSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.CreateRelationalDatabaseSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRelationalDatabaseSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAlarmCommand = async (
  input: DeleteAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DeleteAlarm",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAlarmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAutoSnapshotCommand = async (
  input: DeleteAutoSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DeleteAutoSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAutoSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCertificateCommand = async (
  input: DeleteCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DeleteCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteContactMethodCommand = async (
  input: DeleteContactMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DeleteContactMethod",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteContactMethodRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDiskCommand = async (
  input: DeleteDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DeleteDisk",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDiskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDiskSnapshotCommand = async (
  input: DeleteDiskSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DeleteDiskSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDiskSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDistributionCommand = async (
  input: DeleteDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DeleteDistribution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDistributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DeleteDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDomainEntryCommand = async (
  input: DeleteDomainEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DeleteDomainEntry",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDomainEntryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteInstanceCommand = async (
  input: DeleteInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DeleteInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteInstanceSnapshotCommand = async (
  input: DeleteInstanceSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DeleteInstanceSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteInstanceSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteKeyPairCommand = async (
  input: DeleteKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DeleteKeyPair",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteKeyPairRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteKnownHostKeysCommand = async (
  input: DeleteKnownHostKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DeleteKnownHostKeys",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteKnownHostKeysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLoadBalancerCommand = async (
  input: DeleteLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DeleteLoadBalancer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand = async (
  input: DeleteLoadBalancerTlsCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DeleteLoadBalancerTlsCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLoadBalancerTlsCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRelationalDatabaseCommand = async (
  input: DeleteRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DeleteRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand = async (
  input: DeleteRelationalDatabaseSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DeleteRelationalDatabaseSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRelationalDatabaseSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetachCertificateFromDistributionCommand = async (
  input: DetachCertificateFromDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DetachCertificateFromDistribution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetachCertificateFromDistributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetachDiskCommand = async (
  input: DetachDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DetachDisk",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetachDiskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetachInstancesFromLoadBalancerCommand = async (
  input: DetachInstancesFromLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DetachInstancesFromLoadBalancer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetachInstancesFromLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetachStaticIpCommand = async (
  input: DetachStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DetachStaticIp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetachStaticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableAddOnCommand = async (
  input: DisableAddOnCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DisableAddOn",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableAddOnRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DownloadDefaultKeyPairCommand = async (
  input: DownloadDefaultKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.DownloadDefaultKeyPair",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DownloadDefaultKeyPairRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableAddOnCommand = async (
  input: EnableAddOnCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.EnableAddOn",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableAddOnRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ExportSnapshotCommand = async (
  input: ExportSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.ExportSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ExportSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetActiveNamesCommand = async (
  input: GetActiveNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetActiveNames",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetActiveNamesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAlarmsCommand = async (
  input: GetAlarmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetAlarms",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAlarmsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAutoSnapshotsCommand = async (
  input: GetAutoSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetAutoSnapshots",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAutoSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBlueprintsCommand = async (
  input: GetBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetBlueprints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBlueprintsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBundlesCommand = async (
  input: GetBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetBundles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBundlesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCertificatesCommand = async (
  input: GetCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetCertificates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCertificatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCloudFormationStackRecordsCommand = async (
  input: GetCloudFormationStackRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetCloudFormationStackRecords",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCloudFormationStackRecordsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetContactMethodsCommand = async (
  input: GetContactMethodsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetContactMethods",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetContactMethodsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDiskCommand = async (
  input: GetDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetDisk",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDiskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDisksCommand = async (
  input: GetDisksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetDisks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDisksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDiskSnapshotCommand = async (
  input: GetDiskSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetDiskSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDiskSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDiskSnapshotsCommand = async (
  input: GetDiskSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetDiskSnapshots",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDiskSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDistributionBundlesCommand = async (
  input: GetDistributionBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetDistributionBundles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDistributionBundlesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDistributionLatestCacheResetCommand = async (
  input: GetDistributionLatestCacheResetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetDistributionLatestCacheReset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDistributionLatestCacheResetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDistributionMetricDataCommand = async (
  input: GetDistributionMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetDistributionMetricData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDistributionMetricDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDistributionsCommand = async (
  input: GetDistributionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetDistributions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDistributionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDomainCommand = async (
  input: GetDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDomainsCommand = async (
  input: GetDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetDomains",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDomainsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetExportSnapshotRecordsCommand = async (
  input: GetExportSnapshotRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetExportSnapshotRecords",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetExportSnapshotRecordsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstanceCommand = async (
  input: GetInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstanceAccessDetailsCommand = async (
  input: GetInstanceAccessDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetInstanceAccessDetails",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstanceAccessDetailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstanceMetricDataCommand = async (
  input: GetInstanceMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetInstanceMetricData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstanceMetricDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstancePortStatesCommand = async (
  input: GetInstancePortStatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetInstancePortStates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstancePortStatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstancesCommand = async (
  input: GetInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstanceSnapshotCommand = async (
  input: GetInstanceSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetInstanceSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstanceSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstanceSnapshotsCommand = async (
  input: GetInstanceSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetInstanceSnapshots",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstanceSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstanceStateCommand = async (
  input: GetInstanceStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetInstanceState",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstanceStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetKeyPairCommand = async (
  input: GetKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetKeyPair",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetKeyPairRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetKeyPairsCommand = async (
  input: GetKeyPairsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetKeyPairs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetKeyPairsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLoadBalancerCommand = async (
  input: GetLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetLoadBalancer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLoadBalancerMetricDataCommand = async (
  input: GetLoadBalancerMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetLoadBalancerMetricData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLoadBalancerMetricDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLoadBalancersCommand = async (
  input: GetLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetLoadBalancers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLoadBalancersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLoadBalancerTlsCertificatesCommand = async (
  input: GetLoadBalancerTlsCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetLoadBalancerTlsCertificates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLoadBalancerTlsCertificatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOperationCommand = async (
  input: GetOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetOperation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOperationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOperationsCommand = async (
  input: GetOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetOperations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOperationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOperationsForResourceCommand = async (
  input: GetOperationsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetOperationsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOperationsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRegionsCommand = async (
  input: GetRegionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetRegions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRegionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseCommand = async (
  input: GetRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseBlueprintsCommand = async (
  input: GetRelationalDatabaseBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetRelationalDatabaseBlueprints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseBlueprintsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseBundlesCommand = async (
  input: GetRelationalDatabaseBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetRelationalDatabaseBundles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseBundlesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseEventsCommand = async (
  input: GetRelationalDatabaseEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetRelationalDatabaseEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseLogEventsCommand = async (
  input: GetRelationalDatabaseLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetRelationalDatabaseLogEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseLogEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseLogStreamsCommand = async (
  input: GetRelationalDatabaseLogStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetRelationalDatabaseLogStreams",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseLogStreamsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand = async (
  input: GetRelationalDatabaseMasterUserPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetRelationalDatabaseMasterUserPassword",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseMetricDataCommand = async (
  input: GetRelationalDatabaseMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetRelationalDatabaseMetricData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseMetricDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseParametersCommand = async (
  input: GetRelationalDatabaseParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetRelationalDatabaseParameters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabasesCommand = async (
  input: GetRelationalDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetRelationalDatabases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseSnapshotCommand = async (
  input: GetRelationalDatabaseSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetRelationalDatabaseSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseSnapshotsCommand = async (
  input: GetRelationalDatabaseSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetRelationalDatabaseSnapshots",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetStaticIpCommand = async (
  input: GetStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetStaticIp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetStaticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetStaticIpsCommand = async (
  input: GetStaticIpsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.GetStaticIps",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetStaticIpsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportKeyPairCommand = async (
  input: ImportKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.ImportKeyPair",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportKeyPairRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1IsVpcPeeredCommand = async (
  input: IsVpcPeeredCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.IsVpcPeered",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1IsVpcPeeredRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1OpenInstancePublicPortsCommand = async (
  input: OpenInstancePublicPortsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.OpenInstancePublicPorts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1OpenInstancePublicPortsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PeerVpcCommand = async (
  input: PeerVpcCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.PeerVpc",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PeerVpcRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutAlarmCommand = async (
  input: PutAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.PutAlarm",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutAlarmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutInstancePublicPortsCommand = async (
  input: PutInstancePublicPortsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.PutInstancePublicPorts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutInstancePublicPortsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RebootInstanceCommand = async (
  input: RebootInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.RebootInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RebootInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RebootRelationalDatabaseCommand = async (
  input: RebootRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.RebootRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RebootRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ReleaseStaticIpCommand = async (
  input: ReleaseStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.ReleaseStaticIp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ReleaseStaticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResetDistributionCacheCommand = async (
  input: ResetDistributionCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.ResetDistributionCache",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResetDistributionCacheRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SendContactMethodVerificationCommand = async (
  input: SendContactMethodVerificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.SendContactMethodVerification",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SendContactMethodVerificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartInstanceCommand = async (
  input: StartInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.StartInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartRelationalDatabaseCommand = async (
  input: StartRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.StartRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopInstanceCommand = async (
  input: StopInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.StopInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopRelationalDatabaseCommand = async (
  input: StopRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.StopRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TestAlarmCommand = async (
  input: TestAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.TestAlarm",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TestAlarmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UnpeerVpcCommand = async (
  input: UnpeerVpcCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.UnpeerVpc",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UnpeerVpcRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDistributionCommand = async (
  input: UpdateDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.UpdateDistribution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDistributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDistributionBundleCommand = async (
  input: UpdateDistributionBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.UpdateDistributionBundle",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDistributionBundleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDomainEntryCommand = async (
  input: UpdateDomainEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.UpdateDomainEntry",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDomainEntryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateLoadBalancerAttributeCommand = async (
  input: UpdateLoadBalancerAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.UpdateLoadBalancerAttribute",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateLoadBalancerAttributeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRelationalDatabaseCommand = async (
  input: UpdateRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.UpdateRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRelationalDatabaseParametersCommand = async (
  input: UpdateRelationalDatabaseParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Lightsail_20161128.UpdateRelationalDatabaseParameters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRelationalDatabaseParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AllocateStaticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateStaticIpCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AllocateStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AllocateStaticIpResult(data, context);
  const response: AllocateStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AllocateStaticIpResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AllocateStaticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateStaticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1AttachCertificateToDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachCertificateToDistributionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AttachCertificateToDistributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AttachCertificateToDistributionResult(data, context);
  const response: AttachCertificateToDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachCertificateToDistributionResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AttachCertificateToDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachCertificateToDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1AttachDiskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachDiskCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AttachDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AttachDiskResult(data, context);
  const response: AttachDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachDiskResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AttachDiskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachDiskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1AttachInstancesToLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachInstancesToLoadBalancerCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AttachInstancesToLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AttachInstancesToLoadBalancerResult(data, context);
  const response: AttachInstancesToLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachInstancesToLoadBalancerResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AttachInstancesToLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachInstancesToLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerTlsCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AttachLoadBalancerTlsCertificateResult(data, context);
  const response: AttachLoadBalancerTlsCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachLoadBalancerTlsCertificateResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerTlsCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1AttachStaticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachStaticIpCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AttachStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AttachStaticIpResult(data, context);
  const response: AttachStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachStaticIpResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AttachStaticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachStaticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CloseInstancePublicPortsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseInstancePublicPortsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CloseInstancePublicPortsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CloseInstancePublicPortsResult(data, context);
  const response: CloseInstancePublicPortsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CloseInstancePublicPortsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CloseInstancePublicPortsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseInstancePublicPortsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CopySnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopySnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CopySnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CopySnapshotResult(data, context);
  const response: CopySnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CopySnapshotResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CopySnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopySnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCertificateResult(data, context);
  const response: CreateCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCertificateResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateCloudFormationStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationStackCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateCloudFormationStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCloudFormationStackResult(data, context);
  const response: CreateCloudFormationStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCloudFormationStackResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCloudFormationStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateContactMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactMethodCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateContactMethodCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateContactMethodResult(data, context);
  const response: CreateContactMethodCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateContactMethodResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateContactMethodCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactMethodCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateDiskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDiskResult(data, context);
  const response: CreateDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDiskResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDiskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateDiskFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskFromSnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDiskFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDiskFromSnapshotResult(data, context);
  const response: CreateDiskFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDiskFromSnapshotResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDiskFromSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskFromSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateDiskSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskSnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDiskSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDiskSnapshotResult(data, context);
  const response: CreateDiskSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDiskSnapshotResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDiskSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDistributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDistributionResult(data, context);
  const response: CreateDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDistributionResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDomainResult(data, context);
  const response: CreateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDomainResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateDomainEntryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainEntryCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDomainEntryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDomainEntryResult(data, context);
  const response: CreateDomainEntryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDomainEntryResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDomainEntryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainEntryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstancesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateInstancesResult(data, context);
  const response: CreateInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateInstancesResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateInstancesFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstancesFromSnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateInstancesFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateInstancesFromSnapshotResult(data, context);
  const response: CreateInstancesFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateInstancesFromSnapshotResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateInstancesFromSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstancesFromSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateInstanceSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceSnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateInstanceSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateInstanceSnapshotResult(data, context);
  const response: CreateInstanceSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateInstanceSnapshotResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateInstanceSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyPairCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateKeyPairResult(data, context);
  const response: CreateKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateKeyPairResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateKeyPairCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyPairCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLoadBalancerResult(data, context);
  const response: CreateLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLoadBalancerResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerTlsCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLoadBalancerTlsCertificateResult(data, context);
  const response: CreateLoadBalancerTlsCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLoadBalancerTlsCertificateResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerTlsCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRelationalDatabaseResult(data, context);
  const response: CreateRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRelationalDatabaseResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRelationalDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseFromSnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotResult(data, context);
  const response: CreateRelationalDatabaseFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRelationalDatabaseFromSnapshotResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseFromSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseSnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRelationalDatabaseSnapshotResult(data, context);
  const response: CreateRelationalDatabaseSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRelationalDatabaseSnapshotResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlarmCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteAlarmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAlarmResult(data, context);
  const response: DeleteAlarmCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAlarmResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAlarmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlarmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteAutoSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoSnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteAutoSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAutoSnapshotResult(data, context);
  const response: DeleteAutoSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAutoSnapshotResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAutoSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCertificateResult(data, context);
  const response: DeleteCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteCertificateResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteContactMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactMethodCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteContactMethodCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteContactMethodResult(data, context);
  const response: DeleteContactMethodCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteContactMethodResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteContactMethodCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactMethodCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteDiskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDiskCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDiskResult(data, context);
  const response: DeleteDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDiskResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDiskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDiskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteDiskSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDiskSnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDiskSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDiskSnapshotResult(data, context);
  const response: DeleteDiskSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDiskSnapshotResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDiskSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDiskSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDistributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDistributionResult(data, context);
  const response: DeleteDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDistributionResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDomainResult(data, context);
  const response: DeleteDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDomainResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteDomainEntryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainEntryCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDomainEntryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDomainEntryResult(data, context);
  const response: DeleteDomainEntryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDomainEntryResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDomainEntryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainEntryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteInstanceResult(data, context);
  const response: DeleteInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInstanceResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteInstanceSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceSnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteInstanceSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteInstanceSnapshotResult(data, context);
  const response: DeleteInstanceSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInstanceSnapshotResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteInstanceSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyPairCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteKeyPairResult(data, context);
  const response: DeleteKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteKeyPairResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteKeyPairCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyPairCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteKnownHostKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKnownHostKeysCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteKnownHostKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteKnownHostKeysResult(data, context);
  const response: DeleteKnownHostKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteKnownHostKeysResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteKnownHostKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKnownHostKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLoadBalancerResult(data, context);
  const response: DeleteLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLoadBalancerResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerTlsCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLoadBalancerTlsCertificateResult(data, context);
  const response: DeleteLoadBalancerTlsCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLoadBalancerTlsCertificateResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerTlsCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRelationalDatabaseResult(data, context);
  const response: DeleteRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRelationalDatabaseResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRelationalDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRelationalDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRelationalDatabaseSnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRelationalDatabaseSnapshotResult(data, context);
  const response: DeleteRelationalDatabaseSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRelationalDatabaseSnapshotResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRelationalDatabaseSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DetachCertificateFromDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachCertificateFromDistributionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetachCertificateFromDistributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetachCertificateFromDistributionResult(data, context);
  const response: DetachCertificateFromDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetachCertificateFromDistributionResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetachCertificateFromDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachCertificateFromDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DetachDiskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachDiskCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetachDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetachDiskResult(data, context);
  const response: DetachDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetachDiskResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetachDiskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachDiskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DetachInstancesFromLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachInstancesFromLoadBalancerCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetachInstancesFromLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetachInstancesFromLoadBalancerResult(data, context);
  const response: DetachInstancesFromLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetachInstancesFromLoadBalancerResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetachInstancesFromLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachInstancesFromLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DetachStaticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachStaticIpCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetachStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetachStaticIpResult(data, context);
  const response: DetachStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetachStaticIpResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetachStaticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachStaticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DisableAddOnCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAddOnCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableAddOnCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableAddOnResult(data, context);
  const response: DisableAddOnCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisableAddOnResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableAddOnCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAddOnCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DownloadDefaultKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DownloadDefaultKeyPairCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DownloadDefaultKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DownloadDefaultKeyPairResult(data, context);
  const response: DownloadDefaultKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DownloadDefaultKeyPairResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DownloadDefaultKeyPairCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DownloadDefaultKeyPairCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1EnableAddOnCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAddOnCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableAddOnCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableAddOnResult(data, context);
  const response: EnableAddOnCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnableAddOnResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableAddOnCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAddOnCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ExportSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportSnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ExportSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ExportSnapshotResult(data, context);
  const response: ExportSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ExportSnapshotResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ExportSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetActiveNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActiveNamesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetActiveNamesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetActiveNamesResult(data, context);
  const response: GetActiveNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetActiveNamesResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetActiveNamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActiveNamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetAlarmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAlarmsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAlarmsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAlarmsResult(data, context);
  const response: GetAlarmsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAlarmsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAlarmsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAlarmsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetAutoSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoSnapshotsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAutoSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAutoSnapshotsResult(data, context);
  const response: GetAutoSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAutoSnapshotsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAutoSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetBlueprintsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetBlueprintsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBlueprintsResult(data, context);
  const response: GetBlueprintsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBlueprintsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBlueprintsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetBundlesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBundlesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetBundlesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBundlesResult(data, context);
  const response: GetBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBundlesResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBundlesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBundlesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificatesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCertificatesResult(data, context);
  const response: GetCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCertificatesResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetCloudFormationStackRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFormationStackRecordsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCloudFormationStackRecordsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCloudFormationStackRecordsResult(data, context);
  const response: GetCloudFormationStackRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCloudFormationStackRecordsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCloudFormationStackRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFormationStackRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetContactMethodsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactMethodsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetContactMethodsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContactMethodsResult(data, context);
  const response: GetContactMethodsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetContactMethodsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetContactMethodsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactMethodsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDiskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDiskResult(data, context);
  const response: GetDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDiskResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDiskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDisksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDisksCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDisksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDisksResult(data, context);
  const response: GetDisksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDisksResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDisksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDisksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDiskSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskSnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDiskSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDiskSnapshotResult(data, context);
  const response: GetDiskSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDiskSnapshotResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDiskSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDiskSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskSnapshotsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDiskSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDiskSnapshotsResult(data, context);
  const response: GetDiskSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDiskSnapshotsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDiskSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDistributionBundlesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionBundlesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDistributionBundlesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDistributionBundlesResult(data, context);
  const response: GetDistributionBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDistributionBundlesResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDistributionBundlesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionBundlesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDistributionLatestCacheResetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionLatestCacheResetCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDistributionLatestCacheResetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDistributionLatestCacheResetResult(data, context);
  const response: GetDistributionLatestCacheResetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDistributionLatestCacheResetResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDistributionLatestCacheResetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionLatestCacheResetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDistributionMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionMetricDataCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDistributionMetricDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDistributionMetricDataResult(data, context);
  const response: GetDistributionMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDistributionMetricDataResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDistributionMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDistributionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDistributionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDistributionsResult(data, context);
  const response: GetDistributionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDistributionsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDistributionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDomainResult(data, context);
  const response: GetDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDomainResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDomainsResult(data, context);
  const response: GetDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDomainsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetExportSnapshotRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportSnapshotRecordsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetExportSnapshotRecordsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetExportSnapshotRecordsResult(data, context);
  const response: GetExportSnapshotRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetExportSnapshotRecordsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetExportSnapshotRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportSnapshotRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceResult(data, context);
  const response: GetInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstanceResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetInstanceAccessDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceAccessDetailsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstanceAccessDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceAccessDetailsResult(data, context);
  const response: GetInstanceAccessDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstanceAccessDetailsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstanceAccessDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceAccessDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetInstanceMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceMetricDataCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstanceMetricDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceMetricDataResult(data, context);
  const response: GetInstanceMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstanceMetricDataResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstanceMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetInstancePortStatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancePortStatesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstancePortStatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstancePortStatesResult(data, context);
  const response: GetInstancePortStatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstancePortStatesResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstancePortStatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancePortStatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstancesResult(data, context);
  const response: GetInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstancesResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetInstanceSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceSnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstanceSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceSnapshotResult(data, context);
  const response: GetInstanceSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstanceSnapshotResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstanceSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetInstanceSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceSnapshotsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstanceSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceSnapshotsResult(data, context);
  const response: GetInstanceSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstanceSnapshotsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstanceSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetInstanceStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceStateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstanceStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceStateResult(data, context);
  const response: GetInstanceStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstanceStateResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstanceStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPairCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetKeyPairResult(data, context);
  const response: GetKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetKeyPairResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetKeyPairCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPairCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetKeyPairsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPairsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetKeyPairsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetKeyPairsResult(data, context);
  const response: GetKeyPairsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetKeyPairsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetKeyPairsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPairsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLoadBalancerResult(data, context);
  const response: GetLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLoadBalancerResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetLoadBalancerMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerMetricDataCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLoadBalancerMetricDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLoadBalancerMetricDataResult(data, context);
  const response: GetLoadBalancerMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLoadBalancerMetricDataResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLoadBalancerMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLoadBalancersResult(data, context);
  const response: GetLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLoadBalancersResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLoadBalancersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerTlsCertificatesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLoadBalancerTlsCertificatesResult(data, context);
  const response: GetLoadBalancerTlsCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLoadBalancerTlsCertificatesResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerTlsCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetOperationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOperationResult(data, context);
  const response: GetOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOperationResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetOperationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOperationsResult(data, context);
  const response: GetOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOperationsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOperationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetOperationsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationsForResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetOperationsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOperationsForResourceResult(data, context);
  const response: GetOperationsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOperationsForResourceResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOperationsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetRegionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRegionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRegionsResult(data, context);
  const response: GetRegionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRegionsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRegionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseResult(data, context);
  const response: GetRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseBlueprintsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseBlueprintsResult(data, context);
  const response: GetRelationalDatabaseBlueprintsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseBlueprintsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseBlueprintsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetRelationalDatabaseBundlesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseBundlesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseBundlesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseBundlesResult(data, context);
  const response: GetRelationalDatabaseBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseBundlesResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseBundlesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseBundlesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetRelationalDatabaseEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseEventsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseEventsResult(data, context);
  const response: GetRelationalDatabaseEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseEventsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetRelationalDatabaseLogEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseLogEventsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseLogEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseLogEventsResult(data, context);
  const response: GetRelationalDatabaseLogEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseLogEventsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseLogEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseLogEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseLogStreamsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseLogStreamsResult(data, context);
  const response: GetRelationalDatabaseLogStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseLogStreamsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseLogStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseMasterUserPasswordCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordResult(data, context);
  const response: GetRelationalDatabaseMasterUserPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseMasterUserPasswordResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseMasterUserPasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetRelationalDatabaseMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseMetricDataCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseMetricDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseMetricDataResult(data, context);
  const response: GetRelationalDatabaseMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseMetricDataResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetRelationalDatabaseParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseParametersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseParametersResult(data, context);
  const response: GetRelationalDatabaseParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseParametersResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetRelationalDatabasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabasesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabasesResult(data, context);
  const response: GetRelationalDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabasesResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetRelationalDatabaseSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseSnapshotCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseSnapshotResult(data, context);
  const response: GetRelationalDatabaseSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseSnapshotResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseSnapshotsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseSnapshotsResult(data, context);
  const response: GetRelationalDatabaseSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseSnapshotsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetStaticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStaticIpCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetStaticIpResult(data, context);
  const response: GetStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetStaticIpResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetStaticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStaticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetStaticIpsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStaticIpsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetStaticIpsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetStaticIpsResult(data, context);
  const response: GetStaticIpsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetStaticIpsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetStaticIpsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStaticIpsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ImportKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportKeyPairCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ImportKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportKeyPairResult(data, context);
  const response: ImportKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ImportKeyPairResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportKeyPairCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportKeyPairCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1IsVpcPeeredCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IsVpcPeeredCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1IsVpcPeeredCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IsVpcPeeredResult(data, context);
  const response: IsVpcPeeredCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IsVpcPeeredResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1IsVpcPeeredCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IsVpcPeeredCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1OpenInstancePublicPortsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OpenInstancePublicPortsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1OpenInstancePublicPortsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1OpenInstancePublicPortsResult(data, context);
  const response: OpenInstancePublicPortsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "OpenInstancePublicPortsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1OpenInstancePublicPortsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OpenInstancePublicPortsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1PeerVpcCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PeerVpcCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PeerVpcCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PeerVpcResult(data, context);
  const response: PeerVpcCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PeerVpcResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PeerVpcCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PeerVpcCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1PutAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAlarmCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutAlarmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAlarmResult(data, context);
  const response: PutAlarmCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutAlarmResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutAlarmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAlarmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1PutInstancePublicPortsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInstancePublicPortsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutInstancePublicPortsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutInstancePublicPortsResult(data, context);
  const response: PutInstancePublicPortsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutInstancePublicPortsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutInstancePublicPortsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInstancePublicPortsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RebootInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootInstanceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RebootInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RebootInstanceResult(data, context);
  const response: RebootInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RebootInstanceResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RebootInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RebootRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RebootRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RebootRelationalDatabaseResult(data, context);
  const response: RebootRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RebootRelationalDatabaseResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RebootRelationalDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootRelationalDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ReleaseStaticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleaseStaticIpCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ReleaseStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ReleaseStaticIpResult(data, context);
  const response: ReleaseStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ReleaseStaticIpResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ReleaseStaticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleaseStaticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ResetDistributionCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDistributionCacheCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ResetDistributionCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResetDistributionCacheResult(data, context);
  const response: ResetDistributionCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ResetDistributionCacheResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResetDistributionCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDistributionCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1SendContactMethodVerificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendContactMethodVerificationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SendContactMethodVerificationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SendContactMethodVerificationResult(data, context);
  const response: SendContactMethodVerificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendContactMethodVerificationResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SendContactMethodVerificationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendContactMethodVerificationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StartInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartInstanceResult(data, context);
  const response: StartInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartInstanceResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StartRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartRelationalDatabaseResult(data, context);
  const response: StartRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartRelationalDatabaseResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartRelationalDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRelationalDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StopInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInstanceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopInstanceResult(data, context);
  const response: StopInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopInstanceResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StopRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopRelationalDatabaseResult(data, context);
  const response: StopRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopRelationalDatabaseResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopRelationalDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRelationalDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResult(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1TestAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestAlarmCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TestAlarmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TestAlarmResult(data, context);
  const response: TestAlarmCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TestAlarmResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TestAlarmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestAlarmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UnpeerVpcCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnpeerVpcCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UnpeerVpcCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UnpeerVpcResult(data, context);
  const response: UnpeerVpcCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UnpeerVpcResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UnpeerVpcCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnpeerVpcCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResult(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDistributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDistributionResult(data, context);
  const response: UpdateDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDistributionResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateDistributionBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionBundleCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDistributionBundleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDistributionBundleResult(data, context);
  const response: UpdateDistributionBundleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDistributionBundleResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDistributionBundleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionBundleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateDomainEntryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainEntryCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDomainEntryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDomainEntryResult(data, context);
  const response: UpdateDomainEntryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDomainEntryResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDomainEntryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainEntryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateLoadBalancerAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoadBalancerAttributeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateLoadBalancerAttributeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateLoadBalancerAttributeResult(data, context);
  const response: UpdateLoadBalancerAttributeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateLoadBalancerAttributeResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateLoadBalancerAttributeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoadBalancerAttributeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRelationalDatabaseResult(data, context);
  const response: UpdateRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRelationalDatabaseResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRelationalDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelationalDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateRelationalDatabaseParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelationalDatabaseParametersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateRelationalDatabaseParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRelationalDatabaseParametersResult(data, context);
  const response: UpdateRelationalDatabaseParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRelationalDatabaseParametersResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRelationalDatabaseParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelationalDatabaseParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = {
        ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = {
        ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = {
        ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1AccountSetupInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountSetupInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccountSetupInProgressException(body, context);
  const contents: AccountSetupInProgressException = {
    name: "AccountSetupInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(body, context);
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1OperationFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationFailureException(body, context);
  const contents: OperationFailureException = {
    name: "OperationFailureException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceException(body, context);
  const contents: ServiceException = {
    name: "ServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnauthenticatedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthenticatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnauthenticatedException(body, context);
  const contents: UnauthenticatedException = {
    name: "UnauthenticatedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AddOnRequest = (input: AddOnRequest, context: __SerdeContext): any => {
  return {
    ...(input.addOnType !== undefined && { addOnType: input.addOnType }),
    ...(input.autoSnapshotAddOnRequest !== undefined && {
      autoSnapshotAddOnRequest: serializeAws_json1_1AutoSnapshotAddOnRequest(input.autoSnapshotAddOnRequest, context),
    }),
  };
};

const serializeAws_json1_1AddOnRequestList = (input: AddOnRequest[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1AddOnRequest(entry, context));
};

const serializeAws_json1_1AllocateStaticIpRequest = (input: AllocateStaticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.staticIpName !== undefined && { staticIpName: input.staticIpName }),
  };
};

const serializeAws_json1_1AttachCertificateToDistributionRequest = (
  input: AttachCertificateToDistributionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateName !== undefined && { certificateName: input.certificateName }),
    ...(input.distributionName !== undefined && { distributionName: input.distributionName }),
  };
};

const serializeAws_json1_1AttachDiskRequest = (input: AttachDiskRequest, context: __SerdeContext): any => {
  return {
    ...(input.diskName !== undefined && { diskName: input.diskName }),
    ...(input.diskPath !== undefined && { diskPath: input.diskPath }),
    ...(input.instanceName !== undefined && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1AttachedDiskMap = (input: { [key: string]: DiskMap[] }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: DiskMap[] }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_json1_1DiskMapList(value, context),
    }),
    {}
  );
};

const serializeAws_json1_1AttachInstancesToLoadBalancerRequest = (
  input: AttachInstancesToLoadBalancerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceNames !== undefined && {
      instanceNames: serializeAws_json1_1ResourceNameList(input.instanceNames, context),
    }),
    ...(input.loadBalancerName !== undefined && { loadBalancerName: input.loadBalancerName }),
  };
};

const serializeAws_json1_1AttachLoadBalancerTlsCertificateRequest = (
  input: AttachLoadBalancerTlsCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateName !== undefined && { certificateName: input.certificateName }),
    ...(input.loadBalancerName !== undefined && { loadBalancerName: input.loadBalancerName }),
  };
};

const serializeAws_json1_1AttachStaticIpRequest = (input: AttachStaticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName !== undefined && { instanceName: input.instanceName }),
    ...(input.staticIpName !== undefined && { staticIpName: input.staticIpName }),
  };
};

const serializeAws_json1_1AutoSnapshotAddOnRequest = (
  input: AutoSnapshotAddOnRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.snapshotTimeOfDay !== undefined && { snapshotTimeOfDay: input.snapshotTimeOfDay }),
  };
};

const serializeAws_json1_1CacheBehavior = (input: CacheBehavior, context: __SerdeContext): any => {
  return {
    ...(input.behavior !== undefined && { behavior: input.behavior }),
  };
};

const serializeAws_json1_1CacheBehaviorList = (input: CacheBehaviorPerPath[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1CacheBehaviorPerPath(entry, context));
};

const serializeAws_json1_1CacheBehaviorPerPath = (input: CacheBehaviorPerPath, context: __SerdeContext): any => {
  return {
    ...(input.behavior !== undefined && { behavior: input.behavior }),
    ...(input.path !== undefined && { path: input.path }),
  };
};

const serializeAws_json1_1CacheSettings = (input: CacheSettings, context: __SerdeContext): any => {
  return {
    ...(input.allowedHTTPMethods !== undefined && { allowedHTTPMethods: input.allowedHTTPMethods }),
    ...(input.cachedHTTPMethods !== undefined && { cachedHTTPMethods: input.cachedHTTPMethods }),
    ...(input.defaultTTL !== undefined && { defaultTTL: input.defaultTTL }),
    ...(input.forwardedCookies !== undefined && {
      forwardedCookies: serializeAws_json1_1CookieObject(input.forwardedCookies, context),
    }),
    ...(input.forwardedHeaders !== undefined && {
      forwardedHeaders: serializeAws_json1_1HeaderObject(input.forwardedHeaders, context),
    }),
    ...(input.forwardedQueryStrings !== undefined && {
      forwardedQueryStrings: serializeAws_json1_1QueryStringObject(input.forwardedQueryStrings, context),
    }),
    ...(input.maximumTTL !== undefined && { maximumTTL: input.maximumTTL }),
    ...(input.minimumTTL !== undefined && { minimumTTL: input.minimumTTL }),
  };
};

const serializeAws_json1_1CertificateStatusList = (
  input: (CertificateStatus | string)[],
  context: __SerdeContext
): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1CloseInstancePublicPortsRequest = (
  input: CloseInstancePublicPortsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName !== undefined && { instanceName: input.instanceName }),
    ...(input.portInfo !== undefined && { portInfo: serializeAws_json1_1PortInfo(input.portInfo, context) }),
  };
};

const serializeAws_json1_1ContactProtocolsList = (
  input: (ContactProtocol | string)[],
  context: __SerdeContext
): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1CookieObject = (input: CookieObject, context: __SerdeContext): any => {
  return {
    ...(input.cookiesAllowList !== undefined && {
      cookiesAllowList: serializeAws_json1_1StringList(input.cookiesAllowList, context),
    }),
    ...(input.option !== undefined && { option: input.option }),
  };
};

const serializeAws_json1_1CopySnapshotRequest = (input: CopySnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.restoreDate !== undefined && { restoreDate: input.restoreDate }),
    ...(input.sourceRegion !== undefined && { sourceRegion: input.sourceRegion }),
    ...(input.sourceResourceName !== undefined && { sourceResourceName: input.sourceResourceName }),
    ...(input.sourceSnapshotName !== undefined && { sourceSnapshotName: input.sourceSnapshotName }),
    ...(input.targetSnapshotName !== undefined && { targetSnapshotName: input.targetSnapshotName }),
    ...(input.useLatestRestorableAutoSnapshot !== undefined && {
      useLatestRestorableAutoSnapshot: input.useLatestRestorableAutoSnapshot,
    }),
  };
};

const serializeAws_json1_1CreateCertificateRequest = (
  input: CreateCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateName !== undefined && { certificateName: input.certificateName }),
    ...(input.domainName !== undefined && { domainName: input.domainName }),
    ...(input.subjectAlternativeNames !== undefined && {
      subjectAlternativeNames: serializeAws_json1_1SubjectAlternativeNameList(input.subjectAlternativeNames, context),
    }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateCloudFormationStackRequest = (
  input: CreateCloudFormationStackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instances !== undefined && {
      instances: serializeAws_json1_1InstanceEntryList(input.instances, context),
    }),
  };
};

const serializeAws_json1_1CreateContactMethodRequest = (
  input: CreateContactMethodRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.contactEndpoint !== undefined && { contactEndpoint: input.contactEndpoint }),
    ...(input.protocol !== undefined && { protocol: input.protocol }),
  };
};

const serializeAws_json1_1CreateDiskFromSnapshotRequest = (
  input: CreateDiskFromSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.addOns !== undefined && { addOns: serializeAws_json1_1AddOnRequestList(input.addOns, context) }),
    ...(input.availabilityZone !== undefined && { availabilityZone: input.availabilityZone }),
    ...(input.diskName !== undefined && { diskName: input.diskName }),
    ...(input.diskSnapshotName !== undefined && { diskSnapshotName: input.diskSnapshotName }),
    ...(input.restoreDate !== undefined && { restoreDate: input.restoreDate }),
    ...(input.sizeInGb !== undefined && { sizeInGb: input.sizeInGb }),
    ...(input.sourceDiskName !== undefined && { sourceDiskName: input.sourceDiskName }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.useLatestRestorableAutoSnapshot !== undefined && {
      useLatestRestorableAutoSnapshot: input.useLatestRestorableAutoSnapshot,
    }),
  };
};

const serializeAws_json1_1CreateDiskRequest = (input: CreateDiskRequest, context: __SerdeContext): any => {
  return {
    ...(input.addOns !== undefined && { addOns: serializeAws_json1_1AddOnRequestList(input.addOns, context) }),
    ...(input.availabilityZone !== undefined && { availabilityZone: input.availabilityZone }),
    ...(input.diskName !== undefined && { diskName: input.diskName }),
    ...(input.sizeInGb !== undefined && { sizeInGb: input.sizeInGb }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateDiskSnapshotRequest = (
  input: CreateDiskSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.diskName !== undefined && { diskName: input.diskName }),
    ...(input.diskSnapshotName !== undefined && { diskSnapshotName: input.diskSnapshotName }),
    ...(input.instanceName !== undefined && { instanceName: input.instanceName }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateDistributionRequest = (
  input: CreateDistributionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.bundleId !== undefined && { bundleId: input.bundleId }),
    ...(input.cacheBehaviorSettings !== undefined && {
      cacheBehaviorSettings: serializeAws_json1_1CacheSettings(input.cacheBehaviorSettings, context),
    }),
    ...(input.cacheBehaviors !== undefined && {
      cacheBehaviors: serializeAws_json1_1CacheBehaviorList(input.cacheBehaviors, context),
    }),
    ...(input.defaultCacheBehavior !== undefined && {
      defaultCacheBehavior: serializeAws_json1_1CacheBehavior(input.defaultCacheBehavior, context),
    }),
    ...(input.distributionName !== undefined && { distributionName: input.distributionName }),
    ...(input.origin !== undefined && { origin: serializeAws_json1_1InputOrigin(input.origin, context) }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateDomainEntryRequest = (
  input: CreateDomainEntryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.domainEntry !== undefined && {
      domainEntry: serializeAws_json1_1DomainEntry(input.domainEntry, context),
    }),
    ...(input.domainName !== undefined && { domainName: input.domainName }),
  };
};

const serializeAws_json1_1CreateDomainRequest = (input: CreateDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.domainName !== undefined && { domainName: input.domainName }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateInstancesFromSnapshotRequest = (
  input: CreateInstancesFromSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.addOns !== undefined && { addOns: serializeAws_json1_1AddOnRequestList(input.addOns, context) }),
    ...(input.attachedDiskMapping !== undefined && {
      attachedDiskMapping: serializeAws_json1_1AttachedDiskMap(input.attachedDiskMapping, context),
    }),
    ...(input.availabilityZone !== undefined && { availabilityZone: input.availabilityZone }),
    ...(input.bundleId !== undefined && { bundleId: input.bundleId }),
    ...(input.instanceNames !== undefined && {
      instanceNames: serializeAws_json1_1StringList(input.instanceNames, context),
    }),
    ...(input.instanceSnapshotName !== undefined && { instanceSnapshotName: input.instanceSnapshotName }),
    ...(input.keyPairName !== undefined && { keyPairName: input.keyPairName }),
    ...(input.restoreDate !== undefined && { restoreDate: input.restoreDate }),
    ...(input.sourceInstanceName !== undefined && { sourceInstanceName: input.sourceInstanceName }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.useLatestRestorableAutoSnapshot !== undefined && {
      useLatestRestorableAutoSnapshot: input.useLatestRestorableAutoSnapshot,
    }),
    ...(input.userData !== undefined && { userData: input.userData }),
  };
};

const serializeAws_json1_1CreateInstanceSnapshotRequest = (
  input: CreateInstanceSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName !== undefined && { instanceName: input.instanceName }),
    ...(input.instanceSnapshotName !== undefined && { instanceSnapshotName: input.instanceSnapshotName }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateInstancesRequest = (input: CreateInstancesRequest, context: __SerdeContext): any => {
  return {
    ...(input.addOns !== undefined && { addOns: serializeAws_json1_1AddOnRequestList(input.addOns, context) }),
    ...(input.availabilityZone !== undefined && { availabilityZone: input.availabilityZone }),
    ...(input.blueprintId !== undefined && { blueprintId: input.blueprintId }),
    ...(input.bundleId !== undefined && { bundleId: input.bundleId }),
    ...(input.customImageName !== undefined && { customImageName: input.customImageName }),
    ...(input.instanceNames !== undefined && {
      instanceNames: serializeAws_json1_1StringList(input.instanceNames, context),
    }),
    ...(input.keyPairName !== undefined && { keyPairName: input.keyPairName }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.userData !== undefined && { userData: input.userData }),
  };
};

const serializeAws_json1_1CreateKeyPairRequest = (input: CreateKeyPairRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyPairName !== undefined && { keyPairName: input.keyPairName }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateLoadBalancerRequest = (
  input: CreateLoadBalancerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateAlternativeNames !== undefined && {
      certificateAlternativeNames: serializeAws_json1_1DomainNameList(input.certificateAlternativeNames, context),
    }),
    ...(input.certificateDomainName !== undefined && { certificateDomainName: input.certificateDomainName }),
    ...(input.certificateName !== undefined && { certificateName: input.certificateName }),
    ...(input.healthCheckPath !== undefined && { healthCheckPath: input.healthCheckPath }),
    ...(input.instancePort !== undefined && { instancePort: input.instancePort }),
    ...(input.loadBalancerName !== undefined && { loadBalancerName: input.loadBalancerName }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateLoadBalancerTlsCertificateRequest = (
  input: CreateLoadBalancerTlsCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateAlternativeNames !== undefined && {
      certificateAlternativeNames: serializeAws_json1_1DomainNameList(input.certificateAlternativeNames, context),
    }),
    ...(input.certificateDomainName !== undefined && { certificateDomainName: input.certificateDomainName }),
    ...(input.certificateName !== undefined && { certificateName: input.certificateName }),
    ...(input.loadBalancerName !== undefined && { loadBalancerName: input.loadBalancerName }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateRelationalDatabaseFromSnapshotRequest = (
  input: CreateRelationalDatabaseFromSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.availabilityZone !== undefined && { availabilityZone: input.availabilityZone }),
    ...(input.publiclyAccessible !== undefined && { publiclyAccessible: input.publiclyAccessible }),
    ...(input.relationalDatabaseBundleId !== undefined && {
      relationalDatabaseBundleId: input.relationalDatabaseBundleId,
    }),
    ...(input.relationalDatabaseName !== undefined && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.relationalDatabaseSnapshotName !== undefined && {
      relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
    }),
    ...(input.restoreTime !== undefined && { restoreTime: Math.round(input.restoreTime.getTime() / 1000) }),
    ...(input.sourceRelationalDatabaseName !== undefined && {
      sourceRelationalDatabaseName: input.sourceRelationalDatabaseName,
    }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.useLatestRestorableTime !== undefined && { useLatestRestorableTime: input.useLatestRestorableTime }),
  };
};

const serializeAws_json1_1CreateRelationalDatabaseRequest = (
  input: CreateRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.availabilityZone !== undefined && { availabilityZone: input.availabilityZone }),
    ...(input.masterDatabaseName !== undefined && { masterDatabaseName: input.masterDatabaseName }),
    ...(input.masterUserPassword !== undefined && { masterUserPassword: input.masterUserPassword }),
    ...(input.masterUsername !== undefined && { masterUsername: input.masterUsername }),
    ...(input.preferredBackupWindow !== undefined && { preferredBackupWindow: input.preferredBackupWindow }),
    ...(input.preferredMaintenanceWindow !== undefined && {
      preferredMaintenanceWindow: input.preferredMaintenanceWindow,
    }),
    ...(input.publiclyAccessible !== undefined && { publiclyAccessible: input.publiclyAccessible }),
    ...(input.relationalDatabaseBlueprintId !== undefined && {
      relationalDatabaseBlueprintId: input.relationalDatabaseBlueprintId,
    }),
    ...(input.relationalDatabaseBundleId !== undefined && {
      relationalDatabaseBundleId: input.relationalDatabaseBundleId,
    }),
    ...(input.relationalDatabaseName !== undefined && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateRelationalDatabaseSnapshotRequest = (
  input: CreateRelationalDatabaseSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseName !== undefined && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.relationalDatabaseSnapshotName !== undefined && {
      relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
    }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1DeleteAlarmRequest = (input: DeleteAlarmRequest, context: __SerdeContext): any => {
  return {
    ...(input.alarmName !== undefined && { alarmName: input.alarmName }),
  };
};

const serializeAws_json1_1DeleteAutoSnapshotRequest = (
  input: DeleteAutoSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.date !== undefined && { date: input.date }),
    ...(input.resourceName !== undefined && { resourceName: input.resourceName }),
  };
};

const serializeAws_json1_1DeleteCertificateRequest = (
  input: DeleteCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateName !== undefined && { certificateName: input.certificateName }),
  };
};

const serializeAws_json1_1DeleteContactMethodRequest = (
  input: DeleteContactMethodRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.protocol !== undefined && { protocol: input.protocol }),
  };
};

const serializeAws_json1_1DeleteDiskRequest = (input: DeleteDiskRequest, context: __SerdeContext): any => {
  return {
    ...(input.diskName !== undefined && { diskName: input.diskName }),
    ...(input.forceDeleteAddOns !== undefined && { forceDeleteAddOns: input.forceDeleteAddOns }),
  };
};

const serializeAws_json1_1DeleteDiskSnapshotRequest = (
  input: DeleteDiskSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.diskSnapshotName !== undefined && { diskSnapshotName: input.diskSnapshotName }),
  };
};

const serializeAws_json1_1DeleteDistributionRequest = (
  input: DeleteDistributionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.distributionName !== undefined && { distributionName: input.distributionName }),
  };
};

const serializeAws_json1_1DeleteDomainEntryRequest = (
  input: DeleteDomainEntryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.domainEntry !== undefined && {
      domainEntry: serializeAws_json1_1DomainEntry(input.domainEntry, context),
    }),
    ...(input.domainName !== undefined && { domainName: input.domainName }),
  };
};

const serializeAws_json1_1DeleteDomainRequest = (input: DeleteDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.domainName !== undefined && { domainName: input.domainName }),
  };
};

const serializeAws_json1_1DeleteInstanceRequest = (input: DeleteInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.forceDeleteAddOns !== undefined && { forceDeleteAddOns: input.forceDeleteAddOns }),
    ...(input.instanceName !== undefined && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1DeleteInstanceSnapshotRequest = (
  input: DeleteInstanceSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceSnapshotName !== undefined && { instanceSnapshotName: input.instanceSnapshotName }),
  };
};

const serializeAws_json1_1DeleteKeyPairRequest = (input: DeleteKeyPairRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyPairName !== undefined && { keyPairName: input.keyPairName }),
  };
};

const serializeAws_json1_1DeleteKnownHostKeysRequest = (
  input: DeleteKnownHostKeysRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName !== undefined && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1DeleteLoadBalancerRequest = (
  input: DeleteLoadBalancerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.loadBalancerName !== undefined && { loadBalancerName: input.loadBalancerName }),
  };
};

const serializeAws_json1_1DeleteLoadBalancerTlsCertificateRequest = (
  input: DeleteLoadBalancerTlsCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateName !== undefined && { certificateName: input.certificateName }),
    ...(input.force !== undefined && { force: input.force }),
    ...(input.loadBalancerName !== undefined && { loadBalancerName: input.loadBalancerName }),
  };
};

const serializeAws_json1_1DeleteRelationalDatabaseRequest = (
  input: DeleteRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.finalRelationalDatabaseSnapshotName !== undefined && {
      finalRelationalDatabaseSnapshotName: input.finalRelationalDatabaseSnapshotName,
    }),
    ...(input.relationalDatabaseName !== undefined && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.skipFinalSnapshot !== undefined && { skipFinalSnapshot: input.skipFinalSnapshot }),
  };
};

const serializeAws_json1_1DeleteRelationalDatabaseSnapshotRequest = (
  input: DeleteRelationalDatabaseSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseSnapshotName !== undefined && {
      relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
    }),
  };
};

const serializeAws_json1_1DetachCertificateFromDistributionRequest = (
  input: DetachCertificateFromDistributionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.distributionName !== undefined && { distributionName: input.distributionName }),
  };
};

const serializeAws_json1_1DetachDiskRequest = (input: DetachDiskRequest, context: __SerdeContext): any => {
  return {
    ...(input.diskName !== undefined && { diskName: input.diskName }),
  };
};

const serializeAws_json1_1DetachInstancesFromLoadBalancerRequest = (
  input: DetachInstancesFromLoadBalancerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceNames !== undefined && {
      instanceNames: serializeAws_json1_1ResourceNameList(input.instanceNames, context),
    }),
    ...(input.loadBalancerName !== undefined && { loadBalancerName: input.loadBalancerName }),
  };
};

const serializeAws_json1_1DetachStaticIpRequest = (input: DetachStaticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.staticIpName !== undefined && { staticIpName: input.staticIpName }),
  };
};

const serializeAws_json1_1DisableAddOnRequest = (input: DisableAddOnRequest, context: __SerdeContext): any => {
  return {
    ...(input.addOnType !== undefined && { addOnType: input.addOnType }),
    ...(input.resourceName !== undefined && { resourceName: input.resourceName }),
  };
};

const serializeAws_json1_1DiskMap = (input: DiskMap, context: __SerdeContext): any => {
  return {
    ...(input.newDiskName !== undefined && { newDiskName: input.newDiskName }),
    ...(input.originalDiskPath !== undefined && { originalDiskPath: input.originalDiskPath }),
  };
};

const serializeAws_json1_1DiskMapList = (input: DiskMap[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1DiskMap(entry, context));
};

const serializeAws_json1_1DomainEntry = (input: DomainEntry, context: __SerdeContext): any => {
  return {
    ...(input.id !== undefined && { id: input.id }),
    ...(input.isAlias !== undefined && { isAlias: input.isAlias }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.options !== undefined && { options: serializeAws_json1_1DomainEntryOptions(input.options, context) }),
    ...(input.target !== undefined && { target: input.target }),
    ...(input.type !== undefined && { type: input.type }),
  };
};

const serializeAws_json1_1DomainEntryOptions = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const serializeAws_json1_1DomainNameList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1DownloadDefaultKeyPairRequest = (
  input: DownloadDefaultKeyPairRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1EnableAddOnRequest = (input: EnableAddOnRequest, context: __SerdeContext): any => {
  return {
    ...(input.addOnRequest !== undefined && {
      addOnRequest: serializeAws_json1_1AddOnRequest(input.addOnRequest, context),
    }),
    ...(input.resourceName !== undefined && { resourceName: input.resourceName }),
  };
};

const serializeAws_json1_1ExportSnapshotRequest = (input: ExportSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.sourceSnapshotName !== undefined && { sourceSnapshotName: input.sourceSnapshotName }),
  };
};

const serializeAws_json1_1GetActiveNamesRequest = (input: GetActiveNamesRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetAlarmsRequest = (input: GetAlarmsRequest, context: __SerdeContext): any => {
  return {
    ...(input.alarmName !== undefined && { alarmName: input.alarmName }),
    ...(input.monitoredResourceName !== undefined && { monitoredResourceName: input.monitoredResourceName }),
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetAutoSnapshotsRequest = (input: GetAutoSnapshotsRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceName !== undefined && { resourceName: input.resourceName }),
  };
};

const serializeAws_json1_1GetBlueprintsRequest = (input: GetBlueprintsRequest, context: __SerdeContext): any => {
  return {
    ...(input.includeInactive !== undefined && { includeInactive: input.includeInactive }),
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetBundlesRequest = (input: GetBundlesRequest, context: __SerdeContext): any => {
  return {
    ...(input.includeInactive !== undefined && { includeInactive: input.includeInactive }),
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetCertificatesRequest = (input: GetCertificatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.certificateName !== undefined && { certificateName: input.certificateName }),
    ...(input.certificateStatuses !== undefined && {
      certificateStatuses: serializeAws_json1_1CertificateStatusList(input.certificateStatuses, context),
    }),
    ...(input.includeCertificateDetails !== undefined && {
      includeCertificateDetails: input.includeCertificateDetails,
    }),
  };
};

const serializeAws_json1_1GetCloudFormationStackRecordsRequest = (
  input: GetCloudFormationStackRecordsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetContactMethodsRequest = (
  input: GetContactMethodsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.protocols !== undefined && {
      protocols: serializeAws_json1_1ContactProtocolsList(input.protocols, context),
    }),
  };
};

const serializeAws_json1_1GetDiskRequest = (input: GetDiskRequest, context: __SerdeContext): any => {
  return {
    ...(input.diskName !== undefined && { diskName: input.diskName }),
  };
};

const serializeAws_json1_1GetDiskSnapshotRequest = (input: GetDiskSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.diskSnapshotName !== undefined && { diskSnapshotName: input.diskSnapshotName }),
  };
};

const serializeAws_json1_1GetDiskSnapshotsRequest = (input: GetDiskSnapshotsRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetDisksRequest = (input: GetDisksRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetDistributionBundlesRequest = (
  input: GetDistributionBundlesRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetDistributionLatestCacheResetRequest = (
  input: GetDistributionLatestCacheResetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.distributionName !== undefined && { distributionName: input.distributionName }),
  };
};

const serializeAws_json1_1GetDistributionMetricDataRequest = (
  input: GetDistributionMetricDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.distributionName !== undefined && { distributionName: input.distributionName }),
    ...(input.endTime !== undefined && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.metricName !== undefined && { metricName: input.metricName }),
    ...(input.period !== undefined && { period: input.period }),
    ...(input.startTime !== undefined && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.statistics !== undefined && {
      statistics: serializeAws_json1_1MetricStatisticList(input.statistics, context),
    }),
    ...(input.unit !== undefined && { unit: input.unit }),
  };
};

const serializeAws_json1_1GetDistributionsRequest = (input: GetDistributionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.distributionName !== undefined && { distributionName: input.distributionName }),
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetDomainRequest = (input: GetDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.domainName !== undefined && { domainName: input.domainName }),
  };
};

const serializeAws_json1_1GetDomainsRequest = (input: GetDomainsRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetExportSnapshotRecordsRequest = (
  input: GetExportSnapshotRecordsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetInstanceAccessDetailsRequest = (
  input: GetInstanceAccessDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName !== undefined && { instanceName: input.instanceName }),
    ...(input.protocol !== undefined && { protocol: input.protocol }),
  };
};

const serializeAws_json1_1GetInstanceMetricDataRequest = (
  input: GetInstanceMetricDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime !== undefined && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.instanceName !== undefined && { instanceName: input.instanceName }),
    ...(input.metricName !== undefined && { metricName: input.metricName }),
    ...(input.period !== undefined && { period: input.period }),
    ...(input.startTime !== undefined && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.statistics !== undefined && {
      statistics: serializeAws_json1_1MetricStatisticList(input.statistics, context),
    }),
    ...(input.unit !== undefined && { unit: input.unit }),
  };
};

const serializeAws_json1_1GetInstancePortStatesRequest = (
  input: GetInstancePortStatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName !== undefined && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1GetInstanceRequest = (input: GetInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName !== undefined && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1GetInstanceSnapshotRequest = (
  input: GetInstanceSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceSnapshotName !== undefined && { instanceSnapshotName: input.instanceSnapshotName }),
  };
};

const serializeAws_json1_1GetInstanceSnapshotsRequest = (
  input: GetInstanceSnapshotsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetInstancesRequest = (input: GetInstancesRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetInstanceStateRequest = (input: GetInstanceStateRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName !== undefined && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1GetKeyPairRequest = (input: GetKeyPairRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyPairName !== undefined && { keyPairName: input.keyPairName }),
  };
};

const serializeAws_json1_1GetKeyPairsRequest = (input: GetKeyPairsRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetLoadBalancerMetricDataRequest = (
  input: GetLoadBalancerMetricDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime !== undefined && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.loadBalancerName !== undefined && { loadBalancerName: input.loadBalancerName }),
    ...(input.metricName !== undefined && { metricName: input.metricName }),
    ...(input.period !== undefined && { period: input.period }),
    ...(input.startTime !== undefined && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.statistics !== undefined && {
      statistics: serializeAws_json1_1MetricStatisticList(input.statistics, context),
    }),
    ...(input.unit !== undefined && { unit: input.unit }),
  };
};

const serializeAws_json1_1GetLoadBalancerRequest = (input: GetLoadBalancerRequest, context: __SerdeContext): any => {
  return {
    ...(input.loadBalancerName !== undefined && { loadBalancerName: input.loadBalancerName }),
  };
};

const serializeAws_json1_1GetLoadBalancersRequest = (input: GetLoadBalancersRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetLoadBalancerTlsCertificatesRequest = (
  input: GetLoadBalancerTlsCertificatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.loadBalancerName !== undefined && { loadBalancerName: input.loadBalancerName }),
  };
};

const serializeAws_json1_1GetOperationRequest = (input: GetOperationRequest, context: __SerdeContext): any => {
  return {
    ...(input.operationId !== undefined && { operationId: input.operationId }),
  };
};

const serializeAws_json1_1GetOperationsForResourceRequest = (
  input: GetOperationsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
    ...(input.resourceName !== undefined && { resourceName: input.resourceName }),
  };
};

const serializeAws_json1_1GetOperationsRequest = (input: GetOperationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetRegionsRequest = (input: GetRegionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.includeAvailabilityZones !== undefined && { includeAvailabilityZones: input.includeAvailabilityZones }),
    ...(input.includeRelationalDatabaseAvailabilityZones !== undefined && {
      includeRelationalDatabaseAvailabilityZones: input.includeRelationalDatabaseAvailabilityZones,
    }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseBlueprintsRequest = (
  input: GetRelationalDatabaseBlueprintsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseBundlesRequest = (
  input: GetRelationalDatabaseBundlesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseEventsRequest = (
  input: GetRelationalDatabaseEventsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.durationInMinutes !== undefined && { durationInMinutes: input.durationInMinutes }),
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
    ...(input.relationalDatabaseName !== undefined && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseLogEventsRequest = (
  input: GetRelationalDatabaseLogEventsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime !== undefined && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.logStreamName !== undefined && { logStreamName: input.logStreamName }),
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
    ...(input.relationalDatabaseName !== undefined && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.startFromHead !== undefined && { startFromHead: input.startFromHead }),
    ...(input.startTime !== undefined && { startTime: Math.round(input.startTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseLogStreamsRequest = (
  input: GetRelationalDatabaseLogStreamsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseName !== undefined && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordRequest = (
  input: GetRelationalDatabaseMasterUserPasswordRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.passwordVersion !== undefined && { passwordVersion: input.passwordVersion }),
    ...(input.relationalDatabaseName !== undefined && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseMetricDataRequest = (
  input: GetRelationalDatabaseMetricDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime !== undefined && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.metricName !== undefined && { metricName: input.metricName }),
    ...(input.period !== undefined && { period: input.period }),
    ...(input.relationalDatabaseName !== undefined && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.startTime !== undefined && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.statistics !== undefined && {
      statistics: serializeAws_json1_1MetricStatisticList(input.statistics, context),
    }),
    ...(input.unit !== undefined && { unit: input.unit }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseParametersRequest = (
  input: GetRelationalDatabaseParametersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
    ...(input.relationalDatabaseName !== undefined && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseRequest = (
  input: GetRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseName !== undefined && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseSnapshotRequest = (
  input: GetRelationalDatabaseSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseSnapshotName !== undefined && {
      relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
    }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseSnapshotsRequest = (
  input: GetRelationalDatabaseSnapshotsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetRelationalDatabasesRequest = (
  input: GetRelationalDatabasesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetStaticIpRequest = (input: GetStaticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.staticIpName !== undefined && { staticIpName: input.staticIpName }),
  };
};

const serializeAws_json1_1GetStaticIpsRequest = (input: GetStaticIpsRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken !== undefined && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1HeaderForwardList = (input: (HeaderEnum | string)[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1HeaderObject = (input: HeaderObject, context: __SerdeContext): any => {
  return {
    ...(input.headersAllowList !== undefined && {
      headersAllowList: serializeAws_json1_1HeaderForwardList(input.headersAllowList, context),
    }),
    ...(input.option !== undefined && { option: input.option }),
  };
};

const serializeAws_json1_1ImportKeyPairRequest = (input: ImportKeyPairRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyPairName !== undefined && { keyPairName: input.keyPairName }),
    ...(input.publicKeyBase64 !== undefined && { publicKeyBase64: input.publicKeyBase64 }),
  };
};

const serializeAws_json1_1InputOrigin = (input: InputOrigin, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.protocolPolicy !== undefined && { protocolPolicy: input.protocolPolicy }),
    ...(input.regionName !== undefined && { regionName: input.regionName }),
  };
};

const serializeAws_json1_1InstanceEntry = (input: InstanceEntry, context: __SerdeContext): any => {
  return {
    ...(input.availabilityZone !== undefined && { availabilityZone: input.availabilityZone }),
    ...(input.instanceType !== undefined && { instanceType: input.instanceType }),
    ...(input.portInfoSource !== undefined && { portInfoSource: input.portInfoSource }),
    ...(input.sourceName !== undefined && { sourceName: input.sourceName }),
    ...(input.userData !== undefined && { userData: input.userData }),
  };
};

const serializeAws_json1_1InstanceEntryList = (input: InstanceEntry[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1InstanceEntry(entry, context));
};

const serializeAws_json1_1IsVpcPeeredRequest = (input: IsVpcPeeredRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1MetricStatisticList = (input: (MetricStatistic | string)[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1NotificationTriggerList = (input: (AlarmState | string)[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1OpenInstancePublicPortsRequest = (
  input: OpenInstancePublicPortsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName !== undefined && { instanceName: input.instanceName }),
    ...(input.portInfo !== undefined && { portInfo: serializeAws_json1_1PortInfo(input.portInfo, context) }),
  };
};

const serializeAws_json1_1PeerVpcRequest = (input: PeerVpcRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1PortInfo = (input: PortInfo, context: __SerdeContext): any => {
  return {
    ...(input.cidrListAliases !== undefined && {
      cidrListAliases: serializeAws_json1_1StringList(input.cidrListAliases, context),
    }),
    ...(input.cidrs !== undefined && { cidrs: serializeAws_json1_1StringList(input.cidrs, context) }),
    ...(input.fromPort !== undefined && { fromPort: input.fromPort }),
    ...(input.protocol !== undefined && { protocol: input.protocol }),
    ...(input.toPort !== undefined && { toPort: input.toPort }),
  };
};

const serializeAws_json1_1PortInfoList = (input: PortInfo[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1PortInfo(entry, context));
};

const serializeAws_json1_1PutAlarmRequest = (input: PutAlarmRequest, context: __SerdeContext): any => {
  return {
    ...(input.alarmName !== undefined && { alarmName: input.alarmName }),
    ...(input.comparisonOperator !== undefined && { comparisonOperator: input.comparisonOperator }),
    ...(input.contactProtocols !== undefined && {
      contactProtocols: serializeAws_json1_1ContactProtocolsList(input.contactProtocols, context),
    }),
    ...(input.datapointsToAlarm !== undefined && { datapointsToAlarm: input.datapointsToAlarm }),
    ...(input.evaluationPeriods !== undefined && { evaluationPeriods: input.evaluationPeriods }),
    ...(input.metricName !== undefined && { metricName: input.metricName }),
    ...(input.monitoredResourceName !== undefined && { monitoredResourceName: input.monitoredResourceName }),
    ...(input.notificationEnabled !== undefined && { notificationEnabled: input.notificationEnabled }),
    ...(input.notificationTriggers !== undefined && {
      notificationTriggers: serializeAws_json1_1NotificationTriggerList(input.notificationTriggers, context),
    }),
    ...(input.threshold !== undefined && { threshold: input.threshold }),
    ...(input.treatMissingData !== undefined && { treatMissingData: input.treatMissingData }),
  };
};

const serializeAws_json1_1PutInstancePublicPortsRequest = (
  input: PutInstancePublicPortsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName !== undefined && { instanceName: input.instanceName }),
    ...(input.portInfos !== undefined && { portInfos: serializeAws_json1_1PortInfoList(input.portInfos, context) }),
  };
};

const serializeAws_json1_1QueryStringObject = (input: QueryStringObject, context: __SerdeContext): any => {
  return {
    ...(input.option !== undefined && { option: input.option }),
    ...(input.queryStringsAllowList !== undefined && {
      queryStringsAllowList: serializeAws_json1_1StringList(input.queryStringsAllowList, context),
    }),
  };
};

const serializeAws_json1_1RebootInstanceRequest = (input: RebootInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName !== undefined && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1RebootRelationalDatabaseRequest = (
  input: RebootRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseName !== undefined && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

const serializeAws_json1_1RelationalDatabaseParameter = (
  input: RelationalDatabaseParameter,
  context: __SerdeContext
): any => {
  return {
    ...(input.allowedValues !== undefined && { allowedValues: input.allowedValues }),
    ...(input.applyMethod !== undefined && { applyMethod: input.applyMethod }),
    ...(input.applyType !== undefined && { applyType: input.applyType }),
    ...(input.dataType !== undefined && { dataType: input.dataType }),
    ...(input.description !== undefined && { description: input.description }),
    ...(input.isModifiable !== undefined && { isModifiable: input.isModifiable }),
    ...(input.parameterName !== undefined && { parameterName: input.parameterName }),
    ...(input.parameterValue !== undefined && { parameterValue: input.parameterValue }),
  };
};

const serializeAws_json1_1RelationalDatabaseParameterList = (
  input: RelationalDatabaseParameter[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_json1_1RelationalDatabaseParameter(entry, context));
};

const serializeAws_json1_1ReleaseStaticIpRequest = (input: ReleaseStaticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.staticIpName !== undefined && { staticIpName: input.staticIpName }),
  };
};

const serializeAws_json1_1ResetDistributionCacheRequest = (
  input: ResetDistributionCacheRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.distributionName !== undefined && { distributionName: input.distributionName }),
  };
};

const serializeAws_json1_1ResourceNameList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1SendContactMethodVerificationRequest = (
  input: SendContactMethodVerificationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.protocol !== undefined && { protocol: input.protocol }),
  };
};

const serializeAws_json1_1StartInstanceRequest = (input: StartInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName !== undefined && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1StartRelationalDatabaseRequest = (
  input: StartRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseName !== undefined && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

const serializeAws_json1_1StopInstanceRequest = (input: StopInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.force !== undefined && { force: input.force }),
    ...(input.instanceName !== undefined && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1StopRelationalDatabaseRequest = (
  input: StopRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseName !== undefined && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.relationalDatabaseSnapshotName !== undefined && {
      relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
    }),
  };
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1SubjectAlternativeNameList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && { key: input.key }),
    ...(input.value !== undefined && { value: input.value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.resourceName !== undefined && { resourceName: input.resourceName }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1TestAlarmRequest = (input: TestAlarmRequest, context: __SerdeContext): any => {
  return {
    ...(input.alarmName !== undefined && { alarmName: input.alarmName }),
    ...(input.state !== undefined && { state: input.state }),
  };
};

const serializeAws_json1_1UnpeerVpcRequest = (input: UnpeerVpcRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.resourceName !== undefined && { resourceName: input.resourceName }),
    ...(input.tagKeys !== undefined && { tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateDistributionBundleRequest = (
  input: UpdateDistributionBundleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.bundleId !== undefined && { bundleId: input.bundleId }),
    ...(input.distributionName !== undefined && { distributionName: input.distributionName }),
  };
};

const serializeAws_json1_1UpdateDistributionRequest = (
  input: UpdateDistributionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cacheBehaviorSettings !== undefined && {
      cacheBehaviorSettings: serializeAws_json1_1CacheSettings(input.cacheBehaviorSettings, context),
    }),
    ...(input.cacheBehaviors !== undefined && {
      cacheBehaviors: serializeAws_json1_1CacheBehaviorList(input.cacheBehaviors, context),
    }),
    ...(input.defaultCacheBehavior !== undefined && {
      defaultCacheBehavior: serializeAws_json1_1CacheBehavior(input.defaultCacheBehavior, context),
    }),
    ...(input.distributionName !== undefined && { distributionName: input.distributionName }),
    ...(input.isEnabled !== undefined && { isEnabled: input.isEnabled }),
    ...(input.origin !== undefined && { origin: serializeAws_json1_1InputOrigin(input.origin, context) }),
  };
};

const serializeAws_json1_1UpdateDomainEntryRequest = (
  input: UpdateDomainEntryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.domainEntry !== undefined && {
      domainEntry: serializeAws_json1_1DomainEntry(input.domainEntry, context),
    }),
    ...(input.domainName !== undefined && { domainName: input.domainName }),
  };
};

const serializeAws_json1_1UpdateLoadBalancerAttributeRequest = (
  input: UpdateLoadBalancerAttributeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributeName !== undefined && { attributeName: input.attributeName }),
    ...(input.attributeValue !== undefined && { attributeValue: input.attributeValue }),
    ...(input.loadBalancerName !== undefined && { loadBalancerName: input.loadBalancerName }),
  };
};

const serializeAws_json1_1UpdateRelationalDatabaseParametersRequest = (
  input: UpdateRelationalDatabaseParametersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.parameters !== undefined && {
      parameters: serializeAws_json1_1RelationalDatabaseParameterList(input.parameters, context),
    }),
    ...(input.relationalDatabaseName !== undefined && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

const serializeAws_json1_1UpdateRelationalDatabaseRequest = (
  input: UpdateRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.applyImmediately !== undefined && { applyImmediately: input.applyImmediately }),
    ...(input.caCertificateIdentifier !== undefined && { caCertificateIdentifier: input.caCertificateIdentifier }),
    ...(input.disableBackupRetention !== undefined && { disableBackupRetention: input.disableBackupRetention }),
    ...(input.enableBackupRetention !== undefined && { enableBackupRetention: input.enableBackupRetention }),
    ...(input.masterUserPassword !== undefined && { masterUserPassword: input.masterUserPassword }),
    ...(input.preferredBackupWindow !== undefined && { preferredBackupWindow: input.preferredBackupWindow }),
    ...(input.preferredMaintenanceWindow !== undefined && {
      preferredMaintenanceWindow: input.preferredMaintenanceWindow,
    }),
    ...(input.publiclyAccessible !== undefined && { publiclyAccessible: input.publiclyAccessible }),
    ...(input.relationalDatabaseName !== undefined && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.rotateMasterUserPassword !== undefined && { rotateMasterUserPassword: input.rotateMasterUserPassword }),
  };
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    __type: "AccessDeniedException",
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
    docs: output.docs !== undefined && output.docs !== null ? output.docs : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    tip: output.tip !== undefined && output.tip !== null ? output.tip : undefined,
  } as any;
};

const deserializeAws_json1_1AccountSetupInProgressException = (
  output: any,
  context: __SerdeContext
): AccountSetupInProgressException => {
  return {
    __type: "AccountSetupInProgressException",
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
    docs: output.docs !== undefined && output.docs !== null ? output.docs : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    tip: output.tip !== undefined && output.tip !== null ? output.tip : undefined,
  } as any;
};

const deserializeAws_json1_1AddOn = (output: any, context: __SerdeContext): AddOn => {
  return {
    __type: "AddOn",
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    nextSnapshotTimeOfDay:
      output.nextSnapshotTimeOfDay !== undefined && output.nextSnapshotTimeOfDay !== null
        ? output.nextSnapshotTimeOfDay
        : undefined,
    snapshotTimeOfDay:
      output.snapshotTimeOfDay !== undefined && output.snapshotTimeOfDay !== null
        ? output.snapshotTimeOfDay
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_json1_1AddOnList = (output: any, context: __SerdeContext): AddOn[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1AddOn(entry, context));
};

const deserializeAws_json1_1Alarm = (output: any, context: __SerdeContext): Alarm => {
  return {
    __type: "Alarm",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    comparisonOperator:
      output.comparisonOperator !== undefined && output.comparisonOperator !== null
        ? output.comparisonOperator
        : undefined,
    contactProtocols:
      output.contactProtocols !== undefined && output.contactProtocols !== null
        ? deserializeAws_json1_1ContactProtocolsList(output.contactProtocols, context)
        : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    datapointsToAlarm:
      output.datapointsToAlarm !== undefined && output.datapointsToAlarm !== null
        ? output.datapointsToAlarm
        : undefined,
    evaluationPeriods:
      output.evaluationPeriods !== undefined && output.evaluationPeriods !== null
        ? output.evaluationPeriods
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1ResourceLocation(output.location, context)
        : undefined,
    metricName: output.metricName !== undefined && output.metricName !== null ? output.metricName : undefined,
    monitoredResourceInfo:
      output.monitoredResourceInfo !== undefined && output.monitoredResourceInfo !== null
        ? deserializeAws_json1_1MonitoredResourceInfo(output.monitoredResourceInfo, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    notificationEnabled:
      output.notificationEnabled !== undefined && output.notificationEnabled !== null
        ? output.notificationEnabled
        : undefined,
    notificationTriggers:
      output.notificationTriggers !== undefined && output.notificationTriggers !== null
        ? deserializeAws_json1_1NotificationTriggerList(output.notificationTriggers, context)
        : undefined,
    period: output.period !== undefined && output.period !== null ? output.period : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    state: output.state !== undefined && output.state !== null ? output.state : undefined,
    statistic: output.statistic !== undefined && output.statistic !== null ? output.statistic : undefined,
    supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
    threshold: output.threshold !== undefined && output.threshold !== null ? output.threshold : undefined,
    treatMissingData:
      output.treatMissingData !== undefined && output.treatMissingData !== null ? output.treatMissingData : undefined,
    unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
  } as any;
};

const deserializeAws_json1_1AlarmsList = (output: any, context: __SerdeContext): Alarm[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Alarm(entry, context));
};

const deserializeAws_json1_1AllocateStaticIpResult = (output: any, context: __SerdeContext): AllocateStaticIpResult => {
  return {
    __type: "AllocateStaticIpResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AttachCertificateToDistributionResult = (
  output: any,
  context: __SerdeContext
): AttachCertificateToDistributionResult => {
  return {
    __type: "AttachCertificateToDistributionResult",
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AttachDiskResult = (output: any, context: __SerdeContext): AttachDiskResult => {
  return {
    __type: "AttachDiskResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AttachedDisk = (output: any, context: __SerdeContext): AttachedDisk => {
  return {
    __type: "AttachedDisk",
    path: output.path !== undefined && output.path !== null ? output.path : undefined,
    sizeInGb: output.sizeInGb !== undefined && output.sizeInGb !== null ? output.sizeInGb : undefined,
  } as any;
};

const deserializeAws_json1_1AttachedDiskList = (output: any, context: __SerdeContext): AttachedDisk[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1AttachedDisk(entry, context));
};

const deserializeAws_json1_1AttachInstancesToLoadBalancerResult = (
  output: any,
  context: __SerdeContext
): AttachInstancesToLoadBalancerResult => {
  return {
    __type: "AttachInstancesToLoadBalancerResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AttachLoadBalancerTlsCertificateResult = (
  output: any,
  context: __SerdeContext
): AttachLoadBalancerTlsCertificateResult => {
  return {
    __type: "AttachLoadBalancerTlsCertificateResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AttachStaticIpResult = (output: any, context: __SerdeContext): AttachStaticIpResult => {
  return {
    __type: "AttachStaticIpResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AutoSnapshotDetails = (output: any, context: __SerdeContext): AutoSnapshotDetails => {
  return {
    __type: "AutoSnapshotDetails",
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    date: output.date !== undefined && output.date !== null ? output.date : undefined,
    fromAttachedDisks:
      output.fromAttachedDisks !== undefined && output.fromAttachedDisks !== null
        ? deserializeAws_json1_1AttachedDiskList(output.fromAttachedDisks, context)
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_json1_1AutoSnapshotDetailsList = (output: any, context: __SerdeContext): AutoSnapshotDetails[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1AutoSnapshotDetails(entry, context));
};

const deserializeAws_json1_1AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  return {
    __type: "AvailabilityZone",
    state: output.state !== undefined && output.state !== null ? output.state : undefined,
    zoneName: output.zoneName !== undefined && output.zoneName !== null ? output.zoneName : undefined,
  } as any;
};

const deserializeAws_json1_1AvailabilityZoneList = (output: any, context: __SerdeContext): AvailabilityZone[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1AvailabilityZone(entry, context));
};

const deserializeAws_json1_1Blueprint = (output: any, context: __SerdeContext): Blueprint => {
  return {
    __type: "Blueprint",
    blueprintId: output.blueprintId !== undefined && output.blueprintId !== null ? output.blueprintId : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    group: output.group !== undefined && output.group !== null ? output.group : undefined,
    isActive: output.isActive !== undefined && output.isActive !== null ? output.isActive : undefined,
    licenseUrl: output.licenseUrl !== undefined && output.licenseUrl !== null ? output.licenseUrl : undefined,
    minPower: output.minPower !== undefined && output.minPower !== null ? output.minPower : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
    productUrl: output.productUrl !== undefined && output.productUrl !== null ? output.productUrl : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
    versionCode: output.versionCode !== undefined && output.versionCode !== null ? output.versionCode : undefined,
  } as any;
};

const deserializeAws_json1_1BlueprintList = (output: any, context: __SerdeContext): Blueprint[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Blueprint(entry, context));
};

const deserializeAws_json1_1Bundle = (output: any, context: __SerdeContext): Bundle => {
  return {
    __type: "Bundle",
    bundleId: output.bundleId !== undefined && output.bundleId !== null ? output.bundleId : undefined,
    cpuCount: output.cpuCount !== undefined && output.cpuCount !== null ? output.cpuCount : undefined,
    diskSizeInGb: output.diskSizeInGb !== undefined && output.diskSizeInGb !== null ? output.diskSizeInGb : undefined,
    instanceType: output.instanceType !== undefined && output.instanceType !== null ? output.instanceType : undefined,
    isActive: output.isActive !== undefined && output.isActive !== null ? output.isActive : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    power: output.power !== undefined && output.power !== null ? output.power : undefined,
    price: output.price !== undefined && output.price !== null ? output.price : undefined,
    ramSizeInGb: output.ramSizeInGb !== undefined && output.ramSizeInGb !== null ? output.ramSizeInGb : undefined,
    supportedPlatforms:
      output.supportedPlatforms !== undefined && output.supportedPlatforms !== null
        ? deserializeAws_json1_1InstancePlatformList(output.supportedPlatforms, context)
        : undefined,
    transferPerMonthInGb:
      output.transferPerMonthInGb !== undefined && output.transferPerMonthInGb !== null
        ? output.transferPerMonthInGb
        : undefined,
  } as any;
};

const deserializeAws_json1_1BundleList = (output: any, context: __SerdeContext): Bundle[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Bundle(entry, context));
};

const deserializeAws_json1_1CacheBehavior = (output: any, context: __SerdeContext): CacheBehavior => {
  return {
    __type: "CacheBehavior",
    behavior: output.behavior !== undefined && output.behavior !== null ? output.behavior : undefined,
  } as any;
};

const deserializeAws_json1_1CacheBehaviorList = (output: any, context: __SerdeContext): CacheBehaviorPerPath[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1CacheBehaviorPerPath(entry, context));
};

const deserializeAws_json1_1CacheBehaviorPerPath = (output: any, context: __SerdeContext): CacheBehaviorPerPath => {
  return {
    __type: "CacheBehaviorPerPath",
    behavior: output.behavior !== undefined && output.behavior !== null ? output.behavior : undefined,
    path: output.path !== undefined && output.path !== null ? output.path : undefined,
  } as any;
};

const deserializeAws_json1_1CacheSettings = (output: any, context: __SerdeContext): CacheSettings => {
  return {
    __type: "CacheSettings",
    allowedHTTPMethods:
      output.allowedHTTPMethods !== undefined && output.allowedHTTPMethods !== null
        ? output.allowedHTTPMethods
        : undefined,
    cachedHTTPMethods:
      output.cachedHTTPMethods !== undefined && output.cachedHTTPMethods !== null
        ? output.cachedHTTPMethods
        : undefined,
    defaultTTL: output.defaultTTL !== undefined && output.defaultTTL !== null ? output.defaultTTL : undefined,
    forwardedCookies:
      output.forwardedCookies !== undefined && output.forwardedCookies !== null
        ? deserializeAws_json1_1CookieObject(output.forwardedCookies, context)
        : undefined,
    forwardedHeaders:
      output.forwardedHeaders !== undefined && output.forwardedHeaders !== null
        ? deserializeAws_json1_1HeaderObject(output.forwardedHeaders, context)
        : undefined,
    forwardedQueryStrings:
      output.forwardedQueryStrings !== undefined && output.forwardedQueryStrings !== null
        ? deserializeAws_json1_1QueryStringObject(output.forwardedQueryStrings, context)
        : undefined,
    maximumTTL: output.maximumTTL !== undefined && output.maximumTTL !== null ? output.maximumTTL : undefined,
    minimumTTL: output.minimumTTL !== undefined && output.minimumTTL !== null ? output.minimumTTL : undefined,
  } as any;
};

const deserializeAws_json1_1Certificate = (output: any, context: __SerdeContext): Certificate => {
  return {
    __type: "Certificate",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    domainValidationRecords:
      output.domainValidationRecords !== undefined && output.domainValidationRecords !== null
        ? deserializeAws_json1_1DomainValidationRecordList(output.domainValidationRecords, context)
        : undefined,
    eligibleToRenew:
      output.eligibleToRenew !== undefined && output.eligibleToRenew !== null ? output.eligibleToRenew : undefined,
    inUseResourceCount:
      output.inUseResourceCount !== undefined && output.inUseResourceCount !== null
        ? output.inUseResourceCount
        : undefined,
    issuedAt:
      output.issuedAt !== undefined && output.issuedAt !== null
        ? new Date(Math.round(output.issuedAt * 1000))
        : undefined,
    issuerCA: output.issuerCA !== undefined && output.issuerCA !== null ? output.issuerCA : undefined,
    keyAlgorithm: output.keyAlgorithm !== undefined && output.keyAlgorithm !== null ? output.keyAlgorithm : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    notAfter:
      output.notAfter !== undefined && output.notAfter !== null
        ? new Date(Math.round(output.notAfter * 1000))
        : undefined,
    notBefore:
      output.notBefore !== undefined && output.notBefore !== null
        ? new Date(Math.round(output.notBefore * 1000))
        : undefined,
    renewalSummary:
      output.renewalSummary !== undefined && output.renewalSummary !== null
        ? deserializeAws_json1_1RenewalSummary(output.renewalSummary, context)
        : undefined,
    requestFailureReason:
      output.requestFailureReason !== undefined && output.requestFailureReason !== null
        ? output.requestFailureReason
        : undefined,
    revocationReason:
      output.revocationReason !== undefined && output.revocationReason !== null ? output.revocationReason : undefined,
    revokedAt:
      output.revokedAt !== undefined && output.revokedAt !== null
        ? new Date(Math.round(output.revokedAt * 1000))
        : undefined,
    serialNumber: output.serialNumber !== undefined && output.serialNumber !== null ? output.serialNumber : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    subjectAlternativeNames:
      output.subjectAlternativeNames !== undefined && output.subjectAlternativeNames !== null
        ? deserializeAws_json1_1SubjectAlternativeNameList(output.subjectAlternativeNames, context)
        : undefined,
    supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CertificateSummary = (output: any, context: __SerdeContext): CertificateSummary => {
  return {
    __type: "CertificateSummary",
    certificateArn:
      output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
    certificateDetail:
      output.certificateDetail !== undefined && output.certificateDetail !== null
        ? deserializeAws_json1_1Certificate(output.certificateDetail, context)
        : undefined,
    certificateName:
      output.certificateName !== undefined && output.certificateName !== null ? output.certificateName : undefined,
    domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CertificateSummaryList = (output: any, context: __SerdeContext): CertificateSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1CertificateSummary(entry, context));
};

const deserializeAws_json1_1CloseInstancePublicPortsResult = (
  output: any,
  context: __SerdeContext
): CloseInstancePublicPortsResult => {
  return {
    __type: "CloseInstancePublicPortsResult",
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CloudFormationStackRecord = (
  output: any,
  context: __SerdeContext
): CloudFormationStackRecord => {
  return {
    __type: "CloudFormationStackRecord",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    destinationInfo:
      output.destinationInfo !== undefined && output.destinationInfo !== null
        ? deserializeAws_json1_1DestinationInfo(output.destinationInfo, context)
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1ResourceLocation(output.location, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    sourceInfo:
      output.sourceInfo !== undefined && output.sourceInfo !== null
        ? deserializeAws_json1_1CloudFormationStackRecordSourceInfoList(output.sourceInfo, context)
        : undefined,
    state: output.state !== undefined && output.state !== null ? output.state : undefined,
  } as any;
};

const deserializeAws_json1_1CloudFormationStackRecordList = (
  output: any,
  context: __SerdeContext
): CloudFormationStackRecord[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1CloudFormationStackRecord(entry, context));
};

const deserializeAws_json1_1CloudFormationStackRecordSourceInfo = (
  output: any,
  context: __SerdeContext
): CloudFormationStackRecordSourceInfo => {
  return {
    __type: "CloudFormationStackRecordSourceInfo",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
  } as any;
};

const deserializeAws_json1_1CloudFormationStackRecordSourceInfoList = (
  output: any,
  context: __SerdeContext
): CloudFormationStackRecordSourceInfo[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1CloudFormationStackRecordSourceInfo(entry, context));
};

const deserializeAws_json1_1ContactMethod = (output: any, context: __SerdeContext): ContactMethod => {
  return {
    __type: "ContactMethod",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    contactEndpoint:
      output.contactEndpoint !== undefined && output.contactEndpoint !== null ? output.contactEndpoint : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1ResourceLocation(output.location, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
  } as any;
};

const deserializeAws_json1_1ContactMethodsList = (output: any, context: __SerdeContext): ContactMethod[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ContactMethod(entry, context));
};

const deserializeAws_json1_1ContactProtocolsList = (
  output: any,
  context: __SerdeContext
): (ContactProtocol | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1CookieObject = (output: any, context: __SerdeContext): CookieObject => {
  return {
    __type: "CookieObject",
    cookiesAllowList:
      output.cookiesAllowList !== undefined && output.cookiesAllowList !== null
        ? deserializeAws_json1_1StringList(output.cookiesAllowList, context)
        : undefined,
    option: output.option !== undefined && output.option !== null ? output.option : undefined,
  } as any;
};

const deserializeAws_json1_1CopySnapshotResult = (output: any, context: __SerdeContext): CopySnapshotResult => {
  return {
    __type: "CopySnapshotResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateCertificateResult = (
  output: any,
  context: __SerdeContext
): CreateCertificateResult => {
  return {
    __type: "CreateCertificateResult",
    certificate:
      output.certificate !== undefined && output.certificate !== null
        ? deserializeAws_json1_1CertificateSummary(output.certificate, context)
        : undefined,
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateCloudFormationStackResult = (
  output: any,
  context: __SerdeContext
): CreateCloudFormationStackResult => {
  return {
    __type: "CreateCloudFormationStackResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateContactMethodResult = (
  output: any,
  context: __SerdeContext
): CreateContactMethodResult => {
  return {
    __type: "CreateContactMethodResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDiskFromSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateDiskFromSnapshotResult => {
  return {
    __type: "CreateDiskFromSnapshotResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDiskResult = (output: any, context: __SerdeContext): CreateDiskResult => {
  return {
    __type: "CreateDiskResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDiskSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateDiskSnapshotResult => {
  return {
    __type: "CreateDiskSnapshotResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDistributionResult = (
  output: any,
  context: __SerdeContext
): CreateDistributionResult => {
  return {
    __type: "CreateDistributionResult",
    distribution:
      output.distribution !== undefined && output.distribution !== null
        ? deserializeAws_json1_1LightsailDistribution(output.distribution, context)
        : undefined,
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDomainEntryResult = (
  output: any,
  context: __SerdeContext
): CreateDomainEntryResult => {
  return {
    __type: "CreateDomainEntryResult",
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDomainResult = (output: any, context: __SerdeContext): CreateDomainResult => {
  return {
    __type: "CreateDomainResult",
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateInstancesFromSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateInstancesFromSnapshotResult => {
  return {
    __type: "CreateInstancesFromSnapshotResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateInstanceSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateInstanceSnapshotResult => {
  return {
    __type: "CreateInstanceSnapshotResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateInstancesResult = (output: any, context: __SerdeContext): CreateInstancesResult => {
  return {
    __type: "CreateInstancesResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateKeyPairResult = (output: any, context: __SerdeContext): CreateKeyPairResult => {
  return {
    __type: "CreateKeyPairResult",
    keyPair:
      output.keyPair !== undefined && output.keyPair !== null
        ? deserializeAws_json1_1KeyPair(output.keyPair, context)
        : undefined,
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
    privateKeyBase64:
      output.privateKeyBase64 !== undefined && output.privateKeyBase64 !== null ? output.privateKeyBase64 : undefined,
    publicKeyBase64:
      output.publicKeyBase64 !== undefined && output.publicKeyBase64 !== null ? output.publicKeyBase64 : undefined,
  } as any;
};

const deserializeAws_json1_1CreateLoadBalancerResult = (
  output: any,
  context: __SerdeContext
): CreateLoadBalancerResult => {
  return {
    __type: "CreateLoadBalancerResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateLoadBalancerTlsCertificateResult = (
  output: any,
  context: __SerdeContext
): CreateLoadBalancerTlsCertificateResult => {
  return {
    __type: "CreateLoadBalancerTlsCertificateResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateRelationalDatabaseFromSnapshotResult => {
  return {
    __type: "CreateRelationalDatabaseFromSnapshotResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): CreateRelationalDatabaseResult => {
  return {
    __type: "CreateRelationalDatabaseResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateRelationalDatabaseSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateRelationalDatabaseSnapshotResult => {
  return {
    __type: "CreateRelationalDatabaseSnapshotResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteAlarmResult = (output: any, context: __SerdeContext): DeleteAlarmResult => {
  return {
    __type: "DeleteAlarmResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteAutoSnapshotResult = (
  output: any,
  context: __SerdeContext
): DeleteAutoSnapshotResult => {
  return {
    __type: "DeleteAutoSnapshotResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteCertificateResult = (
  output: any,
  context: __SerdeContext
): DeleteCertificateResult => {
  return {
    __type: "DeleteCertificateResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteContactMethodResult = (
  output: any,
  context: __SerdeContext
): DeleteContactMethodResult => {
  return {
    __type: "DeleteContactMethodResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteDiskResult = (output: any, context: __SerdeContext): DeleteDiskResult => {
  return {
    __type: "DeleteDiskResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteDiskSnapshotResult = (
  output: any,
  context: __SerdeContext
): DeleteDiskSnapshotResult => {
  return {
    __type: "DeleteDiskSnapshotResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteDistributionResult = (
  output: any,
  context: __SerdeContext
): DeleteDistributionResult => {
  return {
    __type: "DeleteDistributionResult",
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteDomainEntryResult = (
  output: any,
  context: __SerdeContext
): DeleteDomainEntryResult => {
  return {
    __type: "DeleteDomainEntryResult",
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteDomainResult = (output: any, context: __SerdeContext): DeleteDomainResult => {
  return {
    __type: "DeleteDomainResult",
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteInstanceResult = (output: any, context: __SerdeContext): DeleteInstanceResult => {
  return {
    __type: "DeleteInstanceResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteInstanceSnapshotResult = (
  output: any,
  context: __SerdeContext
): DeleteInstanceSnapshotResult => {
  return {
    __type: "DeleteInstanceSnapshotResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteKeyPairResult = (output: any, context: __SerdeContext): DeleteKeyPairResult => {
  return {
    __type: "DeleteKeyPairResult",
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteKnownHostKeysResult = (
  output: any,
  context: __SerdeContext
): DeleteKnownHostKeysResult => {
  return {
    __type: "DeleteKnownHostKeysResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteLoadBalancerResult = (
  output: any,
  context: __SerdeContext
): DeleteLoadBalancerResult => {
  return {
    __type: "DeleteLoadBalancerResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteLoadBalancerTlsCertificateResult = (
  output: any,
  context: __SerdeContext
): DeleteLoadBalancerTlsCertificateResult => {
  return {
    __type: "DeleteLoadBalancerTlsCertificateResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): DeleteRelationalDatabaseResult => {
  return {
    __type: "DeleteRelationalDatabaseResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteRelationalDatabaseSnapshotResult = (
  output: any,
  context: __SerdeContext
): DeleteRelationalDatabaseSnapshotResult => {
  return {
    __type: "DeleteRelationalDatabaseSnapshotResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DestinationInfo = (output: any, context: __SerdeContext): DestinationInfo => {
  return {
    __type: "DestinationInfo",
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    service: output.service !== undefined && output.service !== null ? output.service : undefined,
  } as any;
};

const deserializeAws_json1_1DetachCertificateFromDistributionResult = (
  output: any,
  context: __SerdeContext
): DetachCertificateFromDistributionResult => {
  return {
    __type: "DetachCertificateFromDistributionResult",
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetachDiskResult = (output: any, context: __SerdeContext): DetachDiskResult => {
  return {
    __type: "DetachDiskResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetachInstancesFromLoadBalancerResult = (
  output: any,
  context: __SerdeContext
): DetachInstancesFromLoadBalancerResult => {
  return {
    __type: "DetachInstancesFromLoadBalancerResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetachStaticIpResult = (output: any, context: __SerdeContext): DetachStaticIpResult => {
  return {
    __type: "DetachStaticIpResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DisableAddOnResult = (output: any, context: __SerdeContext): DisableAddOnResult => {
  return {
    __type: "DisableAddOnResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Disk = (output: any, context: __SerdeContext): Disk => {
  return {
    __type: "Disk",
    addOns:
      output.addOns !== undefined && output.addOns !== null
        ? deserializeAws_json1_1AddOnList(output.addOns, context)
        : undefined,
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    attachedTo: output.attachedTo !== undefined && output.attachedTo !== null ? output.attachedTo : undefined,
    attachmentState:
      output.attachmentState !== undefined && output.attachmentState !== null ? output.attachmentState : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    gbInUse: output.gbInUse !== undefined && output.gbInUse !== null ? output.gbInUse : undefined,
    iops: output.iops !== undefined && output.iops !== null ? output.iops : undefined,
    isAttached: output.isAttached !== undefined && output.isAttached !== null ? output.isAttached : undefined,
    isSystemDisk: output.isSystemDisk !== undefined && output.isSystemDisk !== null ? output.isSystemDisk : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1ResourceLocation(output.location, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    path: output.path !== undefined && output.path !== null ? output.path : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    sizeInGb: output.sizeInGb !== undefined && output.sizeInGb !== null ? output.sizeInGb : undefined,
    state: output.state !== undefined && output.state !== null ? output.state : undefined,
    supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DiskInfo = (output: any, context: __SerdeContext): DiskInfo => {
  return {
    __type: "DiskInfo",
    isSystemDisk: output.isSystemDisk !== undefined && output.isSystemDisk !== null ? output.isSystemDisk : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    path: output.path !== undefined && output.path !== null ? output.path : undefined,
    sizeInGb: output.sizeInGb !== undefined && output.sizeInGb !== null ? output.sizeInGb : undefined,
  } as any;
};

const deserializeAws_json1_1DiskInfoList = (output: any, context: __SerdeContext): DiskInfo[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DiskInfo(entry, context));
};

const deserializeAws_json1_1DiskList = (output: any, context: __SerdeContext): Disk[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Disk(entry, context));
};

const deserializeAws_json1_1DiskSnapshot = (output: any, context: __SerdeContext): DiskSnapshot => {
  return {
    __type: "DiskSnapshot",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    fromDiskArn: output.fromDiskArn !== undefined && output.fromDiskArn !== null ? output.fromDiskArn : undefined,
    fromDiskName: output.fromDiskName !== undefined && output.fromDiskName !== null ? output.fromDiskName : undefined,
    fromInstanceArn:
      output.fromInstanceArn !== undefined && output.fromInstanceArn !== null ? output.fromInstanceArn : undefined,
    fromInstanceName:
      output.fromInstanceName !== undefined && output.fromInstanceName !== null ? output.fromInstanceName : undefined,
    isFromAutoSnapshot:
      output.isFromAutoSnapshot !== undefined && output.isFromAutoSnapshot !== null
        ? output.isFromAutoSnapshot
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1ResourceLocation(output.location, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    progress: output.progress !== undefined && output.progress !== null ? output.progress : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    sizeInGb: output.sizeInGb !== undefined && output.sizeInGb !== null ? output.sizeInGb : undefined,
    state: output.state !== undefined && output.state !== null ? output.state : undefined,
    supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DiskSnapshotInfo = (output: any, context: __SerdeContext): DiskSnapshotInfo => {
  return {
    __type: "DiskSnapshotInfo",
    sizeInGb: output.sizeInGb !== undefined && output.sizeInGb !== null ? output.sizeInGb : undefined,
  } as any;
};

const deserializeAws_json1_1DiskSnapshotList = (output: any, context: __SerdeContext): DiskSnapshot[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DiskSnapshot(entry, context));
};

const deserializeAws_json1_1DistributionBundle = (output: any, context: __SerdeContext): DistributionBundle => {
  return {
    __type: "DistributionBundle",
    bundleId: output.bundleId !== undefined && output.bundleId !== null ? output.bundleId : undefined,
    isActive: output.isActive !== undefined && output.isActive !== null ? output.isActive : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    price: output.price !== undefined && output.price !== null ? output.price : undefined,
    transferPerMonthInGb:
      output.transferPerMonthInGb !== undefined && output.transferPerMonthInGb !== null
        ? output.transferPerMonthInGb
        : undefined,
  } as any;
};

const deserializeAws_json1_1DistributionBundleList = (output: any, context: __SerdeContext): DistributionBundle[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DistributionBundle(entry, context));
};

const deserializeAws_json1_1DistributionList = (output: any, context: __SerdeContext): LightsailDistribution[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1LightsailDistribution(entry, context));
};

const deserializeAws_json1_1Domain = (output: any, context: __SerdeContext): Domain => {
  return {
    __type: "Domain",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    domainEntries:
      output.domainEntries !== undefined && output.domainEntries !== null
        ? deserializeAws_json1_1DomainEntryList(output.domainEntries, context)
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1ResourceLocation(output.location, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DomainEntry = (output: any, context: __SerdeContext): DomainEntry => {
  return {
    __type: "DomainEntry",
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    isAlias: output.isAlias !== undefined && output.isAlias !== null ? output.isAlias : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    options:
      output.options !== undefined && output.options !== null
        ? deserializeAws_json1_1DomainEntryOptions(output.options, context)
        : undefined,
    target: output.target !== undefined && output.target !== null ? output.target : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_json1_1DomainEntryList = (output: any, context: __SerdeContext): DomainEntry[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DomainEntry(entry, context));
};

const deserializeAws_json1_1DomainEntryOptions = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const deserializeAws_json1_1DomainList = (output: any, context: __SerdeContext): Domain[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Domain(entry, context));
};

const deserializeAws_json1_1DomainValidationRecord = (output: any, context: __SerdeContext): DomainValidationRecord => {
  return {
    __type: "DomainValidationRecord",
    domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    resourceRecord:
      output.resourceRecord !== undefined && output.resourceRecord !== null
        ? deserializeAws_json1_1ResourceRecord(output.resourceRecord, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DomainValidationRecordList = (
  output: any,
  context: __SerdeContext
): DomainValidationRecord[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DomainValidationRecord(entry, context));
};

const deserializeAws_json1_1DownloadDefaultKeyPairResult = (
  output: any,
  context: __SerdeContext
): DownloadDefaultKeyPairResult => {
  return {
    __type: "DownloadDefaultKeyPairResult",
    privateKeyBase64:
      output.privateKeyBase64 !== undefined && output.privateKeyBase64 !== null ? output.privateKeyBase64 : undefined,
    publicKeyBase64:
      output.publicKeyBase64 !== undefined && output.publicKeyBase64 !== null ? output.publicKeyBase64 : undefined,
  } as any;
};

const deserializeAws_json1_1EnableAddOnResult = (output: any, context: __SerdeContext): EnableAddOnResult => {
  return {
    __type: "EnableAddOnResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ExportSnapshotRecord = (output: any, context: __SerdeContext): ExportSnapshotRecord => {
  return {
    __type: "ExportSnapshotRecord",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    destinationInfo:
      output.destinationInfo !== undefined && output.destinationInfo !== null
        ? deserializeAws_json1_1DestinationInfo(output.destinationInfo, context)
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1ResourceLocation(output.location, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    sourceInfo:
      output.sourceInfo !== undefined && output.sourceInfo !== null
        ? deserializeAws_json1_1ExportSnapshotRecordSourceInfo(output.sourceInfo, context)
        : undefined,
    state: output.state !== undefined && output.state !== null ? output.state : undefined,
  } as any;
};

const deserializeAws_json1_1ExportSnapshotRecordList = (
  output: any,
  context: __SerdeContext
): ExportSnapshotRecord[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ExportSnapshotRecord(entry, context));
};

const deserializeAws_json1_1ExportSnapshotRecordSourceInfo = (
  output: any,
  context: __SerdeContext
): ExportSnapshotRecordSourceInfo => {
  return {
    __type: "ExportSnapshotRecordSourceInfo",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    diskSnapshotInfo:
      output.diskSnapshotInfo !== undefined && output.diskSnapshotInfo !== null
        ? deserializeAws_json1_1DiskSnapshotInfo(output.diskSnapshotInfo, context)
        : undefined,
    fromResourceArn:
      output.fromResourceArn !== undefined && output.fromResourceArn !== null ? output.fromResourceArn : undefined,
    fromResourceName:
      output.fromResourceName !== undefined && output.fromResourceName !== null ? output.fromResourceName : undefined,
    instanceSnapshotInfo:
      output.instanceSnapshotInfo !== undefined && output.instanceSnapshotInfo !== null
        ? deserializeAws_json1_1InstanceSnapshotInfo(output.instanceSnapshotInfo, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
  } as any;
};

const deserializeAws_json1_1ExportSnapshotResult = (output: any, context: __SerdeContext): ExportSnapshotResult => {
  return {
    __type: "ExportSnapshotResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetActiveNamesResult = (output: any, context: __SerdeContext): GetActiveNamesResult => {
  return {
    __type: "GetActiveNamesResult",
    activeNames:
      output.activeNames !== undefined && output.activeNames !== null
        ? deserializeAws_json1_1StringList(output.activeNames, context)
        : undefined,
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetAlarmsResult = (output: any, context: __SerdeContext): GetAlarmsResult => {
  return {
    __type: "GetAlarmsResult",
    alarms:
      output.alarms !== undefined && output.alarms !== null
        ? deserializeAws_json1_1AlarmsList(output.alarms, context)
        : undefined,
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetAutoSnapshotsResult = (output: any, context: __SerdeContext): GetAutoSnapshotsResult => {
  return {
    __type: "GetAutoSnapshotsResult",
    autoSnapshots:
      output.autoSnapshots !== undefined && output.autoSnapshots !== null
        ? deserializeAws_json1_1AutoSnapshotDetailsList(output.autoSnapshots, context)
        : undefined,
    resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
  } as any;
};

const deserializeAws_json1_1GetBlueprintsResult = (output: any, context: __SerdeContext): GetBlueprintsResult => {
  return {
    __type: "GetBlueprintsResult",
    blueprints:
      output.blueprints !== undefined && output.blueprints !== null
        ? deserializeAws_json1_1BlueprintList(output.blueprints, context)
        : undefined,
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetBundlesResult = (output: any, context: __SerdeContext): GetBundlesResult => {
  return {
    __type: "GetBundlesResult",
    bundles:
      output.bundles !== undefined && output.bundles !== null
        ? deserializeAws_json1_1BundleList(output.bundles, context)
        : undefined,
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetCertificatesResult = (output: any, context: __SerdeContext): GetCertificatesResult => {
  return {
    __type: "GetCertificatesResult",
    certificates:
      output.certificates !== undefined && output.certificates !== null
        ? deserializeAws_json1_1CertificateSummaryList(output.certificates, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetCloudFormationStackRecordsResult = (
  output: any,
  context: __SerdeContext
): GetCloudFormationStackRecordsResult => {
  return {
    __type: "GetCloudFormationStackRecordsResult",
    cloudFormationStackRecords:
      output.cloudFormationStackRecords !== undefined && output.cloudFormationStackRecords !== null
        ? deserializeAws_json1_1CloudFormationStackRecordList(output.cloudFormationStackRecords, context)
        : undefined,
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetContactMethodsResult = (
  output: any,
  context: __SerdeContext
): GetContactMethodsResult => {
  return {
    __type: "GetContactMethodsResult",
    contactMethods:
      output.contactMethods !== undefined && output.contactMethods !== null
        ? deserializeAws_json1_1ContactMethodsList(output.contactMethods, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDiskResult = (output: any, context: __SerdeContext): GetDiskResult => {
  return {
    __type: "GetDiskResult",
    disk:
      output.disk !== undefined && output.disk !== null ? deserializeAws_json1_1Disk(output.disk, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetDiskSnapshotResult = (output: any, context: __SerdeContext): GetDiskSnapshotResult => {
  return {
    __type: "GetDiskSnapshotResult",
    diskSnapshot:
      output.diskSnapshot !== undefined && output.diskSnapshot !== null
        ? deserializeAws_json1_1DiskSnapshot(output.diskSnapshot, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDiskSnapshotsResult = (output: any, context: __SerdeContext): GetDiskSnapshotsResult => {
  return {
    __type: "GetDiskSnapshotsResult",
    diskSnapshots:
      output.diskSnapshots !== undefined && output.diskSnapshots !== null
        ? deserializeAws_json1_1DiskSnapshotList(output.diskSnapshots, context)
        : undefined,
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetDisksResult = (output: any, context: __SerdeContext): GetDisksResult => {
  return {
    __type: "GetDisksResult",
    disks:
      output.disks !== undefined && output.disks !== null
        ? deserializeAws_json1_1DiskList(output.disks, context)
        : undefined,
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetDistributionBundlesResult = (
  output: any,
  context: __SerdeContext
): GetDistributionBundlesResult => {
  return {
    __type: "GetDistributionBundlesResult",
    bundles:
      output.bundles !== undefined && output.bundles !== null
        ? deserializeAws_json1_1DistributionBundleList(output.bundles, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDistributionLatestCacheResetResult = (
  output: any,
  context: __SerdeContext
): GetDistributionLatestCacheResetResult => {
  return {
    __type: "GetDistributionLatestCacheResetResult",
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? new Date(Math.round(output.createTime * 1000))
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_json1_1GetDistributionMetricDataResult = (
  output: any,
  context: __SerdeContext
): GetDistributionMetricDataResult => {
  return {
    __type: "GetDistributionMetricDataResult",
    metricData:
      output.metricData !== undefined && output.metricData !== null
        ? deserializeAws_json1_1MetricDatapointList(output.metricData, context)
        : undefined,
    metricName: output.metricName !== undefined && output.metricName !== null ? output.metricName : undefined,
  } as any;
};

const deserializeAws_json1_1GetDistributionsResult = (output: any, context: __SerdeContext): GetDistributionsResult => {
  return {
    __type: "GetDistributionsResult",
    distributions:
      output.distributions !== undefined && output.distributions !== null
        ? deserializeAws_json1_1DistributionList(output.distributions, context)
        : undefined,
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetDomainResult = (output: any, context: __SerdeContext): GetDomainResult => {
  return {
    __type: "GetDomainResult",
    domain:
      output.domain !== undefined && output.domain !== null
        ? deserializeAws_json1_1Domain(output.domain, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDomainsResult = (output: any, context: __SerdeContext): GetDomainsResult => {
  return {
    __type: "GetDomainsResult",
    domains:
      output.domains !== undefined && output.domains !== null
        ? deserializeAws_json1_1DomainList(output.domains, context)
        : undefined,
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetExportSnapshotRecordsResult = (
  output: any,
  context: __SerdeContext
): GetExportSnapshotRecordsResult => {
  return {
    __type: "GetExportSnapshotRecordsResult",
    exportSnapshotRecords:
      output.exportSnapshotRecords !== undefined && output.exportSnapshotRecords !== null
        ? deserializeAws_json1_1ExportSnapshotRecordList(output.exportSnapshotRecords, context)
        : undefined,
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetInstanceAccessDetailsResult = (
  output: any,
  context: __SerdeContext
): GetInstanceAccessDetailsResult => {
  return {
    __type: "GetInstanceAccessDetailsResult",
    accessDetails:
      output.accessDetails !== undefined && output.accessDetails !== null
        ? deserializeAws_json1_1InstanceAccessDetails(output.accessDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetInstanceMetricDataResult = (
  output: any,
  context: __SerdeContext
): GetInstanceMetricDataResult => {
  return {
    __type: "GetInstanceMetricDataResult",
    metricData:
      output.metricData !== undefined && output.metricData !== null
        ? deserializeAws_json1_1MetricDatapointList(output.metricData, context)
        : undefined,
    metricName: output.metricName !== undefined && output.metricName !== null ? output.metricName : undefined,
  } as any;
};

const deserializeAws_json1_1GetInstancePortStatesResult = (
  output: any,
  context: __SerdeContext
): GetInstancePortStatesResult => {
  return {
    __type: "GetInstancePortStatesResult",
    portStates:
      output.portStates !== undefined && output.portStates !== null
        ? deserializeAws_json1_1InstancePortStateList(output.portStates, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetInstanceResult = (output: any, context: __SerdeContext): GetInstanceResult => {
  return {
    __type: "GetInstanceResult",
    instance:
      output.instance !== undefined && output.instance !== null
        ? deserializeAws_json1_1Instance(output.instance, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetInstanceSnapshotResult = (
  output: any,
  context: __SerdeContext
): GetInstanceSnapshotResult => {
  return {
    __type: "GetInstanceSnapshotResult",
    instanceSnapshot:
      output.instanceSnapshot !== undefined && output.instanceSnapshot !== null
        ? deserializeAws_json1_1InstanceSnapshot(output.instanceSnapshot, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetInstanceSnapshotsResult = (
  output: any,
  context: __SerdeContext
): GetInstanceSnapshotsResult => {
  return {
    __type: "GetInstanceSnapshotsResult",
    instanceSnapshots:
      output.instanceSnapshots !== undefined && output.instanceSnapshots !== null
        ? deserializeAws_json1_1InstanceSnapshotList(output.instanceSnapshots, context)
        : undefined,
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetInstancesResult = (output: any, context: __SerdeContext): GetInstancesResult => {
  return {
    __type: "GetInstancesResult",
    instances:
      output.instances !== undefined && output.instances !== null
        ? deserializeAws_json1_1InstanceList(output.instances, context)
        : undefined,
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetInstanceStateResult = (output: any, context: __SerdeContext): GetInstanceStateResult => {
  return {
    __type: "GetInstanceStateResult",
    state:
      output.state !== undefined && output.state !== null
        ? deserializeAws_json1_1InstanceState(output.state, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetKeyPairResult = (output: any, context: __SerdeContext): GetKeyPairResult => {
  return {
    __type: "GetKeyPairResult",
    keyPair:
      output.keyPair !== undefined && output.keyPair !== null
        ? deserializeAws_json1_1KeyPair(output.keyPair, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetKeyPairsResult = (output: any, context: __SerdeContext): GetKeyPairsResult => {
  return {
    __type: "GetKeyPairsResult",
    keyPairs:
      output.keyPairs !== undefined && output.keyPairs !== null
        ? deserializeAws_json1_1KeyPairList(output.keyPairs, context)
        : undefined,
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetLoadBalancerMetricDataResult = (
  output: any,
  context: __SerdeContext
): GetLoadBalancerMetricDataResult => {
  return {
    __type: "GetLoadBalancerMetricDataResult",
    metricData:
      output.metricData !== undefined && output.metricData !== null
        ? deserializeAws_json1_1MetricDatapointList(output.metricData, context)
        : undefined,
    metricName: output.metricName !== undefined && output.metricName !== null ? output.metricName : undefined,
  } as any;
};

const deserializeAws_json1_1GetLoadBalancerResult = (output: any, context: __SerdeContext): GetLoadBalancerResult => {
  return {
    __type: "GetLoadBalancerResult",
    loadBalancer:
      output.loadBalancer !== undefined && output.loadBalancer !== null
        ? deserializeAws_json1_1LoadBalancer(output.loadBalancer, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetLoadBalancersResult = (output: any, context: __SerdeContext): GetLoadBalancersResult => {
  return {
    __type: "GetLoadBalancersResult",
    loadBalancers:
      output.loadBalancers !== undefined && output.loadBalancers !== null
        ? deserializeAws_json1_1LoadBalancerList(output.loadBalancers, context)
        : undefined,
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetLoadBalancerTlsCertificatesResult = (
  output: any,
  context: __SerdeContext
): GetLoadBalancerTlsCertificatesResult => {
  return {
    __type: "GetLoadBalancerTlsCertificatesResult",
    tlsCertificates:
      output.tlsCertificates !== undefined && output.tlsCertificates !== null
        ? deserializeAws_json1_1LoadBalancerTlsCertificateList(output.tlsCertificates, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetOperationResult = (output: any, context: __SerdeContext): GetOperationResult => {
  return {
    __type: "GetOperationResult",
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetOperationsForResourceResult = (
  output: any,
  context: __SerdeContext
): GetOperationsForResourceResult => {
  return {
    __type: "GetOperationsForResourceResult",
    nextPageCount:
      output.nextPageCount !== undefined && output.nextPageCount !== null ? output.nextPageCount : undefined,
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetOperationsResult = (output: any, context: __SerdeContext): GetOperationsResult => {
  return {
    __type: "GetOperationsResult",
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRegionsResult = (output: any, context: __SerdeContext): GetRegionsResult => {
  return {
    __type: "GetRegionsResult",
    regions:
      output.regions !== undefined && output.regions !== null
        ? deserializeAws_json1_1RegionList(output.regions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseBlueprintsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseBlueprintsResult => {
  return {
    __type: "GetRelationalDatabaseBlueprintsResult",
    blueprints:
      output.blueprints !== undefined && output.blueprints !== null
        ? deserializeAws_json1_1RelationalDatabaseBlueprintList(output.blueprints, context)
        : undefined,
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseBundlesResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseBundlesResult => {
  return {
    __type: "GetRelationalDatabaseBundlesResult",
    bundles:
      output.bundles !== undefined && output.bundles !== null
        ? deserializeAws_json1_1RelationalDatabaseBundleList(output.bundles, context)
        : undefined,
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseEventsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseEventsResult => {
  return {
    __type: "GetRelationalDatabaseEventsResult",
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    relationalDatabaseEvents:
      output.relationalDatabaseEvents !== undefined && output.relationalDatabaseEvents !== null
        ? deserializeAws_json1_1RelationalDatabaseEventList(output.relationalDatabaseEvents, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseLogEventsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseLogEventsResult => {
  return {
    __type: "GetRelationalDatabaseLogEventsResult",
    nextBackwardToken:
      output.nextBackwardToken !== undefined && output.nextBackwardToken !== null
        ? output.nextBackwardToken
        : undefined,
    nextForwardToken:
      output.nextForwardToken !== undefined && output.nextForwardToken !== null ? output.nextForwardToken : undefined,
    resourceLogEvents:
      output.resourceLogEvents !== undefined && output.resourceLogEvents !== null
        ? deserializeAws_json1_1LogEventList(output.resourceLogEvents, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseLogStreamsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseLogStreamsResult => {
  return {
    __type: "GetRelationalDatabaseLogStreamsResult",
    logStreams:
      output.logStreams !== undefined && output.logStreams !== null
        ? deserializeAws_json1_1StringList(output.logStreams, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseMasterUserPasswordResult => {
  return {
    __type: "GetRelationalDatabaseMasterUserPasswordResult",
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    masterUserPassword:
      output.masterUserPassword !== undefined && output.masterUserPassword !== null
        ? output.masterUserPassword
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseMetricDataResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseMetricDataResult => {
  return {
    __type: "GetRelationalDatabaseMetricDataResult",
    metricData:
      output.metricData !== undefined && output.metricData !== null
        ? deserializeAws_json1_1MetricDatapointList(output.metricData, context)
        : undefined,
    metricName: output.metricName !== undefined && output.metricName !== null ? output.metricName : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseParametersResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseParametersResult => {
  return {
    __type: "GetRelationalDatabaseParametersResult",
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    parameters:
      output.parameters !== undefined && output.parameters !== null
        ? deserializeAws_json1_1RelationalDatabaseParameterList(output.parameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseResult => {
  return {
    __type: "GetRelationalDatabaseResult",
    relationalDatabase:
      output.relationalDatabase !== undefined && output.relationalDatabase !== null
        ? deserializeAws_json1_1RelationalDatabase(output.relationalDatabase, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseSnapshotResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseSnapshotResult => {
  return {
    __type: "GetRelationalDatabaseSnapshotResult",
    relationalDatabaseSnapshot:
      output.relationalDatabaseSnapshot !== undefined && output.relationalDatabaseSnapshot !== null
        ? deserializeAws_json1_1RelationalDatabaseSnapshot(output.relationalDatabaseSnapshot, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseSnapshotsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseSnapshotsResult => {
  return {
    __type: "GetRelationalDatabaseSnapshotsResult",
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    relationalDatabaseSnapshots:
      output.relationalDatabaseSnapshots !== undefined && output.relationalDatabaseSnapshots !== null
        ? deserializeAws_json1_1RelationalDatabaseSnapshotList(output.relationalDatabaseSnapshots, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabasesResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabasesResult => {
  return {
    __type: "GetRelationalDatabasesResult",
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    relationalDatabases:
      output.relationalDatabases !== undefined && output.relationalDatabases !== null
        ? deserializeAws_json1_1RelationalDatabaseList(output.relationalDatabases, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetStaticIpResult = (output: any, context: __SerdeContext): GetStaticIpResult => {
  return {
    __type: "GetStaticIpResult",
    staticIp:
      output.staticIp !== undefined && output.staticIp !== null
        ? deserializeAws_json1_1StaticIp(output.staticIp, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetStaticIpsResult = (output: any, context: __SerdeContext): GetStaticIpsResult => {
  return {
    __type: "GetStaticIpsResult",
    nextPageToken:
      output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    staticIps:
      output.staticIps !== undefined && output.staticIps !== null
        ? deserializeAws_json1_1StaticIpList(output.staticIps, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HeaderForwardList = (output: any, context: __SerdeContext): (HeaderEnum | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1HeaderObject = (output: any, context: __SerdeContext): HeaderObject => {
  return {
    __type: "HeaderObject",
    headersAllowList:
      output.headersAllowList !== undefined && output.headersAllowList !== null
        ? deserializeAws_json1_1HeaderForwardList(output.headersAllowList, context)
        : undefined,
    option: output.option !== undefined && output.option !== null ? output.option : undefined,
  } as any;
};

const deserializeAws_json1_1HostKeyAttributes = (output: any, context: __SerdeContext): HostKeyAttributes => {
  return {
    __type: "HostKeyAttributes",
    algorithm: output.algorithm !== undefined && output.algorithm !== null ? output.algorithm : undefined,
    fingerprintSHA1:
      output.fingerprintSHA1 !== undefined && output.fingerprintSHA1 !== null ? output.fingerprintSHA1 : undefined,
    fingerprintSHA256:
      output.fingerprintSHA256 !== undefined && output.fingerprintSHA256 !== null
        ? output.fingerprintSHA256
        : undefined,
    notValidAfter:
      output.notValidAfter !== undefined && output.notValidAfter !== null
        ? new Date(Math.round(output.notValidAfter * 1000))
        : undefined,
    notValidBefore:
      output.notValidBefore !== undefined && output.notValidBefore !== null
        ? new Date(Math.round(output.notValidBefore * 1000))
        : undefined,
    publicKey: output.publicKey !== undefined && output.publicKey !== null ? output.publicKey : undefined,
    witnessedAt:
      output.witnessedAt !== undefined && output.witnessedAt !== null
        ? new Date(Math.round(output.witnessedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1HostKeysList = (output: any, context: __SerdeContext): HostKeyAttributes[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1HostKeyAttributes(entry, context));
};

const deserializeAws_json1_1ImportKeyPairResult = (output: any, context: __SerdeContext): ImportKeyPairResult => {
  return {
    __type: "ImportKeyPairResult",
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Instance = (output: any, context: __SerdeContext): Instance => {
  return {
    __type: "Instance",
    addOns:
      output.addOns !== undefined && output.addOns !== null
        ? deserializeAws_json1_1AddOnList(output.addOns, context)
        : undefined,
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    blueprintId: output.blueprintId !== undefined && output.blueprintId !== null ? output.blueprintId : undefined,
    blueprintName:
      output.blueprintName !== undefined && output.blueprintName !== null ? output.blueprintName : undefined,
    bundleId: output.bundleId !== undefined && output.bundleId !== null ? output.bundleId : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    hardware:
      output.hardware !== undefined && output.hardware !== null
        ? deserializeAws_json1_1InstanceHardware(output.hardware, context)
        : undefined,
    ipv6Address: output.ipv6Address !== undefined && output.ipv6Address !== null ? output.ipv6Address : undefined,
    isStaticIp: output.isStaticIp !== undefined && output.isStaticIp !== null ? output.isStaticIp : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1ResourceLocation(output.location, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    networking:
      output.networking !== undefined && output.networking !== null
        ? deserializeAws_json1_1InstanceNetworking(output.networking, context)
        : undefined,
    privateIpAddress:
      output.privateIpAddress !== undefined && output.privateIpAddress !== null ? output.privateIpAddress : undefined,
    publicIpAddress:
      output.publicIpAddress !== undefined && output.publicIpAddress !== null ? output.publicIpAddress : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    sshKeyName: output.sshKeyName !== undefined && output.sshKeyName !== null ? output.sshKeyName : undefined,
    state:
      output.state !== undefined && output.state !== null
        ? deserializeAws_json1_1InstanceState(output.state, context)
        : undefined,
    supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
    username: output.username !== undefined && output.username !== null ? output.username : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceAccessDetails = (output: any, context: __SerdeContext): InstanceAccessDetails => {
  return {
    __type: "InstanceAccessDetails",
    certKey: output.certKey !== undefined && output.certKey !== null ? output.certKey : undefined,
    expiresAt:
      output.expiresAt !== undefined && output.expiresAt !== null
        ? new Date(Math.round(output.expiresAt * 1000))
        : undefined,
    hostKeys:
      output.hostKeys !== undefined && output.hostKeys !== null
        ? deserializeAws_json1_1HostKeysList(output.hostKeys, context)
        : undefined,
    instanceName: output.instanceName !== undefined && output.instanceName !== null ? output.instanceName : undefined,
    ipAddress: output.ipAddress !== undefined && output.ipAddress !== null ? output.ipAddress : undefined,
    password: output.password !== undefined && output.password !== null ? output.password : undefined,
    passwordData:
      output.passwordData !== undefined && output.passwordData !== null
        ? deserializeAws_json1_1PasswordData(output.passwordData, context)
        : undefined,
    privateKey: output.privateKey !== undefined && output.privateKey !== null ? output.privateKey : undefined,
    protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
    username: output.username !== undefined && output.username !== null ? output.username : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceHardware = (output: any, context: __SerdeContext): InstanceHardware => {
  return {
    __type: "InstanceHardware",
    cpuCount: output.cpuCount !== undefined && output.cpuCount !== null ? output.cpuCount : undefined,
    disks:
      output.disks !== undefined && output.disks !== null
        ? deserializeAws_json1_1DiskList(output.disks, context)
        : undefined,
    ramSizeInGb: output.ramSizeInGb !== undefined && output.ramSizeInGb !== null ? output.ramSizeInGb : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceHealthSummary = (output: any, context: __SerdeContext): InstanceHealthSummary => {
  return {
    __type: "InstanceHealthSummary",
    instanceHealth:
      output.instanceHealth !== undefined && output.instanceHealth !== null ? output.instanceHealth : undefined,
    instanceHealthReason:
      output.instanceHealthReason !== undefined && output.instanceHealthReason !== null
        ? output.instanceHealthReason
        : undefined,
    instanceName: output.instanceName !== undefined && output.instanceName !== null ? output.instanceName : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceHealthSummaryList = (
  output: any,
  context: __SerdeContext
): InstanceHealthSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1InstanceHealthSummary(entry, context));
};

const deserializeAws_json1_1InstanceList = (output: any, context: __SerdeContext): Instance[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Instance(entry, context));
};

const deserializeAws_json1_1InstanceNetworking = (output: any, context: __SerdeContext): InstanceNetworking => {
  return {
    __type: "InstanceNetworking",
    monthlyTransfer:
      output.monthlyTransfer !== undefined && output.monthlyTransfer !== null
        ? deserializeAws_json1_1MonthlyTransfer(output.monthlyTransfer, context)
        : undefined,
    ports:
      output.ports !== undefined && output.ports !== null
        ? deserializeAws_json1_1InstancePortInfoList(output.ports, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstancePlatformList = (
  output: any,
  context: __SerdeContext
): (InstancePlatform | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InstancePortInfo = (output: any, context: __SerdeContext): InstancePortInfo => {
  return {
    __type: "InstancePortInfo",
    accessDirection:
      output.accessDirection !== undefined && output.accessDirection !== null ? output.accessDirection : undefined,
    accessFrom: output.accessFrom !== undefined && output.accessFrom !== null ? output.accessFrom : undefined,
    accessType: output.accessType !== undefined && output.accessType !== null ? output.accessType : undefined,
    cidrListAliases:
      output.cidrListAliases !== undefined && output.cidrListAliases !== null
        ? deserializeAws_json1_1StringList(output.cidrListAliases, context)
        : undefined,
    cidrs:
      output.cidrs !== undefined && output.cidrs !== null
        ? deserializeAws_json1_1StringList(output.cidrs, context)
        : undefined,
    commonName: output.commonName !== undefined && output.commonName !== null ? output.commonName : undefined,
    fromPort: output.fromPort !== undefined && output.fromPort !== null ? output.fromPort : undefined,
    protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
    toPort: output.toPort !== undefined && output.toPort !== null ? output.toPort : undefined,
  } as any;
};

const deserializeAws_json1_1InstancePortInfoList = (output: any, context: __SerdeContext): InstancePortInfo[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1InstancePortInfo(entry, context));
};

const deserializeAws_json1_1InstancePortState = (output: any, context: __SerdeContext): InstancePortState => {
  return {
    __type: "InstancePortState",
    cidrListAliases:
      output.cidrListAliases !== undefined && output.cidrListAliases !== null
        ? deserializeAws_json1_1StringList(output.cidrListAliases, context)
        : undefined,
    cidrs:
      output.cidrs !== undefined && output.cidrs !== null
        ? deserializeAws_json1_1StringList(output.cidrs, context)
        : undefined,
    fromPort: output.fromPort !== undefined && output.fromPort !== null ? output.fromPort : undefined,
    protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
    state: output.state !== undefined && output.state !== null ? output.state : undefined,
    toPort: output.toPort !== undefined && output.toPort !== null ? output.toPort : undefined,
  } as any;
};

const deserializeAws_json1_1InstancePortStateList = (output: any, context: __SerdeContext): InstancePortState[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1InstancePortState(entry, context));
};

const deserializeAws_json1_1InstanceSnapshot = (output: any, context: __SerdeContext): InstanceSnapshot => {
  return {
    __type: "InstanceSnapshot",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    fromAttachedDisks:
      output.fromAttachedDisks !== undefined && output.fromAttachedDisks !== null
        ? deserializeAws_json1_1DiskList(output.fromAttachedDisks, context)
        : undefined,
    fromBlueprintId:
      output.fromBlueprintId !== undefined && output.fromBlueprintId !== null ? output.fromBlueprintId : undefined,
    fromBundleId: output.fromBundleId !== undefined && output.fromBundleId !== null ? output.fromBundleId : undefined,
    fromInstanceArn:
      output.fromInstanceArn !== undefined && output.fromInstanceArn !== null ? output.fromInstanceArn : undefined,
    fromInstanceName:
      output.fromInstanceName !== undefined && output.fromInstanceName !== null ? output.fromInstanceName : undefined,
    isFromAutoSnapshot:
      output.isFromAutoSnapshot !== undefined && output.isFromAutoSnapshot !== null
        ? output.isFromAutoSnapshot
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1ResourceLocation(output.location, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    progress: output.progress !== undefined && output.progress !== null ? output.progress : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    sizeInGb: output.sizeInGb !== undefined && output.sizeInGb !== null ? output.sizeInGb : undefined,
    state: output.state !== undefined && output.state !== null ? output.state : undefined,
    supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceSnapshotInfo = (output: any, context: __SerdeContext): InstanceSnapshotInfo => {
  return {
    __type: "InstanceSnapshotInfo",
    fromBlueprintId:
      output.fromBlueprintId !== undefined && output.fromBlueprintId !== null ? output.fromBlueprintId : undefined,
    fromBundleId: output.fromBundleId !== undefined && output.fromBundleId !== null ? output.fromBundleId : undefined,
    fromDiskInfo:
      output.fromDiskInfo !== undefined && output.fromDiskInfo !== null
        ? deserializeAws_json1_1DiskInfoList(output.fromDiskInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceSnapshotList = (output: any, context: __SerdeContext): InstanceSnapshot[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1InstanceSnapshot(entry, context));
};

const deserializeAws_json1_1InstanceState = (output: any, context: __SerdeContext): InstanceState => {
  return {
    __type: "InstanceState",
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    __type: "InvalidInputException",
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
    docs: output.docs !== undefined && output.docs !== null ? output.docs : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    tip: output.tip !== undefined && output.tip !== null ? output.tip : undefined,
  } as any;
};

const deserializeAws_json1_1IsVpcPeeredResult = (output: any, context: __SerdeContext): IsVpcPeeredResult => {
  return {
    __type: "IsVpcPeeredResult",
    isPeered: output.isPeered !== undefined && output.isPeered !== null ? output.isPeered : undefined,
  } as any;
};

const deserializeAws_json1_1KeyPair = (output: any, context: __SerdeContext): KeyPair => {
  return {
    __type: "KeyPair",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    fingerprint: output.fingerprint !== undefined && output.fingerprint !== null ? output.fingerprint : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1ResourceLocation(output.location, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1KeyPairList = (output: any, context: __SerdeContext): KeyPair[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1KeyPair(entry, context));
};

const deserializeAws_json1_1LightsailDistribution = (output: any, context: __SerdeContext): LightsailDistribution => {
  return {
    __type: "LightsailDistribution",
    ableToUpdateBundle:
      output.ableToUpdateBundle !== undefined && output.ableToUpdateBundle !== null
        ? output.ableToUpdateBundle
        : undefined,
    alternativeDomainNames:
      output.alternativeDomainNames !== undefined && output.alternativeDomainNames !== null
        ? deserializeAws_json1_1StringList(output.alternativeDomainNames, context)
        : undefined,
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    bundleId: output.bundleId !== undefined && output.bundleId !== null ? output.bundleId : undefined,
    cacheBehaviorSettings:
      output.cacheBehaviorSettings !== undefined && output.cacheBehaviorSettings !== null
        ? deserializeAws_json1_1CacheSettings(output.cacheBehaviorSettings, context)
        : undefined,
    cacheBehaviors:
      output.cacheBehaviors !== undefined && output.cacheBehaviors !== null
        ? deserializeAws_json1_1CacheBehaviorList(output.cacheBehaviors, context)
        : undefined,
    certificateName:
      output.certificateName !== undefined && output.certificateName !== null ? output.certificateName : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    defaultCacheBehavior:
      output.defaultCacheBehavior !== undefined && output.defaultCacheBehavior !== null
        ? deserializeAws_json1_1CacheBehavior(output.defaultCacheBehavior, context)
        : undefined,
    domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    isEnabled: output.isEnabled !== undefined && output.isEnabled !== null ? output.isEnabled : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1ResourceLocation(output.location, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    origin:
      output.origin !== undefined && output.origin !== null
        ? deserializeAws_json1_1Origin(output.origin, context)
        : undefined,
    originPublicDNS:
      output.originPublicDNS !== undefined && output.originPublicDNS !== null ? output.originPublicDNS : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LoadBalancer = (output: any, context: __SerdeContext): LoadBalancer => {
  return {
    __type: "LoadBalancer",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    configurationOptions:
      output.configurationOptions !== undefined && output.configurationOptions !== null
        ? deserializeAws_json1_1LoadBalancerConfigurationOptions(output.configurationOptions, context)
        : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    dnsName: output.dnsName !== undefined && output.dnsName !== null ? output.dnsName : undefined,
    healthCheckPath:
      output.healthCheckPath !== undefined && output.healthCheckPath !== null ? output.healthCheckPath : undefined,
    instanceHealthSummary:
      output.instanceHealthSummary !== undefined && output.instanceHealthSummary !== null
        ? deserializeAws_json1_1InstanceHealthSummaryList(output.instanceHealthSummary, context)
        : undefined,
    instancePort: output.instancePort !== undefined && output.instancePort !== null ? output.instancePort : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1ResourceLocation(output.location, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
    publicPorts:
      output.publicPorts !== undefined && output.publicPorts !== null
        ? deserializeAws_json1_1PortList(output.publicPorts, context)
        : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    state: output.state !== undefined && output.state !== null ? output.state : undefined,
    supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
    tlsCertificateSummaries:
      output.tlsCertificateSummaries !== undefined && output.tlsCertificateSummaries !== null
        ? deserializeAws_json1_1LoadBalancerTlsCertificateSummaryList(output.tlsCertificateSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LoadBalancerConfigurationOptions = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [LoadBalancerAttributeName | string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const deserializeAws_json1_1LoadBalancerList = (output: any, context: __SerdeContext): LoadBalancer[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1LoadBalancer(entry, context));
};

const deserializeAws_json1_1LoadBalancerTlsCertificate = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificate => {
  return {
    __type: "LoadBalancerTlsCertificate",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    domainValidationRecords:
      output.domainValidationRecords !== undefined && output.domainValidationRecords !== null
        ? deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecordList(
            output.domainValidationRecords,
            context
          )
        : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
    isAttached: output.isAttached !== undefined && output.isAttached !== null ? output.isAttached : undefined,
    issuedAt:
      output.issuedAt !== undefined && output.issuedAt !== null
        ? new Date(Math.round(output.issuedAt * 1000))
        : undefined,
    issuer: output.issuer !== undefined && output.issuer !== null ? output.issuer : undefined,
    keyAlgorithm: output.keyAlgorithm !== undefined && output.keyAlgorithm !== null ? output.keyAlgorithm : undefined,
    loadBalancerName:
      output.loadBalancerName !== undefined && output.loadBalancerName !== null ? output.loadBalancerName : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1ResourceLocation(output.location, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    notAfter:
      output.notAfter !== undefined && output.notAfter !== null
        ? new Date(Math.round(output.notAfter * 1000))
        : undefined,
    notBefore:
      output.notBefore !== undefined && output.notBefore !== null
        ? new Date(Math.round(output.notBefore * 1000))
        : undefined,
    renewalSummary:
      output.renewalSummary !== undefined && output.renewalSummary !== null
        ? deserializeAws_json1_1LoadBalancerTlsCertificateRenewalSummary(output.renewalSummary, context)
        : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    revocationReason:
      output.revocationReason !== undefined && output.revocationReason !== null ? output.revocationReason : undefined,
    revokedAt:
      output.revokedAt !== undefined && output.revokedAt !== null
        ? new Date(Math.round(output.revokedAt * 1000))
        : undefined,
    serial: output.serial !== undefined && output.serial !== null ? output.serial : undefined,
    signatureAlgorithm:
      output.signatureAlgorithm !== undefined && output.signatureAlgorithm !== null
        ? output.signatureAlgorithm
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    subject: output.subject !== undefined && output.subject !== null ? output.subject : undefined,
    subjectAlternativeNames:
      output.subjectAlternativeNames !== undefined && output.subjectAlternativeNames !== null
        ? deserializeAws_json1_1StringList(output.subjectAlternativeNames, context)
        : undefined,
    supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOption = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateDomainValidationOption => {
  return {
    __type: "LoadBalancerTlsCertificateDomainValidationOption",
    domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    validationStatus:
      output.validationStatus !== undefined && output.validationStatus !== null ? output.validationStatus : undefined,
  } as any;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOptionList = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateDomainValidationOption[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOption(entry, context)
  );
};

const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecord = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateDomainValidationRecord => {
  return {
    __type: "LoadBalancerTlsCertificateDomainValidationRecord",
    domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
    validationStatus:
      output.validationStatus !== undefined && output.validationStatus !== null ? output.validationStatus : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecordList = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateDomainValidationRecord[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecord(entry, context)
  );
};

const deserializeAws_json1_1LoadBalancerTlsCertificateList = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificate[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1LoadBalancerTlsCertificate(entry, context));
};

const deserializeAws_json1_1LoadBalancerTlsCertificateRenewalSummary = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateRenewalSummary => {
  return {
    __type: "LoadBalancerTlsCertificateRenewalSummary",
    domainValidationOptions:
      output.domainValidationOptions !== undefined && output.domainValidationOptions !== null
        ? deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOptionList(
            output.domainValidationOptions,
            context
          )
        : undefined,
    renewalStatus:
      output.renewalStatus !== undefined && output.renewalStatus !== null ? output.renewalStatus : undefined,
  } as any;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateSummary = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateSummary => {
  return {
    __type: "LoadBalancerTlsCertificateSummary",
    isAttached: output.isAttached !== undefined && output.isAttached !== null ? output.isAttached : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateSummaryList = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1LoadBalancerTlsCertificateSummary(entry, context));
};

const deserializeAws_json1_1LogEvent = (output: any, context: __SerdeContext): LogEvent => {
  return {
    __type: "LogEvent",
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1LogEventList = (output: any, context: __SerdeContext): LogEvent[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1LogEvent(entry, context));
};

const deserializeAws_json1_1MetricDatapoint = (output: any, context: __SerdeContext): MetricDatapoint => {
  return {
    __type: "MetricDatapoint",
    average: output.average !== undefined && output.average !== null ? output.average : undefined,
    maximum: output.maximum !== undefined && output.maximum !== null ? output.maximum : undefined,
    minimum: output.minimum !== undefined && output.minimum !== null ? output.minimum : undefined,
    sampleCount: output.sampleCount !== undefined && output.sampleCount !== null ? output.sampleCount : undefined,
    sum: output.sum !== undefined && output.sum !== null ? output.sum : undefined,
    timestamp:
      output.timestamp !== undefined && output.timestamp !== null
        ? new Date(Math.round(output.timestamp * 1000))
        : undefined,
    unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
  } as any;
};

const deserializeAws_json1_1MetricDatapointList = (output: any, context: __SerdeContext): MetricDatapoint[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1MetricDatapoint(entry, context));
};

const deserializeAws_json1_1MonitoredResourceInfo = (output: any, context: __SerdeContext): MonitoredResourceInfo => {
  return {
    __type: "MonitoredResourceInfo",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
  } as any;
};

const deserializeAws_json1_1MonthlyTransfer = (output: any, context: __SerdeContext): MonthlyTransfer => {
  return {
    __type: "MonthlyTransfer",
    gbPerMonthAllocated:
      output.gbPerMonthAllocated !== undefined && output.gbPerMonthAllocated !== null
        ? output.gbPerMonthAllocated
        : undefined,
  } as any;
};

const deserializeAws_json1_1NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    __type: "NotFoundException",
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
    docs: output.docs !== undefined && output.docs !== null ? output.docs : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    tip: output.tip !== undefined && output.tip !== null ? output.tip : undefined,
  } as any;
};

const deserializeAws_json1_1NotificationTriggerList = (
  output: any,
  context: __SerdeContext
): (AlarmState | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1OpenInstancePublicPortsResult = (
  output: any,
  context: __SerdeContext
): OpenInstancePublicPortsResult => {
  return {
    __type: "OpenInstancePublicPortsResult",
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Operation = (output: any, context: __SerdeContext): Operation => {
  return {
    __type: "Operation",
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
    errorDetails: output.errorDetails !== undefined && output.errorDetails !== null ? output.errorDetails : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    isTerminal: output.isTerminal !== undefined && output.isTerminal !== null ? output.isTerminal : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1ResourceLocation(output.location, context)
        : undefined,
    operationDetails:
      output.operationDetails !== undefined && output.operationDetails !== null ? output.operationDetails : undefined,
    operationType:
      output.operationType !== undefined && output.operationType !== null ? output.operationType : undefined,
    resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusChangedAt:
      output.statusChangedAt !== undefined && output.statusChangedAt !== null
        ? new Date(Math.round(output.statusChangedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1OperationFailureException = (
  output: any,
  context: __SerdeContext
): OperationFailureException => {
  return {
    __type: "OperationFailureException",
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
    docs: output.docs !== undefined && output.docs !== null ? output.docs : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    tip: output.tip !== undefined && output.tip !== null ? output.tip : undefined,
  } as any;
};

const deserializeAws_json1_1OperationList = (output: any, context: __SerdeContext): Operation[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Operation(entry, context));
};

const deserializeAws_json1_1Origin = (output: any, context: __SerdeContext): Origin => {
  return {
    __type: "Origin",
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    protocolPolicy:
      output.protocolPolicy !== undefined && output.protocolPolicy !== null ? output.protocolPolicy : undefined,
    regionName: output.regionName !== undefined && output.regionName !== null ? output.regionName : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
  } as any;
};

const deserializeAws_json1_1PasswordData = (output: any, context: __SerdeContext): PasswordData => {
  return {
    __type: "PasswordData",
    ciphertext: output.ciphertext !== undefined && output.ciphertext !== null ? output.ciphertext : undefined,
    keyPairName: output.keyPairName !== undefined && output.keyPairName !== null ? output.keyPairName : undefined,
  } as any;
};

const deserializeAws_json1_1PeerVpcResult = (output: any, context: __SerdeContext): PeerVpcResult => {
  return {
    __type: "PeerVpcResult",
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PendingMaintenanceAction = (
  output: any,
  context: __SerdeContext
): PendingMaintenanceAction => {
  return {
    __type: "PendingMaintenanceAction",
    action: output.action !== undefined && output.action !== null ? output.action : undefined,
    currentApplyDate:
      output.currentApplyDate !== undefined && output.currentApplyDate !== null
        ? new Date(Math.round(output.currentApplyDate * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
  } as any;
};

const deserializeAws_json1_1PendingMaintenanceActionList = (
  output: any,
  context: __SerdeContext
): PendingMaintenanceAction[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1PendingMaintenanceAction(entry, context));
};

const deserializeAws_json1_1PendingModifiedRelationalDatabaseValues = (
  output: any,
  context: __SerdeContext
): PendingModifiedRelationalDatabaseValues => {
  return {
    __type: "PendingModifiedRelationalDatabaseValues",
    backupRetentionEnabled:
      output.backupRetentionEnabled !== undefined && output.backupRetentionEnabled !== null
        ? output.backupRetentionEnabled
        : undefined,
    engineVersion:
      output.engineVersion !== undefined && output.engineVersion !== null ? output.engineVersion : undefined,
    masterUserPassword:
      output.masterUserPassword !== undefined && output.masterUserPassword !== null
        ? output.masterUserPassword
        : undefined,
  } as any;
};

const deserializeAws_json1_1PortList = (output: any, context: __SerdeContext): number[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1PutAlarmResult = (output: any, context: __SerdeContext): PutAlarmResult => {
  return {
    __type: "PutAlarmResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutInstancePublicPortsResult = (
  output: any,
  context: __SerdeContext
): PutInstancePublicPortsResult => {
  return {
    __type: "PutInstancePublicPortsResult",
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1QueryStringObject = (output: any, context: __SerdeContext): QueryStringObject => {
  return {
    __type: "QueryStringObject",
    option: output.option !== undefined && output.option !== null ? output.option : undefined,
    queryStringsAllowList:
      output.queryStringsAllowList !== undefined && output.queryStringsAllowList !== null
        ? deserializeAws_json1_1StringList(output.queryStringsAllowList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RebootInstanceResult = (output: any, context: __SerdeContext): RebootInstanceResult => {
  return {
    __type: "RebootInstanceResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RebootRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): RebootRelationalDatabaseResult => {
  return {
    __type: "RebootRelationalDatabaseResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Region = (output: any, context: __SerdeContext): Region => {
  return {
    __type: "Region",
    availabilityZones:
      output.availabilityZones !== undefined && output.availabilityZones !== null
        ? deserializeAws_json1_1AvailabilityZoneList(output.availabilityZones, context)
        : undefined,
    continentCode:
      output.continentCode !== undefined && output.continentCode !== null ? output.continentCode : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    relationalDatabaseAvailabilityZones:
      output.relationalDatabaseAvailabilityZones !== undefined && output.relationalDatabaseAvailabilityZones !== null
        ? deserializeAws_json1_1AvailabilityZoneList(output.relationalDatabaseAvailabilityZones, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RegionList = (output: any, context: __SerdeContext): Region[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Region(entry, context));
};

const deserializeAws_json1_1RelationalDatabase = (output: any, context: __SerdeContext): RelationalDatabase => {
  return {
    __type: "RelationalDatabase",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    backupRetentionEnabled:
      output.backupRetentionEnabled !== undefined && output.backupRetentionEnabled !== null
        ? output.backupRetentionEnabled
        : undefined,
    caCertificateIdentifier:
      output.caCertificateIdentifier !== undefined && output.caCertificateIdentifier !== null
        ? output.caCertificateIdentifier
        : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    engine: output.engine !== undefined && output.engine !== null ? output.engine : undefined,
    engineVersion:
      output.engineVersion !== undefined && output.engineVersion !== null ? output.engineVersion : undefined,
    hardware:
      output.hardware !== undefined && output.hardware !== null
        ? deserializeAws_json1_1RelationalDatabaseHardware(output.hardware, context)
        : undefined,
    latestRestorableTime:
      output.latestRestorableTime !== undefined && output.latestRestorableTime !== null
        ? new Date(Math.round(output.latestRestorableTime * 1000))
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1ResourceLocation(output.location, context)
        : undefined,
    masterDatabaseName:
      output.masterDatabaseName !== undefined && output.masterDatabaseName !== null
        ? output.masterDatabaseName
        : undefined,
    masterEndpoint:
      output.masterEndpoint !== undefined && output.masterEndpoint !== null
        ? deserializeAws_json1_1RelationalDatabaseEndpoint(output.masterEndpoint, context)
        : undefined,
    masterUsername:
      output.masterUsername !== undefined && output.masterUsername !== null ? output.masterUsername : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    parameterApplyStatus:
      output.parameterApplyStatus !== undefined && output.parameterApplyStatus !== null
        ? output.parameterApplyStatus
        : undefined,
    pendingMaintenanceActions:
      output.pendingMaintenanceActions !== undefined && output.pendingMaintenanceActions !== null
        ? deserializeAws_json1_1PendingMaintenanceActionList(output.pendingMaintenanceActions, context)
        : undefined,
    pendingModifiedValues:
      output.pendingModifiedValues !== undefined && output.pendingModifiedValues !== null
        ? deserializeAws_json1_1PendingModifiedRelationalDatabaseValues(output.pendingModifiedValues, context)
        : undefined,
    preferredBackupWindow:
      output.preferredBackupWindow !== undefined && output.preferredBackupWindow !== null
        ? output.preferredBackupWindow
        : undefined,
    preferredMaintenanceWindow:
      output.preferredMaintenanceWindow !== undefined && output.preferredMaintenanceWindow !== null
        ? output.preferredMaintenanceWindow
        : undefined,
    publiclyAccessible:
      output.publiclyAccessible !== undefined && output.publiclyAccessible !== null
        ? output.publiclyAccessible
        : undefined,
    relationalDatabaseBlueprintId:
      output.relationalDatabaseBlueprintId !== undefined && output.relationalDatabaseBlueprintId !== null
        ? output.relationalDatabaseBlueprintId
        : undefined,
    relationalDatabaseBundleId:
      output.relationalDatabaseBundleId !== undefined && output.relationalDatabaseBundleId !== null
        ? output.relationalDatabaseBundleId
        : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    secondaryAvailabilityZone:
      output.secondaryAvailabilityZone !== undefined && output.secondaryAvailabilityZone !== null
        ? output.secondaryAvailabilityZone
        : undefined,
    state: output.state !== undefined && output.state !== null ? output.state : undefined,
    supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RelationalDatabaseBlueprint = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseBlueprint => {
  return {
    __type: "RelationalDatabaseBlueprint",
    blueprintId: output.blueprintId !== undefined && output.blueprintId !== null ? output.blueprintId : undefined,
    engine: output.engine !== undefined && output.engine !== null ? output.engine : undefined,
    engineDescription:
      output.engineDescription !== undefined && output.engineDescription !== null
        ? output.engineDescription
        : undefined,
    engineVersion:
      output.engineVersion !== undefined && output.engineVersion !== null ? output.engineVersion : undefined,
    engineVersionDescription:
      output.engineVersionDescription !== undefined && output.engineVersionDescription !== null
        ? output.engineVersionDescription
        : undefined,
    isEngineDefault:
      output.isEngineDefault !== undefined && output.isEngineDefault !== null ? output.isEngineDefault : undefined,
  } as any;
};

const deserializeAws_json1_1RelationalDatabaseBlueprintList = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseBlueprint[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1RelationalDatabaseBlueprint(entry, context));
};

const deserializeAws_json1_1RelationalDatabaseBundle = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseBundle => {
  return {
    __type: "RelationalDatabaseBundle",
    bundleId: output.bundleId !== undefined && output.bundleId !== null ? output.bundleId : undefined,
    cpuCount: output.cpuCount !== undefined && output.cpuCount !== null ? output.cpuCount : undefined,
    diskSizeInGb: output.diskSizeInGb !== undefined && output.diskSizeInGb !== null ? output.diskSizeInGb : undefined,
    isActive: output.isActive !== undefined && output.isActive !== null ? output.isActive : undefined,
    isEncrypted: output.isEncrypted !== undefined && output.isEncrypted !== null ? output.isEncrypted : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    price: output.price !== undefined && output.price !== null ? output.price : undefined,
    ramSizeInGb: output.ramSizeInGb !== undefined && output.ramSizeInGb !== null ? output.ramSizeInGb : undefined,
    transferPerMonthInGb:
      output.transferPerMonthInGb !== undefined && output.transferPerMonthInGb !== null
        ? output.transferPerMonthInGb
        : undefined,
  } as any;
};

const deserializeAws_json1_1RelationalDatabaseBundleList = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseBundle[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1RelationalDatabaseBundle(entry, context));
};

const deserializeAws_json1_1RelationalDatabaseEndpoint = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseEndpoint => {
  return {
    __type: "RelationalDatabaseEndpoint",
    address: output.address !== undefined && output.address !== null ? output.address : undefined,
    port: output.port !== undefined && output.port !== null ? output.port : undefined,
  } as any;
};

const deserializeAws_json1_1RelationalDatabaseEvent = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseEvent => {
  return {
    __type: "RelationalDatabaseEvent",
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    eventCategories:
      output.eventCategories !== undefined && output.eventCategories !== null
        ? deserializeAws_json1_1StringList(output.eventCategories, context)
        : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
  } as any;
};

const deserializeAws_json1_1RelationalDatabaseEventList = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseEvent[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1RelationalDatabaseEvent(entry, context));
};

const deserializeAws_json1_1RelationalDatabaseHardware = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseHardware => {
  return {
    __type: "RelationalDatabaseHardware",
    cpuCount: output.cpuCount !== undefined && output.cpuCount !== null ? output.cpuCount : undefined,
    diskSizeInGb: output.diskSizeInGb !== undefined && output.diskSizeInGb !== null ? output.diskSizeInGb : undefined,
    ramSizeInGb: output.ramSizeInGb !== undefined && output.ramSizeInGb !== null ? output.ramSizeInGb : undefined,
  } as any;
};

const deserializeAws_json1_1RelationalDatabaseList = (output: any, context: __SerdeContext): RelationalDatabase[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1RelationalDatabase(entry, context));
};

const deserializeAws_json1_1RelationalDatabaseParameter = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseParameter => {
  return {
    __type: "RelationalDatabaseParameter",
    allowedValues:
      output.allowedValues !== undefined && output.allowedValues !== null ? output.allowedValues : undefined,
    applyMethod: output.applyMethod !== undefined && output.applyMethod !== null ? output.applyMethod : undefined,
    applyType: output.applyType !== undefined && output.applyType !== null ? output.applyType : undefined,
    dataType: output.dataType !== undefined && output.dataType !== null ? output.dataType : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    isModifiable: output.isModifiable !== undefined && output.isModifiable !== null ? output.isModifiable : undefined,
    parameterName:
      output.parameterName !== undefined && output.parameterName !== null ? output.parameterName : undefined,
    parameterValue:
      output.parameterValue !== undefined && output.parameterValue !== null ? output.parameterValue : undefined,
  } as any;
};

const deserializeAws_json1_1RelationalDatabaseParameterList = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseParameter[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1RelationalDatabaseParameter(entry, context));
};

const deserializeAws_json1_1RelationalDatabaseSnapshot = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseSnapshot => {
  return {
    __type: "RelationalDatabaseSnapshot",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    engine: output.engine !== undefined && output.engine !== null ? output.engine : undefined,
    engineVersion:
      output.engineVersion !== undefined && output.engineVersion !== null ? output.engineVersion : undefined,
    fromRelationalDatabaseArn:
      output.fromRelationalDatabaseArn !== undefined && output.fromRelationalDatabaseArn !== null
        ? output.fromRelationalDatabaseArn
        : undefined,
    fromRelationalDatabaseBlueprintId:
      output.fromRelationalDatabaseBlueprintId !== undefined && output.fromRelationalDatabaseBlueprintId !== null
        ? output.fromRelationalDatabaseBlueprintId
        : undefined,
    fromRelationalDatabaseBundleId:
      output.fromRelationalDatabaseBundleId !== undefined && output.fromRelationalDatabaseBundleId !== null
        ? output.fromRelationalDatabaseBundleId
        : undefined,
    fromRelationalDatabaseName:
      output.fromRelationalDatabaseName !== undefined && output.fromRelationalDatabaseName !== null
        ? output.fromRelationalDatabaseName
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1ResourceLocation(output.location, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    sizeInGb: output.sizeInGb !== undefined && output.sizeInGb !== null ? output.sizeInGb : undefined,
    state: output.state !== undefined && output.state !== null ? output.state : undefined,
    supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RelationalDatabaseSnapshotList = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseSnapshot[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1RelationalDatabaseSnapshot(entry, context));
};

const deserializeAws_json1_1ReleaseStaticIpResult = (output: any, context: __SerdeContext): ReleaseStaticIpResult => {
  return {
    __type: "ReleaseStaticIpResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RenewalSummary = (output: any, context: __SerdeContext): RenewalSummary => {
  return {
    __type: "RenewalSummary",
    domainValidationRecords:
      output.domainValidationRecords !== undefined && output.domainValidationRecords !== null
        ? deserializeAws_json1_1DomainValidationRecordList(output.domainValidationRecords, context)
        : undefined,
    renewalStatus:
      output.renewalStatus !== undefined && output.renewalStatus !== null ? output.renewalStatus : undefined,
    renewalStatusReason:
      output.renewalStatusReason !== undefined && output.renewalStatusReason !== null
        ? output.renewalStatusReason
        : undefined,
    updatedAt:
      output.updatedAt !== undefined && output.updatedAt !== null
        ? new Date(Math.round(output.updatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResetDistributionCacheResult = (
  output: any,
  context: __SerdeContext
): ResetDistributionCacheResult => {
  return {
    __type: "ResetDistributionCacheResult",
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? new Date(Math.round(output.createTime * 1000))
        : undefined,
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceLocation = (output: any, context: __SerdeContext): ResourceLocation => {
  return {
    __type: "ResourceLocation",
    availabilityZone:
      output.availabilityZone !== undefined && output.availabilityZone !== null ? output.availabilityZone : undefined,
    regionName: output.regionName !== undefined && output.regionName !== null ? output.regionName : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceRecord = (output: any, context: __SerdeContext): ResourceRecord => {
  return {
    __type: "ResourceRecord",
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_json1_1SendContactMethodVerificationResult = (
  output: any,
  context: __SerdeContext
): SendContactMethodVerificationResult => {
  return {
    __type: "SendContactMethodVerificationResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ServiceException = (output: any, context: __SerdeContext): ServiceException => {
  return {
    __type: "ServiceException",
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
    docs: output.docs !== undefined && output.docs !== null ? output.docs : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    tip: output.tip !== undefined && output.tip !== null ? output.tip : undefined,
  } as any;
};

const deserializeAws_json1_1StartInstanceResult = (output: any, context: __SerdeContext): StartInstanceResult => {
  return {
    __type: "StartInstanceResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StartRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): StartRelationalDatabaseResult => {
  return {
    __type: "StartRelationalDatabaseResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StaticIp = (output: any, context: __SerdeContext): StaticIp => {
  return {
    __type: "StaticIp",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    attachedTo: output.attachedTo !== undefined && output.attachedTo !== null ? output.attachedTo : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    ipAddress: output.ipAddress !== undefined && output.ipAddress !== null ? output.ipAddress : undefined,
    isAttached: output.isAttached !== undefined && output.isAttached !== null ? output.isAttached : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1ResourceLocation(output.location, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
  } as any;
};

const deserializeAws_json1_1StaticIpList = (output: any, context: __SerdeContext): StaticIp[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1StaticIp(entry, context));
};

const deserializeAws_json1_1StopInstanceResult = (output: any, context: __SerdeContext): StopInstanceResult => {
  return {
    __type: "StopInstanceResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StopRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): StopRelationalDatabaseResult => {
  return {
    __type: "StopRelationalDatabaseResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1SubjectAlternativeNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    __type: "Tag",
    key: output.key !== undefined && output.key !== null ? output.key : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Tag(entry, context));
};

const deserializeAws_json1_1TagResourceResult = (output: any, context: __SerdeContext): TagResourceResult => {
  return {
    __type: "TagResourceResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TestAlarmResult = (output: any, context: __SerdeContext): TestAlarmResult => {
  return {
    __type: "TestAlarmResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UnauthenticatedException = (
  output: any,
  context: __SerdeContext
): UnauthenticatedException => {
  return {
    __type: "UnauthenticatedException",
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
    docs: output.docs !== undefined && output.docs !== null ? output.docs : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    tip: output.tip !== undefined && output.tip !== null ? output.tip : undefined,
  } as any;
};

const deserializeAws_json1_1UnpeerVpcResult = (output: any, context: __SerdeContext): UnpeerVpcResult => {
  return {
    __type: "UnpeerVpcResult",
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UntagResourceResult = (output: any, context: __SerdeContext): UntagResourceResult => {
  return {
    __type: "UntagResourceResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateDistributionBundleResult = (
  output: any,
  context: __SerdeContext
): UpdateDistributionBundleResult => {
  return {
    __type: "UpdateDistributionBundleResult",
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateDistributionResult = (
  output: any,
  context: __SerdeContext
): UpdateDistributionResult => {
  return {
    __type: "UpdateDistributionResult",
    operation:
      output.operation !== undefined && output.operation !== null
        ? deserializeAws_json1_1Operation(output.operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateDomainEntryResult = (
  output: any,
  context: __SerdeContext
): UpdateDomainEntryResult => {
  return {
    __type: "UpdateDomainEntryResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateLoadBalancerAttributeResult = (
  output: any,
  context: __SerdeContext
): UpdateLoadBalancerAttributeResult => {
  return {
    __type: "UpdateLoadBalancerAttributeResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateRelationalDatabaseParametersResult = (
  output: any,
  context: __SerdeContext
): UpdateRelationalDatabaseParametersResult => {
  return {
    __type: "UpdateRelationalDatabaseParametersResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): UpdateRelationalDatabaseResult => {
  return {
    __type: "UpdateRelationalDatabaseResult",
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_json1_1OperationList(output.operations, context)
        : undefined,
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
