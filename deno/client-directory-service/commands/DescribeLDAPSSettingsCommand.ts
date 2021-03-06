
import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient.ts";
import { DescribeLDAPSSettingsRequest, DescribeLDAPSSettingsResult } from "../models/index.ts";
import {
  deserializeAws_json1_1DescribeLDAPSSettingsCommand,
  serializeAws_json1_1DescribeLDAPSSettingsCommand,
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

export type DescribeLDAPSSettingsCommandInput = DescribeLDAPSSettingsRequest;
export type DescribeLDAPSSettingsCommandOutput = DescribeLDAPSSettingsResult & __MetadataBearer;

export class DescribeLDAPSSettingsCommand extends $Command<
  DescribeLDAPSSettingsCommandInput,
  DescribeLDAPSSettingsCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLDAPSSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLDAPSSettingsCommandInput, DescribeLDAPSSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeLDAPSSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLDAPSSettingsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLDAPSSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeLDAPSSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLDAPSSettingsCommandOutput> {
    return deserializeAws_json1_1DescribeLDAPSSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
