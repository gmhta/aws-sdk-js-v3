
import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient.ts";
import { PutLifecycleHookAnswer, PutLifecycleHookType } from "../models/index.ts";
import {
  deserializeAws_queryPutLifecycleHookCommand,
  serializeAws_queryPutLifecycleHookCommand,
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

export type PutLifecycleHookCommandInput = PutLifecycleHookType;
export type PutLifecycleHookCommandOutput = PutLifecycleHookAnswer & __MetadataBearer;

export class PutLifecycleHookCommand extends $Command<
  PutLifecycleHookCommandInput,
  PutLifecycleHookCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutLifecycleHookCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutLifecycleHookCommandInput, PutLifecycleHookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: PutLifecycleHookType.filterSensitiveLog,
      outputFilterSensitiveLog: PutLifecycleHookAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutLifecycleHookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutLifecycleHookCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutLifecycleHookCommandOutput> {
    return deserializeAws_queryPutLifecycleHookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
