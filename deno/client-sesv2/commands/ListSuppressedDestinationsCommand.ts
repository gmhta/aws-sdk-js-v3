
import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client.ts";
import { ListSuppressedDestinationsRequest, ListSuppressedDestinationsResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1ListSuppressedDestinationsCommand,
  serializeAws_restJson1ListSuppressedDestinationsCommand,
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

export type ListSuppressedDestinationsCommandInput = ListSuppressedDestinationsRequest;
export type ListSuppressedDestinationsCommandOutput = ListSuppressedDestinationsResponse & __MetadataBearer;

export class ListSuppressedDestinationsCommand extends $Command<
  ListSuppressedDestinationsCommandInput,
  ListSuppressedDestinationsCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSuppressedDestinationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSuppressedDestinationsCommandInput, ListSuppressedDestinationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListSuppressedDestinationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSuppressedDestinationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSuppressedDestinationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSuppressedDestinationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSuppressedDestinationsCommandOutput> {
    return deserializeAws_restJson1ListSuppressedDestinationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
