
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { GetGameSessionLogUrlInput, GetGameSessionLogUrlOutput } from "../models/index.ts";
import {
  deserializeAws_json1_1GetGameSessionLogUrlCommand,
  serializeAws_json1_1GetGameSessionLogUrlCommand,
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

export type GetGameSessionLogUrlCommandInput = GetGameSessionLogUrlInput;
export type GetGameSessionLogUrlCommandOutput = GetGameSessionLogUrlOutput & __MetadataBearer;

export class GetGameSessionLogUrlCommand extends $Command<
  GetGameSessionLogUrlCommandInput,
  GetGameSessionLogUrlCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetGameSessionLogUrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetGameSessionLogUrlCommandInput, GetGameSessionLogUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetGameSessionLogUrlInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetGameSessionLogUrlOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetGameSessionLogUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetGameSessionLogUrlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGameSessionLogUrlCommandOutput> {
    return deserializeAws_json1_1GetGameSessionLogUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
