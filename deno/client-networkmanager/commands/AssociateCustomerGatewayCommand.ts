
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient.ts";
import { AssociateCustomerGatewayRequest, AssociateCustomerGatewayResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1AssociateCustomerGatewayCommand,
  serializeAws_restJson1AssociateCustomerGatewayCommand,
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

export type AssociateCustomerGatewayCommandInput = AssociateCustomerGatewayRequest;
export type AssociateCustomerGatewayCommandOutput = AssociateCustomerGatewayResponse & __MetadataBearer;

export class AssociateCustomerGatewayCommand extends $Command<
  AssociateCustomerGatewayCommandInput,
  AssociateCustomerGatewayCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateCustomerGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateCustomerGatewayCommandInput, AssociateCustomerGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: AssociateCustomerGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateCustomerGatewayResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateCustomerGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateCustomerGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateCustomerGatewayCommandOutput> {
    return deserializeAws_restJson1AssociateCustomerGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
