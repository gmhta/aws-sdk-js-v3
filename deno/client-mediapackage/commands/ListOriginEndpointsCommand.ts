
import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient.ts";
import { ListOriginEndpointsRequest, ListOriginEndpointsResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1ListOriginEndpointsCommand,
  serializeAws_restJson1ListOriginEndpointsCommand,
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

export type ListOriginEndpointsCommandInput = ListOriginEndpointsRequest;
export type ListOriginEndpointsCommandOutput = ListOriginEndpointsResponse & __MetadataBearer;

export class ListOriginEndpointsCommand extends $Command<
  ListOriginEndpointsCommandInput,
  ListOriginEndpointsCommandOutput,
  MediaPackageClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListOriginEndpointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOriginEndpointsCommandInput, ListOriginEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListOriginEndpointsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListOriginEndpointsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOriginEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListOriginEndpointsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOriginEndpointsCommandOutput> {
    return deserializeAws_restJson1ListOriginEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
