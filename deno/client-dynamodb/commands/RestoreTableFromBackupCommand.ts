
import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient.ts";
import { RestoreTableFromBackupInput, RestoreTableFromBackupOutput } from "../models/index.ts";
import {
  deserializeAws_json1_0RestoreTableFromBackupCommand,
  serializeAws_json1_0RestoreTableFromBackupCommand,
} from "../protocols/Aws_json1_0.ts";
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

export type RestoreTableFromBackupCommandInput = RestoreTableFromBackupInput;
export type RestoreTableFromBackupCommandOutput = RestoreTableFromBackupOutput & __MetadataBearer;

export class RestoreTableFromBackupCommand extends $Command<
  RestoreTableFromBackupCommandInput,
  RestoreTableFromBackupCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreTableFromBackupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreTableFromBackupCommandInput, RestoreTableFromBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: RestoreTableFromBackupInput.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreTableFromBackupOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreTableFromBackupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0RestoreTableFromBackupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreTableFromBackupCommandOutput> {
    return deserializeAws_json1_0RestoreTableFromBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
