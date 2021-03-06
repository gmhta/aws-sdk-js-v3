
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { UploadServerCertificateRequest, UploadServerCertificateResponse } from "../models/index.ts";
import {
  deserializeAws_queryUploadServerCertificateCommand,
  serializeAws_queryUploadServerCertificateCommand,
} from "../protocols/Aws_query.ts";
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

export type UploadServerCertificateCommandInput = UploadServerCertificateRequest;
export type UploadServerCertificateCommandOutput = UploadServerCertificateResponse & __MetadataBearer;

export class UploadServerCertificateCommand extends $Command<
  UploadServerCertificateCommandInput,
  UploadServerCertificateCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UploadServerCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UploadServerCertificateCommandInput, UploadServerCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UploadServerCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UploadServerCertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UploadServerCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUploadServerCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadServerCertificateCommandOutput> {
    return deserializeAws_queryUploadServerCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
