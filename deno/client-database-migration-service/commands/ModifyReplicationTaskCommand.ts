
import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient.ts";
import { ModifyReplicationTaskMessage, ModifyReplicationTaskResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1ModifyReplicationTaskCommand,
  serializeAws_json1_1ModifyReplicationTaskCommand,
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

export type ModifyReplicationTaskCommandInput = ModifyReplicationTaskMessage;
export type ModifyReplicationTaskCommandOutput = ModifyReplicationTaskResponse & __MetadataBearer;

export class ModifyReplicationTaskCommand extends $Command<
  ModifyReplicationTaskCommandInput,
  ModifyReplicationTaskCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyReplicationTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyReplicationTaskCommandInput, ModifyReplicationTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ModifyReplicationTaskMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyReplicationTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyReplicationTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ModifyReplicationTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyReplicationTaskCommandOutput> {
    return deserializeAws_json1_1ModifyReplicationTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
