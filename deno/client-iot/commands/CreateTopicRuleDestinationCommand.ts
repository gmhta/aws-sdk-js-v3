
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { CreateTopicRuleDestinationRequest, CreateTopicRuleDestinationResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1CreateTopicRuleDestinationCommand,
  serializeAws_restJson1CreateTopicRuleDestinationCommand,
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

export type CreateTopicRuleDestinationCommandInput = CreateTopicRuleDestinationRequest;
export type CreateTopicRuleDestinationCommandOutput = CreateTopicRuleDestinationResponse & __MetadataBearer;

export class CreateTopicRuleDestinationCommand extends $Command<
  CreateTopicRuleDestinationCommandInput,
  CreateTopicRuleDestinationCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTopicRuleDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTopicRuleDestinationCommandInput, CreateTopicRuleDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateTopicRuleDestinationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTopicRuleDestinationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTopicRuleDestinationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateTopicRuleDestinationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTopicRuleDestinationCommandOutput> {
    return deserializeAws_restJson1CreateTopicRuleDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
