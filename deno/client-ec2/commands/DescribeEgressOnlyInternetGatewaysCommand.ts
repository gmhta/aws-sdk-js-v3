
import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { DescribeEgressOnlyInternetGatewaysRequest, DescribeEgressOnlyInternetGatewaysResult } from "../models/index.ts";
import {
  deserializeAws_ec2DescribeEgressOnlyInternetGatewaysCommand,
  serializeAws_ec2DescribeEgressOnlyInternetGatewaysCommand,
} from "../protocols/Aws_ec2.ts";
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

export type DescribeEgressOnlyInternetGatewaysCommandInput = DescribeEgressOnlyInternetGatewaysRequest;
export type DescribeEgressOnlyInternetGatewaysCommandOutput = DescribeEgressOnlyInternetGatewaysResult &
  __MetadataBearer;

export class DescribeEgressOnlyInternetGatewaysCommand extends $Command<
  DescribeEgressOnlyInternetGatewaysCommandInput,
  DescribeEgressOnlyInternetGatewaysCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEgressOnlyInternetGatewaysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEgressOnlyInternetGatewaysCommandInput, DescribeEgressOnlyInternetGatewaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeEgressOnlyInternetGatewaysRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEgressOnlyInternetGatewaysResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeEgressOnlyInternetGatewaysCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeEgressOnlyInternetGatewaysCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEgressOnlyInternetGatewaysCommandOutput> {
    return deserializeAws_ec2DescribeEgressOnlyInternetGatewaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
