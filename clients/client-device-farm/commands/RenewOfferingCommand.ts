import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { RenewOfferingRequest, RenewOfferingResult } from "../models/index";
import {
  deserializeAws_json1_1RenewOfferingCommand,
  serializeAws_json1_1RenewOfferingCommand,
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

export type RenewOfferingCommandInput = RenewOfferingRequest;
export type RenewOfferingCommandOutput = RenewOfferingResult & __MetadataBearer;

export class RenewOfferingCommand extends $Command<
  RenewOfferingCommandInput,
  RenewOfferingCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RenewOfferingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RenewOfferingCommandInput, RenewOfferingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: RenewOfferingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RenewOfferingResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RenewOfferingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RenewOfferingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RenewOfferingCommandOutput> {
    return deserializeAws_json1_1RenewOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
