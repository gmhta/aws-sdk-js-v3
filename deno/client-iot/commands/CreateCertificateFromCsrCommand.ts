
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { CreateCertificateFromCsrRequest, CreateCertificateFromCsrResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1CreateCertificateFromCsrCommand,
  serializeAws_restJson1CreateCertificateFromCsrCommand,
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

export type CreateCertificateFromCsrCommandInput = CreateCertificateFromCsrRequest;
export type CreateCertificateFromCsrCommandOutput = CreateCertificateFromCsrResponse & __MetadataBearer;

export class CreateCertificateFromCsrCommand extends $Command<
  CreateCertificateFromCsrCommandInput,
  CreateCertificateFromCsrCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCertificateFromCsrCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCertificateFromCsrCommandInput, CreateCertificateFromCsrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateCertificateFromCsrRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCertificateFromCsrResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCertificateFromCsrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateCertificateFromCsrCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCertificateFromCsrCommandOutput> {
    return deserializeAws_restJson1CreateCertificateFromCsrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
