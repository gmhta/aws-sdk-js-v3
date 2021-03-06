
import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient.ts";
import { DeleteMessageRequest } from "../models/index.ts";
import {
  deserializeAws_queryDeleteMessageCommand,
  serializeAws_queryDeleteMessageCommand,
} from "../protocols/Aws_query.ts";
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

export type DeleteMessageCommandInput = DeleteMessageRequest;
export type DeleteMessageCommandOutput = __MetadataBearer;

export class DeleteMessageCommand extends $Command<
  DeleteMessageCommandInput,
  DeleteMessageCommandOutput,
  SQSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SQSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMessageCommandInput, DeleteMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeleteMessageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteMessageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMessageCommandOutput> {
    return deserializeAws_queryDeleteMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
