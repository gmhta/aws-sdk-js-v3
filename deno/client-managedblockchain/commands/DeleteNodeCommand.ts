
import {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient.ts";
import { DeleteNodeInput, DeleteNodeOutput } from "../models/index.ts";
import {
  deserializeAws_restJson1DeleteNodeCommand,
  serializeAws_restJson1DeleteNodeCommand,
} from "../protocols/Aws_restJson1.ts";
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

export type DeleteNodeCommandInput = DeleteNodeInput;
export type DeleteNodeCommandOutput = DeleteNodeOutput & __MetadataBearer;

export class DeleteNodeCommand extends $Command<
  DeleteNodeCommandInput,
  DeleteNodeCommandOutput,
  ManagedBlockchainClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteNodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ManagedBlockchainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteNodeCommandInput, DeleteNodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeleteNodeInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteNodeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteNodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteNodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteNodeCommandOutput> {
    return deserializeAws_restJson1DeleteNodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
