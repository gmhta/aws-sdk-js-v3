
import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient.ts";
import { ListCachePoliciesRequest, ListCachePoliciesResult } from "../models/index.ts";
import {
  deserializeAws_restXmlListCachePoliciesCommand,
  serializeAws_restXmlListCachePoliciesCommand,
} from "../protocols/Aws_restXml.ts";
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

export type ListCachePoliciesCommandInput = ListCachePoliciesRequest;
export type ListCachePoliciesCommandOutput = ListCachePoliciesResult & __MetadataBearer;

export class ListCachePoliciesCommand extends $Command<
  ListCachePoliciesCommandInput,
  ListCachePoliciesCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCachePoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCachePoliciesCommandInput, ListCachePoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListCachePoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCachePoliciesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCachePoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListCachePoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCachePoliciesCommandOutput> {
    return deserializeAws_restXmlListCachePoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
