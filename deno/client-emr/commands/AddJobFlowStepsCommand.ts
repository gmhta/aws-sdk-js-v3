
import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient.ts";
import { AddJobFlowStepsInput, AddJobFlowStepsOutput } from "../models/index.ts";
import {
  deserializeAws_json1_1AddJobFlowStepsCommand,
  serializeAws_json1_1AddJobFlowStepsCommand,
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

export type AddJobFlowStepsCommandInput = AddJobFlowStepsInput;
export type AddJobFlowStepsCommandOutput = AddJobFlowStepsOutput & __MetadataBearer;

export class AddJobFlowStepsCommand extends $Command<
  AddJobFlowStepsCommandInput,
  AddJobFlowStepsCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddJobFlowStepsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddJobFlowStepsCommandInput, AddJobFlowStepsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: AddJobFlowStepsInput.filterSensitiveLog,
      outputFilterSensitiveLog: AddJobFlowStepsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddJobFlowStepsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddJobFlowStepsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddJobFlowStepsCommandOutput> {
    return deserializeAws_json1_1AddJobFlowStepsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
