
import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient.ts";
import { SendTaskHeartbeatInput, SendTaskHeartbeatOutput } from "../models/index.ts";
import {
  deserializeAws_json1_0SendTaskHeartbeatCommand,
  serializeAws_json1_0SendTaskHeartbeatCommand,
} from "../protocols/Aws_json1_0.ts";
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

export type SendTaskHeartbeatCommandInput = SendTaskHeartbeatInput;
export type SendTaskHeartbeatCommandOutput = SendTaskHeartbeatOutput & __MetadataBearer;

export class SendTaskHeartbeatCommand extends $Command<
  SendTaskHeartbeatCommandInput,
  SendTaskHeartbeatCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendTaskHeartbeatCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendTaskHeartbeatCommandInput, SendTaskHeartbeatCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: SendTaskHeartbeatInput.filterSensitiveLog,
      outputFilterSensitiveLog: SendTaskHeartbeatOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendTaskHeartbeatCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0SendTaskHeartbeatCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendTaskHeartbeatCommandOutput> {
    return deserializeAws_json1_0SendTaskHeartbeatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
