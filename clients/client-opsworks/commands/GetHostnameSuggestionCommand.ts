import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { GetHostnameSuggestionRequest, GetHostnameSuggestionResult } from "../models/index";
import {
  deserializeAws_json1_1GetHostnameSuggestionCommand,
  serializeAws_json1_1GetHostnameSuggestionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetHostnameSuggestionCommandInput = GetHostnameSuggestionRequest;
export type GetHostnameSuggestionCommandOutput = GetHostnameSuggestionResult & __MetadataBearer;

export class GetHostnameSuggestionCommand extends $Command<
  GetHostnameSuggestionCommandInput,
  GetHostnameSuggestionCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetHostnameSuggestionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetHostnameSuggestionCommandInput, GetHostnameSuggestionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetHostnameSuggestionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetHostnameSuggestionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetHostnameSuggestionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetHostnameSuggestionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHostnameSuggestionCommandOutput> {
    return deserializeAws_json1_1GetHostnameSuggestionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
