
import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient.ts";
import { DeleteCapacityProviderRequest, DeleteCapacityProviderResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1DeleteCapacityProviderCommand,
  serializeAws_json1_1DeleteCapacityProviderCommand,
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

export type DeleteCapacityProviderCommandInput = DeleteCapacityProviderRequest;
export type DeleteCapacityProviderCommandOutput = DeleteCapacityProviderResponse & __MetadataBearer;

export class DeleteCapacityProviderCommand extends $Command<
  DeleteCapacityProviderCommandInput,
  DeleteCapacityProviderCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCapacityProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCapacityProviderCommandInput, DeleteCapacityProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeleteCapacityProviderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteCapacityProviderResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCapacityProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteCapacityProviderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCapacityProviderCommandOutput> {
    return deserializeAws_json1_1DeleteCapacityProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
