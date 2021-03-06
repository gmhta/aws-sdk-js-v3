
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client.ts";
import { GetBucketRequestPaymentOutput, GetBucketRequestPaymentRequest } from "../models/index.ts";
import {
  deserializeAws_restXmlGetBucketRequestPaymentCommand,
  serializeAws_restXmlGetBucketRequestPaymentCommand,
} from "../protocols/Aws_restXml.ts";
import { getBucketEndpointPlugin } from "../../middleware-bucket-endpoint/mod.ts";
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

export type GetBucketRequestPaymentCommandInput = GetBucketRequestPaymentRequest;
export type GetBucketRequestPaymentCommandOutput = GetBucketRequestPaymentOutput & __MetadataBearer;

export class GetBucketRequestPaymentCommand extends $Command<
  GetBucketRequestPaymentCommandInput,
  GetBucketRequestPaymentCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBucketRequestPaymentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBucketRequestPaymentCommandInput, GetBucketRequestPaymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetBucketRequestPaymentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBucketRequestPaymentOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBucketRequestPaymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetBucketRequestPaymentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketRequestPaymentCommandOutput> {
    return deserializeAws_restXmlGetBucketRequestPaymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
