
import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient.ts";
import { GetRecoveryPointRestoreMetadataInput, GetRecoveryPointRestoreMetadataOutput } from "../models/index.ts";
import {
  deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommand,
  serializeAws_restJson1GetRecoveryPointRestoreMetadataCommand,
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

export type GetRecoveryPointRestoreMetadataCommandInput = GetRecoveryPointRestoreMetadataInput;
export type GetRecoveryPointRestoreMetadataCommandOutput = GetRecoveryPointRestoreMetadataOutput & __MetadataBearer;

export class GetRecoveryPointRestoreMetadataCommand extends $Command<
  GetRecoveryPointRestoreMetadataCommandInput,
  GetRecoveryPointRestoreMetadataCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRecoveryPointRestoreMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRecoveryPointRestoreMetadataCommandInput, GetRecoveryPointRestoreMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetRecoveryPointRestoreMetadataInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetRecoveryPointRestoreMetadataOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetRecoveryPointRestoreMetadataCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRecoveryPointRestoreMetadataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRecoveryPointRestoreMetadataCommandOutput> {
    return deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
