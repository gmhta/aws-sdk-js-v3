import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateGameSessionQueueInput, CreateGameSessionQueueOutput } from "../models/index";
import {
  deserializeAws_json1_1CreateGameSessionQueueCommand,
  serializeAws_json1_1CreateGameSessionQueueCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreateGameSessionQueueCommandInput = CreateGameSessionQueueInput;
export type CreateGameSessionQueueCommandOutput = CreateGameSessionQueueOutput & __MetadataBearer;

export class CreateGameSessionQueueCommand extends $Command<
  CreateGameSessionQueueCommandInput,
  CreateGameSessionQueueCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateGameSessionQueueCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateGameSessionQueueCommandInput, CreateGameSessionQueueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateGameSessionQueueInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateGameSessionQueueOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGameSessionQueueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateGameSessionQueueCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGameSessionQueueCommandOutput> {
    return deserializeAws_json1_1CreateGameSessionQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
