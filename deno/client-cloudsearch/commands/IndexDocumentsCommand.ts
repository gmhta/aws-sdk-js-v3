
import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient.ts";
import { IndexDocumentsRequest, IndexDocumentsResponse } from "../models/index.ts";
import {
  deserializeAws_queryIndexDocumentsCommand,
  serializeAws_queryIndexDocumentsCommand,
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

export type IndexDocumentsCommandInput = IndexDocumentsRequest;
export type IndexDocumentsCommandOutput = IndexDocumentsResponse & __MetadataBearer;

export class IndexDocumentsCommand extends $Command<
  IndexDocumentsCommandInput,
  IndexDocumentsCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: IndexDocumentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<IndexDocumentsCommandInput, IndexDocumentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: IndexDocumentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: IndexDocumentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: IndexDocumentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryIndexDocumentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<IndexDocumentsCommandOutput> {
    return deserializeAws_queryIndexDocumentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
