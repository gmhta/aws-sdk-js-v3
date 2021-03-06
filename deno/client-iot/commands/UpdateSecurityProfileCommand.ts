
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { UpdateSecurityProfileRequest, UpdateSecurityProfileResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1UpdateSecurityProfileCommand,
  serializeAws_restJson1UpdateSecurityProfileCommand,
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

export type UpdateSecurityProfileCommandInput = UpdateSecurityProfileRequest;
export type UpdateSecurityProfileCommandOutput = UpdateSecurityProfileResponse & __MetadataBearer;

export class UpdateSecurityProfileCommand extends $Command<
  UpdateSecurityProfileCommandInput,
  UpdateSecurityProfileCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSecurityProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSecurityProfileCommandInput, UpdateSecurityProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdateSecurityProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSecurityProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSecurityProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSecurityProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSecurityProfileCommandOutput> {
    return deserializeAws_restJson1UpdateSecurityProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
