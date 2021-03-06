
import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient.ts";
import { ActivityTask, PollForActivityTaskInput } from "../models/index.ts";
import {
  deserializeAws_json1_0PollForActivityTaskCommand,
  serializeAws_json1_0PollForActivityTaskCommand,
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

export type PollForActivityTaskCommandInput = PollForActivityTaskInput;
export type PollForActivityTaskCommandOutput = ActivityTask & __MetadataBearer;

export class PollForActivityTaskCommand extends $Command<
  PollForActivityTaskCommandInput,
  PollForActivityTaskCommandOutput,
  SWFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PollForActivityTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SWFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PollForActivityTaskCommandInput, PollForActivityTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: PollForActivityTaskInput.filterSensitiveLog,
      outputFilterSensitiveLog: ActivityTask.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PollForActivityTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0PollForActivityTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PollForActivityTaskCommandOutput> {
    return deserializeAws_json1_0PollForActivityTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
