
import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { ListTypedLinkFacetNamesRequest, ListTypedLinkFacetNamesResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1ListTypedLinkFacetNamesCommand,
  serializeAws_restJson1ListTypedLinkFacetNamesCommand,
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

export type ListTypedLinkFacetNamesCommandInput = ListTypedLinkFacetNamesRequest;
export type ListTypedLinkFacetNamesCommandOutput = ListTypedLinkFacetNamesResponse & __MetadataBearer;

export class ListTypedLinkFacetNamesCommand extends $Command<
  ListTypedLinkFacetNamesCommandInput,
  ListTypedLinkFacetNamesCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTypedLinkFacetNamesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTypedLinkFacetNamesCommandInput, ListTypedLinkFacetNamesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListTypedLinkFacetNamesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTypedLinkFacetNamesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTypedLinkFacetNamesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTypedLinkFacetNamesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTypedLinkFacetNamesCommandOutput> {
    return deserializeAws_restJson1ListTypedLinkFacetNamesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
