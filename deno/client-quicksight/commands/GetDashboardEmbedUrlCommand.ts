
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient.ts";
import { GetDashboardEmbedUrlRequest, GetDashboardEmbedUrlResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1GetDashboardEmbedUrlCommand,
  serializeAws_restJson1GetDashboardEmbedUrlCommand,
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

export type GetDashboardEmbedUrlCommandInput = GetDashboardEmbedUrlRequest;
export type GetDashboardEmbedUrlCommandOutput = GetDashboardEmbedUrlResponse & __MetadataBearer;

export class GetDashboardEmbedUrlCommand extends $Command<
  GetDashboardEmbedUrlCommandInput,
  GetDashboardEmbedUrlCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDashboardEmbedUrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDashboardEmbedUrlCommandInput, GetDashboardEmbedUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetDashboardEmbedUrlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDashboardEmbedUrlResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDashboardEmbedUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDashboardEmbedUrlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDashboardEmbedUrlCommandOutput> {
    return deserializeAws_restJson1GetDashboardEmbedUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
