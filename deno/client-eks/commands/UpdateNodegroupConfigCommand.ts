
import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient.ts";
import { UpdateNodegroupConfigRequest, UpdateNodegroupConfigResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1UpdateNodegroupConfigCommand,
  serializeAws_restJson1UpdateNodegroupConfigCommand,
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

export type UpdateNodegroupConfigCommandInput = UpdateNodegroupConfigRequest;
export type UpdateNodegroupConfigCommandOutput = UpdateNodegroupConfigResponse & __MetadataBearer;

export class UpdateNodegroupConfigCommand extends $Command<
  UpdateNodegroupConfigCommandInput,
  UpdateNodegroupConfigCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateNodegroupConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateNodegroupConfigCommandInput, UpdateNodegroupConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdateNodegroupConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateNodegroupConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateNodegroupConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateNodegroupConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateNodegroupConfigCommandOutput> {
    return deserializeAws_restJson1UpdateNodegroupConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
