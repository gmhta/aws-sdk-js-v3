
import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient.ts";
import { DescribeIdentityPoolUsageRequest, DescribeIdentityPoolUsageResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1DescribeIdentityPoolUsageCommand,
  serializeAws_restJson1DescribeIdentityPoolUsageCommand,
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

export type DescribeIdentityPoolUsageCommandInput = DescribeIdentityPoolUsageRequest;
export type DescribeIdentityPoolUsageCommandOutput = DescribeIdentityPoolUsageResponse & __MetadataBearer;

export class DescribeIdentityPoolUsageCommand extends $Command<
  DescribeIdentityPoolUsageCommandInput,
  DescribeIdentityPoolUsageCommandOutput,
  CognitoSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeIdentityPoolUsageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeIdentityPoolUsageCommandInput, DescribeIdentityPoolUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeIdentityPoolUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeIdentityPoolUsageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeIdentityPoolUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeIdentityPoolUsageCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeIdentityPoolUsageCommandOutput> {
    return deserializeAws_restJson1DescribeIdentityPoolUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
