
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { ListProvisioningArtifactsInput, ListProvisioningArtifactsOutput } from "../models/index.ts";
import {
  deserializeAws_json1_1ListProvisioningArtifactsCommand,
  serializeAws_json1_1ListProvisioningArtifactsCommand,
} from "../protocols/Aws_json1_1.ts";
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

export type ListProvisioningArtifactsCommandInput = ListProvisioningArtifactsInput;
export type ListProvisioningArtifactsCommandOutput = ListProvisioningArtifactsOutput & __MetadataBearer;

export class ListProvisioningArtifactsCommand extends $Command<
  ListProvisioningArtifactsCommandInput,
  ListProvisioningArtifactsCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProvisioningArtifactsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProvisioningArtifactsCommandInput, ListProvisioningArtifactsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListProvisioningArtifactsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListProvisioningArtifactsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProvisioningArtifactsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListProvisioningArtifactsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProvisioningArtifactsCommandOutput> {
    return deserializeAws_json1_1ListProvisioningArtifactsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
