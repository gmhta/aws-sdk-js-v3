
import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "../../smithy-client/mod.ts";
import { MetadataBearer as $MetadataBearer } from "../../types/mod.ts";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessDeniedException => __isa(o, "AccessDeniedException");
}

/**
 * <p>Describes the configuration of an Auto Scaling group.</p>
 */
export interface AutoScalingGroupConfiguration {
  __type?: "AutoScalingGroupConfiguration";
  /**
   * <p>The maximum size, or maximum number of instances, for the Auto Scaling group.</p>
   */
  maxSize?: number;

  /**
   * <p>The instance type for the Auto Scaling group.</p>
   */
  instanceType?: string;

  /**
   * <p>The desired capacity, or number of instances, for the Auto Scaling group.</p>
   */
  desiredCapacity?: number;

  /**
   * <p>The minimum size, or minimum number of instances, for the Auto Scaling group.</p>
   */
  minSize?: number;
}

export namespace AutoScalingGroupConfiguration {
  export const filterSensitiveLog = (obj: AutoScalingGroupConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AutoScalingGroupConfiguration => __isa(o, "AutoScalingGroupConfiguration");
}

/**
 * <p>Describes an Auto Scaling group recommendation.</p>
 */
export interface AutoScalingGroupRecommendation {
  __type?: "AutoScalingGroupRecommendation";
  /**
   * <p>The number of days for which utilization metrics were analyzed for the Auto Scaling
   *             group.</p>
   */
  lookBackPeriodInDays?: number;

  /**
   * <p>The AWS account ID of the Auto Scaling group.</p>
   */
  accountId?: string;

  /**
   * <p>An array of objects that describe the utilization metrics of the Auto Scaling group.</p>
   */
  utilizationMetrics?: UtilizationMetric[];

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  autoScalingGroupName?: string;

  /**
   * <p>An array of objects that describe the recommendation options for the Auto Scaling
   *             group.</p>
   */
  recommendationOptions?: AutoScalingGroupRecommendationOption[];

  /**
   * <p>An array of objects that describe the current configuration of the Auto Scaling group.</p>
   */
  currentConfiguration?: AutoScalingGroupConfiguration;

  /**
   * <p>The Amazon Resource Name (ARN) of the Auto Scaling group.</p>
   */
  autoScalingGroupArn?: string;

  /**
   * <p>The time stamp of when the Auto Scaling group recommendation was last refreshed.</p>
   */
  lastRefreshTimestamp?: Date;

  /**
   * <p>The finding classification for the Auto Scaling group.</p>
   *         <p>Findings for Auto Scaling groups include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>NotOptimized</code>
   *                   </b>—An Auto Scaling group is
   *                     considered not optimized when AWS Compute Optimizer identifies a recommendation that can
   *                     provide better performance for your workload.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>Optimized</code>
   *                   </b>—An Auto Scaling group is
   *                     considered optimized when Compute Optimizer determines that the group is correctly
   *                     provisioned to run your workload based on the chosen instance type. For
   *                     optimized resources, Compute Optimizer might recommend a new generation instance type.</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>The values that are returned might be <code>NOT_OPTIMIZED</code> or
   *                     <code>OPTIMIZED</code>.</p>
   *         </note>
   */
  finding?: Finding | string;
}

export namespace AutoScalingGroupRecommendation {
  export const filterSensitiveLog = (obj: AutoScalingGroupRecommendation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AutoScalingGroupRecommendation => __isa(o, "AutoScalingGroupRecommendation");
}

/**
 * <p>Describes a recommendation option for an Auto Scaling group.</p>
 */
export interface AutoScalingGroupRecommendationOption {
  __type?: "AutoScalingGroupRecommendationOption";
  /**
   * <p>An array of objects that describe the projected utilization metrics of the Auto Scaling group
   *             recommendation option.</p>
   */
  projectedUtilizationMetrics?: UtilizationMetric[];

  /**
   * <p>The rank of the Auto Scaling group recommendation option.</p>
   *         <p>The top recommendation option is ranked as <code>1</code>.</p>
   */
  rank?: number;

  /**
   * <p>An array of objects that describe an Auto Scaling group configuration.</p>
   */
  configuration?: AutoScalingGroupConfiguration;

  /**
   * <p>The performance risk of the Auto Scaling group configuration recommendation.</p>
   *         <p>Performance risk is the likelihood of the recommended instance type not meeting the
   *             performance requirement of your workload.</p>
   *         <p>The lowest performance risk is categorized as <code>0</code>, and the highest as
   *                 <code>5</code>.</p>
   */
  performanceRisk?: number;
}

export namespace AutoScalingGroupRecommendationOption {
  export const filterSensitiveLog = (obj: AutoScalingGroupRecommendationOption): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AutoScalingGroupRecommendationOption =>
    __isa(o, "AutoScalingGroupRecommendationOption");
}

export interface DescribeRecommendationExportJobsRequest {
  __type?: "DescribeRecommendationExportJobsRequest";
  /**
   * <p>The token to advance to the next page of export jobs.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that describe a filter to return a more specific list of export
   *             jobs.</p>
   */
  filters?: JobFilter[];

  /**
   * <p>The identification numbers of the export jobs to return.</p>
   *
   *         <p>An export job ID is returned when you create an export using the
   *                 <code>ExportAutoScalingGroupRecommendations</code> or
   *                 <code>ExportEC2InstanceRecommendations</code> actions.</p>
   *
   *         <p>All export jobs created in the last seven days are returned if this parameter is
   *             omitted.</p>
   */
  jobIds?: string[];

  /**
   * <p>The maximum number of export jobs to return with a single request.</p>
   *         <p>To retrieve the remaining results, make another request with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;
}

export namespace DescribeRecommendationExportJobsRequest {
  export const filterSensitiveLog = (obj: DescribeRecommendationExportJobsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeRecommendationExportJobsRequest =>
    __isa(o, "DescribeRecommendationExportJobsRequest");
}

export interface DescribeRecommendationExportJobsResponse {
  __type?: "DescribeRecommendationExportJobsResponse";
  /**
   * <p>The token to use to advance to the next page of export jobs.</p>
   *         <p>This value is null when there are no more pages of export jobs to return.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that describe recommendation export jobs.</p>
   */
  recommendationExportJobs?: RecommendationExportJob[];
}

export namespace DescribeRecommendationExportJobsResponse {
  export const filterSensitiveLog = (obj: DescribeRecommendationExportJobsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeRecommendationExportJobsResponse =>
    __isa(o, "DescribeRecommendationExportJobsResponse");
}

export enum ExportableAutoScalingGroupField {
  ACCOUNT_ID = "AccountId",
  AUTO_SCALING_GROUP_ARN = "AutoScalingGroupArn",
  AUTO_SCALING_GROUP_NAME = "AutoScalingGroupName",
  CURRENT_CONFIGURATION_DESIRED_CAPACITY = "CurrentConfigurationDesiredCapacity",
  CURRENT_CONFIGURATION_INSTANCE_TYPE = "CurrentConfigurationInstanceType",
  CURRENT_CONFIGURATION_MAX_SIZE = "CurrentConfigurationMaxSize",
  CURRENT_CONFIGURATION_MIN_SIZE = "CurrentConfigurationMinSize",
  CURRENT_MEMORY = "CurrentMemory",
  CURRENT_NETWORK = "CurrentNetwork",
  CURRENT_ON_DEMAND_PRICE = "CurrentOnDemandPrice",
  CURRENT_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE = "CurrentStandardOneYearNoUpfrontReservedPrice",
  CURRENT_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE = "CurrentStandardThreeYearNoUpfrontReservedPrice",
  CURRENT_STORAGE = "CurrentStorage",
  CURRENT_VCPUS = "CurrentVCpus",
  FINDING = "Finding",
  LAST_REFRESH_TIMESTAMP = "LastRefreshTimestamp",
  LOOKBACK_PERIOD_IN_DAYS = "LookbackPeriodInDays",
  RECOMMENDATION_OPTIONS_CONFIGURATION_DESIRED_CAPACITY = "RecommendationOptionsConfigurationDesiredCapacity",
  RECOMMENDATION_OPTIONS_CONFIGURATION_INSTANCE_TYPE = "RecommendationOptionsConfigurationInstanceType",
  RECOMMENDATION_OPTIONS_CONFIGURATION_MAX_SIZE = "RecommendationOptionsConfigurationMaxSize",
  RECOMMENDATION_OPTIONS_CONFIGURATION_MIN_SIZE = "RecommendationOptionsConfigurationMinSize",
  RECOMMENDATION_OPTIONS_MEMORY = "RecommendationOptionsMemory",
  RECOMMENDATION_OPTIONS_NETWORK = "RecommendationOptionsNetwork",
  RECOMMENDATION_OPTIONS_ON_DEMAND_PRICE = "RecommendationOptionsOnDemandPrice",
  RECOMMENDATION_OPTIONS_PERFORMANCE_RISK = "RecommendationOptionsPerformanceRisk",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_CPU_MAXIMUM = "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_MEMORY_MAXIMUM = "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum",
  RECOMMENDATION_OPTIONS_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE = "RecommendationOptionsStandardOneYearNoUpfrontReservedPrice",
  RECOMMENDATION_OPTIONS_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE = "RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice",
  RECOMMENDATION_OPTIONS_STORAGE = "RecommendationOptionsStorage",
  RECOMMENDATION_OPTIONS_VCPUS = "RecommendationOptionsVcpus",
  UTILIZATION_METRICS_CPU_MAXIMUM = "UtilizationMetricsCpuMaximum",
  UTILIZATION_METRICS_MEMORY_MAXIMUM = "UtilizationMetricsMemoryMaximum",
}

export enum ExportableInstanceField {
  ACCOUNT_ID = "AccountId",
  CURRENT_INSTANCE_TYPE = "CurrentInstanceType",
  CURRENT_MEMORY = "CurrentMemory",
  CURRENT_NETWORK = "CurrentNetwork",
  CURRENT_ON_DEMAND_PRICE = "CurrentOnDemandPrice",
  CURRENT_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE = "CurrentStandardOneYearNoUpfrontReservedPrice",
  CURRENT_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE = "CurrentStandardThreeYearNoUpfrontReservedPrice",
  CURRENT_STORAGE = "CurrentStorage",
  CURRENT_VCPUS = "CurrentVCpus",
  FINDING = "Finding",
  INSTANCE_ARN = "InstanceArn",
  INSTANCE_NAME = "InstanceName",
  LAST_REFRESH_TIMESTAMP = "LastRefreshTimestamp",
  LOOKBACK_PERIOD_IN_DAYS = "LookbackPeriodInDays",
  RECOMMENDATIONS_SOURCES_RECOMMENDATION_SOURCE_ARN = "RecommendationsSourcesRecommendationSourceArn",
  RECOMMENDATIONS_SOURCES_RECOMMENDATION_SOURCE_TYPE = "RecommendationsSourcesRecommendationSourceType",
  RECOMMENDATION_OPTIONS_INSTANCE_TYPE = "RecommendationOptionsInstanceType",
  RECOMMENDATION_OPTIONS_MEMORY = "RecommendationOptionsMemory",
  RECOMMENDATION_OPTIONS_NETWORK = "RecommendationOptionsNetwork",
  RECOMMENDATION_OPTIONS_ON_DEMAND_PRICE = "RecommendationOptionsOnDemandPrice",
  RECOMMENDATION_OPTIONS_PERFORMANCE_RISK = "RecommendationOptionsPerformanceRisk",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_CPU_MAXIMUM = "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_MEMORY_MAXIMUM = "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum",
  RECOMMENDATION_OPTIONS_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE = "RecommendationOptionsStandardOneYearNoUpfrontReservedPrice",
  RECOMMENDATION_OPTIONS_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE = "RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice",
  RECOMMENDATION_OPTIONS_STORAGE = "RecommendationOptionsStorage",
  RECOMMENDATION_OPTIONS_VCPUS = "RecommendationOptionsVcpus",
  UTILIZATION_METRICS_CPU_MAXIMUM = "UtilizationMetricsCpuMaximum",
  UTILIZATION_METRICS_MEMORY_MAXIMUM = "UtilizationMetricsMemoryMaximum",
}

export interface ExportAutoScalingGroupRecommendationsRequest {
  __type?: "ExportAutoScalingGroupRecommendationsRequest";
  /**
   * <p>Indicates whether to include recommendations for resources in all member accounts of
   *             the organization if your account is the master account of an organization.</p>
   *         <p>The member accounts must also be opted in to Compute Optimizer.</p>
   *         <p>Recommendations for member accounts of the organization are not included in the export
   *             file if this parameter is omitted.</p>
   *         <p>This parameter cannot be specified together with the account IDs parameter. The
   *             parameters are mutually exclusive.</p>
   *         <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the account IDs parameter, is omitted.</p>
   */
  includeMemberAccounts?: boolean;

  /**
   * <p>An object to specify the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for
   *             the export job.</p>
   *         <p>You must create the destination Amazon S3 bucket for your recommendations export before you
   *             create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the
   *             S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the
   *             export file to it. If you plan to specify an object prefix when you create the export
   *             job, you must include the object prefix in the policy that you add to the S3 bucket. For
   *             more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer user
   *             guide</i>.</p>
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * <p>The format of the export file.</p>
   *         <p>The only export file format currently supported is <code>Csv</code>.</p>
   */
  fileFormat?: FileFormat | string;

  /**
   * <p>The recommendations data to include in the export file.</p>
   */
  fieldsToExport?: (ExportableAutoScalingGroupField | string)[];

  /**
   * <p>The IDs of the AWS accounts for which to export Auto Scaling group recommendations.</p>
   *         <p>If your account is the master account of an organization, use this parameter to
   *             specify the member accounts for which you want to export recommendations.</p>
   *         <p>This parameter cannot be specified together with the include member accounts
   *             parameter. The parameters are mutually exclusive.</p>
   *         <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the include member accounts parameter, is omitted.</p>
   *         <p>You can specify multiple account IDs per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>An array of objects that describe a filter to export a more specific set of Auto Scaling group
   *             recommendations.</p>
   */
  filters?: Filter[];
}

export namespace ExportAutoScalingGroupRecommendationsRequest {
  export const filterSensitiveLog = (obj: ExportAutoScalingGroupRecommendationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExportAutoScalingGroupRecommendationsRequest =>
    __isa(o, "ExportAutoScalingGroupRecommendationsRequest");
}

export interface ExportAutoScalingGroupRecommendationsResponse {
  __type?: "ExportAutoScalingGroupRecommendationsResponse";
  /**
   * <p>An object that describes the destination Amazon S3 bucket of a recommendations export
   *             file.</p>
   */
  s3Destination?: S3Destination;

  /**
   * <p>The identification number of the export job.</p>
   *         <p>Use the <code>DescribeRecommendationExportJobs</code> action, and specify the job ID
   *             to view the status of an export job.</p>
   */
  jobId?: string;
}

export namespace ExportAutoScalingGroupRecommendationsResponse {
  export const filterSensitiveLog = (obj: ExportAutoScalingGroupRecommendationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExportAutoScalingGroupRecommendationsResponse =>
    __isa(o, "ExportAutoScalingGroupRecommendationsResponse");
}

/**
 * <p>Describes the destination of the recommendations export and metadata files.</p>
 */
export interface ExportDestination {
  __type?: "ExportDestination";
  /**
   * <p>An object that describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys
   *             of a recommendations export file, and its associated metadata file.</p>
   */
  s3?: S3Destination;
}

export namespace ExportDestination {
  export const filterSensitiveLog = (obj: ExportDestination): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExportDestination => __isa(o, "ExportDestination");
}

export interface ExportEC2InstanceRecommendationsRequest {
  __type?: "ExportEC2InstanceRecommendationsRequest";
  /**
   * <p>The IDs of the AWS accounts for which to export instance recommendations.</p>
   *         <p>If your account is the master account of an organization, use this parameter to
   *             specify the member accounts for which you want to export recommendations.</p>
   *         <p>This parameter cannot be specified together with the include member accounts
   *             parameter. The parameters are mutually exclusive.</p>
   *         <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the include member accounts parameter, is omitted.</p>
   *         <p>You can specify multiple account IDs per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>The format of the export file.</p>
   *         <p>The only export file format currently supported is <code>Csv</code>.</p>
   */
  fileFormat?: FileFormat | string;

  /**
   * <p>The recommendations data to include in the export file.</p>
   */
  fieldsToExport?: (ExportableInstanceField | string)[];

  /**
   * <p>Indicates whether to include recommendations for resources in all member accounts of
   *             the organization if your account is the master account of an organization.</p>
   *         <p>The member accounts must also be opted in to Compute Optimizer.</p>
   *         <p>Recommendations for member accounts of the organization are not included in the export
   *             file if this parameter is omitted.</p>
   *         <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the account IDs parameter, is omitted.</p>
   */
  includeMemberAccounts?: boolean;

  /**
   * <p>An array of objects that describe a filter to export a more specific set of instance
   *             recommendations.</p>
   */
  filters?: Filter[];

  /**
   * <p>An object to specify the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for
   *             the export job.</p>
   *         <p>You must create the destination Amazon S3 bucket for your recommendations export before you
   *             create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the
   *             S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the
   *             export file to it. If you plan to specify an object prefix when you create the export
   *             job, you must include the object prefix in the policy that you add to the S3 bucket. For
   *             more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer user
   *             guide</i>.</p>
   */
  s3DestinationConfig: S3DestinationConfig | undefined;
}

export namespace ExportEC2InstanceRecommendationsRequest {
  export const filterSensitiveLog = (obj: ExportEC2InstanceRecommendationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExportEC2InstanceRecommendationsRequest =>
    __isa(o, "ExportEC2InstanceRecommendationsRequest");
}

export interface ExportEC2InstanceRecommendationsResponse {
  __type?: "ExportEC2InstanceRecommendationsResponse";
  /**
   * <p>The identification number of the export job.</p>
   *         <p>Use the <code>DescribeRecommendationExportJobs</code> action, and specify the job ID
   *             to view the status of an export job.</p>
   */
  jobId?: string;

  /**
   * <p>An object that describes the destination Amazon S3 bucket of a recommendations export
   *             file.</p>
   */
  s3Destination?: S3Destination;
}

export namespace ExportEC2InstanceRecommendationsResponse {
  export const filterSensitiveLog = (obj: ExportEC2InstanceRecommendationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExportEC2InstanceRecommendationsResponse =>
    __isa(o, "ExportEC2InstanceRecommendationsResponse");
}

export enum FileFormat {
  CSV = "Csv",
}

/**
 * <p>Describes a filter that returns a more specific list of recommendations.</p>
 */
export interface Filter {
  __type?: "Filter";
  /**
   * <p>The name of the filter.</p>
   *         <p>Specify <code>Finding</code> to return recommendations with a specific findings
   *             classification (e.g., <code>Overprovisioned</code>).</p>
   *         <p>Specify <code>RecommendationSourceType</code> to return recommendations of a specific
   *             resource type (e.g., <code>AutoScalingGroup</code>).</p>
   */
  name?: FilterName | string;

  /**
   * <p>The value of the filter.</p>
   *         <p>If you specify the <code>name</code> parameter as <code>Finding</code>, and you
   *             request recommendations for an <i>instance</i>, then the valid values are
   *                 <code>Underprovisioned</code>, <code>Overprovisioned</code>,
   *                 <code>NotOptimized</code>, or <code>Optimized</code>.</p>
   *         <p>If you specify the <code>name</code> parameter as <code>Finding</code>, and you
   *             request recommendations for an <i>Auto Scaling group</i>, then the valid values
   *             are <code>Optimized</code>, or <code>NotOptimized</code>.</p>
   *         <p>If you specify the <code>name</code> parameter as
   *                 <code>RecommendationSourceType</code>, then the valid values are
   *                 <code>Ec2Instance</code>, or <code>AutoScalingGroup</code>.</p>
   */
  values?: string[];
}

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Filter => __isa(o, "Filter");
}

export enum FilterName {
  FINDING = "Finding",
  RECOMMENDATION_SOURCE_TYPE = "RecommendationSourceType",
}

export enum Finding {
  NOT_OPTIMIZED = "NotOptimized",
  OPTIMIZED = "Optimized",
  OVER_PROVISIONED = "Overprovisioned",
  UNDER_PROVISIONED = "Underprovisioned",
}

export interface GetAutoScalingGroupRecommendationsRequest {
  __type?: "GetAutoScalingGroupRecommendationsRequest";
  /**
   * <p>The maximum number of Auto Scaling group recommendations to return with a single
   *             request.</p>
   *         <p>To retrieve the remaining results, make another request with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>An array of objects that describe a filter that returns a more specific list of Auto Scaling
   *             group recommendations.</p>
   */
  filters?: Filter[];

  /**
   * <p>The token to advance to the next page of Auto Scaling group recommendations.</p>
   */
  nextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Auto Scaling groups for which to return
   *             recommendations.</p>
   */
  autoScalingGroupArns?: string[];

  /**
   * <p>The IDs of the AWS accounts for which to return Auto Scaling group recommendations.</p>
   *         <p>If your account is the master account of an organization, use this parameter to
   *             specify the member accounts for which you want to return Auto Scaling group
   *             recommendations.</p>
   *         <p>Only one account ID can be specified per request.</p>
   */
  accountIds?: string[];
}

export namespace GetAutoScalingGroupRecommendationsRequest {
  export const filterSensitiveLog = (obj: GetAutoScalingGroupRecommendationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAutoScalingGroupRecommendationsRequest =>
    __isa(o, "GetAutoScalingGroupRecommendationsRequest");
}

export interface GetAutoScalingGroupRecommendationsResponse {
  __type?: "GetAutoScalingGroupRecommendationsResponse";
  /**
   * <p>An array of objects that describe errors of the request.</p>
   *         <p>For example, an error is returned if you request recommendations for an unsupported
   *             Auto Scaling group.</p>
   */
  errors?: GetRecommendationError[];

  /**
   * <p>The token to use to advance to the next page of Auto Scaling group recommendations.</p>
   *         <p>This value is null when there are no more pages of Auto Scaling group recommendations to
   *             return.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that describe Auto Scaling group recommendations.</p>
   */
  autoScalingGroupRecommendations?: AutoScalingGroupRecommendation[];
}

export namespace GetAutoScalingGroupRecommendationsResponse {
  export const filterSensitiveLog = (obj: GetAutoScalingGroupRecommendationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAutoScalingGroupRecommendationsResponse =>
    __isa(o, "GetAutoScalingGroupRecommendationsResponse");
}

export interface GetEC2InstanceRecommendationsRequest {
  __type?: "GetEC2InstanceRecommendationsRequest";
  /**
   * <p>The token to advance to the next page of instance recommendations.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of instance recommendations to return with a single request.</p>
   *         <p>To retrieve the remaining results, make another request with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The IDs of the AWS accounts for which to return instance recommendations.</p>
   *         <p>If your account is the master account of an organization, use this parameter to
   *             specify the member accounts for which you want to return instance
   *             recommendations.</p>
   *         <p>Only one account ID can be specified per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the instances for which to return
   *             recommendations.</p>
   */
  instanceArns?: string[];

  /**
   * <p>An array of objects that describe a filter that returns a more specific list of
   *             instance recommendations.</p>
   */
  filters?: Filter[];
}

export namespace GetEC2InstanceRecommendationsRequest {
  export const filterSensitiveLog = (obj: GetEC2InstanceRecommendationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEC2InstanceRecommendationsRequest =>
    __isa(o, "GetEC2InstanceRecommendationsRequest");
}

export interface GetEC2InstanceRecommendationsResponse {
  __type?: "GetEC2InstanceRecommendationsResponse";
  /**
   * <p>An array of objects that describe instance recommendations.</p>
   */
  instanceRecommendations?: InstanceRecommendation[];

  /**
   * <p>An array of objects that describe errors of the request.</p>
   *         <p>For example, an error is returned if you request recommendations for an instance of an
   *             unsupported instance family.</p>
   */
  errors?: GetRecommendationError[];

  /**
   * <p>The token to use to advance to the next page of instance recommendations.</p>
   *         <p>This value is null when there are no more pages of instance recommendations to
   *             return.</p>
   */
  nextToken?: string;
}

export namespace GetEC2InstanceRecommendationsResponse {
  export const filterSensitiveLog = (obj: GetEC2InstanceRecommendationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEC2InstanceRecommendationsResponse =>
    __isa(o, "GetEC2InstanceRecommendationsResponse");
}

export interface GetEC2RecommendationProjectedMetricsRequest {
  __type?: "GetEC2RecommendationProjectedMetricsRequest";
  /**
   * <p>The time stamp of the last projected metrics data point to return.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The time stamp of the first projected metrics data point to return.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The granularity, in seconds, of the projected metrics data points.</p>
   */
  period: number | undefined;

  /**
   * <p>The statistic of the projected metrics.</p>
   */
  stat: MetricStatistic | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the instances for which to return recommendation
   *             projected metrics.</p>
   */
  instanceArn: string | undefined;
}

export namespace GetEC2RecommendationProjectedMetricsRequest {
  export const filterSensitiveLog = (obj: GetEC2RecommendationProjectedMetricsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEC2RecommendationProjectedMetricsRequest =>
    __isa(o, "GetEC2RecommendationProjectedMetricsRequest");
}

export interface GetEC2RecommendationProjectedMetricsResponse {
  __type?: "GetEC2RecommendationProjectedMetricsResponse";
  /**
   * <p>An array of objects that describe a projected metrics.</p>
   */
  recommendedOptionProjectedMetrics?: RecommendedOptionProjectedMetric[];
}

export namespace GetEC2RecommendationProjectedMetricsResponse {
  export const filterSensitiveLog = (obj: GetEC2RecommendationProjectedMetricsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEC2RecommendationProjectedMetricsResponse =>
    __isa(o, "GetEC2RecommendationProjectedMetricsResponse");
}

export interface GetEnrollmentStatusRequest {
  __type?: "GetEnrollmentStatusRequest";
}

export namespace GetEnrollmentStatusRequest {
  export const filterSensitiveLog = (obj: GetEnrollmentStatusRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEnrollmentStatusRequest => __isa(o, "GetEnrollmentStatusRequest");
}

export interface GetEnrollmentStatusResponse {
  __type?: "GetEnrollmentStatusResponse";
  /**
   * <p>The reason for the enrollment status of the account.</p>
   *         <p>For example, an account might show a status of <code>Pending</code> because member
   *             accounts of an organization require more time to be enrolled in the service.</p>
   */
  statusReason?: string;

  /**
   * <p>Confirms the enrollment status of member accounts within the organization, if the
   *             account is a master account of an organization.</p>
   */
  memberAccountsEnrolled?: boolean;

  /**
   * <p>The enrollment status of the account.</p>
   */
  status?: Status | string;
}

export namespace GetEnrollmentStatusResponse {
  export const filterSensitiveLog = (obj: GetEnrollmentStatusResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEnrollmentStatusResponse => __isa(o, "GetEnrollmentStatusResponse");
}

/**
 * <p>Describes an error experienced when getting recommendations.</p>
 *         <p>For example, an error is returned if you request recommendations for an unsupported
 *             Auto Scaling group, or if you request recommendations for an instance of an unsupported instance
 *             family.</p>
 */
export interface GetRecommendationError {
  __type?: "GetRecommendationError";
  /**
   * <p>The message, or reason, for the error.</p>
   */
  message?: string;

  /**
   * <p>The error code.</p>
   */
  code?: string;

  /**
   * <p>The ID of the error.</p>
   */
  identifier?: string;
}

export namespace GetRecommendationError {
  export const filterSensitiveLog = (obj: GetRecommendationError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRecommendationError => __isa(o, "GetRecommendationError");
}

export interface GetRecommendationSummariesRequest {
  __type?: "GetRecommendationSummariesRequest";
  /**
   * <p>The maximum number of recommendation summaries to return with a single request.</p>
   *         <p>To retrieve the remaining results, make another request with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to advance to the next page of recommendation summaries.</p>
   */
  nextToken?: string;

  /**
   * <p>The IDs of the AWS accounts for which to return recommendation summaries.</p>
   *         <p>If your account is the master account of an organization, use this parameter to
   *             specify the member accounts for which you want to return recommendation
   *             summaries.</p>
   *         <p>Only one account ID can be specified per request.</p>
   */
  accountIds?: string[];
}

export namespace GetRecommendationSummariesRequest {
  export const filterSensitiveLog = (obj: GetRecommendationSummariesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRecommendationSummariesRequest => __isa(o, "GetRecommendationSummariesRequest");
}

export interface GetRecommendationSummariesResponse {
  __type?: "GetRecommendationSummariesResponse";
  /**
   * <p>An array of objects that summarize a recommendation.</p>
   */
  recommendationSummaries?: RecommendationSummary[];

  /**
   * <p>The token to use to advance to the next page of recommendation summaries.</p>
   *         <p>This value is null when there are no more pages of recommendation summaries to
   *             return.</p>
   */
  nextToken?: string;
}

export namespace GetRecommendationSummariesResponse {
  export const filterSensitiveLog = (obj: GetRecommendationSummariesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRecommendationSummariesResponse =>
    __isa(o, "GetRecommendationSummariesResponse");
}

/**
 * <p>Describes an Amazon EC2 instance recommendation.</p>
 */
export interface InstanceRecommendation {
  __type?: "InstanceRecommendation";
  /**
   * <p>The time stamp of when the instance recommendation was last refreshed.</p>
   */
  lastRefreshTimestamp?: Date;

  /**
   * <p>The finding classification for the instance.</p>
   *         <p>Findings for instances include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>Underprovisioned</code>
   *                   </b>—An instance is
   *                     considered under-provisioned when at least one specification of your instance,
   *                     such as CPU, memory, or network, does not meet the performance requirements of
   *                     your workload. Under-provisioned instances may lead to poor application
   *                     performance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>Overprovisioned</code>
   *                   </b>—An instance is
   *                     considered over-provisioned when at least one specification of your instance,
   *                     such as CPU, memory, or network, can be sized down while still meeting the
   *                     performance requirements of your workload, and no specification is
   *                     under-provisioned. Over-provisioned instances may lead to unnecessary
   *                     infrastructure cost.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>Optimized</code>
   *                   </b>—An instance is
   *                     considered optimized when all specifications of your instance, such as CPU,
   *                     memory, and network, meet the performance requirements of your workload and is
   *                     not over provisioned. An optimized instance runs your workloads with optimal
   *                     performance and infrastructure cost. For optimized resources, AWS Compute Optimizer might
   *                     recommend a new generation instance type.</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>The values that are returned might be <code>UNDER_PROVISIONED</code>,
   *                     <code>OVER_PROVISIONED</code>, or <code>OPTIMIZED</code>.</p>
   *         </note>
   */
  finding?: Finding | string;

  /**
   * <p>An array of objects that describe the recommendation options for the instance.</p>
   */
  recommendationOptions?: InstanceRecommendationOption[];

  /**
   * <p>An array of objects that describe the source resource of the recommendation.</p>
   */
  recommendationSources?: RecommendationSource[];

  /**
   * <p>An array of objects that describe the utilization metrics of the instance.</p>
   */
  utilizationMetrics?: UtilizationMetric[];

  /**
   * <p>The name of the current instance.</p>
   */
  instanceName?: string;

  /**
   * <p>The instance type of the current instance.</p>
   */
  currentInstanceType?: string;

  /**
   * <p>The AWS account ID of the instance.</p>
   */
  accountId?: string;

  /**
   * <p>The number of days for which utilization metrics were analyzed for the
   *             instance.</p>
   */
  lookBackPeriodInDays?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the current instance.</p>
   */
  instanceArn?: string;
}

export namespace InstanceRecommendation {
  export const filterSensitiveLog = (obj: InstanceRecommendation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InstanceRecommendation => __isa(o, "InstanceRecommendation");
}

/**
 * <p>Describes a recommendation option for an Amazon EC2 instance.</p>
 */
export interface InstanceRecommendationOption {
  __type?: "InstanceRecommendationOption";
  /**
   * <p>The rank of the instance recommendation option.</p>
   *         <p>The top recommendation option is ranked as <code>1</code>.</p>
   */
  rank?: number;

  /**
   * <p>The instance type of the instance recommendation.</p>
   */
  instanceType?: string;

  /**
   * <p>An array of objects that describe the projected utilization metrics of the instance
   *             recommendation option.</p>
   */
  projectedUtilizationMetrics?: UtilizationMetric[];

  /**
   * <p>The performance risk of the instance recommendation option.</p>
   *         <p>Performance risk is the likelihood of the recommended instance type not meeting the
   *             performance requirement of your workload.</p>
   *         <p>The lowest performance risk is categorized as <code>0</code>, and the highest as
   *                 <code>5</code>.</p>
   */
  performanceRisk?: number;
}

export namespace InstanceRecommendationOption {
  export const filterSensitiveLog = (obj: InstanceRecommendationOption): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InstanceRecommendationOption => __isa(o, "InstanceRecommendationOption");
}

/**
 * <p>An internal error has occurred. Try your call again.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerException => __isa(o, "InternalServerException");
}

/**
 * <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 */
export interface InvalidParameterValueException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterValueException {
  export const filterSensitiveLog = (obj: InvalidParameterValueException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidParameterValueException => __isa(o, "InvalidParameterValueException");
}

/**
 * <p>Describes a filter that returns a more specific list of recommendation export
 *             jobs.</p>
 *         <p>This filter is used with the <code>DescribeRecommendationExportJobs</code>
 *             action.</p>
 */
export interface JobFilter {
  __type?: "JobFilter";
  /**
   * <p>The value of the filter.</p>
   *         <p>If you specify the <code>name</code> parameter as <code>ResourceType</code>, the valid
   *             values are <code>Ec2Instance</code> or <code>AutoScalingGroup</code>.</p>
   *         <p>If you specify the <code>name</code> parameter as <code>JobStatus</code>, the valid
   *             values are <code>Queued</code>, <code>InProgress</code>, <code>Complete</code>, or
   *                 <code>Failed</code>.</p>
   */
  values?: string[];

  /**
   * <p>The name of the filter.</p>
   *         <p>Specify <code>ResourceType</code> to return export jobs of a specific resource type
   *             (e.g., <code>Ec2Instance</code>).</p>
   *         <p>Specify <code>JobStatus</code> to return export jobs with a specific status (e.g,
   *                 <code>Complete</code>).</p>
   */
  name?: JobFilterName | string;
}

export namespace JobFilter {
  export const filterSensitiveLog = (obj: JobFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JobFilter => __isa(o, "JobFilter");
}

export enum JobFilterName {
  JOB_STATUS = "JobStatus",
  RESOURCE_TYPE = "ResourceType",
}

export enum JobStatus {
  COMPLETE = "Complete",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  QUEUED = "Queued",
}

/**
 * <p>The request exceeds a limit of the service.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LimitExceededException => __isa(o, "LimitExceededException");
}

export enum MetricName {
  CPU = "Cpu",
  MEMORY = "Memory",
}

export enum MetricStatistic {
  AVERAGE = "Average",
  MAXIMUM = "Maximum",
}

/**
 * <p>The request must contain either a valid (registered) AWS access key ID or X.509
 *             certificate.</p>
 */
export interface MissingAuthenticationToken extends __SmithyException, $MetadataBearer {
  name: "MissingAuthenticationToken";
  $fault: "client";
  message?: string;
}

export namespace MissingAuthenticationToken {
  export const filterSensitiveLog = (obj: MissingAuthenticationToken): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MissingAuthenticationToken => __isa(o, "MissingAuthenticationToken");
}

/**
 * <p>The account is not opted in to AWS Compute Optimizer.</p>
 */
export interface OptInRequiredException extends __SmithyException, $MetadataBearer {
  name: "OptInRequiredException";
  $fault: "client";
  message?: string;
}

export namespace OptInRequiredException {
  export const filterSensitiveLog = (obj: OptInRequiredException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OptInRequiredException => __isa(o, "OptInRequiredException");
}

/**
 * <p>Describes a projected utilization metric of a recommendation option, such as an Amazon EC2
 *             instance.</p>
 */
export interface ProjectedMetric {
  __type?: "ProjectedMetric";
  /**
   * <p>The time stamps of the projected utilization metric.</p>
   */
  timestamps?: Date[];

  /**
   * <p>The name of the projected utilization metric.</p>
   *         <note>
   *             <p>Memory metrics are only returned for resources that have the unified CloudWatch agent
   *                 installed on them. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html">Enabling Memory Utilization with the CloudWatch Agent</a>.</p>
   *         </note>
   */
  name?: MetricName | string;

  /**
   * <p>The values of the projected utilization metrics.</p>
   */
  values?: number[];
}

export namespace ProjectedMetric {
  export const filterSensitiveLog = (obj: ProjectedMetric): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProjectedMetric => __isa(o, "ProjectedMetric");
}

/**
 * <p>Describes a recommendation export job.</p>
 *
 *
 *         <p>Use the <code>DescribeRecommendationExportJobs</code> action to view your
 *             recommendation export jobs.</p>
 *
 *
 *         <p>Use the <code>ExportAutoScalingGroupRecommendations</code> or
 *                 <code>ExportEC2InstanceRecommendations</code> actions to request an export of your
 *             recommendations.</p>
 */
export interface RecommendationExportJob {
  __type?: "RecommendationExportJob";
  /**
   * <p>The reason for an export job failure.</p>
   */
  failureReason?: string;

  /**
   * <p>The status of the export job.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>The timestamp of when the export job was last updated.</p>
   */
  lastUpdatedTimestamp?: Date;

  /**
   * <p>An object that describes the destination of the export file.</p>
   */
  destination?: ExportDestination;

  /**
   * <p>The resource type of the exported recommendations.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The identification number of the export job.</p>
   */
  jobId?: string;

  /**
   * <p>The timestamp of when the export job was created.</p>
   */
  creationTimestamp?: Date;
}

export namespace RecommendationExportJob {
  export const filterSensitiveLog = (obj: RecommendationExportJob): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RecommendationExportJob => __isa(o, "RecommendationExportJob");
}

/**
 * <p>Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling
 *             group.</p>
 */
export interface RecommendationSource {
  __type?: "RecommendationSource";
  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation source.</p>
   */
  recommendationSourceArn?: string;

  /**
   * <p>The resource type of the recommendation source.</p>
   */
  recommendationSourceType?: RecommendationSourceType | string;
}

export namespace RecommendationSource {
  export const filterSensitiveLog = (obj: RecommendationSource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RecommendationSource => __isa(o, "RecommendationSource");
}

export enum RecommendationSourceType {
  AUTO_SCALING_GROUP = "AutoScalingGroup",
  EC2_INSTANCE = "Ec2Instance",
}

/**
 * <p>A summary of a recommendation.</p>
 */
export interface RecommendationSummary {
  __type?: "RecommendationSummary";
  /**
   * <p>The AWS account ID of the recommendation summary.</p>
   */
  accountId?: string;

  /**
   * <p>An array of objects that describe a recommendation summary.</p>
   */
  summaries?: Summary[];

  /**
   * <p>The resource type of the recommendation.</p>
   */
  recommendationResourceType?: RecommendationSourceType | string;
}

export namespace RecommendationSummary {
  export const filterSensitiveLog = (obj: RecommendationSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RecommendationSummary => __isa(o, "RecommendationSummary");
}

/**
 * <p>Describes a projected utilization metric of a recommendation option.</p>
 */
export interface RecommendedOptionProjectedMetric {
  __type?: "RecommendedOptionProjectedMetric";
  /**
   * <p>The recommended instance type.</p>
   */
  recommendedInstanceType?: string;

  /**
   * <p>An array of objects that describe a projected utilization metric.</p>
   */
  projectedMetrics?: ProjectedMetric[];

  /**
   * <p>The rank of the recommendation option projected metric.</p>
   *         <p>The top recommendation option is ranked as <code>1</code>.</p>
   *         <p>The projected metric rank correlates to the recommendation option rank. For example,
   *             the projected metric ranked as <code>1</code> is related to the recommendation option
   *             that is also ranked as <code>1</code> in the same response.</p>
   */
  rank?: number;
}

export namespace RecommendedOptionProjectedMetric {
  export const filterSensitiveLog = (obj: RecommendedOptionProjectedMetric): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RecommendedOptionProjectedMetric => __isa(o, "RecommendedOptionProjectedMetric");
}

/**
 * <p>A resource that is required for the action doesn't exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

export enum ResourceType {
  AUTO_SCALING_GROUP = "AutoScalingGroup",
  EC2_INSTANCE = "Ec2Instance",
}

/**
 * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a
 *             recommendations export file, and its associated metadata file.</p>
 */
export interface S3Destination {
  __type?: "S3Destination";
  /**
   * <p>The Amazon S3 bucket key of a metadata file.</p>
   *         <p>The key uniquely identifies the object, or metadata file, in the S3 bucket.</p>
   */
  metadataKey?: string;

  /**
   * <p>The Amazon S3 bucket key of an export file.</p>
   *         <p>The key uniquely identifies the object, or export file, in the S3 bucket.</p>
   */
  key?: string;

  /**
   * <p>The name of the Amazon S3 bucket used as the destination of an export file.</p>
   */
  bucket?: string;
}

export namespace S3Destination {
  export const filterSensitiveLog = (obj: S3Destination): any => ({
    ...obj,
  });
  export const isa = (o: any): o is S3Destination => __isa(o, "S3Destination");
}

/**
 * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a
 *             recommendations export job.</p>
 *         <p>You must create the destination Amazon S3 bucket for your recommendations export before you
 *             create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the
 *             S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the
 *             export file to it. If you plan to specify an object prefix when you create the export
 *             job, you must include the object prefix in the policy that you add to the S3 bucket. For
 *             more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer user
 *             guide</i>.</p>
 */
export interface S3DestinationConfig {
  __type?: "S3DestinationConfig";
  /**
   * <p>The Amazon S3 bucket prefix for an export job.</p>
   */
  keyPrefix?: string;

  /**
   * <p>The name of the Amazon S3 bucket to use as the destination for an export job.</p>
   */
  bucket?: string;
}

export namespace S3DestinationConfig {
  export const filterSensitiveLog = (obj: S3DestinationConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is S3DestinationConfig => __isa(o, "S3DestinationConfig");
}

/**
 * <p>The request has failed due to a temporary failure of the server.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceUnavailableException => __isa(o, "ServiceUnavailableException");
}

export enum Status {
  ACTIVE = "Active",
  FAILED = "Failed",
  INACTIVE = "Inactive",
  PENDING = "Pending",
}

/**
 * <p>The summary of a recommendation.</p>
 */
export interface Summary {
  __type?: "Summary";
  /**
   * <p>The value of the recommendation summary.</p>
   */
  value?: number;

  /**
   * <p>The finding classification of the recommendation.</p>
   */
  name?: Finding | string;
}

export namespace Summary {
  export const filterSensitiveLog = (obj: Summary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Summary => __isa(o, "Summary");
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message: string | undefined;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ThrottlingException => __isa(o, "ThrottlingException");
}

export interface UpdateEnrollmentStatusRequest {
  __type?: "UpdateEnrollmentStatusRequest";
  /**
   * <p>The new enrollment status of the account.</p>
   *         <p>Accepted options are <code>Active</code> or <code>Inactive</code>. You will get an
   *             error if <code>Pending</code> or <code>Failed</code> are specified.</p>
   */
  status: Status | string | undefined;

  /**
   * <p>Indicates whether to enroll member accounts of the organization if the your account is
   *             the master account of an organization.</p>
   */
  includeMemberAccounts?: boolean;
}

export namespace UpdateEnrollmentStatusRequest {
  export const filterSensitiveLog = (obj: UpdateEnrollmentStatusRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEnrollmentStatusRequest => __isa(o, "UpdateEnrollmentStatusRequest");
}

export interface UpdateEnrollmentStatusResponse {
  __type?: "UpdateEnrollmentStatusResponse";
  /**
   * <p>The reason for the enrollment status of the account. For example, an account might
   *             show a status of <code>Pending</code> because member accounts of an organization require
   *             more time to be enrolled in the service.</p>
   */
  statusReason?: string;

  /**
   * <p>The enrollment status of the account.</p>
   */
  status?: Status | string;
}

export namespace UpdateEnrollmentStatusResponse {
  export const filterSensitiveLog = (obj: UpdateEnrollmentStatusResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEnrollmentStatusResponse => __isa(o, "UpdateEnrollmentStatusResponse");
}

/**
 * <p>Describes a utilization metric of a resource, such as an Amazon EC2 instance.</p>
 */
export interface UtilizationMetric {
  __type?: "UtilizationMetric";
  /**
   * <p>The value of the utilization metric.</p>
   */
  value?: number;

  /**
   * <p>The name of the utilization metric.</p>
   *         <note>
   *             <p>Memory metrics are only returned for resources that have the unified CloudWatch agent
   *                 installed on them. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html">Enabling Memory Utilization with the CloudWatch Agent</a>.</p>
   *         </note>
   */
  name?: MetricName | string;

  /**
   * <p>The statistic of the utilization metric.</p>
   */
  statistic?: MetricStatistic | string;
}

export namespace UtilizationMetric {
  export const filterSensitiveLog = (obj: UtilizationMetric): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UtilizationMetric => __isa(o, "UtilizationMetric");
}
