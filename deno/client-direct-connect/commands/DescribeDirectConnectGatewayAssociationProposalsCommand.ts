
import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient.ts";
import {
  DescribeDirectConnectGatewayAssociationProposalsRequest,
  DescribeDirectConnectGatewayAssociationProposalsResult,
} from "../models/index.ts";
import {
  deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand,
  serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand,
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

export type DescribeDirectConnectGatewayAssociationProposalsCommandInput = DescribeDirectConnectGatewayAssociationProposalsRequest;
export type DescribeDirectConnectGatewayAssociationProposalsCommandOutput = DescribeDirectConnectGatewayAssociationProposalsResult &
  __MetadataBearer;

export class DescribeDirectConnectGatewayAssociationProposalsCommand extends $Command<
  DescribeDirectConnectGatewayAssociationProposalsCommandInput,
  DescribeDirectConnectGatewayAssociationProposalsCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDirectConnectGatewayAssociationProposalsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeDirectConnectGatewayAssociationProposalsCommandInput,
    DescribeDirectConnectGatewayAssociationProposalsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeDirectConnectGatewayAssociationProposalsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDirectConnectGatewayAssociationProposalsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeDirectConnectGatewayAssociationProposalsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDirectConnectGatewayAssociationProposalsCommandOutput> {
    return deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
