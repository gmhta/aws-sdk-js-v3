
import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient.ts";
import { DescribeEventSourceRequest, DescribeEventSourceResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1DescribeEventSourceCommand,
  serializeAws_json1_1DescribeEventSourceCommand,
} from "../protocols/Aws_json1_1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export type DescribeEventSourceCommandInput = DescribeEventSourceRequest;
export type DescribeEventSourceCommandOutput = DescribeEventSourceResponse & __MetadataBearer;

export class DescribeEventSourceCommand extends $Command<
  DescribeEventSourceCommandInput,
  DescribeEventSourceCommandOutput,
  CloudWatchEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEventSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventSourceCommandInput, DescribeEventSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEventSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEventSourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEventSourceCommandOutput> {
    return deserializeAws_json1_1DescribeEventSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
