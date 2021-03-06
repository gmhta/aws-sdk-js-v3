
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient.ts";
import { UpdateGcmChannelRequest, UpdateGcmChannelResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1UpdateGcmChannelCommand,
  serializeAws_restJson1UpdateGcmChannelCommand,
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

export type UpdateGcmChannelCommandInput = UpdateGcmChannelRequest;
export type UpdateGcmChannelCommandOutput = UpdateGcmChannelResponse & __MetadataBearer;

export class UpdateGcmChannelCommand extends $Command<
  UpdateGcmChannelCommandInput,
  UpdateGcmChannelCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateGcmChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateGcmChannelCommandInput, UpdateGcmChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdateGcmChannelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateGcmChannelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGcmChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateGcmChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGcmChannelCommandOutput> {
    return deserializeAws_restJson1UpdateGcmChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
