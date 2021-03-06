
import {
  MarketplaceCommerceAnalyticsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceCommerceAnalyticsClient.ts";
import { GenerateDataSetRequest, GenerateDataSetResult } from "../models/index.ts";
import {
  deserializeAws_json1_1GenerateDataSetCommand,
  serializeAws_json1_1GenerateDataSetCommand,
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

export type GenerateDataSetCommandInput = GenerateDataSetRequest;
export type GenerateDataSetCommandOutput = GenerateDataSetResult & __MetadataBearer;

export class GenerateDataSetCommand extends $Command<
  GenerateDataSetCommandInput,
  GenerateDataSetCommandOutput,
  MarketplaceCommerceAnalyticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GenerateDataSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceCommerceAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GenerateDataSetCommandInput, GenerateDataSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GenerateDataSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GenerateDataSetResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GenerateDataSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GenerateDataSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GenerateDataSetCommandOutput> {
    return deserializeAws_json1_1GenerateDataSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
