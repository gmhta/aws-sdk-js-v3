
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient.ts";
import { Concurrency, PutFunctionConcurrencyRequest } from "../models/index.ts";
import {
  deserializeAws_restJson1PutFunctionConcurrencyCommand,
  serializeAws_restJson1PutFunctionConcurrencyCommand,
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

export type PutFunctionConcurrencyCommandInput = PutFunctionConcurrencyRequest;
export type PutFunctionConcurrencyCommandOutput = Concurrency & __MetadataBearer;

export class PutFunctionConcurrencyCommand extends $Command<
  PutFunctionConcurrencyCommandInput,
  PutFunctionConcurrencyCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutFunctionConcurrencyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutFunctionConcurrencyCommandInput, PutFunctionConcurrencyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: PutFunctionConcurrencyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Concurrency.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutFunctionConcurrencyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutFunctionConcurrencyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutFunctionConcurrencyCommandOutput> {
    return deserializeAws_restJson1PutFunctionConcurrencyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
