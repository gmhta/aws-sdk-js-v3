
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client.ts";
import { ListTrafficPolicyInstancesByPolicyRequest, ListTrafficPolicyInstancesByPolicyResponse } from "../models/index.ts";
import {
  deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand,
  serializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand,
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

export type ListTrafficPolicyInstancesByPolicyCommandInput = ListTrafficPolicyInstancesByPolicyRequest;
export type ListTrafficPolicyInstancesByPolicyCommandOutput = ListTrafficPolicyInstancesByPolicyResponse &
  __MetadataBearer;

export class ListTrafficPolicyInstancesByPolicyCommand extends $Command<
  ListTrafficPolicyInstancesByPolicyCommandInput,
  ListTrafficPolicyInstancesByPolicyCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTrafficPolicyInstancesByPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTrafficPolicyInstancesByPolicyCommandInput, ListTrafficPolicyInstancesByPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListTrafficPolicyInstancesByPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTrafficPolicyInstancesByPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListTrafficPolicyInstancesByPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTrafficPolicyInstancesByPolicyCommandOutput> {
    return deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
