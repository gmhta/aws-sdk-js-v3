
import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient.ts";
import { DescribeEventsForOrganizationRequest, DescribeEventsForOrganizationResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1DescribeEventsForOrganizationCommand,
  serializeAws_json1_1DescribeEventsForOrganizationCommand,
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

export type DescribeEventsForOrganizationCommandInput = DescribeEventsForOrganizationRequest;
export type DescribeEventsForOrganizationCommandOutput = DescribeEventsForOrganizationResponse & __MetadataBearer;

export class DescribeEventsForOrganizationCommand extends $Command<
  DescribeEventsForOrganizationCommandInput,
  DescribeEventsForOrganizationCommandOutput,
  HealthClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEventsForOrganizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventsForOrganizationCommandInput, DescribeEventsForOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeEventsForOrganizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEventsForOrganizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEventsForOrganizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEventsForOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEventsForOrganizationCommandOutput> {
    return deserializeAws_json1_1DescribeEventsForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
