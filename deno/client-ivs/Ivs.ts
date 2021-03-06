
import { IvsClient } from "./IvsClient.ts";
import {
  BatchGetChannelCommand,
  BatchGetChannelCommandInput,
  BatchGetChannelCommandOutput,
} from "./commands/BatchGetChannelCommand.ts";
import {
  BatchGetStreamKeyCommand,
  BatchGetStreamKeyCommandInput,
  BatchGetStreamKeyCommandOutput,
} from "./commands/BatchGetStreamKeyCommand.ts";
import {
  CreateChannelCommand,
  CreateChannelCommandInput,
  CreateChannelCommandOutput,
} from "./commands/CreateChannelCommand.ts";
import {
  CreateStreamKeyCommand,
  CreateStreamKeyCommandInput,
  CreateStreamKeyCommandOutput,
} from "./commands/CreateStreamKeyCommand.ts";
import {
  DeleteChannelCommand,
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput,
} from "./commands/DeleteChannelCommand.ts";
import {
  DeleteStreamKeyCommand,
  DeleteStreamKeyCommandInput,
  DeleteStreamKeyCommandOutput,
} from "./commands/DeleteStreamKeyCommand.ts";
import { GetChannelCommand, GetChannelCommandInput, GetChannelCommandOutput } from "./commands/GetChannelCommand.ts";
import { GetStreamCommand, GetStreamCommandInput, GetStreamCommandOutput } from "./commands/GetStreamCommand.ts";
import {
  GetStreamKeyCommand,
  GetStreamKeyCommandInput,
  GetStreamKeyCommandOutput,
} from "./commands/GetStreamKeyCommand.ts";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "./commands/ListChannelsCommand.ts";
import {
  ListStreamKeysCommand,
  ListStreamKeysCommandInput,
  ListStreamKeysCommandOutput,
} from "./commands/ListStreamKeysCommand.ts";
import { ListStreamsCommand, ListStreamsCommandInput, ListStreamsCommandOutput } from "./commands/ListStreamsCommand.ts";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { PutMetadataCommand, PutMetadataCommandInput, PutMetadataCommandOutput } from "./commands/PutMetadataCommand.ts";
import { StopStreamCommand, StopStreamCommandInput, StopStreamCommandOutput } from "./commands/StopStreamCommand.ts";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand.ts";
import {
  UpdateChannelCommand,
  UpdateChannelCommandInput,
  UpdateChannelCommandOutput,
} from "./commands/UpdateChannelCommand.ts";
import { HttpHandlerOptions as __HttpHandlerOptions } from "../types/mod.ts";

/**
 * <p>
 *             <b>Introduction</b>
 *          </p>
 *
 *          <p>The Amazon Interactive Video Service (IVS) API is REST compatible, using a standard HTTP
 *       API and an <a href="http://aws.amazon.com/sns">AWS SNS</a> event stream for responses. JSON
 *       is used for both requests and responses, including errors.</p>
 *
 *          <p>The API is an AWS regional service, currently in these regions: us-west-2, us-east-1, and
 *       eu-west-1.</p>
 *          <p>
 *             <i>
 *                <b>All API request parameters and URLs are case sensitive.
 *         </b>
 *             </i>
 *          </p>
 *
 *          <p>For a summary of notable documentation changes in each release, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/doc-history.html"> Document
 *       History</a>.</p>
 *
 *          <p>
 *             <b>Service Endpoints</b>
 *          </p>
 *          <p>The following are the Amazon IVS service endpoints (all HTTPS): </p>
 *          <p>Region name: US West (Oregon)</p>
 *          <ul>
 *             <li>
 *                <p>Region: <code>us-west-2</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Endpoint: <code>ivs.us-west-2.amazonaws.com</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Region name: US East (Virginia)</p>
 *          <ul>
 *             <li>
 *                <p>Region: <code>us-east-1</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Endpoint: <code>ivs.us-east-1.amazonaws.com</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Region name: EU West (Dublin)</p>
 *          <ul>
 *             <li>
 *                <p>Region: <code>eu-west-1</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Endpoint: <code>ivs.eu-west-1.amazonaws.com</code>
 *                </p>
 *             </li>
 *          </ul>
 *
 *          <p>
 *             <b>Allowed Header Values</b>
 *          </p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>
 *                      <b>Accept:</b>
 *                   </code> application/json</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <b>Accept-Encoding:</b>
 *                   </code> gzip, deflate</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <b>Content-Type:</b>
 *                   </code>application/json</p>
 *             </li>
 *          </ul>
 *
 *          <p>
 *             <b>Resources</b>
 *          </p>
 *          <p>The following resources contain information about your IVS live stream (see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/GSIVS.html"> Getting Started with Amazon
 *         IVS</a>):</p>
 *
 *          <ul>
 *             <li>
 *                <p>Channel — Stores configuration data related to your live stream. You first create a
 *           channel and then use the channel’s stream key to start your live stream. See the <a>Channel</a> endpoints for more information. </p>
 *             </li>
 *             <li>
 *                <p>Stream key — An identifier assigned by Amazon IVS when you create a channel, which is
 *           then used to authorize streaming. See the <a>StreamKey</a> endpoints for more
 *           information. <i>
 *                      <b>Treat the stream key like a secret, since it
 *               allows anyone to stream to the channel.</b>
 *                   </i>
 *                </p>
 *             </li>
 *          </ul>
 *
 *
 *
 *          <p>
 *             <b>Tagging</b>
 *          </p>
 *
 *          <p>A <i>tag</i> is a metadata label that you assign to an AWS resource. A tag
 *       comprises a <i>key</i> and a <i>value</i>, both set by you. For
 *       example, you might set a tag as <code>topic:nature</code> to label a particular video
 *       category. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
 *         Resources</a> for more information, including restrictions that apply to tags.</p>
 *
 *          <p>Tags can help you identify and organize your AWS resources. For example, you can use the
 *       same tag for different resources to indicate that they are related. You can also use tags to
 *       manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">
 *         Access Tags</a>). </p>
 *
 *          <p>The Amazon IVS API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and <a>ListTagsForResource</a>. The following
 *       resources support tagging: Channels and Stream Keys.</p>
 *
 *          <p>
 *             <b>API Endpoints</b>
 *          </p>
 *
 *          <p>
 *             <a>Channel</a>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateChannel</a> — Creates a new channel and an associated stream
 *           key to start streaming.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetChannel</a> — Gets the channel configuration for the specified
 *           channel ARN (Amazon Resource Name).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>BatchGetChannel</a> — Performs <a>GetChannel</a> on
 *           multiple ARNs simultaneously.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListChannels</a> — Gets summary information about all channels in
 *           your account, in the AWS region where the API request is processed. This list can be
 *           filtered to match a specified string.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateChannel</a> — Updates a channel's configuration. This does
 *           not affect an ongoing stream of this channel. You must stop and restart the stream for the
 *           changes to take effect.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteChannel</a> — Deletes the specified channel.</p>
 *             </li>
 *          </ul>
 *
 *          <p>
 *             <a>StreamKey</a>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateStreamKey</a> — Creates a stream key, used to initiate a
 *           stream, for the specified channel ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetStreamKey</a> — Gets stream key information for the specified
 *           ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>BatchGetStreamKey</a> — Performs <a>GetStreamKey</a> on
 *           multiple ARNs simultaneously.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListStreamKeys</a> — Gets summary information about stream keys
 *           for the specified channel.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteStreamKey</a> — Deletes the stream key for the specified
 *           ARN, so it can no longer be used to stream.</p>
 *             </li>
 *          </ul>
 *
 *
 *          <p>
 *             <a>Stream</a>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetStream</a> — Gets information about the active (live) stream on
 *           a specified channel.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListStreams</a> — Gets summary information about live streams in
 *           your account, in the AWS region where the API request is processed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StopStream</a> — Disconnects the incoming RTMPS stream for the specified channel.  Can be used in conjunction
 *           with <a>DeleteStreamKey</a> to prevent further streaming to a channel.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutMetadata</a> — Inserts metadata into an RTMPS stream for the specified
 *           channel. A maximum of 5 requests per second per channel is allowed, each with a maximum
 *           1KB payload.</p>
 *             </li>
 *          </ul>
 *
 *
 *
 *          <p>
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> AWS
 *       Tags</a>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>TagResource</a> — Adds or updates tags for the AWS resource with the specified ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UntagResource</a> — Removes tags from the resource with the specified ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTagsForResource</a> — Gets information about AWS tags for the specified ARN.</p>
 *             </li>
 *          </ul>
 */
export class Ivs extends IvsClient {
  /**
   * <p>Performs <a>GetChannel</a> on multiple ARNs simultaneously.</p>
   */
  public batchGetChannel(
    args: BatchGetChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetChannelCommandOutput>;
  public batchGetChannel(
    args: BatchGetChannelCommandInput,
    cb: (err: any, data?: BatchGetChannelCommandOutput) => void
  ): void;
  public batchGetChannel(
    args: BatchGetChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetChannelCommandOutput) => void
  ): void;
  public batchGetChannel(
    args: BatchGetChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetChannelCommandOutput) => void),
    cb?: (err: any, data?: BatchGetChannelCommandOutput) => void
  ): Promise<BatchGetChannelCommandOutput> | void {
    const command = new BatchGetChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Performs <a>GetStreamKey</a> on multiple ARNs simultaneously.</p>
   */
  public batchGetStreamKey(
    args: BatchGetStreamKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetStreamKeyCommandOutput>;
  public batchGetStreamKey(
    args: BatchGetStreamKeyCommandInput,
    cb: (err: any, data?: BatchGetStreamKeyCommandOutput) => void
  ): void;
  public batchGetStreamKey(
    args: BatchGetStreamKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetStreamKeyCommandOutput) => void
  ): void;
  public batchGetStreamKey(
    args: BatchGetStreamKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetStreamKeyCommandOutput) => void),
    cb?: (err: any, data?: BatchGetStreamKeyCommandOutput) => void
  ): Promise<BatchGetStreamKeyCommandOutput> | void {
    const command = new BatchGetStreamKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new channel and an associated stream key to start streaming.</p>
   */
  public createChannel(
    args: CreateChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelCommandOutput>;
  public createChannel(
    args: CreateChannelCommandInput,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  public createChannel(
    args: CreateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  public createChannel(
    args: CreateChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateChannelCommandOutput) => void),
    cb?: (err: any, data?: CreateChannelCommandOutput) => void
  ): Promise<CreateChannelCommandOutput> | void {
    const command = new CreateChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a stream key, used to initiate a stream, for the specified channel ARN.</p>
   *          <p>Note that <a>CreateChannel</a> creates a stream key. If you subsequently use
   *       CreateStreamKey on the same channel, it will fail because a stream key already exists and
   *       there is a limit of 1 stream key per channel. To reset the stream key on a channel, use <a>DeleteStreamKey</a> and then CreateStreamKey.</p>
   */
  public createStreamKey(
    args: CreateStreamKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamKeyCommandOutput>;
  public createStreamKey(
    args: CreateStreamKeyCommandInput,
    cb: (err: any, data?: CreateStreamKeyCommandOutput) => void
  ): void;
  public createStreamKey(
    args: CreateStreamKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamKeyCommandOutput) => void
  ): void;
  public createStreamKey(
    args: CreateStreamKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStreamKeyCommandOutput) => void),
    cb?: (err: any, data?: CreateStreamKeyCommandOutput) => void
  ): Promise<CreateStreamKeyCommandOutput> | void {
    const command = new CreateStreamKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified channel and its associated stream keys.</p>
   */
  public deleteChannel(
    args: DeleteChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelCommandOutput>;
  public deleteChannel(
    args: DeleteChannelCommandInput,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  public deleteChannel(
    args: DeleteChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  public deleteChannel(
    args: DeleteChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteChannelCommandOutput) => void),
    cb?: (err: any, data?: DeleteChannelCommandOutput) => void
  ): Promise<DeleteChannelCommandOutput> | void {
    const command = new DeleteChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the stream key for the specified ARN, so it can no longer be used to
   *       stream.</p>
   */
  public deleteStreamKey(
    args: DeleteStreamKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStreamKeyCommandOutput>;
  public deleteStreamKey(
    args: DeleteStreamKeyCommandInput,
    cb: (err: any, data?: DeleteStreamKeyCommandOutput) => void
  ): void;
  public deleteStreamKey(
    args: DeleteStreamKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamKeyCommandOutput) => void
  ): void;
  public deleteStreamKey(
    args: DeleteStreamKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStreamKeyCommandOutput) => void),
    cb?: (err: any, data?: DeleteStreamKeyCommandOutput) => void
  ): Promise<DeleteStreamKeyCommandOutput> | void {
    const command = new DeleteStreamKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the channel configuration for the specified channel ARN. See also <a>BatchGetChannel</a>.</p>
   */
  public getChannel(args: GetChannelCommandInput, options?: __HttpHandlerOptions): Promise<GetChannelCommandOutput>;
  public getChannel(args: GetChannelCommandInput, cb: (err: any, data?: GetChannelCommandOutput) => void): void;
  public getChannel(
    args: GetChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelCommandOutput) => void
  ): void;
  public getChannel(
    args: GetChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetChannelCommandOutput) => void),
    cb?: (err: any, data?: GetChannelCommandOutput) => void
  ): Promise<GetChannelCommandOutput> | void {
    const command = new GetChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the active (live) stream on a specified channel.</p>
   */
  public getStream(args: GetStreamCommandInput, options?: __HttpHandlerOptions): Promise<GetStreamCommandOutput>;
  public getStream(args: GetStreamCommandInput, cb: (err: any, data?: GetStreamCommandOutput) => void): void;
  public getStream(
    args: GetStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamCommandOutput) => void
  ): void;
  public getStream(
    args: GetStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStreamCommandOutput) => void),
    cb?: (err: any, data?: GetStreamCommandOutput) => void
  ): Promise<GetStreamCommandOutput> | void {
    const command = new GetStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets stream-key information for a specified ARN.</p>
   */
  public getStreamKey(
    args: GetStreamKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamKeyCommandOutput>;
  public getStreamKey(args: GetStreamKeyCommandInput, cb: (err: any, data?: GetStreamKeyCommandOutput) => void): void;
  public getStreamKey(
    args: GetStreamKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamKeyCommandOutput) => void
  ): void;
  public getStreamKey(
    args: GetStreamKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStreamKeyCommandOutput) => void),
    cb?: (err: any, data?: GetStreamKeyCommandOutput) => void
  ): Promise<GetStreamKeyCommandOutput> | void {
    const command = new GetStreamKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets summary information about all channels in your account, in the AWS region where the
   *       API request is processed. This list can be filtered to match a specified string.</p>
   */
  public listChannels(
    args: ListChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelsCommandOutput>;
  public listChannels(args: ListChannelsCommandInput, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
  public listChannels(
    args: ListChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;
  public listChannels(
    args: ListChannelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChannelsCommandOutput) => void),
    cb?: (err: any, data?: ListChannelsCommandOutput) => void
  ): Promise<ListChannelsCommandOutput> | void {
    const command = new ListChannelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets summary information about stream keys for the specified channel.</p>
   */
  public listStreamKeys(
    args: ListStreamKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamKeysCommandOutput>;
  public listStreamKeys(
    args: ListStreamKeysCommandInput,
    cb: (err: any, data?: ListStreamKeysCommandOutput) => void
  ): void;
  public listStreamKeys(
    args: ListStreamKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamKeysCommandOutput) => void
  ): void;
  public listStreamKeys(
    args: ListStreamKeysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStreamKeysCommandOutput) => void),
    cb?: (err: any, data?: ListStreamKeysCommandOutput) => void
  ): Promise<ListStreamKeysCommandOutput> | void {
    const command = new ListStreamKeysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets summary information about live streams in your account, in the AWS region where the
   *       API request is processed.</p>
   */
  public listStreams(args: ListStreamsCommandInput, options?: __HttpHandlerOptions): Promise<ListStreamsCommandOutput>;
  public listStreams(args: ListStreamsCommandInput, cb: (err: any, data?: ListStreamsCommandOutput) => void): void;
  public listStreams(
    args: ListStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
  ): void;
  public listStreams(
    args: ListStreamsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStreamsCommandOutput) => void),
    cb?: (err: any, data?: ListStreamsCommandOutput) => void
  ): Promise<ListStreamsCommandOutput> | void {
    const command = new ListStreamsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about AWS tags for the specified ARN.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Inserts metadata into an RTMPS stream for the specified channel. A maximum of 5 requests
   *       per second per channel is allowed, each with a maximum 1KB payload.</p>
   */
  public putMetadata(args: PutMetadataCommandInput, options?: __HttpHandlerOptions): Promise<PutMetadataCommandOutput>;
  public putMetadata(args: PutMetadataCommandInput, cb: (err: any, data?: PutMetadataCommandOutput) => void): void;
  public putMetadata(
    args: PutMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMetadataCommandOutput) => void
  ): void;
  public putMetadata(
    args: PutMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutMetadataCommandOutput) => void),
    cb?: (err: any, data?: PutMetadataCommandOutput) => void
  ): Promise<PutMetadataCommandOutput> | void {
    const command = new PutMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with <a>DeleteStreamKey</a> to
   *       prevent further streaming to a channel.</p>
   *          <note>
   *             <p>Many streaming client-software libraries automatically reconnect a dropped RTMPS
   *         session, so to stop the stream permanently, you may want to first revoke the
   *           <code>streamKey</code> attached to the channel.</p>
   *          </note>
   */
  public stopStream(args: StopStreamCommandInput, options?: __HttpHandlerOptions): Promise<StopStreamCommandOutput>;
  public stopStream(args: StopStreamCommandInput, cb: (err: any, data?: StopStreamCommandOutput) => void): void;
  public stopStream(
    args: StopStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopStreamCommandOutput) => void
  ): void;
  public stopStream(
    args: StopStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopStreamCommandOutput) => void),
    cb?: (err: any, data?: StopStreamCommandOutput) => void
  ): Promise<StopStreamCommandOutput> | void {
    const command = new StopStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds or updates tags for the AWS resource with the specified ARN.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes tags from the resource with the specified ARN.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a channel's configuration. This does not affect an ongoing stream of this channel.
   *       You must stop and restart the stream for the changes to take effect.</p>
   */
  public updateChannel(
    args: UpdateChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelCommandOutput>;
  public updateChannel(
    args: UpdateChannelCommandInput,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  public updateChannel(
    args: UpdateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  public updateChannel(
    args: UpdateChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateChannelCommandOutput) => void),
    cb?: (err: any, data?: UpdateChannelCommandOutput) => void
  ): Promise<UpdateChannelCommandOutput> | void {
    const command = new UpdateChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
