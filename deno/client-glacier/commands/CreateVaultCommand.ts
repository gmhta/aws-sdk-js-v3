
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient.ts";
import { CreateVaultInput, CreateVaultOutput } from "../models/index.ts";
import {
  deserializeAws_restJson1CreateVaultCommand,
  serializeAws_restJson1CreateVaultCommand,
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

export type CreateVaultCommandInput = CreateVaultInput;
export type CreateVaultCommandOutput = CreateVaultOutput & __MetadataBearer;

export class CreateVaultCommand extends $Command<
  CreateVaultCommandInput,
  CreateVaultCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVaultCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVaultCommandInput, CreateVaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateVaultInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVaultOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVaultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateVaultCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVaultCommandOutput> {
    return deserializeAws_restJson1CreateVaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
