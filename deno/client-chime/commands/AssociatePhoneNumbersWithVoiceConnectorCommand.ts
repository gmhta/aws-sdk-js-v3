
import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import {
  AssociatePhoneNumbersWithVoiceConnectorRequest,
  AssociatePhoneNumbersWithVoiceConnectorResponse,
} from "../models/index.ts";
import {
  deserializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorCommand,
  serializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorCommand,
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

export type AssociatePhoneNumbersWithVoiceConnectorCommandInput = AssociatePhoneNumbersWithVoiceConnectorRequest;
export type AssociatePhoneNumbersWithVoiceConnectorCommandOutput = AssociatePhoneNumbersWithVoiceConnectorResponse &
  __MetadataBearer;

export class AssociatePhoneNumbersWithVoiceConnectorCommand extends $Command<
  AssociatePhoneNumbersWithVoiceConnectorCommandInput,
  AssociatePhoneNumbersWithVoiceConnectorCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociatePhoneNumbersWithVoiceConnectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    AssociatePhoneNumbersWithVoiceConnectorCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: AssociatePhoneNumbersWithVoiceConnectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociatePhoneNumbersWithVoiceConnectorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorCommandOutput> {
    return deserializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
