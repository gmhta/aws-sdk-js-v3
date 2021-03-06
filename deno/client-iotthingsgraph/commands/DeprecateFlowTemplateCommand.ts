
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient.ts";
import { DeprecateFlowTemplateRequest, DeprecateFlowTemplateResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1DeprecateFlowTemplateCommand,
  serializeAws_json1_1DeprecateFlowTemplateCommand,
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

export type DeprecateFlowTemplateCommandInput = DeprecateFlowTemplateRequest;
export type DeprecateFlowTemplateCommandOutput = DeprecateFlowTemplateResponse & __MetadataBearer;

export class DeprecateFlowTemplateCommand extends $Command<
  DeprecateFlowTemplateCommandInput,
  DeprecateFlowTemplateCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeprecateFlowTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeprecateFlowTemplateCommandInput, DeprecateFlowTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeprecateFlowTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeprecateFlowTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeprecateFlowTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeprecateFlowTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeprecateFlowTemplateCommandOutput> {
    return deserializeAws_json1_1DeprecateFlowTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
