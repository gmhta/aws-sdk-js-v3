
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { UpdateFleetCapacityInput, UpdateFleetCapacityOutput } from "../models/index.ts";
import {
  deserializeAws_json1_1UpdateFleetCapacityCommand,
  serializeAws_json1_1UpdateFleetCapacityCommand,
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

export type UpdateFleetCapacityCommandInput = UpdateFleetCapacityInput;
export type UpdateFleetCapacityCommandOutput = UpdateFleetCapacityOutput & __MetadataBearer;

export class UpdateFleetCapacityCommand extends $Command<
  UpdateFleetCapacityCommandInput,
  UpdateFleetCapacityCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFleetCapacityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFleetCapacityCommandInput, UpdateFleetCapacityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdateFleetCapacityInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFleetCapacityOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFleetCapacityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateFleetCapacityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFleetCapacityCommandOutput> {
    return deserializeAws_json1_1UpdateFleetCapacityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
