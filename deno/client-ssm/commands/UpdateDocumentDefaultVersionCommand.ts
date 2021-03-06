
import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { UpdateDocumentDefaultVersionRequest, UpdateDocumentDefaultVersionResult } from "../models/index.ts";
import {
  deserializeAws_json1_1UpdateDocumentDefaultVersionCommand,
  serializeAws_json1_1UpdateDocumentDefaultVersionCommand,
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

export type UpdateDocumentDefaultVersionCommandInput = UpdateDocumentDefaultVersionRequest;
export type UpdateDocumentDefaultVersionCommandOutput = UpdateDocumentDefaultVersionResult & __MetadataBearer;

export class UpdateDocumentDefaultVersionCommand extends $Command<
  UpdateDocumentDefaultVersionCommandInput,
  UpdateDocumentDefaultVersionCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDocumentDefaultVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDocumentDefaultVersionCommandInput, UpdateDocumentDefaultVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdateDocumentDefaultVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDocumentDefaultVersionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDocumentDefaultVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDocumentDefaultVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDocumentDefaultVersionCommandOutput> {
    return deserializeAws_json1_1UpdateDocumentDefaultVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
