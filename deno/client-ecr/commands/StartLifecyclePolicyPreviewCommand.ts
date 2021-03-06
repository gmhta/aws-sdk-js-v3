
import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient.ts";
import { StartLifecyclePolicyPreviewRequest, StartLifecyclePolicyPreviewResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1StartLifecyclePolicyPreviewCommand,
  serializeAws_json1_1StartLifecyclePolicyPreviewCommand,
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

export type StartLifecyclePolicyPreviewCommandInput = StartLifecyclePolicyPreviewRequest;
export type StartLifecyclePolicyPreviewCommandOutput = StartLifecyclePolicyPreviewResponse & __MetadataBearer;

export class StartLifecyclePolicyPreviewCommand extends $Command<
  StartLifecyclePolicyPreviewCommandInput,
  StartLifecyclePolicyPreviewCommandOutput,
  ECRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartLifecyclePolicyPreviewCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartLifecyclePolicyPreviewCommandInput, StartLifecyclePolicyPreviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: StartLifecyclePolicyPreviewRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartLifecyclePolicyPreviewResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartLifecyclePolicyPreviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartLifecyclePolicyPreviewCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartLifecyclePolicyPreviewCommandOutput> {
    return deserializeAws_json1_1StartLifecyclePolicyPreviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
