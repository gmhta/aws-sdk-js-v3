
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient.ts";
import { GetCampaignDateRangeKpiRequest, GetCampaignDateRangeKpiResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1GetCampaignDateRangeKpiCommand,
  serializeAws_restJson1GetCampaignDateRangeKpiCommand,
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

export type GetCampaignDateRangeKpiCommandInput = GetCampaignDateRangeKpiRequest;
export type GetCampaignDateRangeKpiCommandOutput = GetCampaignDateRangeKpiResponse & __MetadataBearer;

export class GetCampaignDateRangeKpiCommand extends $Command<
  GetCampaignDateRangeKpiCommandInput,
  GetCampaignDateRangeKpiCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCampaignDateRangeKpiCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCampaignDateRangeKpiCommandInput, GetCampaignDateRangeKpiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetCampaignDateRangeKpiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCampaignDateRangeKpiResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCampaignDateRangeKpiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCampaignDateRangeKpiCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCampaignDateRangeKpiCommandOutput> {
    return deserializeAws_restJson1GetCampaignDateRangeKpiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
