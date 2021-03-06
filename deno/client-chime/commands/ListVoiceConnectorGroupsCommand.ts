
import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { ListVoiceConnectorGroupsRequest, ListVoiceConnectorGroupsResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1ListVoiceConnectorGroupsCommand,
  serializeAws_restJson1ListVoiceConnectorGroupsCommand,
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

export type ListVoiceConnectorGroupsCommandInput = ListVoiceConnectorGroupsRequest;
export type ListVoiceConnectorGroupsCommandOutput = ListVoiceConnectorGroupsResponse & __MetadataBearer;

export class ListVoiceConnectorGroupsCommand extends $Command<
  ListVoiceConnectorGroupsCommandInput,
  ListVoiceConnectorGroupsCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListVoiceConnectorGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVoiceConnectorGroupsCommandInput, ListVoiceConnectorGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListVoiceConnectorGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListVoiceConnectorGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVoiceConnectorGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListVoiceConnectorGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVoiceConnectorGroupsCommandOutput> {
    return deserializeAws_restJson1ListVoiceConnectorGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
